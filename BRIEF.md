# Brief — Dautibau Production Enhancement

## Required

- Project name: dautibau

- One-liner: Preserve the strong editorial-industrial Dautibau website and make it production-ready with the supplied logo, a disciplined brand palette, genuine project imagery, stronger WhatsApp conversion and current owner-specific legal/privacy disclosures.

- Primary goal: Generate qualified local enquiries through WhatsApp and phone without replacing the successful front-page concept.

- Audience: Private homeowners, renovators, small commercial clients and local contractors in Düsseldorf and the owner-confirmed service radius who need drywall, ceilings, finishing, flooring, insulation or interior renovation.

- Tone/DNA: Calm, precise, premium-but-grounded German craftsmanship. Preserve the existing editorial-industrial grid, paper/ink foundation, strong serif display typography, numbered sections, generous whitespace and the headline `Gerade Wände sind kein Zufall.` Avoid generic construction templates and salesy agency language.

- Language: German website and legal UI. All AI generation and model-review prompts/specifications must be written in English.

- Pages: Preserve the 13-page structure: home; services overview; six service detail pages; references/gallery; about; contact; imprint; privacy notice.

## Preservation lock

- Treat the current public home page as the approved baseline, not a disposable concept.
- Preserve the information architecture, editorial rhythm, strong headline, service coverage and restrained motion unless a tested improvement is demonstrably better.
- Do not deploy or publish during the research, direction or owner-review stages.

## Logo handling

- Use the owner-supplied PDF artwork exactly as supplied. Do not regenerate, redraw, recolor, retype, re-space or alter the slogan.
- The source is genuine vector artwork plus embedded Century Gothic text. No raster images are embedded, so no AI upscaling is needed.
- Approved technical transformations: lossless crop, transparent background, text-to-path web SVG, responsive sizing, optimized PNG fallbacks and accessible alternative text.
- Preserve the DB/house symbol, `DAUTI BAU` wordmark and `Wir bauen und Sie entspannen` slogan.
- Source colors measured from the PDF: blue `#008BD2`, green `#00963F`, grey `#9C9C9C`, near-black text approximately `#1A1A18`.
- Prepared review assets are documented in `ASSET-INVENTORY.md`.

## Palette direction

- Keep the warm paper/ink foundation because it is a major strength of the existing site.
- Introduce the logo green as the main functional conversion color, especially for WhatsApp.
- Use logo blue only as a restrained structural or informational accent and logo grey as a neutral.
- Reduce the existing ochre to a small editorial accent or retire it where it competes with the logo. The final system must remain disciplined, with no uncontrolled four-color look.
- Verify WCAG AA contrast for all text, buttons, focus states and hover states.

## Conversion architecture

- WhatsApp and phone remain the two primary channels.
- Add tasteful green WhatsApp CTAs in the hero, service contexts, gallery/contact band and mobile sticky bar.
- Use `https://wa.me/4917623939474` with a short project-oriented prefilled German message after owner confirmation.
- Correct all phone links to the real international URI `tel:+4917623939474`. The current public build incorrectly contains the unusable placeholder `tel:+491****9474`.
- Keep an email/form fallback only after the business email and form processor are confirmed.
- No fake form submission and no dark patterns.

## Gallery and image gate

- Replace the honest placeholders with a compact, responsive gallery using genuine owner-supplied Dautibau work only.
- Prefer 6–12 strong images over many weak images. Group or caption them by service/project when attribution is known.
- Before publication, record for every image: publication permission/rights, correct project association, before/during/after status, location granularity allowed, people/plates/address exposure, necessary redaction, technical quality and owner approval.
- Optimize approved images to responsive AVIF/WebP with width/height, lazy loading and accurate German alt text.
- Never present stock or generated work as a real Dautibau project.

## Legal and privacy scope

