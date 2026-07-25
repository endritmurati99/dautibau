# BUILD SPEC — Dautibau (echter mehrseitiger Premium-Bau)

Dies ist die verbindliche Bau-Anweisung. Ergänzt `BRIEF.md`. Ziel: eine eigenständige,
mehrseitige Handwerker-Website auf dem Niveau von motionsite.ai und 21st.dev. Kein Template,
kein One-Pager, kein Baukasten-Look. Die drei alten Varianten (variants/v1..v3) werden NICHT
weiterverwendet und dienen nur als Negativbeispiel (zu simpel, zu generisch).

## Kunstrichtung: "Editorial Industrial"
Premium deutsche Handwerksmarke trifft Architektur-Magazin. Ruhig, präzise, selbstbewusst.
Die Präzision der Arbeit wird durch Typografie und Raster erzählt, nicht durch Deko.

### Farbsystem (Design-Tokens, genau so)
- paper  #F4F1EA  (warmes Off-White, Haupt-Hintergrund)
- ink    #17140F  (warmes Fast-Schwarz, Text und dunkle Sektionen)
- ochre  #B5651D  (EIN Akzent: CTAs, aktive Zustände, Sektionsnummern, Linien-Draw)
- steel  #6B7075  (Sekundärtext, technische Labels)
- line   #E0DACE  (Haarlinien, 1px Trenner)
- Dunkle Sektionen: Hintergrund ink, Text paper, Akzent ochre. Kontrast immer >= AA.

### Typografie
- Display: "Fraunces" (variable Serif, optical sizing, hoher Charakter), sehr groß, clamp().
- Body: "Inter" (oder "Instrument Sans").
- Mono-Label: "Space Mono" oder "JetBrains Mono" für technische Marker (Q1 bis Q4,
  Sektionsnummern 01/02, Telefon, Ziffern, Overline-Kicker).
- Laden via Google Fonts mit preconnect ODER self-hosted. Kein Layout-Shift.

### Layout-Sprache
- 12-Spalten-Raster, großzügige Ränder, viel Weißraum, klarer vertikaler Rhythmus.
- Überschriften oversized mit clamp(). Sektionen durch 1px Haarlinien getrennt.
- Sektions-Index als Mono-Nummer (01, 02, 03 ...). Overline-Kicker in Mono, gesperrt, uppercase.
- Ein dezentes "Maß-Ticks" Motiv (Lineal-Skala als dünne vertikale Ticks an einer Sektionskante)
  als Präzisions-Referenz. Sparsam und mit Zweck. KEINE Deko-Wasserwaage in der Mitte.
- Sticky Header, der beim Scrollen kompakter wird. Aktiver Menüpunkt in ochre.

### Motion (dezent, mit Zweck, prefers-reduced-motion respektieren)
- Lenis smooth scroll (leicht).
- Scroll-Reveal über IntersectionObserver (fade + leichtes Rise), gestaffelt.
- Eine langsame horizontale Marquee-Zeile mit Leistungs-Stichworten.
- Hover-Unterstreichungen, die sich zeichnen (ochre). Buttons mit klarer Intention.
- Keine Gradient-Blasen, keine sinnlosen Loop-Animationen, keine Emoji-Leisten.

### Bildsprache (noch keine echten Fotos)
- KEINE Stockfotos, keine Fake-Fotos. Stattdessen hochwertige, ehrliche Platzhalter:
  gerahmte Flächen mit Caption "Projektfoto folgt", dezente Beton-/Papier-Textur per CSS,
  optional duotone-getönte Flächen in ink/ochre. Der Hero darf typografisch sein
  (riesige Headline auf paper) statt eines Fotos. Das wirkt premium und vermeidet Stock-Look.

## Technik-Stack (statisch, für GitHub Pages)
- Eleventy (@11ty/eleventy) als Static-Site-Generator, damit Navigation und Footer EIN Layout
  sind und die 6 Leistungs-Detailseiten aus einer Datendatei (pagination) generiert werden.
- Styling: Tailwind via standalone/CLI KOMPILIERT zu statischem CSS ODER handgeschriebenes
  modernes CSS mit den Design-Tokens oben. KEIN Tailwind Play-CDN (verursacht Konsolen-Warnung).
  Ziel: NULL Konsolenfehler und NULL Konsolen-Warnungen.
