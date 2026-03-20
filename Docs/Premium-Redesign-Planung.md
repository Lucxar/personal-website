# Premium Redesign — Vollstandige Planung

Dieses Dokument dient als **kompletter Leitfaden** fur die Transformation der aktuellen techie/informatik-lastigen Webseite in ein Premium-Webdesign (Apple-Qualitat). Es dokumentiert den Ist-Zustand vollstandig, damit wahrend der Implementierung kein Originalcode oder Inhalt verloren geht.

---

## TEIL 1: IST-ZUSTAND (Vollstandige Dokumentation)

### 1.1 Technischer Stack

| Komponente | Technologie |
|---|---|
| Framework | React 19 (Vite 6) |
| Styling | Tailwind CSS v4 |
| Routing | react-router-dom v7 (HashRouter) |
| Icons | FontAwesome Free 6.7 |
| Deployment | GitHub Actions → GitHub Pages |
| Domain | luca-wiegand.com (via CNAME) |

### 1.2 Dateistruktur (Quellcode)

```
src/
├── main.jsx                     # React Entry Point
├── App.jsx                      # Router + Layout (HashRouter)
├── index.css                    # Tailwind + Custom Styles
├── hooks/
│   └── useRevealOnScroll.js     # IntersectionObserver Hook
├── components/
│   ├── AnimatedBackground.jsx   # Mesh-Gradient Blobs (fixed, fullscreen)
│   ├── Navbar.jsx               # Fixed Navbar mit Mobile-Menu
│   ├── BackButton.jsx           # "Zuruck zur Ubersicht" Button
│   ├── BentoCard.jsx            # Glassmorphism Kachel + Reveal-Animation
│   ├── BentoGrid.jsx            # CSS Grid Container (1/2/4 Spalten)
│   ├── SectionLabel.jsx         # Uberschrift fur Sektionen
│   └── tiles/
│       ├── HeroTile.jsx         # (ungenutzt — Hero ist direkt in Home.jsx)
│       ├── ProfileImageTile.jsx # (ungenutzt — Profilbild direkt in Home.jsx)
│       ├── AboutTile.jsx        # (ungenutzt — Text direkt in Home.jsx)
│       ├── SkillTile.jsx        # Skill-Kachel mit Icon + Liste
│       ├── EmbeddedSystemsTile.jsx  # Embedded Systems Kachel
│       ├── ExperienceTile.jsx   # Erfahrungs-Kachel (klickbar)
│       ├── EducationTile.jsx    # (ungenutzt — Bildung direkt in Home.jsx)
│       ├── InterdisciplinaryTile.jsx  # Interdisziplinare Erfahrung
│       ├── ProjectTile.jsx      # Projekt-Kachel (klickbar)
│       ├── GameJamPhotoTile.jsx # (ungenutzt — Foto auf Terrafix-Detail)
│       └── ContactTile.jsx      # (ungenutzt — Kontakt direkt in Home.jsx)
└── pages/
    ├── Home.jsx                 # Hauptseite
    ├── DetailLiketik.jsx        # Detail: LikeTik/Axinity
    ├── DetailWega.jsx           # Detail: Wega Studios
    ├── DetailSentrix.jsx        # Detail: Sentrix Code
    ├── DetailTerrafix.jsx       # Detail: Terrafix Game Jam
    ├── DetailInternship.jsx     # Detail: Programmier-Praktikum
    ├── DetailCompiler.jsx       # Detail: Pascal-to-JVM Compiler
    ├── DetailKontakt.jsx        # Kontaktseite mit Formular
    └── Visitenkarte.jsx         # Standalone digitale Visitenkarte
```

### 1.3 Routing-Struktur

| Route | Komponente | Beschreibung |
|---|---|---|
| `/` | Home | Hauptseite mit allen Sektionen |
| `/detail/liketik` | DetailLiketik | LikeTik Detail |
| `/detail/wega` | DetailWega | Wega Studios Detail |
| `/detail/sentrix` | DetailSentrix | Sentrix Code Detail |
| `/detail/terrafix` | DetailTerrafix | Terrafix Game Jam Detail |
| `/detail/internship` | DetailInternship | Uni-Praktikum Detail |
| `/detail/compiler` | DetailCompiler | Compiler-Projekt Detail |
| `/kontakt` | DetailKontakt | Kontaktformular + Profile |
| `/visitenkarte` | Visitenkarte | Standalone Visitenkarte (ohne Navbar) |

### 1.4 Farbschema (Aktuell)

```css
--color-primary: #3b82f6;   /* Blue-500 — Akzentfarbe */
--color-dark: #0f172a;       /* Slate-900 — Hintergrund */
--color-card: #1e293b;       /* Slate-800 — Kartenfarbe */
--color-text: #f8fafc;       /* Slate-50 — Textfarbe */
--color-muted: #94a3b8;      /* Slate-400 — Sekundartext */
```

### 1.5 Design-Elemente (Aktuell)

