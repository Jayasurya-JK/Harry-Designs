import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import DesignProcess from './components/DesignProcess'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <About />
      <DesignProcess />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
