import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SiReact, 
  SiTailwindcss, 
  SiJavascript, 
  SiTypescript, 
  SiNodedotjs, 
  SiExpress, 
  SiDjango, 
  SiPython, 
  SiMongodb, 
  SiMysql, 
  SiDocker, 
  SiKubernetes, 
  SiGit, 
  SiGithub,
  SiHtml5,
  SiPostgresql,
  SiPostman,
  SiFirebase,
  SiSpringboot,
  SiFastapi
} from 'react-icons/si';
import { FaAws, FaJava, FaCss3Alt } from 'react-icons/fa';
import { staggerContainer } from '../animations/variants';

const technologies = [
  { name: 'React', icon: SiReact, color: '#61DAFB', experience: '4+ Years', projects: '15+ Projects', desc: 'Building modern component-based user interfaces with reusable architecture and responsive design principles.' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', experience: '3+ Years', projects: '20+ Projects', desc: 'Utility-first CSS framework for rapid and highly customizable styling.' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', experience: '5+ Years', projects: '30+ Projects', desc: 'Core language for interactive and dynamic web experiences.' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', experience: '3+ Years', projects: '10+ Projects', desc: 'Strongly typed programming language that builds on JavaScript.' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933', experience: '4+ Years', projects: '15+ Projects', desc: 'Asynchronous event-driven JavaScript runtime for scalable backend services.' },
  { name: 'Express.js', icon: SiExpress, color: '#FFFFFF', experience: '4+ Years', projects: '15+ Projects', desc: 'Fast, unopinionated, minimalist web framework for Node.js.' },
  { name: 'Django', icon: SiDjango, color: '#44B78B', experience: '2+ Years', projects: '5+ Projects', desc: 'High-level Python web framework that encourages rapid development.' },
  { name: 'Python', icon: SiPython, gradient: 'url(#python-gradient)', experience: '3+ Years', projects: '10+ Projects', desc: 'Versatile language for backend logic, data analysis, and scripting.' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248', experience: '4+ Years', projects: '15+ Projects', desc: 'Document-based NoSQL database for modern scalable applications.' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1', experience: '3+ Years', projects: '10+ Projects', desc: 'Reliable and mature open-source relational database management system.' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED', experience: '2+ Years', projects: '8+ Projects', desc: 'Platform for developing, shipping, and running applications in containers.' },
  { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5', experience: '1+ Year', projects: '3+ Projects', desc: 'Automating deployment, scaling, and management of containerized applications.' },
  { name: 'Git', icon: SiGit, color: '#F05032', experience: '5+ Years', projects: 'All Projects', desc: 'Distributed version control system for tracking changes in source code.' },
  { name: 'GitHub', icon: SiGithub, color: '#FFFFFF', experience: '5+ Years', projects: 'All Projects', desc: 'Platform for hosting, collaborating, and managing software projects.' },
  { name: 'AWS', icon: FaAws, color: '#FF9900', experience: '2+ Years', projects: '6+ Projects', desc: 'Comprehensive and broadly adopted cloud platform for deployment.' },
  { name: 'Java', icon: FaJava, gradient: 'url(#java-gradient)', experience: '2+ Years', projects: '5+ Projects', desc: 'Object-oriented programming language for robust and scalable systems.' },
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26', experience: '5+ Years', projects: '30+ Projects', desc: 'Standard markup language for creating the structure of web pages.' },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6', experience: '5+ Years', projects: '30+ Projects', desc: 'Style sheet language for designing and formatting web presentations.' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', experience: '2+ Years', projects: '8+ Projects', desc: 'Advanced, enterprise-class open-source relational database system.' },
  { name: 'Firebase', icon: SiFirebase, gradient: 'url(#firebase-gradient)', experience: '3+ Years', projects: '10+ Projects', desc: 'Comprehensive app development platform with real-time backend services.' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37', experience: '3+ Years', projects: '20+ Projects', desc: 'Industry-standard API platform for designing, building, and testing APIs.' },
  { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F', experience: '1+ Year', projects: '3+ Projects', desc: 'Framework for creating stand-alone, production-grade Spring based applications.' },
  { name: 'FastAPI', icon: SiFastapi, color: '#009688', experience: '1+ Year', projects: '3+ Projects', desc: 'Modern, fast web framework for building APIs with Python.' }
];

export default function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Calculate opacity based on proximity to selected icon
  const getOpacity = (index: number) => {
    if (hoveredIndex === null) return 1;
    if (index === hoveredIndex) return 1;
    if (Math.abs(index - hoveredIndex) === 1) return 0.7;
    return 0.4;
  };

  return (
    <section className="relative z-10 overflow-hidden" id="skills">
      {/* SVG Gradients for Multi-color Icons */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="python-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="50%" stopColor="#3776AB" />
            <stop offset="50%" stopColor="#FFD43B" />
          </linearGradient>
          <linearGradient id="java-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="45%" stopColor="#F89820" />
            <stop offset="45%" stopColor="#5382A1" />
          </linearGradient>
          <linearGradient id="firebase-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFCA28" />
            <stop offset="50%" stopColor="#FFA000" />
            <stop offset="100%" stopColor="#DD2C00" />
          </linearGradient>
        </defs>
      </svg>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[1000px] h-[1000px] bg-accentGold/5 rounded-full blur-[150px] -translate-y-1/2 -translate-x-1/2 mix-blend-screen"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-accentGold tracking-[0.2em] text-xs font-semibold uppercase mb-4 block">
            Technology Ecosystem
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-text font-serif">
            Technical Arsenal
          </h2>
          <p className="mt-6 text-mutedText max-w-2xl mx-auto font-light text-lg">
            The technologies, frameworks, and tools I use to build modern digital experiences.
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scroll Ecosystem */}
      <div className="w-full relative px-6 md:px-12 -mt-20">
        <div className="flex gap-8 md:gap-12 overflow-x-auto snap-x snap-mandatory pb-32 pt-64 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <motion.div 
            className="flex gap-8 md:gap-16 w-max px-[5vw] md:px-[15vw] items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={index}
                  className="relative snap-center shrink-0"
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{ opacity: getOpacity(index), transition: 'opacity 0.4s ease-in-out' }}
                >
                  {/* Floating Animation Wrapper */}
                  <motion.div
                    animate={{ y: [-8, 8, -8] }}
                    transition={{
                      duration: 4 + (index % 4), // Variations between 4s and 7s
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2
                    }}
                    className="relative group"
                  >
                    {/* Tooltip Card */}
                    <AnimatePresence>
                      {hoveredIndex === index && (
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.3, type: "spring", bounce: 0.4 }}
                          className="absolute bottom-full mb-8 left-1/2 -translate-x-1/2 w-72 p-6 rounded-2xl bg-surface/90 backdrop-blur-xl border border-accentGold/30 shadow-[0_20px_40px_rgba(0,0,0,0.4)] z-50 pointer-events-none flex flex-col"
                        >
                          <h4 className="text-xl font-serif text-text mb-4">{tech.name}</h4>
                          <p className="text-sm text-mutedText font-light leading-relaxed">
                            {tech.desc}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Icon Container (App Icon Style) */}
                    <motion.div 
                      whileHover={{ scale: 1.15, y: -12, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="w-24 h-24 md:w-32 md:h-32 rounded-[2rem] bg-gradient-to-br from-surface/80 to-backgroundSecondary/80 backdrop-blur-md border border-accentGold/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center cursor-none hover:border-accentGold/60 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:bg-surface transition-colors duration-300 relative overflow-hidden"
                    >
                      {/* Ripple pulse on hover */}
                      <div className="absolute inset-0 bg-accentGold/10 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
                      
                      <Icon 
                        className={`w-12 h-12 md:w-16 md:h-16 transition-colors duration-300 relative z-10 ${tech.color || tech.gradient ? '' : 'text-text group-hover:text-accentGold'}`} 
                        style={tech.gradient ? { fill: tech.gradient } : (tech.color ? { color: tech.color } : {})}
                      />
                    </motion.div>

                    <div className="text-center mt-6">
                      <span className="text-sm md:text-base font-light text-text/80 tracking-wide group-hover:text-accentGold transition-colors duration-300">
                        {tech.name}
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
