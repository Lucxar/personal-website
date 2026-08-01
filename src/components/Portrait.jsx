const PORTRAIT_SRC = '/portrait-ai-modified.jpeg'
const PORTRAIT_ALT = 'Portrait mit KI bearbeitet von Luca Wiegand'

/**
 * Keeps the required AI-content disclosure attached to every portrait usage.
 */
export default function Portrait({
  className = '',
  imageContainerClassName = '',
  imageClassName = '',
  disclosureClassName = '',
  loading = 'lazy',
  fetchPriority,
  centered = false,
}) {
  return (
    <figure className={`portrait-figure${centered ? ' portrait-figure--centered' : ''} ${className}`}>
      <div className={imageContainerClassName}>
        <img
          src={PORTRAIT_SRC}
          alt={PORTRAIT_ALT}
          className={`w-full h-full object-cover object-[50%_28%] ${imageClassName}`}
          loading={loading}
          decoding="async"
          fetchPriority={fetchPriority}
        />
      </div>
      <figcaption className={`portrait-ai-disclosure ${disclosureClassName}`}>
        Mit KI bearbeitet
      </figcaption>
    </figure>
  )
}
