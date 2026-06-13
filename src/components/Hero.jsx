import React from 'react';
import { ArrowUpRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    /* FIXED RESPONSIVE WRAPPER WITH HEIGHT CEILING */
    /* bg-[#0B1528] kills any white bleeding edges by matching your page color */
    <div className="relative w-full aspect-[4/3] md:aspect-[32/11] max-h-[480px] md:max-h-[500px] bg-[#0B1528] overflow-hidden group">
      
      {/* Precision Visual Framing Engine */}
      {/* object-cover ensures the image fills the container beautifully without stretching or breaking boundaries */}
      <img 
        src="/hero-banner.png"
        alt="Premium Tech Asset Pipeline Display" 
        className="w-full h-full object-cover md:object-fill transition-transform duration-700 group-hover:scale-[1.01]"
      />

      {/* MID-LEFT INTERACTIVE CONTAINER */}
      {/* Absolute positioning locked 14px above the dynamic midpoint */}
      <div className="absolute left-6 md:left-12 top-1/2 -translate-y-[calc(50%+14px)] z-10 flex flex-row items-center gap-3 md:gap-4">
        
        {/* Black & White Core Action Button */}
        <button className="group flex items-center justify-center gap-2 bg-black/80 hover:bg-black border border-white text-white text-xs sm:text-sm font-semibold px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl transition-all duration-300 shadow-xl shadow-black/40 active:scale-[0.98] whitespace-nowrap">
          <span>Launch Platform</span>
          <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>

        {/* Black & White Secondary Action Button */}
        <button className="flex items-center justify-center gap-2 bg-black/60 hover:bg-black/90 border border-white/60 hover:border-white text-white/80 hover:text-white text-xs sm:text-sm font-medium px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl backdrop-blur-sm transition-all duration-200 whitespace-nowrap">
          <Play className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current" />
          <span>Overview</span>
        </button>

      </div>

    </div>
  );
}