- **Hintergrund:** Animierte Mesh-Gradient Blobs (3 Blobs: blau, indigo, violett, blur(80px), opacity 0.15, langsame Bewegungsanimation 20-25s)
- **Karten:** Glassmorphism (rgba(30,41,59,0.5), backdrop-blur(12px), 1px border white/8%, hover: scale(1.02) + blaue border + glow)
- **Scroll-Reveal:** IntersectionObserver, translateY(30px) → 0, opacity 0→1, 0.6s ease, gestaffelt per delay
- **Fonts:** System-Fonts (keine Custom Fonts)
- **Scrollbar:** Custom-styled (dunkel)
- **Selection:** Blaue Selektion (primary bg + white text)

---

## TEIL 2: ALLE INHALTE (Vollstandig)

### 2.1 Hero-Sektion

- **Tag:** "Software Developer" (uppercase, primare Farbe)
- **Name:** "Luca Wiegand" (bold, 4xl/5xl)
- **Profilbild:** `/profilbild1zu1.png` (quadratisch, 48x48/56x56 w/h, rounded-2xl, border white/10)
- **Text 1:** "Ich mag es, Probleme zu verstehen und durch Code zu losen — ob Backend-Systeme, Webanwendungen oder Spieleentwicklung. Am meisten reizt mich dabei, Ideen von Grund auf umzusetzen und dabei sauber und durchdacht zu arbeiten."
- **Text 2:** "Ich will mich fachlich weiterentwickeln, neue Technologien lernen und langfristig mehr Verantwortung in Projekten und Teams ubernehmen."
- **CTA 1:** "Projekte ansehen" → scrollt zu #projects (blauer Button)
- **CTA 2:** "Kontaktieren" → navigiert zu /kontakt (outline Button)
- **Layout:** Flex row (Bild links, Text rechts) auf Desktop, column auf Mobile

### 2.2 Technische Expertise (Skills-Sektion)

**Uberschrift:** "Technische Expertise"

**Obere Reihe (4 Kacheln):**

1. **Java Ecosystem** (Icon: fas fa-server, Farbe: blue)
   - Java (Expertise)
   - Spring Boot & Modulith
   - Architekturpattern
   - Thymeleaf

2. **Web & Fullstack** (Icon: fas fa-globe, Farbe: green)
   - NestJS (Node.js)
   - HTML5
   - CSS3
   - REST APIs

3. **Data & Ops** (Icon: fas fa-database, Farbe: purple)
   - Docker
   - PostgreSQL & MySQL
   - Git / Version Control

4. **Low-Level** (Icon: fas fa-terminal, Farbe: red)
   - C++ & C
   - Algorithmen & Datenstrukturen
   - Performanzoptimierung

**Untere Reihe (2 breite Kacheln, je 2 Spalten):**

5. **Game Development** (Icon: fas fa-gamepad, Farbe: red)
   - Text: "In meiner Freizeit entwickle ich Spiele mit der Unreal Engine — von Gameplay-Logik bis hin zu kompletten Prototypen. Spieleentwicklung ist fur mich kreatives Ventil und technische Herausforderung zugleich."
   - Tags: Unreal Engine, C++, Blueprints

6. **Embedded Systems & Hardware** (Icon: fas fa-microchip, Farbe: amber)
   - Text: "Starkes, tiefgreifendes technisches Fundament — keine Beruhrungsangste mit hardwarenaher Architektur. Praktische Erfahrung durch universitare Projekte, vom Mikrocontroller bis zum FPGA."
   - Tags: Arduino, ESP32, STM32, 65C02, FPGAs, Assembly, C, Basic

### 2.3 Berufserfahrung & Unternehmen

**Uberschrift:** "Berufserfahrung & Unternehmen"

**Kacheln (4-spaltig):**

1. **LikeTik** (klickbar → /detail/liketik)
   - Label: "STARTUP"
   - Rolle: "Backend Developer"
   - Beschreibung: "Aktive Mitentwicklung einer skalierbaren E-Commerce-Plattform von der allerersten Zeile Code an."
   - Pfeil-Icon rechts oben (hover: primary)

2. **Wega Studios** (klickbar → /detail/wega)
   - Label: "FOUNDER"
   - Rolle: "Inhaber & Entwickler"
   - Beschreibung: "Mein eigenes Gewerbe fur Software-Dienstleistungen und individuelle Entwicklungsprojekte."
   - Pfeil-Icon rechts oben (hover: primary)

3. **Bildung** (nicht klickbar)
   - Icon: fas fa-graduation-cap (primary)
   - "Heinrich-Heine-Universitat Dusseldorf"
   - "B.Sc. Informatik"
   - "Aktuell im Studium."

4. **Interdisziplinare Erfahrung** (row-span-2, nicht klickbar)
   - Icon: fas fa-globe (teal)
   - 2 Monate USA — sehr gutes Business English (Icon: fas fa-plane)
   - 6 Monate Logistik — Prozessoptimierung & Beratung (Icon: fas fa-boxes-stacked)
   - "Ubersetzer" zwischen IT und Fachbereich — Requirements Engineering (Icon: fas fa-handshake)

### 2.4 Projekte

