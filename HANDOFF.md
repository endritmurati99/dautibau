# Handoff — Dautibau (erster Konstrukt)

## Current state
- Live permanenter Preview (GitHub Pages, Actions-Deploy, HTTP 200 verifiziert):
  **https://endritmurati99.github.io/dautibau/**
- Repo (public, static): `endritmurati99/dautibau` — `index.html` + `.github/workflows/deploy-pages.yml`
- Projektquelle: `lux-webflow/projects/dautibau/` (BRIEF.md, ART_DIRECTION.md, index.html, screenshots/, reports/)
- Stand: **One-Pager, erster Konstrukt** — wartet auf Kunden-Feedback + echte Daten (Gate-1-Äquivalent).

## Direction
- DNA (via `dna-select`/`dna-synthesize`): **sebastian-cox + norm-architects + shinola**
  → warmes Off-White (#F5F1EA), warmes Charcoal (#211E1A), EIN warmer Ochre-Akzent, Serif-Display
  (Fraunces) + humanist Sans (Inter), viel Weißraum, sehr zurückhaltende Motion. Anti-Slop.
- Handwerker-Adaption: Produkt-/Shop-Teile der DNA → Leistungs-/Referenz-Sprache eines Trockenbau-Dienstleisters.
- Conversion: `tel:` als Haupt-CTA + WhatsApp (0176 → wa.me), Formular als Sekundär (Platzhalter).

## Changes (was gebaut wurde)
- Sektionen: Hero (mit CSS/SVG-Wand+Wasserwaage statt Stockfoto) · Trust-Strip · Leistungen (6 Karten:
  Trockenbau/Trennwände, abgehängte & Akustikdecken, Spachtel Q1–Q4, Boden verlegen, Dämmung, Renovierung)
  · Ablauf (4 Schritte) · dunkle „Streiflicht"-Aussage · Referenzen (Platzhalter-Galerie, asymmetrisch)
  · Über uns · Kontakt (großes Telefon + WhatsApp + Formular) · Impressum · Datenschutz · Footer · fixe
  Mobile-Anrufleiste.
- Reveal-on-Scroll robust gemacht (nur bei aktivem JS ausblenden → ohne JS voll sichtbar).

## Verification
- Playwright (reduced-motion, ganze Seite) @1366 + @390:
  - kein horizontaler Overflow ✅
  - keine Konsolenfehler ✅
  - axe (color-contrast, labels, headings, image-alt, doc-title, html-lang): **0 Verstöße** ✅
- Live-URL: HTTP 200, Titel/Telefon/Copy ausgeliefert ✅
- Screenshots: `screenshots/desktop.png`, `screenshots/mobile.png`

## Remaining risk / offen (vor öffentlichem Launch)
- **Platzhalter**: Stadt+PLZ, E-Mail, vollständiges Impressum (§5 TMG) + rechtssichere Datenschutzerklärung.
  In DE sind Impressum + Datenschutz Pflicht — MUSS vor „echtem" Launch gefüllt werden.
- **Formular** ist Dummy (`onsubmit return false`) — bei Bedarf mit FormSubmit/Formspree an echte E-Mail koppeln.
- **Referenz-Galerie** sind SVG-Platzhalter — echte Baustellenfotos ersetzen für Wirkung.
- **Premium-Pipeline (Claude Design / Google Stitch)** lief NICHT: Windows-Desktop war aus → CDP `:9220/:9225`
  nicht erreichbar. Dieser Konstrukt ist Lux-hand-gebaut, DNA-geführt. Für 3 Claude-Design-Richtungen +
  Gate-1-Auswahl muss der Desktop an sein.
