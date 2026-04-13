import { useNavigate } from 'react-router-dom'

export default function BackButton() {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate('/')}
      className="mb-10 group inline-flex items-center gap-2.5 text-text-secondary hover:text-accent text-sm font-medium transition-colors duration-200"
    >
      <i className="fas fa-arrow-left text-xs transition-transform duration-200 group-hover:-translate-x-1"></i>
      Zurück zur Übersicht
    </button>
  )
}