**Uberschrift:** "Projekte"

**Kacheln:**

1. **Terrafix** (klickbar → /detail/terrafix)
   - Badge: "GEWINNER" (gelb, mit Pokal-Icon)
   - Subtitle: "HHU GAME JAM 2025"
   - Icon: fas fa-gamepad (primary)
   - Beschreibung: "Ein Spiel entwickelt mit der Unreal Engine in einem 3-kopfigen Team."
   - "Details →"

2. **Programmier-Praktikum** (klickbar → /detail/internship)
   - Subtitle: "UNIVERSITATSPROJEKT"
   - Icon: fas fa-code (purple)
   - Beschreibung: "Ein umfangreiches Softwareprojekt im Rahmen des Studiums."
   - "Details →"

3. **Pascal-to-JVM Compiler** (klickbar → /detail/compiler)
   - Subtitle: "COMPILERBAU"
   - Icon: fas fa-microchip (orange)
   - Beschreibung: "Ein vollstandiger Compiler, der Pascal-Quellcode in ausfuhrbaren JVM-Bytecode ubersetzt."
   - "Details →"

### 2.5 Kontakt-Bereich (Hauptseite)

- Blaue Trennlinie (2/3 Breite, primare Farbe)
- **Buttons (horizontal, zentriert):**
  - GitHub: https://github.com/Lucxar (Icon: fab fa-github)
  - Codeforces: https://codeforces.com/profile/lucxar (Icon: fas fa-code, rot)
  - LinkedIn: https://linkedin.com/in/luca-wiegand-385359279/ (Icon: fab fa-linkedin, blau)
  - Kontakt speichern: `/luca_wiegand_public.vcf` Download (Icon: fas fa-address-card, grun)

### 2.6 Footer

- "© 2025 Luca Wiegand / Wega Studios. Alle Rechte vorbehalten."

### 2.7 Navbar

- **Logo-Button:** "LUCA WIEGAND" (bold, tracking-wider, glasig)
- **Desktop-Links:** Skills | Erfahrung | Projekte | Kontakt (blauer Button)
- **Mobile:** Hamburger-Menu (fa-bars / fa-xmark)
- **Stil:** Fixed, z-50, bg-dark/70, backdrop-blur-xl, border-bottom white/10

### 2.8 Detail-Seiten (Vollstandig)

#### DetailLiketik (`/detail/liketik`)
- Zurück-Button → Hauptseite
- Glass-Card Container
- Titel: "LikeTik" + Badge "BACKEND" (blau)
- Untertitel: "Axinity GmbH"
- Einleitung: "Bei LikeTik (Axinity GmbH) bin ich als Backend-Developer seit der Grundungsphase massgeblich am Aufbau der Plattform beteiligt – from scratch, seit der allerersten Zeile Code."
- Aufgaben (Liste):
  - Konzeption und Implementierung der Backend-Architektur.
  - Entwicklung von REST-APIs fur die Mobile- und Web-Clients.
  - Integration von Datenbanken und Sicherstellung der Datenintegritat.
  - Aufbau der gesamten Plattform-Infrastruktur von Grund auf.
- Link-Box: https://liketik.com ("Zur Webseite von LikeTik")

#### DetailWega (`/detail/wega`)
- Zurück-Button → Hauptseite
- Glass-Card Container
- Titel: "Wega Studios"
- Untertitel: "Inhaber & Grunder" (primare Farbe)
- Text 1: "Wega Studios ist mein eigenes Unternehmen, unter dem ich als selbststandiger Softwareentwickler tatig bin. Ich unterstutze Unternehmen und Privatpersonen bei der Umsetzung ihrer digitalen Projekte — von der ersten Idee bis zur fertigen Losung."
- Text 2: "Ob kleinere Auftrage wie Webseiten und Tools oder grossere Softwareprojekte mit Backend, Datenbank und Schnittstellen — ich arbeite mich in jedes Thema ein und liefere saubere, durchdachte Ergebnisse. Der direkte Draht zu mir als Ansprechpartner sorgt dabei fur kurze Wege und unkomplizierte Zusammenarbeit."
- Text 3: "Sie haben ein Projekt im Kopf oder brauchen Unterstutzung bei der Entwicklung? Ich freue mich uber eine Anfrage — gemeinsam finden wir die passende Losung."
- Button: "Kontakt aufnehmen" → /kontakt (blau, mit Briefumschlag-Icon)

#### DetailSentrix (`/detail/sentrix`)
- Zurück-Button → Hauptseite
- Glass-Card Container
- Titel: "Sentrix Code"
- Untertitel: "Mitgrunder" (primare Farbe)
- Text: "Als Mitgrunder von Sentrix Code arbeite ich mit einem Team daran, umfassende Softwarelosungen bereitzustellen."
- Info-Box: "Webseite folgt" (Icon: fas fa-globe)

