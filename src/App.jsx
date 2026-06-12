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
        {/* top-1/2 with custom translate shifts the row precisely ~3.5mm (14px) above the true center line */}
        <div className="absolute left-8 top-1/2 -translate-y-[calc(50%+14px)] z-10 flex flex-row items-center gap-4">
          
          {/* Gold Filled Core Action Button */}
          <button className="group flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#0B1528] font-bold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-amber-500/10 active:scale-[0.98] whitespace-nowrap">
            <span>Launch Platform</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Gold Outline Secondary Action Button */}
          <button className="flex items-center justify-center gap-2 bg-black/30 hover:bg-amber-500/20 border border-amber-500/40 hover:border-amber-400 text-amber-400 hover:text-amber-300 text-sm font-semibold px-5 py-3 rounded-xl backdrop-blur-md transition-all duration-200 whitespace-nowrap">
            <Play className="w-4 h-4 fill-current" />
            <span>Overview</span>
          </button>

        </div>

      </div>

    </div>
  );
}