export default function SkillTile({ icon, iconColor, title, items }) {
  return (
    <>
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${iconColor}`}>
        <i className={`${icon} text-lg`}></i>
      </div>
      <h3 className="text-lg font-bold mb-3">{title}</h3>
      <ul className="space-y-1.5 text-sm text-muted">
        {items.map((item, i) => (
          <li key={i} className="flex items-center">
            <i className={`fas fa-check text-xs mr-2 ${iconColor.includes('text-') ? iconColor.split(' ').find(c => c.startsWith('text-')) : 'text-primary'}`}></i>
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}