#### DetailTerrafix (`/detail/terrafix`)
- Zurück-Button → Hauptseite
- Glass-Card Container
- Titel: "Terrafix" + Badge "1. PLATZ HHU GAME JAM 2025" (gelb, Pokal)
- Untertitel: "Unreal Engine Project" (primare Farbe, monospace)
- Siegerfoto: `/SiegerfotoGameJam2025.jpeg` (h-64/h-80, object-cover, hover: scale(1.1))
- Text 1: "Terrafix entstand im Rahmen des HHU Game Jam 2025 — innerhalb von nur 48 Stunden entwickelten wir als 3-kopfiges Team ein vollstandiges Spiel mit der Unreal Engine. Die Idee: Ein Reverse-Factorio, in dem man die Welt nicht ausbeutet, sondern rettet. Der Spieler steuert einen Roboter, der eine verwustete Erde Stuck fur Stuck wieder belebt — Boden rekultivieren, Vegetation zuruckbringen und Okosysteme wiederherstellen."
- Text 2: "Das Konzept hat die Jury uberzeugt: Am Ende konnten wir uns gegen alle anderen Teams durchsetzen und den ersten Platz erringen. Eine intensive Erfahrung, die gezeigt hat, wie viel in kurzester Zeit entstehen kann, wenn Teamwork, Kreativitat und technisches Know-how zusammenkommen."
- Tech-Tags: Unreal Engine 5, Blueprints, C++, Git Collaboration (purple)
- Link: https://maystudios.itch.io/terrafix ("Hier geht's zum Spiel" mit Play-Icon)

#### DetailInternship (`/detail/internship`)
- Zurück-Button → Hauptseite
- Glass-Card Container
- Titel: "Programmier-Praktikum"
- Untertitel: "HHU Universitatsprojekt" (purple)
- Text 1: "Im Rahmen eines Universitatsprojekts an der Heinrich-Heine-Universitat habe ich ein Matching- und Organisationssystem entwickelt, das den gesamten Prozess rund um wissenschaftliche Abschlussarbeiten vereinfacht."
- Text 2: "Die Plattform ermoglicht es Studierenden, passende Professoren und wissenschaftliche Mitarbeiter fur ihre Abschlussarbeit zu finden, Themen abzustimmen, Dokumente auszutauschen, Termine zu koordinieren und direkt zu kommunizieren — alles an einem Ort. Das Ziel: Den oft unubersichtlichen Weg von der Themenfindung bis zur fertigen Arbeit strukturiert und effizient zu gestalten."
- Text 3: "Umgesetzt wurde das Projekt als vollstandige Web-Anwendung mit Spring Boot im Backend und Thymeleaf fur die serverseitig gerenderte, interaktive Benutzeroberflache. Das Ergebnis ist eine nutzbare Plattform mit echtem Frontend, uber die Studierende und Lehrende direkt im Browser arbeiten konnen."

#### DetailCompiler (`/detail/compiler`)
- Zurück-Button → Hauptseite
- Glass-Card Container
- Titel: "Pascal-to-JVM Compiler"
- Untertitel: "Compilerbau-Projekt" (orange)
- Einleitung: "Ein vollstandiger Compiler, der Pascal-Quellcode uber mehrere Phasen hinweg in ausfuhrbaren JVM-Bytecode ubersetzt. Das Projekt deckt den kompletten Compilerbau-Prozess ab — vom Parsing uber die semantische Analyse bis hin zur Codegenerierung und Assemblierung."
- **Compilation-Pipeline** (nummerierte Liste):
  1. Parsing: ANTLR-4-Grammatik → Parse-Tree
  2. Semantische Analyse: Typprufung + Scope-Validierung (TypeCheckVisitor)
  3. Codegenerierung: AST-Traversierung → Jasmin-Assembler
  4. Assemblierung: Jasmin → .class-Dateien
- **Sprachfeatures** (Tags): Integer, Double, String, Boolean, Arithmetik, Vergleiche, Logik, If/Else, While-Schleifen, Funktionen, Rekursion, writeln()
- **Optimierung & Statische Analyse:**
  - Beschreibung des Kontrollflussgraphen (CFG)
  - **Liveness Analysis:** Datenflussanalyse fur Registerallokation (Icon: fas fa-heartbeat)
  - **Constant Propagation:** Statische Analyse fur Compile-Zeit-Optimierung (Icon: fas fa-equals)
- **Technologien** (Tags): Java, Gradle, ANTLR 4, Jasmin, JUnit 5, JVM Bytecode (purple)
- Link: https://github.com/Lucxar/Pascal-to-JVM-Bytecode-Compiler ("Hier geht's zum Repository")

#### DetailKontakt (`/kontakt`)
- Zurück-Button → Hauptseite
- Glass-Card Container
- Titel: "Kontakt"
- Untertitel: "Luca Wiegand — Wega Studios" (primare Farbe)
- **Kontaktformular** (Web3Forms API, Access Key: b7e14579-c1bd-4745-a2e7-16ec17705437):
  - E-Mail-Feld (required)
  - Nachricht-Textarea (required, 5 Zeilen)
  - Submit-Button: "Nachricht senden" (mit fa-paper-plane Icon, Spinner beim Senden)
  - Erfolgs-/Fehlermeldung
