import { useState } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../animations/variants';
import { ExternalLink, Search } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { featuredProjects } from '../data/projects';
import ProjectModal from '../components/ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section className="container mx-auto px-6 lg:px-12 relative z-10" id="projects">
      <motion.div 
        className="flex flex-col md:flex-row justify-between items-center md:items-end mb-20 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">Featured Projects</h2>
          <div className="w-20 h-1.5 bg-accentGold rounded-full mx-auto md:mx-0"></div>
        </div>
        
        <Link 
          to="/projects"
          className="group flex items-center gap-3 px-6 py-3 rounded-2xl bg-surface/50 backdrop-blur-md border border-accentGold/30 text-accentGold font-medium hover:bg-accentGold/10 hover:border-accentGold transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.05)] hover:shadow-[0_0_25px_rgba(212,175,55,0.15)]"
        >
          View All Projects
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </motion.div>

      <div className="flex flex-col gap-24">
        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <motion.div 
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              {/* Image Container */}
              <motion.div 
                variants={fadeInUp}
                className="w-full lg:w-3/5"
              >
                <div className="clay-bg p-4 md:p-6 group relative overflow-hidden border border-surface">
                  <div className={`w-full aspect-[4/3] sm:aspect-video rounded-xl ${!project.images?.length ? project.image : 'bg-background'} relative overflow-hidden shadow-inner flex items-center justify-center border border-cardLight/30`}>
                    {project.images && project.images.length > 0 ? (
                      <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    ) : (
                      <>
                        <div className="absolute inset-4 border border-backgroundSecondary/20 opacity-50"></div>
                        <span className="text-text/60 font-serif tracking-widest uppercase z-10 text-sm">{project.title} Preview</span>
                      </>
                    )}
                  </div>
                  
                  {/* Subtle luxury glow */}
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accentGold/10 blur-3xl group-hover:bg-accentGold/20 transition-colors duration-700"></div>
                </div>
              </motion.div>

              {/* Content Container */}
              <motion.div 
                variants={fadeInUp}
                className="w-full lg:w-2/5 flex flex-col"
              >
                {project.category && (
                  <span className="text-accentGold text-sm tracking-[0.2em] uppercase font-semibold mb-2">{project.category}</span>
                )}
                <h3 className="text-3xl md:text-4xl font-bold text-text mb-2">{project.title}</h3>
                {project.subtitle && (
                  <p className="text-text/60 font-medium mb-6">{project.subtitle}</p>
                )}
                
                <div className="clay-card p-6 mb-8 relative z-10 -ml-0 lg:-ml-12 lg:mr-0 group">
                  <p className="text-mutedText leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-4 py-1.5 rounded-full bg-surface text-accentGoldLight text-sm shadow-clay font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 flex-wrap items-center">
                  {project.githubUrl && project.githubUrl !== '#' && (
                    <div className="relative group/source">
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex p-3 rounded-full bg-surface text-text hover:text-accentGold hover:bg-card hover:scale-105 hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all duration-300 shadow-clay outline-none focus-visible:ring-2 focus-visible:ring-accentGold"
                        aria-label="View Source Code"
                      >
                        <SiGithub className="w-5 h-5" />
                      </a>
                      <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-surface/90 backdrop-blur-md border border-accentGold/20 rounded-lg text-xs opacity-0 group-hover/source:opacity-100 transition-opacity pointer-events-none whitespace-nowrap text-accentGold font-medium z-50 shadow-xl">
                        View Source Code
                      </span>
                    </div>
                  )}

                  {project.liveUrl && project.liveUrl !== '#' && (
                    <div className="relative group/demo">
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex p-3 rounded-full bg-surface text-text hover:text-accentGold hover:bg-card hover:scale-105 hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all duration-300 shadow-clay outline-none focus-visible:ring-2 focus-visible:ring-accentGold"
                        aria-label="View Live Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-surface/90 backdrop-blur-md border border-accentGold/20 rounded-lg text-xs opacity-0 group-hover/demo:opacity-100 transition-opacity pointer-events-none whitespace-nowrap text-accentGold font-medium z-50 shadow-xl">
                        View Live Demo
                      </span>
                    </div>
                  )}

                  {project.hasDetails && (
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-2 px-6 py-3 rounded-full bg-surface/50 border border-accentGold/20 text-accentGold hover:bg-accentGold/10 hover:border-accentGold hover:scale-105 hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all duration-300 shadow-clay outline-none focus-visible:ring-2 focus-visible:ring-accentGold"
                    >
                      <Search className="w-4 h-4" />
                      <span className="font-medium">Project Details</span>
                    </button>
                  )}
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
