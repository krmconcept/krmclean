import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

const EASE = [0.22, 1, 0.36, 1]

function Section({ title, children }) {
  return (
    <div style={{ borderBottom: '1px solid var(--ardoise)', paddingBottom: '2.5rem', marginBottom: '2.5rem' }}>
      <h2 style={{
        fontFamily: "'Barlow Condensed', sans-serif",
        fontWeight: 700,
        fontSize: '1.3rem',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        color: 'var(--blanc)',
        marginBottom: '1rem',
        borderLeft: '3px solid var(--acier-mid)',
        paddingLeft: '1rem',
      }}>
        {title}
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {children}
      </div>
    </div>
  )
}

function P({ children }) {
  return <p style={{ fontSize: '0.88rem', color: 'var(--brume)', lineHeight: 1.8 }}>{children}</p>
}

export default function PolitiqueCookies() {
  return (
    <>
      <Helmet>
        <title>Politique de Cookies | KRM Clean</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--ardoise)' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <motion.span
            className="label-tag"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            style={{ display: 'block', marginBottom: '1rem' }}
          >
            Utilisation des cookies
          </motion.span>
          <motion.h1
            className="display-heading"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: EASE, delay: 0.1 }}
            style={{ fontSize: 'clamp(2rem, 4vw, 4rem)' }}
          >
            Politique<br />de cookies
          </motion.h1>
        </div>
      </section>

      <section style={{ padding: '4rem 2rem 6rem' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <Section title="Qu'est-ce qu'un cookie ?">
            <P>Un cookie est un petit fichier texte déposé sur votre navigateur lors de la visite d'un site web. Il permet au site de mémoriser des informations sur votre visite (préférences, navigation, etc.).</P>
          </Section>

          <Section title="Cookies utilisés sur ce site">
            <P><strong style={{ color: 'var(--creme)' }}>Cookies fonctionnels (essentiels)</strong></P>
            <P>Ces cookies sont nécessaires au bon fonctionnement du site. Ils incluent notamment :</P>
            <P>• <span style={{ color: 'var(--acier)', fontFamily: 'monospace' }}>krm-cookie-consent</span> : mémorise votre choix concernant les cookies (accepté / refusé). Durée : session.</P>

            <P style={{ marginTop: '0.5rem' }}><strong style={{ color: 'var(--creme)' }}>Cookies analytiques (optionnels)</strong></P>
            <P>Si vous les acceptez, nous utilisons Google Analytics pour mesurer l'audience du site (pages visitées, durée de visite, provenance). Ces données sont anonymisées et ne permettent pas de vous identifier personnellement.</P>
          </Section>

          <Section title="Gérer vos préférences">
            <P>Vous pouvez accepter ou refuser les cookies lors de votre première visite via notre bandeau de consentement. Vous pouvez modifier votre choix à tout moment en supprimant les cookies de votre navigateur.</P>
            <P>Pour supprimer les cookies dans votre navigateur :</P>
            <P>• Chrome : Paramètres → Confidentialité → Cookies et données des sites</P>
            <P>• Firefox : Options → Vie privée → Cookies et données de site</P>
            <P>• Safari : Préférences → Confidentialité → Gérer les données des sites</P>
          </Section>

          <Section title="Contact">
            <P>Pour toute question : contact@krmconcept.com</P>
          </Section>
        </div>
      </section>
    </>
  )
}
