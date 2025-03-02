"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu state
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    
    // Toggle body overflow to prevent scrolling when menu is open
    if (!menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  // Navigate to section and close menu
  const navigateTo = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  // Clean up on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      {/* Simple Header Navigation */}
      <header className="fixed top-0 left-0 w-full bg-white z-50 px-6 md:px-16 py-6 flex justify-between items-center border-b border-gray-100">
        <div className="flex items-center">
          <h1 className="text-xl font-medium">FRANCE.</h1>
          <span className="ml-4 text-sm tracking-widest text-gray-800"># FRANCE ANNOBIL</span>
        </div>
        
        <button
          onClick={toggleMenu}
          className="flex items-center gap-2 text-gray-900 hover:text-blue-600 transition-colors"
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          <span className="text-sm font-medium tracking-wider">{menuOpen ? 'CLOSE' : 'MENU'}</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className={`transition-transform duration-300 ${menuOpen ? 'rotate-90' : ''}`}
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </header>

      {/* Dropdown Menu */}
      <div 
        className={`fixed top-[78px] right-0 w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="py-6 px-8">
          <ul className="space-y-6">
            <li>
              <button
                onClick={() => navigateTo('hero')}
                className="text-lg font-light text-gray-900 hover:text-blue-600 transition-colors w-full text-left"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateTo('projects')} 
                className="text-lg font-light text-gray-900 hover:text-blue-600 transition-colors w-full text-left"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateTo('journey')} 
                className="text-lg font-light text-gray-900 hover:text-blue-600 transition-colors w-full text-left"
              >
                Journey
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateTo('expertise')}
                className="text-lg font-light text-gray-900 hover:text-blue-600 transition-colors w-full text-left"
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateTo('contact')}
                className="text-lg font-light text-gray-900 hover:text-blue-600 transition-colors w-full text-left"
              >
                Contact
              </button>
            </li>
          </ul>
          
          <div className="mt-8 pt-6 border-t border-gray-100 flex space-x-4">
            <a href="#" className="text-gray-800 hover:text-blue-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-800 hover:text-blue-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </nav>
      </div>

      {/* Add spacing to account for fixed header */}
      <div className="h-24"></div>
    </>
  );
} 