import BackButton from '../components/BackButton'

export default function DetailDiskInserted() {
  return (
    <div className="min-h-screen pt-28 px-6 pb-20">
      <div className="max-w-3xl mx-auto fade-in">
        <BackButton />

        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="inline-flex items-center bg-surface-alt px-3 py-1 rounded-full text-xs font-semibold">
            <i className="fas fa-gamepad text-accent mr-1.5"></i> HHU Game Jam 2026
          </span>
          <span className="inline-flex items-center bg-surface-alt px-3 py-1 rounded-full text-xs font-semibold text-text-secondary">
            <i className="fas fa-clock mr-1.5"></i> 56 Stunden
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 tracking-tight">Disk Inserted</h1>
        <p className="text-text-secondary mb-8">Unreal Engine Project</p>

        <div className="w-full h-px bg-border-light mb-10"></div>

        <div className="max-w-[70ch] space-y-6 text-text-secondary leading-relaxed">
          <p>
            Disk Inserted entstand beim HHU Game Jam 2026 (Sommersemester) — in 56 Stunden entwickelte unser 3-köpfiges Team erneut ein vollständiges Spiel mit der Unreal Engine. Wieder mit dabei: das gleiche Team wie bei Terrafix.
          </p>
          <p>
            Das Konzept: Ein First-Person Psychological-Horror-Spiel, in dem eine alte Diskette einen gewöhnlichen Tag in etwas Verstörendes verwandelt. Die Grenze zwischen einem Retro-Spielerlebnis und der Realität verschwimmt zunehmend — durch eskalierende Anomalien in verschiedenen beunruhigenden Umgebungen, von dunklen Wäldern über verlassene Jahrmärkte bis hin zu immer unheimlicheren Innenräumen.
          </p>
          <p>
            Das Spiel bietet kontextsensitive Interaktionen, ein Drag-basiertes Inspektionssystem, mehrere Retro-Horror-Minispiele und prozedural generierte Soundscapes für eine immersive Atmosphäre. Versioniert wurde mit Perforce — der Industriestandard für Unreal-Projekte, da große Binärdateien wie 3D-Assets und Texturen damit deutlich effizienter verwaltet werden als mit Git.
          </p>

          <h3 className="text-lg font-semibold text-text mt-10 mb-4">Technologien</h3>
          <div className="flex flex-wrap gap-2 mb-8">
            {['Unreal Engine 5', 'Lumen GI', 'C++', 'Blueprints', 'Perforce'].map(tag => (
              <span key={tag} className="skill-tag">{tag}</span>
            ))}
          </div>

          <a
            href="https://maystudios.itch.io/disk-inserted"
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
