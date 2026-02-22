import { Link } from 'react-router-dom'

export default function Visitenkarte() {
  return (
    <div className="bg-dark text-text font-sans antialiased min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md glass-card overflow-hidden fade-in relative">
        <div className="h-24 bg-gradient-to-r from-blue-900 to-slate-800"></div>

        <div className="px-6 pb-8 text-center relative">
          <div className="w-32 h-32 mx-auto -mt-16 bg-dark rounded-full p-2 border-4 border-card">
            <div className="w-full h-full bg-slate-700 rounded-full flex items-center justify-center overflow-hidden">
              <img src="/profilbild1zu1.png" alt="Luca Wiegand" className="w-full h-full object-cover" />
            </div>
          </div>

          <h1 className="text-2xl font-bold mt-4">Luca Wiegand</h1>
          <p className="text-primary font-medium text-sm tracking-wider uppercase mb-1">Software Developer</p>
          <p className="text-muted text-sm">Wega Studios</p>

          <div className="w-16 h-1 bg-white/10 mx-auto my-6 rounded-full"></div>

          <div className="flex flex-col gap-3">
            <a href="/visitenkarte/luca_wiegand.vcf" download="Luca_Wiegand_Kontakt.vcf" className="w-full bg-[#047857] hover:bg-[#036045] text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg active:scale-95">
              <i className="fas fa-address-card text-xl"></i>
              <span>Kontakt speichern</span>
            </a>

            <Link to="/" className="w-full bg-slate-700 hover:bg-slate-600 text-white font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-3 transition-all border border-white/5">
              <i className="fas fa-globe text-xl"></i>
              <span>Webseite öffnen</span>
            </Link>

            <a href="https://linkedin.com/in/luca-wiegand-385359279/" target="_blank" rel="noreferrer" className="w-full bg-[#0077b5] hover:bg-[#006097] text-white font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-3 transition-all">
              <i className="fab fa-linkedin text-xl"></i>
              <span>LinkedIn</span>
            </a>

            <a href="https://github.com/Lucxar" target="_blank" rel="noreferrer" className="w-full bg-slate-800 hover:bg-black text-white font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-3 transition-all border border-white/10">
              <i className="fab fa-github text-xl"></i>
              <span>GitHub</span>
            </a>
          </div>

          <div className="mt-8 text-xs text-muted">
            <Link to="/" className="hover:text-primary transition-colors">
              &copy; 2025 Wega Studios
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
