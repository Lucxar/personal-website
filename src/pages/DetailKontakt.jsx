import { useState } from 'react'
import BackButton from '../components/BackButton'

const ACCESS_KEY = 'b7e14579-c1bd-4745-a2e7-16ec17705437'

export default function DetailKontakt() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          email,
          message,
          subject: `Neue Nachricht von ${email} — luca-wiegand.com`,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setEmail('')
        setMessage('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen pt-24 px-4 pb-20">
      <div className="max-w-4xl mx-auto fade-in">
        <BackButton />
        <div className="glass-card p-8 sm:p-12 shadow-2xl">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Kontakt</h1>
          <p className="text-xl text-primary mb-8">Luca Wiegand — Wega Studios</p>

          {/* Kontaktformular */}
          <form onSubmit={handleSubmit} className="space-y-4 mb-10">
            <div>
              <label htmlFor="email" className="block text-sm text-muted mb-1.5">Deine E-Mail</label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@beispiel.de"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all text-sm"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-muted mb-1.5">Nachricht</label>
              <textarea
                id="message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Schreib mir eine Nachricht..."
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all text-sm resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex items-center gap-2 bg-primary hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium px-6 py-3 rounded-lg transition-all text-sm"
            >
              <i className={`fas ${status === 'sending' ? 'fa-spinner fa-spin' : 'fa-paper-plane'} text-sm`}></i>
              <span>{status === 'sending' ? 'Wird gesendet...' : 'Nachricht senden'}</span>
            </button>
            {status === 'success' && (
              <p className="text-emerald-400 text-sm flex items-center gap-2">
                <i className="fas fa-check-circle"></i> Nachricht erfolgreich gesendet!
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-sm flex items-center gap-2">
                <i className="fas fa-exclamation-circle"></i> Etwas ist schiefgelaufen. Versuche es erneut.
              </p>
            )}
          </form>

          {/* Profile Links */}
          <div className="mb-10">
            <h3 className="text-lg font-bold mb-4">Profile</h3>
            <div className="flex flex-wrap gap-3">
              <a href="https://github.com/Lucxar" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-lg border border-white/10 transition-all text-sm">
                <i className="fab fa-github text-lg"></i>
                <span>GitHub</span>
              </a>
              <a href="https://codeforces.com/profile/lucxar" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-red-500/10 hover:bg-red-500/20 px-5 py-2.5 rounded-lg border border-red-500/20 transition-all text-sm text-red-400">
                <i className="fas fa-code text-lg"></i>
                <span>Codeforces</span>
              </a>
              <a href="https://linkedin.com/in/luca-wiegand-385359279/" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-[#0077b5]/20 hover:bg-[#0077b5]/30 px-5 py-2.5 rounded-lg border border-[#0077b5]/30 transition-all text-sm text-[#5cb8e6]">
                <i className="fab fa-linkedin text-lg"></i>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <a
              href="/luca_wiegand_public.vcf"
              download="Luca_Wiegand_Kontakt.vcf"
              className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg"
            >
              <i className="fas fa-address-card text-xl"></i>
              <span>Kontakt speichern</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
