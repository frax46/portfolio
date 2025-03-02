"use client";

import React from 'react';

interface NavigationProps {
  menuOpen: boolean;
  onNavigate: (sectionId: string) => void;
}

export default function Navigation({ menuOpen, onNavigate }: NavigationProps) {
  return (
    <div 
      className={`fixed top-[78px] right-0 w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
        menuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <nav className="py-6 px-8">
        <ul className="space-y-6">
          <li>
            <button
              onClick={() => onNavigate('hero')}
              className="text-lg font-light hover:text-blue-500 transition-colors w-full text-left"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => onNavigate('journey')} 
              className="text-lg font-light hover:text-blue-500 transition-colors w-full text-left"
            >
              Journey
            </button>
          </li>
          <li>
            <button
              onClick={() => onNavigate('expertise')}
              className="text-lg font-light hover:text-blue-500 transition-colors w-full text-left"
            >
              Skills
            </button>
          </li>
          <li>
            <button
              onClick={() => onNavigate('contact')}
              className="text-lg font-light hover:text-blue-500 transition-colors w-full text-left"
            >
              Contact
            </button>
          </li>
        </ul>
        
        <div className="mt-8 pt-6 border-t border-gray-100 flex space-x-4">
          
          <a href="https://github.com/frax46" className="text-gray-700 hover:text-blue-500 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/france-annobil-27126692/" className="text-gray-700 hover:text-blue-500 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
      </nav>
    </div>
  );
} 