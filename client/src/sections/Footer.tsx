import { motion } from 'framer-motion';
import { Mail, Terminal } from 'lucide-react';
import { SiGithub, SiLeetcode } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

const socialLinks = [
  { name: 'GitHub', icon: SiGithub, url: 'https://github.com/Mohamed-sabeek' },
  { name: 'LinkedIn', icon: FaLinkedin, url: 'https://www.linkedin.com/in/mohamed-sabeek-1a272a327/' },
  { name: 'LeetCode', icon: SiLeetcode, url: 'https://leetcode.com/u/Yn7yECNe5s/' },
  { name: 'SkillRack', icon: Terminal, url: 'https://www.skillrack.com/faces/resume.xhtml?id=515472&key=d180f70d334d6217e79b0cb1d7657530de1f4a8f' },
  { name: 'Email', icon: Mail, url: 'mailto:safeeofficial1730@gmail.com' }
];

export default function Footer() {
  return (
    <footer className="w-full relative z-10 overflow-hidden mt-10">
      {/* Subtle gold divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-accentGold/30 to-transparent"></div>
      
      <div className="w-full bg-background/80 backdrop-blur-xl pt-16 pb-12">
        <motion.div 
          className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center md:items-start gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Left Side: Brand Info */}
          <div className="text-center md:text-left max-w-sm">
            <h3 className="text-2xl font-serif text-text mb-2 group">
              Mohamed <span className="text-accentGold transition-colors duration-300">Sabeek H</span>
            </h3>
            <p className="text-sm font-semibold tracking-wider uppercase text-text/80 mb-3">Full Stack Developer</p>
            <p className="text-sm text-mutedText leading-relaxed">
              Building scalable web applications and premium digital experiences.
            </p>
          </div>

          {/* Center: Social Icons */}
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <div key={link.name} className="relative group/tooltip">
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-surface/50 border border-card text-mutedText hover:text-accentGold hover:border-accentGold/50 hover:bg-accentGold/5 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all duration-300"
                    aria-label={link.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                  {/* Tooltip */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-1 transition-all duration-300 pointer-events-none z-20">
                    <div className="bg-surface border border-accentGold/30 text-[10px] uppercase tracking-widest font-semibold text-accentGold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl">
                      {link.name}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side: Copyright */}
          <div className="text-center md:text-right">
            <p className="text-text font-medium mb-2">&copy; 2026 Mohamed Sabeek H</p>
            <p className="text-sm text-mutedText mb-3">Designed & Developed by Mohamed Sabeek</p>
            <p className="text-[10px] text-mutedText/50 uppercase tracking-widest font-semibold">Crafted with React, Tailwind CSS & Framer Motion</p>
          </div>
          
        </motion.div>
      </div>
    </footer>
  );
}
