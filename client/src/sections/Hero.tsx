import { motion } from 'framer-motion';
import heroImg from '../assets/hero.png';

export default function Hero() {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative w-full h-screen overflow-hidden bg-[#050505] flex flex-col justify-end" 
      id="hero"
    >
      {/* Layer 1: Pure black background is set on the section */}

      {/* Cinematic Spotlight behind head */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <div 
          className="w-full h-full"
          style={{ background: 'radial-gradient(circle at center 40%, rgba(196,160,103,0.12) 0%, transparent 65%)' }}
        ></div>
      </div>

      {/* Layer 2: Portrait Background Element (z-10) */}
      <div className="absolute inset-x-0 bottom-[-5%] md:bottom-[-2%] top-0 flex justify-center items-end z-10 pointer-events-none">
        <motion.div 
          className="relative w-full h-[85vh] md:h-[95vh] flex justify-center items-end"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          {/* We apply a mask to the entire container to smoothly fade out the bottom edge */}
          <div 
            className="relative w-full max-w-5xl h-full flex justify-center items-end"
            style={{
              WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 15%, black 100%)',
              maskImage: 'linear-gradient(to top, transparent 0%, black 15%, black 100%)'
            }}
          >
            <img 
              src={heroImg} 
              alt="Sabee Portrait" 
              className="w-auto h-full object-contain object-bottom brightness-110 contrast-[1.15] saturate-[0.8]"
            />
          </div>
        </motion.div>
      </div>

      {/* Layer 3: Massive PORTFOLIO Typography (In front of Portrait, z-20) */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none select-none overflow-hidden">
        <motion.h1 
          className="text-[14vw] md:text-[13vw] font-black tracking-widest whitespace-nowrap leading-none flex justify-center w-full"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ fontFamily: '"Inter", sans-serif' }}
        >
          {/* Letters NOT overlapping the portrait */}
          <span className="text-[#F5F5F5] drop-shadow-xl">POR</span>
          
          {/* Letters overlapping the portrait (Transparent Outline Style) */}
          <span 
            className="text-transparent"
            style={{ WebkitTextStroke: '2px rgba(245, 245, 245, 0.4)' }}
          >
            TF
          </span>
          
          {/* Letters NOT overlapping the portrait */}
          <span className="text-[#F5F5F5] drop-shadow-xl">OLIO</span>
        </motion.h1>
      </div>

      {/* Global Vignette Overlay to blend the image seamlessly into the black background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_#050505_100%)] z-30 pointer-events-none"></div>

      {/* Layer 4: Foreground Content */}
      <div className="absolute inset-0 z-40 flex flex-col justify-between p-6 md:p-12 pointer-events-none pb-8 md:pb-12">
        
        {/* Top Center: Name Overlay */}
        <motion.div 
          className="w-full text-center pt-8 md:pt-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        >
          <h2 
            className="text-xl md:text-3xl text-accentGold font-serif tracking-[0.4em] md:tracking-[0.6em] uppercase ml-[0.4em] md:ml-[0.6em] text-center px-4"
            style={{ fontFamily: '"Playfair Display", "Georgia", serif' }}
          >
            Mohamed Sabeek
          </h2>
        </motion.div>

        {/* Bottom Area */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-end gap-10 md:gap-0 relative z-50">
          
          {/* Bottom Left */}
          <motion.div 
            className="w-full md:max-w-xs text-center md:text-left pointer-events-auto flex flex-col items-center md:items-start"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.8 }}
          >
            <h3 className="text-accentGold text-xs md:text-sm tracking-[0.25em] uppercase mb-4 font-bold">
              Full Stack Developer
            </h3>
            <p className="text-mutedText text-xs md:text-sm leading-relaxed font-light mb-6 max-w-[280px]">
              Crafting high-end digital experiences and sophisticated web applications with a focus on clean code and exceptional design.
            </p>
            <div className="w-12 h-px bg-accentGold/60 mb-6"></div>
            
            <div className="flex items-center gap-4">
              <a 
                href="#projects"
                onClick={handleScrollToProjects} 
                className="group relative flex items-center justify-center border border-accentGold/60 text-accentGold bg-transparent px-8 py-3 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-500 hover:bg-accentGold/10"
              >
                <span>View Projects</span>
              </a>
            </div>
          </motion.div>

          {/* Bottom Right */}
          <motion.div 
            className="w-full md:w-auto text-center md:text-right pointer-events-auto"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.8 }}
          >
            <p className="text-accentGold text-xs tracking-[0.25em] uppercase font-bold mb-2">
              Presented by Mohamed Sabeek
            </p>
            <p className="text-mutedText text-[10px] md:text-xs tracking-[0.25em] uppercase font-light">
              EST. 2026
            </p>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
