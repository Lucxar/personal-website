export default function SectionHeading({ label, children, className = '' }) {
  return (
    <div className={`mb-12 md:mb-16 ${className}`}>
      {label && (
        <p className="text-accent font-medium text-sm tracking-wide uppercase mb-3">{label}</p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold leading-tight">{children}</h2>
    </div>
  )
}
