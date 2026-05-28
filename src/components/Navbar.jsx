import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

export default function Navbar() {
  const { lang, t, toggleLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { key: 'nav-home', href: '#hero' },
    { key: 'nav-about', href: '#about' },
    { key: 'nav-projects', href: '#projects' },
    { key: 'nav-exp', href: '#experience' },
    { key: 'nav-edu', href: '#education' },
    { key: 'nav-skills', href: '#skills' },
    { key: 'nav-resume', href: '#resume' },
    { key: 'nav-contact', href: '#contact' },
  ]

  const handleLinkClick = () => setIsOpen(false);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 w-full z-[60] px-6 md:px-10 py-6 flex justify-between items-center backdrop-blur-md bg-black/20 border-b border-white/5"
      >
        <div className="text-2xl font-bold font-heading tracking-tighter mix-blend-difference">
          <a href="#hero">SL</a>
        </div>

        <div className="flex items-center gap-6">
          <button 
            onClick={toggleLang}
            className="px-4 py-1 border border-white/20 rounded-full text-[10px] font-mono uppercase tracking-widest hover:bg-white hover:text-black transition-all"
          >
            {lang === 'en' ? 'EN / 中' : '中 / EN'}
          </button>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-[70] flex flex-col gap-1.5 items-end group"
          >
            <motion.span 
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-8 h-[2px] bg-white group-hover:bg-primary transition-colors"
            />
            <motion.span 
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-[2px] bg-white group-hover:bg-primary transition-colors"
            />
            <motion.span 
              animate={isOpen ? { rotate: -45, y: -8, width: 32 } : { rotate: 0, y: 0, width: 16 }}
              className="h-[2px] bg-white group-hover:bg-primary transition-colors"
            />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-[#0a0a0c]/95 backdrop-blur-2xl flex flex-col items-center justify-center pt-20"
          >
            <div className="flex flex-col gap-8 text-center px-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.key}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={handleLinkClick}
                  className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tighter hover:text-primary transition-colors"
                >
                  {t(link.key)}
                </motion.a>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-20 flex flex-col items-center gap-6"
            >
               <a 
                href={lang === 'en' ? "/Files/Shawn_Liu_Resume.pdf" : "/Files/Shawn_Liu_Resume_CN.pdf"} 
                target="_blank"
                className="bg-primary px-10 py-4 text-black text-sm font-bold uppercase tracking-widest hover:bg-white transition-colors"
              >
                {t('nav-resume')}
              </a>
              <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                Based in Vancouver, BC // Open for Work
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
