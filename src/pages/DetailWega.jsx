import { useNavigate } from 'react-router-dom'
import BackButton from '../components/BackButton'

export default function DetailWega() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen pt-28 px-6 pb-20">
      <div className="max-w-3xl mx-auto fade-in">
        <BackButton />

        <p className="text-accent font-medium text-sm tracking-wide uppercase mb-3">Founder</p>
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 tracking-tight">Wega Studios</h1>
        <p className="text-text-secondary mb-8">Inhaber & Gründer</p>

        <div className="w-full h-px bg-border-light mb-10"></div>

        <div className="max-w-[70ch] space-y-6 text-text-secondary leading-relaxed">
          <p>
            Wega Studios ist mein eigenes Unternehmen, unter dem ich als selbstständiger Softwareentwickler tätig bin. Ich unterstütze Unternehmen und Privatpersonen bei der Umsetzung ihrer digitalen Projekte — von der ersten Idee bis zur fertigen Lösung.
          </p>
          <p>
            Ob kleinere Aufträge wie Webseiten und Tools oder größere Softwareprojekte mit Backend, Datenbank und Schnittstellen — ich arbeite mich in jedes Thema ein und liefere saubere, durchdachte Ergebnisse. Der direkte Draht zu mir als Ansprechpartner sorgt dabei für kurze Wege und unkomplizierte Zusammenarbeit.
          </p>
          <p>
            Sie haben ein Projekt im Kopf oder brauchen Unterstützung bei der Entwicklung? Ich freue mich über eine Anfrage — gemeinsam finden wir die passende Lösung.
          </p>

          <button
            onClick={() => navigate('/kontakt')}
            className="btn-primary mt-4"
          >
            <i className="fas fa-envelope text-sm"></i>
            Kontakt aufnehmen
          </button>
        </div>
      </div>
    </div>
  )
}
