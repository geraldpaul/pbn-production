import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Form from './components/Form';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B1528] flex flex-col font-sans antialiased">
      
      {/* 1. Sticky Navigation Header */}
      <Navbar />

      {/* 2. Main Workspace Layout Flow */}
      <main className="w-full flex flex-col items-center justify-start p-4 sm:p-8 gap-12 pb-24">
        
        {/* Full-width Hero Banner */}
        <Hero />
        
        {/* Completely modular Split Screen (Content + Form Array) */}
        <Form />

      </main>
      
    </div>
  );
}