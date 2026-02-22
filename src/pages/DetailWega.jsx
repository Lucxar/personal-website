import { useNavigate } from 'react-router-dom'
import BackButton from '../components/BackButton'

export default function DetailWega() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen pt-24 px-4 pb-20">
      <div className="max-w-4xl mx-auto fade-in">
        <BackButton />
        <div className="glass-card p-8 sm:p-12 shadow-2xl">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Wega Studios</h1>
          <p className="text-xl text-primary mb-8">Inhaber & Gründer</p>
          <div className="prose prose-invert max-w-none">
            <p className="text-muted leading-relaxed mb-6">
              Wega Studios ist mein eigenes Unternehmen, unter dem ich als selbstständiger Softwareentwickler tätig bin. Ich unterstütze Unternehmen und Privatpersonen bei der Umsetzung ihrer digitalen Projekte — von der ersten Idee bis zur fertigen Lösung.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Ob kleinere Aufträge wie Webseiten und Tools oder größere Softwareprojekte mit Backend, Datenbank und Schnittstellen — ich arbeite mich in jedes Thema ein und liefere saubere, durchdachte Ergebnisse. Der direkte Draht zu mir als Ansprechpartner sorgt dabei für kurze Wege und unkomplizierte Zusammenarbeit.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              Sie haben ein Projekt im Kopf oder brauchen Unterstützung bei der Entwicklung? Ich freue mich über eine Anfrage — gemeinsam finden wir die passende Lösung.
            </p>
            <button
              onClick={() => navigate('/kontakt')}
              className="inline-flex items-center gap-3 bg-primary hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg"
            >
              <i className="fas fa-envelope text-lg"></i>
              <span>Kontakt aufnehmen</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
