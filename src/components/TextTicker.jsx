import React from 'react';

export default function TextTicker() {
  const tickerItems = [
    "POLICE BLUE NATION",
    "STAND WITH THE SHIELD",
    "VERIFIED SUPPORT",
    "COMMUNITY FIRST",
    "HONORING ACTIVE & RETIRED"
  ];

  // We combine the array and repeat it to fill up screen real estate for the seamless loop
  const doubleItems = [...tickerItems, ...tickerItems, ...tickerItems];

  return (
    /* THE CONTROLLING LAYER: Exact short height, full layout bleed, and hidden overflow */
    <div className="w-full h-14 md:h-18 bg-[#0B1528]/80 backdrop-blur-md border-y border-slate-800/60 flex items-center overflow-hidden relative">
      
      {/* Visual Depth: Vignette gradient masks to fade the text in and out nicely at the screen edges */}
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0B1528] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0B1528] to-transparent z-10 pointer-events-none" />

      {/* THE KINETIC ENGINE: Infinite moving track */}
      <div className="flex whitespace-nowrap gap-16 animate-marquee performance-optimize">
        {doubleItems.map((text, index) => (
          <div key={index} className="flex items-center gap-16 select-none">
            
            {/* The Text Style: Premium uppercase bold typography with a clean gradient */}
            <span className="text-sm md:text-base font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-white to-slate-500 uppercase">
              {text}
            </span>

            {/* Micro Dot Divider */}
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 shadow-sm shadow-blue-500/50" />
            
          </div>
        ))}
      </div>

    </div>
  );
}