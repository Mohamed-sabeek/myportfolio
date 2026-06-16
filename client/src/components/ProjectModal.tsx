import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Monitor, Server, Database, Video } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import ImageLightbox from './ImageLightbox';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface ProjectModalProps {
  project: any;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  if (!project) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-md p-0 sm:p-6"
        >
          <motion.div
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="w-full h-full sm:h-auto sm:max-h-[90vh] max-w-5xl bg-surface sm:rounded-3xl border border-accentGold/20 shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header Sticky */}
            <div className="sticky top-0 z-20 bg-surface/90 backdrop-blur-xl border-b border-backgroundSecondary/50 p-6 flex justify-between items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-text font-serif">{project.title}</h2>
                {project.subtitle && <p className="text-accentGold text-sm mt-1">{project.subtitle}</p>}
              </div>
              <button
                onClick={onClose}
                className="p-3 rounded-full bg-background/50 text-text hover:bg-accentGold hover:text-background transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar pr-4 md:pr-8">
              
              {/* Section 1: Overview */}
              <div className="mb-16">
                <h3 className="text-xl font-bold text-text mb-4 border-b border-accentGold/20 pb-2 inline-block">Overview</h3>
                <p className="text-mutedText leading-relaxed text-lg font-light">
                  {project.id === 'arivon'
                    ? "Arivon is a full-stack AI-powered career intelligence platform designed for students and job seekers. The platform goes beyond traditional job portals by combining intelligent career matching, AI-generated recommendations, and structured skill validation. Users complete onboarding with their skills, interests, experience, and career goals. The system then analyzes their profile using a hybrid AI approach that combines backend scoring logic with LLM-powered reasoning to generate personalized career insights."
                    : project.id === 'sece-smartclass' 
                    ? "SECE SmartClass is a professional full-stack classroom management ecosystem designed to streamline institutional workflows, automate attendance tracking, and facilitate secure live virtual instruction."
                    : project.id === 'crack-it'
                    ? "CrackIt is a production-ready full-stack learning platform designed to help students prepare for competitive examinations through structured assessments, AI-assisted guidance, current affairs updates, and centralized study resources."
                    : project.id === 'al-safi-beda'
                    ? "Al Safi Beda is a professional business website developed for a homemade food brand specializing in traditional South Indian products such as Beda, Parotta, and Murtabak. The website was designed with a strong focus on user experience, visual appeal, and customer conversion. Visitors can explore product categories, view food galleries, read customer testimonials, learn about the business, and place orders instantly through WhatsApp. The project demonstrates frontend development skills, responsive design implementation, brand-focused UI/UX design, client requirement analysis, and production deployment practices."
                    : project.id === 'haaris-cakes'
                    ? "Haaris Cakes is a professional business website created for a home-based bakery in Aranthangi. The goal of the project was to establish a strong online presence, improve customer reach, and provide a simple platform where customers can explore products and contact the bakery directly. The website highlights the bakery's signature offerings including custom cakes, waffles, and brownies through a clean and visually engaging interface. Integrated Google Maps allows customers to easily locate the bakery, while WhatsApp and direct call features provide instant communication channels for inquiries and orders."
                    : project.description}
                </p>
              </div>

              {project.id === 'arivon' && (
                <>
                  {/* Gallery */}
                  {project.images && project.images.length > 0 && (
                    <div className="mb-16">
                      <h3 className="text-xl font-bold text-text mb-6 border-b border-accentGold/20 pb-2 inline-block">Project Gallery</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {project.images.map((img: string, idx: number) => (
                          <div 
                            key={idx} 
                            onClick={() => { setLightboxIndex(idx); setLightboxOpen(true); }}
                            className="aspect-video rounded-xl overflow-hidden cursor-pointer group border border-backgroundSecondary relative"
                          >
                            <img src={img} alt={`Gallery ${idx+1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <span className="text-white text-sm tracking-widest uppercase border border-white/50 px-4 py-2 rounded-full">View</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Core Features */}
                  <div className="mb-16">
                    <h3 className="text-xl font-bold text-text mb-6 border-b border-accentGold/20 pb-2 inline-block">Key Features</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "AI-Powered Career Matching Engine",
                        "Personalized Job Recommendations with logic explanation",
                        "Skill Gap Analysis and actionable feedback",
                        "AI Career Assistant powered by Groq (Llama 3)",
                        "Skill Verification System with 2 levels",
                        "Level 1: MCQ Assessment Engine",
                        "Level 2: GitHub Project Submission Workflow",
                        "Smart Dashboard & Analytics",
                        "Secure JWT Authentication",
                        "Responsive User Experience"
                      ].map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-accentGold mt-2 shrink-0" />
                          <span className="text-mutedText">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Architecture */}
                  <div className="mb-16">
                    <h3 className="text-xl font-bold text-text mb-6 border-b border-accentGold/20 pb-2 inline-block">Architecture</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-background rounded-2xl p-6 border border-surface">
                        <h4 className="text-accentGold font-medium mb-4 flex items-center gap-2"><Monitor className="w-4 h-4"/> Frontend</h4>
                        <ul className="text-sm text-mutedText space-y-2">
                          <li className="bg-surface px-3 py-2 rounded-lg">React 19</li>
                          <li className="bg-surface px-3 py-2 rounded-lg">Vite</li>
                          <li className="bg-surface px-3 py-2 rounded-lg">Tailwind CSS v4</li>
                          <li className="bg-surface px-3 py-2 rounded-lg">Axios & Router</li>
                        </ul>
                      </div>
                      
                      <div className="bg-background rounded-2xl p-6 border border-surface">
                        <h4 className="text-accentGold font-medium mb-4 flex items-center gap-2"><Server className="w-4 h-4"/> Backend & DB</h4>
                        <ul className="text-sm text-mutedText space-y-2">
                          <li className="bg-surface px-3 py-2 rounded-lg">Node.js</li>
                          <li className="bg-surface px-3 py-2 rounded-lg">Express.js</li>
                          <li className="bg-surface px-3 py-2 rounded-lg">MongoDB</li>
                          <li className="bg-surface px-3 py-2 rounded-lg">Mongoose ODM</li>
                        </ul>
                      </div>

                      <div className="bg-background rounded-2xl p-6 border border-surface">
                        <h4 className="text-accentGold font-medium mb-4 flex items-center gap-2"><Database className="w-4 h-4"/> AI Integration</h4>
                        <ul className="text-sm text-mutedText space-y-2">
                          <li className="bg-surface px-3 py-2 rounded-lg">Groq API</li>
                          <li className="bg-surface px-3 py-2 rounded-lg">Llama 3 LLM</li>
                          <li className="bg-surface px-3 py-2 rounded-lg">Hybrid AI Engine</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-16">
                    <h3 className="text-xl font-bold text-text mb-6 border-b border-accentGold/20 pb-2 inline-block">Highlights</h3>
                    <div className="flex flex-wrap gap-3">
                      {[
                        "AI-Powered Job Matching",
                        "Hybrid Recommendation Engine",
                        "Real-World Skill Validation",
                        "Full MERN Architecture",
                        "Career Guidance Assistant"
                      ].map((item, idx) => (
                        <span key={idx} className="bg-surface border border-backgroundSecondary px-4 py-2 rounded-xl text-sm text-mutedText">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Skill Verification */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-text mb-6 border-b border-accentGold/20 pb-2 inline-block">Skill Verification System</h3>
                    <div className="bg-gradient-to-br from-surface to-backgroundSecondary border border-accentGold/10 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-8 opacity-5">
                        <Monitor className="w-32 h-32" />
                      </div>
                      <h4 className="text-lg font-bold text-text mb-4 relative z-10">Two-Level Validation Flow</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                        <div>
                          <p className="text-accentGold text-sm uppercase tracking-widest mb-3">Level 1: Screening</p>
                          <ul className="space-y-2 text-mutedText text-sm">
                            <li>• MCQ-based knowledge assessment</li>
                            <li>• Evaluates theoretical understanding</li>
                            <li>• Dynamic question generation</li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-accentGold text-sm uppercase tracking-widest mb-3">Level 2: Practical</p>
                          <ul className="space-y-2 text-mutedText text-sm">
                            <li>• Real-world problem statement</li>
                            <li>• GitHub repository submission</li>
                            <li>• Validates industry readiness</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {project.id === 'sece-smartclass' && (
                <>
                  {/* Gallery */}
                  {project.images && project.images.length > 0 && (
                    <div className="mb-16">
                      <h3 className="text-xl font-bold text-text mb-6 border-b border-accentGold/20 pb-2 inline-block">Project Gallery</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {project.images.map((img: string, idx: number) => (
                          <div 
                            key={idx} 
                            onClick={() => { setLightboxIndex(idx); setLightboxOpen(true); }}
                            className="aspect-video rounded-xl overflow-hidden cursor-pointer group border border-backgroundSecondary relative"
                          >
                            <img src={img} alt={`Gallery ${idx+1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <span className="text-white text-sm tracking-widest uppercase border border-white/50 px-4 py-2 rounded-full">View</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Section 2: Core Features */}
                  <div className="mb-16">
                    <h3 className="text-xl font-bold text-text mb-6 border-b border-accentGold/20 pb-2 inline-block">Core Features</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "Multi-role architecture (Admin, Teacher, Student)",
                        "Automated attendance tracking",
                        "Jitsi Meet integration",
                        "Live virtual classrooms",
                        "Student analytics dashboard",
                        "Attendance reports",
                        "Excel export generation",
                        "PDF report generation",
                        "Cloudinary media management",
                        "Session lifecycle management",
                        "Time-bound class gatekeeping",
                        "Browser refresh recovery",
                        "Real-time attendance events"
                      ].map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-accentGold mt-2 shrink-0" />
                          <span className="text-mutedText">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Section 3: Architecture */}
                  <div className="mb-16">
                    <h3 className="text-xl font-bold text-text mb-6 border-b border-accentGold/20 pb-2 inline-block">Architecture</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-background rounded-2xl p-6 border border-surface">
                        <h4 className="text-accentGold font-medium mb-4 flex items-center gap-2"><Monitor className="w-4 h-4"/> Admin</h4>
                        <div className="text-sm text-mutedText flex flex-col gap-2">
                          <div className="bg-surface px-3 py-2 rounded-lg">Departments</div>
                          <div className="w-px h-3 bg-surface mx-auto"></div>
                          <div className="bg-surface px-3 py-2 rounded-lg">Classes</div>
                          <div className="w-px h-3 bg-surface mx-auto"></div>
                          <div className="bg-surface px-3 py-2 rounded-lg">Teacher Assignment</div>
                        </div>
                      </div>
                      
                      <div className="bg-background rounded-2xl p-6 border border-surface">
                        <h4 className="text-accentGold font-medium mb-4 flex items-center gap-2"><Video className="w-4 h-4"/> Teacher</h4>
                        <div className="text-sm text-mutedText flex flex-col gap-2">
                          <div className="bg-surface px-3 py-2 rounded-lg">Schedule Sessions</div>
                          <div className="w-px h-3 bg-surface mx-auto"></div>
                          <div className="bg-surface px-3 py-2 rounded-lg">Live Classroom</div>
                          <div className="w-px h-3 bg-surface mx-auto"></div>
                          <div className="bg-surface px-3 py-2 rounded-lg">Analytics</div>
                        </div>
                      </div>

                      <div className="bg-background rounded-2xl p-6 border border-surface">
                        <h4 className="text-accentGold font-medium mb-4 flex items-center gap-2"><Monitor className="w-4 h-4"/> Student</h4>
                        <div className="text-sm text-mutedText flex flex-col gap-2">
                          <div className="bg-surface px-3 py-2 rounded-lg">Join Session</div>
                          <div className="w-px h-3 bg-surface mx-auto"></div>
                          <div className="bg-surface px-3 py-2 rounded-lg">Attendance History</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4 text-sm font-medium text-mutedText">
                      <div className="flex items-center gap-2 bg-surface px-4 py-2 rounded-full"><Video className="w-4 h-4 text-accentGold"/> Jitsi Meet</div>
                      <div className="hidden md:block w-8 h-px bg-surface"></div>
                      <div className="flex items-center gap-2 bg-surface px-4 py-2 rounded-full"><Server className="w-4 h-4 text-accentGold"/> Node.js + Express</div>
                      <div className="hidden md:block w-8 h-px bg-surface"></div>
                      <div className="flex items-center gap-2 bg-surface px-4 py-2 rounded-full"><Database className="w-4 h-4 text-accentGold"/> MongoDB</div>
                    </div>
                  </div>

                  {/* Section 4: Technical Highlights */}
                  <div className="mb-16">
                    <h3 className="text-xl font-bold text-text mb-6 border-b border-accentGold/20 pb-2 inline-block">Technical Highlights</h3>
                    <div className="flex flex-wrap gap-3">
                      {[
                        "Event-driven attendance engine",
                        "IST timezone normalization",
                        "MongoDB reference-based academic relationships",
                        "Server-side pagination",
                        "Backend aggregated analytics",
                        "Database indexing strategy",
                        "Lazy-loaded React architecture",
                        "Cloudinary CDN optimization",
                        "Automated PDF and Excel generation"
                      ].map((item, idx) => (
                        <span key={idx} className="bg-surface border border-backgroundSecondary px-4 py-2 rounded-xl text-sm text-mutedText">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Section 5: Infrastructure Research */}
                  <div className="mb-16">
                    <h3 className="text-xl font-bold text-text mb-6 border-b border-accentGold/20 pb-2 inline-block">Infrastructure Research</h3>
                    <div className="bg-gradient-to-br from-surface to-backgroundSecondary border border-accentGold/10 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-8 opacity-5">
                        <Server className="w-32 h-32" />
                      </div>
                      <h4 className="text-lg font-bold text-text mb-4 relative z-10">Self-Hosted Jitsi Research</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                        <div>
                          <p className="text-accentGold text-sm uppercase tracking-widest mb-3">Tech Stack</p>
                          <ul className="space-y-2 text-mutedText text-sm">
                            <li>• Ubuntu Server 22.04</li>
                            <li>• VMware Workstation</li>
                            <li>• Prosody</li>
                            <li>• Jicofo</li>
                            <li>• Jitsi Videobridge</li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-accentGold text-sm uppercase tracking-widest mb-3">Purpose</p>
                          <ul className="space-y-2 text-mutedText text-sm">
                            <li>• Cost reduction research</li>
                            <li>• Self-hosted deployment feasibility</li>
                            <li>• Large classroom scalability testing</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 6: Deployment */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-text mb-6 border-b border-accentGold/20 pb-2 inline-block">Deployment</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <a href="https://sec-esmartclass.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-surface border border-accentGold/20 hover:border-accentGold/50 rounded-2xl p-6 transition-colors group flex items-center justify-between">
                        <div>
                          <p className="text-sm text-mutedText uppercase tracking-wider mb-1">Frontend</p>
                          <p className="text-text font-medium group-hover:text-accentGold transition-colors">Vercel Deployment</p>
                        </div>
                        <ExternalLink className="w-5 h-5 text-accentGold" />
                      </a>
                      <a href="https://sece-smartclass.onrender.com" target="_blank" rel="noopener noreferrer" className="bg-surface border border-accentGold/20 hover:border-accentGold/50 rounded-2xl p-6 transition-colors group flex items-center justify-between">
                        <div>
                          <p className="text-sm text-mutedText uppercase tracking-wider mb-1">Backend</p>
                          <p className="text-text font-medium group-hover:text-accentGold transition-colors">Render Deployment</p>
                        </div>
                        <ExternalLink className="w-5 h-5 text-accentGold" />
                      </a>
                    </div>
                  </div>
                </>
              )}

              {project.id === 'crack-it' && (
                <>
                  {/* Gallery */}
                  {project.images && project.images.length > 0 && (
                    <div className="mb-16">
                      <h3 className="text-xl font-bold text-text mb-6 border-b border-accentGold/20 pb-2 inline-block">Project Gallery</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {project.images.map((img: string, idx: number) => (
                          <div 
                            key={idx} 
                            onClick={() => { setLightboxIndex(idx); setLightboxOpen(true); }}
                            className="aspect-video rounded-xl overflow-hidden cursor-pointer group border border-backgroundSecondary relative"
                          >
                            <img src={img} alt={`Gallery ${idx+1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <span className="text-white text-sm tracking-widest uppercase border border-white/50 px-4 py-2 rounded-full">View</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Core Features */}
                  <div className="mb-16">
                    <h3 className="text-xl font-bold text-text mb-6 border-b border-accentGold/20 pb-2 inline-block">Key Features</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "Secure JWT-based authentication with role-based access control (Admin / Student)",
                        "Comprehensive student and administrator dashboards",
                        "Full-featured mock test engine with timer-based exam simulation",
                        "Detailed test attempt analysis and performance tracking",
                        "AI Mentor powered by Groq Llama 3.3 for personalized learning assistance",
                        "Study Materials repository for notes and learning resources",
                        "Previous Year Papers management",
                        "Current Affairs and Exam Update modules",
                        "Responsive premium dark-mode interface",
                        "Real-time progress monitoring and learning analytics"
                      ].map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-accentGold mt-2 shrink-0" />
                          <span className="text-mutedText">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Architecture */}
                  <div className="mb-16">
                    <h3 className="text-xl font-bold text-text mb-6 border-b border-accentGold/20 pb-2 inline-block">Architecture</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-background rounded-2xl p-6 border border-surface">
                        <h4 className="text-accentGold font-medium mb-4 flex items-center gap-2"><Monitor className="w-4 h-4"/> Frontend</h4>
                        <ul className="text-sm text-mutedText space-y-2">
                          <li className="bg-surface px-3 py-2 rounded-lg">React 19</li>
                          <li className="bg-surface px-3 py-2 rounded-lg">Vite</li>
                          <li className="bg-surface px-3 py-2 rounded-lg">Tailwind CSS v4</li>
                          <li className="bg-surface px-3 py-2 rounded-lg">Framer Motion</li>
                          <li className="bg-surface px-3 py-2 rounded-lg">Recharts</li>
                        </ul>
                      </div>
                      
                      <div className="bg-background rounded-2xl p-6 border border-surface">
                        <h4 className="text-accentGold font-medium mb-4 flex items-center gap-2"><Server className="w-4 h-4"/> Backend & DB</h4>
                        <ul className="text-sm text-mutedText space-y-2">
                          <li className="bg-surface px-3 py-2 rounded-lg">Node.js</li>
                          <li className="bg-surface px-3 py-2 rounded-lg">Express.js</li>
                          <li className="bg-surface px-3 py-2 rounded-lg">MongoDB Atlas</li>
                          <li className="bg-surface px-3 py-2 rounded-lg">Mongoose ODM</li>
                        </ul>
                      </div>

                      <div className="bg-background rounded-2xl p-6 border border-surface">
                        <h4 className="text-accentGold font-medium mb-4 flex items-center gap-2"><Database className="w-4 h-4"/> Services</h4>
                        <ul className="text-sm text-mutedText space-y-2">
                          <li className="bg-surface px-3 py-2 rounded-lg">JWT + bcryptjs Auth</li>
                          <li className="bg-surface px-3 py-2 rounded-lg">Groq API (Llama 3.3)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-16">
                    <h3 className="text-xl font-bold text-text mb-6 border-b border-accentGold/20 pb-2 inline-block">Highlights</h3>
                    <div className="flex flex-wrap gap-3">
                      {[
                        "Built using modern MERN architecture",
                        "AI-powered educational assistant integration",
                        "Scalable REST API backend",
                        "Role-based access management",
                        "Mobile-responsive learning experience"
                      ].map((item, idx) => (
                        <span key={idx} className="bg-surface border border-backgroundSecondary px-4 py-2 rounded-xl text-sm text-mutedText">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Future Enhancements */}
                  <div className="mb-16">
                    <h3 className="text-xl font-bold text-text mb-6 border-b border-accentGold/20 pb-2 inline-block">Future Enhancements</h3>
                    <div className="bg-gradient-to-br from-surface to-backgroundSecondary border border-accentGold/10 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-8 opacity-5">
                        <Monitor className="w-32 h-32" />
                      </div>
                      <h4 className="text-lg font-bold text-text mb-4 relative z-10">Roadmap</h4>
                      <ul className="space-y-3 text-mutedText text-sm relative z-10">
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full border border-accentGold/50 shrink-0"></div>
                          Peer-to-peer leaderboards
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full border border-accentGold/50 shrink-0"></div>
                          Video course integration
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full border border-accentGold/50 shrink-0"></div>
                          React Native mobile application
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Section 6: Deployment */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-text mb-6 border-b border-accentGold/20 pb-2 inline-block">Deployment</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <a href="https://crack-it-two.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-surface border border-accentGold/20 hover:border-accentGold/50 rounded-2xl p-6 transition-colors group flex items-center justify-between">
                        <div>
                          <p className="text-sm text-mutedText uppercase tracking-wider mb-1">Frontend</p>
                          <p className="text-text font-medium group-hover:text-accentGold transition-colors">Vercel Deployment</p>
                        </div>
                        <ExternalLink className="w-5 h-5 text-accentGold" />
                      </a>
                      <a href="https://crackit-1a7h.onrender.com" target="_blank" rel="noopener noreferrer" className="bg-surface border border-accentGold/20 hover:border-accentGold/50 rounded-2xl p-6 transition-colors group flex items-center justify-between">
                        <div>
                          <p className="text-sm text-mutedText uppercase tracking-wider mb-1">Backend</p>
                          <p className="text-text font-medium group-hover:text-accentGold transition-colors">Render Deployment</p>
                        </div>
                        <ExternalLink className="w-5 h-5 text-accentGold" />
                      </a>
                    </div>
                  </div>
                </>
              )}

              {project.id === 'al-safi-beda' && (
                <>
                  {/* Gallery */}
                  {project.images && project.images.length > 0 && (
                    <div className="mb-16">
                      <h3 className="text-xl font-bold text-text mb-6 border-b border-accentGold/20 pb-2 inline-block">Project Gallery</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {project.images.map((img: string, idx: number) => (
                          <div 
                            key={idx} 
                            onClick={() => { setLightboxIndex(idx); setLightboxOpen(true); }}
                            className="aspect-video rounded-xl overflow-hidden cursor-pointer group border border-backgroundSecondary relative"
                          >
                            <img src={img} alt={`Gallery ${idx+1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <span className="text-white text-sm tracking-widest uppercase border border-white/50 px-4 py-2 rounded-full">View</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Achievements */}
                  <div className="mb-16">
                    <h3 className="text-xl font-bold text-text mb-6 border-b border-accentGold/20 pb-2 inline-block">Key Achievements</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "Delivered a real client project",
                        "Successfully deployed to production",
                        "Implemented WhatsApp-based ordering workflow",
                        "Built fully responsive mobile and desktop experience",
                        "Improved online presence for a local business",
                        "Modern responsive landing page",
                        "Product showcase and pricing section",
                        "Food gallery with real product images",
                        "Customer testimonials section",
                        "Business story and brand presentation"
                      ].map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-accentGold mt-2 shrink-0" />
                          <span className="text-mutedText">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Project Metrics */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-text mb-6 border-b border-accentGold/20 pb-2 inline-block">Project Metrics</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-background rounded-2xl p-6 border border-surface text-center">
                        <p className="text-accentGold font-bold text-lg mb-1">Type</p>
                        <p className="text-sm text-mutedText">Real Client</p>
                      </div>
                      <div className="bg-background rounded-2xl p-6 border border-surface text-center">
                        <p className="text-accentGold font-bold text-lg mb-1">Layout</p>
                        <p className="text-sm text-mutedText">Fully Responsive</p>
                      </div>
                      <div className="bg-background rounded-2xl p-6 border border-surface text-center">
                        <p className="text-accentGold font-bold text-lg mb-1">Status</p>
                        <p className="text-sm text-mutedText">Production</p>
                      </div>
                      <div className="bg-background rounded-2xl p-6 border border-surface text-center">
                        <p className="text-accentGold font-bold text-lg mb-1">Workflow</p>
                        <p className="text-sm text-mutedText">WhatsApp Orders</p>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {project.id === 'haaris-cakes' && (
                <>
                  {/* Gallery */}
                  {project.images && project.images.length > 0 && (
                    <div className="mb-16">
                      <h3 className="text-xl font-bold text-text mb-6 border-b border-accentGold/20 pb-2 inline-block">Project Gallery</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {project.images.map((img: string, idx: number) => (
                          <div 
                            key={idx} 
                            onClick={() => { setLightboxIndex(idx); setLightboxOpen(true); }}
                            className="aspect-video rounded-xl overflow-hidden cursor-pointer group border border-backgroundSecondary relative"
                          >
                            <img src={img} alt={`Gallery ${idx+1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <span className="text-white text-sm tracking-widest uppercase border border-white/50 px-4 py-2 rounded-full">View</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Achievements */}
                  <div className="mb-16">
                    <h3 className="text-xl font-bold text-text mb-6 border-b border-accentGold/20 pb-2 inline-block">Key Achievements</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "Successfully delivered a client project",
                        "Deployed a live production website",
                        "Implemented WhatsApp and phone integrations",
                        "Integrated Google Maps for business visibility",
                        "Built a fully responsive user experience",
                        "Enhanced online presence for a local bakery business",
                        "Modern bakery-themed user interface",
                        "Product showcase section",
                        "One-click phone calling functionality",
                        "Fast and optimized performance"
                      ].map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-accentGold mt-2 shrink-0" />
                          <span className="text-mutedText">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Future Enhancements */}
                  <div className="mb-16">
                    <h3 className="text-xl font-bold text-text mb-6 border-b border-accentGold/20 pb-2 inline-block">Future Enhancements</h3>
                    <div className="bg-gradient-to-br from-surface to-backgroundSecondary border border-accentGold/10 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-8 opacity-5">
                        <Monitor className="w-32 h-32" />
                      </div>
                      <h4 className="text-lg font-bold text-text mb-4 relative z-10">Roadmap</h4>
                      <ul className="space-y-3 text-mutedText text-sm relative z-10">
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full border border-accentGold/50 shrink-0"></div>
                          Online ordering system
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full border border-accentGold/50 shrink-0"></div>
                          Payment gateway integration
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full border border-accentGold/50 shrink-0"></div>
                          Admin dashboard & Product gallery management
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Project Metrics */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-text mb-6 border-b border-accentGold/20 pb-2 inline-block">Project Metrics</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-background rounded-2xl p-6 border border-surface text-center">
                        <p className="text-accentGold font-bold text-lg mb-1">Type</p>
                        <p className="text-sm text-mutedText">Real Client</p>
                      </div>
                      <div className="bg-background rounded-2xl p-6 border border-surface text-center">
                        <p className="text-accentGold font-bold text-lg mb-1">Layout</p>
                        <p className="text-sm text-mutedText">Fully Responsive</p>
                      </div>
                      <div className="bg-background rounded-2xl p-6 border border-surface text-center">
                        <p className="text-accentGold font-bold text-lg mb-1">Status</p>
                        <p className="text-sm text-mutedText">Production</p>
                      </div>
                      <div className="bg-background rounded-2xl p-6 border border-surface text-center">
                        <p className="text-accentGold font-bold text-lg mb-1">Integrations</p>
                        <p className="text-sm text-mutedText">Maps & WhatsApp</p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Footer Sticky */}
            <div className="bg-surface border-t border-backgroundSecondary/50 p-6 flex items-center justify-end gap-4">
              {project.githubUrl && project.githubUrl !== '#' && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-background text-text hover:text-accentGold transition-colors border border-backgroundSecondary">
                  <SiGithub className="w-5 h-5" />
                  <span>Repository</span>
                </a>
              )}
              {project.liveUrl && project.liveUrl !== '#' && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-accentGold/10 text-accentGold hover:bg-accentGold hover:text-background transition-colors border border-accentGold/30">
                  <ExternalLink className="w-5 h-5" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Lightbox for Project Modal Images */}
      {project.images && project.images.length > 0 && (
        <ImageLightbox 
          images={project.images} 
          initialIndex={lightboxIndex} 
          isOpen={lightboxOpen} 
          onClose={() => setLightboxOpen(false)} 
        />
      )}
    </AnimatePresence>,
    document.body
  );
}
