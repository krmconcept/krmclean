import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import ScrollToTop from './components/ScrollToTop'
import CookieBanner from './components/CookieBanner'
import Header from './components/Header'
import Footer from './components/Footer'
import { useAnalytics } from './hooks/useAnalytics'

import Home from './pages/Home'
import TextilePage from './pages/TextilePage'
import Tarifs from './pages/Tarifs'
import Procede from './pages/Procede'
import Reservation from './pages/Reservation'
import FAQ from './pages/FAQ'
import About from './pages/About'
import MentionsLegales from './pages/MentionsLegales'
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite'
import PolitiqueCookies from './pages/PolitiqueCookies'

function AppInner() {
  useAnalytics()
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/textile" element={<TextilePage />} />
          <Route path="/tarifs" element={<Tarifs />} />
          <Route path="/procede" element={<Procede />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
          <Route path="/politique-cookies" element={<PolitiqueCookies />} />
        </Routes>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppInner />
      </BrowserRouter>
    </HelmetProvider>
  )
}
