import { Link } from 'react-router-dom'
import { Phone, MessageSquare, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        background: 'var(--charbon)',
        borderTop: '1px solid var(--ardoise)',
        padding: '4rem 2rem 2rem',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem',
        }}
      >
        {/* Col 1 — Brand */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <img
            src="https://horizons-cdn.hostinger.com/fc364a02-ba23-45e9-8059-13906bf6f73a/adobe-express---file-2-cohdT.png"
            alt="KRM Clean"
            style={{ height: '28px', width: 'auto', display: 'block', objectFit: 'contain', maxWidth: '160px' }}
          />
          <p style={{ fontSize: '0.8rem', color: 'var(--brume)', lineHeight: 1.7, maxWidth: '240px' }}>
            Service de nettoyage textile professionnel à domicile à Bruxelles et périphérie.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
            <a
              href="https://wa.me/32483440669"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '36px',
                height: '36px',
                border: '1px solid var(--ardoise)',
                color: 'var(--brume)',
                transition: 'border-color 0.25s, color 0.25s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#25d366'; e.currentTarget.style.color = '#25d366' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--ardoise)'; e.currentTarget.style.color = 'var(--brume)' }}
              aria-label="WhatsApp"
            >
              <MessageSquare size={15} />
            </a>
            <a
              href="tel:+32483440669"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '36px',
                height: '36px',
                border: '1px solid var(--ardoise)',
                color: 'var(--brume)',
                transition: 'border-color 0.25s, color 0.25s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--acier)'; e.currentTarget.style.color = 'var(--acier)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--ardoise)'; e.currentTarget.style.color = 'var(--brume)' }}
              aria-label="Téléphone"
            >
              <Phone size={15} />
            </a>
          </div>
        </div>

        {/* Col 2 — Navigation */}
        <div>
          <p className="label-tag" style={{ marginBottom: '1.25rem' }}>Navigation</p>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {[
              { to: '/', label: 'Accueil' },
              { to: '/textile', label: 'Nettoyage textile' },
              { to: '/tarifs', label: 'Tarifs' },
              { to: '/procede', label: 'Notre procédé' },
              { to: '/faq', label: 'FAQ' },
              { to: '/a-propos', label: 'À propos' },
              { to: '/reservation', label: 'Réserver' },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                style={{ fontSize: '0.8rem', color: 'var(--brume)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--creme)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--brume)'}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Col 3 — Contact */}
        <div>
          <p className="label-tag" style={{ marginBottom: '1.25rem' }}>Contact</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
            <a
              href="tel:+32483440669"
              style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.8rem', color: 'var(--brume)', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--creme)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--brume)'}
            >
              <Phone size={13} />
              +32 483 44 06 69
            </a>
            <a
              href="mailto:contact@krmconcept.com"
              style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.8rem', color: 'var(--brume)', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--creme)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--brume)'}
            >
              <Mail size={13} />
              contact@krmconcept.com
            </a>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.8rem', color: 'var(--brume)' }}>
              <MapPin size={13} style={{ marginTop: '0.15rem', flexShrink: 0 }} />
              Bruxelles & périphérie (15 km)
            </div>
            <a
              href="https://wa.me/32483440669"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.7rem',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#25d366',
                border: '1px solid rgba(37,211,102,0.3)',
                padding: '0.5rem 0.9rem',
                marginTop: '0.5rem',
                transition: 'border-color 0.25s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = '#25d366'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(37,211,102,0.3)'}
            >
              <MessageSquare size={12} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div
        style={{
          borderTop: '1px solid var(--ardoise)',
          paddingTop: '1.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '0.75rem',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          <p className="label-tag" style={{ opacity: 0.4, fontSize: '0.6rem' }}>
            © {year} KRM Clean — Tous droits réservés
          </p>
          <a
            href="https://krmconcept.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '0.6rem', color: 'var(--brume)', opacity: 0.4, transition: 'opacity 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
            onMouseLeave={e => e.currentTarget.style.opacity = '0.4'}
          >
            Site créé par KRM Concept
          </a>
        </div>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {[
            { to: '/mentions-legales', label: 'Mentions légales' },
            { to: '/politique-confidentialite', label: 'Confidentialité' },
            { to: '/politique-cookies', label: 'Cookies' },
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              style={{ fontSize: '0.65rem', color: 'var(--brume)', opacity: 0.6, transition: 'opacity 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.opacity = '1'}
              onMouseLeave={e => e.currentTarget.style.opacity = '0.6'}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
