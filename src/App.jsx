import React from 'react';
import { ArrowUpRight, Play } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B1528] flex items-center justify-center p-4 sm:p-8 font-sans antialiased">
      
      {/* PERFECT 1600x550 VISUAL WRAPPER */}
      <div className="relative w-full max-w-[1600px] h-[550px] rounded-2xl overflow-hidden shadow-2xl border border-slate-800/40 group">
        
        {/* Full Width Asset (No Global Overlay Layer) */}
        <img 
          src="/hero-banner.png"
          alt="Premium Tech Asset Pipeline Display" 
          className="w-full h-full object-fill transition-transform duration-700 group-hover:scale-[1.01]"
        />

        {/* MID-LEFT MINIMALIST INTERACTIVE CONTAINER */}
        {/* Shifted precisely ~3.5mm (14px) above the true center line */}
        <div className="absolute left-8 top-1/2 -translate-y-[calc(50%+14px)] z-10 flex flex-row items-center gap-4">
          
          {/* Black & White Core Action Button */}
          <button className="group flex items-center justify-center gap-2 bg-black/80 hover:bg-black border border-white text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-xl shadow-black/40 active:scale-[0.98] whitespace-nowrap">
            <span>Join Community</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Black & White Secondary Action Button */}
          <button className="flex items-center justify-center gap-2 bg-black/60 hover:bg-black/90 border border-white/60 hover:border-white text-white/80 hover:text-white text-sm font-medium px-5 py-3 rounded-xl backdrop-blur-sm transition-all duration-200 whitespace-nowrap">
            <Play className="w-4 h-4 fill-current" />
            <span>Overview</span>
          </button>

        </div>

      </div>

    </div>
  );
}