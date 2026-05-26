import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ShoppingBag, Truck, Gift, MessageCircle, Info } from 'lucide-react';
import { CONTACT_INFO } from '../data';

export default function BulkPromo() {
  const [itemType, setItemType] = useState<'cupcakes' | 'brownies'>('cupcakes');
  const [quantity, setQuantity] = useState<number>(50);

  // Price details
  const unitPrice = itemType === 'cupcakes' ? 70 : 90;
  const deliveryThreshold = 50;

  // Let's add an auto bulk discount! E.g. 5% off for 100+, 10% off for 150+
  let discountPercentage = 0;
  if (quantity >= 150) {
    discountPercentage = 10;
  } else if (quantity >= 100) {
    discountPercentage = 5;
  }

  const rawTotal = quantity * unitPrice;
  const discountAmount = Math.round((rawTotal * discountPercentage) / 100);
  const finalTotal = rawTotal - discountAmount;
  const isFreeDelivery = quantity >= deliveryThreshold;

  // Generate WhatsApp message customized to the calculator selections
  const handleWhatsAppEnquiry = () => {
    const itemName = itemType === 'cupcakes' ? 'Gourmet Cupcakes' : 'Signature Walnut Brownies';
    const message = `Hello Vaishali, I visited your Vaishali Bakers catalog and would like to enquire about a Bulk Order.
    
• Item Type: ${itemName}
• Quantity: ${quantity} units
• Estimated Total: ₹${finalTotal} (after any applicable discounts)
• Delivery Mode: ${isFreeDelivery ? 'FREE Delivery' : 'Standard Delivery'}

Please advise on flavor customization and delivery slot availability. Thank you!`;

    const encodedText = encodeURIComponent(message);
    window.open(`https://wa.me/919892047995?text=${encodedText}`, '_blank');
  };

  return (
    <section id="bulk-section" className="py-16 px-4 bg-[#FAF7F2] relative overflow-hidden">
      {/* Background soft gold circles */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#c5a85c]/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-bold uppercase tracking-widest text-pink-600 block mb-2">Exclusive Celebration Deals</span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#3d2314] font-bold">Specialized Bulk Orders</h2>
          <div className="w-16 h-1 bg-[#c5a85c] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Master Gold-Bordered Layout Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Core Value Proposition Cards (Lg: 5-cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="bg-[#3d2314] text-[#faf7f2] rounded-2xl p-6 sm:p-8 outline outline-4 outline-offset-4 outline-[#c5a85c] relative overflow-hidden flex-1 flex flex-col justify-between">
              
              {/* Decorative Corner Sparkles */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#c5a85c]/15 rounded-full"></div>
              
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-6 h-6 text-[#c5a85c] animate-pulse" />
                  <span className="text-[#c5a85c] uppercase text-xs font-bold tracking-widest">Party Planning & Gifting</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-serif font-semibold leading-snug mb-4">
                  Planning a Big Party or Celebration?
                </h3>
                
                <p className="text-sm text-gray-300 leading-relaxed mb-6 font-light">
                  Make your next event sweet, memorable, and stress-free. Whether it's a corporate seminar, anniversary, high-tea party, or family birthday bash, we custom cook and pack luxury sizes to order.
                </p>
              </div>

              {/* Requirement Checklist with premium icons */}
              <div className="space-y-4 border-t border-white/10 pt-6">
                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-[#c5a85c]/20 text-[#c5a85c] mt-0.5">
                    <ShoppingBag className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Minimum Bulk Order: 50 Units</h4>
                    <p className="text-xs text-gray-400">Applicable on cupcakes & signature brownies.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-[#c5a85c]/20 text-emerald-400 mt-0.5">
                    <Truck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">✨ FREE Delivery Included!</h4>
                    <p className="text-xs text-gray-400">Across Navi Mumbai, Central & Western Mumbai on 50+ units.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-[#c5a85c]/20 text-pink-400 mt-0.5">
                    <Gift className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Individually Boxed (Add-on)</h4>
                    <p className="text-xs text-gray-400">Available in cute customized visual gifting cases.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Estimate tool & Bulk Calculator (Lg: 7-cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-[#c5a85c]/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="p-1 rounded-full bg-pink-100 text-pink-600">
                  <Info className="w-4 h-4" />
                </span>
                <span className="text-sm font-medium text-gray-600">Calculate Your Instant Cost & Save</span>
              </div>

              <h4 className="text-xl font-bold font-serif text-[#3d2314] mb-2">Interactive Bulk Estimator</h4>
              <p className="text-xs text-gray-500 mb-6">Adjust the slider below to select quantities and check if free shipping is unlocked!</p>

              {/* Toggle Selector For Item Type */}
              <div className="grid grid-cols-2 gap-3 mb-6 bg-[#FAF7F2] p-1.5 rounded-xl border border-gray-100">
                <button
                  onClick={() => setItemType('cupcakes')}
                  className={`py-3.5 px-4 rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    itemType === 'cupcakes'
                      ? 'bg-pink-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-[#3d2314] hover:bg-white/50'
                  }`}
                >
                  <Gift className="w-4 h-4" />
                  <span>Gourmet Cupcakes</span>
                </button>
                <button
                  onClick={() => setItemType('brownies')}
                  className={`py-3.5 px-4 rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    itemType === 'brownies'
                      ? 'bg-[#3d2314] text-[#c5a85c] shadow-md'
                      : 'text-gray-600 hover:text-[#3d2314] hover:bg-white/50'
                  }`}
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Signature Brownies</span>
                </button>
              </div>

              {/* Quantity Slider */}
              <div className="mb-6 p-4 sm:p-6 bg-[#FAF7F2] rounded-xl border border-gray-100">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-semibold text-gray-700">Select Quantity</span>
                  <span className="text-2xl font-black text-[#3d2314] font-mono bg-white px-3 py-1 rounded-lg border border-gray-200">
                    {quantity} <span className="text-xs text-gray-500 uppercase">units</span>
                  </span>
                </div>

                <input
                  type="range"
                  min="10"
                  max="250"
                  step="5"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  id="bulk-quantity-slider"
                  className="w-full accent-[#c5a85c] h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />

                <div className="flex justify-between text-[11px] text-gray-400 mt-2">
                  <span>10 units (Min. Trial)</span>
                  <span className="text-pink-600 font-bold">50 units (FREE DELIVERY threshold)</span>
                  <span>250+ units</span>
                </div>
              </div>

              {/* Progress Toward Free Shipping Indicator */}
              <div className="mb-6">
                {isFreeDelivery ? (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-3.5 rounded-xl flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-sm shrink-0">
                      🚚
                    </div>
                    <div className="text-xs leading-relaxed">
                      <p className="font-bold text-emerald-900">🎉 Hurrah! FREE Premium Shipping Unlocked!</p>
                      <p>Your order is 50+ units. Your delivery is complimentary across Mumbai!</p>
                    </div>
                  </div>
                ) : (
                  <div className="bg-amber-50 border border-amber-200 text-amber-800 p-3.5 rounded-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-lg">📦</span>
                      <p className="font-bold text-xs text-amber-900">Add <span className="font-mono text-sm underline underline-offset-2">{deliveryThreshold - quantity}</span> more units for Complimentary Delivery!</p>
                    </div>
                    <div className="w-full bg-amber-100 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-[#c5a85c] h-full transition-all duration-300"
                        style={{ width: `${(quantity / deliveryThreshold) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Price Calculations Output & Inquiry Actions */}
            <div className="border-t border-gray-100 pt-6">
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <span className="text-gray-500">Normal Rate</span>
                  <p className="text-base font-semibold text-gray-700">₹{unitPrice} / piece</p>
                </div>
                <div className="text-right">
                  <span className="text-gray-500">Bulk Discount</span>
                  {discountPercentage > 0 ? (
                    <p className="text-base font-semibold text-pink-600">-{discountPercentage}% Off Applied</p>
                  ) : (
                    <p className="text-xs text-gray-400 mt-1 italic">Order 100+ for 5% off | 150+ for 10% off</p>
                  )}
                </div>
              </div>

              <div className="bg-[#FAF7F2] p-4 rounded-xl flex justify-between items-center mb-6 border border-gray-100">
                <span className="text-sm font-bold text-gray-700">Estimated Total:</span>
                <div className="text-right">
                  {discountAmount > 0 && (
                    <span className="text-xs text-gray-400 line-through mr-2 font-mono">₹{rawTotal}</span>
                  )}
                  <span className="text-2xl font-black text-[#3d2314] font-mono">₹{finalTotal}</span>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={handleWhatsAppEnquiry}
                id="bulk-send-whatsapp"
                className="w-full bg-[#0d9488] hover:bg-teal-700 text-white font-bold py-4 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer group"
              >
                <MessageCircle className="w-5 h-5 text-[#c5a85c]" />
                <span>Enquire This Order on WhatsApp</span>
              </button>
            </div>
          </div>

        </div>

        {/* Mini Gifting Tagline */}
        <div className="mt-8 text-center bg-[#FAF7F2]">
          <p className="text-xs text-gray-500 italic max-w-xl mx-auto">
            Need custom colors, individual tags, or complex theme customizations? Please raise an enquiry by clicking the button above or chatting with us directly.
          </p>
        </div>
      </div>
    </section>
  );
}
