import useRevealOnScroll from '../hooks/useRevealOnScroll'

export default function Section({ children, id, className = '', noPadding = false }) {
  const [ref, isVisible] = useRevealOnScroll()

  return (
    <section
      ref={ref}
      id={id}
      className={`${noPadding ? '' : 'py-20 md:py-28'} ${isVisible ? 'reveal-visible' : 'reveal-hidden'} ${className}`}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        {children}
      </div>
    </section>
  )
}
