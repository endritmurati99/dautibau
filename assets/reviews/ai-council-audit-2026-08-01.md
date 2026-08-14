# Dautibau — AI Council Production, Conversion & Legal-Risk Audit

> **Historical baseline audit.** Most code-safe P0/P1 findings below were implemented after this review. For the current state, second-council decision, executed release-guard tests, final hashes and remaining production blockers, see [`ai-council-implementation-closeout-2026-08-01.md`](./ai-council-implementation-closeout-2026-08-01.md) and [`../../PRODUCTION-READINESS.md`](../../PRODUCTION-READINESS.md).

**Date:** 2026-08-01
**Scope:** Current 14-route temporary preview, local Eleventy source/build, public GitHub Pages artifact
**Reviewers:** Claude Opus 5 High; GPT-5.6 Sol Pro; direct Chrome/source verification by Lux
**Legal status:** Issue spotting only; not legal advice or legal approval.

## Executive verdict

The accepted editorial-industrial design is strong and should not be redesigned. The real project gallery, native scrolling, original logo, clear phone/WhatsApp calls to action and quality positioning are good foundations.

The site is **not production-ready**. The main blockers are:

1. Every canonical URL points to a stale, publicly accessible GitHub Pages build. The stale home page still says that project photos will follow, and `/galerie/` returns 404 there.
2. Impressum and Datenschutz are explicitly provisional and contain unresolved placeholders.
3. All six high-intent service detail routes still say “Projektfoto folgt” despite 30 approved project images being available.
4. `/ueber-uns/` still has an owner-photo placeholder; `/kontakt/` has a disabled form and map placeholder.
5. Externally loaded Google Fonts, WhatsApp processing and the final hosting stack are not covered adequately in the privacy notice.
6. The site has no verified review/social-proof layer, detailed case studies, response expectations or clear audience split between private clients and commercial/property-management clients.

**Consolidated readiness ranges:** visual quality 80–85/100; five-second clarity about 82/100; trust 35–45/100; conversion 50–60/100; technical/SEO readiness 45–60/100; legal readiness 15–20/100; overall production readiness roughly 45–55/100.

## Evidence verified directly

- All 14 routes on the temporary Cloudflare preview returned HTTP 200.
- The preview home page matches the local final review build hash.
- The telephone links are valid: all four `tel:` links in both the build and live preview match the displayed business number, and the LocalBusiness JSON-LD uses the same number.
- The five WhatsApp links in both the build and live preview use that same number and include prefilled enquiry text.
- A delayed subagent report incorrectly interpreted automatic phone-number masking in tool output (`****`) as literal source code. Direct source/build/live comparison disproved that finding; it must not be treated as a blocker.
- The public canonical target `https://endritmurati99.github.io/dautibau/` returned HTTP 200 but a different/stale artifact.
- The stale GitHub home page contains `Echte Projektfotos folgen`.
- The canonical GitHub route `/dautibau/galerie/` returned HTTP 404.
- `robots.txt` and `sitemap.xml` were not present on the reviewed site.
- Titles and descriptions are route-specific; each route has one H1.
- LocalBusiness JSON-LD is present on the home page, but is incomplete for a final local-business implementation.
- `og:image` is missing.
- Google Fonts are loaded from Google rather than self-hosted.
- The contact form is intentionally disabled.
- The latest documented internal-link audit found 828 references and zero broken internal links.

## Modelled funnel per 1,000 visitors

These are scenario ranges, not measurements. The site has no analytics or lead history, so tighter numbers would be invented.

### High-intent local Google Search

Current site:

- Engaged visitors: **400–550**
- Visitors reaching a service/gallery second page: **200–330**
- Phone/WhatsApp CTA clicks: **50–95**
- Actual contact initiations: **30–65**
- Qualified leads: **12–28**

After P0/P1 corrections:

- Engaged visitors: **480–620**
- Service/gallery viewers: **280–420**
- CTA clicks: **85–150**
- Actual contact initiations: **55–100**
- Qualified leads: **22–45**

### Cold social/referral traffic

Current site:

- Engaged visitors: **220–380**
- Service/gallery viewers: **100–200**
- CTA clicks: **15–40**
- Actual contact initiations: **8–25**
- Qualified leads: **2–8**

After P0/P1 corrections:

