import React, { useState } from 'react';
import { Menu, X, Shield, Cpu, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Dashboard', href: '#dashboard' },
    { name: 'Assets', href: '#assets' },
    { name: 'Analytics', href: '#analytics' },
    { name: 'Compliance', href: '#compliance' },
  ];

  return (
    <nav className="w-full bg-[#0B1528]/80 backdrop-blur-md border-b border-slate-800/60 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
        
        {/* BRAND LOGO AREA */}
        <div className="flex items-center gap-2.5 group cursor-pointer">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 shadow-lg shadow-blue-500/20">
            <Shield className="w-5 h-5 text-white transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 rounded-xl border border-white/20 group-hover:border-white/40 transition-colors" />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold tracking-wider text-sm sm:text-base uppercase leading-none">PBN</span>
            <span className="text-slate-400 text-[10px] tracking-widest font-medium uppercase mt-0.5">Operations</span>
          </div>
        </div>

        {/* DESKTOP NAVIGATION LINKS */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 py-2 group"
            >
              {link.name}
              {/* Premium under-line slider effect */}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* DESKTOP RIGHT ACTION BUTTON */}
        <div className="hidden md:flex items-center gap-4">
          <button className="flex items-center gap-2 bg-white/5 hover:bg-white text-slate-300 hover:text-[#0B1528] border border-white/10 hover:border-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all duration-300">
            <Cpu className="w-3.5 h-3.5" />
            <span>Terminal Access</span>
          </button>
        </div>

        {/* MOBILE MENU TOGGLE BUTTON */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-400 hover:text-white p-2 transition-colors focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE EXPANDABLE DRAWER */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-[#0B1528]/95 backdrop-blur-lg border-b border-slate-800/80 transition-all duration-300 ease-in-out origin-top ${
          isOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible h-0'
        }`}
      >
        <div className="px-4 pt-3 pb-6 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between text-slate-300 hover:text-white font-medium p-3 rounded-xl hover:bg-white/5 transition-all"
            >
              <span>{link.name}</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>
          ))}
          <div className="h-px bg-slate-800/60 my-1" />
          <button className="w-full flex items-center justify-center gap-2 bg-white text-[#0B1528] font-bold py-3 rounded-xl transition-all active:scale-[0.99]">
            <Cpu className="w-4 h-4" />
            <span>Terminal Access</span>
          </button>
        </div>
      </div>
    </nav>
  );
}