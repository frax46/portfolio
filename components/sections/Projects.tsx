"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 md:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm tracking-widest uppercase text-gray-800 mb-20">[ <span className="text-blue-600">Recent Projects</span> ]</p>
        
        <div className="space-y-40">
          {/* Project 1 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-5">
              <p className="text-sm text-gray-800 mb-4">[ <span className="text-blue-600">P.</span> 01/04 ]</p>
              <Link 
                href="https://binocolo.co.uk" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block hover:text-blue-600 transition-colors"
              >
                <h3 className="text-3xl md:text-4xl font-light mb-8 text-gray-900">Binocolo</h3>
              </Link>
              <p className="text-lg font-light leading-relaxed text-gray-900">
              Discover neighborhoods that match your lifestyle and preferences. Our community reviews help you find the ideal place to call home.
              </p>
            </div>
            <div className="md:col-span-7 aspect-video bg-blue-50 rounded-sm relative overflow-hidden border border-blue-100">
              <Link href="https://binocolo.co.uk" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                <Image 
                  src="/binocolo.png"
                  alt="Binocolo project screenshot"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover hover:opacity-90 transition-all duration-300"
                />
              </Link>
            </div>
          </div>
          
          {/* Project 2 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-5">
              <p className="text-sm text-gray-800 mb-4">[ <span className="text-blue-600">P.</span> 02/04 ]</p>
              <Link 
                href="https://rggardendesign.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block hover:text-blue-600 transition-colors"
              >
                <h3 className="text-3xl md:text-4xl font-light mb-8 text-gray-900">RG Garden Design</h3>
              </Link>
              <p className="text-lg font-light leading-relaxed text-gray-900">
                An innovative solution leveraging emerging technologies
                to solve complex business challenges.
              </p>
            </div>
            <div className="md:col-span-7 aspect-video bg-blue-50 rounded-sm relative overflow-hidden border border-blue-100">
              <Link href="https://rggardendesign.com" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                <Image
                  src="/rggardendesign.png"
                  alt="RG Garden Design website"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover hover:opacity-90 transition-all duration-300"
                />
              </Link>
            </div>
          </div>


          {/* Project 3 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-5">
              <p className="text-sm text-gray-800 mb-4">[ <span className="text-blue-600">P.</span> 01/04 ]</p>
              <Link 
                href="https://www.mellluxe.com/ " 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block hover:text-blue-600 transition-colors"
              >
                <h3 className="text-3xl md:text-4xl font-light mb-8 text-gray-900">MellLuxe</h3>
              </Link>
              <p className="text-lg font-light leading-relaxed text-gray-900">
              Mell Luxe is a UK-based eco-luxury skincare brand offering handcrafted, vegan, and cruelty-free products. Their range includes natural bath bombs, bath salts, and body care items made with organic ingredients like Dead Sea salt, cocoa butter, and essential oils. Committed to sustainability, Mell Luxe uses plastic-free, recyclable packaging and ensures all products are palm oil-free and legally compliant for UK/EU sale. 
              </p>
            </div>
            <div className="md:col-span-7 aspect-video bg-blue-50 rounded-sm relative overflow-hidden border border-blue-100">
              <Link href="https://www.mellluxe.com/" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                <Image 
                  src="/melluxe.jpg"
                  alt="Binocolo project screenshot"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover hover:opacity-90 transition-all duration-300"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 