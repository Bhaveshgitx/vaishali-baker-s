import { MapPin, Truck, ShieldAlert, Award } from 'lucide-react';
import { DELIVERY_ZONES } from '../data';

export default function DeliveryZones() {
  return (
    <section id="delivery-section" className="py-16 px-4 bg-white border-t border-stone-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="text-sm font-bold uppercase tracking-widest text-[#0d9488] block mb-2">Our Reach</span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#3d2314] font-bold">Delivery Coverage Across Mumbai</h2>
          <p className="text-gray-500 text-sm mt-3 max-w-lg mx-auto">
            Ensuring your cakes, cupcakes, and brownies arrive perfectly intact, beautifully fresh, and on schedule.
          </p>
          <div className="w-16 h-1 bg-[#c5a85c] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Highlight Quote Bar */}
        <div className="bg-[#faf7f2] border-l-4 border-[#c5a85c] p-6 rounded-r-2xl mb-12 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-4 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-[#c5a85c]/10 text-[#c5a85c] flex items-center justify-center shrink-0">
            <Truck className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#3d2314]">Daily Delivery Timeline</h4>
            <p className="text-xs text-stone-600 mt-1">
              "Freshly delivered to your doorstep between <strong className="text-[#3d2314]">8:00 AM and 11:00 PM</strong> daily." We route your orders in specialized transit units to handle Mumbai heat and traffic gracefully!
            </p>
          </div>
        </div>

        {/* 3 Zone Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {DELIVERY_ZONES.map((zone, index) => {
            // Give icon background based on index to differentiate visually
            let iconColorClass = 'text-pink-600 bg-pink-100';
            let dotColor = 'bg-pink-500';
            if (index === 1) {
              iconColorClass = 'text-teal-600 bg-teal-100';
              dotColor = 'bg-teal-500';
            } else if (index === 2) {
              iconColorClass = 'text-amber-700 bg-amber-100';
              dotColor = 'bg-amber-600';
            }

            return (
              <div
                key={zone.name}
                className="bg-[#FAF7F2] p-6 sm:p-8 rounded-2xl border border-stone-200/40 hover:border-[#c5a85c]/30 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${iconColorClass}`}>
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#3d2314] font-serif">{zone.name}</h3>
                </div>

                <p className="text-xs text-stone-600 mb-5 leading-relaxed font-light">
                  {zone.description}
                </p>

                {/* Targeted Key Localities */}
                <div>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-gray-400 block mb-2">Prime Service Areas</span>
                  <div className="flex flex-wrap gap-1.5">
                    {zone.areas.map((area) => (
                      <span
                        key={area}
                        className="bg-white text-stone-700 text-xs px-2.5 py-1 rounded-md border border-stone-200/50 flex items-center gap-1 font-medium"
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`}></span>
                        <span>{area}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Delivery Guarantee Notes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mt-6 bg-[#3d2314] text-[#faf7f2] p-6 rounded-2xl">
          <div className="flex gap-3">
            <span className="text-lg">👩‍🍳</span>
            <div>
              <h5 className="text-xs font-bold text-[#c5a85c] uppercase">Hygiene & Safety Assured</h5>
              <p className="text-[11px] text-gray-300 mt-1">Our workspace adheres closely to professional culinary safety protocols. Baked with absolute neatness.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-lg">🍫</span>
            <div>
              <h5 className="text-xs font-bold text-[#c5a85c] uppercase">Freshness Commitment</h5>
              <p className="text-[11px] text-gray-300 mt-1">We prepare your orders specifically for your date window. Real fresh, no preservation agents ever used.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
