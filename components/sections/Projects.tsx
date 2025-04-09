"use client";

import React from 'react';
import Image from 'next/image';

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
              <h3 className="text-3xl md:text-4xl font-light mb-8 text-gray-900">Project Name One</h3>
              <p className="text-lg font-light leading-relaxed text-gray-900">
                A comprehensive web application built with modern technologies, 
                focusing on user experience and performance.
              </p>
            </div>
            <div className="md:col-span-7 aspect-video bg-blue-50 rounded-sm relative overflow-hidden border border-blue-100">
              <Image 
                src="/binocolo.png"
                alt="Binocolo project screenshot"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover hover:opacity-90 transition-all duration-300"
              />
            </div>
          </div>
          
          {/* Project 2 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-5">
              <p className="text-sm text-gray-800 mb-4">[ <span className="text-blue-600">P.</span> 02/04 ]</p>
              <h3 className="text-3xl md:text-4xl font-light mb-8 text-gray-900">Project Name Two</h3>
              <p className="text-lg font-light leading-relaxed text-gray-900">
                An innovative solution leveraging emerging technologies
                to solve complex business challenges.
              </p>
            </div>
            <div className="md:col-span-7 aspect-video bg-blue-50 rounded-sm flex items-center justify-center border border-blue-100">
              <p className="text-blue-600">Project Image</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 