import { useNavigate } from 'react-router-dom'

export default function BackButton() {
  const navigate = useNavigate()

  return (
    <button onClick={() => navigate('/')} className="mb-8 flex items-center text-primary hover:text-white transition-colors">
      <i className="fas fa-arrow-left mr-2"></i> Zurück zur Übersicht
    </button>
  )
}
