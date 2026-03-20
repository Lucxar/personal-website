import BackButton from '../components/BackButton'

export default function DetailSentrix() {
  return (
    <div className="min-h-screen pt-28 px-6 pb-20">
      <div className="max-w-3xl mx-auto fade-in">
        <BackButton />

        <p className="text-accent font-medium text-sm tracking-wide uppercase mb-3">Mitgründer</p>
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 tracking-tight">Sentrix Code</h1>
        <p className="text-text-secondary mb-8">Mitgründer</p>

        <div className="w-full h-px bg-border-light mb-10"></div>

        <div className="max-w-[70ch] space-y-6 text-text-secondary leading-relaxed">
          <p>
            Als Mitgründer von Sentrix Code arbeite ich mit einem Team daran, umfassende Softwarelösungen bereitzustellen.
          </p>

          <div className="premium-card-static p-6 mt-10">
            <p className="text-xs font-semibold tracking-wider text-text-secondary uppercase mb-3">Web</p>
            <span className="flex items-center gap-2 text-text-secondary text-sm">
              <i className="fas fa-globe text-xs"></i>
              Webseite folgt
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
