import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Plus, Minus } from 'lucide-react'
import { Link } from 'react-router-dom'

const EASE = [0.22, 1, 0.36, 1]

const QUESTIONS = [
  {
    q: 'Combien de temps dure une intervention ?',
    r: 'Selon la surface et le type de textile, une intervention dure entre 30 minutes et 2 heures. Un canapé 3 places prend environ 45 minutes. Un matelas 2 places, 30 à 40 minutes. Nous vous donnons une estimation précise au moment de la réservation.',
  },
  {
    q: 'Combien de temps faut-il pour que le textile sèche ?',
    r: 'Grâce à notre système d\'extraction haute performance, 95% de l\'humidité est éliminée pendant l\'intervention. Le tissu est légèrement humide mais sèche complètement en 2 à 4 heures selon la ventilation et l\'épaisseur du tissu. Vous pouvez utiliser votre canapé le soir même.',
  },
  {
    q: 'Vous déplacez-vous à domicile ou faut-il amener le meuble ?',
    r: 'Nous venons exclusivement à votre domicile. Il n\'est pas nécessaire de déplacer le mobilier — nous intervenons directement sur place. Tout notre matériel est transporté dans notre véhicule.',
  },
  {
    q: 'Quels types de taches pouvez-vous éliminer ?',
    r: 'Notre méthode traite efficacement : les taches de café, vin, jus, graisses alimentaires, traces de stylo, urine d\'animal, vomissures, et bien d\'autres. Les taches très anciennes ou incrustées profondément peuvent nécessiter un traitement supplémentaire facturé en sus (+10 €). Dans certains cas extrêmes, l\'élimination totale n\'est pas garantie — nous vous en informerons avant l\'intervention.',
  },
  {
    q: 'Intervenez-vous sur tous les types de tissu ?',
    r: 'Nous intervenons sur la majorité des tissus : microfibre, velours, coton, polyester, laine, lin. Pour le cuir, nous proposons un nettoyage adapté. Certains tissus très délicats (soie pure, velours coupé luxe) peuvent nécessiter une vérification préalable — envoyez-nous une photo pour confirmation.',
  },
  {
    q: 'Les produits utilisés sont-ils sans danger pour mes enfants et animaux ?',
    r: 'Oui. Nos détergents professionnels sont certifiés et ne laissent aucune trace ni résidu toxique après séchage. Ils sont sans solvants chimiques agressifs. Nous recommandons de laisser le textile sécher complètement avant d\'y permettre l\'accès aux enfants en bas âge et aux animaux (2 à 3 heures).',
  },
  {
    q: 'Quelle est la zone d\'intervention ?',
    r: 'Nous intervenons à Bruxelles et dans un rayon de 15 km autour du centre (Uccle, Ixelles, Etterbeek, Schaerbeek, Woluwe-Saint-Lambert, Woluwe-Saint-Pierre, Laeken, Anderlecht, Molenbeek, Forest, et communes limitrophes). Pour une zone plus éloignée, contactez-nous — nous étudions chaque demande.',
  },
  {
    q: 'Comment se passe le paiement ?',
    r: 'Le paiement s\'effectue sur place, après l\'intervention, une fois que vous êtes satisfait du résultat. Nous acceptons le cash et le virement bancaire. Aucun acompte n\'est demandé à la réservation.',
  },
  {
    q: 'Puis-je obtenir un devis avant l\'intervention ?',
    r: 'Absolument. Envoyez-nous une ou plusieurs photos de ce que vous souhaitez faire nettoyer via WhatsApp (+32 483 44 06 69). Nous vous répondons avec un devis précis en quelques minutes, sans engagement.',
  },
  {
    q: 'Quelle est la différence avec un nettoyage classique à la vapeur ?',
    r: 'Le nettoyage à la vapeur humidifie les fibres mais n\'aspire pas l\'eau chargée de salissures. Résultat : le séchage est plus long et les salissures remontent parfois à la surface en séchant. Notre méthode injection-extraction injecte ET aspire simultanément — les salissures sont extraites du tissu, pas redistribuées.',
  },
]

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ borderBottom: '1px solid var(--ardoise)' }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '1.5rem 0',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '1.25rem',
          textAlign: 'left',
        }}
        aria-expanded={open}
      >
        <span
          className="price-num"
          style={{
            fontSize: '2.5rem',
            lineHeight: 1,
            opacity: 0.15,
            color: 'var(--acier-mid)',
            userSelect: 'none',
            flexShrink: 0,
            marginTop: '-0.2rem',
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
        <span style={{
          flex: 1,
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 500,
          fontSize: '0.95rem',
          color: 'var(--creme)',
          lineHeight: 1.5,
        }}>
          {item.q}
        </span>
        <span style={{ flexShrink: 0, color: 'var(--acier-mid)', paddingTop: '0.15rem' }}>
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{
              paddingLeft: 'calc(2.5rem + 1.25rem)',
              paddingBottom: '1.5rem',
              fontSize: '0.88rem',
              color: 'var(--brume)',
              lineHeight: 1.8,
            }}>
              {item.r}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  return (
    <>
      <Helmet>
        <title>FAQ — Questions Fréquentes | KRM Clean Bruxelles</title>
        <meta name="description" content="Toutes les réponses à vos questions sur le nettoyage textile professionnel : durée, séchage, produits, tarifs, zone d'intervention." />
        <link rel="canonical" href="https://krmclean.be/faq" />
      </Helmet>

      {/* Hero */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--ardoise)' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <motion.span
            className="label-tag"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            style={{ display: 'block', marginBottom: '1rem' }}
          >
            Questions fréquentes
          </motion.span>
          <motion.h1
            className="display-heading"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: EASE, delay: 0.1 }}
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '1.5rem' }}
          >
            Tout ce que vous<br />
            <span style={{ color: 'var(--acier)' }}>devez savoir</span>
          </motion.h1>
        </div>
      </section>

      {/* Questions */}
      <section style={{ padding: '4rem 2rem 6rem' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          {QUESTIONS.map((item, i) => (
            <FAQItem key={i} item={item} index={i} />
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE }}
            style={{
              marginTop: '3rem',
              background: 'var(--zinc)',
              border: '1px solid var(--ardoise)',
              borderLeft: '3px solid var(--acier-mid)',
              padding: '1.75rem 2rem',
            }}
          >
            <p style={{ fontSize: '0.9rem', color: 'var(--creme)', marginBottom: '1rem' }}>
              Vous ne trouvez pas la réponse à votre question ?
            </p>
            <Link to="/reservation" className="btn-primary" style={{ fontSize: '0.7rem' }}>
              Nous contacter directement
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
