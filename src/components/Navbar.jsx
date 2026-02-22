import { useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

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
    { label: 'Skills', id: 'skills' },
    { label: 'Erfahrung', id: 'experience' },
    { label: 'Projekte', id: 'projects' },
  ]

  return (
    <nav className="fixed w-full z-50 bg-dark/70 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            className="flex-shrink-0 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/30 px-4 py-1.5 rounded-lg transition-all"
            onClick={() => { navigate('/'); setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          >
            <span className="text-xl font-bold tracking-wider">WEGA STUDIOS</span>
          </button>

          {/* Desktop */}
          <div className="hidden md:flex items-baseline space-x-4">
            {links.map(l => (
              <button key={l.id} onClick={() => scrollToSection(l.id)} className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                {l.label}
              </button>
            ))}
            <button onClick={() => scrollToSection('contact')} className="bg-primary hover:bg-blue-600 px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Kontakt
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-white hover:text-primary transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menü"
          >
            <i className={`fas ${menuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-dark/95 backdrop-blur-xl border-t border-white/10 px-4 pb-4">
          {links.map(l => (
            <button key={l.id} onClick={() => scrollToSection(l.id)} className="block w-full text-left hover:text-primary px-3 py-3 text-sm font-medium transition-colors border-b border-white/5">
              {l.label}
            </button>
          ))}
          <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-primary px-3 py-3 text-sm font-medium">
            Kontakt
          </button>
        </div>
      )}
    </nav>
  )
}
