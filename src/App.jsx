import React from 'react';
import Hero from './components/Hero';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B1528] flex items-center justify-center p-4 sm:p-8 font-sans antialiased">
      
      {/* Render the clean, isolated component */}
      <Hero />
      
    </div>
  );
}