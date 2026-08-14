# Dautibau — Final Verification Record

**Date:** 2026-08-01
**Artifact root:** `site/`
**Artifact type:** final temporary preview candidate
**Release status:** not deployed; production blocked pending owner/legal facts

## Commands executed

```bash
npm run build
npm run verify
```

Result:

```json
{
  "mode": "preview",
  "html": 15,
  "refs": 831,
  "broken": 0,
  "serviceProofs": 6,
  "externalGoogleFonts": 0
}
```

## Public preview verification

Last verified temporary URL:

`https://factor-life-dialog-instructors.trycloudflare.com/dautibau/`

Probe result:

```text
routes checked:       15
HTTP 200:             15
preview noindex:      15/15
assets checked:       6
```

Assets checked over unauthenticated public HTTPS:

- `/assets/style.css`
- `/assets/main.js`
- `/assets/projects/project-30.webp`
- `/assets/projects/project-03.webp`
- `/assets/projects/project-15.webp`
- `/assets/social-card.jpg`

The tunnel is temporary and may expire. Do not treat this URL as the production domain or a durable deployment.

## Browser checks

### Desktop

- Viewport: 1440×1000.
- Hero composition, logo and CTA hierarchy reviewed.
- Service-card conversion to one full-card link did not cause a visual regression.
- Three homepage proof images visibly loaded and decoded after entering the viewport.
- Captions and image crops were visible.
- Footer uses neutral contact wording.

### Mobile

- Viewport: 390×844.
- Horizontal overflow: 0 px.
- Hero heading, CTA stack and menu button fit the viewport.
- Sticky contact bar becomes visible after scroll.
- Sticky bar width: 390 px; height: approximately 55 px.
- Call and WhatsApp actions are approximately 195×55 px each.
- Mobile menu moves focus to `Start` when opened.
- Escape closes the menu, restores `aria-expanded=false`, hides the navigation and returns focus to the menu button.

### Lazy-loading note

A hidden remote Chrome tab did not initially trigger below-fold native lazy loading during a stitched full-page capture. Direct asset fetches returned HTTP 200. After the proof section was brought into view and the hidden-tab limitation was bypassed for QA, all three project images decoded and were visibly rendered. This was a QA-environment artifact, not a missing public asset.

## Production release-guard matrix

```text
missing SITE_URL                         BLOCKED (expected)
trycloudflare.com as SITE_URL            BLOCKED (expected)
current incomplete legal pages           BLOCKED (expected)
disposable sanitized positive fixture    PASSED: 15 HTML / 14 sitemap URLs
injected noindex negative fixture         BLOCKED (expected)
```

## Checksums

```text
3232b7d6cb9e8c9fcbc7b85aa8b33bee453139c2eb6c6cb5fa69679f6db166c5  site/dist/index.html
d7e82f9ddf234c09d55fa1b6d8903e68bbd8612cb4b26c049019cfa5936561ae  site/scripts/release-guard.mjs
f571883193dc08eb14a69e43929361e330b1b5bb48c0c08c31f37548451f8cb6  site/scripts/verify-site.mjs
749fec9a603ffd245c9d579b0a4a95fec7561c6da890203eeafd1380712448eb  site/src/assets/main.js
b653f9d443e814297c731ce02a35fa070c34e89f0e73032af3d50cb5a1e0978c  site/src/assets/style.css
ca2f05a701af2b99be0e5be35d1d0eb910755153285b1ee04e4acddb5d90104a  site/src/assets/social-card.jpg
```

## Publication decision

Do not commit, push, deploy, remove legal review warnings or set a production `SITE_URL` until the owner explicitly approves the applicable action and supplies the verified release facts listed in `PRODUCTION-READINESS.md`.
