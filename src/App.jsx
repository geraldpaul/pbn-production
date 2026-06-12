import React from 'react';
import { ArrowUpRight, Play } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B1528] flex items-center justify-center p-4 sm:p-8 font-sans antialiased">
      
      {/* PERFECT 1600x550 VISUAL WRAPPER */}
      <div className="relative w-full max-w-[1600px] h-[550px] rounded-2xl overflow-hidden shadow-2xl border border-slate-800/40 group">
        
        {/* Full Width Asset (No Overlay Layer) */}
        <img 
          src="/hero-banner.png"
          alt="Premium Tech Asset Pipeline Display" 
          className="w-full h-full object-fill transition-transform duration-700 group-hover:scale-[1.01]"
        />

        {/* MID-LEFT MINIMALIST INTERACTIVE CONTAINER */}
        {/* top-1/2 and -translate-y-1/2 keeps it perfectly pinned to the absolute vertical center */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-3">
          
          {/* Premium High-Contrast Subtle CTA */}
          <button className="group flex items-center justify-center gap-2 bg-white/10 hover:bg-white text-white hover:text-[#0B1528] border border-white/20 hover:border-white text-sm font-semibold px-6 py-3 rounded-xl backdrop-blur-md transition-all duration-300 shadow-lg shadow-black/20 w-40 sm:w-auto">
            <span>Launch Platform</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Subtle Secondary Transparent Trigger */}
          <button className="flex items-center justify-center gap-2 bg-[#0B1528]/30 hover:bg-[#0B1528]/60 border border-white/10 hover:border-white/20 text-white/80 hover:text-white text-sm font-medium px-5 py-3 rounded-xl backdrop-blur-md transition-all duration-200 w-40 sm:w-auto">
            <Play className="w-4 h-4 fill-current" />
            <span>Overview</span>
          </button>

        </div>

      </div>

    </div>
  );
}