"use client";

import React from 'react';

interface HeaderProps {
  menuOpen: boolean;
  toggleMenu: () => void;
}

export default function Header({ menuOpen, toggleMenu }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 px-6 md:px-16 py-6 flex justify-between items-center border-b border-gray-100">
      <div className="flex items-center">
        <h1 className="text-xl font-medium">FRANCE.</h1>
        <span className="ml-4 text-sm tracking-widest text-gray-500"># FRANCE ANNOBIL</span>
      </div>
      
      <button
        onClick={toggleMenu}
        className="flex items-center gap-2 text-gray-900 hover:text-blue-500 transition-colors"
        aria-expanded={menuOpen}
        aria-label="Toggle menu"
      >
        <span className="text-sm font-medium tracking-wider">MENU</span>
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
  );
} 