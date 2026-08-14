import { chromium } from "playwright-core";
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(__dirname, "dist");
const SHOT_DIR = path.resolve(__dirname, "../screenshots/build");
const PORT = 8790;
const PREFIX = "/dautibau";

fs.mkdirSync(SHOT_DIR, { recursive: true });

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

// Serve dist under /dautibau/ to mirror GitHub Pages subpath.
const server = http.createServer((req, res) => {
  let urlPath = decodeURIComponent(req.url.split("?")[0]);
  if (urlPath === PREFIX) urlPath = PREFIX + "/";
  if (!urlPath.startsWith(PREFIX + "/")) {
    res.writeHead(404); res.end("out of prefix"); return;
  }
  let rel = urlPath.slice(PREFIX.length);
  let filePath = path.join(DIST, rel);
  if (filePath.endsWith("/")) filePath = path.join(filePath, "index.html");
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    const alt = path.join(filePath, "index.html");
    if (fs.existsSync(alt)) filePath = alt;
    else { res.writeHead(404); res.end("404"); return; }
  }
  const ext = path.extname(filePath);
  res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
  fs.createReadStream(filePath).pipe(res);
});

const results = [];
function check(name, pass, detail = "") {
  results.push({ name, pass, detail });
  console.log(`${pass ? "PASS" : "FAIL"}  ${name}${detail ? "  :: " + detail : ""}`);
}

await new Promise((r) => server.listen(PORT, r));
const base = `http://localhost:${PORT}${PREFIX}`;

const browser = await chromium.launch({ headless: true });

// Collect console messages per page load.
async function loadAndAudit(context, url, label, widths) {
  const page = await context.newPage();
  const errors = [];
  const warnings = [];
  page.on("console", (msg) => {
    const t = msg.type();
    if (t === "error") errors.push(msg.text());
    if (t === "warning") warnings.push(msg.text());
  });
  page.on("pageerror", (e) => errors.push("pageerror: " + e.message));
  page.on("requestfailed", (req) => {
    // ignore favicon/font opportunistic failures only if truly external; report all here
    errors.push("requestfailed: " + req.url() + " " + (req.failure()?.errorText || ""));
  });

  const overflow = {};
  for (const w of widths) {
    await page.setViewportSize({ width: w, height: w < 500 ? 844 : 900 });
    const resp = await page.goto(url, { waitUntil: "networkidle" });
    check(`${label} @${w} loads 200`, resp && resp.status() === 200, `status ${resp && resp.status()}`);
    // Scroll through the full height so IntersectionObserver reveals fire,
    // exactly as they do for a real user scrolling the page.
    await page.evaluate(async () => {
      const step = window.innerHeight * 0.8;
      const max = document.documentElement.scrollHeight;
      for (let y = 0; y <= max; y += step) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 90));
      }
      window.scrollTo(0, 0);
      await new Promise((r) => setTimeout(r, 300));
    });
    await page.waitForTimeout(300);
    const metrics = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      innerWidth: window.innerWidth,
    }));
    overflow[w] = metrics;
    const shot = path.join(SHOT_DIR, `${label}-${w}.png`);
    await page.screenshot({ path: shot, fullPage: true });
    console.log(`  shot: ${shot}`);
  }

  return { page, errors, warnings, overflow };
}

const context = await browser.newContext();

// 1) Homepage
const home = await loadAndAudit(context, `${base}/`, "home", [1366, 390]);
// 2) One service detail
const svc = await loadAndAudit(context, `${base}/leistungen/spachtel/`, "leistung-spachtel", [1366, 390]);
// 3) Kontakt
const kontakt = await loadAndAudit(context, `${base}/kontakt/`, "kontakt", [1366, 390]);

// Console assertions
for (const [label, r] of [["home", home], ["leistung-spachtel", svc], ["kontakt", kontakt]]) {
  check(`${label} zero console errors`, r.errors.length === 0, r.errors.join(" | ") || "none");
  check(`${label} zero console warnings`, r.warnings.length === 0, r.warnings.join(" | ") || "none");
}

// Horizontal overflow at 390
for (const [label, r] of [["home", home], ["leistung-spachtel", svc], ["kontakt", kontakt]]) {
  const m = r.overflow[390];
  check(`${label} no horizontal overflow @390`, m.scrollWidth <= m.innerWidth, `scrollWidth=${m.scrollWidth} innerWidth=${m.innerWidth}`);
}

// Link crawl: gather nav links + service teaser links from homepage & leistungen, assert each resolves.
const crawlPage = await context.newPage();
await crawlPage.goto(`${base}/`, { waitUntil: "domcontentloaded" });
let links = await crawlPage.$$eval("a[href]", (as) =>
  as.map((a) => a.getAttribute("href")).filter((h) => h && h.startsWith("/dautibau/"))
);
await crawlPage.goto(`${base}/leistungen/`, { waitUntil: "domcontentloaded" });
const links2 = await crawlPage.$$eval("a[href]", (as) =>
  as.map((a) => a.getAttribute("href")).filter((h) => h && h.startsWith("/dautibau/"))
);
links = [...new Set([...links, ...links2])];

let broken = [];
for (const href of links) {
  const target = `http://localhost:${PORT}${href}`;
  const resp = await crawlPage.goto(target, { waitUntil: "domcontentloaded" }).catch(() => null);
  if (!resp || resp.status() >= 400) broken.push(`${href} -> ${resp ? resp.status() : "no response"}`);
}
check(`all ${links.length} internal links resolve (no 404)`, broken.length === 0, broken.join(" | ") || "none");

await browser.close();
server.close();

const failed = results.filter((r) => !r.pass);
console.log("\n===== SUMMARY =====");
console.log(`${results.length - failed.length}/${results.length} checks passed`);
if (failed.length) {
  console.log("FAILURES:");
  failed.forEach((f) => console.log("  - " + f.name + " :: " + f.detail));
  process.exit(1);
} else {
  console.log("ALL GREEN");
}
