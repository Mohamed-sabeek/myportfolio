import Hero from '../sections/Hero';
import About from '../sections/About';
import ProfessionalOverview from '../sections/ProfessionalOverview';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Certifications from '../sections/Certifications';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-background relative overflow-hidden selection:bg-accentGold selection:text-background">
      {/* Smooth Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accentGold transform-origin-left z-50 rounded-r-full"
        style={{ scaleX }}
      />
      
      <main className="flex flex-col gap-20 md:gap-28 pb-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <ProfessionalOverview />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
