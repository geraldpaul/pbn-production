import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B1528] flex flex-col font-sans antialiased">
      
      {/* 1. Sticky Navigation Header */}
      <Navbar />

      {/* 2. Main Workspace Layout */}
      <main className="w-full flex flex-col items-center justify-start p-0 sm:p-8 gap-8">
        <Hero />
        
        {/* Future dashboard components or metrics grids will stack perfectly here */}
      </main>
      
    </div>
  );
}