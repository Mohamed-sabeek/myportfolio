import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../animations/variants';
import { Lightbulb, Compass, Code2, Target } from 'lucide-react';

export default function About() {

  const stats = [
    { label: "Projects Completed", value: "30+" },
    { label: "Technologies Explored", value: "20+" },
    { label: "Years of Learning", value: "4+" },
    { label: "Certifications Earned", value: "5+" }
  ];

  const philosophies = [
    { icon: Lightbulb, title: "Problem Solver", desc: "Turning complex challenges into intuitive solutions." },
    { icon: Compass, title: "Continuous Learner", desc: "Constantly exploring new technologies and best practices." },
    { icon: Code2, title: "Builder Mindset", desc: "Focused on creating products that deliver real value." },
    { icon: Target, title: "Attention to Detail", desc: "Balancing functionality, performance, and aesthetics." }
  ];

  return (
    <section className="container mx-auto px-6 lg:px-12 relative z-10" id="about">
      <motion.div 
        className="relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-accentGold/5 rounded-full blur-[150px] -translate-y-1/2 -translate-x-1/2 pointer-events-none z-0"></div>

        <div className="flex flex-col lg:flex-row gap-16 relative z-10">
          
          {/* Left Side: Story & Journey */}
          <motion.div variants={fadeInUp} className="w-full lg:w-5/12 flex flex-col">
            <div className="mb-10">
              <span className="text-accentGold tracking-[0.2em] text-xs font-semibold uppercase mb-4 block">
                The Journey
              </span>
              <h2 className="text-5xl md:text-6xl font-light text-text font-serif mb-8 leading-tight">
                About Me
              </h2>
              
              <div className="space-y-6 text-mutedText text-lg leading-relaxed font-light">
                <p>
                  I am a passionate Software Engineer focused on crafting premium digital experiences. 
                  My approach blends meticulous <strong className="font-normal text-text">Full Stack Development</strong> with 
                  high-end <strong className="font-normal text-text">UI/UX principles</strong>, ensuring 
                  that every application I build is both performant and visually captivating.
                </p>
                <p>
                  Driven by a love for problem-solving and scalability, I see code as a canvas. 
                  From architecting robust backends to designing seamless user interfaces, 
                  I am dedicated to continuous learning and elevating the standard of modern web applications.
                </p>
              </div>
            </div>

          </motion.div>

          {/* Right Side: Philosophy & Stats */}
          <motion.div variants={fadeInUp} className="w-full lg:w-7/12 flex flex-col gap-6 pt-4 lg:pt-0">
            
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="clay-card p-6 border border-surface group hover:border-accentGold/30 transition-all duration-500 hover:-translate-y-1 flex flex-col justify-center items-center text-center">
                  <div className="text-3xl font-light text-text mb-2 font-serif group-hover:text-accentGold transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-mutedText font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Developer Philosophy Grid */}
            <div className="mt-2">
              <h3 className="text-xs uppercase tracking-[0.2em] text-accentGold mb-6 font-semibold flex items-center gap-3">
                <span className="w-8 h-px bg-accentGold/50"></span>
                Developer Philosophy
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {philosophies.map((philosophy, idx) => {
                  const Icon = philosophy.icon;
                  return (
                    <div key={idx} className="clay-card p-6 flex items-start gap-5 border border-surface group hover:border-accentGold/30 transition-all duration-500 hover:-translate-y-1">
                      <div className="p-3 bg-backgroundSecondary border border-surface rounded-xl text-accentGold group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-inner">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-text font-medium mb-1.5 tracking-wide">{philosophy.title}</h4>
                        <p className="text-sm text-mutedText font-light leading-relaxed">{philosophy.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
