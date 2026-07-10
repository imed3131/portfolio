import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <div className="min-h-svh bg-white text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
