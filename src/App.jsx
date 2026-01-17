import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-eerie">
      <Navbar />
      <Hero />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
