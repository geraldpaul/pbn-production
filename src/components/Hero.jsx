import React from 'react';
import { ArrowUpRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    /* RESPONSIVE FLUID VISUAL WRAPPER */
    /* Prevents the asset from crunching or cutting off on mobile viewports */
<div className="relative w-full aspect-[4/3] md:aspect-[32/11] group"> 
      {/* Precision Scaling Engine */}
      <img 
        src="/hero-banner.png"
        alt="Premium Tech Asset Pipeline Display" 
        className="w-full h-full object-contain md:object-fill transition-transform duration-700 group-hover:scale-[1.01]"
      />

      {/* MID-LEFT MINIMALIST INTERACTIVE CONTAINER */}
      {/* Aligned side-by-side and shifted ~3.5mm above the vertical midpoint */}
      <div className="absolute left-4 md:left-8 top-1/2 -translate-y-[calc(50%+14px)] z-10 flex flex-row items-center gap-3 md:gap-4">
        
        {/* Black & White Core Action Button */}
        <button className="group flex items-center justify-center gap-2 bg-black/80 hover:bg-black border border-white text-white text-xs sm:text-sm font-semibold px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl transition-all duration-300 shadow-xl shadow-black/40 active:scale-[0.98] whitespace-nowrap">
          <span>Join Community</span>
          <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>

        {/* Black & White Secondary Action Button */}
        <button className="flex items-center justify-center gap-2 bg-black/60 hover:bg-black/90 border border-white/60 hover:border-white text-white/80 hover:text-white text-xs sm:text-sm font-medium px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl backdrop-blur-sm transition-all duration-200 whitespace-nowrap">
          <Play className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current" />
          <span>Overview2</span>
        </button>

      </div>

    </div>
  );
}