import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Droplets, Wind, Flame } from 'lucide-react'
import { Link } from 'react-router-dom'

const EASE = [0.22, 1, 0.36, 1]
const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, ease: EASE, delay },
})

const STEPS = [
  {
    num: '01',
    title: 'Diagnostic & Pré-traitement',
    desc: 'Nous évaluons le type de tissu, identifions les taches et zones à traiter. Un détergent professionnel adapté est appliqué et laissé agir 5 à 10 minutes pour décomposer les salissures incrustées.',
    side: 'left',
  },
  {
    num: '02',
    title: 'Injection eau chaude',
    desc: 'Notre machine Kärcher professionnel injecte de l\'eau chaude sous pression contrôlée dans les fibres du tissu. La chaleur et la pression délogent les particules de saleté jusqu\'en profondeur.',
    side: 'right',
  },
  {
    num: '03',
    title: 'Extraction simultanée',
    desc: 'Simultanément à l\'injection, le système aspire l\'eau chargée de salissures. Cette double action — injection + aspiration — élimine 95% de l\'humidité en temps réel, évitant l\'engorgement des fibres.',
    side: 'left',
  },
  {
    num: '04',
    title: 'Finitions & contrôle',
    desc: 'Passage final pour homogénéiser le résultat, brossage des fibres et vérification visuelle. Chaque zone traitée est contrôlée avant de quitter votre domicile.',
    side: 'right',
  },
  {
    num: '05',
    title: 'Séchage rapide',
    desc: 'Grâce au taux d\'extraction élevé, vos textiles sont complètement secs en 2 à 4 heures selon les conditions (type de tissu, épaisseur, ventilation). Aucune odeur résiduelle.',
    side: 'left',
  },
]

const MACHINES = [
  {
    icon: Droplets,
    title: 'Module Injection',
    desc: 'Pompe haute pression Kärcher. Eau chaude à 60°C pour une action détachante maximale sans abîmer les fibres.',
  },
  {
    icon: Wind,
    title: 'Module Extraction',
    desc: 'Turbine d\'aspiration professionnelle. Récupère 95% de l\'eau injectée pour un séchage ultra-rapide.',
  },
  {
    icon: Flame,
    title: 'Vapeur optionnelle',
    desc: 'Disponible en complément pour les taches particulièrement tenaces ou les traitements anti-acariens renforcés.',
  },
]

export default function Procede() {
  return (
    <>
      <Helmet>
        <title>Notre Procédé d'Injection-Extraction | KRM Clean Bruxelles</title>
        <meta name="description" content="Découvrez le procédé d'injection-extraction professionnelle utilisé par KRM Clean pour le nettoyage de canapés, matelas et tapis à Bruxelles." />
        <link rel="canonical" href="https://krmclean.be/procede" />
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
            Technologie professionnelle
          </motion.span>
          <motion.h1
            className="display-heading"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: EASE, delay: 0.1 }}
            style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', marginBottom: '1.5rem' }}
          >
            Notre procédé<br />
            <span style={{ color: 'var(--acier)' }}>d'injection-extraction</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: EASE, delay: 0.2 }}
            style={{ fontSize: '0.95rem', color: 'var(--brume)', maxWidth: '520px', lineHeight: 1.7 }}
          >
            La technique d'injection-extraction est la méthode de référence dans le nettoyage textile professionnel. Elle combine action chimique, chaleur et aspiration pour des résultats impossibles à obtenir avec un simple nettoyage en surface.
          </motion.p>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: '6rem 2rem', borderBottom: '1px solid var(--ardoise)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative' }}>
          {/* Central line */}
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '1px',
              background: 'var(--ardoise)',
              transform: 'translateX(-50%)',
              zIndex: 0,
            }}
            className="timeline-line"
          />

          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              {...inView(i * 0.1)}
              style={{
                display: 'flex',
                justifyContent: step.side === 'left' ? 'flex-start' : 'flex-end',
                marginBottom: '3rem',
                position: 'relative',
                zIndex: 1,
              }}
              className="timeline-step"
            >
              <div
                className="card-zinc"
                style={{
                  width: '44%',
                  borderLeft: step.side === 'left' ? '2px solid var(--acier-mid)' : '1px solid var(--ardoise)',
                  borderRight: step.side === 'right' ? '2px solid var(--acier-mid)' : '1px solid var(--ardoise)',
                  position: 'relative',
                }}
                className="timeline-card"
              >
                <div
                  className="price-num"
                  style={{
                    fontSize: '3.5rem',
                    lineHeight: 1,
                    color: 'var(--acier-mid)',
                    opacity: 0.18,
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    userSelect: 'none',
                  }}
                >
                  {step.num}
                </div>
                <h3 style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: '1.2rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  color: 'var(--blanc)',
                  marginBottom: '0.75rem',
                }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--brume)', lineHeight: 1.7 }}>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <style>{`
          @media (max-width: 640px) {
            .timeline-line { display: none !important; }
            .timeline-step { justify-content: flex-start !important; }
            .timeline-card { width: 100% !important; border-left: 2px solid var(--acier-mid) !important; border-right: 1px solid var(--ardoise) !important; }
          }
        `}</style>
      </section>

      {/* Matériel */}
      <section style={{ padding: '6rem 2rem', background: 'var(--charbon)', borderBottom: '1px solid var(--ardoise)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <motion.div {...inView()} style={{ marginBottom: '3rem' }}>
            <span className="red-rule" />
            <span className="label-tag" style={{ display: 'block', marginBottom: '0.75rem' }}>Notre équipement</span>
            <h2 className="display-heading" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>
              Machines Kärcher<br />professionnelles
            </h2>
          </motion.div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1px',
              background: 'var(--ardoise)',
            }}
            className="machines-grid"
          >
            {MACHINES.map((m, i) => {
              const Icon = m.icon
              return (
                <motion.div
                  key={m.title}
                  {...inView(i * 0.1)}
                  style={{
                    background: 'var(--zinc)',
                    padding: '2.5rem 2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                  }}
                >
                  <Icon size={28} color="var(--acier)" strokeWidth={1.5} />
                  <h4 style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: '1.2rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.03em',
                    color: 'var(--blanc)',
                  }}>
                    {m.title}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--brume)', lineHeight: 1.7 }}>{m.desc}</p>
                </motion.div>
              )
            })}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/reservation" className="btn-primary">
              Réserver maintenant
            </Link>
          </div>
        </div>
        <style>{`.machines-grid { @media (max-width: 640px) { grid-template-columns: 1fr !important; } }`}</style>
      </section>
    </>
  )
}
