import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowLeft, Search } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { staggerContainer, fadeInUp } from '../animations/variants';
import Footer from '../sections/Footer';
import { featuredProjects, otherProjects } from '../data/projects';
import ProjectModal from '../components/ProjectModal';

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [filter, setFilter] = useState('All');

  const filteredProjects = otherProjects.filter(project => {
    if (filter === 'All') return true;
    if (filter === 'Client Projects') return project.category === 'Client Project';
    if (filter === 'Web Applications') return project.category === 'Web Application' || project.type?.includes('Web Application');
    return true;
  });

  return (
    <div className="min-h-screen bg-background relative overflow-hidden selection:bg-accentGold selection:text-background flex flex-col">
      {/* Navigation */}
      <nav className="w-full p-6 lg:px-12 sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-surface">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-text hover:text-accentGold transition-colors font-medium group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
      </nav>

      <main className="flex-grow container mx-auto px-6 lg:px-12 py-20 relative z-10">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-24 max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-text mb-6">All Projects</h1>
          <p className="text-mutedText text-lg md:text-xl font-light leading-relaxed">
            A complete collection of software projects, academic work, experiments, and professional builds.
          </p>
        </motion.div>

        {/* Section 1: Featured Projects */}
        <div className="mb-32">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-text mb-16 text-center md:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            Featured Projects
            <div className="w-16 h-1 bg-accentGold rounded-full mt-4 mx-auto md:mx-0"></div>
          </motion.h2>

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
                  <motion.div variants={fadeInUp} className="w-full lg:w-3/5">
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
                      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accentGold/10 blur-3xl group-hover:bg-accentGold/20 transition-colors duration-700"></div>
                    </div>
                  </motion.div>

                  <motion.div variants={fadeInUp} className="w-full lg:w-2/5 flex flex-col">
                    {project.category && (
                      <span className="text-accentGold text-sm tracking-[0.2em] uppercase font-semibold mb-2">{project.category}</span>
                    )}
                    <h3 className="text-3xl md:text-4xl font-bold text-text mb-2">{project.title}</h3>
                    {project.subtitle && (
                      <p className="text-text/60 font-medium mb-6">{project.subtitle}</p>
                    )}
                    
                    <div className="clay-card p-6 mb-8 relative z-10 group">
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
        </div>

        {/* Section 2: Other Projects */}
        <div>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-text mb-8 text-center md:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            Other Projects
            <div className="w-16 h-1 bg-accentGold rounded-full mt-4 mx-auto md:mx-0"></div>
          </motion.h2>

          <motion.div 
            className="flex flex-wrap justify-center md:justify-start gap-4 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {['All', 'Client Projects', 'Web Applications'].map(filterOption => (
              <button 
                key={filterOption}
                onClick={() => setFilter(filterOption)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === filterOption 
                    ? 'bg-accentGold text-background shadow-[0_0_15px_rgba(212,175,55,0.4)]' 
                    : 'bg-surface border border-backgroundSecondary text-text hover:border-accentGold/50 hover:text-accentGold'
                }`}
              >
                {filterOption}
              </button>
            ))}
          </motion.div>

          <motion.div 
            key={filter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="clay-card p-6 flex flex-col h-full group hover:border-accentGold/30 transition-all duration-300"
              >
                <div className={`w-full h-40 rounded-xl ${!project.images?.length ? project.image : 'bg-background'} mb-6 relative overflow-hidden flex items-center justify-center border border-cardLight/30`}>
                  {project.images && project.images.length > 0 ? (
                    <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  ) : (
                    <>
                      <span className="text-text/60 font-serif tracking-widest uppercase z-10 text-xs">{project.title} Preview</span>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                    </>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold text-text mb-4 group-hover:text-accentGold transition-colors">{project.title}</h3>
                
                <p className="text-mutedText flex-grow mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-background text-accentGoldLight text-xs font-medium border border-surface">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 mt-auto">
                  {project.githubUrl && project.githubUrl !== '#' && (
                    <div className="relative group/source">
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center justify-center p-2.5 rounded-full bg-background text-text hover:text-accentGold hover:bg-surface border border-surface hover:scale-105 hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all duration-300"
                        aria-label="View Source Code"
                      >
                        <SiGithub className="w-4 h-4" />
                      </a>
                      <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-surface/90 backdrop-blur-md border border-accentGold/20 rounded-lg text-[10px] opacity-0 group-hover/source:opacity-100 transition-opacity pointer-events-none whitespace-nowrap text-accentGold font-medium z-50 shadow-xl">
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
                        className="flex items-center justify-center p-2.5 rounded-full bg-background text-text hover:text-accentGold hover:bg-surface border border-surface hover:scale-105 hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all duration-300"
                        aria-label="View Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-surface/90 backdrop-blur-md border border-accentGold/20 rounded-lg text-[10px] opacity-0 group-hover/demo:opacity-100 transition-opacity pointer-events-none whitespace-nowrap text-accentGold font-medium z-50 shadow-xl">
                        View Live Demo
                      </span>
                    </div>
                  )}
                  {project.hasDetails && (
                    <div className="relative group/details">
                      <button 
                        onClick={() => setSelectedProject(project)}
                        className="flex items-center justify-center p-2.5 rounded-full bg-background text-accentGold hover:text-background hover:bg-accentGold border border-accentGold/30 hover:border-accentGold hover:scale-105 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-300"
                        aria-label="Project Details"
                      >
                        <Search className="w-4 h-4" />
                      </button>
                      <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-surface/90 backdrop-blur-md border border-accentGold/20 rounded-lg text-[10px] opacity-0 group-hover/details:opacity-100 transition-opacity pointer-events-none whitespace-nowrap text-accentGold font-medium z-50 shadow-xl">
                        Project Details
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </main>
      
      <Footer />
      
      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}
