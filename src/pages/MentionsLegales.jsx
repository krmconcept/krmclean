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

export default function MentionsLegales() {
  return (
    <>
      <Helmet>
        <title>Mentions Légales | KRM Clean</title>
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
            Informations légales
          </motion.span>
          <motion.h1
            className="display-heading"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: EASE, delay: 0.1 }}
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            Mentions légales
          </motion.h1>
        </div>
      </section>

      <section style={{ padding: '4rem 2rem 6rem' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <Section title="Éditeur du site">
            <P>Nom commercial : KRM Clean</P>
            <P>Adresse : Bruxelles, Belgique</P>
            <P>Téléphone : +32 483 44 06 69</P>
            <P>Email : contact@krmconcept.com</P>
            <P>Zone d'intervention : Bruxelles et périphérie (rayon 15 km)</P>
          </Section>

          <Section title="Hébergement">
            <P>Ce site est hébergé par Hostinger International Ltd.</P>
            <P>61 Lordou Vironos Street, 6023 Larnaca, Chypre</P>
            <P>Site web : www.hostinger.com</P>
          </Section>

          <Section title="Propriété intellectuelle">
            <P>
              L'ensemble des éléments constituant ce site (textes, images, graphismes, logo, icônes, etc.) sont la propriété exclusive de KRM Clean. Toute reproduction, représentation, modification ou transmission de tout ou partie du site, sans l'autorisation expresse et préalable de KRM Clean, est strictement interdite et constituerait une contrefaçon sanctionnée par le Code de la Propriété Intellectuelle.
            </P>
          </Section>

          <Section title="Responsabilité">
            <P>
              KRM Clean s'efforce d'assurer au mieux l'exactitude et la mise à jour des informations diffusées sur ce site. Cependant, KRM Clean ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site. KRM Clean se réserve le droit de corriger, à tout moment et sans préavis, le contenu de ce site.
            </P>
          </Section>

          <Section title="Données personnelles">
            <P>
              Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi belge du 30 juillet 2018, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données vous concernant. Pour exercer ces droits, contactez-nous à contact@krmconcept.com.
            </P>
            <P>Pour plus d'informations, consultez notre <a href="/politique-confidentialite" style={{ color: 'var(--acier-mid)', textDecoration: 'underline' }}>politique de confidentialité</a>.</P>
          </Section>

          <Section title="Cookies">
            <P>Ce site utilise des cookies pour améliorer l'expérience utilisateur. Pour plus d'informations, consultez notre <a href="/politique-cookies" style={{ color: 'var(--acier-mid)', textDecoration: 'underline' }}>politique de cookies</a>.</P>
          </Section>
        </div>
      </section>
    </>
  )
}
