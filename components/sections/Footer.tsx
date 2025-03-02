"use client";

import React from 'react';

export default function Footer() {
  return (
    <footer className="py-16 px-6 md:px-16 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <p className="text-3xl font-light mb-6">Annobil France</p>
            <p className="text-sm text-gray-300">
              Software Developer focused on creating elegant solutions to complex problems.
            </p>
          </div>
          
          <div className="md:col-span-4">
            <p className="text-sm text-gray-300 mb-6">Navigation</p>
            <ul className="space-y-4">
              <li><a href="#hero" className="text-sm text-white hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#projects" className="text-sm text-white hover:text-blue-400 transition-colors">Projects</a></li>
              <li><a href="#journey" className="text-sm text-white hover:text-blue-400 transition-colors">Journey</a></li>
              <li><a href="#expertise" className="text-sm text-white hover:text-blue-400 transition-colors">Expertise</a></li>
              <li><a href="#contact" className="text-sm text-white hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <p className="text-sm text-gray-300 mb-6">Connect</p>
            <div className="flex gap-6">
              <a href="https://github.com/frax46" className="text-sm text-white hover:text-blue-400 transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/france-annobil-27126692/" className="text-sm text-white hover:text-blue-400 transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-16 border-t border-gray-800 flex flex-col md:flex-row justify-between items-start md:items-center">
          <p className="text-xs text-gray-300">
            &copy; {new Date().getFullYear()} Annobil France. All rights reserved.
          </p>
          
          <p className="text-xs text-gray-300 mt-4 md:mt-0">
            Designed and built with passion
          </p>
        </div>
      </div>
    </footer>
  );
} 