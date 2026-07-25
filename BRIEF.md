# Brief — Dautibau (Trockenbau und Innenausbau, Düsseldorf)

Dieser Brief ist die Grundlage und der Prompt für die Generierung mit Claude Design und Google Stitch.
Qualitätslatte: motionsite.ai und 21st.dev. Ziel ist eine eigenständige, mehrseitige Website, kein
generisches Template und kein One-Pager.

## Required
- Site type: Mehrseitige Website mit gemeinsamer Navigation. Start, Leistungen mit Unterseiten, Referenzen, Über uns, Kontakt, Impressum, Datenschutz.
- Target audience: Privatkunden im Raum Düsseldorf (Sanierung, Ausbau, Renovierung) und kleinere Gewerbe oder Bauträger. Nicht technisch, wollen schnell Vertrauen und einen einfachen Weg zum Anruf.
- Primary goal: Anfrage per Anruf oder WhatsApp. Telefon ist die Haupt-Conversion, Formular ist zweite Wahl.
- Desired feeling: Premium und trotzdem bodenständig. Handwerk, das nach ernstem Profi aussieht. Eigenständig, nicht nach Baukasten.
- Existing path: /data/lux-webflow/projects/dautibau . Deploy als eigenes GitHub Pages Repo endritmurati99/dautibau.
- Deadline / depth: Ernsthaft und iterativ mit zwei Gates.

## Business facts (bestätigt)
- Firma: Dautibau. Inhaber: Nexhbedin Dauti.
- Telefon: 0176 23939474 als tel:+4917623939474. WhatsApp: https://wa.me/4917623939474.
- Adresse: Münsterstraße 360, 40470 Düsseldorf. Region: Düsseldorf und Umkreis.
- Kernleistungen: Trockenbau, Spachtelarbeiten Q1 bis Q4, abgehängte und Akustikdecken, Trennwände und Ständerwände, Dämmung und Schallschutz, Bodenverlegung mit Laminat und Vinyl und Klick-Vinyl, Renovierung und Innenausbau.
- Stärken: jahrelange Erfahrung, ein Ansprechpartner vom Aufmaß bis zur Übergabe, saubere und termintreue Arbeit, Festpreis-Angebot kostenlos und unverbindlich.

## Seitenstruktur (Multi-Page)
1. Startseite. Hero mit Catchphrase und Anruf-CTA. Leistungs-Teaser als Grid mit Links auf die Detailseiten. Warum Dautibau. Ablauf in vier Schritten. Referenzen-Teaser mit Kundenstimmen. Kontakt-CTA-Band.
2. Leistungen als Übersicht plus eigene Detailseite je Leistung: Trockenbau und Trennwände, Decken abgehängt und Akustik, Spachtelarbeiten Q1 bis Q4, Boden verlegen, Dämmung und Schallschutz, Renovierung und Innenausbau. Jede Detailseite mit eigenem Anruf-CTA.
3. Referenzen. Galerie Vorher und Nachher als Platzhalter bis echte Fotos da sind. Kundenstimmen.
4. Über uns. Nexhbedin Dauti, Erfahrung, Arbeitsweise, Foto als Platzhalter.
5. Kontakt. Großes Telefon, WhatsApp, Formular, Adresse, Karte als Platzhalter, Einzugsgebiet.
6. Impressum und Datenschutz. Pflicht in Deutschland, als Platzhalter bis echte Daten vorliegen.

## Tonfall und Copy-Regeln (streng einhalten)
- Deutsch, natürlich, catchy, bodenständig und kompetent. Jeder Satz trägt einen Nutzen und ergibt Sinn.
- Keine Gedankenstriche. Keine Semikolons. Doppelpunkte nur wenn wirklich nötig.
- Kurze starke Sätze. Echte Catchphrases statt Marketing-Floskeln. Keine Emojis. Keine erfundenen Titel oder Zertifikate.
- Catchphrase-Kandidaten: "Gerade Wände sind kein Zufall." "Erst im Streiflicht sieht man, wer sauber arbeitet." "Wir machen aus Rohbau ein Zuhause." "Trockenbau, der sitzt. Termine, die halten."

## Design-Richtung
- Premium und eigenständig. Custom-Details, klarer Typo- und Weißraum-Rhythmus, gezielte kleine Mikro-Interaktionen. Motion nur dezent und mit Zweck.
- Bildsprache aus echten Projektfotos. Bis dahin hochwertige, ruhige Platzhalter. Keine Stockfoto-Optik. Keine Deko-Wasserwaage in der Mitte.
- Ein klarer Akzent, konsistentes Farbsystem, kräftige Hero-Typo. Schlichtes Wortmarken-Logo Dautibau.

## Must-have
- Anruf- und WhatsApp-CTA auf jeder Seite, auf dem Handy als feste Leiste unten.
- Referenzen und Kundenstimmen prominent.
- Lokales SEO Düsseldorf mit Title, Meta, LocalBusiness JSON-LD und eigenen Leistungs-Unterseiten.
- Mobile-first, schnelle Ladezeit, keine Konsolenfehler, kein horizontaler Overflow, Kontrast nach AA.
- Impressum und Datenschutz.

## Must-avoid
- Überladene Startseite mit vielen Bildern und wenig Aussage.
- Deko-Animationen ohne Zweck, Deko-Wasserwaage, Emoji-Leisten, Gradient-Blasen.
- Stockfotos und kopierte Texte. Generische Baukasten-Optik.
- Gedankenstriche und Semikolons im Text.

## Stack
- Generierung: Claude Design als primärer Generator über den eingeloggten Chrome per CDP. Google Stitch für schnelle Multi-Page-Varianten. Referenzniveau motionsite.ai und 21st.dev.
- Output: HTML und Tailwind CSS. Produktion später Next.js und Tailwind möglich.
- Deploy: GitHub Pages über Actions im Repo endritmurati99/dautibau.

## Assets und offene Punkte (vom Kunden)
- E-Mail für Impressum und Formular.
- Impressumsdaten: Kleinunternehmer nach §19 UStG oder USt-IdNr, Eintrag Handwerksrolle bei der HWK Düsseldorf.
- Echte Baustellenfotos Vorher und Nachher, ggf. Logo oder Wunschfarbe.
- Kundenstimmen mit Name, Ort und O-Ton.
- Bestätigung der PLZ 40470 und des Einzugsgebiets.