- Engaged visitors: **280–430**
- Service/gallery viewers: **150–260**
- CTA clicks: **30–65**
- Actual contact initiations: **18–42**
- Qualified leads: **5–15**

The largest current losses are on the six purchase-intent service pages, at the provisional legal pages, and among visitors who do not want to call or use WhatsApp. Lead-to-contract conversion cannot be estimated without price level, capacity, response time and real lead history.

## Route-by-route findings

### `/`

Strong claim, location cue, project images, process and dual CTA. Remove the stale statement that real project images will follow. Add verified response expectations, precise service area and real social proof. Every claim about fixed prices, years of experience, deadlines and clean handover must be confirmed by the owner.

### `/leistungen/`

Clear service choice, but mainly repeats the home-page cards. Add one relevant real image and one decision cue per service. Do not publish invented price ranges.

### `/leistungen/trockenbau/`

High-intent route with useful service bullets, but the “Projektfoto folgt” block is a major trust leak. Add approved framing/partition-wall proof and a compact case example.

### `/leistungen/decken/`

Clear scope but no evidence. Add a real ceiling-substructure image and clarify truthful acoustic/fire-protection capabilities and system responsibility.

### `/leistungen/spachtel/`

Q1–Q4 is the strongest technical differentiation. Add close-up proof and a factual Q-level comparison. Avoid guarantees that cannot be supported.

### `/leistungen/boden/`

Clear list but generic. Add approved floor-preparation/installation proof and clarify which floor trades/materials Dautibau is legally and operationally authorised to perform.

### `/leistungen/daemmung/`

Weakest visual evidence. If no truthful internal-insulation photo exists, use a labelled technical diagram rather than a generated “project” image or placeholder.

### `/leistungen/renovierung/`

“Ein Ansprechpartner für alle Gewerke” is commercially strong but potentially overbroad. Clarify which work Dautibau performs itself and which work, if any, is performed by registered partner trades.

### `/referenzen/`

Authentic project photography is a strong improvement. It still needs 3–5 permission-cleared mini case studies with scope, challenge, work performed, duration and outcome. Do not invent locations, customers, dates or measured results.

### `/galerie/`

Thirty real images and the conservative before/after pair create useful proof. Improve navigation/filtering later. Review the caption that mentions “Fliesen” because it may imply a regulated service scope. Keep written photo rights and client/object releases.

### `/ueber-uns/`

Major trust gap: owner portrait still “folgt”. Add a real approved portrait, factual biography, founding year/experience, qualifications and insurance only after verification.

### `/kontakt/`

Phone and WhatsApp are clear, but a disabled form and “Karte folgt” look unfinished. Either implement a secure working form or remove it. Add visible email, realistic response times, exact service area and, if applicable, a non-invasive link to the Google Business Profile. A map embed would need its own privacy review.

### `/impressum/`

Production blocker. Email, actual legal/business status and conditional registration/tax/dispute-resolution data are unresolved. Remove the “vorläufig” status only after verified data is supplied.

### `/datenschutz/`

Production blocker. The final host, server logs, recipients/processors, concrete retention logic, legal bases, WhatsApp/Meta processing, transfers, supervisory authority and the form’s actual state must match the production stack.

## Legal-risk classification

### Likely mandatory before production

- Complete provider identity, serviceable address and business email in the Impressum (§ 5 DDG).
- Privacy notice that matches the final host and actual processing: server logs, contact channels, recipients/processors, legal bases, retention and data-subject rights.
- WhatsApp/Meta disclosure because WhatsApp is a primary contact route; retain phone and email as alternatives.
- Correct supervisory-authority complaint information, normally LDI NRW for this controller location.
- Remove all provisional placeholders and incorrect statements.
- Confirm publication rights for project photos, photographed premises/objects and any people.
- Resolve the canonical/stale GitHub conflict and prevent the temporary preview from indexing.

### Conditional on business facts or the final stack

