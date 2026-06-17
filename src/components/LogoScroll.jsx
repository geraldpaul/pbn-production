import React from 'react';

export default function LogoScroll() {
  // Replace these with your actual logo paths or SVGs (e.g., "/logos/badge.png")
  const logos = [
    { id: 1, name: "Agency Alpha", label: "SECURE" },
    { id: 2, name: "Division Beta", label: "VERIFIED" },
    { id: 3, name: "Department Gamma", label: "TACTICAL" },
    { id: 4, name: "Operations Delta", label: "COMPLIANT" },
    { id: 5, name: "HQ Epsilon", label: "GLOBAL" },
  ];

  // Triplicate the array to ensure a completely seamless, gapless loop
  const tripleLogos = [...logos, ...logos, ...logos];

  return (
    <div className="w-full bg-[#070d18] border-y border-slate-800 py-4 overflow-hidden whitespace-nowrap">
      {/* Reusing your high-performance marquee animation */}
      <div className="inline-block animate-marquee-flow">
        {tripleLogos.map((logo, index) => (
          <div 
            key={index} 
            className="inline-flex items-center justify-center mx-12 text-slate-500 hover:text-blue-400 transition-colors duration-300 pointer-events-none"
          >
            {/* Logo Blueprint Placeholder - Replace with your <img src={...} /> */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center text-[10px] font-bold border border-slate-700 text-slate-400">
                ★
              </div>
              <span className="text-xs font-mono font-bold tracking-widest uppercase">
                {logo.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}