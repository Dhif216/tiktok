import { useState, useEffect, useRef } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Benefits from './components/Benefits'
import HowItWorks from './components/HowItWorks'
import Rewards from './components/Rewards'
import AccountSupport from './components/AccountSupport'
import WelcomeGift from './components/WelcomeGift'
import FAQ from './components/FAQ'
import ApplicationForm from './components/ApplicationForm'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import { LanguageProvider } from './i18n'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#050505] text-[#fff8e7]">
        <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <main>
          <Hero />
          <Stats />
          <Benefits />
          <HowItWorks />
          <Rewards />
          <AccountSupport />
          <WelcomeGift />
          <FAQ />
          <ApplicationForm />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
