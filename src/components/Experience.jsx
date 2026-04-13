import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import ScrambleText from './ScrambleText'

const experiences = [
  { company: 'Fortinet', roleKey: 'role-fullstack', date: 'Oct. 2025 - Present', logo: 'fortinet-logo.png' },
  { company: 'Bosda', roleKey: 'role-intern', date: 'Sept. 2024 - Dec. 2024', logo: 'bosda-icon.png' },
  { company: 'WuXi AppTec', roleKey: 'role-intern', date: 'Jun. 2024 - Aug. 2024', logo: 'wuxi-apptec-logo.png', scale: 'scale-[2.2]' },
  { company: 'SparkLease', roleKey: 'role-intern', date: 'Sept. 2023 - Dec. 2023', logo: 'sparklease-logo.jpg', scale: 'scale-[1.5]' },
  { company: 'Nokia', roleKey: 'role-se-intern', date: 'Jan. 2023 - Apr. 2023', logo: 'nokia-logo.png' },
  { company: 'IQVIA', roleKey: 'role-ds-intern', date: 'Aug. 2021 - Dec. 2021', logo: 'iqvia-logo.jpg', scale: 'scale-150' },
]

export default function Experience() {
  const { t } = useLanguage();
  const baseUrl = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;

  return (
    <section id="experience" className="py-20 px-10 md:px-20 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-mono uppercase tracking-widest mb-20 border-b border-white/5 pb-8"
      >
        <ScrambleText text={t('exp-title') || "Experience"} delay={200} />
      </motion.h2>

      <div className="relative border-l border-white/10 ml-4 md:ml-0">
        {experiences.map((exp, index) => (
          <motion.div
            key={`${exp.company}-${index}`}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="mb-16 ml-10 relative group"
          >
            <div className="absolute left-[-47px] top-8 w-3.5 h-3.5 bg-primary rounded-full group-hover:scale-150 transition-transform shadow-[0_0_15px_rgba(100,255,218,0.5)] z-10" />

            <div className="flex items-center gap-10 mb-8">
              <div className="w-20 h-20 shrink-0 bg-white border border-white/20 rounded-full p-4 flex items-center justify-center overflow-hidden group-hover:border-primary transition-all shadow-2xl">
                <img
                  src={`${baseUrl}Images/${exp.logo}`}
                  alt={exp.company}
                  className={`w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500 ${exp.scale || 'scale-110'}`}
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">
                  {exp.company}
                </h3>
                <h4 className="text-slate-200 font-mono text-lg italic">
                  {t(exp.roleKey)}
                </h4>
              </div>
            </div>

            <span className="inline-block text-[10px] md:text-xs font-mono text-slate-500 tracking-[0.2em] uppercase bg-white/5 px-3 py-1 rounded-full border border-white/5">
              {exp.date}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
