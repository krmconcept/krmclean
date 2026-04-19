import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Sofa, BedDouble, Grid3X3, ArrowRight, CheckCircle2, Phone, MessageSquare, ChevronRight } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: EASE, delay },
})

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, ease: EASE, delay },
})

const STATS = [
  { num: '15 km', label: 'Rayon d\'intervention' },
  { num: '2–4h', label: 'Temps de séchage' },
  { num: '100%', label: 'Satisfaction client' },
  { num: '48h', label: 'Délai de réservation' },
]

const SERVICES = [
  {
    icon: Sofa,
    title: 'Canapés',
    desc: 'Nettoyage en profondeur de tous types de canapés : tissu, microfibre, velours, cuir. Élimination des taches, odeurs et allergènes.',
    to: '/textile#canape',
  },
  {
    icon: BedDouble,
    title: 'Matelas',
    desc: 'Assainissement complet de votre matelas. Traitement anti-acariens, anti-allergènes et déodorisation en profondeur.',
    to: '/textile#matelas',
  },
  {
    icon: Grid3X3,
    title: 'Tapis',
    desc: 'Lavage à injection-extraction pour tapis et moquettes de toutes dimensions. Couleurs ravivées, fibres restaurées.',
    to: '/textile#tapis',
  },
]

const STEPS = [
  { num: '01', title: 'Pré-traitement', desc: 'Application d\'un détergent professionnel sur les zones traitées. Temps d\'action 5 à 10 minutes.' },
  { num: '02', title: 'Injection', desc: 'Injection d\'eau chaude à haute pression dans les fibres du tissu pour déloger les impuretés.' },
  { num: '03', title: 'Extraction', desc: 'Aspiration simultanée de l\'eau chargée de salissures. 95% de l\'humidité éliminée.' },
  { num: '04', title: 'Séchage', desc: 'Le textile est sec en 2 à 4 heures selon les conditions. Aucune odeur résiduelle.' },
]

const AVANTAGES = [
  'Déplacement inclus dans un rayon de 15 km',
  'Machines professionnelles Kärcher',
  'Intervention chez vous sans déplacer le meuble',
  'Résultat visible et mesurable immédiatement',
  'Produits certifiés, sans traces après séchage',
  'Devis gratuit sur photo WhatsApp',
]

