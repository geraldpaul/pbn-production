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

        {/* MID-LEFT SUBTLE UNDERLAY FLAP PANEL */}
        {/* top-1/2 and -translate-y-1/2 handles exact vertical centering */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 
                        bg-gradient-to-r from-black/40 via-black/20 to-transparent
                        backdrop-blur-[6px] border-y border-r border-white/10
                        pl-8 pr-12 py-8 rounded-r-2xl 
                        flex flex-row items-center gap-4
                        transition-all duration-300 hover:border-white/20 hover:from-black/50">
          
          {/* Premium High-Contrast Subtle CTA */}
          <button className="group flex items-center justify-center gap-2 bg-white/10 hover:bg-white text-white hover:text-[#0B1528] border border-white/20 hover:border-white text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-black/20 whitespace-nowrap">
            <span>Launch Platform</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Subtle Secondary Transparent Trigger */}
          <button className="flex items-center justify-center gap-2 bg-[#0B1528]/40 hover:bg-[#0B1528]/70 border border-white/10 hover:border-white/20 text-white/80 hover:text-white text-sm font-medium px-5 py-3 rounded-xl transition-all duration-200 whitespace-nowrap">
            <Play className="w-4 h-4 fill-current" />
            <span>Overview</span>
          </button>

        </div>

      </div>

    </div>
  );
}