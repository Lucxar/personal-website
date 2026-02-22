import BackButton from '../components/BackButton'

export default function DetailInternship() {
  return (
    <div className="min-h-screen pt-24 px-4 pb-20">
      <div className="max-w-4xl mx-auto fade-in">
        <BackButton />
        <div className="glass-card p-8 sm:p-12 shadow-2xl">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Programmier-Praktikum</h1>
          <p className="text-xl text-purple-400 mb-8">HHU Universitätsprojekt</p>
          <div className="prose prose-invert max-w-none">
            <p className="text-muted leading-relaxed mb-6">
              Im Rahmen eines Universitätsprojekts an der Heinrich-Heine-Universität habe ich ein Matching- und Organisationssystem entwickelt, das den gesamten Prozess rund um wissenschaftliche Abschlussarbeiten vereinfacht.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Die Plattform ermöglicht es Studierenden, passende Professoren und wissenschaftliche Mitarbeiter für ihre Abschlussarbeit zu finden, Themen abzustimmen, Dokumente auszutauschen, Termine zu koordinieren und direkt zu kommunizieren — alles an einem Ort. Das Ziel: Den oft unübersichtlichen Weg von der Themenfindung bis zur fertigen Arbeit strukturiert und effizient zu gestalten.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Umgesetzt wurde das Projekt als vollständige Web-Anwendung mit Spring Boot im Backend und Thymeleaf für die serverseitig gerenderte, interaktive Benutzeroberfläche. Das Ergebnis ist eine nutzbare Plattform mit echtem Frontend, über die Studierende und Lehrende direkt im Browser arbeiten können.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
