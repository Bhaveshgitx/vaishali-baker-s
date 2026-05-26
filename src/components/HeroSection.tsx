import React from 'react';
import { motion } from 'motion/react';
import { ChefHat, ArrowDown, ClipboardList } from 'lucide-react';
import { CONTACT_INFO } from '../data';
import heroCoverImg from '../assets/images/hero_cover_1779797137466.png';

export default function HeroSection() {
  const handleScrollToMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById('catalog-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleScrollToBulk = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById('bulk-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero-section" className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#3d2314] text-white">
      {/* Background Image with Warm Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroCoverImg}
          alt="Vaishali Bakers Signature Cake and Brownies Platter"
          className="w-full h-full object-cover opacity-35 scale-105 select-none"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#3d2314]/80 via-[#3d2314]/50 to-[#faf7f2]"></div>
        {/* Subtle decorative chocolate/gold sparkles */}
        <div className="absolute top-20 left-[10%] w-2 h-2 rounded-full bg-[#c5a85c] opacity-40 animate-ping"></div>
        <div className="absolute bottom-40 right-[15%] w-3 h-3 rounded-full bg-pink-500 opacity-30 animate-pulse"></div>
      </div>

      {/* Main Content Card Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center mt-6 mb-16 sm:my-0">
        
        {/* Little Crest */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-[#c5a85c]/20 border border-[#c5a85c]/40 rounded-full px-4 py-1.5 mb-6 text-[#c5a85c] backdrop-blur-md"
        >
          <ChefHat className="w-4 h-4" />
          <span className="text-xs uppercase tracking-widest font-bold">100% Home Crafted Quality</span>
        </motion.div>

        {/* Brand Name Title */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-5xl sm:text-7xl md:text-8xl tracking-tight leading-tight text-white mb-4"
        >
          Vaishali Bakers
        </motion.h1>

        {/* Subtitle / Owner Credit */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg sm:text-2xl font-serif italic text-[#c5a85c] mb-6 tracking-wide"
        >
          Deliciously Handcrafted by <span className="underline decoration-pink-500 decoration-2 underline-offset-4">{CONTACT_INFO.owner}</span>
        </motion.p>

        {/* Brief Narrative Intro */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-sm sm:text-base text-gray-200/90 leading-relaxed mb-10 font-light"
        >
          Baking is a heartfelt journey. At Vaishali Bakers, we combine the intimacy of small-batch home-baking with professional, high-grade reliability to serve birthdays, corporate landmarks, and large gatherings across Mumbai.
        </motion.p>

        {/* Call to Actions (CTA) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <button
            onClick={handleScrollToMenu}
            id="hero-view-menu-btn"
            className="w-full sm:w-auto px-8 py-4 bg-[#c5a85c] hover:bg-[#d4ba74] text-[#3d2314] font-bold rounded-lg transition-all shadow-lg shadow-amber-950/40 hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
          >
            <ClipboardList className="w-5 h-5" />
            <span>Explore Delicious Menu</span>
          </button>
          <button
            onClick={handleScrollToBulk}
            id="hero-bulk-orders-btn"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/80 hover:border-[#c5a85c] hover:text-[#c5a85c] text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Learn About Bulk Orders</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>
        </motion.div>

        {/* Feature Grid inside Hero Area */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto pt-8 border-t border-white/10 text-xs sm:text-sm text-gray-300"
        >
          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-serif text-[#c5a85c] font-black">100%</span>
            <span className="text-gray-400 mt-1">Eggless Customization</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-serif text-[#c5a85c] font-black">50+</span>
            <span className="text-gray-400 mt-1">Min. Bulk Cupcakes</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-serif text-[#c5a85c] font-black">FAST</span>
            <span className="text-gray-400 mt-1">Insulated Delivery</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-serif text-[#c5a85c] font-black">FREE</span>
            <span className="text-gray-400 mt-1">Delivery on Bulk Orders</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