- **Profile-Links:**
  - GitHub: https://github.com/Lucxar
  - Codeforces: https://codeforces.com/profile/lucxar
  - LinkedIn: https://linkedin.com/in/luca-wiegand-385359279/
- **VCF-Download:** `/luca_wiegand_public.vcf` ("Kontakt speichern", grun)

#### Visitenkarte (`/visitenkarte`)
- **Standalone-Seite** (keine Navbar, kein AnimatedBackground)
- Gradient-Header (blue-900 → slate-800)
- Profilbild (rund, 32x32, mit dunklem Ring)
- Name: "Luca Wiegand"
- Rolle: "Software Developer"
- Firma: "Wega Studios"
- **Aktionen:**
  - Kontakt speichern: `/visitenkarte/luca_wiegand.vcf` (grun, mit VCF-Download)
  - Webseite offnen: Link zu / (grau)
  - LinkedIn: https://linkedin.com/in/luca-wiegand-385359279/ (LinkedIn-blau)
  - GitHub: https://github.com/Lucxar (dunkel)
- Footer: "© 2025 Wega Studios"

### 2.9 Assets

| Datei | Pfad | Verwendung |
|---|---|---|
| Profilbild (quadratisch) | `/profilbild1zu1.png` | Hero, Visitenkarte |
| Profilbild (16:9) | `/profilbild16zu9.png` | (aktuell ungenutzt) |
| Siegerfoto Game Jam | `/SiegerfotoGameJam2025.jpeg` | Terrafix-Detail, GameJamPhotoTile |
| VCF offentlich | `/luca_wiegand_public.vcf` | Kontakt-Download (ohne Telefon) |
| VCF privat | `/visitenkarte/luca_wiegand.vcf` | Visitenkarte-Download (mit Telefon) |
| CNAME | `/CNAME` | Domain: luca-wiegand.com |

### 2.10 Externe Links (Vollstandig)

| Ziel | URL |
|---|---|
| GitHub | https://github.com/Lucxar |
| Codeforces | https://codeforces.com/profile/lucxar |
| LinkedIn | https://linkedin.com/in/luca-wiegand-385359279/ |
| LikeTik | https://liketik.com |
| Terrafix (itch.io) | https://maystudios.itch.io/terrafix |
| Compiler (GitHub) | https://github.com/Lucxar/Pascal-to-JVM-Bytecode-Compiler |
| Kontaktformular API | https://api.web3forms.com/submit |
| E-Mail | wegastudios@outlook.de |

---

## TEIL 3: PREMIUM REDESIGN — VISION & KONZEPT

### 3.1 Design-Philosophie

**Von:** Techie Dark Mode mit leuchtenden Mesh-Gradients, Glassmorphism, Neon-Glows
**Zu:** Minimalistisches, zurueckhaltendes Premium-Design mit Klarheit und Intentionalitaet

**Kernprinzipien:**
1. Restraint + Intention + Craft — Jedes Element hat einen Zweck
2. 50ms-Regel — Qualitaet muss sofort erkennbar sein
3. One Thing Per Section — Keine uberfullten Kacheln
4. Whitespace ist Luxus — Grosszuegige Abstande
5. Konsistenz ist Handwerkskunst — 8px Grid, Design-Tokens

### 3.2 Neues Farbschema

```css
/* Premium Palette — Zurueckhaltend, Vertrauenswuerdig */
--color-bg: #FAFAFA;           /* Off-White Hintergrund */
--color-surface: #FFFFFF;       /* Kartenflaechen */
--color-surface-alt: #F5F5F7;   /* Sekundaere Flaechen (Apple-Grau) */
--color-text: #1D1D1F;          /* Primaertext (fast-schwarz) */
--color-text-secondary: #6E6E73; /* Sekundaertext */
--color-accent: #0071E3;        /* Apple-Blau — Primaer-Akzent */
--color-accent-hover: #0077ED;  /* Hover-Zustand */
--color-border: #D2D2D7;        /* Subtile Raender */
--color-border-light: #E8E8ED;  /* Noch subtilere Raender */

/* Dark Mode */
--color-bg-dark: #1A1A1A;
--color-surface-dark: #242424;
--color-text-dark: #E0E0E0;
```

### 3.3 Typografie

```
Primar-Font (Headings): "Inter" oder "SF Pro Display" (via Google Fonts: Inter)
Sekundar-Font (Body): "Inter" — gleiche Familie, verschiedene Gewichte

H1: clamp(2.5rem, 5vw, 4rem) / font-weight: 700 / line-height: 1.1
H2: clamp(2rem, 4vw, 3rem)  / font-weight: 600 / line-height: 1.2
H3: clamp(1.25rem, 2.5vw, 1.5rem) / font-weight: 600 / line-height: 1.3
Body: 1rem (16px) / font-weight: 400 / line-height: 1.6
Small: 0.875rem (14px) / font-weight: 400 / line-height: 1.5
```

### 3.4 Neuer Seitenfluss (Homepage)

Der Flow wird komplett umstrukturiert — von einem dichten Bento-Grid zu einem linearen, atmendem Premium-Layout:

