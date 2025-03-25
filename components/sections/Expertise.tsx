"use client";

import React from 'react';

export default function Expertise() {
  return (
    <section id="expertise" className="py-32 px-6 md:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm tracking-widest uppercase text-gray-800 mb-20">[ <span className="text-blue-600">Expertise</span> ]</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24">
          {/* Expertise 1 */}
          <div className="space-y-8">
            <p className="text-sm text-gray-800">[ <span className="text-blue-600">E.</span> 01/03 ]</p>
            <h3 className="text-3xl font-light text-gray-900">Frontend Development</h3>
            <div className="space-y-4">
              <p className="text-lg font-light leading-relaxed text-gray-900">
                Creating beautiful, responsive interfaces with modern technologies.
              </p>
              <div className="pt-6 border-t border-blue-100 flex flex-wrap gap-4">
                <span className="text-sm text-gray-800">React</span>
                <span className="text-sm text-gray-800">Next.js</span>
                <span className="text-sm text-gray-800">HTML5/CSS3</span>
              </div>
            </div>
          </div>
          
          {/* Expertise 2 */}
          <div className="space-y-8">
            <p className="text-sm text-gray-800">[ <span className="text-blue-600">E.</span> 02/03 ]</p>
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-2">Backend Systems</h3>
              <p className="text-gray-800 mb-4">While it's been a while since I've worked with backend technologies, I have a solid foundation and can quickly get back up to speed with server-side development.</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-blue-600 text-sm">Node.js</span>
                <span className="text-blue-600 text-sm">Express</span>
                <span className="text-blue-600 text-sm">MongoDB</span>
                <span className="text-blue-600 text-sm">RESTful APIs</span>
              </div>
            </div>
          </div>
          
          {/* Expertise 3 */}
          <div className="space-y-8">
            <p className="text-sm text-gray-800">[ <span className="text-blue-600">E.</span> 03/03 ]</p>
            <h3 className="text-3xl font-light text-gray-900">Emerging Tech</h3>
            <div className="space-y-4">
              <p className="text-lg font-light leading-relaxed text-gray-900">
                Exploring and implementing cutting-edge technologies.
              </p>
              <div className="pt-6 border-t border-blue-100 flex flex-wrap gap-4">
                <span className="text-sm text-gray-800">AI</span>
                <span className="text-sm text-gray-800">Blockchain</span>
                <span className="text-sm text-gray-800">Web3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 