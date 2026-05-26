import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Grid, Eye, MessageCircle, Heart, Plus, Minus, Cake, Sparkles, Award, Coffee } from 'lucide-react';
import { PRODUCTS, Product } from '../data';

// Custom interface representing a product in the active selection
export interface CartItem {
  id: string;
  name: string;
  price: number;
  unit: string;
  category: string;
  image: string;
  quantity: number;
  customText?: string;
  isEggless?: boolean;
}

interface CatalogProps {
  onPhotoClick: (image: string, title: string) => void;
  cart: CartItem[];
  onAddToCart: (product: Product) => void;
  onRemoveFromCart: (productId: string) => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
}

export default function CatalogSection({
  onPhotoClick,
  cart,
  onAddToCart,
  onRemoveFromCart,
  onUpdateQuantity
}: CatalogProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'cakes' | 'new-launch' | 'pastries' | 'snacks-box'>('all');
  const catalogListRef = useRef<HTMLDivElement>(null);

  // Filter products based on activeTab
  const filteredProducts = PRODUCTS.filter(
    (product) => activeTab === 'all' || product.category === activeTab
  );

  // Handle category category card selection with smooth scrolling
  const selectCategory = (category: 'all' | 'cakes' | 'new-launch' | 'pastries' | 'snacks-box') => {
    setActiveTab(category);
    setTimeout(() => {
      const headerElement = document.getElementById('category-sub-header');
      if (headerElement) {
        headerElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  // Quick category card details corresponding to first screenshot
  const categoryHighlights = [
    {
      id: 'cakes' as const,
      label: 'Cakes',
      labelColor: 'text-brand-pink font-bold',
      image: '/src/assets/images/cakes_special_1779797201179.png',
      caption: 'Fresh Customised celebration cakes'
    },
    {
      id: 'new-launch' as const,
      label: 'New Launch',
      labelColor: 'text-[#3d2314] font-semibold',
      image: 'https://images.unsplash.com/photo-1603532648955-039310d9ed75?auto=format&fit=crop&q=80&w=300',
      caption: 'Fresh Nutella & Biscoff arrivals'
    },
    {
      id: 'pastries' as const,
      label: 'Pastries',
      labelColor: 'text-[#3d2314] font-semibold',
      image: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&q=80&w=300',
      caption: 'Handy individual mousse slices'
    },
    {
      id: 'snacks-box' as const,
      label: 'Snacks Box',
      labelColor: 'text-[#3d2314] font-semibold',
      image: '/src/assets/images/cupcakes_special_1779797178372.png',
      caption: 'Premium gifting combos & cupcakes'
    }
  ];

  // Map category helper tags to aesthetic sparkles matching image
  const getCategoryTitle = () => {
    switch (activeTab) {
      case 'cakes': return 'Cakes';
      case 'new-launch': return 'New Launch';
      case 'pastries': return 'Pastries';
      case 'snacks-box': return 'Snacks Box';
      default: return 'Our Complete Menu List';
    }
  };

  return (
    <section id="catalog-section" className="py-16 px-4 bg-[#FAF7F2] relative border-t border-stone-200/40">
      <div className="max-w-7xl mx-auto">
        
        {/* ========================================== */}
        {/* "OUR MENU" HERO BRAND CARDS (Refer to Screenshot 1) */}
        {/* ========================================== */}
        <div className="mb-14">
          <div className="text-center sm:text-left mb-8">
            <h2 className="text-3xl font-serif text-[#3d2314] font-bold tracking-tight">Our Menu</h2>
            <p className="text-sm font-sans text-gray-500 mt-1">Explore our freshly baked delights</p>
          </div>

          {/* Grid Layout of the Category Cover Images */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {categoryHighlights.map((cat) => {
              const works = activeTab === cat.id;
              return (
                <motion.div
                  key={cat.id}
                  whileHover={{ y: -6, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => selectCategory(cat.id)}
                  className={`bg-white rounded-[2rem] p-3 shadow-sm hover:shadow-md transition-all cursor-pointer border-2 ${
                    works ? 'border-brand-pink shadow-[#db2777]/10 bg-pink-50/20' : 'border-stone-100'
                  }`}
                >
                  <div className="relative aspect-square w-full rounded-[1.6rem] overflow-hidden bg-stone-100 shadow-inner">
                    <img
                      src={cat.image}
                      alt={cat.label}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    {/* Dark gradient mapping inside circle */}
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="text-center pt-3 pb-1">
                    <span className={`text-[15px] block font-serif tracking-tight leading-none ${cat.labelColor}`}>
                      {cat.label}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ========================================== */}
        {/* SUB-CATEGORY HEADINGS ROW (Refer to Screenshot 2) */}
        {/* ========================================== */}
        <div id="category-sub-header" className="pt-8 border-t border-stone-200/70 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 scroll-mt-24">
          <div className="flex items-start gap-2.5">
            <span className="text-[#db2777] text-2xl shrink-0 leading-none">✦</span>
            <div>
              <h3 className="text-3xl font-sans text-[#1a1c3d] font-bold leading-none tracking-tight">
                {getCategoryTitle()}
              </h3>
              <p className="text-sm text-stone-500 font-sans mt-1.5">Explore our finest collection</p>
            </div>
          </div>

          {/* Quick tab filters toggle pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-stone-200/40 p-1 rounded-xl">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'all' ? 'bg-[#db2777] text-white shadow' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              All Items
            </button>
            {categoryHighlights.map((ch) => (
              <button
                key={ch.id}
                onClick={() => setActiveTab(ch.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === ch.id ? 'bg-[#db2777] text-white shadow' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {ch.label}
              </button>
            ))}
          </div>
        </div>

        {/* ========================================== */}
        {/* PRODUCT CATALOG SELECTION GRID */}
        {/* ========================================== */}
        <div ref={catalogListRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => {
              // Retrieve cart quantity for this item
              const cartItem = cart.find((item) => item.id === product.id);
              const currentQty = cartItem ? cartItem.quantity : 0;

              // Matching tag colors from screenshots
              let tagColorClass = 'bg-[#db2777] text-white'; // Bestseller Magenta
              if (product.badgeColor === 'teal') {
                tagColorClass = 'bg-[#0d9488] text-white'; // New Arrival Teal
              } else if (product.badgeColor === 'gold') {
                tagColorClass = 'bg-[#c5a85c] text-[#3d2314]'; // Promo Gold
              }

              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 30, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ 
                    default: { 
                      duration: 0.45, 
                      ease: [0.16, 1, 0.3, 1], // easeOutQuart 
                      delay: index * 0.05 
                    },
                    layout: { 
                      type: 'spring', 
                      stiffness: 280, 
                      damping: 28 
                    }
                  }}
                  className="bg-white rounded-[1.25rem] overflow-hidden border border-stone-200/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group h-full relative"
                >
                  {/* Photo area with zoom modal trigger */}
                  <div className="relative aspect-square bg-stone-50 overflow-hidden shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      onClick={() => onPhotoClick(product.image, product.name)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 cursor-zoom-in select-none"
                      referrerPolicy="no-referrer"
                    />

                    {/* Zoom Clickable Hand Glass Indicator */}
                    <div
                      onClick={() => onPhotoClick(product.image, product.name)}
                      className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-zoom-in"
                    >
                      <span className="flex items-center gap-1 bg-white text-stone-800 rounded-full py-1 px-3 text-[10px] font-bold shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <Eye className="w-3 h-3 text-[#db2777]" />
                        <span>Zoom</span>
                      </span>
                    </div>

                    {/* Standard Pink/Teal Round Banner Tag (Screenshot 2) */}
                    {product.badge && (
                      <span className={`absolute top-2.5 left-2.5 text-[9px] sm:text-[10px] tracking-wide font-extrabold px-2 py-1 rounded-[4.5px] shadow-xs flex items-center gap-0.5 leading-none ${tagColorClass}`}>
                        <span className="text-amber-300">★</span>
                        <span className="capitalize">{product.badge}</span>
                      </span>
                    )}

                    {/* Weight portion helper text overlay */}
                    <span className="absolute bottom-2.5 right-2.5 bg-stone-900/75 backdrop-blur-xs text-white px-2 py-0.5 rounded-[4px] text-[9px] font-bold tracking-wider">
                      {product.unit}
                    </span>
                  </div>

                  {/* Body textual content */}
                  <div className="p-3 sm:p-4.5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Veg Green Box Indicator placed directly before title (Screenshot 2) */}
                      <div className="text-left">
                        {product.isVeg && (
                          <div className="border-[1.5px] border-emerald-600 rounded-[2px] w-3.5 h-3.5 p-[1px] inline-flex items-center justify-center bg-white mb-1.5" title="100% Eggless Vegetarian">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-600"></div>
                          </div>
                        )}
                        <h4 className="text-[13.5px] sm:text-[16px] font-bold text-[#1a1c3d] tracking-tight group-hover:text-[#db2777] transition-colors line-clamp-2 min-h-[38px] sm:min-h-[44px] leading-snug">
                          {product.name}
                        </h4>
                      </div>

                      {/* Brief single-portion description */}
                      <p className="text-[10.5px] sm:text-xs text-[#71717a] font-normal leading-normal mt-1 mb-2.5 line-clamp-2 h-8 sm:h-9 overflow-hidden">
                        {product.description}
                      </p>
                    </div>

                    {/* Bottom Order Action Box - Styled directly to match second screenshot */}
                    <div className="mt-3 pt-2.5 border-t border-stone-100 flex items-center justify-between">
                      {/* Price column on Left (Large highlighted fuchsia text) */}
                      <div className="flex flex-col">
                        <span className="text-[15px] sm:text-[18px] font-bold text-[#db2777] font-sans">
                          ₹{product.price}
                        </span>
                      </div>

                      {/* Dynamic Morphing Swiggy Button on Right */}
                      <div className="flex flex-col items-center shrink-0 w-[72px] sm:w-[82px]">
                        <AnimatePresence mode="wait">
                          {currentQty === 0 ? (
                            <motion.button
                              key="add-btn"
                              initial={{ scale: 0.94, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 0.94, opacity: 0 }}
                              onClick={() => {
                                onAddToCart(product);
                              }}
                              className="w-full h-[26px] sm:h-[30px] bg-[#db2777] hover:bg-pink-700 text-white font-extrabold rounded-md sm:rounded-lg text-xs tracking-wider transition-all cursor-pointer flex items-center justify-center shadow-xs"
                            >
                              Add
                            </motion.button>
                          ) : (
                            <motion.div
                              key="qty-slider"
                              initial={{ scale: 0.92, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 0.92, opacity: 0 }}
                              className="flex items-center justify-between w-full bg-[#db2777] text-white px-1.5 h-[26px] sm:h-[30px] rounded-md sm:rounded-lg text-xs font-bold shadow-xs"
                            >
                              <button
                                onClick={() => onUpdateQuantity(product.id, currentQty - 1)}
                                className="p-0.5 text-white hover:text-stone-200 transition-colors cursor-pointer"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                              </button>
                              <span className="font-mono text-xs font-black">{currentQty}</span>
                              <button
                                onClick={() => onUpdateQuantity(product.id, currentQty + 1)}
                                className="p-0.5 text-white hover:text-stone-200 transition-colors cursor-pointer"
                                aria-label="Increase quantity"
                              >
                                <Plus className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                              </button>
                            </motion.div>
                          )}
                        </AnimatePresence>
                        {/* Help tag below */}
                        <span className="text-[9px] sm:text-[10px] text-gray-400 font-medium tracking-wide mt-1 select-none leading-none capitalize select-none">
                          Customize
                        </span>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Outer instructions card */}
        <div className="mt-14 max-w-4xl mx-auto rounded-2xl p-6 border-l-4 border-brand-teal bg-white shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex gap-3">
            <span className="text-xl">🍪</span>
            <div>
              <h5 className="text-xs uppercase tracking-widest font-extrabold text-[#3d2314]">Custom Portion Ordering?</h5>
              <p className="text-[11px] text-stone-500 leading-normal mt-0.5">We cater to larger 1kg/2kg structures, egged versions, corporate logos, and customized cupcakes themes. Write to email: <strong className="text-brand-pink underline">vaishalisarang1985@gmail.com</strong>.</p>
            </div>
          </div>
          <a
            href="https://wa.me/919892047995"
            target="_blank"
            rel="noreferrer"
            className="whitespace-nowrap inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#0d9488] hover:bg-emerald-700 py-2.5 px-4 rounded-xl shadow-sm cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Discuss Custom Themes</span>
          </a>
        </div>

      </div>
    </section>
  );
}
