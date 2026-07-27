import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import ScrambleText from './ScrambleText'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const projects = [
  {
    id: 'math-lock',
    title: 'Math Lock',
    desc: 'Interactive mobile application and lock screen learning platform that surfaces bite-sized math problems and competition tracks directly on your phone keyguard.',
    image: '/Images/math-lock.png',
    fit: 'contain',
    tags: ['React', 'SwiftUI', 'WidgetKit', 'JavaScript'],
    link: 'https://github.com/s655liu/Math_Lock'
  },
  {
    id: 'xiangqi-pro',
    title: 'Xiangqi Pro',
    desc: 'The most authentic Chinese Chess experience online. Features a premium landing page, advanced AI matching, and real-time multiplayer.',
    image: '/Images/xiangqi-pro.png',
    tags: ['Flask', 'Socket.IO', 'JavaScript', 'Python'],
    link: 'https://github.com/s655liu/Chinese-Chess'
  },
  {
    id: 'uw-exam',
    title: 'Waterloo Exam Generator',
    desc: 'AI-powered mock exam generator for UW CS and Math courses, featuring glassmorphism UI.',
    image: '/Images/uw-exam.png',
    tags: ['JavaScript', 'Node.js', 'AI', 'Express'],
    link: 'https://github.com/s655liu/Exam_Generator'
  },
  {
    id: 'chess',
    title: 'Majestic Chess: Tournament Edition',
    desc: 'High-performance C++ chess engine with Minimax AI.',
    image: '/Images/chess.png',
    tags: ['C++', 'Raylib'],
    link: 'https://github.com/s655liu/Chess'
  },
  {
    id: 'cc3k',
    title: 'CC3K-Villain (Final Premium)',
    desc: 'Graphical Rogue-lite dungeon crawler with smart AI.',
    image: '/Images/cc3k.png',
    tags: ['C++', 'olcPixelGameEngine'],
    link: 'https://github.com/s655liu/CC3K-Villain'
  }
]

export default function Projects() {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);

  const nextProject = () => setIndex((prev) => (prev + 1) % projects.length);
  const prevProject = () => setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  const project = projects[index];
  const baseUrl = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;

  return (
    <section id="projects" className="py-20 px-10 md:px-20 max-w-7xl mx-auto overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-mono uppercase tracking-widest mb-20 text-center"
      >
        <ScrambleText text={t('proj-title') || "Featured Projects"} delay={200} />
      </motion.h2>

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col lg:flex-row gap-12 items-center bg-[#121214] border border-white/5 p-8 md:p-12"
          >
            {/* Project Image */}
            <div className="lg:w-1/2 w-full aspect-video overflow-hidden border border-white/10 bg-[#08080a] flex items-center justify-center">
              <img
                src={`${baseUrl}${project.image.startsWith('/') ? project.image.slice(1) : project.image}`}
                alt={project.title}
                className={`w-full h-full ${project.fit === 'contain' ? 'object-contain p-2 md:p-4' : 'object-cover'} grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105`}
              />
            </div>

            {/* Project Content */}
            <div className="lg:w-1/2 w-full">
              <div className="flex justify-between items-start mb-6">
                <span className="text-primary font-mono text-sm tracking-widest">
                  PROJECT_0{index + 1}
                </span>
                <div className="flex gap-2">
                  <button onClick={prevProject} className="p-2 hover:bg-white/5 border border-white/10 transition-colors">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button onClick={nextProject} className="p-2 hover:bg-white/5 border border-white/10 transition-colors">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <h3 className="text-3xl md:text-4xl font-mono text-white mb-6 leading-tight">{project.title}</h3>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">{project.desc}</p>

              <div className="flex flex-wrap gap-3 mb-10">
                {project.tags.map(tag => (
                  <span key={tag} className="px-4 py-1.5 bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-[0.2em] text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 text-sm font-mono uppercase tracking-[0.3em] text-primary hover:text-white transition-all"
              >
                <span className="border-b border-primary group-hover:border-white pb-1">View Source</span>
                <span className="text-xl group-hover:translate-x-2 transition-transform">→</span>
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1 transition-all duration-300 ${i === index ? 'w-12 bg-primary' : 'w-4 bg-white/10'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
