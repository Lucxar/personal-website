import { useNavigate, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToSection = (id) => {
    setMenuOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const links = [
    { label: 'Über mich', id: 'about' },
    { label: 'Expertise', id: 'skills' },
    { label: 'Projekte', id: 'projects' },
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface/90 backdrop-blur-xl shadow-sm border-b border-border-light'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <button
            className="text-text font-semibold text-lg tracking-tight hover:text-accent transition-colors duration-200"
            onClick={() => { navigate('/'); setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          >
            Luca Wiegand
          </button>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {links.map(l => (
              <button
                key={l.id}
                onClick={() => scrollToSection(l.id)}
                className="text-text-secondary hover:text-text px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => { navigate('/kontakt'); setMenuOpen(false) }}
              className="ml-2 btn-primary !py-2 !px-5 !text-sm"
            >
              Kontakt
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-text-secondary hover:text-text transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menü"
          >
            <i className={`fas ${menuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-surface/95 backdrop-blur-xl border-t border-border-light px-6 pb-4 pt-2">
          {links.map(l => (
            <button
              key={l.id}
              onClick={() => scrollToSection(l.id)}
              className="block w-full text-left text-text-secondary hover:text-text px-2 py-3 text-sm font-medium transition-colors border-b border-border-light last:border-0"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => { navigate('/kontakt'); setMenuOpen(false) }}
            className="block w-full text-left text-accent font-medium px-2 py-3 text-sm"
          >
            Kontakt
          </button>
        </div>
      </div>
    </nav>
  )
}
