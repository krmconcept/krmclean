import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('krm-cookie-consent')
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1200)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('krm-cookie-consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('krm-cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'calc(100% - 3rem)',
        maxWidth: '640px',
        background: 'var(--zinc)',
        border: '1px solid var(--ardoise)',
        borderLeft: '3px solid var(--acier-mid)',
        borderRadius: '2px',
        padding: '1.25rem 1.5rem',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
        <p style={{ fontSize: '0.8rem', color: 'var(--brume)', lineHeight: 1.6 }}>
          Ce site utilise des cookies pour améliorer votre expérience. En continuant, vous acceptez notre{' '}
          <Link to="/politique-cookies" style={{ color: 'var(--acier-mid)', textDecoration: 'underline' }}>
            politique de cookies
          </Link>
          .
        </p>
        <button
          onClick={decline}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--brume)', flexShrink: 0, padding: '0.1rem' }}
          aria-label="Fermer"
        >
          <X size={16} />
        </button>
      </div>
      <div style={{ display: 'flex', gap: '0.75rem' }}>
        <button className="btn-primary" style={{ fontSize: '0.7rem', padding: '0.5rem 1rem' }} onClick={accept}>
          Accepter
        </button>
        <button className="btn-ghost" style={{ fontSize: '0.7rem', padding: '0.5rem 1rem' }} onClick={decline}>
          Refuser
        </button>
      </div>
    </div>
  )
}
