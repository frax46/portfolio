"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const menuItems = [
  { name: 'HOME', href: '#hero' },
  { name: 'JOURNEY', href: '#projects' },
  { name: 'ABOUT', href: '#about' },
  { name: 'SKILLS', href: '#skills' },
];

export function MenuOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-8 right-8 z-50 mix-blend-difference"
      >
        <div className="flex items-center justify-center">
          <span className="font-outfit text-lg tracking-wider text-white">
            {isOpen ? 'CLOSE' : 'MENU'}
          </span>
        </div>
      </button>

      <div
        className={cn(
          'fixed inset-0 z-40 bg-[#111827] transition-transform duration-700 ease-in-out',
          isOpen ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        <div className="h-full flex items-center justify-center">
          <nav className="text-center">
            {menuItems.map((item, index) => (
              <div
                key={item.name}
                className="overflow-hidden"
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'block py-4 px-8 text-4xl md:text-6xl font-outfit text-white hover:text-[#f97316] transition-colors duration-300',
                    'transform transition-transform duration-500',
                    isOpen ? 'translate-y-0' : 'translate-y-full'
                  )}
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
} 