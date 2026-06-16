import React from 'react';

export default function TextTicker() {
  // The text strings you want to loop across the screen
  const items = [
    "POLICE BLUE NATION PLATFORM IS NOW LIVE",
    "SECURE DEPLOYMENT VERIFIED",
    "GLOBAL OPERATIONS ACTIVE",
    "COMPLIANCE AND SAFETY STANDARDS LOCKED"
  ];

  // We duplicate the array to create a seamless, gapless infinite scrolling loop
  const doubleItems = [...items, ...items, ...items];

  return (
    <div className="w-full bg-blue-950/40 border-y border-blue-500/20 py-3 overflow-hidden whitespace-nowrap selective:bg-transparent">
      <div className="inline-block animate-marquee-flow">
        {doubleItems.map((text, index) => (
          <span 
            key={index} 
            className="inline-flex items-center text-xs md:text-sm font-mono font-semibold tracking-wider text-blue-400 mx-8"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 mr-3 animate-pulse" />
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}