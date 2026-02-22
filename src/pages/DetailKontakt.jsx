import BackButton from '../components/BackButton'

export default function DetailKontakt() {
  return (
    <div className="min-h-screen pt-24 px-4 pb-20">
      <div className="max-w-4xl mx-auto fade-in">
        <BackButton />
        <div className="glass-card p-8 sm:p-12 shadow-2xl">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Kontakt</h1>
          <p className="text-xl text-primary mb-8">Luca Wiegand — Wega Studios</p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center shrink-0">
                <i className="fas fa-user text-primary"></i>
              </div>
              <div>
                <p className="text-xs text-muted uppercase tracking-wider">Name</p>
                <p className="text-white font-medium">Luca Wiegand</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center shrink-0">
                <i className="fas fa-building text-primary"></i>
              </div>
              <div>
                <p className="text-xs text-muted uppercase tracking-wider">Unternehmen</p>
                <p className="text-white font-medium">Wega Studios</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center shrink-0">
                <i className="fas fa-briefcase text-primary"></i>
              </div>
              <div>
                <p className="text-xs text-muted uppercase tracking-wider">Rolle</p>
                <p className="text-white font-medium">Software Developer</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center shrink-0">
                <i className="fas fa-envelope text-primary"></i>
              </div>
              <div>
                <p className="text-xs text-muted uppercase tracking-wider">E-Mail</p>
                <a href="mailto:wegastudios@outlook.de" className="text-white font-medium hover:text-primary transition-colors">
                  wegastudios@outlook.de
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center shrink-0">
                <i className="fas fa-globe text-primary"></i>
              </div>
              <div>
                <p className="text-xs text-muted uppercase tracking-wider">Webseite</p>
                <a href="http://luca-wiegand.com/" target="_blank" rel="noreferrer" className="text-white font-medium hover:text-primary transition-colors">
                  luca-wiegand.com
                </a>
              </div>
            </div>
          </div>

          {/* Profile Links */}
          <div className="mt-10 mb-10">
            <h3 className="text-lg font-bold mb-4">Profile</h3>
            <div className="flex flex-wrap gap-3">
              <a href="https://github.com/Lucxar" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-lg border border-white/10 transition-all text-sm">
                <i className="fab fa-github text-lg"></i>
                <span>GitHub</span>
              </a>
              <a href="https://codeforces.com/profile/lucxar" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-red-500/10 hover:bg-red-500/20 px-5 py-2.5 rounded-lg border border-red-500/20 transition-all text-sm text-red-400">
                <i className="fas fa-code text-lg"></i>
                <span>Codeforces</span>
              </a>
              <a href="https://linkedin.com/in/luca-wiegand-385359279/" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-[#0077b5]/20 hover:bg-[#0077b5]/30 px-5 py-2.5 rounded-lg border border-[#0077b5]/30 transition-all text-sm text-[#5cb8e6]">
                <i className="fab fa-linkedin text-lg"></i>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <a
              href="/luca_wiegand_public.vcf"
              download="Luca_Wiegand_Kontakt.vcf"
              className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg"
            >
              <i className="fas fa-address-card text-xl"></i>
              <span>Kontakt speichern</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