- Motion-Libs via lokale Datei oder gepinnte CDN (Lenis). Kein Framework-Overkill.
- Output nach `site/dist/`. Reiner statischer HTML/CSS/JS-Output, direkt Pages-fähig.
- `.nojekyll` in den Output. Relative Pfade, damit es unter `/dautibau/` läuft (baseurl beachten:
  Seiten liegen später unter https://endritmurati99.github.io/dautibau/ ). Alle internen Links
  müssen unter diesem Unterpfad funktionieren.

## Seitenstruktur (alle als echte, verlinkte Seiten)
1. `/` Startseite
2. `/leistungen/` Übersicht
3. `/leistungen/<slug>/` 6 Detailseiten aus `services.json`:
   trockenbau, decken, spachtel, boden, daemmung, renovierung
4. `/referenzen/`
5. `/ueber-uns/`
6. `/kontakt/`
7. `/impressum/`
8. `/datenschutz/`
Gemeinsame Navigation (mit aktivem Zustand) und Footer auf allen Seiten. Auf Mobil unten
eine feste Leiste mit Anrufen und WhatsApp.

## FERTIGE TEXTE (genau so verwenden, Copy-Regeln streng: keine Gedankenstriche, keine Semikolons, Doppelpunkte nur wenn nötig, kurze starke Sätze, catchy, kein Marketing-Blabla, keine Emojis, keine erfundenen Zertifikate)

### Startseite
- Kicker (Mono): TROCKENBAU UND INNENAUSBAU. DÜSSELDORF.
- Headline: Gerade Wände sind kein Zufall.
- Subline: Dautibau baut Trockenbau, Decken und Böden, die im Streiflicht bestehen. Ein Ansprechpartner vom Aufmaß bis zur Übergabe.
- CTA-1: Jetzt anrufen  (tel:+4917623939474)
- CTA-2: Per WhatsApp schreiben  (https://wa.me/4917623939474)
- Trust-Zeile klein: Jahrelange Erfahrung im Raum Düsseldorf. Festpreis kostenlos und unverbindlich.

Trust-Leiste (4): Ein Ansprechpartner. Saubere Arbeit. Termine, die halten. Festpreis unverbindlich.

Marquee-Stichworte: Trockenbau. Trennwände. Akustikdecken. Spachtel Q4. Vinyl. Dämmung. Renovierung. Düsseldorf.

Leistungs-Teaser (Grid, 6, jeweils Titel + ein Satz + Link "Mehr dazu"):
1. Trockenbau und Trennwände. Wände, die sitzen. Ständerwerk, Beplankung und Trennwände nach Maß.
2. Decken abgehängt und Akustik. Abgehängte Decken und Akustik, die den Raum ruhiger machen.
3. Spachtelarbeiten Q1 bis Q4. Sauber gespachtelt bis Q4. Die Qualität, die man erst im Streiflicht sieht.
4. Boden verlegen. Laminat, Vinyl und Klick-Vinyl. Passgenau verlegt und sauber abgeschlossen.
5. Dämmung und Schallschutz. Wärme bleibt drin. Lärm bleibt draußen.
6. Renovierung und Innenausbau. Aus Rohbau wird ein Zuhause. Ein Gewerk, ein Verantwortlicher.

Warum Dautibau (4):
- Ein Ansprechpartner. Sie reden mit dem, der die Arbeit macht. Kein Callcenter und keine Weitergabe.
- Saubere Baustelle. Wir arbeiten ordentlich und räumen hinter uns auf. Ihr Zuhause bleibt bewohnbar.
- Termine, die halten. Wir sagen, wann wir kommen. Und dann kommen wir auch.
- Festpreis vorab. Sie wissen vorher, was es kostet. Das Angebot ist kostenlos und unverbindlich.

Ablauf (4 Schritte, Mono-Nummern):
01 Anruf und Aufmaß. Sie rufen an, wir kommen vorbei und schauen uns alles in Ruhe an.
02 Festpreis-Angebot. Sie bekommen einen klaren Preis. Ohne Kleingedrucktes.
03 Saubere Ausführung. Wir bauen termintreu und halten die Baustelle ordentlich.
04 Übergabe. Wir übergeben fertig und besenrein. Erst dann sind wir fertig.

Referenzen-Teaser: Überschrift "Arbeit, die man sehen darf." Untertitel: Echte Projektfotos folgen in Kürze. Bis dahin zeigen wir, worauf es ankommt.

Kontakt-Band (dunkel): Überschrift "Reden wir über Ihr Projekt." Text: Ein Anruf reicht. Wir schauen uns Ihre Räume an und machen Ihnen ein Festpreis-Angebot. CTAs: Jetzt anrufen. Per WhatsApp schreiben.

### Leistungs-Detailseiten (services.json, je Seite: Titel, Intro-Satz, 3 bis 5 Bulletpoints als kurze Nutzen-Sätze, eigener Anruf-CTA)
- trockenbau: "Trockenbau und Trennwände." Intro: Wände und Trennwände, die gerade stehen und leise sind. Punkte: Ständerwerk in Metall oder Holz. Ein- und beidseitige Beplankung. Trennwände fürs Büro oder die neue Raumaufteilung. Aussparungen für Türen und Technik. Brandschutz- und Feuchtraumplatten, wenn es die Situation braucht.
- decken: "Abgehängte Decken und Akustik." Intro: Decken, die den Raum ruhiger und höherwertig machen. Punkte: Abgehängte Rasterdecken und geschlossene Decken. Akustikplatten gegen Hall im Raum. Integrierte Spots und Lichtvouten. Revisionsöffnungen für die Technik.
- spachtel: "Spachtelarbeiten Q1 bis Q4." Intro: Sauber gespachtelt bis zur Streiflicht-Qualität Q4. Punkte: Fugen und Schrauben sicher verspachtelt. Flächenspachtelung nach Qualitätsstufe Q1 bis Q4. Vorbereitung für Anstrich, Tapete oder Effektputz. Die Stufe, die zu Ihrem Licht und Budget passt.
- boden: "Boden verlegen." Intro: Laminat, Vinyl und Klick-Vinyl, passgenau verlegt. Punkte: Untergrund prüfen und vorbereiten. Laminat, Vinyl und Klick-Vinyl. Saubere Anschlüsse an Wand und Tür. Sockelleisten passend zum Boden.
- daemmung: "Dämmung und Schallschutz." Intro: Wärme bleibt drin und Lärm bleibt draußen. Punkte: Wand- und Deckendämmung. Trittschall unter dem neuen Boden. Schallschutz zwischen Räumen und Wohnungen. Dämmung passend zum Aufbau.
- renovierung: "Renovierung und Innenausbau." Intro: Aus Rohbau oder Altbau wird ein Zuhause. Punkte: Alte Flächen zurückbauen und neu aufbauen. Wände, Decken und Böden aus einer Hand. Ein Ansprechpartner für alle Gewerke im Ausbau. Termintreue Übergabe besenrein.

### Referenzen
Überschrift: Arbeit, die man sehen darf. Text: Echte Projektfotos aus Düsseldorf und Umgebung folgen in Kürze. Galerie als gerahmte Platzhalter mit Caption "Projektfoto folgt". Kundenstimmen als klar markierte Platzhalter "Kundenstimme folgt" (NICHTS erfinden).

### Über uns
Überschrift: Ein Handwerker, auf den man sich verlässt. Text: Dautibau steht für Nexhbedin Dauti und jahrelange Erfahrung im Trockenbau und Innenausbau. Vom ersten Aufmaß bis zur Übergabe bleibt der Ansprechpartner derselbe. Saubere Arbeit, ehrliche Preise und Termine, die halten. Foto als Platzhalter "Foto folgt".

### Kontakt
Großes Telefon 0176 23939474 (tel:+4917623939474). WhatsApp (wa.me/4917623939474). Adresse Münsterstraße 360, 40470 Düsseldorf. Einzugsgebiet: Düsseldorf und Umgebung. Formular (Name, Telefon, Nachricht) mit klarem Hinweis, dass der Versand-Endpunkt noch eingerichtet wird (Platzhalter, kein Fake-Submit der so tut als ob). Karte als Platzhalter.

### Impressum (Platzhalter, klar als TODO markiert)
Angaben nach §5 TMG. Dautibau, Inhaber Nexhbedin Dauti. Münsterstraße 360, 40470 Düsseldorf. Telefon 0176 23939474. E-Mail: [E-Mail folgt]. Umsatzsteuer: [Kleinunternehmer nach §19 UStG oder USt-IdNr folgt]. Berufsbezeichnung und Handwerksrolle: [Angabe folgt]. Deutlich als vorläufig kennzeichnen.

### Datenschutz (Platzhalter)
Kurze, ehrliche DSGVO-Grundfassung: verantwortliche Stelle, welche Daten das Kontaktformular erhebt, Zweck, Speicherung, Rechte. Klar als vorläufige Fassung markieren, bis echte Daten vorliegen.

## SEO / Technik-Pflicht
- Pro Seite eigener Title und Meta-Description mit Düsseldorf-Bezug.
- LocalBusiness JSON-LD auf der Startseite (Name, Adresse, Telefon, Region Düsseldorf).
- Semantische Überschriften-Hierarchie, alt-Texte, Fokus-Zustände, Tastatur-Bedienung.
- Mobile-first. Kein horizontaler Overflow. Keine Konsolenfehler oder Warnungen. Kontrast AA.

## Akzeptanz / Selbst-Verifikation (PFLICHT vor "fertig")
1. `site/dist` lokal servieren.
2. Playwright: Screenshots von Startseite, EINER Leistungs-Detailseite und Kontakt jeweils bei
   1366px und 390px in `screenshots/build/` ablegen.
3. Assert: keine Konsolenfehler, kein horizontaler Overflow (scrollWidth <= clientWidth),
   alle Navigations-Links liefern eine existierende Seite.
4. Kurzer Report am Ende: Dateibaum von `site/dist`, was gebaut wurde, Screenshot-Pfade,
   verbleibende Risiken. NICHT deployen (das übernimmt Lux nach Review).