```
1. NAVBAR (fixed, transparent → solid on scroll)
   └── "Luca Wiegand" (links) | Uber mich · Expertise · Projekte · Kontakt (rechts)

2. HERO SECTION (fullscreen, zentriert)
   ├── Grosses Profilbild (rund, 160-200px, subtiler Schatten)
   ├── Name: "Luca Wiegand" (H1, gross und kraftvoll)
   ├── Rolle: "Software Developer" (sekundar, dezent)
   ├── Kurztext (1-2 Satze, max 65ch Breite)
   └── CTA: "Projekte entdecken" (ein einzelner Button, prominent)

3. UBER MICH / KURZPROFIL
   ├── Linke Spalte: Profilbild 16:9 (das bisher ungenutzte!)
   └── Rechte Spalte:
       ├── "Hallo, ich bin Luca." (personlich, warm)
       ├── Beide Absatze aus dem aktuellen Hero
       ├── Bildung: HHU Dusseldorf, B.Sc. Informatik
       └── Interdisziplinare Erfahrung (integriert, nicht separate Kachel)

4. BERUFSERFAHRUNG
   ├── "Wo ich arbeite" (H2)
   ├── LikeTik — Karte mit Link zu Detail
   ├── Wega Studios — Karte mit Link zu Detail
   └── Optional: Sentrix Code

5. TECHNISCHE EXPERTISE
   ├── "Was ich kann" (H2)
   └── Elegante Skill-Praesentation (keine Bento-Kacheln):
       ├── 2-3 Haupt-Bereiche als grosse Abschnitte
       ├── Skill-Tags / Chips elegant aufgelistet
       └── Game Dev & Embedded als eigene kleine Abschnitte

6. PROJEKTE (Showcase)
   ├── "Ausgewahlte Projekte" (H2)
   ├── Terrafix — Gross, mit Foto, Badge, Link
   ├── Compiler — Mittelgross, mit Tech-Beschreibung
   └── Praktikum — Mittelgross, akademisch

7. KONTAKT / CTA
   ├── "Lass uns zusammenarbeiten" (H2)
   ├── Kurzer einladender Text
   ├── Kontaktformular (schlank, elegant)
   └── Social Links (dezent, in einer Zeile)

8. FOOTER
   ├── Links: Social-Icons
   ├── Mitte: Navigations-Links
   └── Rechts: Copyright + Kontakt speichern
```

### 3.5 Detail-Seiten — Neues Design

Alle Detail-Seiten folgen einem einheitlichen Premium-Template:

```
┌─────────────────────────────────────┐
│ NAVBAR                              │
├─────────────────────────────────────┤
│                                     │
│  ← Zuruck                          │
│                                     │
│  LABEL (z.B. "Startup" — dezent)   │
│  Titel (H1, gross)                 │
│  Untertitel (sekundartext)          │
│                                     │
│  ─────────── (subtile Linie)       │
│                                     │
│  Inhalt (max-width: 70ch)          │
│  Bilder / Tech-Tags                │
│  Links / CTAs                      │
│                                     │
│  FOOTER                            │
└─────────────────────────────────────┘
```

- Weisse/helle Hintergrundflaeche statt Glass-Card
- Grosszuegige Abstande (120px oben, 80px unten)
- Typografie als Hauptgestaltungsmittel statt Farb-Badges
- Ein CTA pro Seite

### 3.6 Visitenkarte — Beibehaltung

Die Visitenkarte (`/visitenkarte`) wird im Grundlayout beibehalten, aber stilistisch an das neue Design angepasst (heller, sauberer, gleiche Typografie).

---

## TEIL 4: IMPLEMENTIERUNGSPLAN

### Phase 0: Vorbereitung (JETZT — vor jeder Code-Anderung)

- [x] Dieses Planungsdokument erstellen
- [ ] Sicherstellen, dass wir auf dem Branch `PremiumDesign` arbeiten
- [ ] Bestatigung vom User einholen

### Phase 1: Design-System & Grundlagen

**Dateien, die NEU erstellt werden:**
- `src/index.css` (wird uberschrieben — Originalinhalt hier dokumentiert)
- Keine neuen Konfigurationsdateien noetig (Tailwind v4 verwendet CSS @theme)

**Dateien, die VERANDERT werden:**
- `index.html` — Meta-Tags, Font-Link (Inter von Google Fonts), ggf. Theme-Color
- `src/index.css` — Komplett neues Design-System (Tokens, Animationen, Base-Styles)

**Schritte:**
1. Google Fonts "Inter" einbinden (via `<link>` in index.html)
2. Design-Tokens definieren in `src/index.css` (@theme Block)
3. Utility-Klassen fur Premium-Animationen
4. Base-Styles (body, headings, links, scrollbar)

### Phase 2: Layout-Komponenten (Neue Basis)

