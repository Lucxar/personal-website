export default function InterdisciplinaryTile() {
  return (
    <>
      <div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center mb-3 text-teal-400">
        <i className="fas fa-globe text-lg"></i>
      </div>
      <h3 className="text-lg font-bold mb-3">Interdisziplinäre Erfahrung</h3>
      <ul className="space-y-3 text-sm text-muted">
        <li className="flex items-start gap-2">
          <i className="fas fa-plane text-teal-400 text-xs mt-1 shrink-0"></i>
          <span>2 Monate USA — sehr gutes Business English</span>
        </li>
        <li className="flex items-start gap-2">
          <i className="fas fa-boxes-stacked text-teal-400 text-xs mt-1 shrink-0"></i>
          <span>6 Monate Logistik — Prozessoptimierung & Beratung</span>
        </li>
        <li className="flex items-start gap-2">
          <i className="fas fa-handshake text-teal-400 text-xs mt-1 shrink-0"></i>
          <span>„Übersetzer" zwischen IT und Fachbereich — Requirements Engineering</span>
        </li>
      </ul>
    </>
  )
}
