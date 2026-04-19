import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Phone, MessageSquare, Clock, CheckCircle2, Camera } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1]
const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, ease: EASE, delay },
})

const AVANTAGES = [
  'Réponse sous 30 minutes pendant les heures ouvrées',
  'Devis gratuit sur simple photo WhatsApp',
  'Aucun acompte requis à la réservation',
  'Paiement sur place après intervention',
  'Annulation gratuite jusqu\'à 24h avant',
  'Déplacement inclus dans un rayon de 15 km',
]

const HORAIRES = [
  { jour: 'Lundi – Vendredi', heures: '08h00 – 19h00' },
  { jour: 'Samedi', heures: '09h00 – 17h00' },
  { jour: 'Dimanche', heures: 'Sur demande' },
]

export default function Reservation() {
  return (
    <>
      <Helmet>
        <title>Réserver un Nettoyage Textile à Bruxelles | KRM Clean</title>
        <meta name="description" content="Réservez votre intervention nettoyage canapé, matelas ou tapis à domicile. Réponse rapide, devis gratuit sur photo." />
        <link rel="canonical" href="https://krmclean.be/reservation" />
      </Helmet>

      {/* Hero */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--ardoise)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <motion.span
            className="label-tag"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            style={{ display: 'block', marginBottom: '1rem' }}
          >
            Prise de contact
          </motion.span>
          <motion.h1
            className="display-heading"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: EASE, delay: 0.1 }}
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '1rem' }}
          >
            Réservez en<br />
            <span style={{ color: 'var(--acier)' }}>60 secondes</span>
          </motion.h1>
        </div>
      </section>

      {/* Layout 2 colonnes */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--ardoise)' }}>
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '5rem',
            alignItems: 'start',
          }}
          className="resa-grid"
        >
          {/* Gauche */}
          <motion.div {...inView()}>
            <p style={{ fontSize: '1rem', color: 'var(--brume)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              Pas de formulaire compliqué. Contactez-nous directement par téléphone ou WhatsApp. Envoyez une photo de ce que vous souhaitez faire nettoyer — nous vous répondons avec un devis précis et une date d'intervention.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '3rem' }}>
              {AVANTAGES.map((a, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.7rem' }}>
                  <CheckCircle2 size={14} color="var(--acier-mid)" strokeWidth={1.5} style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.85rem', color: 'var(--creme)' }}>{a}</span>
                </div>
              ))}
            </div>

            <div>
              <p className="label-tag" style={{ marginBottom: '1rem' }}>Horaires d'intervention</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {HORAIRES.map((h, i) => (
                  <div
                    key={h.jour}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '0.8rem 0',
                      borderBottom: i < HORAIRES.length - 1 ? '1px solid var(--ardoise)' : 'none',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Clock size={13} color="var(--brume)" />
                      <span style={{ fontSize: '0.82rem', color: 'var(--creme)' }}>{h.jour}</span>
                    </div>
                    <span className="price-num" style={{ fontSize: '0.85rem', color: 'var(--acier)' }}>{h.heures}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Droite — canaux de contact */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Téléphone */}
            <motion.div {...inView(0.1)}>
              <div
                className="card-zinc"
                style={{
                  borderTop: '2px solid var(--acier)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Phone size={20} color="var(--acier)" strokeWidth={1.5} />
                  <span style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--blanc)',
                  }}>
                    Téléphone
                  </span>
                </div>
                <a
                  href="tel:+32483440669"
                  className="price-num"
                  style={{ fontSize: '1.8rem', letterSpacing: '0.02em', whiteSpace: 'nowrap' }}
                >
                  +32 483 44 06 69
                </a>
                <p style={{ fontSize: '0.8rem', color: 'var(--brume)', lineHeight: 1.6 }}>
                  Appelez directement pour un rendez-vous. Disponible aux heures indiquées.
                </p>
                <a href="tel:+32483440669" className="btn-primary" style={{ display: 'inline-flex', gap: '0.5rem', fontSize: '0.7rem' }}>
                  <Phone size={13} />
                  Appeler maintenant
                </a>
              </div>
            </motion.div>

            {/* WhatsApp */}
            <motion.div {...inView(0.2)}>
              <div
                style={{
                  background: 'var(--zinc)',
                  border: '1px solid var(--ardoise)',
                  borderTop: '2px solid #25d366',
                  borderRadius: '2px',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <MessageSquare size={20} color="#25d366" strokeWidth={1.5} />
                  <span style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--blanc)',
                  }}>
                    WhatsApp
                  </span>
                </div>
                <a
                  href="https://wa.me/32483440669"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="price-num"
                  style={{ fontSize: '1.8rem', letterSpacing: '0.02em', color: '#25d366', whiteSpace: 'nowrap' }}
                >
                  +32 483 44 06 69
                </a>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.6rem',
                    background: 'rgba(37,211,102,0.06)',
                    border: '1px solid rgba(37,211,102,0.2)',
                    borderRadius: '2px',
                    padding: '0.75rem 1rem',
                  }}
                >
                  <Camera size={14} color="#25d366" strokeWidth={1.5} style={{ marginTop: '0.1rem', flexShrink: 0 }} />
                  <p className="label-tag" style={{ color: '#25d366', fontSize: '0.65rem', letterSpacing: '0.12em' }}>
                    Envoyez une photo → devis immédiat
                  </p>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--brume)', lineHeight: 1.6 }}>
                  La méthode la plus rapide. Photographiez votre canapé, matelas ou tapis et recevez un devis en quelques minutes.
                </p>
                <a
                  href="https://wa.me/32483440669"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: '#25d366',
                    color: '#fff',
                    padding: '0.75rem 1.5rem',
                    fontSize: '0.7rem',
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 500,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    transition: 'background 0.2s',
                    borderRadius: 0,
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = '#20b858'}
                  onMouseLeave={e => e.currentTarget.style.background = '#25d366'}
                >
                  <MessageSquare size={13} />
                  Ouvrir WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
        <style>{`.resa-grid { @media (max-width: 768px) { grid-template-columns: 1fr !important; gap: 3rem !important; } }`}</style>
      </section>
    </>
  )
}
