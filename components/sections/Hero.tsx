"use client";

import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-between px-6 md:px-16 pt-20 pb-10 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/france.png" 
          alt="Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-20 blur-sm"
          onError={(e) => {
            // If image fails to load, use a fallback styling
            const target = e.target as HTMLImageElement;
            target.onerror = null; // Prevent infinite callbacks
            target.style.display = 'none';
            target.parentElement!.style.backgroundColor = '#f0f9ff';
          }}
        />
        <div className="absolute inset-0 bg-white/70"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Top header with tag */}
        <div className="mb-16 flex justify-between items-center">
          <div>
            <p className="text-sm tracking-widest uppercase text-gray-800 font-light">
              <span className="text-blue-600">#</span> France Annobil
            </p>
            <div className="flex space-x-3 mt-2">
              <p className="text-lg font-light text-gray-900">Software Developer</p>
              <span className="text-lg text-blue-600">&</span>
              <p className="text-lg font-light text-gray-900">Tech Enthusiast</p>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-24 mt-40">
          <div className="md:col-span-8">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light leading-tight mb-24 text-gray-900">
              <span className="text-gray-900">From</span> <span className="font-normal text-blue-600">conceptualization</span> <span className="text-gray-900">to</span> <span className="font-normal text-gray-900">implementation,</span><br />
              <span className="text-gray-900">I build</span> <span className="font-normal text-gray-900">elegant solutions</span> <span className="text-gray-900">with</span> <span className="font-normal text-blue-600">passion</span> <span className="text-gray-900">and</span> <span className="font-normal text-gray-900">precision.</span>
            </h1>
            
            {/* Location coordinates moved up from the right column for mobile view */}
            <div className="md:hidden mt-16">
              <p className="text-sm text-gray-800 tracking-wide">
                51° 30&apos; 35.5140&quot; N<br />
                0° 7&apos; 5.1312&quot; W
              </p>
            </div>
          </div>
          
          <div className="md:col-span-4 self-end">
            <p className="hidden md:block text-sm text-gray-800 tracking-wide">
              51° 30&apos; 35.5140&quot; N<br />
              0° 7&apos; 5.1312&quot; W
            </p>
          </div>
        </div>
      </div>

      {/* Footer with year only - no navigation */}
      <div className="mt-auto max-w-7xl mx-auto w-full relative z-10">
        <div className="border-t border-gray-200 pt-8">
          <p className="text-sm tracking-widest uppercase text-gray-800">
            [ <span className="text-blue-600">Init.</span> {new Date().getFullYear().toString().substring(2)} ]
          </p>
        </div>
      </div>
    </section>
  );
} 