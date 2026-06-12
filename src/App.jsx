import React from 'react';
import { ArrowRight, Shield, Activity, Zap } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B1528] text-white font-sans antialiased overflow-x-hidden">
      
      {/* FULL-WIDTH HERO SECTION */}
      <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        
        {/* Background Image Layer with Luxury Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=2000&q=80" 
            alt="Tech Luxury Deep Matrix Background" 
            className="w-full h-full object-cover transform scale-105 transition-transform duration-1000"
          />
          {/* Multi-stage gradient mask to reduce visual fatigue */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1528]/95 via-[#0B1528]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528] via-transparent to-transparent opacity-90" />
        </div>

        {/* Content Container (Engineered for Low Cognitive Load) */}
        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-12 py-32 flex flex-col justify-center h-full">
          
          {/* Micro-badge Notification */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1D3557]/80 to-[#112240]/80 border border-blue-500/30 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide text-blue-400 mb-8 w-fit backdrop-blur-md shadow-lg shadow-blue-950/50">
            <Zap className="w-3.5 h-3.5 fill-current animate-pulse" />
            <span>Next-Gen Operational Framework Active</span>
          </div>

          {/* High-Velocity Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl leading-[1.1] mb-6 bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            High-Velocity Performance.<br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">Zero Compromise.</span>
          </h1>

          {/* Clean, Scannable Supporting Copy */}
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10 font-light leading-relaxed">
            Architecting premium cloud deployments and single-file application ecosystems tailored for instant delivery, extreme efficiency, and elite brand presence.
          </p>

          {/* Interactive Call to Action Stack */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-md sm:max-w-none">
            <button className="group flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-xl shadow-blue-600/20 active:scale-[0.98]">
              <span>Initialize Pipeline</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="flex items-center justify-center gap-2 bg-[#112240]/40 hover:bg-[#112240]/80 border border-slate-700/60 hover:border-slate-500/60 text-slate-200 font-medium px-8 py-4 rounded-xl transition-all duration-200 backdrop-blur-sm">
              <span>View Architecture</span>
            </button>
          </div>

          {/* Minimalist Trust Signals Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-16 mt-16 border-t border-slate-800/60 max-w-3xl">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 border border-blue-500/10">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Secure Pipeline</p>
                <p className="text-xs text-slate-400">Vercel Edge Protection</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400 border border-emerald-500/10">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">99.99% Uptime</p>
                <p className="text-xs text-slate-400">Global CDN Caching</p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}