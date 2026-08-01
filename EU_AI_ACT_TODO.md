# EU AI Act – Prüfung und Umsetzung

Stand: 1. August 2026

Geltungsbeginn der hier relevanten Transparenzpflichten: 2. August 2026

> Arbeitsdokument, keine Rechtsberatung. Maßgeblich bleiben der Verordnungstext und die Auslegung durch Behörden und Gerichte.

## Ergebnis für die persönliche Website

Die Website ist technisch statisch und stellt selbst keinen Chatbot, interaktiven KI-Agenten, keine Emotionserkennung und keine biometrische Kategorisierung bereit. Die Texte über das Projekt „Sunday“ beschreiben lediglich ein externes KI-Projekt; dadurch interagieren Besucher dieser Website nicht mit einem KI-System.

Die persönliche Website wird wegen Portfolio-, Kontakt- und Wega-Studios-Bezug vorsorglich als berufliche Nutzung behandelt. Das KI-bearbeitete Portrait von Luca Wiegand kann je nach Umfang der Bearbeitung die Deepfake-Kriterien nach Art. 3 Nr. 60 erfüllen. Daher wird es klar gekennzeichnet, auch wenn reine Standardretusche möglicherweise nicht erfasst wäre und vor dem 2. August 2026 erzeugte und bereits veröffentlichte Inhalte laut Kommission nicht rückwirkend gekennzeichnet werden müssen.

Die beiden alten Portraitdateien wurden durch genau ein neues Asset `public/portrait-ai-modified.jpeg` ersetzt; alle vier Vorkommen zeigen auf dieses Asset. Der eingebrannte Hinweis „AI modified“ kann in quadratischen und runden Zuschnitten verschwinden. Die umgesetzte Iteration 2 ergänzt deshalb an jedem Vorkommen eine sichtbare HTML-Kennzeichnung.

## TODO – Iteration 1: Inventar und Asset

- [x] Alle vier Portrait-Vorkommen in `Home.jsx` und `Visitenkarte.jsx` inventarisieren.
- [x] Neues Portrait genau einmal unter `public/portrait-ai-modified.jpeg` ablegen.
- [x] Alle vier Referenzen auf das neue Asset umstellen.
- [x] Die zwei alten, nicht gekennzeichneten Portraitdateien nach erfolgreicher Referenzprüfung entfernen.
- [x] KI-Funktionen und KI-bezogene Texte inventarisieren.
- [x] Anwendbarkeit anhand der finalen Kommissionsleitlinien vom 20. Juli 2026 und der Digital-Omnibus-Verordnung prüfen.

## TODO – Iteration 2: Umsetzung

- [x] An allen vier Portrait-Vorkommen einen dauerhaft sichtbaren, kontrastreichen Text „Mit KI bearbeitet“ unmittelbar am Bild ergänzen.
- [x] Den Hinweis als echten HTML-Text umsetzen, spätestens bei der ersten Bilddarstellung sichtbar und ohne Hover, Tooltip oder weitere Aktion verständlich.
- [x] Quadratische/runde Zuschnitte so anpassen, dass Gesicht und Motiv sinnvoll bleiben; die Kennzeichnung darf nicht ausschließlich von eingebrannten Pixeln abhängen.
- [x] Alle Portrait-Alternativtexte um „Portrait mit KI bearbeitet“ ergänzen.
- [x] Eine wiederverwendbare Portrait-Komponente bevorzugen, damit neue Vorkommen die Kennzeichnung nicht versehentlich verlieren.
- [x] Mobile, Desktop-, Visitenkarten- und Screenreader-Darstellung prüfen.
- [x] Eine kurze KI-Content- und Freigaberegel im Repo dokumentieren: fachliche Prüfung, Rechte/Datenschutz, Deepfake-Prüfung, Kennzeichnung und verantwortliche Freigabe.
- [x] Alte Dateinamen und weitere unmarkierte Portraitkopien per Repository-Suche ausschließen.
- [x] Produktionsbuild ausführen und alle Vorkommen nach Deployment auf `https://luca-wiegand.com/` einschließlich `#/visitenkarte` verifizieren.

### Verifikation am 1. August 2026

