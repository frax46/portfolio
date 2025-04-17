"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(0);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  
  return (
    <footer className="bg-gray-900 text-white py-20 px-6 md:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Navigation Links */}
          <div className="md:col-span-1">
            <p className="text-sm text-gray-300 mb-6">Navigation</p>
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-sm text-white hover:text-blue-400 transition-colors">Home</a>
              <a href="#" className="text-sm text-white hover:text-blue-400 transition-colors">Projects</a>
              <a href="#" className="text-sm text-white hover:text-blue-400 transition-colors">Journey</a>
              <a href="#" className="text-sm text-white hover:text-blue-400 transition-colors">Skills</a>
              <a href="#" className="text-sm text-white hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>

          {/* Connect Links */}
          <div className="md:col-span-1">
            <p className="text-sm text-gray-300 mb-6">Connect</p>
            <div className="flex flex-col space-y-4">
              <a href="https://github.com/frax46" className="text-sm text-white hover:text-blue-400 transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/france-annobil-27126692/" className="text-sm text-white hover:text-blue-400 transition-colors">LinkedIn</a>
            </div>
          </div>

          {/* Copyright */}
          <div className="md:col-span-2 flex items-center justify-between">
            <p className="text-sm text-gray-300">
              © {currentYear || ''} France Annobil. All rights reserved.
            </p>

            {/* Masked Image */}
            <div className="relative w-48 h-48">
              {/* Brush Stroke SVG Mask */}
              <svg width="0" height="0">
                <defs>
                  <clipPath id="brushStroke" clipPathUnits="objectBoundingBox">
                    <path d="M0.3,0.1 
                      C0.4,0.05 0.5,0 0.7,0 
                      C0.9,0 1,0.2 1,0.4 
                      C1,0.6 0.9,0.8 0.7,0.9 
                      C0.5,1 0.3,0.95 0.2,0.85 
                      C0.1,0.75 0,0.6 0,0.4 
                      C0,0.2 0.1,0.15 0.3,0.1 
                      M0.4,0.3 
                      C0.3,0.4 0.3,0.5 0.4,0.6 
                      C0.5,0.7 0.6,0.7 0.7,0.6 
                      C0.8,0.5 0.8,0.4 0.7,0.3 
                      C0.6,0.2 0.5,0.2 0.4,0.3
                      Z" />
                  </clipPath>
                </defs>
              </svg>
              <div className="relative w-full h-full group">
                <div className="absolute inset-0 bg-blue-400/10 transform transition-transform duration-500 group-hover:scale-110" style={{ clipPath: 'url(#brushStroke)' }}></div>
                <div className="relative w-full h-full transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-3" style={{ clipPath: 'url(#brushStroke)' }}>
                  <Image
                    src="/afro.webp"
                    alt="Decorative footer image"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                {/* Brush Stroke Effects */}
                <div className="absolute inset-0 opacity-50 mix-blend-overlay bg-gradient-to-br from-blue-400/30 to-transparent" style={{ clipPath: 'url(#brushStroke)' }}></div>
                <div className="absolute inset-0 border-2 border-blue-400/20" style={{ clipPath: 'url(#brushStroke)' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 