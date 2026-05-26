import { Clock, Phone, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../data';

export default function QuickHeader() {
  return (
    <div id="quick-header" className="bg-[#3d2314] text-[#faf7f2] text-xs py-2 px-4 shadow-sm border-b border-[#c5a85c]/20 z-40 sticky top-0 hidden sm:block">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        {/* Left Side: Hours & Location */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 font-medium">
            <Clock className="w-3.5 h-3.5 text-[#c5a85c]" />
            <span>Open: {CONTACT_INFO.hours}</span>
          </div>
          <div className="h-3 w-[1px] bg-[#c5a85c]/30 hidden sm:block"></div>
          <div className="flex items-center gap-1.5 font-medium">
            <MapPin className="w-3.5 h-3.5 text-[#c5a85c]" />
            <span>Serving Navi Mumbai, Central & Western Mumbai</span>
          </div>
        </div>

        {/* Right Side: Call Us */}
        <div className="flex items-center gap-3">
          <span className="text-[#faf7f2]/70 font-light">Need a Custom Cake?</span>
          <a
            href={`tel:${CONTACT_INFO.phone}`}
            id="header-call-btn"
            className="flex items-center gap-1 bg-[#c5a85c]/20 hover:bg-[#c5a85c]/40 text-[#c5a85c] px-3 py-1 rounded-full border border-[#c5a85c]/30 transition-all font-semibold"
          >
            <Phone className="w-3 h-3" />
            <span>Call {CONTACT_INFO.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
