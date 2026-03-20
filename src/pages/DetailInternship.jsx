import BackButton from '../components/BackButton'

export default function DetailInternship() {
  return (
    <div className="min-h-screen pt-28 px-6 pb-20">
      <div className="max-w-3xl mx-auto fade-in">
        <BackButton />

        <p className="text-accent font-medium text-sm tracking-wide uppercase mb-3">Universitätsprojekt</p>
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 tracking-tight">Programmier-Praktikum</h1>
        <p className="text-text-secondary mb-8">HHU Universitätsprojekt</p>

        <div className="w-full h-px bg-border-light mb-10"></div>

        <div className="max-w-[70ch] space-y-6 text-text-secondary leading-relaxed">
          <p>
            Im Rahmen eines Universitätsprojekts an der Heinrich-Heine-Universität habe ich ein Matching- und Organisationssystem entwickelt, das den gesamten Prozess rund um wissenschaftliche Abschlussarbeiten vereinfacht.
          </p>
          <p>
            Die Plattform ermöglicht es Studierenden, passende Professoren und wissenschaftliche Mitarbeiter für ihre Abschlussarbeit zu finden, Themen abzustimmen, Dokumente auszutauschen, Termine zu koordinieren und direkt zu kommunizieren — alles an einem Ort. Das Ziel: Den oft unübersichtlichen Weg von der Themenfindung bis zur fertigen Arbeit strukturiert und effizient zu gestalten.
          </p>
          <p>
            Umgesetzt wurde das Projekt als vollständige Web-Anwendung mit Spring Boot im Backend und Thymeleaf für die serverseitig gerenderte, interaktive Benutzeroberfläche. Das Ergebnis ist eine nutzbare Plattform mit echtem Frontend, über die Studierende und Lehrende direkt im Browser arbeiten können.
          </p>
        </div>
      </div>
    </div>
  )
}
