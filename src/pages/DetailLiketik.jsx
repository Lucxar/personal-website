import BackButton from '../components/BackButton'

export default function DetailLiketik() {
  return (
    <div className="min-h-screen pt-24 px-4 pb-20">
      <div className="max-w-4xl mx-auto fade-in">
        <BackButton />
        <div className="glass-card p-8 sm:p-12 shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl sm:text-4xl font-bold">LikeTik</h1>
            <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-mono">BACKEND</span>
          </div>
          <p className="text-sm text-muted mb-6">Axinity GmbH</p>
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-white mb-6">
              Bei LikeTik (Axinity GmbH) bin ich als Backend-Developer seit der Gründungsphase maßgeblich am Aufbau der Plattform beteiligt – from scratch, seit der allerersten Zeile Code.
            </p>
            <h3 className="text-xl font-bold text-white mt-8 mb-4">Meine Aufgaben</h3>
            <ul className="list-disc list-inside text-muted space-y-2 mb-8">
              <li>Konzeption und Implementierung der Backend-Architektur.</li>
              <li>Entwicklung von REST-APIs für die Mobile- und Web-Clients.</li>
              <li>Integration von Datenbanken und Sicherstellung der Datenintegrität.</li>
              <li>Aufbau der gesamten Plattform-Infrastruktur von Grund auf.</li>
            </ul>
            <div className="bg-white/5 p-6 rounded-lg border border-white/5 mb-8">
              <p className="text-sm font-mono text-muted mb-2">LINKS</p>
              <a href="https://liketik.com" target="_blank" rel="noreferrer" className="text-primary hover:underline flex items-center gap-2">
                <i className="fas fa-external-link-alt"></i> Zur Webseite von LikeTik
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
