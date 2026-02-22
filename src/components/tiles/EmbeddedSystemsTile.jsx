export default function EmbeddedSystemsTile() {
  return (
    <>
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center shrink-0 text-amber-400">
          <i className="fas fa-microchip text-lg"></i>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Embedded Systems & Hardware</h3>
          <p className="text-sm text-muted leading-relaxed">
            Starkes, tiefgreifendes technisches Fundament — keine Berührungsängste mit hardwarenaher Architektur. Praktische Erfahrung durch universitäre Projekte, vom Mikrocontroller bis zum FPGA.
          </p>
        </div>
      </div>
      <div className="flex gap-2 flex-wrap mt-4">
        {['Arduino', 'ESP32', 'STM32', '65C02', 'FPGAs', 'Assembly', 'C', 'Basic'].map(tag => (
          <span key={tag} className="px-2.5 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-xs text-amber-300">
            {tag}
          </span>
        ))}
      </div>
    </>
  )
}
