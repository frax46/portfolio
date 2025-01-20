"use client";
import { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'Journey', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
];

export function Navbar() {
  const [active, setActive] = useState('/');

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-2xl font-outfit font-bold text-[#111827] hover:text-[#2563eb] transition-colors"
        >
          Portfolio
        </Link>
        
        <ul className="flex items-center space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={cn(
                  "font-inter text-base hover:text-[#2563eb] transition-colors",
                  active === item.href
                    ? "text-[#2563eb] font-medium"
                    : "text-[#111827]"
                )}
                onClick={() => setActive(item.href)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
} 