export default function Home() {
  return (
    <>
      <Helmet>
        <title>KRM Clean — Nettoyage textile professionnel à Bruxelles</title>
        <meta name="description" content="Service de nettoyage textile à domicile à Bruxelles : canapés, matelas, tapis. Technologie injection-extraction professionnelle. Devis gratuit." />
        <link rel="canonical" href="https://krmclean.be/" />
        <meta property="og:title" content="KRM Clean — Nettoyage textile professionnel à Bruxelles" />
        <meta property="og:description" content="Canapés, matelas, tapis propres à domicile. Bruxelles & périphérie." />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* ========================
          SECTION 1 — HERO
          ======================== */}
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(https://horizons-cdn.hostinger.com/fc364a02-ba23-45e9-8059-13906bf6f73a/istockphoto-1291113966-612x612-rtimc.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0,
          }}
        />
        {/* Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(8,10,12,0.97) 0%, rgba(8,10,12,0.75) 55%, rgba(8,10,12,0.2) 100%)',
            zIndex: 1,
          }}
        />

        {/* Content */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 2rem',
            width: '100%',
            paddingTop: '4rem',
            paddingBottom: '4rem',
          }}
        >
          <div style={{ maxWidth: '620px' }}>
            <motion.span className="label-tag" {...fadeUp(0)} style={{ display: 'inline-block', marginBottom: '1.5rem' }}>
              Bruxelles &amp; périphérie
            </motion.span>

            <motion.h1
              className="display-heading"
              {...fadeUp(0.1)}
              style={{
                fontSize: 'clamp(3.5rem, 7vw, 7rem)',
                marginBottom: '1.5rem',
              }}
            >
              Nettoyage<br />
              textile{' '}
              <span style={{ color: 'var(--acier)' }}>à domicile.</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              style={{
                fontSize: '1rem',
                color: 'var(--brume)',
                lineHeight: 1.7,
                maxWidth: '420px',
                marginBottom: '2.5rem',
                fontWeight: 300,
              }}
            >
              Canapés, matelas et tapis impeccables grâce à la technologie d'injection-extraction professionnelle. Résultat immédiat, séchage rapide.
            </motion.p>

            <motion.div
              {...fadeUp(0.3)}
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
            >
              <Link to="/reservation" className="btn-primary">
                Réserver maintenant <ChevronRight size={14} />
              </Link>
              <Link to="/tarifs" className="btn-ghost">
                Nos tarifs
              </Link>
            </motion.div>
          </div>

          {/* Vertical decorative line */}
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
            style={{
              position: 'absolute',
              top: '50%',
              right: '10%',
              transform: 'translateY(-50%)',
              width: '2px',
              height: '80px',
              background: 'linear-gradient(to bottom, transparent, var(--acier-mid), transparent)',
              transformOrigin: 'top',
              display: 'none',
            }}
            className="hero-line"
          />
        </div>
        <style>{`.hero-line { @media (min-width: 900px) { display: block !important; } }`}</style>
      </section>

      {/* ========================
          SECTION 2 — STATS
          ======================== */}
      <section
        style={{
          background: 'var(--charbon)',
          borderTop: '1px solid var(--ardoise)',
          borderBottom: '1px solid var(--ardoise)',
          padding: '3rem 2rem',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '0',
          }}
          className="stats-grid"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.num}
              {...inView(i * 0.08)}
              style={{
                padding: '1.5rem 2rem',
                textAlign: 'center',
                borderRight: i < STATS.length - 1 ? '1px solid var(--ardoise)' : 'none',
              }}
            >
              <div
                className="price-num"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginBottom: '0.4rem' }}
              >
                {stat.num}
              </div>
              <div className="label-tag">{stat.label}</div>
            </motion.div>
          ))}
        </div>
        <style>{`
          @media (max-width: 640px) {
            .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
            .stats-grid > div { border-right: none !important; border-bottom: 1px solid var(--ardoise); }
          }
        `}</style>
      </section>

      {/* ========================
          SECTION 3 — SERVICES
          ======================== */}
      <section
        style={{
          padding: '6rem 2rem',
          maxWidth: '1280px',
          margin: '0 auto',
        }}
      >
        <motion.div {...inView()} style={{ marginBottom: '3rem' }}>
          <span className="red-rule" />
          <span className="label-tag" style={{ display: 'block', marginBottom: '0.75rem' }}>Ce que nous nettoyons</span>
          <h2 className="display-heading" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            Nos services<br />textile
          </h2>
        </motion.div>

        {/* Grid — gap via background trick */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1px',
            background: 'var(--ardoise)',
          }}
          className="services-grid"
        >
          {SERVICES.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.title}
                {...inView(i * 0.1)}
                whileHover={{ y: -3 }}
                style={{
                  background: 'var(--noir)',
                  padding: '2.5rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  cursor: 'default',
                }}
              >
                <Icon size={28} color="var(--acier)" strokeWidth={1.5} />
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: '1.3rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.02em',
                    color: 'var(--blanc)',
                  }}
                >
                  {s.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--brume)', lineHeight: 1.7 }}>{s.desc}</p>
                <Link
                  to={s.to}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: '0.75rem',
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 500,
                    letterSpacing: '0.05em',
                    color: 'var(--acier)',
                    marginTop: 'auto',
                    transition: 'gap 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.gap = '0.6rem'}
                  onMouseLeave={e => e.currentTarget.style.gap = '0.35rem'}
                >
                  Découvrir <ArrowRight size={13} />
                </Link>
              </motion.div>
            )
          })}
        </div>
        <style>{`
          @media (max-width: 768px) { .services-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* ========================
          SECTION 4 — PROCÉDÉ
          ======================== */}
      <section
        style={{
          background: 'var(--charbon)',
          borderTop: '1px solid var(--ardoise)',
          borderBottom: '1px solid var(--ardoise)',
          padding: '6rem 2rem',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '40% 1fr',
            gap: '5rem',
            alignItems: 'start',
          }}
          className="procede-grid"
        >
          {/* Left — sticky */}
          <motion.div
            {...inView()}
            style={{ position: 'sticky', top: '5rem' }}
            className="procede-left"
          >
            <span className="red-rule" />
            <span className="label-tag" style={{ display: 'block', marginBottom: '1rem' }}>Notre méthode</span>
            <h2 className="display-heading" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginBottom: '1.5rem' }}>
              Injection–<br />extraction
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--brume)', lineHeight: 1.8, maxWidth: '320px' }}>
              La technique d'injection-extraction est la méthode de référence pour le nettoyage textile professionnel. L'eau chaude sous pression décroche les salissures ; l'aspiration les emporte immédiatement.
            </p>
            <Link
              to="/procede"
              className="btn-ghost"
              style={{ marginTop: '2rem', display: 'inline-flex', fontSize: '0.7rem' }}
            >
              En savoir plus
            </Link>
          </motion.div>

          {/* Right — steps */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0', position: 'relative' }}>
            {/* Vertical line */}
            <div
              style={{
                position: 'absolute',
                left: '1.5rem',
                top: '2rem',
                bottom: '2rem',
                width: '1px',
                background: 'var(--ardoise)',
                zIndex: 0,
              }}
            />
            {STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                {...inView(i * 0.1)}
                style={{
                  position: 'relative',
                  padding: '2rem 2rem 2rem 4rem',
                  borderBottom: i < STEPS.length - 1 ? '1px solid var(--ardoise)' : 'none',
                }}
              >
                <div
                  className="price-num"
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    fontSize: '4rem',
                    opacity: 0.12,
                    lineHeight: 1,
                    color: 'var(--acier-mid)',
                    userSelect: 'none',
                  }}
                >
                  {step.num}
                </div>
                <h4
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    color: 'var(--blanc)',
                    marginBottom: '0.5rem',
                  }}
                >
                  {step.title}
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--brume)', lineHeight: 1.7 }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .procede-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
            .procede-left { position: static !important; }
          }
        `}</style>
      </section>

      {/* ========================
          SECTION 5 — POURQUOI NOUS
          ======================== */}
      <section style={{ padding: '6rem 2rem' }}>
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '5rem',
            alignItems: 'center',
          }}
          className="why-grid"
        >
          <motion.div {...inView()}>
            <span className="red-rule" />
            <span className="label-tag" style={{ display: 'block', marginBottom: '0.75rem' }}>Pourquoi KRM Clean</span>
            <h2 className="display-heading" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>
              Un résultat<br />professionnel<br />chez vous.
            </h2>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {AVANTAGES.map((item, i) => (
              <motion.div
                key={i}
                {...inView(i * 0.06)}
                whileHover={{ x: 4 }}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.85rem',
                  padding: '1.1rem 1rem',
                  borderBottom: '1px solid var(--ardoise)',
                  cursor: 'default',
                  transition: 'background 0.2s',
                }}
                onHoverStart={e => {}}
              >
                <CheckCircle2
                  size={16}
                  color="var(--acier-mid)"
                  strokeWidth={1.5}
                  style={{ marginTop: '0.15rem', flexShrink: 0 }}
                />
                <span style={{ fontSize: '0.9rem', color: 'var(--creme)' }}>{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) { .why-grid { grid-template-columns: 1fr !important; gap: 2rem !important; } }
        `}</style>
      </section>

      {/* ========================
          SECTION 6 — CTA FINAL
          ======================== */}
      <section style={{ padding: '2rem 2rem 6rem' }}>
        <motion.div
          {...inView()}
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            background: 'var(--zinc)',
            border: '1px solid var(--ardoise)',
            borderLeft: '3px solid var(--acier)',
            padding: '4rem 3rem',
            textAlign: 'center',
          }}
        >
          <span className="label-tag" style={{ display: 'block', marginBottom: '1rem' }}>Passez à l'action</span>
          <h2
            className="display-heading"
            style={{ fontSize: 'clamp(2rem, 4vw, 4rem)', marginBottom: '1rem' }}
          >
            Prêt pour un<br />intérieur sain ?
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--brume)', marginBottom: '2.5rem', maxWidth: '480px', margin: '0 auto 2.5rem' }}>
            Contactez-nous maintenant. Devis gratuit sur photo, intervention sous 48h.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="tel:+32483440669"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'var(--acier-prof)',
                border: '1px solid var(--acier-mid)',
                color: 'var(--acier)',
                padding: '0.9rem 1.75rem',
                fontSize: '0.75rem',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                transition: 'background 0.25s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#1a2e40'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--acier-prof)'}
            >
              <Phone size={14} />
              +32 483 44 06 69
            </a>
            <a
              href="https://wa.me/32483440669"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(37,211,102,0.08)',
                border: '1px solid rgba(37,211,102,0.4)',
                color: '#25d366',
                padding: '0.9rem 1.75rem',
                fontSize: '0.75rem',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                transition: 'background 0.25s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(37,211,102,0.15)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(37,211,102,0.08)'}
            >
              <MessageSquare size={14} />
              WhatsApp
            </a>
          </div>
        </motion.div>
      </section>
    </>
  )
}
