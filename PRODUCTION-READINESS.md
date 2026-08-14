# Dautibau — Production Readiness Handoff

**Current status:** improved preview candidate complete; production release intentionally blocked
**Last verification:** 2026-08-01
**No commit, push or deployment has been authorized or performed.**

## Working artifact

- Source: `site/src/`
- Preview build: `site/dist/`
- Preview verifier: `site/scripts/verify-site.mjs`
- Production release guard: `site/scripts/release-guard.mjs`
- Project photo selection manifest: `assets/project-photos/selection-manifest.json`
- First model-council audit: `assets/reviews/ai-council-audit-2026-08-01.md`
- Implementation closeout: `assets/reviews/ai-council-implementation-closeout-2026-08-01.md`
- Final QA evidence: `qa/final-verification-2026-08-01.md`

## Safe commands

Preview build and verification:

```bash
cd site
npm run build
npm run verify
```

Production command after all facts and approvals are complete:

```bash
cd site
SITE_URL=https://CONFIRMED-FINAL-DOMAIN/dautibau npm run build:production
```

Never substitute a temporary Cloudflare tunnel, localhost, GitHub Pages or an unconfirmed domain. The guard rejects known preview hosts and fails when unfinished legal markers remain.

## Required before production

### Domain and technical stack

- [ ] Confirm final public domain and base path.
- [ ] Confirm hosting provider and location.
- [ ] Confirm email provider.
- [ ] Confirm every external service, processor and embed.
- [ ] Decide what happens to the stale GitHub Pages artifact: redirect, remove or de-index.
- [ ] Verify final production HTTP headers, redirects, canonical URLs and structured data on the deployed domain.

### Operator and legal facts

- [ ] Business email address.
- [ ] Exact legal form and trade name.
- [ ] Register entry, court and number if registered.
- [ ] USt-IdNr./W-IdNr. status and § 19 status where relevant.
- [ ] HWK/Handwerksrolle status and permitted advertised service scope.
- [ ] Employee count and § 36 VSBG position.
- [ ] Final WhatsApp Business configuration and contact-synchronization handling.
- [ ] Legal review of final Impressum and Datenschutz against the actual production stack.

Do not invent or infer missing information. Do not publish a normal German tax number.

### Claims and trust content

Confirm before adding or strengthening:

- [ ] Founding year and years of experience.
- [ ] Qualifications, certifications, memberships and insurance.
- [ ] Service area and travel radius.
- [ ] Response and quotation times.
- [ ] Project-size limits or price guidance.
- [ ] Customer reviews and ratings.
- [ ] Which trades are performed directly and which, if any, use registered partners.

### Photography and privacy

- [ ] Confirm photographer/publication rights for every selected image.
- [ ] Confirm client/object/location permissions where required.
- [ ] Confirm that no identifiable person, address label, document or private information remains visible.
- [ ] Approve or replace any image whose project attribution cannot be proven.

Drive access or possession of the source files is not proof of publication rights.

## Locked implementation decisions

Unless explicitly changed by the owner:

- Preserve the editorial-industrial design.
- Preserve original Dautibau logo, proportions and colors.
- Preserve black/paper-white/dark-green palette.
- Preserve “Gerade Wände sind kein Zufall.”
- Preserve native browser scrolling.
- Keep call CTA black and WhatsApp CTA green.
- Use real project images for proof; generated imagery only as clearly labelled atmosphere.
- Do not manufacture before/after relationships.
- Keep temporary previews `noindex`.
- Do not add a cookie banner unless the final implementation introduces technology that requires consent.

## Release acceptance checklist

After the missing facts are supplied and legal pages are approved:

1. Replace internal legal-review warnings only with verified final content.
2. Run the production build with the confirmed `SITE_URL`.
3. Require the release guard to pass without exceptions or bypasses.
4. Deploy only after explicit approval.
5. Verify all 14 public sitemap routes and the 404 response on the exact production domain.
6. Re-run desktop and mobile browser QA.
7. Confirm visible loading of project images and social preview.
8. Validate real phone and WhatsApp targets.
9. Confirm production indexing directives and remove/de-index the stale public artifact.
10. Save final production hashes and screenshots with the project.
