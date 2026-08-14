# DautiBau website preview

This repository stores the Eleventy source for the current DautiBau design preview.
GitHub Pages builds `site/` and publishes `site/dist/` with `noindex` preview
directives. This is not the legally approved production release; the remaining
release requirements are tracked in `PRODUCTION-READINESS.md`.

Live preview: https://endritmurati99.github.io/dautibau/

```bash
cd site
npm ci
npm run build
npm run verify
```
