export default function ExperienceTile({ label, name, role, desc, onClick }) {
  return (
    <div onClick={onClick} className="h-full flex flex-col">
      <div className="flex justify-between items-start mb-3">
        <span className="text-primary text-xs font-bold tracking-wider">{label}</span>
        <i className="fas fa-arrow-right text-white/20 group-hover:text-primary transition-colors"></i>
      </div>
      <h3 className="text-lg font-bold mb-1">{name}</h3>
      <p className="text-sm text-muted mb-3">{role}</p>
      <p className="text-sm text-gray-400 line-clamp-3">{desc}</p>
    </div>
  )
}
