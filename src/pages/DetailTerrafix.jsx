import BackButton from '../components/BackButton'

export default function DetailTerrafix() {
  return (
    <div className="min-h-screen pt-28 px-6 pb-20">
      <div className="max-w-3xl mx-auto fade-in">
        <BackButton />

        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="inline-flex items-center bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1 rounded-full text-xs font-semibold">
            <i className="fas fa-trophy mr-1.5"></i> 1. Platz HHU Game Jam 2025
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 tracking-tight">Terrafix</h1>
        <p className="text-text-secondary mb-8">Unreal Engine Project</p>

        <div className="w-full h-px bg-border-light mb-10"></div>

        {/* Siegerfoto */}
        <div className="rounded-2xl overflow-hidden mb-10 group cursor-default">
          <img
            src="/SiegerfotoGameJam2025.jpeg"
            alt="Siegerehrung HHU Game Jam 2025"
            className="w-full h-64 sm:h-80 object-cover object-[40%_35%] transition-transform duration-500 ease-out group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="max-w-[70ch] space-y-6 text-text-secondary leading-relaxed">
          <p>
            Terrafix entstand im Rahmen des HHU Game Jam 2025 — innerhalb von nur 48 Stunden entwickelten wir als 3-köpfiges Team ein vollständiges Spiel mit der Unreal Engine. Die Idee: Ein Reverse-Factorio, in dem man die Welt nicht ausbeutet, sondern rettet. Der Spieler steuert einen Roboter, der eine verwüstete Erde Stück für Stück wieder belebt — Böden rekultivieren, Vegetation zurückbringen und Ökosysteme wiederherstellen.
          </p>
          <p>
            Das Konzept hat die Jury überzeugt: Am Ende konnten wir uns gegen alle anderen Teams durchsetzen und den ersten Platz erringen. Eine intensive Erfahrung, die gezeigt hat, wie viel in kürzester Zeit entstehen kann, wenn Teamwork, Kreativität und technisches Know-how zusammenkommen.
          </p>

          <h3 className="text-lg font-semibold text-text mt-10 mb-4">Technologien</h3>
          <div className="flex flex-wrap gap-2 mb-8">
            {['Unreal Engine 5', 'Blueprints', 'C++', 'Git Collaboration'].map(tag => (
              <span key={tag} className="skill-tag">{tag}</span>
            ))}
          </div>

          <a
            href="https://maystudios.itch.io/terrafix"
            target="_blank"
            rel="noreferrer"
            className="btn-primary inline-flex"
          >
            <i className="fas fa-play text-xs"></i>
            Hier geht's zum Spiel
          </a>
        </div>
      </div>
    </div>
  )
}
