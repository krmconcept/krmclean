import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { MessageSquare, Plus } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1]
const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, ease: EASE, delay },
})

const TABLES = [
  {
    title: 'Canapés',
    rows: [
      { type: 'Siège seul', prix: '39 €' },
      { type: '2 à 3 places', prix: '79 €' },
      { type: '4 à 5 places', prix: '99 €' },
      { type: 'Grand format (angle, XXL)', prix: '129 €' },
    ],
  },
  {
    title: 'Matelas',
    rows: [
      { type: '1 place', prix: '59 €' },
      { type: 'Queen size (140–160 cm)', prix: '79 €' },
      { type: 'King size (180–200 cm)', prix: '99 €' },
    ],
  },
  {
    title: 'Tapis',
    rows: [
      { type: 'Petit (60×90 / 110 cm)', prix: '39 €' },
      { type: 'Moyen (120×170 / 160×230 cm)', prix: '59 €' },
      { type: 'Grand (200×290 / 250×350 cm)', prix: '79 €' },
    ],
  },
]

const SUPPLEMENTS = [
  { label: 'Poils d\'animaux', prix: '+15 €' },
  { label: 'Déplacement hors zone (> 15 km)', prix: '+25 €' },
]

const PACKS = [
  {
    name: 'Pack Salon Propre',
    badge: 'PROMO',
    reduction: '-50%',
    contenuBold: 'Un canapé',
    contenuSuite: 'nettoyé, le reste à',
    contenuAccent: '-50%',
  },
  {
    name: 'Pack Chambre Saine',
    badge: 'PROMO',
    reduction: '-50%',
    contenuBold: 'Un matelas',
    contenuSuite: 'nettoyé, le reste à',
    contenuAccent: '-50%',
  },
]

