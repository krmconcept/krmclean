import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'

const NAV = [
  { to: '/', label: 'Accueil' },
  { to: '/textile', label: 'Textile' },
  { to: '/tarifs', label: 'Tarifs' },
  { to: '/procede', label: 'Procédé' },
  { to: '/faq', label: 'FAQ' },
  { to: '/a-propos', label: 'À propos' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: 'rgba(8,10,12,0.92)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          borderBottom: scrolled ? '1px solid var(--ardoise)' : '1px solid transparent',
          transition: 'border-color 0.3s ease',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 2rem',
            height: '64px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
          }}
        >
          {/* Logo */}
          <Link to="/" style={{ flexShrink: 0 }}>
            <img
              src="https://horizons-cdn.hostinger.com/fc364a02-ba23-45e9-8059-13906bf6f73a/adobe-express---file-2-cohdT.png"
              alt="KRM Clean"
              style={{ height: '44px', width: 'auto', display: 'block' }}
            />
          </Link>

          {/* Desktop nav */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
              flex: 1,
              justifyContent: 'center',
            }}
            className="desktop-nav"
          >
            {NAV.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                style={({ isActive }) => ({
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: '0.8rem',
                  letterSpacing: '0.05em',
                  color: isActive ? 'var(--acier)' : 'var(--brume)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                  whiteSpace: 'nowrap',
                })}
                onMouseEnter={e => { if (!e.currentTarget.dataset.active) e.currentTarget.style.color = 'var(--creme)' }}
                onMouseLeave={e => { e.currentTarget.style.color = e.currentTarget.dataset.active ? 'var(--acier)' : 'var(--brume)' }}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Right side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexShrink: 0 }}>
            <a
              href="tel:+32483440669"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.75rem',
                fontFamily: "'DM Sans', sans-serif",
                color: 'var(--brume)',
                transition: 'color 0.2s',
              }}
              className="phone-link"
              onMouseEnter={e => e.currentTarget.style.color = 'var(--creme)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--brume)'}
            >
              <Phone size={13} />
              <span style={{ display: 'none' }} className="phone-text">+32 483 44 06 69</span>
            </a>
            <Link
              to="/reservation"
              className="btn-primary btn-primary-sm"
              style={{ fontSize: '0.7rem', letterSpacing: '0.08em' }}
            >
              Réserver
            </Link>
            {/* Hamburger */}
            <button
              onClick={() => setOpen(true)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--creme)',
                padding: '0.25rem',
                display: 'none',
              }}
              className="hamburger"
              aria-label="Ouvrir le menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {open && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(8,10,12,0.6)',
            zIndex: 1001,
          }}
          onClick={() => setOpen(false)}
        />
      )}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '280px',
          background: 'var(--zinc)',
          borderLeft: '1px solid var(--ardoise)',
          zIndex: 1002,
          padding: '1.5rem',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s cubic-bezier(0.23,1,0.32,1)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <img
            src="https://horizons-cdn.hostinger.com/fc364a02-ba23-45e9-8059-13906bf6f73a/adobe-express---file-2-cohdT.png"
            alt="KRM Clean"
            style={{ height: '38px', width: 'auto' }}
          />
          <button
            onClick={() => setOpen(false)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--brume)', padding: '0.25rem' }}
            aria-label="Fermer"
          >
            <X size={20} />
          </button>
        </div>
        <nav style={{ display: 'flex', flexDirection: 'column' }}>
          {NAV.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setOpen(false)}
              style={({ isActive }) => ({
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: isActive ? 500 : 300,
                fontSize: '1rem',
                letterSpacing: '0.04em',
                color: isActive ? 'var(--acier)' : 'var(--creme)',
                padding: '0.9rem 0',
                borderBottom: '1px solid var(--ardoise)',
                display: 'block',
              })}
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <div style={{ marginTop: 'auto', paddingTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <a
            href="tel:+32483440669"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.85rem',
              fontFamily: "'Geist Mono', monospace",
              color: 'var(--acier)',
            }}
          >
            <Phone size={14} />
            +32 483 44 06 69
          </a>
          <Link
            to="/reservation"
            className="btn-primary"
            style={{ justifyContent: 'center', fontSize: '0.75rem' }}
            onClick={() => setOpen(false)}
          >
            Réserver maintenant
          </Link>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div style={{ height: '64px' }} />

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .phone-link span.phone-text { display: none !important; }
          .hamburger { display: block !important; }
        }
        @media (min-width: 901px) {
          .hamburger { display: none !important; }
        }
        @media (min-width: 1024px) {
          .phone-link span.phone-text { display: inline !important; }
        }
      `}</style>
    </>
  )
}
