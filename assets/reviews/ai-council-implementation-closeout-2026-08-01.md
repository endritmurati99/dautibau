# Dautibau — AI Council Implementation Closeout

**Date:** 2026-08-01
**Artifact:** improved Eleventy preview build
**Reviewers:** Claude Opus 5 High, GPT-5.6 Sol Pro, direct source/build/browser verification by Lux
**Status:** implementation complete; production release intentionally blocked
**Legal status:** issue spotting only, not legal advice or approval

## Outcome

The accepted editorial-industrial design was preserved. Verified findings from the first council review were implemented, the resulting preview was reviewed again by Claude and GPT, and the strongest shared remaining code-safe recommendation was implemented as a fail-closed production release guard.

No commit, push or deployment was performed.

## First implementation pass

Implemented and verified:

- Central service data for six service routes.
- Real Dautibau project proof on all six service detail pages.
- Thirty optimized WebP derivatives; raw originals remain separate.
- Gallery and reference pages using real project imagery.
- Direct phone/WhatsApp contact flow; dead form and map placeholder removed.
- Original Dautibau logo preserved without redrawing.
- Native scrolling restored; no wheel/touch interception.
- Unverified guarantees, placeholders and overbroad claims removed or neutralized.
- Preview/production metadata split.
- Local fonts; no Google Font network dependency.
- Open Graph image, route metadata, structured data, robots, sitemap and 404 page.
- Updated Impressum and Datenschutz structure with unresolved operator facts visibly identified rather than invented.
- Automated preview verification.

## Second Claude/GPT council result

Both reviewers independently selected the same highest-value remaining code-safe change:

> Add a fail-closed post-build production release guard that rejects missing or unsafe production configuration, preview indexing directives, wrong canonical hosts and incomplete release artifacts.

Additional verified issues from the council were also corrected where safe:

- Duplicate/overlaid links in service cards were replaced by exactly one full-card link.
- Mobile menu state, Escape handling, deterministic first-link focus, focus return and desktop breakpoint reset were added.
- Decorative marquee duplication remains hidden from assistive technology.
- Footer copy was neutralized.
- WhatsApp photo intake and data-minimization guidance were made explicit in the privacy notice.
- Copyright year is dynamic.

## Release guard contract

`site/scripts/release-guard.mjs` rejects a production release when any of the following is true:

- `SITE_ENV` is not exactly `production`.
- `SITE_URL` is absent or invalid.
- Production URL is non-HTTPS or contains credentials, query or fragment.
- Production host is `trycloudflare.com`, GitHub Pages, localhost or loopback.
- Any production HTML contains `noindex`.
- Any canonical is missing, not absolute, uses another origin or leaves the configured base path.
- `og:image` is missing, invalid or uses another origin.
- Preview/legal blocker text or visible placeholders remain.
- A temporary Cloudflare/GitHub host or external Google Font host remains in output.
- Production `robots.txt` or sitemap violates the contract.
- Build does not contain 15 HTML files or sitemap does not contain 14 URLs.

`npm run build:production` now runs the release guard after generation.

## Executed guard tests

| Test | Expected | Result |
|---|---|---|
| Preview build and verifier | pass | passed |
| Production without `SITE_URL` | block | blocked |
| Production with a `trycloudflare.com` URL | block | blocked |
| Production with current incomplete legal pages | block | blocked |
| Controlled sanitized disposable fixture | pass | passed: 15 HTML, 14 sitemap URLs |
| Injected production `noindex` in disposable fixture | block | blocked |

The disposable fixture was used only to test the guard's positive path. It was not copied into source, served as the owner preview or deployed.

## Final verification evidence

Preview build:

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

Public final-preview probe:

```json
{
  "public_routes": 15,
  "http_200": 15,
  "preview_noindex": 15,
  "checked_assets": 6
}
```

Browser evidence:

- Desktop layout reviewed at 1440×1000.
- Mobile layout reviewed at 390×844.
- Three homepage proof images were visibly decoded after entering the viewport: metal studwork, ceiling substructure and prepared wall surfaces.
- Mobile document overflow: 0 px.
- Mobile sticky bar: 390 px wide, approximately 55 px high; two approximately 195 px-wide actions.
- Menu open state: `aria-expanded=true`; focus moved to `Start`.
- Escape test: menu hidden, `aria-expanded=false`, focus returned to the menu button and accessible label restored to `Menü öffnen`.

## Artifact fingerprints

These fingerprints identify the final local preview build and key verification code at closeout:

```text
3232b7d6cb9e8c9fcbc7b85aa8b33bee453139c2eb6c6cb5fa69679f6db166c5  site/dist/index.html
d7e82f9ddf234c09d55fa1b6d8903e68bbd8612cb4b26c049019cfa5936561ae  site/scripts/release-guard.mjs
f571883193dc08eb14a69e43929361e330b1b5bb48c0c08c31f37548451f8cb6  site/scripts/verify-site.mjs
749fec9a603ffd245c9d579b0a4a95fec7561c6da890203eeafd1380712448eb  site/src/assets/main.js
b653f9d443e814297c731ce02a35fa070c34e89f0e73032af3d50cb5a1e0978c  site/src/assets/style.css
ca2f05a701af2b99be0e5be35d1d0eb910755153285b1ee04e4acddb5d90104a  site/src/assets/social-card.jpg
```

Final generated artifact inventory at closeout:

- 15 HTML documents
- 30 public project WebP derivatives
- 69 files in `site/dist`

## Temporary review URL

Last verified owner-facing preview:

`https://factor-life-dialog-instructors.trycloudflare.com/dautibau/`

This is a temporary `noindex` Cloudflare preview and may expire. It is evidence of the reviewed artifact, not a durable production address.

## Production blockers still open

The release guard intentionally keeps production blocked until the owner verifies:

1. Final production domain and `SITE_URL`.
2. Business email address.
3. Legal form, trade name and register status.
4. USt-IdNr./W-IdNr. and § 19 status where applicable.
5. HWK/Handwerksrolle classification and permitted advertised scope.
6. Employee count and § 36 VSBG position.
7. Final host, email provider and all external processors/services.
8. Final WhatsApp Business handling and privacy/legal review.
9. Image, object and publication rights for selected project photography.
10. Any owner portrait, biography, experience, qualification, insurance, service radius, response-time or review claim before publication.

The current legal pages deliberately retain internal review warnings. Removing those warnings without verified facts would be a release error and is blocked.

## Locked design decisions

Keep unchanged unless the owner explicitly requests otherwise:

- Editorial-industrial design.
- Black, paper-white and dark-green palette.
- Original logo geometry and colors.
- “Gerade Wände sind kein Zufall.”
- Native browser scrolling.
- Black call CTA and green WhatsApp CTA.
- Real project images for proof; generated hero only as labelled atmosphere.
- No tracking or cookie banner unless the production stack actually introduces a consent requirement.
