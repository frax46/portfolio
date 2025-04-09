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
              <Link href="https://binocolo.co.uk" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                <h3 className="text-3xl md:text-4xl font-light mb-8 text-gray-900">Binocolo</h3>
              </Link>
              <p className="text-lg font-light leading-relaxed text-gray-900">
                Empowering you with real, honest insights from people who've lived where you want to live. No sales pitches, just authentic reviews to help you find your perfect home.
              </p>
            </div>
            <div className="md:col-span-7 aspect-video bg-blue-50 rounded-sm relative overflow-hidden border border-blue-100">
              <Link href="https://binocolo.co.uk" target="_blank" rel="noopener noreferrer" className="w-full h-full block">
                <Image
                  src="/images/binocolo.png"
                  alt="Binocolo project screenshot"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover hover:opacity-90 transition-opacity"
                />
              </Link>
            </div>
          </div>

          {/* Project 2 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-5">
              <p className="text-sm text-gray-800 mb-4">[ <span className="text-blue-600">P.</span> 02/04 ]</p>
              <Link href="https://rggardendesign.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                <h3 className="text-3xl md:text-4xl font-light mb-8 text-gray-900">RG Garden Design</h3>
              </Link>
              <p className="text-lg font-light leading-relaxed text-gray-900">
                Transform your property with our expert landscaping services. We blend aesthetic beauty with functional design to create outdoor spaces that enhance your lifestyle and property value.
              </p>
            </div>
            <div className="md:col-span-7 aspect-video bg-blue-50 rounded-sm relative overflow-hidden border border-blue-100">
              <Link href="https://rggardendesign.com" target="_blank" rel="noopener noreferrer" className="w-full h-full block">
                <Image
                  src="/images/rggardendesign.png"
                  alt="Coming Soon"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover hover:opacity-90 transition-opacity"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 