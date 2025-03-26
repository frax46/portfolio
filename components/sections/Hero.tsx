"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [yearSuffix, setYearSuffix] = useState<string>('');

  useEffect(() => {
    setYearSuffix(new Date().getFullYear().toString().substring(2));
  }, []);
  
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-between px-6 md:px-16 pt-20 pb-10 relative overflow-hidden">
      {/* Background Image with Mask Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 to-white/90 mix-blend-overlay"></div>
        <Image 
          src="/afro.webp" 
          alt="Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-60"
          style={{ maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%)', WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%)' }}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.style.display = 'none';
            target.parentElement!.style.backgroundColor = '#f0f9ff';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-transparent to-white/90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,white_100%)] opacity-60"></div>
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

      {/* Footer with year */}
      <div className="mt-auto max-w-7xl mx-auto w-full relative z-10">
        <div className="border-t border-gray-200 pt-8">
          <p className="text-sm tracking-widest uppercase text-gray-800">
            [ <span className="text-blue-600">Init.</span> {yearSuffix} ]
          </p>
        </div>
      </div>
    </section>
  );
} 