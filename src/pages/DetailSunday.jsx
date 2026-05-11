import BackButton from '../components/BackButton'

export default function DetailSunday() {
  return (
    <div className="min-h-screen pt-28 px-6 pb-20">
      <div className="max-w-3xl mx-auto fade-in">
        <BackButton />

        <p className="text-accent font-medium text-sm tracking-wide uppercase mb-3">Personal AI Assistant</p>
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 tracking-tight">Sunday</h1>
        <p className="text-text-secondary mb-8">Dein zweites Gehirn — von einer KI gepflegt</p>

        <div className="w-full h-px bg-border-light mb-10"></div>

        <div className="max-w-[70ch] space-y-6 text-text-secondary leading-relaxed">
          <p>
            Notizen-Apps verlieren sie. Chatbots vergessen alles nach jeder Session. Und dein Kopf? Hält vielleicht sieben Gedanken gleichzeitig. <strong className="text-text">Sunday dreht das Spiel um</strong>: Statt dass du Informationen sortierst, übernimmt ein KI-Agent diese Aufgabe — er pflegt eine wachsende Markdown-Wissensbasis, die mit der Zeit immer wertvoller wird.
          </p>

          <p>
            Wirf alles in den Inbox-Ordner — Gedanken, Sprachnotizen, Links — und Sunday sortiert, verknüpft und konsolidiert automatisch. Wo bei klassischen Notizen-Tools Chaos entsteht, baut Sunday Stück für Stück ein verdichtetes Netz aus Wissen auf. Widersprüche werden markiert, verstreute Erwähnungen zu einem Thema zusammengeführt.
          </p>

          <h3 className="text-lg font-semibold text-text mt-10 mb-4">Was Sunday besonders macht</h3>
          <ul className="space-y-3 list-disc list-inside">
            <li><strong className="text-text">Compound Knowledge:</strong> Themen verdichten sich über alle Quellen hinweg — je länger du Sunday nutzt, desto wertvoller wird die Wissensbasis.</li>
            <li><strong className="text-text">Sechs Workflows:</strong> Capture, Triage, Ingest, Query, Lint und Refactor — fest im Schema verankert.</li>
            <li><strong className="text-text">Local-first:</strong> Alles liegt als Markdown auf deiner Maschine. Kein Vendor Lock-in, vollständige Datenhoheit.</li>
            <li><strong className="text-text">Optionale Hardware:</strong> Raspberry-Pi-Hosting plus Telegram-Bot für Sprachnotizen, die lokal mit Whisper transkribiert werden.</li>
          </ul>

          <h3 className="text-lg font-semibold text-text mt-10 mb-4">Inspiration & Philosophie</h3>
          <p className="mb-6">
            Aufgebaut auf Andrej Karpathys „LLM Wiki"-Konzept, erweitert um praktische Workflows und ein durchdachtes Schema. Der Kern: Wissen ist kein Stapel statischer Notizen, sondern ein <strong className="text-text">wachsender Asset</strong>, der über Jahre an Wert gewinnt.
          </p>

          <h3 className="text-lg font-semibold text-text mt-10 mb-4">Technologien</h3>
          <div className="flex flex-wrap gap-2 mb-8">
            {['Markdown', 'Claude Code CLI', 'Obsidian', 'Raspberry Pi', 'Telegram Bot', 'Whisper (lokal)', 'MIT License'].map(tag => (
              <span key={tag} className="skill-tag">{tag}</span>
            ))}
          </div>

          <a
            href="https://github.com/Lucxar/sunday"
            target="_blank"
            rel="noreferrer"
            className="btn-primary inline-flex"
          >
            <i className="fab fa-github text-sm"></i>
            Hier geht's zum Repository
          </a>
        </div>
      </div>
    </div>
  )
}
