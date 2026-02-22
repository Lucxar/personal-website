export default function ProjectTile({ title, subtitle, desc, icon, iconColor, badge, onClick }) {
  return (
    <div onClick={onClick} className="h-full flex flex-col">
      {badge && (
        <div className="mb-3">
          <span className="bg-yellow-500/20 text-yellow-400 px-2.5 py-1 rounded-full text-xs font-bold border border-yellow-500/30">
            <i className="fas fa-trophy mr-1"></i>{badge}
          </span>
        </div>
      )}
      <div className={`w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-3 ${iconColor || 'text-primary'}`}>
        <i className={`${icon} text-lg`}></i>
      </div>
      <h3 className="text-lg font-bold mb-1">{title}</h3>
      <p className={`text-xs font-mono mb-3 ${iconColor || 'text-primary'}`}>{subtitle}</p>
      <p className="text-sm text-muted line-clamp-3">{desc}</p>
      <span className="mt-auto pt-3 text-sm font-bold text-white group-hover:text-primary transition-colors">
        Details <i className="fas fa-arrow-right ml-1"></i>
      </span>
    </div>
  )
}
