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

export default function PolitiqueConfidentialite() {
  return (
    <>
      <Helmet>
        <title>Politique de Confidentialité | KRM Clean</title>
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
            RGPD & Protection des données
          </motion.span>
          <motion.h1
            className="display-heading"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: EASE, delay: 0.1 }}
            style={{ fontSize: 'clamp(2rem, 4vw, 4rem)' }}
          >
            Politique de<br />confidentialité
          </motion.h1>
        </div>
      </section>

      <section style={{ padding: '4rem 2rem 6rem' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <Section title="Responsable du traitement">
            <P>KRM Clean — contact@krmconcept.com — +32 483 44 06 69 — Bruxelles, Belgique.</P>
          </Section>

          <Section title="Données collectées">
            <P>Lors de votre contact via téléphone ou WhatsApp, nous collectons uniquement les données nécessaires à la prestation du service :</P>
            <P>• Nom et prénom (pour la prise de rendez-vous)</P>
            <P>• Numéro de téléphone (pour vous recontacter)</P>
            <P>• Adresse d'intervention (pour le déplacement)</P>
            <P>• Photos transmises via WhatsApp (pour établir le devis)</P>
            <P>Nous ne collectons pas d'informations sensibles (données financières, données de santé, etc.).</P>
          </Section>

          <Section title="Finalités du traitement">
            <P>Vos données sont utilisées exclusivement pour :</P>
            <P>• Établir et répondre aux demandes de devis</P>
            <P>• Planifier et confirmer les interventions</P>
            <P>• Vous recontacter en cas de besoin lié au service</P>
            <P>Vos données ne sont jamais vendues, louées ou transmises à des tiers à des fins commerciales.</P>
          </Section>

          <Section title="Durée de conservation">
            <P>Vos données sont conservées pendant la durée nécessaire à l'exécution du service, puis supprimées. Les échanges WhatsApp sont conservés conformément aux paramètres de l'application. Vous pouvez demander leur suppression à tout moment.</P>
          </Section>

          <Section title="Vos droits">
            <P>Conformément au RGPD, vous disposez des droits suivants :</P>
            <P>• Droit d'accès à vos données personnelles</P>
            <P>• Droit de rectification des données inexactes</P>
            <P>• Droit à l'effacement (droit à l'oubli)</P>
            <P>• Droit d'opposition au traitement</P>
            <P>Pour exercer ces droits, contactez-nous à contact@krmconcept.com. Nous répondons sous 30 jours.</P>
          </Section>

          <Section title="Sécurité">
            <P>Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte ou divulgation.</P>
          </Section>

          <Section title="Contact">
            <P>Pour toute question relative à notre politique de confidentialité : contact@krmconcept.com</P>
          </Section>
        </div>
      </section>
    </>
  )
}