- `npm run build` erfolgreich.
- [GitHub-Pages-Build und Deployment](https://github.com/Lucxar/personal-website/actions/runs/30704203105) erfolgreich.
- Live im Desktop- und Mobile-Viewport geprüft: Hero-, Über-mich- und Visitenkarten-Portraits laden das neue 576×772-Asset; die Kennzeichnung liegt jeweils kontrastreich innerhalb des Bildes und verdeckt im runden Visitenkartenformat nicht das Gesicht.

## Nicht anwendbar nach aktuellem Funktionsumfang

- [x] Kein KI-Chatbot oder interaktiver KI-Avatar auf der Website – daher derzeit kein Hinweis nach Art. 50 Abs. 1.
- [x] Keine Emotionserkennung oder biometrische Kategorisierung – daher derzeit kein Hinweis nach Art. 50 Abs. 3.
- [x] Die Beschreibungen von „Sunday“ sind redaktionelle Portfolio-Inhalte und keine direkte KI-Interaktion.
- [x] Keine ungeprüften KI-Texte zur Information der Öffentlichkeit über Angelegenheiten von öffentlichem Interesse – daher derzeit keine Textkennzeichnung nach Art. 50 Abs. 4.
- [x] Keine eigene Anbieterpflicht zur maschinenlesbaren Markierung nach Art. 50 Abs. 2; diese trifft grundsätzlich den Anbieter des generativen KI-Systems.
- [x] Keine Hochrisiko-KI, GPAI-Anbieterpflicht, Konformitätsbewertung oder Registrierung durch die Website.
- [x] Kein globaler KI-Hinweis für normalen Code, Layout oder redaktionell geprüfte Portfolio-Texte erforderlich.

## Rechtsgrundlagen und amtliche Quellen

- [Verordnung (EU) 2024/1689 – insbesondere Art. 3 Nr. 3, 4 und 60; Art. 4; Art. 50; Art. 99; Art. 113](https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32024R1689)
- [Verordnung (EU) 2026/1744 – Digital Omnibus on AI](https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32026R1744)
- [Finale Leitlinien der Kommission zu Art. 50](https://digital-strategy.ec.europa.eu/en/library/guidelines-transparency-obligations-providers-and-deployers-ai-systems)
- [Kommissions-FAQ zu Rollen, Deepfakes, Kennzeichnung, Texten und Übergangsregeln](https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act)
- [EU-Icons und Anforderungen an sichtbare/barrierefreie Kennzeichnungen](https://digital-strategy.ec.europa.eu/en/policies/eu-icons-labelling-ai-generated-content)
- [Freiwilliger Code of Practice zur Transparenz KI-generierter Inhalte](https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content)
- [Bundesnetzagentur: KI-Kompetenz](https://www.bundesnetzagentur.de/DE/Fachthemen/Digitales/KI/7_Kompetenz/artikel.html)

## Wesentliche rechtliche Abgrenzungen

- Art. 50 gilt ab 2. August 2026. Die viermonatige Übergangsfrist betrifft nur Anbieter bereits vorher in Verkehr gebrachter generativer KI-Systeme bei Art. 50 Abs. 2, nicht die Betreiberkennzeichnung nach Art. 50 Abs. 4.
- Ein Deepfake setzt Ähnlichkeit, ein existierendes oder plausibles Bezugsobjekt und eine mögliche Täuschung über Authentizität oder Wahrheitsgehalt voraus. Die konkrete Bearbeitungstiefe des Portraits ist nicht dokumentiert; die Kennzeichnung ist deshalb vorsorglich.
- Eine sichtbare Offenlegung muss klar, unterscheidbar, barrierefrei und bei der ersten Exposition wahrnehmbar sein. Metadaten, `alt`-Text, Tooltip, Impressum oder Footer allein genügen nicht.
- Das freiwillige EU-Icon ist nicht vorgeschrieben. Ein kurzer Klartext-Hinweis ist für diese Portrait-Vorkommen verständlicher und verhältnismäßig.
- Art. 50 verlangt keinen pauschalen Hinweis für KI-unterstützten Quellcode oder für menschlich geprüfte Website-Texte.
