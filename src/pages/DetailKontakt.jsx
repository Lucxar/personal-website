import { useState } from 'react'
import BackButton from '../components/BackButton'

const ACCESS_KEY = 'b7e14579-c1bd-4745-a2e7-16ec17705437'

export default function DetailKontakt() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('idle')

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
    <div className="min-h-screen pt-28 px-6 pb-20">
      <div className="max-w-3xl mx-auto fade-in">
        <BackButton />

        <p className="text-accent font-medium text-sm tracking-wide uppercase mb-3">Kontakt</p>
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 tracking-tight">Nachricht schreiben</h1>
        <p className="text-text-secondary mb-8">Luca Wiegand — Wega Studios</p>

        <div className="w-full h-px bg-border-light mb-10"></div>

        {/* Kontaktformular */}
        <form onSubmit={handleSubmit} className="max-w-lg space-y-5 mb-14">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text mb-2">Deine E-Mail</label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@beispiel.de"
              className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-text placeholder-text-secondary/40 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all text-sm"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-text mb-2">Nachricht</label>
            <textarea
              id="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Schreib mir eine Nachricht..."
              className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-text placeholder-text-secondary/40 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all text-sm resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <i className={`fas ${status === 'sending' ? 'fa-spinner fa-spin' : 'fa-paper-plane'} text-sm`}></i>
            <span>{status === 'sending' ? 'Wird gesendet...' : 'Nachricht senden'}</span>
          </button>
          {status === 'success' && (
            <p className="text-emerald-600 text-sm flex items-center gap-2">
              <i className="fas fa-check-circle"></i> Nachricht erfolgreich gesendet!
            </p>
          )}
          {status === 'error' && (
            <p className="text-red-600 text-sm flex items-center gap-2">
              <i className="fas fa-exclamation-circle"></i> Etwas ist schiefgelaufen. Versuche es erneut.
            </p>
          )}
        </form>

        {/* Profile Links */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-5">Profile</h3>
          <div className="flex flex-wrap gap-3">
            <a href="https://github.com/Lucxar" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 premium-card-static px-5 py-2.5 text-sm text-text-secondary hover:text-text transition-colors">
              <i className="fab fa-github"></i>
              <span>GitHub</span>
            </a>
            <a href="https://codeforces.com/profile/lucxar" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 premium-card-static px-5 py-2.5 text-sm text-text-secondary hover:text-text transition-colors">
              <i className="fas fa-code"></i>
              <span>Codeforces</span>
            </a>
            <a href="https://linkedin.com/in/luca-wiegand-385359279/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 premium-card-static px-5 py-2.5 text-sm text-text-secondary hover:text-text transition-colors">
              <i className="fab fa-linkedin"></i>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* VCF Download */}
        <a
          href="/luca_wiegand_public.vcf"
          download="Luca_Wiegand_Kontakt.vcf"
          className="btn-primary inline-flex"
        >
          <i className="fas fa-address-card text-sm"></i>
          Kontakt speichern
        </a>
      </div>
    </div>
  )
}
