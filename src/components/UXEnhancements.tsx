import { motion, AnimatePresence } from 'motion/react';
import { Phone, X, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data';

interface LightboxProps {
  isOpen: boolean;
  imageUrl: string;
  imageTitle: string;
  onClose: () => void;
}

export function ImageLightbox({ isOpen, imageUrl, imageTitle, onClose }: LightboxProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          id="image-lightbox-overlay"
          className="fixed inset-0 z-55 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Top Panel */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-center text-[#faf7f2] z-10 select-none font-sans">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#db0075]">Vaishali Bakers Showcase</span>
              <span className="text-sm font-serif font-semibold">{imageTitle}</span>
            </div>
            <button
              onClick={onClose}
              id="close-lightbox-btn"
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-[#faf7f2] transition-colors focus:outline-none cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Centered Image Card */}
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative max-w-4xl max-h-[75vh] w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Prevent close on outer image click
          >
            <img
              src={imageUrl}
              alt={imageTitle}
              className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl border border-white/10"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Bottom Prompt Information */}
          <div className="absolute bottom-6 text-[#faf7f2]/65 text-xs text-center select-none font-light">
            <span>"Eat with your eyes!" Tap anywhere to dismiss. Custom portions available on WhatsApp.</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function FloatingWhatsAppButton() {
  const triggerWhatsApp = () => {
    const text = encodeURIComponent("Hello Vaishali, I would like to enquire about your baking menu and bulk cupcake availability. Thank you!");
    window.open(`https://wa.me/919892047995?text=${text}`, '_blank');
  };

  return (
    <div id="floating-whatsapp-trigger" className="fixed bottom-20 sm:bottom-6 right-6 z-50 select-none">
      <motion.button
        onClick={triggerWhatsApp}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all cursor-pointer group"
        aria-label="Chat on WhatsApp"
      >
        {/* Glow pulsing rings */}
        <span className="absolute inset-0 rounded-full border border-emerald-500 animate-ping opacity-75 scale-105"></span>
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
        </span>

        {/* Logo Icon */}
        <MessageCircle className="w-6 h-6" />

        {/* Hover Tooltip display text */}
        <span className="absolute right-14 whitespace-nowrap bg-brand-brown text-white text-[11px] font-bold py-1.5 px-3 rounded-lg opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all shadow-md">
          Chat with Vaishali
        </span>
      </motion.button>
    </div>
  );
}

export function MobileStickyDialPhone() {
  return (
    <div id="mobile-sticky-dial" className="fixed bottom-0 left-0 right-0 z-50 bg-brand-brown border-t border-pink-500/15 py-3.5 px-4 shadow-2xl sm:hidden flex items-center justify-between font-sans">
      <div className="flex flex-col">
        <span className="text-[9px] text-pink-300 uppercase font-bold tracking-widest leading-none block">Vaishali Bakers</span>
        <span className="text-white text-xs font-semibold mt-1">Nilesh Sarang, Founder</span>
      </div>

      <div className="flex items-center gap-2">
        {/* WhatsApp Mobile direct option */}
        <a
          href="https://wa.me/919892047995"
          target="_blank"
          rel="noreferrer"
          className="bg-emerald-600 active:bg-emerald-700 text-white px-3 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp Chat</span>
        </a>

        {/* Click to Dial option */}
        <a
          href={`tel:${CONTACT_INFO.phone}`}
          className="bg-[#db0075] hover:bg-[#df006c] text-white px-3.5 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-md active:scale-95 transition-all"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call Now</span>
        </a>
      </div>
    </div>
  );
}