**Dateien, die NEU erstellt werden:**
- `src/components/Section.jsx` — Wiederverwendbarer Section-Container mit Premium-Spacing
- `src/components/Container.jsx` — Max-Width-Wrapper mit Padding
- `src/components/Card.jsx` — Premium-Karte (ersetzt BentoCard/glass-card)
- `src/components/Button.jsx` — Premium-Button-Varianten (primary, secondary, ghost)
- `src/components/SectionHeading.jsx` — Uberschriften mit optionalem Label

**Dateien, die ERHALTEN bleiben (vorlaufig):**
- Alle bestehenden Dateien bleiben physisch erhalten, bis die neuen Komponenten fertig sind

**Schritte:**
1. Section-Wrapper mit 8px-Grid-Spacing
2. Container mit max-width und Padding
3. Card mit subtilen Schatten (layered, keine Glassmorphism)
4. Button mit hover-Lift und Schatten
5. SectionHeading mit Label-Option

### Phase 3: Navbar (Redesign)

**Dateien, die VERANDERT werden:**
- `src/components/Navbar.jsx` — Komplett neues Design

**Design:**
- Transparent auf Hero → Solid beim Scrollen (IntersectionObserver)
- Saubere Typografie statt glasigem Button
- Kein Glassmorphism
- Premium Mobile-Menu (Slide-Down, nicht abrupt)

### Phase 4: Homepage (Sektion fur Sektion)

**Dateien, die VERANDERT werden:**
- `src/pages/Home.jsx` — Komplett neuer Aufbau
- Bestehende Tile-Komponenten werden durch neue Sektionen ersetzt

**Reihenfolge:**
1. Hero Section — Grosses, zentriertes Layout mit Profilbild
2. Uber-Mich — Zwei-Spalten-Layout mit 16:9-Bild
3. Berufserfahrung — Elegante Karten
4. Expertise — Strukturierte Skill-Darstellung
5. Projekte — Showcase-Karten mit Hover-Effekten
6. Kontakt/CTA — Formular + Social Links
7. Footer — Multi-Column

### Phase 5: Detail-Seiten (Einheitliches Template)

**Dateien, die VERANDERT werden:**
- `src/pages/DetailLiketik.jsx`
- `src/pages/DetailWega.jsx`
- `src/pages/DetailSentrix.jsx`
- `src/pages/DetailTerrafix.jsx`
- `src/pages/DetailInternship.jsx`
- `src/pages/DetailCompiler.jsx`
- `src/pages/DetailKontakt.jsx`

**Design:**
- Einheitliches helles Layout
- Grosszuegige Typografie
- Subtile Schatten statt Glass-Cards
- Zuruck-Navigation oben links
- Max-width: 70ch fur Lesbarkeit

### Phase 6: Visitenkarte & Kontakt

**Dateien, die VERANDERT werden:**
- `src/pages/Visitenkarte.jsx` — Stilistische Anpassung an Premium-Theme
- `src/pages/DetailKontakt.jsx` — Premium-Formular-Design

### Phase 7: Animationen & Polish

- Scroll-Reveal mit `cubic-bezier(0.16, 1, 0.3, 1)`
- Hover-Effekte (translateY(-2px) + Schatten)
- Page-Transitions (fade)
- `prefers-reduced-motion` Respekt
- AnimatedBackground.jsx entfernen oder durch subtileren Effekt ersetzen

### Phase 8: Performance & Cleanup

- Ungenutzte Tile-Komponenten entfernen (HeroTile, ProfileImageTile, AboutTile, etc.)
- BentoCard, BentoGrid, SectionLabel durch neue Komponenten ersetzen
- Bilder optimieren (WebP-Varianten, srcset)
- Font-Preloading
- Lighthouse-Audit

---

## TEIL 5: CHECKLISTE — KEINE INFORMATIONEN VERLOREN

Folgende Inhalte mussen im Redesign zu 100% erhalten bleiben:

### Texte
- [ ] Hero-Texte (beide Absatze)
- [ ] Alle Skill-Kategorien mit allen Items
- [ ] Game Development Text + Tags
- [ ] Embedded Systems Text + Tags
- [ ] Alle Berufserfahrungs-Beschreibungen (Labels, Rollen, Kurztexte)
- [ ] Bildungs-Information (HHU, B.Sc., "Aktuell im Studium")
- [ ] Alle 3 interdisziplinaren Erfahrungen
- [ ] Alle Projekt-Beschreibungen (Titel, Untertitel, Kurztexte)
- [ ] Alle Detail-Seiten-Texte (komplett)
- [ ] Compiler: Pipeline, Sprachfeatures, Liveness, Constant Propagation
- [ ] Kontakt: E-Mail-Feld, Nachricht-Feld, Erfolgsmeldung, Fehlermeldung
- [ ] Visitenkarte: Alle Informationen

### Links
- [ ] GitHub → https://github.com/Lucxar
- [ ] Codeforces → https://codeforces.com/profile/lucxar
- [ ] LinkedIn → https://linkedin.com/in/luca-wiegand-385359279/
- [ ] LikeTik → https://liketik.com
- [ ] Terrafix → https://maystudios.itch.io/terrafix
- [ ] Compiler → https://github.com/Lucxar/Pascal-to-JVM-Bytecode-Compiler
- [ ] VCF offentlich → /luca_wiegand_public.vcf
- [ ] VCF privat → /visitenkarte/luca_wiegand.vcf

