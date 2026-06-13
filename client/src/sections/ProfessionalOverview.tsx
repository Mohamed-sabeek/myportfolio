import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { staggerContainer } from '../animations/variants';
import { GraduationCap, Briefcase, Code, Terminal, ExternalLink, Sparkles, Server, Cloud, Container, Award } from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';

// Counter Component for animating numbers
const AnimatedNumber = ({ value, decimals = 0, suffix = '' }: { value: number, decimals?: number, suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 50, damping: 20 });
  const displayValue = useTransform(springValue, (current) => current.toFixed(decimals) + suffix);

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
};

// Spotlight Card Component
const SpotlightCard = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`relative group bg-surface/40 backdrop-blur-xl border border-card shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_40px_rgba(212,175,55,0.1)] rounded-[2rem] p-8 overflow-hidden transition-all duration-300 ${className}`}
    >
      <div 
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(212,175,55,0.1), transparent 40%)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-accentGold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Decorative Accent Line */}
      <div className="absolute top-0 left-8 w-0 h-[2px] bg-accentGold group-hover:w-16 transition-all duration-500 ease-out"></div>

      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  );
};

export default function ProfessionalOverview() {
  return (
    <section className="container mx-auto px-6 lg:px-12 relative z-10" id="overview">
      {/* Ambient Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accentGold/5 rounded-full blur-[150px] pointer-events-none -z-10 mix-blend-screen"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accentGold/5 rounded-full blur-[150px] pointer-events-none -z-10 mix-blend-screen"></div>

      <motion.div 
        className="text-center mb-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="text-accentGold tracking-[0.2em] text-xs font-semibold uppercase mb-4 block">
          Profile
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-text font-serif mb-6">
          Professional Overview
        </h2>
        {/* Animated Divider */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
          className="w-24 h-1 bg-accentGold rounded-full mx-auto mb-8 origin-center"
        ></motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-mutedText max-w-2xl mx-auto font-light text-lg"
        >
          A concise snapshot of my academic journey, practical experience, coding achievements, and professional focus.
        </motion.p>
      </motion.div>

      {/* Bento Grid */}
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        {/* 1. Education */}
        <motion.div variants={{ hidden: { opacity: 0, y: 60, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 50, damping: 20 } } }} className="h-full">
          <SpotlightCard>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-accentGold/10 flex items-center justify-center text-accentGold border border-accentGold/20 group-hover:rotate-12 transition-transform duration-500">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif text-text group-hover:text-accentGold transition-colors">Education</h3>
            </div>
            
            <div className="mb-8">
              <h4 className="text-xl font-medium text-text mb-2">Sri Eshwar College of Engineering</h4>
              <p className="text-accentGold font-medium tracking-wide uppercase text-sm mb-4">B.Tech Information Technology</p>
              
              <div className="flex justify-between items-center bg-backgroundSecondary/50 p-4 rounded-xl border border-card">
                <span className="text-mutedText">Current CGPA</span>
                <span className="text-3xl font-serif text-accentGold"><AnimatedNumber value={8.14} decimals={2} /></span>
              </div>
              <p className="text-mutedText text-sm mt-3 text-right">2024 – 2028</p>
            </div>

            <div className="mt-auto">
              <h5 className="text-sm font-semibold text-text uppercase tracking-widest mb-4">Academic Highlights</h5>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-backgroundSecondary/30 p-4 rounded-xl border border-card/50 text-center group-hover:border-accentGold/30 transition-colors">
                  <span className="block text-xs text-mutedText uppercase mb-1">HSC</span>
                  <span className="text-2xl font-serif text-text"><AnimatedNumber value={92} suffix="%" /></span>
                </div>
                <div className="bg-backgroundSecondary/30 p-4 rounded-xl border border-card/50 text-center group-hover:border-accentGold/30 transition-colors">
                  <span className="block text-xs text-mutedText uppercase mb-1">SSLC</span>
                  <span className="text-2xl font-serif text-text"><AnimatedNumber value={94} suffix="%" /></span>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* 2. Internship Experience */}
        <motion.div variants={{ hidden: { opacity: 0, y: 60, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 50, damping: 20 } } }} className="h-full">
          <SpotlightCard>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-accentGold/10 flex items-center justify-center text-accentGold border border-accentGold/20 group-hover:rotate-12 transition-transform duration-500">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif text-text group-hover:text-accentGold transition-colors">Internship Experience</h3>
            </div>

            <div className="mb-8">
              <h4 className="text-2xl font-medium text-text mb-2">MERN Stack Intern</h4>
              <p className="text-accentGold font-medium tracking-wide uppercase text-sm mb-1">iGenuine Learning</p>
              <p className="text-mutedText text-sm">December 2025</p>
            </div>

            <div className="mt-auto">
              <h5 className="text-sm font-semibold text-text uppercase tracking-widest mb-4">Highlights</h5>
              <ul className="space-y-4">
                {[
                  "Completed MERN Stack Internship",
                  "Built modern web applications",
                  "Strengthened full stack development skills",
                  "Gained practical industry exposure"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accentGold shrink-0"></span>
                    <span className="text-mutedText font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* 3. Coding Profiles */}
        <motion.div variants={{ hidden: { opacity: 0, y: 60, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 50, damping: 20 } } }} className="h-full">
          <SpotlightCard>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-accentGold/10 flex items-center justify-center text-accentGold border border-accentGold/20 group-hover:-rotate-12 transition-transform duration-500">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif text-text group-hover:text-accentGold transition-colors">Coding Profiles</h3>
            </div>

            <div className="flex flex-col gap-6">
              {/* LeetCode */}
              <div className="group/profile bg-backgroundSecondary/40 p-5 md:p-6 rounded-2xl border border-card hover:border-accentGold/40 hover:shadow-[0_8px_30px_rgba(212,175,55,0.1)] transition-all duration-300 hover:-translate-y-1 mb-6">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FFA116]/10 flex items-center justify-center text-[#FFA116] shrink-0 border border-[#FFA116]/20">
                      <SiLeetcode className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-text leading-tight">LeetCode</h4>
                      <span className="text-[10px] uppercase tracking-widest text-accentGold font-semibold">Competitive Programming & Problem Solving</span>
                    </div>
                  </div>
                  <a href="https://leetcode.com/u/Yn7yECNe5s/" target="_blank" rel="noopener noreferrer" className="text-mutedText hover:text-accentGold transition-colors p-2 -mr-2 -mt-2">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <div className="mb-6 pb-6 border-b border-card">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
                    <div>
                      <span className="block text-4xl md:text-5xl font-serif text-text group-hover/profile:text-[#FFA116] transition-colors"><AnimatedNumber value={131} /></span>
                      <span className="text-xs text-mutedText uppercase tracking-widest font-semibold mt-2 block">Problems Solved</span>
                    </div>
                    <div className="sm:text-right">
                      <div className="inline-block px-4 py-2 rounded-xl bg-surface/50 border border-card">
                        <span className="text-[9px] uppercase tracking-widest text-mutedText block mb-1">Most Recent Badge</span>
                        <span className="text-xs font-semibold text-text flex items-center gap-1.5"><Award className="w-3.5 h-3.5 text-[#FFA116]" /> SQL Top 50</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="bg-background/50 hover:bg-surface border border-transparent hover:border-accentGold/30 transition-all rounded-xl p-3 text-center group/stat">
                    <span className="block text-lg font-medium text-text group-hover/stat:text-accentGold transition-colors"><AnimatedNumber value={1414} /></span>
                    <span className="text-[9px] text-mutedText uppercase tracking-wider mt-1 block">Contest Rating</span>
                  </div>
                  <div className="bg-background/50 hover:bg-surface border border-transparent hover:border-accentGold/30 transition-all rounded-xl p-3 text-center group/stat">
                    <span className="block text-lg font-medium text-text group-hover/stat:text-accentGold transition-colors"><AnimatedNumber value={78.31} decimals={2} suffix="%" /></span>
                    <span className="text-[9px] text-mutedText uppercase tracking-wider mt-1 block">Top Ranking</span>
                  </div>
                  <div className="bg-background/50 hover:bg-surface border border-transparent hover:border-accentGold/30 transition-all rounded-xl p-3 text-center group/stat">
                    <span className="block text-lg font-medium text-[#00b8a3] transition-transform"><AnimatedNumber value={95} /></span>
                    <span className="text-[9px] text-mutedText uppercase tracking-wider mt-1 block">Easy</span>
                  </div>
                  <div className="bg-background/50 hover:bg-surface border border-transparent hover:border-accentGold/30 transition-all rounded-xl p-3 text-center group/stat">
                    <span className="block text-lg font-medium text-[#ffc01e] transition-transform"><AnimatedNumber value={34} /></span>
                    <span className="text-[9px] text-mutedText uppercase tracking-wider mt-1 block">Medium</span>
                  </div>
                  <div className="bg-background/50 hover:bg-surface border border-transparent hover:border-accentGold/30 transition-all rounded-xl p-3 text-center group/stat">
                    <span className="block text-lg font-medium text-[#ff375f] transition-transform"><AnimatedNumber value={2} /></span>
                    <span className="text-[9px] text-mutedText uppercase tracking-wider mt-1 block">Hard</span>
                  </div>
                  <div className="bg-background/50 hover:bg-surface border border-transparent hover:border-accentGold/30 transition-all rounded-xl p-3 text-center group/stat">
                    <span className="block text-lg font-medium text-text group-hover/stat:text-accentGold transition-colors"><AnimatedNumber value={225} suffix="+" /></span>
                    <span className="text-[9px] text-mutedText uppercase tracking-wider mt-1 block">Yearly Subs</span>
                  </div>
                </div>
              </div>

              {/* SkillRack */}
              <div className="group/profile bg-backgroundSecondary/40 p-5 md:p-6 rounded-2xl border border-card hover:border-accentGold/40 hover:shadow-[0_8px_30px_rgba(212,175,55,0.1)] transition-all duration-300 hover:-translate-y-1">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accentGold/20 flex items-center justify-center text-accentGold shrink-0">
                      <Terminal className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-text leading-tight">SkillRack</h4>
                      <span className="text-[10px] uppercase tracking-widest text-accentGold font-semibold">Top Coding Practice Platform</span>
                    </div>
                  </div>
                  <a href="https://www.skillrack.com/faces/resume.xhtml?id=515472&key=d180f70d334d6217e79b0cb1d7657530de1f4a8f" target="_blank" rel="noopener noreferrer" className="text-mutedText hover:text-accentGold transition-colors p-2 -mr-2 -mt-2">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                
                <div className="mb-6 pb-6 border-b border-card">
                  <span className="block text-4xl md:text-5xl font-serif text-text group-hover/profile:text-accentGold transition-colors"><AnimatedNumber value={1164} suffix="+" /></span>
                  <span className="text-xs text-mutedText uppercase tracking-widest font-semibold mt-2 block">Programs Solved</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="bg-background/50 hover:bg-surface border border-transparent hover:border-accentGold/30 transition-all rounded-xl p-3 text-center group/stat">
                    <span className="block text-lg font-medium text-text group-hover/stat:text-accentGold transition-colors"><AnimatedNumber value={16700} /></span>
                    <span className="text-[9px] text-mutedText uppercase tracking-wider mt-1 block">Current Rank</span>
                  </div>
                  <div className="bg-background/50 hover:bg-surface border border-transparent hover:border-accentGold/30 transition-all rounded-xl p-3 text-center group/stat">
                    <span className="block text-lg font-medium text-text group-hover/stat:text-accentGold transition-colors"><AnimatedNumber value={823} /></span>
                    <span className="text-[9px] text-mutedText uppercase tracking-wider mt-1 block">Code Track</span>
                  </div>
                  <div className="bg-background/50 hover:bg-surface border border-transparent hover:border-accentGold/30 transition-all rounded-xl p-3 text-center group/stat">
                    <span className="block text-lg font-medium text-text group-hover/stat:text-accentGold transition-colors"><AnimatedNumber value={37} /></span>
                    <span className="text-[9px] text-mutedText uppercase tracking-wider mt-1 block">Code Test</span>
                  </div>
                  <div className="bg-background/50 hover:bg-surface border border-transparent hover:border-accentGold/30 transition-all rounded-xl p-3 text-center group/stat">
                    <span className="block text-lg font-medium text-text group-hover/stat:text-accentGold transition-colors"><AnimatedNumber value={304} /></span>
                    <span className="text-[9px] text-mutedText uppercase tracking-wider mt-1 block">Code Tutor</span>
                  </div>
                  <div className="bg-background/50 hover:bg-surface border border-transparent hover:border-accentGold/30 transition-all rounded-xl p-3 text-center group/stat">
                    <span className="block text-lg font-medium text-text group-hover/stat:text-accentGold transition-colors"><AnimatedNumber value={15} /></span>
                    <span className="text-[9px] text-mutedText uppercase tracking-wider mt-1 block">Certificates</span>
                  </div>
                  <div className="bg-background/50 hover:bg-surface border border-transparent hover:border-accentGold/30 transition-all rounded-xl p-3 text-center group/stat">
                    <span className="block text-lg font-medium text-[#CD7F32] transition-transform"><AnimatedNumber value={319} /></span>
                    <span className="text-[9px] text-mutedText uppercase tracking-wider mt-1 block">Bronze Medals</span>
                  </div>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* 4. Interests & Focus */}
        <motion.div variants={{ hidden: { opacity: 0, y: 60, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 50, damping: 20 } } }} className="h-full">
          <SpotlightCard>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-accentGold/10 flex items-center justify-center text-accentGold border border-accentGold/20 group-hover:rotate-12 transition-transform duration-500">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif text-text group-hover:text-accentGold transition-colors">Interests & Focus</h3>
            </div>

            <div className="mb-10">
              <h5 className="text-sm font-semibold text-text uppercase tracking-widest mb-6 flex items-center gap-2">
                <Server className="w-4 h-4 text-accentGold" /> Areas of Interest
              </h5>
              <div className="flex flex-wrap gap-3">
                {[
                  "Full Stack Development",
                  "Cloud Computing",
                  "DevOps",
                  "Scalable Systems"
                ].map((tag, i) => (
                  <motion.span 
                    key={i}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 bg-backgroundSecondary border border-card rounded-full text-sm text-mutedText hover:text-accentGold hover:border-accentGold/50 hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all cursor-default"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="mt-auto">
              <h5 className="text-sm font-semibold text-text uppercase tracking-widest mb-6 flex items-center gap-2">
                <Cloud className="w-4 h-4 text-accentGold" /> Currently Exploring
              </h5>
              <div className="flex flex-wrap gap-3">
                {[
                  "Kubernetes",
                  "AWS",
                  "System Design",
                  "Production Architecture"
                ].map((tag, i) => (
                  <motion.span 
                    key={i}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 bg-accentGold/5 border border-accentGold/20 rounded-full text-sm text-text hover:bg-accentGold/10 hover:border-accentGold hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all cursor-default flex items-center gap-2"
                  >
                    <Container className="w-3 h-3 text-accentGold" />
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </SpotlightCard>
        </motion.div>

      </motion.div>
    </section>
  );
}
