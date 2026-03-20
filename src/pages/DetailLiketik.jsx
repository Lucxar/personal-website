import BackButton from '../components/BackButton'

export default function DetailLiketik() {
  return (
    <div className="min-h-screen pt-28 px-6 pb-20">
      <div className="max-w-3xl mx-auto fade-in">
        <BackButton />

        <p className="text-accent font-medium text-sm tracking-wide uppercase mb-3">Startup</p>
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 tracking-tight">LikeTik</h1>
        <p className="text-text-secondary mb-8">Axinity GmbH — Backend Developer</p>

        <div className="w-full h-px bg-border-light mb-10"></div>

        <div className="max-w-[70ch] space-y-6 text-text-secondary leading-relaxed">
          <p className="text-text text-lg leading-relaxed">
            Bei LikeTik (Axinity GmbH) bin ich als Backend-Developer seit der Gründungsphase maßgeblich am Aufbau der Plattform beteiligt – from scratch, seit der allerersten Zeile Code.
          </p>

          <h3 className="text-lg font-semibold text-text mt-10 mb-4">Meine Aufgaben</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <i className="fas fa-check text-accent text-xs mt-1.5 shrink-0"></i>
              <span>Konzeption und Implementierung der Backend-Architektur.</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="fas fa-check text-accent text-xs mt-1.5 shrink-0"></i>
              <span>Entwicklung von REST-APIs für die Mobile- und Web-Clients.</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="fas fa-check text-accent text-xs mt-1.5 shrink-0"></i>
              <span>Integration von Datenbanken und Sicherstellung der Datenintegrität.</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="fas fa-check text-accent text-xs mt-1.5 shrink-0"></i>
              <span>Aufbau der gesamten Plattform-Infrastruktur von Grund auf.</span>
            </li>
          </ul>

          <div className="premium-card-static p-6 mt-10">
            <p className="text-xs font-semibold tracking-wider text-text-secondary uppercase mb-3">Links</p>
            <a
              href="https://liketik.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:underline text-sm font-medium"
            >
              <i className="fas fa-external-link-alt text-xs"></i>
              Zur Webseite von LikeTik
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