### Funktionalitaet
- [ ] Kontaktformular (Web3Forms API, gleicher Access Key)
- [ ] VCF-Download (beide Dateien)
- [ ] Navigation zu allen Detail-Seiten
- [ ] Smooth-Scroll zu Sektionen
- [ ] Scroll-to-Top bei Seitenwechsel
- [ ] Mobile-responsive (alle Breakpoints)
- [ ] Visitenkarte ohne Navbar/Background

### Routing
- [ ] / (Home)
- [ ] /detail/liketik
- [ ] /detail/wega
- [ ] /detail/sentrix
- [ ] /detail/terrafix
- [ ] /detail/internship
- [ ] /detail/compiler
- [ ] /kontakt
- [ ] /visitenkarte

---

## TEIL 6: ORIGINALER CSS-CODE (index.css — Vollstandig)

Zur Referenz wahrend der Implementierung:

```css
@import "tailwindcss";
@import "@fortawesome/fontawesome-free/css/all.min.css";

@theme {
  --color-primary: #3b82f6;
  --color-dark: #0f172a;
  --color-card: #1e293b;
  --color-text: #f8fafc;
  --color-muted: #94a3b8;
}

/* Custom Scrollbar */
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: #0f172a; }
::-webkit-scrollbar-thumb { background: #334155; border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: #475569; }

.fade-in {
  animation: fadeIn 0.5s ease-in-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Mesh Gradient Background */
@keyframes meshMove1 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30%, -20%) scale(1.1); }
  66% { transform: translate(-20%, 15%) scale(0.95); }
}
@keyframes meshMove2 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(-25%, 20%) scale(1.05); }
  66% { transform: translate(20%, -10%) scale(1.1); }
}
@keyframes meshMove3 {
  0%, 100% { transform: translate(0, 0) scale(1.05); }
  33% { transform: translate(15%, 25%) scale(1); }
  66% { transform: translate(-30%, -15%) scale(1.1); }
}

.mesh-blob {
  position: absolute; border-radius: 50%;
  filter: blur(80px); opacity: 0.15; will-change: transform;
}
.mesh-blob-1 {
  width: 600px; height: 600px;
  background: radial-gradient(circle, #3b82f6, transparent 70%);
  top: -10%; left: -10%;
  animation: meshMove1 20s ease-in-out infinite;
}
.mesh-blob-2 {
  width: 500px; height: 500px;
  background: radial-gradient(circle, #6366f1, transparent 70%);
  top: 40%; right: -10%;
  animation: meshMove2 23s ease-in-out infinite;
}
.mesh-blob-3 {
  width: 550px; height: 550px;
  background: radial-gradient(circle, #8b5cf6, transparent 70%);
  bottom: -10%; left: 30%;
  animation: meshMove3 25s ease-in-out infinite;
}

/* Glassmorphism Card */
.glass-card {
  background: rgba(30, 41, 59, 0.5);
  backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1.25rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}
.glass-card:hover {
  transform: scale(1.02);
  border-color: rgba(59, 130, 246, 0.3);
  box-shadow: 0 0 30px rgba(59, 130, 246, 0.1);
}

/* Staggered Reveal Animations */
.reveal-hidden { opacity: 0; transform: translateY(30px); }
.reveal-visible {
  opacity: 1; transform: translateY(0);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
```

---

## TEIL 7: WICHTIGE HINWEISE FUR DIE IMPLEMENTIERUNG

### Reihenfolge ist entscheidend
1. **Zuerst** das Design-System (CSS-Tokens, Fonts) — alles andere baut darauf auf
2. **Dann** die Layout-Basiskomponenten (Section, Container, Card, Button)
3. **Dann** die Navbar (wird auf allen Seiten gebraucht)
4. **Dann** die Homepage (Sektion fur Sektion, testbar nach jeder Sektion)
5. **Dann** die Detail-Seiten (konnen parallel bearbeitet werden)
6. **Zuletzt** Cleanup und Performance

### Originalcode als Referenz
- Dieses Dokument enthalt alle Texte, Links, Funktionalitaten und den originalen CSS-Code
- Die Inhalte.md im Root enthalt ebenfalls eine Ubersicht der Textinhalte
- Im Zweifel: Git-History auf `main` Branch enthalt den unmodifizierten Originalcode

### Keine Informationsverluste
- Jede Anderung gegen die Checkliste in Teil 5 prufen
- Besonders aufpassen bei: Kontaktformular (API-Key!), VCF-Downloads, externe Links
- Die Route `/detail/sentrix` existiert, wird aber auf der Homepage nicht direkt verlinkt — trotzdem beibehalten

### Design-Tokens vor Tailwind-Klassen
- Alle Design-Entscheidungen uber CSS Custom Properties (Design-Tokens) treffen
- Tailwind-Klassen nutzen, aber uber @theme an die Tokens binden
- Kein hardgecodetes Styling — alles uber das Token-System
