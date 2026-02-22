export default function HeroTile({ onScrollTo }) {
  return (
    <>
      <h2 className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">Software Developer</h2>
      <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Luca Wiegand</h1>
      <p className="text-lg text-muted mb-6 font-light">
        Leidenschaft für Problemlösung und Softwareentwicklung.<br />
        Ich entwickle skalierbare Systeme und immersive Erlebnisse.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={() => onScrollTo('projects')}
          className="bg-primary hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all text-center"
        >
          Projekte ansehen
        </button>
        <button
          onClick={() => onScrollTo('contact')}
          className="border border-white/20 hover:bg-white/5 px-6 py-3 rounded-lg font-medium transition-all text-center"
        >
          Kontaktieren
        </button>
      </div>
    </>
  )
}
