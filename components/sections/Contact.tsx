"use client";

import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm tracking-widest uppercase text-gray-800 mb-20">[ <span className="text-blue-600">Contact</span> ]</p>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-6">
            <h2 className="text-5xl md:text-6xl font-light mb-16 text-gray-900">Let&apos;s create <span className="text-blue-600">something</span> together.</h2>
            <p className="text-lg font-light leading-relaxed mb-16 text-gray-900">
              I&apos;m always open to new opportunities and interesting projects. Feel free to reach out if you&apos;d like to connect.
            </p>
            <a href="mailto:annobilfrance@gmail.com" className="inline-block text-lg border-b border-blue-600 text-blue-600 pb-1 hover:text-blue-700 hover:border-blue-700 transition-colors">
              annobilfrance@gmail.com
            </a>
          </div>
          
          <div className="md:col-span-6 md:pl-16 flex flex-col justify-between">
            <div className="space-y-8">
              <div>
                <p className="text-sm text-gray-800 mb-2">Location</p>
                <p className="text-lg font-light text-gray-900">London, United Kingdom</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-800 mb-2">Social</p>
                <div className="flex gap-8">
                  <a href="https://github.com/frax46" className="text-lg font-light text-gray-900 hover:text-blue-700 transition-colors">GitHub</a>
                  <a href="https://www.linkedin.com/in/france-annobil-27126692/" className="text-lg font-light text-gray-900 hover:text-blue-700 transition-colors">LinkedIn</a>
                </div>
              </div>
            </div>
            
            <div className="mt-16 pt-16 border-t border-blue-100">
              <p className="text-sm text-gray-800">
                Available for freelance projects starting <span className="text-blue-600">{new Date().toLocaleString('default', { month: 'long' })}</span> {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 