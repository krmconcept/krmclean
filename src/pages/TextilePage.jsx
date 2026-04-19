import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { CheckCircle2, ChevronRight, Shield, Wind, Sparkles, Star } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1]
const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, ease: EASE, delay },
})

const SERVICES = [
  {
    id: 'canape',
    label: 'Service #01',
    title: 'Canapés',
    subtitle: 'Tissu · Microfibre · Velours · Cuir',
    desc: 'Notre service de nettoyage de canapés élimine les taches tenaces, les odeurs et les allergènes accumulés dans les fibres. La technologie injection-extraction agit en profondeur sans endommager les matières.',
    benefits: [
      'Élimination des taches même anciennes',
      'Traitement anti-acariens et anti-bactérien',
      'Déodorisation profonde',
      'Compatible tous types de tissu',
      'Résultat visible immédiatement',
    ],
    tarifs: [
      { type: '2 places', prix: '45 €' },
      { type: '3 places', prix: '60 €' },
      { type: '4 places', prix: '75 €' },
      { type: 'Canapé d\'angle', prix: '80–100 €' },
      { type: 'Fauteuil', prix: '30 €' },
    ],
  },
  {
    id: 'matelas',
    label: 'Service #02',
    title: 'Matelas',
    subtitle: '1 place · 2 places · Queen · King',
    desc: 'Votre matelas accueille des millions d\'acariens sans que vous le sachiez. Notre traitement injection-extraction assainit en profondeur et restaure l\'hygiène de votre literie pour un sommeil sain.',
    benefits: [
      'Élimination 99% des acariens',
      'Traitement anti-allergènes certifié',
      'Déodorisation et assainissement complets',
      'Séchage en 3–5 heures',
      'Recommandé tous les 6–12 mois',
    ],
    tarifs: [
      { type: '1 place (90×200)', prix: '40 €' },
      { type: '2 places (140×200)', prix: '55 €' },
      { type: 'Queen (160×200)', prix: '60 €' },
      { type: 'King (180×200)', prix: '70 €' },
    ],
  },
  {
    id: 'tapis',
    label: 'Service #03',
    title: 'Tapis',
    subtitle: 'Toutes dimensions · Toutes matières',
    desc: 'Tapis orientaux, synthétiques, de salon ou d\'entrée — notre méthode injection-extraction restitue les couleurs d\'origine, extrait les salissures enfouies et élimine les odeurs sans résidu.',
    benefits: [
      'Couleurs ravivées et fibres restaurées',
      'Nettoyage en profondeur sur place',
      'Compatible laine, synthétique, coton',
      'Anti-taches préventif disponible',
      'Grande surface : tarif dégressif',
    ],
    tarifs: [
      { type: 'Jusqu\'à 4 m²', prix: '30 €' },
      { type: '4–8 m²', prix: '40–55 €' },
      { type: '8–15 m²', prix: '60–80 €' },
      { type: 'Sur mesure > 15 m²', prix: 'Devis' },
    ],
  },
]

const GARANTIES = [
  { icon: Shield, title: 'Satisfaction garantie', desc: 'Résultat non satisfaisant ? Nous revenons sans frais supplémentaires.' },
  { icon: Wind, title: 'Séchage rapide', desc: 'Vos textiles sont secs en 2 à 4 heures. Pas de journée bloquée.' },
  { icon: Sparkles, title: 'Produits certifiés', desc: 'Détergents professionnels sans solvants. Aucune trace après séchage.' },
  { icon: Star, title: 'Machines pro Kärcher', desc: 'Équipement professionnel de haute pression pour des résultats supérieurs.' },
]

