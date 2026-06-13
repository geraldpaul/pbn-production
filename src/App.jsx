import React from 'react';
import Hero from './components/Hero';

export default function App() {
  return (
    /* CHANGED: justify-start pushes content to the top, p-0 on mobile removes edge gaps */
    <div className="min-h-screen bg-[#0B1528] flex flex-col items-center justify-start p-0 sm:p-8 font-sans antialiased">
      
      {/* Render the clean, isolated component */}
      <Hero />
      
    </div>
  );
}