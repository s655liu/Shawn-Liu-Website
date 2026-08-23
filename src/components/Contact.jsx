import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

// Manual SVGs for Social and Contact Icons
const MailIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
)

const PhoneIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
)

const WeChatIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M8.691 2.188C3.891 2.188 0 5.478 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.858-2.581.402-5.469 2.899-6.49 1.17-.479 2.454-.627 3.69-.427C14.184 4.542 11.66 2.188 8.691 2.188zm-2.58 3.873c.638 0 1.155.518 1.155 1.157 0 .64-.517 1.157-1.155 1.157-.64 0-1.157-.518-1.157-1.157 0-.64.518-1.157 1.157-1.157zm5.16 0c.639 0 1.156.518 1.156 1.157 0 .64-.517 1.157-1.156 1.157-.638 0-1.156-.518-1.156-1.157 0-.64.518-1.157 1.156-1.157zm4.07 4.148c-3.993 0-7.23 2.742-7.23 6.124 0 1.844.975 3.504 2.502 4.626.113.082.179.213.179.352l-.326 1.233a.245.245 0 0 0 .243.298c.05 0 .099-.015.14-.042l1.586-.928a.72.72 0 0 1 .597-.082 8.468 8.468 0 0 0 2.309.328c3.993 0 7.23-2.742 7.23-6.124s-3.237-6.124-7.23-6.124zm-2.453 3.228c.532 0 .963.431.963.963 0 .532-.431.963-.963.963-.532 0-.964-.431-.964-.963 0-.532.432-.963.964-.963zm4.298 0c.532 0 .964.431.964.963 0 .532-.432.963-.964.963-.532 0-.964-.431-.964-.963 0-.532.432-.963.964-.963z"/>
  </svg>
)

const InstagramIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
)

const Github = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
)

const Linkedin = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
)

