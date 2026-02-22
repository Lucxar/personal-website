import useRevealOnScroll from '../hooks/useRevealOnScroll'

export default function BentoCard({ children, className = '', delay = 0, id, onClick }) {
  const [ref, isVisible] = useRevealOnScroll()

  return (
    <div
      ref={ref}
      id={id}
      onClick={onClick}
      className={`glass-card p-6 ${isVisible ? 'reveal-visible' : 'reveal-hidden'} ${onClick ? 'cursor-pointer' : ''} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}
