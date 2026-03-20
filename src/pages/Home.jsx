import { useNavigate } from 'react-router-dom'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import useRevealOnScroll from '../hooks/useRevealOnScroll'

function RevealDiv({ children, className = '', delay = 0 }) {
  const [ref, isVisible] = useRevealOnScroll()
  return (
    <div
      ref={ref}
      className={`${isVisible ? 'reveal-visible' : 'reveal-hidden'} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}

export default function Home() {
  const navigate = useNavigate()

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="min-h-[90vh] flex items-center justify-center pt-16">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center fade-in">
          <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden mx-auto mb-8 shadow-xl ring-4 ring-border-light">
            <img
              src="/profilbild1zu1.png"
              alt="Luca Wiegand"
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
          </div>
          <p className="text-accent font-medium text-sm tracking-wide uppercase mb-4">Software Developer</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
            Luca Wiegand
          </h1>
          <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Ich entwickle durchdachte Software — von skalierbaren Backend-Systemen bis hin zu interaktiven Webanwendungen und Spielen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => scrollTo('projects')} className="btn-primary">
              Projekte entdecken
            </button>
            <button onClick={() => navigate('/kontakt')} className="btn-secondary">
              Kontaktieren
            </button>
          </div>
        </div>
      </section>

      {/* ===== ÜBER MICH ===== */}
      <Section id="about">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <RevealDiv>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/profilbild16zu9.png"
                alt="Luca Wiegand"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </RevealDiv>
          <RevealDiv delay={0.1}>
            <SectionHeading label="Über mich">
              Hallo, ich bin Luca.
            </SectionHeading>
            <div className="space-y-5 text-text-secondary leading-relaxed">
              <p>
                Ich mag es, Probleme zu verstehen und durch Code zu lösen — ob Backend-Systeme, Webanwendungen oder Spieleentwicklung. Am meisten reizt mich dabei, Ideen von Grund auf umzusetzen und dabei sauber und durchdacht zu arbeiten.
              </p>
              <p>
                Ich will mich fachlich weiterentwickeln, neue Technologien lernen und langfristig mehr Verantwortung in Projekten und Teams übernehmen.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-surface-alt flex items-center justify-center shrink-0">
                  <i className="fas fa-graduation-cap text-accent text-sm"></i>
                </div>
                <div>
                  <p className="font-semibold text-sm">B.Sc. Informatik</p>
                  <p className="text-text-secondary text-sm">HHU Düsseldorf — aktuell im Studium</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-surface-alt flex items-center justify-center shrink-0">
                  <i className="fas fa-plane text-accent text-sm"></i>
                </div>
                <div>
                  <p className="font-semibold text-sm">Business English</p>
                  <p className="text-text-secondary text-sm">2 Monate USA-Erfahrung</p>
                </div>
              </div>
            </div>
          </RevealDiv>
        </div>
      </Section>

      {/* ===== BERUFSERFAHRUNG ===== */}
      <Section id="experience" className="bg-surface-alt">
        <SectionHeading label="Erfahrung">Wo ich arbeite</SectionHeading>
        <div className="grid md:grid-cols-2 gap-6">
          <RevealDiv>
            <div
              className="premium-card p-8 cursor-pointer group"
              onClick={() => navigate('/detail/liketik')}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold tracking-wider text-accent uppercase">Startup</span>
                <i className="fas fa-arrow-right text-border group-hover:text-accent transition-colors duration-200"></i>
              </div>
              <h3 className="text-xl font-bold mb-1">LikeTik</h3>
              <p className="text-text-secondary text-sm mb-3">Backend Developer</p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Aktive Mitentwicklung einer skalierbaren E-Commerce-Plattform von der allerersten Zeile Code an.
              </p>
            </div>
          </RevealDiv>
          <RevealDiv delay={0.1}>
            <div
              className="premium-card p-8 cursor-pointer group"
              onClick={() => navigate('/detail/wega')}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold tracking-wider text-accent uppercase">Founder</span>
                <i className="fas fa-arrow-right text-border group-hover:text-accent transition-colors duration-200"></i>
              </div>
              <h3 className="text-xl font-bold mb-1">Wega Studios</h3>
              <p className="text-text-secondary text-sm mb-3">Inhaber & Entwickler</p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Mein eigenes Gewerbe für Software-Dienstleistungen und individuelle Entwicklungsprojekte.
              </p>
            </div>
          </RevealDiv>
        </div>

        {/* Interdisziplinäre Erfahrung */}
        <RevealDiv className="mt-12">
          <h3 className="text-lg font-semibold mb-6">Interdisziplinäre Erfahrung</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-surface flex items-center justify-center shrink-0 shadow-sm">
                <i className="fas fa-plane text-accent text-xs"></i>
              </div>
              <div>
                <p className="font-medium text-sm">2 Monate USA</p>
                <p className="text-text-secondary text-sm">Sehr gutes Business English</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-surface flex items-center justify-center shrink-0 shadow-sm">
                <i className="fas fa-boxes-stacked text-accent text-xs"></i>
              </div>
              <div>
                <p className="font-medium text-sm">6 Monate Logistik</p>
                <p className="text-text-secondary text-sm">Prozessoptimierung & Beratung</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-surface flex items-center justify-center shrink-0 shadow-sm">
                <i className="fas fa-handshake text-accent text-xs"></i>
              </div>
              <div>
                <p className="font-medium text-sm">Requirements Engineering</p>
                <p className="text-text-secondary text-sm">„Übersetzer" zwischen IT & Fachbereich</p>
              </div>
            </div>
          </div>
        </RevealDiv>
      </Section>

      {/* ===== TECHNISCHE EXPERTISE ===== */}
      <Section id="skills">
        <SectionHeading label="Expertise">Was ich kann</SectionHeading>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Java Ecosystem */}
          <RevealDiv>
            <div className="premium-card-static p-8">
              <div className="w-11 h-11 rounded-xl bg-surface-alt flex items-center justify-center mb-5">
                <i className="fas fa-server text-accent"></i>
              </div>
              <h3 className="text-lg font-bold mb-4">Java Ecosystem</h3>
              <div className="flex flex-wrap gap-2">
                {['Java (Expertise)', 'Spring Boot & Modulith', 'Architekturpattern', 'Thymeleaf'].map(s => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
          </RevealDiv>

          {/* Web & Fullstack */}
          <RevealDiv delay={0.1}>
            <div className="premium-card-static p-8">
              <div className="w-11 h-11 rounded-xl bg-surface-alt flex items-center justify-center mb-5">
                <i className="fas fa-globe text-accent"></i>
              </div>
              <h3 className="text-lg font-bold mb-4">Web & Fullstack</h3>
              <div className="flex flex-wrap gap-2">
                {['NestJS (Node.js)', 'HTML5', 'CSS3', 'REST APIs'].map(s => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
          </RevealDiv>

          {/* Data & Ops */}
          <RevealDiv>
            <div className="premium-card-static p-8">
              <div className="w-11 h-11 rounded-xl bg-surface-alt flex items-center justify-center mb-5">
                <i className="fas fa-database text-accent"></i>
              </div>
              <h3 className="text-lg font-bold mb-4">Data & Ops</h3>
              <div className="flex flex-wrap gap-2">
                {['Docker', 'PostgreSQL & MySQL', 'Git / Version Control'].map(s => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
          </RevealDiv>

          {/* Low-Level */}
          <RevealDiv delay={0.1}>
            <div className="premium-card-static p-8">
              <div className="w-11 h-11 rounded-xl bg-surface-alt flex items-center justify-center mb-5">
                <i className="fas fa-terminal text-accent"></i>
              </div>
              <h3 className="text-lg font-bold mb-4">Low-Level</h3>
              <div className="flex flex-wrap gap-2">
                {['C++ & C', 'Algorithmen & Datenstrukturen', 'Performanzoptimierung'].map(s => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
          </RevealDiv>
        </div>

        {/* Game Development & Embedded */}
        <div className="grid md:grid-cols-2 gap-8">
          <RevealDiv>
            <div className="premium-card-static p-8">
              <div className="w-11 h-11 rounded-xl bg-surface-alt flex items-center justify-center mb-5">
                <i className="fas fa-gamepad text-accent"></i>
              </div>
              <h3 className="text-lg font-bold mb-3">Game Development</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                In meiner Freizeit entwickle ich Spiele mit der Unreal Engine — von Gameplay-Logik bis hin zu kompletten Prototypen. Spieleentwicklung ist für mich kreatives Ventil und technische Herausforderung zugleich.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Unreal Engine', 'C++', 'Blueprints'].map(t => (
                  <span key={t} className="skill-tag">{t}</span>
                ))}
              </div>
            </div>
          </RevealDiv>

          <RevealDiv delay={0.1}>
            <div className="premium-card-static p-8">
              <div className="w-11 h-11 rounded-xl bg-surface-alt flex items-center justify-center mb-5">
                <i className="fas fa-microchip text-accent"></i>
              </div>
              <h3 className="text-lg font-bold mb-3">Embedded Systems & Hardware</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                Starkes, tiefgreifendes technisches Fundament — keine Berührungsängste mit hardwarenaher Architektur. Praktische Erfahrung durch universitäre Projekte, vom Mikrocontroller bis zum FPGA.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Arduino', 'ESP32', 'STM32', '65C02', 'FPGAs', 'Assembly', 'C', 'Basic'].map(t => (
                  <span key={t} className="skill-tag">{t}</span>
                ))}
              </div>
            </div>
          </RevealDiv>
        </div>
      </Section>

      {/* ===== PROJEKTE ===== */}
      <Section id="projects" className="bg-surface-alt">
        <SectionHeading label="Projekte">Ausgewählte Arbeiten</SectionHeading>

        {/* Terrafix — Featured */}
        <RevealDiv>
          <div
            className="premium-card overflow-hidden cursor-pointer group mb-8"
            onClick={() => navigate('/detail/terrafix')}
          >
            <div className="relative h-56 sm:h-72 overflow-hidden">
              <img
                src="/SiegerfotoGameJam2025.jpeg"
                alt="Siegerehrung HHU Game Jam 2025"
                className="w-full h-full object-cover object-[40%_35%] transition-transform duration-500 ease-out group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-6 right-6">
                <span className="inline-flex items-center bg-white/90 backdrop-blur-sm text-text px-3 py-1.5 rounded-full text-xs font-semibold">
                  <i className="fas fa-trophy text-amber-500 mr-1.5"></i> 1. Platz HHU Game Jam 2025
                </span>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold">Terrafix</h3>
                <i className="fas fa-arrow-right text-border group-hover:text-accent transition-colors duration-200"></i>
              </div>
              <p className="text-text-secondary text-sm mb-4">Unreal Engine Projekt — 48h Game Jam</p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Ein Spiel entwickelt mit der Unreal Engine in einem 3-köpfigen Team. Reverse-Factorio-Konzept: Die Welt retten statt ausbeuten.
              </p>
            </div>
          </div>
        </RevealDiv>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Compiler */}
          <RevealDiv>
            <div
              className="premium-card p-8 cursor-pointer group h-full"
              onClick={() => navigate('/detail/compiler')}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold tracking-wider text-accent uppercase">Compilerbau</span>
                <i className="fas fa-arrow-right text-border group-hover:text-accent transition-colors duration-200"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Pascal-to-JVM Compiler</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Ein vollständiger Compiler, der Pascal-Quellcode in ausführbaren JVM-Bytecode übersetzt — vom Parsing über die semantische Analyse bis zur Codegenerierung.
              </p>
            </div>
          </RevealDiv>

          {/* Praktikum */}
          <RevealDiv delay={0.1}>
            <div
              className="premium-card p-8 cursor-pointer group h-full"
              onClick={() => navigate('/detail/internship')}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold tracking-wider text-accent uppercase">Universitätsprojekt</span>
                <i className="fas fa-arrow-right text-border group-hover:text-accent transition-colors duration-200"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Programmier-Praktikum</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Ein umfangreiches Softwareprojekt im Rahmen des Studiums — Matching- und Organisationssystem für wissenschaftliche Abschlussarbeiten.
              </p>
            </div>
          </RevealDiv>
        </div>
      </Section>

      {/* ===== KONTAKT / CTA ===== */}
      <Section id="contact">
        <div className="text-center max-w-2xl mx-auto">
          <SectionHeading label="Kontakt" className="text-center [&_p]:mx-auto [&_h2]:mx-auto">
            Lass uns zusammenarbeiten
          </SectionHeading>
          <p className="text-text-secondary leading-relaxed mb-10 -mt-8">
            Sie haben ein Projekt im Kopf oder brauchen Unterstützung bei der Entwicklung? Ich freue mich über eine Anfrage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button onClick={() => navigate('/kontakt')} className="btn-primary">
              <i className="fas fa-envelope text-sm"></i>
              Nachricht schreiben
            </button>
            <a
              href="/luca_wiegand_public.vcf"
              download="Luca_Wiegand_Kontakt.vcf"
              className="btn-secondary"
            >
              <i className="fas fa-address-card text-sm"></i>
              Kontakt speichern
            </a>
          </div>
          <div className="flex items-center justify-center gap-5">
            <a href="https://github.com/Lucxar" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full bg-surface-alt flex items-center justify-center text-text-secondary hover:text-text hover:bg-border-light transition-all duration-200" aria-label="GitHub">
              <i className="fab fa-github text-lg"></i>
            </a>
            <a href="https://codeforces.com/profile/lucxar" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full bg-surface-alt flex items-center justify-center text-text-secondary hover:text-text hover:bg-border-light transition-all duration-200" aria-label="Codeforces">
              <i className="fas fa-code text-lg"></i>
            </a>
            <a href="https://linkedin.com/in/luca-wiegand-385359279/" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full bg-surface-alt flex items-center justify-center text-text-secondary hover:text-text hover:bg-border-light transition-all duration-200" aria-label="LinkedIn">
              <i className="fab fa-linkedin text-lg"></i>
            </a>
          </div>
        </div>
      </Section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-border-light py-10">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-text-secondary text-sm">
              &copy; 2025 Luca Wiegand / Wega Studios. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center gap-5">
              <a href="https://github.com/Lucxar" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-text text-sm transition-colors" aria-label="GitHub">GitHub</a>
              <a href="https://linkedin.com/in/luca-wiegand-385359279/" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-text text-sm transition-colors" aria-label="LinkedIn">LinkedIn</a>
              <a href="https://codeforces.com/profile/lucxar" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-text text-sm transition-colors" aria-label="Codeforces">Codeforces</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
