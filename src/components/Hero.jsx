import React from 'react';
import { ArrowUpRight, Play } from 'lucide-react';

export default function Hero({ imageSrc = "/hero-banner.png", showButtons = false }) {
  return (
    /* 
      The layout logic:
      - min-h-[180px] prevents the height from shrinking too much on tiny screens.
      - h-[40vw] lets it scale naturally on horizontal mobile/tablets.
      - md:h-[450px] locks down a premium, solid desktop display structure.
    */
    <div className="relative w-full min-h-[180px] h-[40vw] md:h-[450px] lg:h-[520px] bg-[#0B1528] overflow-hidden rounded-xl border border-slate-800/40 group">
      
      {/* 
        - object-cover on mobile ensures the picture fills the height without distortion.
        - object-fill on tablets/desktop keeps the full graphic artwork fully visible.
      */}
      <img 
        src={imageSrc}
        alt="Police Blue Nation Banner" 
        className="w-full h-full object-cover sm:object-fill md:object-fill lg:object-fill object-center transition-transform duration-700 group-hover:scale-[1.01]"
      />

      {/* Background Gradient for Action Controls Visibility */}
      {showButtons && (
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent pointer-events-none" />
      )}

      {/* Absolute Positioned Action Control Group */}
      {showButtons && (
        <div className="absolute left-4 sm:left-8 md:left-12 top-1/2 -translate-y-1/2 z-10 flex flex-row items-center gap-2 sm:gap-4">
          <button className="group flex items-center justify-center gap-1 sm:gap-2 bg-black/90 hover:bg-black border border-white/90 text-[10px] sm:text-xs md:text-sm font-semibold px-3 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-lg sm:rounded-xl transition-all duration-300 shadow-xl shadow-black/40 active:scale-[0.98] whitespace-nowrap">
            <span>Launch Platform</span>
            <ArrowUpRight className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <button className="flex items-center justify-center gap-1 sm:gap-2 bg-black/60 hover:bg-black/90 border border-white/40 hover:border-white text-white/90 text-[10px] sm:text-xs md:text-sm font-medium px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 rounded-lg sm:rounded-xl backdrop-blur-sm transition-all duration-200 whitespace-nowrap">
            <Play className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 fill-current" />
            <span>Overview</span>
          </button>
        </div>
      )}
    </div>
  );
}