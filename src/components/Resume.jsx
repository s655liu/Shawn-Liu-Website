import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import ScrambleText from './ScrambleText'
import { FileText, ExternalLink, Download, ChevronDown, ChevronUp } from 'lucide-react'

export default function Resume() {
  const { lang, t } = useLanguage();
  const [showResume, setShowResume] = useState(false);
  const baseUrl = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;

  const resumeFileName = lang === 'en' ? 'Shawn_Liu_Resume.pdf' : 'Shawn_Liu_Resume_CN.pdf';
  const resumeUrl = `${baseUrl}Files/${resumeFileName}`;

  return (
    <section id="resume" className="py-20 px-10 md:px-20 max-w-7xl mx-auto relative overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-mono uppercase tracking-widest mb-16 text-center"
      >
        <ScrambleText text={t('resume-title') || "Resume"} delay={200} />
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center gap-6"
      >
        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-4">
          <button
            onClick={() => setShowResume(!showResume)}
            className="flex items-center gap-3 bg-primary/10 border border-primary/40 hover:bg-primary hover:text-black transition-all duration-300 px-8 py-4 text-base font-mono uppercase tracking-widest text-primary font-bold shadow-lg hover:shadow-primary/20 cursor-pointer"
          >
            <FileText className="w-5 h-5" />
            <span>{showResume ? (lang === 'en' ? 'Hide Resume' : '隐藏简历') : (lang === 'en' ? 'Show Resume' : '查看简历')}</span>
            {showResume ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>

          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all duration-300 px-6 py-4 text-base font-mono uppercase tracking-widest text-slate-300 font-medium"
          >
            <ExternalLink className="w-5 h-5" />
            <span>{lang === 'en' ? 'Open in New Tab' : '新标签页打开'}</span>
          </a>

          <a
            href={resumeUrl}
            download={resumeFileName}
            className="flex items-center gap-3 bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all duration-300 px-6 py-4 text-base font-mono uppercase tracking-widest text-slate-300 font-medium"
          >
            <Download className="w-5 h-5" />
            <span>{lang === 'en' ? 'Download PDF' : '下载 PDF'}</span>
          </a>
        </div>

        {/* Collapsible Resume Viewer */}
        <AnimatePresence>
          {showResume && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full mt-8 border border-white/10 bg-[#0c0c0e] overflow-hidden"
            >
              <div className="bg-[#121215] px-6 py-3 border-b border-white/5 flex items-center justify-between font-mono text-xs text-slate-400">
                <span>shawn-liu-website.vercel.app/Files/{resumeFileName}</span>
                <span className="text-primary">[ LANG: {lang.toUpperCase()} ]</span>
              </div>
              <div className="w-full h-[800px]">
                <iframe
                  src={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=1`}
                  className="w-full h-full border-none"
                  title="Shawn Liu Resume"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
