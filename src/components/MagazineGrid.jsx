import React from 'react';

export default function MagazineGrid() {
  // Data structure mapped with your direct magazine link locations
  const magazines = [
    { 
      id: 1, 
      title: "The Blue Line Sentinel", 
      subtitle: "Michael Barron - Life behind the badge 108 to protect and serve",
      issue: "Issue 1", 
      date: "June 2026", 
      cover: "/magz_june.png",
      url: "https://www.yumpu.com/kiosk/theBLUES"
    },
    { 
      id: 2, 
      title: "Tactical & Jurisdictional Review", 
      subtitle: "Candlelight vigil",
      issue: "Issue 2", 
      date: "May 2026", 
      cover: "/may_2026.png",
      url: "https://www.yumpu.com/kiosk/theBLUES/may-2026-blues-vol-42-no5/71103950"
    },
    { 
      id: 3, 
      title: "2025-Fallen Officers Memorial", 
      subtitle: "Special Memorial Issue",
      issue: "Special Issue", 
      date: "2025", 
      cover: "/2025_memorial.png",
      url: "https://www.yumpu.com/kiosk/theBLUES/2025-fallen-officers-memorial-issue/71103847"
    },
    { 
      id: 4, 
      title: "Federal Watch Journal", 
      subtitle: "War stories Fallen officers",
      issue: "Recent Issue", 
      date: "April 2026", 
      cover: "/april_2026.png",
      url: "https://www.yumpu.com/kiosk/theBLUES/april-2026-blues-vol-42-no4/71080025"
    },
    { 
      id: 5, 
      title: "The Shield & Brotherhood Memoir", 
      subtitle: "Supporting Law Enforcement in Texas",
      issue: "Recent Issue", 
      date: "March 2026", 
      cover: "/march_2026.png",
      url: "https://www.yumpu.com/kiosk/theBLUES/march-2026-blues-vol-42-no3/71053703"
    },
    { 
      id: 6, 
      title: "Command & Rank Intelligence", 
      subtitle: "US Marshals",
      issue: "Recent Issue", 
      date: "Feb 2026", 
      cover: "/feb_2026.png",
      url: "https://www.yumpu.com/kiosk/theBLUES/feb-2026-blues-vol-42-no2/70927734"
    },
  ];

  return (
    <section className="w-full bg-[#070d18]/40 border border-slate-800/60 rounded-2xl p-6 sm:p-8 backdrop-blur-sm mt-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 border-b border-slate-800/80 pb-4">
        <div>
          <span className="text-xs font-mono font-bold tracking-widest text-blue-500 uppercase">National Publications</span>
          <h2 className="text-xl sm:text-2xl font-mono font-bold text-white uppercase tracking-tight mt-1">Recent Magazines</h2>
        </div>
        <a 
          href="https://www.yumpu.com/kiosk/theBLUES" 
          target="_blank" 
          rel="noopener noreferrer"
          className="self-start sm:self-center text-xs font-mono font-bold bg-slate-900 hover:bg-blue-600 border border-slate-800 hover:border-blue-500 text-slate-400 hover:text-white px-4 py-2 rounded-lg transition-all duration-300 text-center"
        >
          View Full Catalog →
        </a>
      </div>

      {/* Responsive Grid Matrix */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {magazines.map((mag) => (
          <a 
            key={mag.id} 
            href={mag.url}
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative flex flex-col bg-[#0b1425]/40 border border-slate-800/50 rounded-xl overflow-hidden hover:border-blue-500/30 transition-all duration-300 shadow-lg hover:shadow-blue-950/20"
          >
            {/* Magazine Cover Window */}
            <div className="relative aspect-[430/560] w-full overflow-hidden bg-slate-950">
              <img 
                src={mag.cover} 
                alt={`${mag.title} ${mag.issue}`}
                loading="lazy"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out grayscale-[15%] group-hover:grayscale-0"
              />
              {/* Premium Subtle Gradient Mask Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
            </div>

            {/* Typography Metadata & Description */}
            <div className="p-4 flex flex-col flex-grow bg-gradient-to-b from-[#0b1425]/10 to-[#070d18]/90">
              <div className="flex items-center justify-between text-[10px] font-mono font-bold text-slate-500 tracking-wider uppercase mb-1">
                <span className="text-blue-500/80">{mag.issue}</span>
                <span>{mag.date}</span>
              </div>
              
              <h3 className="text-sm font-bold text-slate-200 group-hover:text-blue-400 font-sans tracking-wide transition-colors duration-200 line-clamp-1">
                {mag.title}
              </h3>
              
              <p className="text-xs text-slate-400 font-sans mt-1 line-clamp-2 leading-relaxed italic group-hover:text-slate-300 transition-colors duration-200">
                {mag.subtitle}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}