import { useEffect } from 'react'
import Lenis from 'lenis'
import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Wisdom from './components/Wisdom'
import Contact from './components/Contact'
import BackgroundCanvas from './components/BackgroundCanvas'
import CustomCursor from './components/CustomCursor'
import TerminalContainer from './components/TerminalContainer'
import Resume from './components/Resume'

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])

  return (
    <LanguageProvider>
      <div className="bg-[#0a0a0c] text-white min-h-screen selection:bg-primary/30 selection:text-primary relative overflow-x-hidden">
        
        {/* Cinematic Texture Overlay */}
        <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150"></div>
        
        {/* Interactive Components */}
        <CustomCursor />
        <BackgroundCanvas />
        <Navbar />
        
        <main className="relative z-10 font-inter">
          <Hero />
          
          <TerminalContainer>
            <About />
            <Projects />
            <Experience />
            <Education />
            <Skills />
            <Resume />
            <Wisdom />
          </TerminalContainer>
          
          <Contact />
        </main>

        {/* Global Progress Line [Active Theory Signature] */}
        <div className="fixed left-0 bottom-0 w-[1px] h-32 bg-primary/20 z-50 ml-10 hidden lg:block">
           <div className="w-full h-1/2 bg-primary animate-pulse"></div>
        </div>
      </div>
    </LanguageProvider>
  )
}
