import sece1 from '../assets/secesmartclass/1.png';
import sece2 from '../assets/secesmartclass/2.png';
import sece3 from '../assets/secesmartclass/3.png';
import sece4 from '../assets/secesmartclass/4.png';

import crackit1 from '../assets/crackit/1.png';
import crackit2 from '../assets/crackit/2.png';
import crackit3 from '../assets/crackit/3.png';
import crackit4 from '../assets/crackit/4.png';
import crackit5 from '../assets/crackit/5.png';
import crackit6 from '../assets/crackit/6.png';
import crackit7 from '../assets/crackit/7.png';
import crackit8 from '../assets/crackit/8.png';
import crackit9 from '../assets/crackit/9.png';
import crackit10 from '../assets/crackit/10.png';
import crackit11 from '../assets/crackit/11.png';

import alsafi1 from '../assets/alsafibeda/1.png';
import alsafi2 from '../assets/alsafibeda/2.png';
import alsafi3 from '../assets/alsafibeda/3.png';
import alsafi4 from '../assets/alsafibeda/4.png';
import alsafi5 from '../assets/alsafibeda/5.png';
import alsafi6 from '../assets/alsafibeda/6.png';

import haaris1 from '../assets/haariscakes/1.png';
import haaris2 from '../assets/haariscakes/2.png';
import haaris3 from '../assets/haariscakes/3.png';
import haaris4 from '../assets/haariscakes/4.png';
import haaris5 from '../assets/haariscakes/5.png';
import haaris6 from '../assets/haariscakes/6.png';
import haaris7 from '../assets/haariscakes/7.png';
import haaris8 from '../assets/haariscakes/8.png';

export const featuredProjects = [
  {
    id: 'sece-smartclass',
    title: 'SECE SmartClass',
    subtitle: 'Integrated Academic Management Platform',
    category: 'Featured Project',
    status: 'Completed',
    type: 'Full Stack Web Application',
    description: 'A professional full-stack academic management ecosystem that streamlines institutional workflows, automates attendance tracking, and enables secure live virtual classrooms through integrated video conferencing.',
    tech: ['React 19', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Jitsi Meet', 'Cloudinary', 'JWT', 'ExcelJS', 'PDFKit'],
    images: [sece1, sece2, sece3, sece4],
    githubUrl: 'https://github.com/Mohamed-sabeek/SECEsmartclass',
    liveUrl: 'https://sec-esmartclass.vercel.app/',
    hasDetails: true,
  },
  {
    id: 'crack-it',
    title: 'CrackIt',
    subtitle: 'Educational Technology Platform',
    category: 'Featured Project',
    type: 'Full Stack Web Application + AI Integration',
    description: 'A comprehensive competitive exam preparation platform featuring mock tests, AI-powered mentorship, study materials, current affairs, and performance analytics. Built to provide a complete digital learning ecosystem for aspirants.',
    tech: ['React 19', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Groq AI'],
    image: 'bg-gradient-to-br from-surface to-[#1F5A5A]/50', // Fallback gradient
    images: [crackit1, crackit2, crackit3, crackit4, crackit5, crackit6, crackit7, crackit8, crackit9, crackit10, crackit11],
    githubUrl: 'https://github.com/Mohamed-sabeek/CrackIt',
    liveUrl: 'https://crack-it-two.vercel.app/',
    hasDetails: true,
  }
];

export const otherProjects = [
  {
    id: 'haaris-cakes',
    title: 'Haaris Cakes',
    category: 'Client Project',
    type: 'Bakery Business Website',
    description: 'Professional bakery business website with product showcase, Google Maps integration, and direct customer contact features.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Google Maps', 'WhatsApp Integration', 'Vercel'],
    image: 'bg-gradient-to-br from-surface to-[#1F5A5A]/50',
    images: [haaris1, haaris2, haaris3, haaris4, haaris5, haaris6, haaris7, haaris8],
    githubUrl: 'https://github.com/Mohamed-sabeek/haaris_cakes',
    liveUrl: 'https://haaris-cakes.vercel.app',
    hasDetails: true,
  },
  {
    id: 'al-safi-beda',
    title: 'Al Safi Beda',
    category: 'Client Project',
    type: 'Business Landing Page',
    description: 'Professional business landing page for a homemade food brand with product catalog, gallery, testimonials, and WhatsApp ordering integration.',
    tech: ['React', 'Vite', 'JavaScript', 'Tailwind CSS', 'WhatsApp Integration', 'Vercel'],
    image: 'bg-gradient-to-br from-surface to-accentGold/20',
    images: [alsafi1, alsafi2, alsafi3, alsafi4, alsafi5, alsafi6],
    githubUrl: 'https://github.com/Mohamed-sabeek/al-safi-beda',
    liveUrl: 'https://al-safi-beda.vercel.app/',
    hasDetails: true,
  }
];
