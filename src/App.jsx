import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Form from './components/Form';
import LogoScroll from './components/LogoScroll'; 
import MagazineGrid from './components/MagazineGrid'; // Imported perfectly!

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B1528] flex flex-col font-sans antialiased selection:bg-blue-500/30 selection:text-white">
      
      {/* Header Bar */}
      <Navbar />

      {/* Seamless Banner & Logo Stack */}
      <div className="w-full max-w-7xl mx-auto flex flex-col">
        {/* Primary Top Hero Banner */}
        <Hero />

        {/* Logo Scroll (Flushed tight between both banners) */}
        <LogoScroll />

        {/* Secondary Banner 2 */}
        <Hero imageSrc="/banner3.png" showButtons={false} />
        
        {/* ========================================================= */}
        {/* PLUGGED IN HERE: Renders right below the second banner    */}
        {/* ========================================================= */}
        <MagazineGrid />
      </div>

      {/* Main Interface Container (Form Workspace) */}
      <main className="w-full max-w-7xl mx-auto p-4 sm:p-8 pb-24 mt-6">
        <div className="w-full">
          <Form />
        </div>
      </main>
      
    </div>
  );
}