export default function EducationTile() {
  return (
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center shrink-0">
        <i className="fas fa-graduation-cap text-primary"></i>
      </div>
      <div>
        <h3 className="text-sm font-bold text-white leading-snug">Heinrich-Heine-Universität Düsseldorf</h3>
        <p className="text-primary text-xs font-medium mt-1">B.Sc. Informatik</p>
        <p className="text-muted text-xs mt-1">Aktuell im Studium.</p>
      </div>
    </div>
  )
}
