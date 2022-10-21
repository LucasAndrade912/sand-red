import { useState, useEffect } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './styles/global.css'

import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { GamesSection } from './components/GamesSection'
import { AboutUsSection } from './components/AboutUsSection'
import { PresentationSection } from './components/PresentationSection'

export function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 375)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function handleOpenMobileMenu() {
    if (isMobile) {
      setIsMenuOpen(true)
    }
  }

  function handleCloseMobileMenu() {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 375)
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <Header
        isMenuOpen={isMenuOpen}
        handleOpenMobileMenu={handleOpenMobileMenu}
        handleCloseMobileMenu={handleCloseMobileMenu}
      />

      <PresentationSection />
      <GamesSection />
      <AboutUsSection />

      <Footer />
    </>
  )
}