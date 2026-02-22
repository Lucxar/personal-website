import BackButton from '../components/BackButton'

export default function DetailCompiler() {
  return (
    <div className="min-h-screen pt-24 px-4 pb-20">
      <div className="max-w-4xl mx-auto fade-in">
        <BackButton />
        <div className="glass-card p-8 sm:p-12 shadow-2xl">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Pascal-to-JVM Compiler</h1>
          <p className="text-xl text-orange-400 mb-8">Compilerbau-Projekt</p>
          <div className="prose prose-invert max-w-none">
            <p className="text-muted leading-relaxed mb-6">
              Ein vollständiger Compiler, der Pascal-Quellcode über mehrere Phasen hinweg in ausführbaren JVM-Bytecode übersetzt. Das Projekt deckt den kompletten Compilerbau-Prozess ab — vom Parsing über die semantische Analyse bis hin zur Codegenerierung und Assemblierung.
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">Compilation-Pipeline</h2>
            <p className="text-muted leading-relaxed mb-4">
              Der Compiler folgt einer klassischen Architektur mit vier aufeinanderfolgenden Phasen:
            </p>
            <ol className="list-decimal list-inside text-muted leading-relaxed mb-6 space-y-2">
              <li><strong className="text-white">Parsing:</strong> Eine ANTLR-4-Grammatik verarbeitet den Pascal-Code zu einem Parse-Tree.</li>
              <li><strong className="text-white">Semantische Analyse:</strong> Typprüfung und Scope-Validierung durch einen TypeCheckVisitor.</li>
              <li><strong className="text-white">Codegenerierung:</strong> AST-Traversierung erzeugt Jasmin-Assembler-Instruktionen.</li>
              <li><strong className="text-white">Assemblierung:</strong> Der Jasmin-Assembler wandelt die Ausgabe in ausführbare .class-Dateien um.</li>
            </ol>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">Unterstützte Sprachfeatures</h2>
            <div className="flex gap-2 flex-wrap mb-6">
              {['Integer', 'Double', 'String', 'Boolean', 'Arithmetik', 'Vergleiche', 'Logik', 'If/Else', 'While-Schleifen', 'Funktionen', 'Rekursion', 'writeln()'].map(tag => (
                <span key={tag} className="px-2.5 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-xs text-orange-300">
                  {tag}
                </span>
              ))}
            </div>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">Optimierung & Statische Analyse</h2>
            <p className="text-muted leading-relaxed mb-6">
              Über die reine Kompilierung hinaus implementiert das Projekt zwei Datenflussanalysen, die auf einem selbst konstruierten <strong className="text-white">Kontrollflussgraphen (CFG)</strong> arbeiten. Der generierte Code wird dabei in Basic Blocks zerlegt, die über Sprungkanten miteinander verbunden sind — die Grundlage für alle weiteren Analysen.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-orange-500/10 rounded-lg flex items-center justify-center">
                    <i className="fas fa-heartbeat text-orange-400 text-sm"></i>
                  </div>
                  <h3 className="font-semibold text-white">Liveness Analysis</h3>
                </div>
                <p className="text-muted text-sm leading-relaxed">
                  Eine Datenflussanalyse, die für jeden Punkt im Programm ermittelt, welche Variablen noch in Zukunft gelesen werden. Daraus lässt sich berechnen, wie viele Register ein Programm <strong className="text-white">minimal</strong> benötigt — ein klassisches Problem der Registerallokation.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-orange-500/10 rounded-lg flex items-center justify-center">
                    <i className="fas fa-equals text-orange-400 text-sm"></i>
                  </div>
                  <h3 className="font-semibold text-white">Constant Propagation</h3>
                </div>
                <p className="text-muted text-sm leading-relaxed">
                  Eine statische Analyse, die erkennt, welche Variablen an einem bestimmten Programmpunkt garantiert einen konstanten Wert halten. Solche Werte können zur Compile-Zeit eingesetzt werden, wodurch zur Laufzeit unnötige Berechnungen entfallen.
                </p>
              </div>
            </div>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">Technologien</h2>
            <div className="flex gap-2 flex-wrap mb-8">
              {['Java', 'Gradle', 'ANTLR 4', 'Jasmin', 'JUnit 5', 'JVM Bytecode'].map(tag => (
                <span key={tag} className="px-2.5 py-1 bg-purple-500/10 border border-purple-500/25 rounded-full text-xs text-purple-300">
                  {tag}
                </span>
              ))}
            </div>

            <a href="https://github.com/Lucxar/Pascal-to-JVM-Bytecode-Compiler" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-primary/15 hover:bg-primary/25 border border-primary/30 hover:border-primary/50 px-5 py-3 rounded-lg transition-all group">
              <div className="w-9 h-9 bg-primary/20 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <i className="fab fa-github text-primary text-sm"></i>
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">Hier geht's zum Repository</h4>
                <span className="text-xs text-primary flex items-center gap-1">
                  GitHub <i className="fas fa-arrow-right text-[10px]"></i>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
