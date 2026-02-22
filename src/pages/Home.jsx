import { useNavigate } from 'react-router-dom'
import BentoGrid from '../components/BentoGrid'
import BentoCard from '../components/BentoCard'
import SectionLabel from '../components/SectionLabel'
import SkillTile from '../components/tiles/SkillTile'
import EmbeddedSystemsTile from '../components/tiles/EmbeddedSystemsTile'
import ExperienceTile from '../components/tiles/ExperienceTile'
import InterdisciplinaryTile from '../components/tiles/InterdisciplinaryTile'
import ProjectTile from '../components/tiles/ProjectTile'
import ContactTile from '../components/tiles/ContactTile'

export default function Home() {
  const navigate = useNavigate()

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="pt-24 pb-12">
      {/* ===== Hero Section (no cards) ===== */}
      <section id="home" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Profile Image */}
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl shrink-0">
            <img src="/profilbild1zu1.png" alt="Luca Wiegand" className="w-full h-full object-cover" />
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left">
            <h2 className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">Software Developer</h2>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Luca Wiegand</h1>
            <p className="text-muted leading-relaxed mb-2 max-w-xl">
              Ich mag es, Probleme zu verstehen und durch Code zu lösen — ob Backend-Systeme, Webanwendungen oder Spieleentwicklung. Am meisten reizt mich dabei, Ideen von Grund auf umzusetzen und dabei sauber und durchdacht zu arbeiten.
            </p>
            <p className="text-muted leading-relaxed mb-6 max-w-xl">
              Ich will mich fachlich weiterentwickeln, neue Technologien lernen und langfristig mehr Verantwortung in Projekten und Teams übernehmen.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <button onClick={() => scrollTo('projects')} className="bg-primary hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all text-center">
                Projekte ansehen
              </button>
              <button onClick={() => scrollTo('contact')} className="border border-white/20 hover:bg-white/5 px-6 py-3 rounded-lg font-medium transition-all text-center">
                Kontaktieren
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Skills Section ===== */}
      <SectionLabel id="skills">Technische Expertise</SectionLabel>
      <BentoGrid>
        <BentoCard delay={0}>
          <SkillTile
            icon="fas fa-server"
            iconColor="bg-blue-500/10 text-primary"
            title="Java Ecosystem"
            items={['Java (Expertise)', 'Spring Boot & Modulith', 'Architekturpattern', 'Thymeleaf']}
          />
        </BentoCard>
        <BentoCard delay={0.1}>
          <SkillTile
            icon="fas fa-globe"
            iconColor="bg-green-500/10 text-green-400"
            title="Web & Fullstack"
            items={['NestJS (Node.js)', 'HTML5', 'CSS3', 'REST APIs']}
          />
        </BentoCard>
        <BentoCard delay={0.2}>
          <SkillTile
            icon="fas fa-database"
            iconColor="bg-purple-500/10 text-purple-400"
            title="Data & Ops"
            items={['Docker', 'PostgreSQL & MySQL', 'Git / Version Control']}
          />
        </BentoCard>
        <BentoCard delay={0.3}>
          <SkillTile
            icon="fas fa-terminal"
            iconColor="bg-red-500/10 text-red-400"
            title="Low-Level"
            items={['C++ & C', 'Algorithmen & Datenstrukturen', 'Performanzoptimierung']}
          />
        </BentoCard>
      </BentoGrid>
      <BentoGrid className="mt-4">
        <BentoCard className="lg:col-span-2 md:col-span-1" delay={0}>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center shrink-0 text-red-400">
              <i className="fas fa-gamepad text-lg"></i>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Game Development</h3>
              <p className="text-sm text-muted leading-relaxed">
                In meiner Freizeit entwickle ich Spiele mit der Unreal Engine — von Gameplay-Logik bis hin zu kompletten Prototypen. Spieleentwicklung ist für mich kreatives Ventil und technische Herausforderung zugleich.
              </p>
              <div className="flex gap-2 flex-wrap mt-3">
                <span className="px-2.5 py-1 bg-red-500/10 border border-red-500/20 rounded-full text-xs text-red-300">Unreal Engine</span>
                <span className="px-2.5 py-1 bg-red-500/10 border border-red-500/20 rounded-full text-xs text-red-300">C++</span>
                <span className="px-2.5 py-1 bg-red-500/10 border border-red-500/20 rounded-full text-xs text-red-300">Blueprints</span>
              </div>
            </div>
          </div>
        </BentoCard>
        <BentoCard className="lg:col-span-2 md:col-span-1" delay={0.1}>
          <EmbeddedSystemsTile />
        </BentoCard>
      </BentoGrid>

      {/* ===== Experience Section ===== */}
      <SectionLabel id="experience">Berufserfahrung & Unternehmen</SectionLabel>
      <BentoGrid>
        <BentoCard className="group" delay={0} onClick={() => navigate('/detail/liketik')}>
          <ExperienceTile
            label="STARTUP"
            name="LikeTik"
            role="Backend Developer"
            desc="Aktive Mitentwicklung einer skalierbaren E-Commerce-Plattform von der allerersten Zeile Code an."
          />
        </BentoCard>
        <BentoCard className="group" delay={0.1} onClick={() => navigate('/detail/wega')}>
          <ExperienceTile
            label="FOUNDER"
            name="Wega Studios"
            role="Inhaber & Entwickler"
            desc="Mein eigenes Gewerbe für Software-Dienstleistungen und individuelle Entwicklungsprojekte."
          />
        </BentoCard>
        <BentoCard delay={0.2}>
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center shrink-0">
              <i className="fas fa-graduation-cap text-primary"></i>
            </div>
            <div>
              <h3 className="text-sm font-bold text-white leading-snug">Heinrich-Heine-Universität Düsseldorf</h3>
              <p className="text-primary text-xs font-medium mt-1">B.Sc. Informatik</p>
              <p className="text-muted text-xs mt-1">Aktuell im Studium.</p>
            </div>
          </div>
        </BentoCard>
        <BentoCard className="lg:row-span-2" delay={0.3}>
          <InterdisciplinaryTile />
        </BentoCard>
      </BentoGrid>

      {/* ===== Projects Section ===== */}
      <SectionLabel id="projects">Projekte</SectionLabel>
      <BentoGrid>
        <BentoCard className="group" delay={0} onClick={() => navigate('/detail/terrafix')}>
          <ProjectTile
            title="Terrafix"
            subtitle="HHU GAME JAM 2025"
            desc="Ein Spiel entwickelt mit der Unreal Engine in einem 3-köpfigen Team."
            icon="fas fa-gamepad"
            badge="GEWINNER"
          />
        </BentoCard>
        <BentoCard className="group" delay={0.1} onClick={() => navigate('/detail/internship')}>
          <ProjectTile
            title="Programmier-Praktikum"
            subtitle="UNIVERSITÄTSPROJEKT"
            desc="Ein umfangreiches Softwareprojekt im Rahmen des Studiums."
            icon="fas fa-code"
            iconColor="text-purple-400"
          />
        </BentoCard>
      </BentoGrid>

      {/* ===== Contact Section ===== */}
      <div className="flex justify-center mt-20 mb-10">
        <div className="w-72 h-1 bg-primary rounded-full"></div>
      </div>
      <div id="contact" className="flex justify-center px-4 sm:px-6 lg:px-8">
        <BentoCard delay={0}>
          <ContactTile />
        </BentoCard>
      </div>

      {/* ===== Footer ===== */}
      <div className="text-center text-muted text-sm mt-16 pb-4">
        &copy; 2025 Luca Wiegand / Wega Studios. Alle Rechte vorbehalten.
      </div>
    </main>
  )
}
