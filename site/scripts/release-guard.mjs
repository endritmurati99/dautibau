import fs from "node:fs";
import path from "node:path";

const outputDir = path.resolve(process.env.ELEVENTY_OUTPUT_DIR || "dist");
const siteUrlRaw = (process.env.SITE_URL || "").trim().replace(/\/$/, "");
const siteEnv = (process.env.SITE_ENV || "").trim();
const failures = [];

function fail(message) {
  failures.push(message);
}

function walk(directory) {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(file) : [file];
  });
}

function read(relativePath) {
  const file = path.join(outputDir, relativePath);
  if (!fs.existsSync(file)) {
    fail(`${relativePath} fehlt im Production-Build`);
    return "";
  }
  return fs.readFileSync(file, "utf8");
}

if (siteEnv !== "production") {
  fail('SITE_ENV muss für einen Release exakt "production" sein');
}

let siteUrl;
try {
  siteUrl = new URL(siteUrlRaw);
} catch {
  fail("SITE_URL fehlt oder ist keine gültige absolute URL");
}

if (siteUrl) {
  const forbiddenHosts = ["trycloudflare.com", "github.io", "localhost", "127.0.0.1"];
  if (siteUrl.protocol !== "https:") fail("SITE_URL muss HTTPS verwenden");
  if (siteUrl.username || siteUrl.password) fail("SITE_URL darf keine Zugangsdaten enthalten");
  if (siteUrl.search || siteUrl.hash) fail("SITE_URL darf weder Query-String noch Fragment enthalten");
  if (forbiddenHosts.some((host) => siteUrl.hostname === host || siteUrl.hostname.endsWith(`.${host}`))) {
    fail(`SITE_URL verweist auf einen nicht zulässigen Preview-Host: ${siteUrl.hostname}`);
  }
}

const htmlFiles = walk(outputDir).filter((file) => file.endsWith(".html"));
if (htmlFiles.length !== 15) fail(`15 HTML-Dateien einschließlich 404 erwartet, ${htmlFiles.length} gefunden`);

const forbiddenOutput = [
  ["Preview-noindex", /<meta[^>]+name=["']robots["'][^>]+noindex/i],
  ["temporärer Cloudflare-Host", /https?:\/\/[^"'\s<]*trycloudflare\.com/i],
  ["veralteter GitHub-Pages-Host", /https?:\/\/[^"'\s<]*github\.io/i],
  ["externer Google-Font-Host", /fonts\.(?:googleapis|gstatic)\.com/i],
  ["sichtbarer Platzhalter", /Projektfoto folgt|Kundenstimme folgt|Foto folgt|Karte folgt|Formular folgt|E-Mail folgt|Angabe folgt/i],
  ["unfertige Rechtsseite", /Interner Prüfstand|nicht zur Veröffentlichung freigegeben|Vor Veröffentlichung|noch zu ergänzen|Prüfstand:/i],
];

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8");
  const rel = path.relative(outputDir, file);

  for (const [label, pattern] of forbiddenOutput) {
    if (pattern.test(html)) fail(`${label} gefunden in ${rel}`);
  }

  const robots = html.match(/<meta[^>]+name=["']robots["'][^>]+content=["']([^"']+)["']/i)?.[1];
  if (robots !== "index,follow") fail(`${rel}: Production-Robots-Meta fehlt oder ist falsch`);

  const canonicalRaw = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i)?.[1];
  if (!canonicalRaw) {
    fail(`${rel}: Canonical fehlt`);
  } else if (siteUrl) {
    try {
      const canonical = new URL(canonicalRaw);
      if (canonical.origin !== siteUrl.origin) fail(`${rel}: Canonical verwendet den falschen Origin`);
      const basePath = siteUrl.pathname.replace(/\/$/, "");
      if (basePath && !canonical.pathname.startsWith(`${basePath}/`) && canonical.pathname !== basePath) {
        fail(`${rel}: Canonical liegt außerhalb des konfigurierten Basispfads`);
      }
    } catch {
      fail(`${rel}: Canonical ist keine gültige absolute URL`);
    }
  }

  const ogImageRaw = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i)?.[1];
  if (!ogImageRaw) {
    fail(`${rel}: absolutes og:image fehlt`);
  } else if (siteUrl) {
    try {
      const ogImage = new URL(ogImageRaw);
      if (ogImage.origin !== siteUrl.origin) fail(`${rel}: og:image verwendet den falschen Origin`);
    } catch {
      fail(`${rel}: og:image ist keine gültige absolute URL`);
    }
  }
}

const robotsTxt = read("robots.txt");
const sitemapXml = read("sitemap.xml");
if (!/User-agent:\s*\*/i.test(robotsTxt) || !/Allow:\s*\//i.test(robotsTxt) || /Disallow:\s*\//i.test(robotsTxt)) {
  fail("robots.txt enthält nicht den erwarteten Production-Vertrag");
}
if (siteUrlRaw && !robotsTxt.includes(`Sitemap: ${siteUrlRaw}/sitemap.xml`)) {
  fail("robots.txt verweist nicht auf die konfigurierte Sitemap");
}

const sitemapUrls = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
if (sitemapUrls.length !== 14) fail(`14 Sitemap-URLs erwartet, ${sitemapUrls.length} gefunden`);
if (siteUrlRaw && sitemapUrls.some((url) => !url.startsWith(`${siteUrlRaw}/`) && url !== siteUrlRaw)) {
  fail("Sitemap enthält URLs außerhalb von SITE_URL");
}

if (failures.length) {
  console.error("\n[release-guard] BLOCKED\n" + failures.map((item) => `- ${item}`).join("\n") + "\n");
  process.exit(1);
}

console.log(`[release-guard] OK: ${htmlFiles.length} HTML-Dateien und ${sitemapUrls.length} Sitemap-URLs für ${siteUrlRaw} validiert.`);
