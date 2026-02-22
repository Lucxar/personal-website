export default function ContactTile() {
  return (
    <>
      <h3 className="text-lg font-bold mb-4">Kontakt</h3>
      <div className="flex flex-col gap-3">
        <a
          href="https://github.com/Lucxar"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 bg-white/5 hover:bg-white/10 px-4 py-2.5 rounded-lg transition-all text-sm"
        >
          <i className="fab fa-github text-lg"></i>
          <span>GitHub</span>
        </a>
        <a
          href="https://codeforces.com/profile/lucxar"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 bg-red-500/10 hover:bg-red-500/20 px-4 py-2.5 rounded-lg transition-all text-sm text-red-400"
        >
          <i className="fas fa-code text-lg"></i>
          <span>Codeforces</span>
        </a>
        <a
          href="https://linkedin.com/in/luca-wiegand-385359279/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 bg-[#0077b5]/20 hover:bg-[#0077b5]/30 px-4 py-2.5 rounded-lg transition-all text-sm text-[#5cb8e6]"
        >
          <i className="fab fa-linkedin text-lg"></i>
          <span>LinkedIn</span>
        </a>
        <a
          href="/luca_wiegand_public.vcf"
          download="Luca_Wiegand_Kontakt.vcf"
          className="flex items-center gap-3 bg-emerald-500/10 hover:bg-emerald-500/20 px-4 py-2.5 rounded-lg transition-all text-sm text-emerald-400"
        >
          <i className="fas fa-address-card text-lg"></i>
          <span>Kontakt speichern</span>
        </a>
      </div>
    </>
  )
}