- Replace obsolete `§ 5 TMG` wording with current `§ 5 DDG` wording throughout title, metadata and page copy.
- The imprint must be based on the business’s actual legal facts required by § 5 DDG, including name/legal form where applicable, service address, direct electronic contact including email, register/supervisory/professional information where applicable, and VAT/business identification numbers if held.
- The privacy notice must describe the actual production system, not generic placeholders: controller; hosting/server logs; email/form/phone/WhatsApp processing; purposes and Art. 6 legal bases; recipients/processors; third-country transfer where applicable; retention; rights; objection; portability where applicable; and complaint to the competent supervisory authority.
- WhatsApp Business must be explicitly documented, including the actual App/API/BSP setup, Meta involvement, recipient/transfer information and the applicable data-processing arrangement.
- Under § 25 TDDDG, do not load non-essential cookies/storage, analytics, maps or other third-party embeds before valid consent. Prefer a no-CMP build by self-hosting fonts, avoiding analytics and using a static or click-to-load map.
- Current production still loads Google Fonts and Lenis from external CDNs. Self-host required assets or document and gate them according to the final legal architecture.
- Legal texts can be made detailed and fact-specific, but must never be described as a legal guarantee. A qualified German legal professional or maintained legal-text service must review them before production publication.

## Claim boundaries

- Confirm before publication: exact years of experience, deadline/punctuality claims, fixed-price wording, service radius, trade/professional registrations and any testimonials.
- Safe baseline: describe the free, non-binding quote process rather than a blanket fixed-price or punctuality guarantee unless substantiated.
- Do not invent awards, certificates, project counts, registrations or customer quotes.

## Technical, SEO and accessibility requirements

- Preserve Eleventy/static delivery unless a real requirement justifies migration.
- Self-host fonts and required JS where practical; minimize third-party requests.
- Maintain per-service Düsseldorf SEO, confirmed NAP, canonical URLs and LocalBusiness/HomeAndConstructionBusiness structured data.
- Add sitemap/robots/OG imagery based on the locked logo and approved photos.
- Mobile-first, keyboard accessible, visible focus, semantic headings, reduced-motion support, no horizontal overflow, no console errors, optimized media and tested call/WhatsApp links.
- Review the exact public/local candidate on desktop and mobile before Gate 2.

## Model council boundary

- Requested later review routes: Claude Opus 5 and GPT-5.6, plus `Fable 5` only if that exact provider/model is demonstrably available.
- Record the actual provider/model evidence. Never claim a model participated when it did not.
- Model output is advice only; the Lux run manifest and owner gates remain state authority.

## Must avoid

- Ground-up redesign of a successful baseline.
- Any modification or AI recreation of the supplied logo.
- Generic stock construction photography, fake projects or fake reviews.
- Multiple competing accent colors, gradient decoration or template-like construction motifs.
- Obsolete TMG references, generic privacy boilerplate or promises of legal certainty.
- Publishing owner-specific legal/claim placeholders as if verified.
- Deployment before owner approval and final production QA.

## Gate-1 palette comparison contract

- The canonical workflow still emits exactly three Gate-1 direction slots. Do not change the workflow contract or pretend that eight pipeline directions exist.
- Each of the three preview slots must preserve the same approved page composition and include a clearly labelled palette switcher with the same eight visual themes. The palette switcher is an internal comparison control, not a production feature.
- All eight themes must keep the supplied logo artwork unchanged and visible in the upper-left brand position. Use the complete wordmark where space permits and an exact symbol-only crop only as a responsive implementation derived from the locked source artwork.
- Theme set: (1) near-black + paper + logo green; (2) warm paper + ink + logo green; (3) graphite + white + logo green; (4) charcoal + cool grey + restrained logo blue; (5) off-white + black with green WhatsApp only; (6) deep navy-black + paper + logo green; (7) concrete grey + ink + green; (8) monochrome black/white with the original full-color logo and green WhatsApp only.
- Do not alter layout, page order, headline, service structure, or motion merely to make themes look different. Variation is limited to color tokens, logo placement treatment, button color, borders, surface contrast and small brand accents.
- The default selected theme in every preview should be the strongest recommended option, not necessarily the same theme in all three slots. Avoid using blue and green together as equal dominant accents.
- The current GitHub Pages site is the visual baseline and may remain available for side-by-side review. Do not overwrite or deploy to it during Gate 1.

## Owner gate

The owner explicitly confirmed generation of an internal palette/logo review pass while preserving the current structure. Google Drive, final project imagery, owner-specific legal facts and production publication remain deferred/blocking. The subsequent relay must emit the workflow `3.1.0` `pipeline_contract` with all eleven ordered stages before Lux may claim the canonical pipeline is running.