- USt-IdNr. and/or Wirtschafts-Identifikationsnummer only if assigned. A normal German tax number should not be published. A § 19 UStG note is not automatically an Impressum requirement.
- Register name/number/court only if registered.
- Handwerksrolle, Handwerkskammer, supervisory authority, professional title and rules only where legally applicable. Because captions/scope touch flooring, tiles, plastering and renovation, Dautibau should obtain a clear HWK Düsseldorf classification before advertising those activities broadly.
- § 36 VSBG consumer-dispute statement depending on employee threshold, willingness or legal obligation. Do not add the old EU ODR-platform link; that platform was shut down in July 2025.
- Contact-form provider, spam protection, confirmation flow and privacy information only if the form is activated. Consent is not automatically the correct legal basis for a pre-contract enquiry.
- Cookie/consent banner only if non-essential cookies, tracking or similar device access are actually introduced. No banner is needed merely for a static, tracking-free site.
- Distance/off-premises consumer information, cancellation policy and model cancellation form if consumer contracts are concluded remotely or at the customer’s home. For substantial consumer construction work, specialised BGB construction-contract duties may also apply.
- Map/video/review embeds require separate privacy and consent analysis.

### Optional trust improvements

- Verified Betriebshaftpflicht statement.
- Genuine Google/customer reviews with permission and no invented ratings.
- Clear warranty/remediation process, factual response times and project-size guidance.
- Lawyer/HWK review of the final legal pages and advertised service scope.

## Prioritised backlog

### P0 — before production or meaningful traffic

1. Choose the final domain; correct every canonical; redirect or de-index the stale GitHub Pages build; add `noindex` to temporary previews.
2. Complete Impressum and Datenschutz with verified facts and final hosting/processors.
3. Self-host the fonts.
4. Replace all six service-page “Projektfoto folgt” blocks with approved real evidence; remove all other visible placeholders and stale “real photos follow” copy.
5. Resolve `/kontakt/`: working secure form or no form; remove the map placeholder.
6. Confirm legal trade scope/HWK classification, especially any implication of tiles, flooring, plastering, fire protection or “all trades”.
7. Confirm all project-photo rights and object/client approvals.
8. Verify claims about fixed prices, experience, deadlines, clean handover and occupied-home work; soften or remove anything unverified.
9. Add production `robots.txt`, `sitemap.xml`, `og:image`, correct favicon/touch assets and final-domain metadata.
10. Run final desktop/mobile, accessibility, CTA, performance, structured-data and HTTP-header checks on the production domain.

### P1 — before paid traffic

1. Add an approved owner portrait, factual biography and verified credentials.
2. Add 3–5 real case studies and more defensible before/after evidence.
3. Connect or create the verified Google Business Profile and obtain genuine reviews.
4. State real service radius, places served, availability and response/quote timing.
5. Segment private clients from commercial/property-management prospects or make the primary audience explicit.
6. Add a privacy-compatible measurement plan for page → CTA click → initiated contact → qualified lead.
7. Improve service-page heading hierarchy and remove repetitive template copy.

### P2 — optimisation after data

1. Test CTA wording, proof order and audience-specific landing paths.
2. Add a Q1–Q4 explainer and truthful FAQ.
3. Add price or project-size orientation only from real commercial data.
4. Add genuine location pages only where Dautibau actually operates and can provide unique local content; avoid doorway pages.
5. Enrich schema with truthful Service/Breadcrumb/Image data.
6. Add responsive image variants and measure Core Web Vitals on the final domain.

## Keep unchanged

- Editorial-industrial visual direction, original logo and black/paper-white/dark-green palette.
- “Gerade Wände sind kein Zufall.” and the Streiflicht/Q1–Q4 quality positioning.
- Native browser scrolling.
- Black call CTA, green WhatsApp CTA and useful mobile sticky contact bar.
- Real-project gallery and conservative before/after policy.
- Static architecture, unique titles/descriptions and simple navigation.
- No tracking/cookie banner unless the production stack genuinely requires it.

## Required owner facts/documents

1. Business email.
2. Exact legal form, trade name and any register entry.
3. USt-IdNr./W-IdNr. status; § 19 status if relevant.
4. Gewerbeanmeldung and HWK/Handwerksrolle classification or written HWK confirmation of the permitted scope.
5. Employee count relevant to § 36 VSBG and dispute-resolution position.
6. Final domain, hosting provider, email provider, form provider and associated processing agreements.
7. WhatsApp Business setup and handling of address-book/contact synchronisation.
8. Real founding year/experience, qualifications, insurance and memberships.
9. Real service area, response times, quote timing and minimum project size.
10. Publication releases and image-rights confirmation for selected projects.
11. Verified project facts and approved customer reviews.
12. Confirmation of which claims and trades are performed directly versus through registered partners.