const ExternalLinkIcon = ({ size = 14, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
)

export default function Contact() {
  const { t } = useLanguage();
  const [copiedType, setCopiedType] = useState(null);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  }

  return (
    <footer id="contact" className="py-20 px-6 md:px-20 bg-[#0f0f12] border-t border-white/10 text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <p className="text-xl md:text-2xl text-slate-400 mb-12 leading-relaxed font-light">
          {t('footer-desc') || "I'm always looking for new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!"}
        </p>

        {/* Direct Contact Methods */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 mb-12">
          {/* Email Box */}
          <div className="flex flex-col items-center gap-2.5 group/box w-full sm:w-auto">
             <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest italic group-hover/box:text-primary transition-colors flex items-center gap-1.5">
               <MailIcon size={12} />
               <span>{t('contact-email') || 'Email'}</span>
             </div>
             <div className="flex items-center justify-between sm:justify-start gap-4 bg-white/5 pr-1 py-1 pl-5 border border-white/25 rounded-lg group hover:border-primary/60 transition-all shadow-[0_4px_10px_rgba(0,0,0,0.3)] w-full sm:w-auto">
                <span className="font-mono text-slate-200 text-sm">s314liu@gmail.com</span>
                <button 
                  onClick={() => copyToClipboard('s314liu@gmail.com', 'email')}
                  title="Copy email address"
                  className="relative p-2.5 bg-white/5 border border-white/10 rounded-md hover:bg-primary hover:text-black transition-all group/btn active:scale-95 text-slate-300"
                >
                  <AnimatePresence mode="wait">
                    {copiedType === 'email' ? (
                      <motion.span 
                        key="check" 
                        initial={{ scale: 0 }} 
                        animate={{ scale: 1 }} 
                        className="text-[10px] font-bold uppercase font-mono px-1"
                      >
                         Done
                      </motion.span>
                    ) : (
                      <motion.svg 
                        key="copy" 
                        className="w-4 h-4 transition-colors" 
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      >
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                      </motion.svg>
                    )}
                  </AnimatePresence>
                </button>
             </div>
          </div>

          {/* Phone Box */}
          <div className="flex flex-col items-center gap-2.5 group/box w-full sm:w-auto">
             <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest italic group-hover/box:text-primary transition-colors flex items-center gap-1.5">
               <PhoneIcon size={12} />
               <span>{t('contact-phone') || 'Phone'}</span>
             </div>
             <div className="flex items-center justify-between sm:justify-start gap-4 bg-white/5 pr-1 py-1 pl-5 border border-white/25 rounded-lg group hover:border-primary/60 transition-all shadow-[0_4px_10px_rgba(0,0,0,0.3)] w-full sm:w-auto">
                <span className="font-mono text-slate-200 text-sm">+1 (778)-939-2233</span>
                <button 
                  onClick={() => copyToClipboard('+1 778-939-2233', 'phone')}
                  title="Copy phone number"
                  className="relative p-2.5 bg-white/5 border border-white/10 rounded-md hover:bg-primary hover:text-black transition-all group/btn active:scale-95 text-slate-300"
                >
                  <AnimatePresence mode="wait">
                    {copiedType === 'phone' ? (
                      <motion.span 
                        key="phone-check" 
                        initial={{ scale: 0 }} 
                        animate={{ scale: 1 }} 
                        className="text-[10px] font-bold uppercase font-mono px-1"
                      >
                         Done
                      </motion.span>
                    ) : (
                      <motion.svg 
                        key="phone-copy" 
                        className="w-4 h-4 transition-colors" 
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      >
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                      </motion.svg>
                    )}
                  </AnimatePresence>
                </button>
             </div>
          </div>
        </div>

        {/* Socials & Networks Section */}
        <div className="mb-16">
          <div className="text-[11px] font-mono text-slate-500 uppercase tracking-[0.25em] mb-6 flex items-center justify-center gap-3">
            <span className="h-[1px] w-10 bg-white/10"></span>
            <span>{t('contact-socials') || 'Socials & Networks'}</span>
            <span className="h-[1px] w-10 bg-white/10"></span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {/* WeChat Card */}
            <div className="flex flex-col items-center sm:items-start gap-2 bg-white/5 p-4 border border-white/20 rounded-lg hover:border-primary/60 transition-all group/card shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2 text-slate-400 group-hover/card:text-primary transition-colors">
                  <WeChatIcon size={18} />
                  <span className="text-[10px] font-mono uppercase tracking-wider font-semibold">{t('contact-wechat') || 'WeChat'}</span>
                </div>
                <button
                  onClick={() => copyToClipboard('shawnliu314', 'wechat')}
                  title="Copy WeChat ID"
                  className="p-1.5 bg-white/5 border border-white/10 rounded hover:bg-primary hover:text-black transition-all active:scale-95 text-slate-300"
                >
                  <AnimatePresence mode="wait">
                    {copiedType === 'wechat' ? (
                      <motion.span key="wechat-done" initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-[9px] font-bold uppercase font-mono px-1">
                        Done
                      </motion.span>
                    ) : (
                      <motion.svg key="wechat-copy" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                      </motion.svg>
                    )}
                  </AnimatePresence>
                </button>
              </div>
              <div className="font-mono text-slate-200 text-xs sm:text-sm tracking-tight truncate w-full text-center sm:text-left pt-1">
                shawnliu314
              </div>
            </div>

            {/* Instagram Card */}
            <div className="flex flex-col items-center sm:items-start gap-2 bg-white/5 p-4 border border-white/20 rounded-lg hover:border-primary/60 transition-all group/card shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2 text-slate-400 group-hover/card:text-primary transition-colors">
                  <InstagramIcon size={18} />
                  <span className="text-[10px] font-mono uppercase tracking-wider font-semibold">{t('contact-instagram') || 'Instagram'}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => copyToClipboard('sshawn.liu', 'instagram')}
                    title="Copy Instagram Handle"
                    className="p-1.5 bg-white/5 border border-white/10 rounded hover:bg-primary hover:text-black transition-all active:scale-95 text-slate-300"
                  >
                    <AnimatePresence mode="wait">
                      {copiedType === 'instagram' ? (
                        <motion.span key="ins-done" initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-[9px] font-bold uppercase font-mono px-1">
                          Done
                        </motion.span>
                      ) : (
                        <motion.svg key="ins-copy" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                        </motion.svg>
                      )}
                    </AnimatePresence>
                  </button>
                  <a
                    href="https://www.instagram.com/sshawn.liu/"
                    target="_blank"
                    rel="noreferrer"
                    title="Visit Instagram Profile"
                    className="p-1.5 bg-white/5 border border-white/10 rounded hover:bg-primary hover:text-black transition-all active:scale-95 text-slate-300"
                  >
                    <ExternalLinkIcon size={14} />
                  </a>
                </div>
              </div>
              <a 
                href="https://www.instagram.com/sshawn.liu/" 
                target="_blank" 
                rel="noreferrer" 
                className="font-mono text-slate-200 text-xs sm:text-sm tracking-tight truncate w-full text-center sm:text-left pt-1 hover:text-primary transition-colors"
              >
                @sshawn.liu
              </a>
            </div>

            {/* GitHub Card */}
            <div className="flex flex-col items-center sm:items-start gap-2 bg-white/5 p-4 border border-white/20 rounded-lg hover:border-primary/60 transition-all group/card shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2 text-slate-400 group-hover/card:text-primary transition-colors">
                  <Github size={18} />
                  <span className="text-[10px] font-mono uppercase tracking-wider font-semibold">GitHub</span>
                </div>
                <a
                  href="https://github.com/s655liu"
                  target="_blank"
                  rel="noreferrer"
                  title="Visit GitHub Profile"
                  className="p-1.5 bg-white/5 border border-white/10 rounded hover:bg-primary hover:text-black transition-all active:scale-95 text-slate-300"
                >
                  <ExternalLinkIcon size={14} />
                </a>
              </div>
              <a 
                href="https://github.com/s655liu" 
                target="_blank" 
                rel="noreferrer" 
                className="font-mono text-slate-200 text-xs sm:text-sm tracking-tight truncate w-full text-center sm:text-left pt-1 hover:text-primary transition-colors"
              >
                github.com/s655liu
              </a>
            </div>

            {/* LinkedIn Card */}
            <div className="flex flex-col items-center sm:items-start gap-2 bg-white/5 p-4 border border-white/20 rounded-lg hover:border-primary/60 transition-all group/card shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2 text-slate-400 group-hover/card:text-primary transition-colors">
                  <Linkedin size={18} />
                  <span className="text-[10px] font-mono uppercase tracking-wider font-semibold">LinkedIn</span>
                </div>
                <a
                  href="https://www.linkedin.com/in/shawn-liu-399448170/"
                  target="_blank"
                  rel="noreferrer"
                  title="Visit LinkedIn Profile"
                  className="p-1.5 bg-white/5 border border-white/10 rounded hover:bg-primary hover:text-black transition-all active:scale-95 text-slate-300"
                >
                  <ExternalLinkIcon size={14} />
                </a>
              </div>
              <a 
                href="https://www.linkedin.com/in/shawn-liu-399448170/" 
                target="_blank" 
                rel="noreferrer" 
                className="font-mono text-slate-200 text-xs sm:text-sm tracking-tight truncate w-full text-center sm:text-left pt-1 hover:text-primary transition-colors"
              >
                Shawn Liu
              </a>
            </div>
          </div>
        </div>

        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="mailto:s314liu@gmail.com" 
          className="inline-block px-12 py-4 border-2 border-primary text-primary font-bold font-mono uppercase tracking-widest mb-20 hover:bg-primary hover:text-black transition-all shadow-[0_0_20px_rgba(100,255,218,0.15)]"
        >
          {t('footer-btn') || 'Get In Touch'}
        </motion.a>

        <p className="text-slate-600 font-mono text-xs tracking-widest uppercase opacity-50">
          &copy; {new Date().getFullYear()} Shawn Liu // Vancouver, BC
        </p>
      </motion.div>
    </footer>
  )
}
