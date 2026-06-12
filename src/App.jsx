import React from 'react';
import { ArrowRight, Shield, Activity, Zap } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B1528] text-white font-sans antialiased overflow-x-hidden">
      
      {/* IMMERSIVE FULL-WIDTH HERO */}
      <div className="relative w-full min-h-screen flex items-center justify-center">
        
        {/* Absolute Full-Width & Full-Height Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80" 
            alt="Immersive Global Networking Tech Background" 
            className="w-full h-full object-cover"
          />
          {/* Universal overlay layer to ensure text contrast and reduce cognitive load */}
          <div className="absolute inset-0 bg-[#0B1528]/80 backdrop-blur-[2px]" />
        </div>

        {/* Centered Content Container */}
        <div className="relative z-10 max-w-5xl w-full mx-auto px-6 text-center flex flex-col items-center justify-center">
          
          {/* Accent Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide text-blue-400 mb-8 backdrop-blur-md">
            <Zap className="w-3.5 h-3.5 fill-current text-blue-400" />
            <span>Operational Architecture Live</span>
          </div>

          {/* Full-Width Bold Header */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none mb-6 max-w-4xl bg-gradient-to-b from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
            Empowering Security Through Connectivity
          </h1>

          {/* Clean, Centered Supporting Copy */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mb-12 font-light leading-relaxed">
            Delivering high-velocity data coordination systems and next-generation communication pipelines engineered for premium structural reliability.
          </p>

          {/* Core Call to Action Stack */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-xl shadow-blue-600/20 active:scale-[0.98]">
              <span>Access Secure Portal</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-800/60 hover:bg-slate-800/90 border border-slate-700 text-slate-200 font-medium px-8 py-4 rounded-xl transition-all duration-200 backdrop-blur-sm">
              <span>Review Documentation</span>
            </button>
          </div>

          {/* Trust Signals Footnote */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-8 border-t border-slate-800/80 w-full max-w-xl text-xs uppercase tracking-widest text-slate-400">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-blue-500" />
              <span>Edge Encryption</span>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-emerald-500" />
              <span>Real-Time Routing</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}