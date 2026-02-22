import BackButton from '../components/BackButton'

export default function DetailSentrix() {
  return (
    <div className="min-h-screen pt-24 px-4 pb-20">
      <div className="max-w-4xl mx-auto fade-in">
        <BackButton />
        <div className="glass-card p-8 sm:p-12 shadow-2xl">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Sentrix Code</h1>
          <p className="text-xl text-primary mb-8">Mitgründer</p>
          <div className="prose prose-invert max-w-none">
            <p className="text-muted leading-relaxed mb-6">
              Als Mitgründer von Sentrix Code arbeite ich mit einem Team daran, umfassende Softwarelösungen bereitzustellen.
            </p>
            <div className="bg-white/5 p-6 rounded-lg border border-white/5 mb-8">
              <p className="text-sm font-mono text-muted mb-2">WEB</p>
              <span className="text-muted flex items-center gap-2">
                <i className="fas fa-globe"></i> Webseite folgt
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
