import React from 'react';
import { ArrowUpRight, Play } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B1528] flex items-center justify-center p-4 sm:p-8 font-sans antialiased">
      
      {/* RESPONSIVE FLUID VISUAL WRAPPER */}
      {/* Mobile: aspect-square (1:1) or custom ratio ensures it doesn't crunch. Desktop: scales perfectly. */}
      <div className="relative w-full max-w-[1600px] aspect-[4/3] md:aspect-[32/11] rounded-2xl overflow-hidden shadow-2xl border border-slate-800/40 group">
        
        {/* Responsive Image Scaling Engine */}
        <img 
          src="/hero-banner.png"
          alt="Premium Tech Asset Pipeline Display" 
          className="w-full h-full object-cover md:object-fill transition-transform duration-700 group-hover:scale-[1.01]"
        />

        {/* ADAPTIVE INTERACTIVE CONTAINER (Stack on mobile, row on desktop) */}
        <div className="absolute bottom-4 right-4 left-4 md:left-auto md:bottom-6 md:right-6 z-10 flex flex-row justify-end gap-2 sm:gap-3">
          
          {/* Subtle Secondary Transparent Trigger */}
          <button className="flex items-center justify-center gap-2 bg-[#0B1528]/40 hover:bg-[#0B1528]/70 border border-white/10 hover:border-white/20 text-white/90 hover:text-white text-xs sm:text-sm font-medium px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl backdrop-blur-md transition-all duration-200 flex-1 sm:flex-none">
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Overview</span>
          </button>

          {/* Premium High-Contrast Subtle CTA */}
          <button className="group flex items-center justify-center gap-2 bg-white/10 hover:bg-white text-white hover:text-[#0B1528] border border-white/20 hover:border-white text-xs sm:text-sm font-semibold px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl backdrop-blur-md transition-all duration-300 shadow-lg shadow-black/20 flex-1 sm:flex-none">
            <span>Launch Platform</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

        </div>

      </div>

    </div>
  );
}