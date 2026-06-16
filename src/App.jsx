import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Form from './components/Form';
import TextTicker from './components/TextTicker';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B1528] flex flex-col font-sans antialiased selection:bg-blue-500/30 selection:text-white">
      
      {/* 1. Header Bar */}
      <Navbar />

      {/* 
        Seamless Banner & Ticker Stack 
        - max-w-7xl mx-auto centers it on desktop matching your project bounds
        - flex flex-col with NO gap makes them touch edges perfectly
      */}
      <div className="w-full max-w-7xl mx-auto flex flex-col">
        {/* 2. Primary Top Hero Banner */}
        <Hero />

        {/* 3. Text Ticker (Flushed tight between both banners) */}
        <TextTicker />

        {/* 4. Secondary Banner 2 */}
        <Hero imageSrc="/banner2.png" showButtons={false} />
      </div>

      {/* 
        Main Interface Container (Form Workspace)
        - Keeping the layout padding here gives your data cards professional breathing room
      */}
      <main className="w-full max-w-7xl mx-auto p-4 sm:p-8 pb-24 mt-6">
        {/* 5. Core Intake Form Layout */}
        <div className="w-full">
          <Form />
        </div>
      </main>
      
    </div>
  );
}