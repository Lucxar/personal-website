export default function SectionHeading({ label, children, className = '' }) {
  return (
    <div className={`mb-12 md:mb-16 ${className}`}>
      {label && (
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[2px] bg-accent rounded-full"></div>
          <p className="text-accent font-medium text-sm tracking-widest uppercase">{label}</p>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold leading-tight">{children}</h2>
    </div>
  )
}
