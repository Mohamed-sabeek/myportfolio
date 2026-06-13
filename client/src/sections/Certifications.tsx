import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../animations/variants';
import { Eye, Download, X, Award } from 'lucide-react';

import dsaCert from '../assets/certificates/DSA-udemy.png';
import mernCert from '../assets/certificates/mernstack.png';
import originCert from '../assets/certificates/origin.png';
import guidewireCert from '../assets/certificates/guideware.png';
import codesprintCert from '../assets/certificates/coodesprint.png';

type Certification = {
  title: string;
  organization: string;
  type: string;
  date: string;
  description: string;
  image: string;
  badge?: string;
  duration?: string;
  instructor?: string;
};

const certsData: Certification[] = [
  {
    title: 'Mastering Data Structures & Algorithms using C and C++',
    organization: 'Udemy',
    type: 'Professional Certification',
    date: 'May 18, 2025',
    description: 'Completed an intensive Data Structures and Algorithms program focused on problem-solving, data structures, algorithms, complexity analysis, sorting, and searching using C and C++.',
    duration: '76 Hours',
    instructor: 'Abdul Bari',
    badge: 'DSA',
    image: dsaCert
  },
  {
    title: 'MERN Stack Internship',
    organization: 'iGenuine Learning',
    type: 'Internship',
    date: '01 Dec 2025 - 19 Dec 2025',
    description: 'Completed an intensive MERN Stack internship program focusing on modern web application development and industry best practices.',
    image: mernCert
  },
  {
    title: 'Origin 24 Hours Hackathon',
    organization: 'SIMATS Engineering',
    type: 'Hackathon',
    date: 'April 2026',
    description: 'Participated in a 24-hour innovation-focused hackathon, collaborating on real-world problem-solving and rapid product development.',
    image: originCert
  },
  {
    title: 'Guidewire DEVTrails Hackathon',
    organization: 'Guidewire + EY',
    type: 'National Hackathon',
    date: '2026',
    description: 'Represented Sri Eshwar College of Engineering in the Guidewire DEVTrails University Hackathon.',
    image: guidewireCert
  },
  {
    title: 'CodeSprint 2026',
    organization: 'St. Aloysius University',
    type: 'National Level Hackathon',
    date: 'January 2026',
    description: 'Participated in the 32-hour national-level CodeSprint Hackathon focused on emerging technologies and innovative problem solving.',
    image: codesprintCert
  }
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<typeof certsData[0] | null>(null);

  return (
    <section className="container mx-auto px-6 lg:px-12 relative z-10" id="certifications">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-accentGold/5 rounded-full blur-[150px] pointer-events-none -z-10"></div>

      <motion.div 
        className="text-center mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="text-accentGold tracking-[0.2em] text-xs font-semibold uppercase mb-4 block">
          Credentials
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-text font-serif">
          Certifications & Achievements
        </h2>
        <p className="mt-6 text-mutedText max-w-2xl mx-auto font-light text-lg">
          A collection of internships, hackathons, and professional learning experiences that have contributed to my growth as a software engineer.
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        {certsData.map((cert, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            whileHover={{ y: -8 }}
            className="group relative h-full bg-surface/40 backdrop-blur-md border border-card shadow-lg hover:shadow-[0_20px_40px_rgba(212,175,55,0.1)] hover:border-accentGold/40 rounded-2xl p-6 md:p-8 flex flex-col xl:flex-row gap-6 transition-all duration-500 overflow-hidden"
          >
            {/* Subtle glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-accentGold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Thumbnail */}
            <div className="shrink-0 relative w-full xl:w-48 h-48 rounded-xl overflow-hidden border border-surface group-hover:border-accentGold/30 transition-colors duration-500 bg-backgroundSecondary/50 flex items-center justify-center">
              <div className="absolute inset-0 bg-accentGold/10 z-10 group-hover:opacity-0 transition-opacity duration-500 mix-blend-overlay"></div>
              <img 
                src={cert.image} 
                alt={cert.title} 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow relative z-10">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 bg-backgroundSecondary border border-card rounded-full text-[10px] uppercase tracking-widest text-accentGold font-medium">
                  {cert.type}
                </span>
                {cert.badge && (
                  <span className="px-3 py-1 bg-backgroundSecondary border border-card rounded-full text-[10px] uppercase tracking-widest text-accentGold font-medium">
                    {cert.badge}
                  </span>
                )}
                <span className="px-3 py-1 bg-backgroundSecondary border border-card rounded-full text-[10px] uppercase tracking-widest text-mutedText font-medium">
                  {cert.date}
                </span>
              </div>
              
              <h3 className="text-xl md:text-2xl font-serif text-text mb-1 group-hover:text-accentGold transition-colors duration-300">
                {cert.title}
              </h3>
              <p className="text-sm font-medium text-text/80 tracking-wide uppercase mb-3">
                {cert.organization}
              </p>

              {(cert.instructor || cert.duration) && (
                <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4 text-xs font-medium text-mutedText">
                  {cert.instructor && <span>Instructor: <span className="text-text/90">{cert.instructor}</span></span>}
                  {cert.duration && <span>Duration: <span className="text-text/90">{cert.duration}</span></span>}
                </div>
              )}
              
              <p className="text-mutedText text-sm font-light leading-relaxed mb-6 line-clamp-3">
                {cert.description}
              </p>

              <div className="mt-auto pt-4">
                <button 
                  onClick={() => setSelectedCert(cert)}
                  className="flex items-center justify-center gap-3 px-8 py-3 w-full sm:w-auto bg-accentGold/10 hover:bg-accentGold text-accentGold hover:text-background border border-accentGold/20 hover:border-accentGold rounded-xl text-sm font-semibold transition-all duration-300 relative overflow-hidden group/btn shadow-[0_0_15px_rgba(212,175,55,0.05)] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                >
                  <div className="absolute inset-0 bg-white/30 -translate-x-full group-hover/btn:translate-x-[250%] transition-transform duration-[1.5s] ease-in-out skew-x-12"></div>
                  <Eye className="w-4 h-4" />
                  View Certificate
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Fullscreen Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12"
          >
            {/* Blurred Backdrop */}
            <div 
              className="absolute inset-0 bg-background/90 backdrop-blur-xl"
              onClick={() => setSelectedCert(null)}
            ></div>

            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
              className="relative w-full max-w-5xl bg-surface border border-cardLight rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-5 md:p-6 border-b border-card bg-surface/80 backdrop-blur-sm z-20">
                <div>
                  <h3 className="text-lg md:text-2xl font-serif text-text">{selectedCert.title}</h3>
                  <p className="text-accentGold text-sm mt-1">{selectedCert.organization}</p>
                </div>
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="p-2 bg-background hover:bg-backgroundSecondary text-mutedText hover:text-text rounded-full transition-colors border border-card"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body - No Scrolling */}
              <div className="relative flex-grow overflow-hidden p-4 md:p-10 bg-backgroundSecondary/50 flex items-center justify-center group/img">
                <img 
                  src={selectedCert.image} 
                  alt={selectedCert.title} 
                  className="w-full h-auto max-h-[70vh] object-contain rounded-lg shadow-2xl group-hover/img:scale-[1.03] transition-transform duration-500 ease-out"
                />
              </div>

              {/* Modal Footer */}
              <div className="p-5 md:p-6 border-t border-card bg-surface/80 backdrop-blur-sm flex justify-between items-center z-20">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-sm text-mutedText">
                  <span className="flex items-center gap-2"><Award className="w-4 h-4 text-accentGold" /> {selectedCert.type}</span>
                  <span className="hidden sm:inline-block border-l border-card h-4"></span>
                  <span>Issued: {selectedCert.date}</span>
                </div>
                <a 
                  href={selectedCert.image}
                  download={`${selectedCert.title.replace(/\s+/g, '_')}_Certificate`}
                  className="flex items-center gap-2 px-5 py-2 md:px-6 md:py-2.5 bg-accentGold text-background hover:bg-accentGoldLight rounded-lg text-sm font-semibold transition-colors shadow-lg shadow-accentGold/20"
                >
                  <Download className="w-4 h-4" />
                  Download
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
