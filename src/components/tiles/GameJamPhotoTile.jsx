export default function GameJamPhotoTile() {
  return (
    <div className="relative w-full h-full min-h-[300px] overflow-hidden rounded-xl">
      <img
        src="/SiegerfotoGameJam2025.jpeg"
        alt="Siegerehrung HHU Game Jam 2025"
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
      <div className="absolute bottom-4 left-4 right-4">
        <span className="inline-flex items-center bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-bold border border-yellow-500/30 backdrop-blur-sm">
          <i className="fas fa-trophy mr-2"></i>1. Platz HHU Game Jam 2025
        </span>
      </div>
    </div>
  )
}
