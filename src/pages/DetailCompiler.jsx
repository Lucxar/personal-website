import BackButton from '../components/BackButton'

export default function DetailCompiler() {
  return (
    <div className="min-h-screen pt-28 px-6 pb-20">
      <div className="max-w-3xl mx-auto fade-in">
        <BackButton />

        <p className="text-accent font-medium text-sm tracking-wide uppercase mb-3">Compilerbau</p>
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 tracking-tight">Pascal-to-JVM Compiler</h1>
        <p className="text-text-secondary mb-8">Compilerbau-Projekt</p>

        <div className="w-full h-px bg-border-light mb-10"></div>

        <div className="max-w-[70ch] space-y-6 text-text-secondary leading-relaxed">
          <p>
            Ein vollständiger Compiler, der Pascal-Quellcode über mehrere Phasen hinweg in ausführbaren JVM-Bytecode übersetzt. Das Projekt deckt den kompletten Compilerbau-Prozess ab — vom Parsing über die semantische Analyse bis hin zur Codegenerierung und Assemblierung.
          </p>

          <h3 className="text-lg font-semibold text-text mt-10 mb-4">Compilation-Pipeline</h3>
          <p className="mb-4">
            Der Compiler folgt einer klassischen Architektur mit vier aufeinanderfolgenden Phasen:
          </p>
          <ol className="space-y-3 list-decimal list-inside">
            <li><strong className="text-text">Parsing:</strong> Eine ANTLR-4-Grammatik verarbeitet den Pascal-Code zu einem Parse-Tree.</li>
            <li><strong className="text-text">Semantische Analyse:</strong> Typprüfung und Scope-Validierung durch einen TypeCheckVisitor.</li>
            <li><strong className="text-text">Codegenerierung:</strong> AST-Traversierung erzeugt Jasmin-Assembler-Instruktionen.</li>
            <li><strong className="text-text">Assemblierung:</strong> Der Jasmin-Assembler wandelt die Ausgabe in ausführbare .class-Dateien um.</li>
          </ol>

          <h3 className="text-lg font-semibold text-text mt-10 mb-4">Unterstützte Sprachfeatures</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {['Integer', 'Double', 'String', 'Boolean', 'Arithmetik', 'Vergleiche', 'Logik', 'If/Else', 'While-Schleifen', 'Funktionen', 'Rekursion', 'writeln()'].map(tag => (
              <span key={tag} className="skill-tag">{tag}</span>
            ))}
          </div>

          <h3 className="text-lg font-semibold text-text mt-10 mb-4">Optimierung & Statische Analyse</h3>
          <p className="mb-6">
            Über die reine Kompilierung hinaus implementiert das Projekt zwei Datenflussanalysen, die auf einem selbst konstruierten <strong className="text-text">Kontrollflussgraphen (CFG)</strong> arbeiten. Der generierte Code wird dabei in Basic Blocks zerlegt, die über Sprungkanten miteinander verbunden sind — die Grundlage für alle weiteren Analysen.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="premium-card-static p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-surface-alt rounded-lg flex items-center justify-center">
                  <i className="fas fa-heartbeat text-accent text-sm"></i>
                </div>
                <h4 className="font-semibold text-text text-sm">Liveness Analysis</h4>
              </div>
              <p className="text-sm leading-relaxed">
                Eine Datenflussanalyse, die für jeden Punkt im Programm ermittelt, welche Variablen noch in Zukunft gelesen werden. Daraus lässt sich berechnen, wie viele Register ein Programm <strong className="text-text">minimal</strong> benötigt — ein klassisches Problem der Registerallokation.
              </p>
            </div>
            <div className="premium-card-static p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-surface-alt rounded-lg flex items-center justify-center">
                  <i className="fas fa-equals text-accent text-sm"></i>
                </div>
                <h4 className="font-semibold text-text text-sm">Constant Propagation</h4>
              </div>
              <p className="text-sm leading-relaxed">
                Eine statische Analyse, die erkennt, welche Variablen an einem bestimmten Programmpunkt garantiert einen konstanten Wert halten. Solche Werte können zur Compile-Zeit eingesetzt werden, wodurch zur Laufzeit unnötige Berechnungen entfallen.
              </p>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-text mt-10 mb-4">Technologien</h3>
          <div className="flex flex-wrap gap-2 mb-8">
            {['Java', 'Gradle', 'ANTLR 4', 'Jasmin', 'JUnit 5', 'JVM Bytecode'].map(tag => (
              <span key={tag} className="skill-tag">{tag}</span>
            ))}
          </div>

          <a
            href="https://github.com/Lucxar/Pascal-to-JVM-Bytecode-Compiler"
            target="_blank"
            rel="noreferrer"
            className="btn-primary inline-flex"
          >
            <i className="fab fa-github text-sm"></i>
            Hier geht's zum Repository
          </a>
        </div>
      </div>
    </div>
  )
}
