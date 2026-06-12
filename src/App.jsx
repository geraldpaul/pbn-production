import React from 'react';
import { ArrowUpRight, Play } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B1528] flex items-center justify-center p-4 sm:p-8 font-sans antialiased">
      
      {/* PERFECT 1600x550 VISUAL WRAPPER */}
      <div className="relative w-full max-w-[1600px] h-[550px] rounded-2xl overflow-hidden shadow-2xl border border-slate-800/40 group">
        
        {/* Full Width Unsplash Asset (No Overlay Layer) */}
        <img 
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&h=550&q=90" 
          alt="Premium Tech Asset Pipeline Display" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
        />

        {/* BOTTOM-RIGHT MINIMALIST INTERACTIVE CONTAINER */}
        <div className="absolute bottom-6 right-6 z-10 flex items-center gap-3">
          
          {/* Subtle Secondary Transparent Trigger */}
          <button className="flex items-center gap-2 bg-[#0B1528]/30 hover:bg-[#0B1528]/60 border border-white/10 hover:border-white/20 text-white/80 hover:text-white text-sm font-medium px-5 py-3 rounded-xl backdrop-blur-md transition-all duration-200">
            <Play className="w-4 h-4 fill-current" />
            <span>Overview</span>
          </button>

          {/* Premium High-Contrast Subtle CTA */}
          <button className="group flex items-center gap-2 bg-white/10 hover:bg-white text-white hover:text-[#0B1528] border border-white/20 hover:border-white text-sm font-semibold px-6 py-3 rounded-xl backdrop-blur-md transition-all duration-300 shadow-lg shadow-black/20">
            <span>Launch Platform</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

        </div>

      </div>

    </div>
  );
}