export default function TextilePage() {
  return (
    <>
      <Helmet>
        <title>Nettoyage Textile à Bruxelles — Canapés, Matelas, Tapis | KRM Clean</title>
        <meta name="description" content="Nettoyage professionnel de canapés, matelas et tapis à domicile à Bruxelles. Technologie injection-extraction. Tarifs transparents, déplacement inclus." />
        <link rel="canonical" href="https://krmclean.be/textile" />
      </Helmet>

      {/* Hero */}
      <section
        style={{
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(to right, var(--noir) 60%, var(--charbon) 100%)',
          borderBottom: '1px solid var(--ardoise)',
          padding: '4rem 2rem',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%' }}>
          <motion.span
            className="label-tag"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            style={{ display: 'block', marginBottom: '1rem' }}
          >
            Canapés · Matelas · Tapis
          </motion.span>
          <motion.h1
            className="display-heading"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: EASE, delay: 0.1 }}
            style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', marginBottom: '1.5rem' }}
          >
            Services Nettoyage<br />
            <span style={{ color: 'var(--acier)' }}>Textile</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: EASE, delay: 0.2 }}
            style={{ fontSize: '0.95rem', color: 'var(--brume)', maxWidth: '480px', lineHeight: 1.7 }}
          >
            Retrouvez des textiles sains et propres grâce à notre technologie d'injection-extraction professionnelle, directement chez vous à Bruxelles.
          </motion.p>
        </div>
      </section>

      {/* Services sections */}
      {SERVICES.map((service, idx) => (
        <section
          key={service.id}
          id={service.id}
          style={{
            padding: '6rem 2rem',
            background: idx % 2 === 1 ? 'var(--charbon)' : 'var(--noir)',
            borderBottom: '1px solid var(--ardoise)',
          }}
        >
          <div
            style={{
              maxWidth: '1280px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '4rem',
              alignItems: 'start',
            }}
            className="service-grid"
          >
            {/* Content */}
            <motion.div {...inView()}>
              <span className="label-tag" style={{ display: 'block', marginBottom: '0.75rem' }}>{service.label}</span>
              <span className="red-rule" />
              <h2 className="display-heading" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '0.5rem' }}>
                {service.title}
              </h2>
              <p style={{ fontSize: '0.75rem', color: 'var(--acier-mid)', marginBottom: '1.5rem', fontFamily: "'DM Sans', sans-serif" }}>
                {service.subtitle}
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--brume)', lineHeight: 1.8, marginBottom: '2rem' }}>
                {service.desc}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2rem' }}>
                {service.benefits.map(b => (
                  <div key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.7rem' }}>
                    <CheckCircle2 size={14} color="var(--acier-mid)" strokeWidth={1.5} style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.85rem', color: 'var(--creme)' }}>{b}</span>
                  </div>
                ))}
              </div>
              <Link to="/reservation" className="btn-primary" style={{ display: 'inline-flex' }}>
                Réserver ce service <ChevronRight size={14} />
              </Link>
            </motion.div>

            {/* Tarifs */}
            <motion.div {...inView(0.15)}>
              <div
                style={{
                  border: '1px solid var(--ardoise)',
                  borderTop: '2px solid var(--acier-mid)',
                  background: 'var(--zinc)',
                }}
              >
                <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--ardoise)' }}>
                  <span className="label-tag">Tarifs {service.title}</span>
                </div>
                {service.tarifs.map((t, i) => (
                  <div
                    key={t.type}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '1rem 1.5rem',
                      borderBottom: i < service.tarifs.length - 1 ? '1px solid var(--ardoise)' : 'none',
                      background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.015)',
                    }}
                  >
                    <span style={{ fontSize: '0.85rem', color: 'var(--creme)', fontWeight: 300 }}>{t.type}</span>
                    <span className="price-num" style={{ fontSize: '1.1rem' }}>{t.prix}</span>
                  </div>
                ))}
                <div style={{ padding: '1rem 1.5rem', borderTop: '1px solid var(--ardoise)' }}>
                  <p style={{ fontSize: '0.72rem', color: 'var(--brume)', fontStyle: 'italic' }}>
                    Déplacement inclus dans un rayon de 15 km de Bruxelles.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Garanties */}
      <section style={{ padding: '6rem 2rem', background: 'var(--charbon)', borderBottom: '1px solid var(--ardoise)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <motion.div {...inView()} style={{ marginBottom: '3rem' }}>
            <span className="red-rule" />
            <h2 className="display-heading" style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)' }}>
              Nos garanties
            </h2>
          </motion.div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1px',
              background: 'var(--ardoise)',
            }}
            className="garanties-grid"
          >
            {GARANTIES.map((g, i) => {
              const Icon = g.icon
              return (
                <motion.div
                  key={g.title}
                  {...inView(i * 0.08)}
                  className="card-zinc"
                  style={{
                    background: 'var(--noir)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    borderRadius: 0,
                    border: 'none',
                    padding: '2rem',
                  }}
                >
                  <Icon size={24} color="var(--acier)" strokeWidth={1.5} />
                  <h4 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.03em', color: 'var(--blanc)' }}>
                    {g.title}
                  </h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--brume)', lineHeight: 1.7 }}>{g.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .service-grid { grid-template-columns: 1fr !important; }
            .garanties-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 480px) {
            .garanties-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </>
  )
}
