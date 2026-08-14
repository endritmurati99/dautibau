import fs from "node:fs";
import path from "node:path";

const mode = process.argv[2] || "preview";
if (!["preview", "production"].includes(mode)) {
  throw new Error("Usage: node scripts/verify-site.mjs [preview|production]");
}

const root = path.resolve("dist");
const prefix = "/dautibau";
const failures = [];
const files = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else files.push(full);
  }
}

function fail(message) {
  failures.push(message);
}

function existsForUrl(raw, fromFile) {
  const clean = raw.split("#")[0].split("?")[0];
  if (!clean || /^(?:https?:|tel:|mailto:|data:|javascript:)/i.test(clean)) return true;
  let candidate;
  if (clean.startsWith("/")) {
    const withoutPrefix = clean === prefix ? "/" : clean.startsWith(`${prefix}/`) ? clean.slice(prefix.length) : clean;
    candidate = path.join(root, withoutPrefix);
  } else {
    candidate = path.resolve(path.dirname(fromFile), clean);
  }
  if (candidate.endsWith(path.sep)) candidate = path.join(candidate, "index.html");
  if (fs.existsSync(candidate) && fs.statSync(candidate).isDirectory()) candidate = path.join(candidate, "index.html");
  return fs.existsSync(candidate);
}

if (!fs.existsSync(root)) throw new Error("dist/ does not exist; run the build first");
walk(root);
const htmlFiles = files.filter((file) => file.endsWith(".html"));
if (htmlFiles.length !== 15) fail(`expected 15 HTML files including 404, found ${htmlFiles.length}`);

let refs = 0;
let serviceProofs = 0;
for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8");
  const rel = path.relative(root, file);
  const robots = html.match(/<meta name="robots" content="([^"]+)">/)?.[1];
  const canonical = html.match(/<link rel="canonical" href="([^"]+)">/)?.[1];

  if (mode === "preview") {
    if (robots !== "noindex,nofollow,noarchive") fail(`${rel}: preview robots directive missing`);
    if (canonical) fail(`${rel}: preview must not emit canonical ${canonical}`);
  } else {
    if (robots !== "index,follow") fail(`${rel}: production robots directive missing`);
    if (!canonical?.startsWith("https://")) fail(`${rel}: production canonical missing or invalid`);
    if (!/<meta property="og:image" content="https:\/\//.test(html)) fail(`${rel}: production og:image missing`);
  }

  if (/fonts\.(?:googleapis|gstatic)\.com/i.test(html)) fail(`${rel}: external Google Fonts reference found`);
  if (/Projektfoto folgt|Foto folgt|Karte folgt|Formular folgt|Jahrelange Erfahrung|Festpreis|Termine, die halten|bewohnbar/i.test(html)) {
    fail(`${rel}: unfinished or unverified copy found`);
  }

  for (const match of html.matchAll(/\s(?:href|src)="([^"]+)"/g)) {
    refs += 1;
    if (!existsForUrl(match[1], file)) fail(`${rel}: broken internal reference ${match[1]}`);
  }

  if (/^leistungen\/(?:trockenbau|decken|spachtel|boden|daemmung|renovierung)\/index\.html$/.test(rel.replaceAll(path.sep, "/"))) {
    if (!html.includes('class="service-proof"') || !html.includes("Echtes Projektfoto")) {
      fail(`${rel}: real service proof image missing`);
    } else serviceProofs += 1;
  }
}

if (serviceProofs !== 6) fail(`expected real project proof on 6 service pages, found ${serviceProofs}`);

const contact = fs.readFileSync(path.join(root, "kontakt", "index.html"), "utf8");
if (/<form\b/i.test(contact) || /disabled/i.test(contact)) fail("contact: dead form or disabled UI remains");
if (!contact.includes("OpenStreetMap") || !contact.includes("WhatsApp-Anfrage starten")) fail("contact: direct request flow incomplete");

for (const relative of ["index.html", path.join("leistungen", "index.html")]) {
  const page = fs.readFileSync(path.join(root, relative), "utf8");
  const serviceCardLinks = [...page.matchAll(/<a class="svc-card"/g)].length;
  if (serviceCardLinks !== 6) fail(`${relative}: expected exactly one link for each of 6 service cards, found ${serviceCardLinks}`);
  if (/class="stretch"/.test(page)) fail(`${relative}: duplicate stretch links remain in service cards`);
}

const mainJs = fs.readFileSync(path.join(root, "assets", "main.js"), "utf8");
if (!mainJs.includes('e.key === "Escape"') || !mainJs.includes("toggle.focus()")) {
  fail("mobile navigation: Escape close or focus return is missing");
}
if (/track\.setAttribute\("aria-hidden",\s*"false"\)/.test(mainJs)) {
  fail("marquee: decorative duplicate is exposed to assistive technology");
}

const privacy = fs.readFileSync(path.join(root, "datenschutz", "index.html"), "utf8");
if (!privacy.includes("keine Analyse-, Werbe-, Tracking-") || !privacy.includes("extern geladenen Webfonts")) {
  fail("privacy: current privacy-by-design implementation is not documented");
}
if (!privacy.includes("Projektfotos") || !privacy.includes("Namensschilder")) {
  fail("privacy: WhatsApp photo intake is not documented precisely enough");
}

for (const font of [
  "fraunces-normal-400.woff2",
  "fraunces-normal-500.woff2",
  "fraunces-normal-600.woff2",
  "inter-normal-400.woff2",
  "inter-normal-500.woff2",
  "inter-normal-600.woff2",
  "space-mono-normal-400.woff2",
  "space-mono-normal-700.woff2",
]) {
  if (!fs.existsSync(path.join(root, "assets", "fonts", font))) fail(`font missing: ${font}`);
}
if (!fs.existsSync(path.join(root, "assets", "social-card.jpg"))) fail("social-card.jpg missing");
if (!fs.existsSync(path.join(root, "404.html"))) fail("404.html missing");

const robotsTxt = fs.readFileSync(path.join(root, "robots.txt"), "utf8");
const sitemap = fs.readFileSync(path.join(root, "sitemap.xml"), "utf8");
if (mode === "preview") {
  if (!/Disallow:\s*\//.test(robotsTxt)) fail("preview robots.txt must disallow crawling");
  if (/<url>/.test(sitemap)) fail("preview sitemap must not publish URLs");
} else {
  if (!/Allow:\s*\//.test(robotsTxt) || !/Sitemap:\s*https:\/\//.test(robotsTxt)) fail("production robots.txt incomplete");
  const sitemapUrls = [...sitemap.matchAll(/<url>/g)].length;
  if (sitemapUrls !== 14) fail(`expected 14 production sitemap URLs, found ${sitemapUrls}`);
}

if (failures.length) {
  console.error(JSON.stringify({ mode, html: htmlFiles.length, refs, serviceProofs, failures }, null, 2));
  process.exit(1);
}

console.log(JSON.stringify({ mode, html: htmlFiles.length, refs, broken: 0, serviceProofs, externalGoogleFonts: 0 }, null, 2));
