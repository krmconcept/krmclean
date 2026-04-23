import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Droplets, Brush, Thermometer, Wind, Star, ShieldCheck, Wrench } from 'lucide-react'
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
    icon: Droplets,
    title: 'Pulvérisation du produit détachant',
    desc: "Application d'un produit alcalin professionnel spécial textile. Il pénètre les fibres pour déloger la saleté et les taches tenaces du canapé ou matelas.",
  },
  {
    num: '02',
    icon: Brush,
    title: 'Brossage mécanique des fibres',
    desc: "Action mécanique pour faire agir le produit en profondeur, désincruster la poussière et détacher les impuretés sans abîmer les tissus.",
  },
  {
    num: '03',
    icon: Thermometer,
    title: 'Traitement vapeur haute température',
    desc: "Injection de vapeur sèche pour une désinfection thermique complète, détruisant 99% des acariens et bactéries.",
  },
  {
    num: '04',
    icon: Wind,
    title: 'Injection-Extraction (Shampouineuse)',
    desc: "Rinçage des fibres et aspiration puissante de l'eau sale via notre machine Kärcher professionnelle. Garantit un séchage rapide.",
  },
  {
    num: '05',
    icon: Star,
    title: 'Désodorisation et parfum',
    desc: "Finition avec un neutralisateur d'odeurs professionnel laissant un parfum frais de propreté dans votre maison.",
  },
]

export default function Procede() {
  return (
    <>
      <Helmet>
        <title>Notre Procédé de Nettoyage en 5 Étapes | KRM Clean Bruxelles</title>
        <meta name="description" content="Découvrez notre technologie de nettoyage en 5 étapes pour un résultat impeccable sur tous vos textiles d'ameublement à Bruxelles." />
        <link rel="canonical" href="https://krmclean.com/procede" />
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
            <span style={{ color: 'var(--acier)' }}>en 5 étapes</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: EASE, delay: 0.2 }}
            style={{ fontSize: '0.95rem', color: 'var(--brume)', maxWidth: '600px', lineHeight: 1.7 }}
          >
            <span style={{ color: '#ee0055', fontWeight: 600 }}>
              Une technologie de nettoyage en 5 étapes pour garantir un résultat impeccable sur tous vos textiles d&apos;ameublement.
            </span>
          </motion.p>
        </div>
      </section>

      {/* 5 Steps */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--ardoise)' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.num}
                {...inView(i * 0.1)}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.25rem',
                  background: 'var(--zinc)',
                  border: '1px solid var(--ardoise)',
                  borderRadius: '0.5rem',
                  padding: '1.5rem',
                }}
              >
                <div style={{
                  flexShrink: 0,
                  width: '52px',
                  height: '52px',
                  borderRadius: '0.5rem',
                  background: 'linear-gradient(135deg, #1a6b8a, #2da0c0)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <Icon size={24} color="#fff" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    color: 'var(--blanc)',
                    marginBottom: '0.5rem',
                  }}>
                    <span style={{ color: 'var(--acier)', marginRight: '0.5rem' }}>{step.num}</span>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--brume)', lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Technologie et Garantie Qualité */}
      <section style={{ padding: '5rem 2rem', background: 'var(--zinc)', borderBottom: '1px solid var(--ardoise)' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <motion.h2
            {...inView()}
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              color: 'var(--blanc)',
              textAlign: 'center',
              marginBottom: '3rem',
            }}
          >
            Technologie et Garantie Qualité
          </motion.h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '2rem',
            }}
            className="guarantee-grid"
          >
            <motion.div {...inView(0.1)}>
              <h3 style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: '1.1rem',
                textTransform: 'uppercase',
                color: 'var(--acier)',
                marginBottom: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}>
                <Wrench size={18} color="var(--acier)" strokeWidth={1.5} />
                Matériel d&apos;Expert (Kärcher)
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--brume)', lineHeight: 1.8 }}>
                Nous investissons dans des machines professionnelles comme le Kärcher Puzzi 8/1 pour l&apos;injection-extraction. Cette puissance d&apos;aspiration garantit l&apos;extraction totale des résidus de saleté et un séchage rapide, évitant les mauvaises odeurs d&apos;humidité.
              </p>
            </motion.div>
            <motion.div {...inView(0.2)}>
              <h3 style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: '1.1rem',
                textTransform: 'uppercase',
                color: 'var(--acier)',
                marginBottom: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}>
                <ShieldCheck size={18} color="var(--acier)" strokeWidth={1.5} />
                Produits Sûrs et Certifiés
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--brume)', lineHeight: 1.8 }}>
                La chimie que nous utilisons est conçue spécifiquement pour l&apos;ameublement. Elle détruit les liaisons protéiniques des taches tout en préservant l&apos;intégrité et la douceur des fibres. Sans danger pour les enfants et les animaux après séchage.
              </p>
            </motion.div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/reservation" className="btn-primary">
              Réserver maintenant
            </Link>
          </div>
        </div>
        <style>{`
          @media (max-width: 640px) {
            .guarantee-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </>
  )
}
