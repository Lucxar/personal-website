import { Link } from 'react-router-dom'

export default function Visitenkarte() {
  return (
    <div className="bg-bg font-sans antialiased min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-surface rounded-3xl shadow-xl overflow-hidden fade-in">
        <div className="h-20 bg-gradient-to-r from-accent to-blue-500"></div>

        <div className="px-6 pb-8 text-center relative">
          <div className="w-28 h-28 mx-auto -mt-14 bg-surface rounded-full p-1.5 shadow-lg">
            <div className="w-full h-full rounded-full overflow-hidden">
              <img src="/profilbild1zu1.png" alt="Luca Wiegand" className="w-full h-full object-cover" />
            </div>
          </div>

          <h1 className="text-2xl font-bold mt-5 text-text">Luca Wiegand</h1>
          <p className="text-accent font-medium text-sm tracking-wide uppercase mb-1">Software Developer</p>
          <p className="text-text-secondary text-sm">Wega Studios</p>

          <div className="w-12 h-0.5 bg-border-light mx-auto my-6 rounded-full"></div>

          <div className="flex flex-col gap-3">
            <a
              href="/visitenkarte/luca_wiegand.vcf"
              download="Luca_Wiegand_Kontakt.vcf"
              className="w-full btn-primary justify-center !rounded-xl !py-3"
            >
              <i className="fas fa-address-card"></i>
              <span>Kontakt speichern</span>
            </a>

            <Link
              to="/"
              className="w-full inline-flex items-center justify-center gap-3 bg-surface-alt hover:bg-border-light text-text font-medium py-3 px-4 rounded-xl transition-all text-sm border border-border-light"
            >
              <i className="fas fa-globe"></i>
              <span>Webseite öffnen</span>
            </Link>

            <a
              href="https://linkedin.com/in/luca-wiegand-385359279/"
              target="_blank"
              rel="noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 bg-[#0077b5] hover:bg-[#006097] text-white font-medium py-3 px-4 rounded-xl transition-all text-sm"
            >
              <i className="fab fa-linkedin"></i>
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/Lucxar"
              target="_blank"
              rel="noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 bg-text hover:bg-text/80 text-surface font-medium py-3 px-4 rounded-xl transition-all text-sm"
            >
              <i className="fab fa-github"></i>
              <span>GitHub</span>
            </a>
          </div>

          <div className="mt-8 text-xs text-text-secondary">
            <Link to="/" className="hover:text-accent transition-colors">
              &copy; 2025 Wega Studios
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
