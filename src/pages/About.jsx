import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Heart, Shield, Zap, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

const EASE = [0.22, 1, 0.36, 1]
const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, ease: EASE, delay },
})

const VALEURS = [
  { icon: Shield, title: 'Transparence', desc: 'Tarifs affichés, sans surprise. Le devis est ferme avant toute intervention.' },
  { icon: Zap, title: 'Efficacité', desc: 'Intervention rapide, résultat immédiat. Nous ne partons pas tant que vous n\'êtes pas satisfait.' },
  { icon: Heart, title: 'Proximité', desc: 'Service de quartier à l\'échelle de Bruxelles. Nous connaissons nos clients et nos quartiers.' },
  { icon: Users, title: 'Confiance', desc: 'Pas d\'acompte. Paiement après intervention. Votre satisfaction d\'abord, toujours.' },
]

export default function About() {
  return (
    <>
      <Helmet>
        <title>À Propos de KRM Clean | Service de Nettoyage Bruxelles</title>
        <meta name="description" content="KRM Clean : service de nettoyage textile professionnel à domicile à Bruxelles. Notre histoire, nos valeurs, notre engagement qualité." />
        <link rel="canonical" href="https://krmclean.be/a-propos" />
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
            Notre histoire
          </motion.span>
          <motion.h1
            className="display-heading"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: EASE, delay: 0.1 }}
            style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
          >
            À propos<br />
            <span style={{ color: 'var(--acier)' }}>de KRM Clean</span>
          </motion.h1>
        </div>
      </section>

      {/* Mission */}
      <section style={{ padding: '6rem 2rem', borderBottom: '1px solid var(--ardoise)' }}>
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            position: 'relative',
          }}
        >
          {/* Décoratif — KRM en grand */}
          <div
            style={{
              position: 'absolute',
              top: '-2rem',
              left: '-2rem',
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(8rem, 20vw, 18rem)',
              textTransform: 'uppercase',
              color: 'var(--blanc)',
              opacity: 0.025,
              lineHeight: 1,
              userSelect: 'none',
              pointerEvents: 'none',
              letterSpacing: '-0.02em',
            }}
          >
            KRM
          </div>

          <div
            style={{
              position: 'relative',
              zIndex: 1,
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '5rem',
              alignItems: 'center',
            }}
            className="about-grid"
          >
            <motion.div {...inView()}>
              <span className="red-rule" />
              <h2 className="display-heading" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginBottom: '2rem' }}>
                Notre mission
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <p style={{ fontSize: '0.95rem', color: 'var(--creme)', lineHeight: 1.8 }}>
                  KRM Clean est né d'un constat simple : les Bruxellois n'ont pas facilement accès à un service de nettoyage textile de qualité professionnelle à domicile. Soit trop cher, soit trop loin, soit de qualité insuffisante.
                </p>
                <p style={{ fontSize: '0.9rem', color: 'var(--brume)', lineHeight: 1.8 }}>
                  Nous avons investi dans des machines professionnelles Kärcher et développé un savoir-faire technique pour proposer le même niveau de résultat qu'un pressing professionnel — mais directement chez vous, sans déplacement de vos meubles.
                </p>
                <p style={{ fontSize: '0.9rem', color: 'var(--brume)', lineHeight: 1.8 }}>
                  Notre zone d'intervention couvre Bruxelles et les communes de la périphérie dans un rayon de 15 km. Nous gérons les réservations rapidement et répondons à chaque demande de devis en moins d'une heure.
                </p>
              </div>
            </motion.div>

            <motion.div {...inView(0.15)}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--ardoise)' }}>
                {[
                  { num: 'Bruxelles', label: 'Zone d\'intervention' },
                  { num: '15 km', label: 'Rayon d\'intervention' },
                  { num: '48h', label: 'Délai moyen de réponse' },
                  { num: '100%', label: 'Clients satisfaits' },
                ].map((stat, i) => (
                  <div
                    key={stat.label}
                    style={{
                      background: 'var(--zinc)',
                      padding: '1.75rem 2rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <span className="label-tag">{stat.label}</span>
                    <span className="price-num" style={{ fontSize: '2rem' }}>{stat.num}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          <style>{`.about-grid { @media (max-width: 768px) { grid-template-columns: 1fr !important; gap: 3rem !important; } }`}</style>
        </div>
      </section>

      {/* Valeurs */}
      <section style={{ padding: '6rem 2rem', background: 'var(--charbon)', borderBottom: '1px solid var(--ardoise)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <motion.div {...inView()} style={{ marginBottom: '3rem' }}>
            <span className="red-rule" />
            <span className="label-tag" style={{ display: 'block', marginBottom: '0.75rem' }}>Ce qui nous guide</span>
            <h2 className="display-heading" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>
              Nos valeurs
            </h2>
          </motion.div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1px',
              background: 'var(--ardoise)',
            }}
            className="valeurs-grid"
          >
            {VALEURS.map((v, i) => {
              const Icon = v.icon
              return (
                <motion.div
                  key={v.title}
                  {...inView(i * 0.1)}
                  style={{
                    background: 'var(--zinc)',
                    padding: '2.5rem 2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                  }}
                >
                  <Icon size={24} color="var(--acier)" strokeWidth={1.5} />
                  <h4 style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: '1.2rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    color: 'var(--blanc)',
                  }}>
                    {v.title}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--brume)', lineHeight: 1.7 }}>{v.desc}</p>
                </motion.div>
              )
            })}
          </div>
          <style>{`
            @media (max-width: 900px) { .valeurs-grid { grid-template-columns: repeat(2, 1fr) !important; } }
            @media (max-width: 480px) { .valeurs-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </div>
      </section>

      {/* Closing statement */}
      <section style={{ padding: '5rem 2rem' }}>
        <motion.div
          {...inView()}
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <span className="red-rule" style={{ margin: '0 auto 2rem' }} />
          <p
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontStyle: 'italic',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              color: 'var(--acier)',
              lineHeight: 1.3,
              letterSpacing: '0.01em',
              marginBottom: '2.5rem',
            }}
          >
            "Service de proximité. Résultat professionnel."
          </p>
          <Link to="/reservation" className="btn-primary">
            Réserver une intervention
          </Link>
        </motion.div>
      </section>
    </>
  )
}
