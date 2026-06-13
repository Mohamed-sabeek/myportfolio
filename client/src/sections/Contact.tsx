
import { motion } from 'framer-motion';
import { fadeInUp } from '../animations/variants';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section className="container mx-auto px-6 lg:px-12 relative z-10" id="contact">
      <motion.div 
        className="clay-bg p-8 md:p-12 lg:p-16 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accentGold/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>
        
        <div className="flex flex-col lg:flex-row gap-16 relative z-10">
          
          {/* Contact Info */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">Let's Connect</h2>
            <div className="w-20 h-1.5 bg-accentGold rounded-full mb-8"></div>
            
            <p className="text-mutedText text-lg mb-10 leading-relaxed">
              I'm currently open to new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="flex flex-col gap-6">
              <a href="mailto:safeeofficial1730@gmail.com" className="flex items-center gap-4 group hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 rounded-full clay-card flex items-center justify-center text-accentGoldLight group-hover:text-accentGold group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-mutedText">Email</p>
                  <p className="text-text font-medium group-hover:text-accentGold transition-colors">safeeofficial1730@gmail.com</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 group hover:-translate-y-1 transition-all duration-300 cursor-default">
                <div className="w-12 h-12 rounded-full clay-card flex items-center justify-center text-accentGoldLight group-hover:text-accentGold group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-mutedText">Location</p>
                  <p className="text-text font-medium group-hover:text-accentGold transition-colors">Coimbatore, Tamil Nadu, India</p>
                </div>
              </div>

              <a href="tel:+916383028607" className="flex items-center gap-4 group hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 rounded-full clay-card flex items-center justify-center text-accentGoldLight group-hover:text-accentGold group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-mutedText">Phone</p>
                  <p className="text-text font-medium group-hover:text-accentGold transition-colors">+91 6383028607</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-7/12">
            <form className="clay-card p-8 md:p-10 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-text ml-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Mohamed Sabeek"
                  className="w-full bg-surface border-none rounded-2xl px-6 py-4 text-text placeholder:text-mutedText/50 focus:outline-none focus:ring-2 focus:ring-accentGold/50 shadow-inner transition-shadow"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-text ml-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="sabee@example.com"
                  className="w-full bg-surface border-none rounded-2xl px-6 py-4 text-text placeholder:text-mutedText/50 focus:outline-none focus:ring-2 focus:ring-accentGold/50 shadow-inner transition-shadow"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-text ml-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-surface border-none rounded-2xl px-6 py-4 text-text placeholder:text-mutedText/50 focus:outline-none focus:ring-2 focus:ring-accentGold/50 shadow-inner transition-shadow resize-none"
                ></textarea>
              </div>

              <button 
                type="button" 
                className="clay-button mt-4 flex items-center justify-center gap-2 py-4 text-lg w-full"
                onClick={(e) => e.preventDefault()}
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
          
        </div>
      </motion.div>
    </section>
  );
}
