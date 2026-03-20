import { useNavigate } from 'react-router-dom'

export default function BackButton() {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate('/')}
      className="mb-10 inline-flex items-center gap-2 text-text-secondary hover:text-accent text-sm font-medium transition-colors duration-200"
    >
      <i className="fas fa-arrow-left text-xs"></i>
      Zurück zur Übersicht
    </button>
  )
}
