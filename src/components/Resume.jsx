import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import ScrambleText from './ScrambleText'
import { FileText, Download, ExternalLink, Eye, Terminal } from 'lucide-react'

export default function Resume() {
  const { lang, t } = useLanguage();
  const baseUrl = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;

  const resumeFileName = lang === 'en' ? 'Shawn_Liu_Resume.pdf' : 'Shawn_Liu_Resume_CN.pdf';
  const resumeUrl = `${baseUrl}Files/${resumeFileName}`;

  // Quick summaries for mobile view / side preview
  const highlights = lang === 'en' ? {
    role: "Full Stack Web Developer @ Fortinet",
    education: "University of Waterloo - Honours Computer Science (2025)",
    summary: "Experienced in building highly scalable web systems, low-level networking in C++, and machine learning integrations. Passionate about AI agents and robust full-stack engineering.",
    bullets: [
      "Full-stack development with React, Python, and C++",
      "Robust experience across Fortinet, Nokia, and SparkLease",
      "Low-level systems programming and high-performance APIs",
      "Background in Web Development, AI/ML, and Computer Vision"
    ]
  } : {
    role: "全栈 Web 开发工程师 @ Fortinet",
    education: "滑铁卢大学 - 计算机科学荣誉学士学位 (2025)",
    summary: "具备高扩展性 Web 系统、C++ 底层网络编程以及机器学习集成开发的丰富经验。目前专注于 AI 智能体 (Agents) 以及全栈工程技术的研发。",
    bullets: [
      "熟练掌握 React, Python, C++ 的全栈式系统架构与开发",
      "在 Fortinet、Nokia 及 SparkLease 拥有扎实的工业级项目经验",
      "精通底层系统级编程与高性能 API 的设计与实现",
      "扎实的人工智能与机器学习背景（Web 开发、AI/ML、计算机视觉）"
    ]
  };

  return (
    <section id="resume" className="py-20 px-10 md:px-20 max-w-none relative overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-mono uppercase tracking-widest mb-16 border-b border-white/5 pb-8"
      >
        <ScrambleText text={t('resume-title') || "Resume"} delay={200} />
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="border border-white/10 hover:border-primary/20 bg-white/3 backdrop-blur-sm shadow-2xl rounded-none overflow-hidden transition-all duration-500"
      >
        <div className="flex flex-col lg:flex-row items-stretch">

          {/* Left Panel: Summary & Actions (45% Width) */}
          <div className="w-full lg:w-[45%] p-8 flex flex-col justify-between relative">
            {/* Top decorative accent line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

            <div>
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <Terminal className="text-primary w-5 h-5 animate-pulse" />
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                  {lang === 'en' ? "PROFILE_SUMMARY.SH" : "个人概览.SH"}
                </span>
              </div>

              {/* Title & Organization */}
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {highlights.role}
              </h3>
              <p className="text-sm font-mono text-slate-400 mb-6 border-l-2 border-primary/40 pl-4 py-1">
                {highlights.education}
              </p>

              {/* Description */}
              <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6 font-light">
                {highlights.summary}
              </p>

              {/* Technical bullet points */}
              <ul className="space-y-3 mb-8">
                {highlights.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs md:text-sm text-slate-400">
                    <span className="text-primary mt-1">⌁</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Actions Panel */}
            <div className="mt-auto pt-6 border-t border-white/5">
              <div className="flex flex-col sm:flex-row gap-4">

                {/* View Fullscreen Action */}
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-primary/10 border border-primary/30 hover:bg-primary hover:text-black hover:border-primary transition-all duration-300 px-6 py-4 rounded-none text-sm font-mono font-bold uppercase tracking-wider text-primary group"
                >
                  <Eye className="w-4 h-4 transition-transform group-hover:scale-110" />
                  {t('resume-view-pdf') || "View PDF"}
                </a>

                {/* Download Action */}
                <a
                  href={resumeUrl}
                  download={resumeFileName}
                  className="flex-1 flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all duration-300 px-6 py-4 rounded-none text-sm font-mono font-bold uppercase tracking-wider text-white group"
                >
                  <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                  {t('resume-download-pdf') || "Download PDF"}
                </a>

              </div>

              <div className="mt-4 flex justify-between items-center text-[9px] font-mono text-slate-500 uppercase tracking-widest">
                <span>[ PDF_VER_2026 ]</span>
                <span>{lang === 'en' ? "ACTIVE_STATE: MATCHED" : "当前语言版本: 已同步"}</span>
              </div>
            </div>

          </div>

          {/* Right Panel: Interactive Frame / Browser Mockup (55% Width) */}
          <div className="w-full lg:w-[55%] flex flex-col justify-stretch bg-[#0c0c0e] border-t lg:border-t-0 lg:border-l border-white/10 min-h-[500px] lg:min-h-0 relative">

            {/* Browser Header Bar */}
            <div className="bg-[#121215] px-6 py-3 border-b border-white/5 flex items-center justify-between">

              {/* Browser Address bar */}
              <div className="flex-1 max-w-md mx-auto px-4 py-1 bg-white/5 rounded-md border border-white/5 text-center text-[10px] font-mono text-slate-400 truncate">
                shawn-liu-website.vercel.app/Files/{resumeFileName}
              </div>

              {/* External Link */}
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary transition-colors ml-4"
                title={t('resume-view-pdf') || "Open in new tab"}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Document Rendering Frame */}
            <div className="flex-1 w-full bg-slate-900/40 relative group overflow-hidden">

              {/* Frame loading placeholder */}
              <div className="absolute inset-0 bg-[#0d0d10] flex flex-col items-center justify-center z-0 pointer-events-none p-6 text-center">
                <FileText className="w-12 h-12 text-primary/20 mb-4 animate-pulse" />
                <span className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-2">
                  {lang === 'en' ? "RENDERING PDF DOCUMENT..." : "正在渲染 PDF 文档..."}
                </span>
                <span className="text-[10px] font-mono text-slate-600">
                  {lang === 'en' ? "Use the view fullscreen button if iframe does not load." : "如果预览未加载，请使用全屏浏览按钮。"}
                </span>
              </div>

              {/* High-fidelity PDF iframe */}
              <iframe
                src={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=1`}
                className="relative z-10 w-full h-full border-none opacity-90 hover:opacity-100 transition-opacity duration-300"
                title={lang === 'en' ? "Shawn Liu English Resume" : "Shawn Liu Chinese Resume"}
              />

              {/* Scanning laser grid effect */}
              <div className="absolute inset-x-0 bottom-0 top-0 pointer-events-none border border-primary/10 z-20 rounded-none">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/0 via-primary/5 to-primary/0 w-full h-1/4 animate-scanline pointer-events-none"></div>
              </div>
            </div>

            {/* Bottom Footer Details */}
            <div className="bg-[#121215] px-6 py-2 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-slate-500">
              <span>[ LANG: {lang.toUpperCase()} ]</span>
              <span>[ STATUS: 200 OK ]</span>
            </div>

          </div>

        </div>
      </motion.div>

      {/* Background decoration dots & lights */}
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-20 -left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  )
}
