import BackButton from '../components/BackButton'

export default function DetailTerrafix() {
  return (
    <div className="min-h-screen pt-24 px-4 pb-20">
      <div className="max-w-4xl mx-auto fade-in">
        <BackButton />
        <div className="glass-card p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="flex items-center gap-4 mb-2">
            <h1 className="text-3xl sm:text-4xl font-bold">Terrafix</h1>
            <span className="bg-yellow-500/20 text-yellow-400 border border-yellow-500/40 px-3 py-1 rounded-full text-sm font-bold">
              <i className="fas fa-trophy mr-1"></i> 1. PLATZ HHU GAME JAM 2025
            </span>
          </div>
          <p className="text-xl text-primary mb-8 font-mono">Unreal Engine Project</p>

          {/* Siegerfoto */}
          <div className="relative rounded-xl overflow-hidden mb-8 group/img cursor-pointer">
            <img
              src="/SiegerfotoGameJam2025.jpeg"
              alt="Siegerehrung HHU Game Jam 2025"
              className="w-full h-64 sm:h-80 object-cover object-[40%_35%] transition-transform duration-500 ease-out group-hover/img:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent transition-opacity duration-500 group-hover/img:opacity-60" />
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-muted leading-relaxed mb-6">
              Terrafix entstand im Rahmen des HHU Game Jam 2025 — innerhalb von nur 48 Stunden entwickelten wir als 3-köpfiges Team ein vollständiges Spiel mit der Unreal Engine. Die Idee: Ein Reverse-Factorio, in dem man die Welt nicht ausbeutet, sondern rettet. Der Spieler steuert einen Roboter, der eine verwüstete Erde Stück für Stück wieder belebt — Böden rekultivieren, Vegetation zurückbringen und Ökosysteme wiederherstellen.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Das Konzept hat die Jury überzeugt: Am Ende konnten wir uns gegen alle anderen Teams durchsetzen und den ersten Platz erringen. Eine intensive Erfahrung, die gezeigt hat, wie viel in kürzester Zeit entstehen kann, wenn Teamwork, Kreativität und technisches Know-how zusammenkommen.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-white/5 p-6 rounded-lg border border-white/5">
                <h4 className="font-bold text-white mb-2">Tech Stack</h4>
                <ul className="text-muted text-sm space-y-1">
                  <li>Unreal Engine 5</li>
                  <li>Blueprints & C++</li>
                  <li>Git Collaboration</li>
                </ul>
              </div>
              <a href="https://maystudios.itch.io/terrafix" target="_blank" rel="noreferrer" className="bg-primary/15 hover:bg-primary/25 border border-primary/30 hover:border-primary/50 p-6 rounded-lg flex flex-col justify-center items-center text-center transition-all group">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <i className="fas fa-play text-primary text-lg"></i>
                </div>
                <h4 className="font-bold text-white mb-1">Hier geht's zum Spiel</h4>
                <span className="text-sm text-primary flex items-center gap-2">
                  itch.io <i className="fas fa-arrow-right text-xs"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
