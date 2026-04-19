import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { CheckCircle2, ChevronRight, Car, Armchair, Layers } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1]
const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, ease: EASE, delay },
})

const SERVICES = [
  {
    icon: Armchair,
    title: 'Sièges & sellerie',
    desc: 'Nettoyage des sièges tissu ou cuir par injection-extraction. Élimination des taches de café, de graisse, et des odeurs de tabac.',
  },
  {
    icon: Layers,
    title: 'Moquettes & tapis de sol',
    desc: 'Extraction en profondeur des moquettes et tapis de sol. Fibres restaurées, odeurs éliminées.',
  },
  {
    icon: Car,
    title: 'Habitacle complet',
    desc: 'Nettoyage intégral de l\'habitacle : tableau de bord, plastiques, vitres, moquettes et sièges.',
  },
]

const TARIFS = [
  { type: 'Citadine (3/5 portes)', prix: '80 €' },
  { type: 'Berline / Break', prix: '90 €' },
  { type: 'SUV / Monospace', prix: '100–120 €' },
  { type: 'Van / Utilitaire', prix: 'Devis' },
  { type: 'Sièges seuls (2 places)', prix: '40 €' },
  { type: 'Moquette seule', prix: '30 €' },
]

export default function AutoPage() {
  return (
    <>
      <Helmet>
        <title>Nettoyage Intérieur Auto à Bruxelles | KRM Clean</title>
        <meta name="description" content="Nettoyage intérieur voiture à domicile à Bruxelles : sièges, moquettes, habitacle. Technologie professionnelle injection-extraction." />
        <link rel="canonical" href="https://krmclean.be/auto" />
      </Helmet>

      {/* Hero */}
      <section
        style={{
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          borderBottom: '1px solid var(--ardoise)',
          padding: '4rem 2rem',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(https://images.unsplash.com/photo-1691054095499-0b117fac9290?auto=format&fit=crop&w=1600&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(8,10,12,0.97) 0%, rgba(8,10,12,0.8) 60%, rgba(8,10,12,0.3) 100%)',
            zIndex: 1,
          }}
        />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1280px', margin: '0 auto', width: '100%' }}>
          <motion.span
            className="label-tag"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            style={{ display: 'block', marginBottom: '1rem' }}
          >
            Nettoyage Automobile
          </motion.span>
          <motion.h1
            className="display-heading"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: EASE, delay: 0.1 }}
            style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', marginBottom: '1.5rem' }}
          >
            Intérieur auto<br />
            <span style={{ color: 'var(--acier)' }}>comme neuf.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: EASE, delay: 0.2 }}
            style={{ fontSize: '0.95rem', color: 'var(--brume)', maxWidth: '460px', lineHeight: 1.7 }}
          >
            Sièges, moquettes, habitacle complet — nous intervenons directement là où vous êtes stationné. Résultat professionnel, sans déplacer votre véhicule.
          </motion.p>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: '6rem 2rem', borderBottom: '1px solid var(--ardoise)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <motion.div {...inView()} style={{ marginBottom: '3rem' }}>
            <span className="red-rule" />
            <span className="label-tag" style={{ display: 'block', marginBottom: '0.75rem' }}>Ce que nous nettoyons</span>
            <h2 className="display-heading" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>Services auto</h2>
          </motion.div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1px',
              background: 'var(--ardoise)',
            }}
            className="auto-services-grid"
          >
            {SERVICES.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.div
                  key={s.title}
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
                  <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '1.3rem', textTransform: 'uppercase', letterSpacing: '0.02em', color: 'var(--blanc)' }}>
                    {s.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--brume)', lineHeight: 1.7 }}>{s.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
        <style>{`.auto-services-grid { @media (max-width: 768px) { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* Tarifs + CTA */}
      <section style={{ padding: '6rem 2rem', background: 'var(--charbon)', borderBottom: '1px solid var(--ardoise)' }}>
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'start',
          }}
          className="auto-tarif-grid"
        >
          <motion.div {...inView()}>
            <span className="red-rule" />
            <h2 className="display-heading" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginBottom: '1.5rem' }}>
              Tarifs auto
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--brume)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Tarifs indicatifs pour une intervention complète à domicile. Déplacement inclus dans un rayon de 15 km. Demandez un devis gratuit par WhatsApp en envoyant une photo de votre véhicule.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2rem' }}>
              {['Intervention à domicile ou parking', 'Machines professionnelles Kärcher', 'Résultat sec en 2–4 heures', 'Devis gratuit sur photo WhatsApp'].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.7rem' }}>
                  <CheckCircle2 size={14} color="var(--acier-mid)" strokeWidth={1.5} style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.85rem', color: 'var(--creme)' }}>{item}</span>
                </div>
              ))}
            </div>
            <Link to="/reservation" className="btn-primary">
              Demander un devis <ChevronRight size={14} />
            </Link>
          </motion.div>

          <motion.div {...inView(0.15)}>
            <div style={{ border: '1px solid var(--ardoise)', borderTop: '2px solid var(--acier-mid)', background: 'var(--zinc)' }}>
              <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--ardoise)' }}>
                <span className="label-tag">Grille tarifaire</span>
              </div>
              {TARIFS.map((t, i) => (
                <div
                  key={t.type}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1rem 1.5rem',
                    borderBottom: i < TARIFS.length - 1 ? '1px solid var(--ardoise)' : 'none',
                    background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.015)',
                  }}
                >
                  <span style={{ fontSize: '0.85rem', color: 'var(--creme)', fontWeight: 300 }}>{t.type}</span>
                  <span className="price-num" style={{ fontSize: '1.1rem' }}>{t.prix}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <style>{`.auto-tarif-grid { @media (max-width: 768px) { grid-template-columns: 1fr !important; } }`}</style>
      </section>
    </>
  )
}
