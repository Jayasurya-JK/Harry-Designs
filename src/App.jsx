import { Navbar, Footer } from '@/features/navigation'
import { HeroSection } from '@/features/hero'
import { AboutSection } from '@/features/about'
import { PortfolioSection } from '@/features/portfolio'
import { ContactSection } from '@/features/contact'

function App() {
  return (
    <div className="min-h-screen bg-eerie">
      <Navbar />
      <HeroSection />
      <PortfolioSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
