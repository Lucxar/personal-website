# Register ausgelieferter Medieninhalte

Stand: 28. August 2026

Geltungsbereich: Alle von `luca-wiegand.com` ausgelieferten Bild-, Audio- und Video-Assets. Dieses Register dokumentiert nur die im Repository belegte Herkunft und Bewertung. Es ersetzt keine Rechte- oder Datenschutzprüfung vor einer Veröffentlichung.

## Bild-Assets

### `public/portrait-ai-modified.jpeg`

- **SHA-256:** `2BF600BC9F49DF9F30D87C5EE0CCEA02483F8D90F3DF52FAA8325C6D3625B9D7`
- **Bearbeitungsumfang:** Generative Veränderung an Gesicht, Körper beziehungsweise Kleidung der abgebildeten Person. Das geht über eine unterstützende Standardbearbeitung (Belichtung, Farbe, Rauschminderung, Retusche) hinaus und liegt damit oberhalb der Erheblichkeitsschwelle.
- **Status:** **Deepfake im Sinne von Art. 3 Nr. 60 KI-VO** — bestätigt, nicht mehr nur vorsorglich. Alle drei Merkmale sind erfüllt: KI-manipuliert, erhebliche Ähnlichkeit mit einer real existierenden Person, und die Darstellung würde als echt erscheinen. Die Kennzeichnungspflicht nach Art. 50 Abs. 4 KI-VO greift damit zwingend. Eine Entfernung der Kennzeichnung ist unzulässig, solange dieses Asset ausgeliefert wird.
- **Auslieferung:** Fünf Vorkommen:
  - Hero Desktop: `src/pages/Home.jsx` (über `src/components/Portrait.jsx`)
  - Hero Mobile: `src/pages/Home.jsx` (über `src/components/Portrait.jsx`)
  - „Über mich“: `src/pages/Home.jsx` (über `src/components/Portrait.jsx`)
  - Visitenkarte (React-Route `/#/visitenkarte`): `src/pages/Visitenkarte.jsx` (über `src/components/Portrait.jsx`)
  - Visitenkarte (statische Seite `/visitenkarte/`): `public/visitenkarte/index.html` — eigenständige Auszeichnung, nutzt `Portrait.jsx` nicht
- **Kennzeichnung:** Jede Darstellung enthält einen sichtbaren HTML-Hinweis unmittelbar im Bild, wahrnehmbar bei der ersten Exposition ohne technische Hilfsmittel oder gesonderte Handlung. Der Alternativtext lautet überall „Portrait mit KI bearbeitet von Luca Wiegand“.
  - Die vier `Portrait.jsx`-Vorkommen zeigen „Mit KI bearbeitet“.
  - Die statische Visitenkarte zeigt „AI Modified“ in bewusst zurückhaltender Gestaltung.
- **Platzierung statische Visitenkarte:** Die Kennzeichnung liegt **unmittelbar unter dem Portrait**, direkt an das Bild geklemmt, und überlagert es nicht. Das ist zulässig: Die EU-Leitlinie verlangt die Kennzeichnung „am oder im Bild"; diese Freigaberegel formuliert entsprechend „unmittelbar beim beziehungsweise im Bild sichtbar". Technisch bleibt der Hinweis das `<figcaption>` innerhalb desselben `<figure>` wie das Bild, wodurch die Zuordnung zum Bild auch für assistive Technologien eindeutig bleibt. Er ist ohne Scrollen, Klicken oder technische Hilfsmittel bei der ersten Exposition sichtbar. **Unzureichend wären** ausschließlich Metadaten, ein Footer, das Impressum oder eine erst nach einer Handlung sichtbare Einblendung.
- **Kontrastnachweis statische Visitenkarte:** Text `#73726E` bei 10 px auf der weißen Kartenfläche `#FFFFFF`. Kontrast **4,82:1**. Da der Hinweis nicht mehr über dem Foto liegt, ist der Untergrund deterministisch und es gibt keinen ungünstigsten Fall mehr. Der Mindestwert beträgt 4,5:1; darauf verweist die EU-Leitlinie zu Art. 50 Abs. 5 KI-VO über die Barrierefreiheitsanforderungen. Die Marge von +0,32 ist bewusst gewählt, weil Kantenglättung bei 10-px-Text den effektiv wahrgenommenen Kontrast senkt.
- **Gestaltungsgrenze:** Die Kennzeichnung ist damit bis an die zulässige Untergrenze zurückgenommen. Größe und Stil dürfen nach der Leitlinie variieren, solange die Kennzeichnung klar, zugänglich, lesbar und erkennbar bleibt — der Kontrastwert ist die harte Grenze. **Farbe und Schriftgröße dürfen nicht weiter abgesenkt und der Hinweis darf nicht vom Bild weggerückt werden**; jede dieser Änderungen führt eine zwingende Kennzeichnung unter den Grenzwert beziehungsweise aus der geforderten Bildnähe. Eine Ausführung ohne wahrnehmbaren Kontrast, etwa weiß auf weiß (1,00:1), ist unzulässig und wurde ausdrücklich verworfen.
- **Freigabe:** Vor jeder erneuten Bearbeitung, Ersetzung oder zusätzlichen Nutzung sind Rechte/Datenschutz, Umfang der KI-Bearbeitung, Deepfake-Einstufung und Kennzeichnung nach `AI_CONTENT_RELEASE_POLICY.md` erneut zu prüfen.

### `public/SiegerfotoGameJam2025.jpeg`

- **SHA-256:** `E04089ED524239F3313C232B9CE8CF2120A233AD4823D8860D476EB1232D4E8C`
- **EXIF:** Apple iPhone 13; Aufnahmezeitpunkt `2025-11-26 15:31:54`. Diese Metadaten sind ein positiver repo-interner Beleg für eine Kameraaufnahme.
- **Auslieferung:** Projektkarte auf der Startseite (`src/pages/Home.jsx`) und Terrafix-Detailseite (`src/pages/DetailTerrafix.jsx`).
- **Bewertung anhand der Repository-Evidenz:** Es gibt keine repo-interne Evidenz für eine KI-Erzeugung oder KI-Bearbeitung. Deshalb wird keine Kennzeichnung nach Art. 50 angebracht. Der EXIF-Beleg einer Kameraaufnahme ist jedoch keine Garantie gegen eine spätere Bearbeitung.
- **Offene Release-Prüfung:** Herkunft, Nutzungsrechte, Einwilligungen abgebildeter Personen und eine etwaige KI-Bearbeitung sind bei jeder künftigen Veröffentlichung oder Änderung nach `AI_CONTENT_RELEASE_POLICY.md` zu prüfen. Ergibt die Prüfung eine einschlägige KI-Erzeugung oder -Bearbeitung, wird die Kennzeichnung vor Auslieferung ergänzt.

## Audio und Video

Es gibt zum Stand dieses Registers keine ausgelieferten Audio- oder Video-Assets und keine eingebetteten Audio-/Videoquellen. Vor einer späteren Aufnahme in die Website muss das Asset in dieses Register aufgenommen und nach der Freigaberegel geprüft werden.