export default function Tarifs() {
  return (
    <>
      <Helmet>
        <title>Tarifs Nettoyage Textile à Bruxelles | KRM Clean</title>
        <meta name="description" content="Grille tarifaire transparente pour le nettoyage de canapés, matelas et tapis à Bruxelles. Déplacement inclus. Aucun frais caché." />
        <link rel="canonical" href="https://krmclean.be/tarifs" />
      </Helmet>

      {/* Hero */}
      <section
        style={{
          background: 'var(--charbon)',
          borderBottom: '1px solid var(--ardoise)',
          padding: '5rem 2rem',
          textAlign: 'center',
        }}
      >
        <motion.span
          className="label-tag"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          style={{ display: 'block', marginBottom: '1rem' }}
        >
          Tarification
        </motion.span>
        <motion.h1
          className="display-heading"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: EASE, delay: 0.1 }}
          style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', marginBottom: '1.5rem' }}
        >
          Tarifs transparents
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: EASE, delay: 0.2 }}
          style={{ fontSize: '0.95rem', color: 'var(--brume)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}
        >
          Déplacement inclus dans un rayon de 15 km. Zéro frais caché. Les prix ci-dessous sont définitifs — vous savez exactement ce que vous payez.
        </motion.p>
      </section>

      {/* Tables de prix */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--ardoise)' }}>
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
          }}
          className="tarifs-grid"
        >
          {TABLES.map((table, ti) => (
            <motion.div key={table.title} {...inView(ti * 0.1)}>
              <div style={{ border: '1px solid var(--ardoise)', borderTop: '2px solid var(--acier-mid)' }}>
                {/* Table header */}
                <div
                  style={{
                    padding: '1.25rem 1.5rem',
                    borderBottom: '1px solid var(--ardoise)',
                    background: 'var(--zinc)',
                  }}
                >
                  <h3 className="label-tag" style={{ fontSize: '0.7rem' }}>{table.title}</h3>
                </div>
                {/* Rows */}
                {table.rows.map((row, i) => (
                  <div
                    key={row.type}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '0.9rem 1.5rem',
                      borderBottom: i < table.rows.length - 1 ? '1px solid var(--ardoise)' : 'none',
                      background: i % 2 === 0 ? 'transparent' : 'rgba(200,216,232,0.02)',
                    }}
                  >
                    <span style={{ fontSize: '0.82rem', color: 'var(--creme)', fontWeight: 300 }}>{row.type}</span>
                    <span className="price-num" style={{ fontSize: '1.1rem' }}>{row.prix}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <style>{`
          @media (max-width: 900px) { .tarifs-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* Suppléments */}
      <section style={{ padding: '5rem 2rem', background: 'var(--charbon)', borderBottom: '1px solid var(--ardoise)' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <motion.div {...inView()} style={{ marginBottom: '2.5rem' }}>
            <span className="red-rule" />
            <h2 className="display-heading" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>
              Suppléments
            </h2>
          </motion.div>
          <div
            style={{
              borderLeft: '3px solid var(--acier-mid)',
              paddingLeft: '1.5rem',
            }}
          >
            {SUPPLEMENTS.map((s, i) => (
              <motion.div
                key={s.label}
                {...inView(i * 0.06)}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1rem 0',
                  borderBottom: i < SUPPLEMENTS.length - 1 ? '1px solid var(--ardoise)' : 'none',
                  gap: '1rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <Plus size={12} color="var(--acier-mid)" strokeWidth={2} />
                  <span style={{ fontSize: '0.85rem', color: 'var(--creme)' }}>{s.label}</span>
                </div>
                <span className="price-num" style={{ fontSize: '0.95rem', whiteSpace: 'nowrap' }}>{s.prix}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packs */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--ardoise)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <motion.div {...inView()} style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <span className="red-rule" style={{ margin: '0 auto 1rem' }} />
            <span className="label-tag" style={{ display: 'block', marginBottom: '0.75rem' }}>Offres groupées</span>
            <h2 className="display-heading" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>
              Nos packs
            </h2>
          </motion.div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '2rem',
              maxWidth: '800px',
              margin: '0 auto',
            }}
            className="packs-grid"
          >
            {PACKS.map((pack, i) => (
              <motion.div
                key={pack.name}
                {...inView(i * 0.1)}
                className="card-zinc"
                style={{
                  borderTop: '2px solid var(--acier)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <h3 style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: '1.3rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.03em',
                    color: 'var(--blanc)',
                  }}>
                    {pack.name}
                  </h3>
                  <span className="label-tag" style={{ color: 'var(--accent)', letterSpacing: '0.15em' }}>
                    {pack.badge}
                  </span>
                </div>
                <div
                  className="price-num"
                  style={{ fontSize: '4.5rem', lineHeight: 1, color: 'var(--acier)', opacity: 0.85 }}
                >
                  {pack.reduction}
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--creme)', lineHeight: 1.7 }}>
                  <span style={{ color: 'var(--acier)' }}>{pack.contenuBold}</span>
                  {' '}{pack.contenuSuite}{' '}
                  <span style={{ color: 'var(--accent)' }}>{pack.contenuAccent}</span>
                </p>
              </motion.div>
            ))}
          </div>
          <style>{`.packs-grid { @media (max-width: 640px) { grid-template-columns: 1fr !important; } }`}</style>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 2rem', background: 'var(--charbon)' }}>
        <motion.div
          {...inView()}
          style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}
        >
          <h2 className="display-heading" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: '1rem' }}>
            Un doute sur le tarif ?
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--brume)', lineHeight: 1.7, marginBottom: '2rem' }}>
            Envoyez-nous une photo sur WhatsApp — nous vous répondons avec un devis précis en quelques minutes.
          </p>
          <a
            href="https://wa.me/32483440669"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ justifyContent: 'center', gap: '0.6rem' }}
          >
            <MessageSquare size={15} />
            Demander un devis WhatsApp
          </a>
        </motion.div>
      </section>
    </>
  )
}
