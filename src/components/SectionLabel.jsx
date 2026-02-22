import useRevealOnScroll from '../hooks/useRevealOnScroll'

export default function SectionLabel({ children, id }) {
  const [ref, isVisible] = useRevealOnScroll()

  return (
    <div
      ref={ref}
      id={id}
      className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-4 ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
    >
      <h2 className="text-2xl font-bold text-white">{children}</h2>
    </div>
  )
}
