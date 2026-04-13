import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import ScrambleText from './ScrambleText'

export default function Skills() {
  const { t } = useLanguage();
  const baseUrl = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
  
  const skills = [
    { name: 'Javascript', row: 0, col: 0 },
    { name: 'Typescript', row: 0, col: 1 },
    { name: 'React', row: 0, col: 2 },
    { name: 'HTML', row: 0, col: 3 },
    { name: 'CSS', row: 1, col: 0 },
    { name: 'C', row: 1, col: 1 },
    { name: 'C++', row: 1, col: 2 },
    { name: 'C#', row: 1, col: 3 },
    { name: 'Java', row: 2, col: 0 },
    { name: 'Python', row: 2, col: 1 },
    { name: 'Golang', row: 2, col: 2 },
    { name: 'SQL', row: 2, col: 3 },
    { name: 'PyTorch', row: 3, col: 0 },
    { name: 'ASP.NET', row: 3, col: 1 },
    { name: 'Git', row: 3, col: 2 },
    { name: 'AI / ML', row: 3, col: 3 }
  ];

  return (
    <section id="skills" className="py-20 px-10 md:px-20 max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-mono uppercase tracking-widest mb-20 text-center"
      >
        <ScrambleText text={t('skills-title') || "Skills"} delay={200} />
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <motion.div 
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.1, 
            }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="flex flex-col items-center justify-center p-6 transition-all group cursor-default"
          >
             <div 
               className="w-24 h-24 mb-6 grayscale group-hover:grayscale-0 transition-all duration-700 brightness-110 group-hover:brightness-125 group-hover:drop-shadow-[0_0_20px_rgba(100,255,218,0.3)] mix-blend-screen"
               style={{
                 backgroundImage: `url(${baseUrl}Images/tech-sprite.png)`,
                 backgroundSize: '400% 400%',
                 backgroundPosition: `${skill.col * 33.333}% ${skill.row * 33.333}%`,
                 backgroundRepeat: 'no-repeat'
               }}
             />
             <span className="text-sm font-mono text-slate-400 group-hover:text-white transition-colors tracking-widest uppercase">
               {skill.name}
             </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
