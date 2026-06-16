import React from 'react';
import { ArrowUpRight, Play } from 'lucide-react';

// Added showButtons prop defaulting to true
export default function Hero({ imageSrc = "/hero-banner.png", showButtons = true }) {
  return (
    /* RESPONSIVE WRAPPER: Now scales up to exactly 600px to match your native image height */
    <div className="relative w-full aspect-[32/11] md:h-[600px] max-h-[600px] bg-[#0B1528] overflow-hidden group">
      
      {/* Dynamic Image Engine */}
      <img 
        src={imageSrc}
        alt="Police Blue Nation Banner" 
        className="w-full h-full object-contain md:object-contain object-top md:object-top transition-transform duration-700 group-hover:scale-[1.01]"
      />

      {/* INTERACTIVE BUTTON CONTAINER: Only renders if showButtons is true */}
      {showButtons && (
        <div className="absolute left-4 sm:left-6 md:left-12 top-1/2 -translate-y-1/2 z-10 flex flex-row items-center gap-2 sm:gap-4">
          
          {/* Core Action Button */}
          <button className="group flex items-center justify-center gap-1.5 sm:gap-2 bg-black/80 hover:bg-black border border-white text-white text-[10px] sm:text-xs md:text-sm font-semibold px-3 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-lg sm:rounded-xl transition-all duration-300 shadow-xl shadow-black/40 active:scale-[0.98] whitespace-nowrap">
            <span>Launch Platform</span>
            <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Secondary Action Button */}
          <button className="flex items-center justify-center gap-1.5 sm:gap-2 bg-black/60 hover:bg-black/90 border border-white/60 hover:border-white text-white/80 hover:text-white text-[10px] sm:text-xs md:text-sm font-medium px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 rounded-lg sm:rounded-xl backdrop-blur-sm transition-all duration-200 whitespace-nowrap">
            <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 fill-current" />
            <span>Overview</span>
          </button>

        </div>
      )}

    </div>
  );
}