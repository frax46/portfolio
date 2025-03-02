"use client";

import { TimelineDemo } from "@/components/ui/timeline.demo";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <main className="bg-white text-gray-900">
      {/* Full-screen Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#151c31] z-50 flex flex-col items-center justify-center">
          <button 
            onClick={toggleMenu}
            className="absolute top-10 right-10 text-white hover:text-blue-400 transition-colors"
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <nav className="flex flex-col items-center justify-center gap-16 text-white">
            <a 
              href="#hero" 
              onClick={toggleMenu}
              className="text-7xl font-light hover:text-blue-400 transition-all duration-300"
            >
              HOME
            </a>
            <a 
              href="#journey" 
              onClick={toggleMenu}
              className="text-7xl font-light hover:text-blue-400 transition-all duration-300"
            >
              JOURNEY
            </a>
            <a 
              href="#expertise" 
              onClick={toggleMenu}
              className="text-7xl font-light hover:text-blue-400 transition-all duration-300"
            >
              SKILLS
            </a>
            <a 
              href="#contact" 
              onClick={toggleMenu}
              className="text-7xl font-light hover:text-blue-400 transition-all duration-300"
            >
              CONTACT
            </a>
          </nav>
          
          <div className="absolute bottom-10 flex space-x-6">
            <a href="#" className="text-white hover:text-blue-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-blue-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-blue-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
      )}

      {/* Hero Section - Minimalist Design */}
      <section id="hero" className="min-h-screen flex flex-col justify-between px-6 md:px-16 pt-20 pb-10">
        <div className="max-w-7xl mx-auto w-full">
          {/* Top header with tag and menu - ONLY ONE MENU BUTTON HERE */}
          <div className="mb-16 flex justify-between items-center">
            <div>
              <p className="text-sm tracking-widest uppercase text-gray-500 font-light">
                <span className="text-blue-500">#</span> France Annobil
              </p>
              <div className="flex space-x-3 mt-2">
                <p className="text-lg font-light">Software Developer</p>
                <span className="text-lg text-blue-500">&</span>
                <p className="text-lg font-light">Tech Enthusiast</p>
              </div>
            </div>
            
            {/* THE ONLY MENU BUTTON */}
            <button 
              onClick={toggleMenu} 
              className="fixed top-10 right-10 z-40 flex items-center gap-2 text-gray-900 hover:text-blue-500 transition-colors"
              aria-label="Open menu"
            >
              <span className="text-sm font-light tracking-wider">MENU</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Main content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-24 mt-40">
            <div className="md:col-span-8">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-light leading-tight mb-24">
                From <span className="font-normal text-blue-500">conceptualization</span> to <span className="font-normal">implementation,</span><br />
                I build <span className="font-normal">elegant solutions</span> with <span className="font-normal text-blue-500">passion</span> and <span className="font-normal">precision.</span>
              </h1>
              
              {/* Profile Image - Enhanced Style */}
              <div className="mt-32 mb-12 relative">
                <div className="relative w-72 h-72 md:w-96 md:h-96">
                  {/* Background elements */}
                  <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-blue-100/50"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-blue-100/30"></div>
                  
                  {/* Blue corner accent */}
                  <div className="absolute -bottom-2 -left-2 w-12 h-1 bg-blue-500"></div>
                  <div className="absolute -bottom-2 -left-2 w-1 h-12 bg-blue-500"></div>
                  
                  {/* Image container */}
                  <div className="relative w-full h-full rounded-3xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-white z-0"></div>
                    <Image 
                      src="/france.png" 
                      alt="France Annobil"
                      fill
                      priority
                      sizes="(max-width: 768px) 18rem, 24rem"
                      className="object-cover object-center z-10 grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 transform w-4 h-4 rounded-full bg-blue-500"></div>
                  <div className="absolute -bottom-1 right-12 w-8 h-8 border border-blue-200 rounded-full"></div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-4 self-end">
              <p className="text-sm text-gray-500 tracking-wide">
                51° 30&apos; 35.5140&quot; N<br />
                0° 7&apos; 5.1312&quot; W
              </p>
            </div>
          </div>
        </div>

        {/* Footer with year only - no navigation */}
        <div className="mt-auto max-w-7xl mx-auto w-full">
          <div className="border-t border-gray-200 pt-8">
            <p className="text-sm tracking-widest uppercase text-gray-500">[ <span className="text-blue-500">Init.</span> {new Date().getFullYear().toString().substring(2)} ]</p>
          </div>
        </div>
      </section>

      {/* Project Showcase - Minimalist Style */}
      <section id="projects" className="py-32 px-6 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm tracking-widest uppercase text-gray-500 mb-20">[ <span className="text-blue-500">Recent Projects</span> ]</p>
          
          <div className="space-y-40">
            {/* Project 1 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
              <div className="md:col-span-5">
                <p className="text-sm text-gray-500 mb-4">[ <span className="text-blue-500">P.</span> 01/04 ]</p>
                <h3 className="text-3xl md:text-4xl font-light mb-8">Project Name One</h3>
                <p className="text-lg font-light leading-relaxed">
                  A comprehensive web application built with modern technologies, 
                  focusing on user experience and performance.
                </p>
              </div>
              <div className="md:col-span-7 aspect-video bg-blue-50 rounded-sm flex items-center justify-center border border-blue-100">
                <p className="text-blue-300">Project Image</p>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
              <div className="md:col-span-5">
                <p className="text-sm text-gray-500 mb-4">[ <span className="text-blue-500">P.</span> 02/04 ]</p>
                <h3 className="text-3xl md:text-4xl font-light mb-8">Project Name Two</h3>
                <p className="text-lg font-light leading-relaxed">
                  An innovative solution leveraging emerging technologies
                  to solve complex business challenges.
                </p>
              </div>
              <div className="md:col-span-7 aspect-video bg-blue-50 rounded-sm flex items-center justify-center border border-blue-100">
                <p className="text-blue-300">Project Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Journey - Keeping this section as requested */}
      <section id="journey" className="py-32 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm tracking-widest uppercase text-gray-500 mb-20">[ <span className="text-blue-500">Professional Journey</span> ]</p>
          <TimelineDemo />
        </div>
      </section>

      {/* Expertise Section - Minimalist Style */}
      <section id="expertise" className="py-32 px-6 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm tracking-widest uppercase text-gray-500 mb-20">[ <span className="text-blue-500">Expertise</span> ]</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24">
            {/* Expertise 1 */}
            <div className="space-y-8">
              <p className="text-sm text-gray-500">[ <span className="text-blue-500">E.</span> 01/03 ]</p>
              <h3 className="text-3xl font-light">Frontend Development</h3>
              <div className="space-y-4">
                <p className="text-lg font-light leading-relaxed">
                  Creating beautiful, responsive interfaces with modern technologies.
                </p>
                <div className="pt-6 border-t border-blue-100 flex flex-wrap gap-4">
                  <span className="text-sm">React</span>
                  <span className="text-sm">Next.js</span>
                  <span className="text-sm">HTML5/CSS3</span>
                </div>
              </div>
            </div>
            
            {/* Expertise 2 */}
            <div className="space-y-8">
              <p className="text-sm text-gray-500">[ <span className="text-blue-500">E.</span> 02/03 ]</p>
              <h3 className="text-3xl font-light">Backend Systems</h3>
              <div className="space-y-4">
                <p className="text-lg font-light leading-relaxed">
                  Building robust and scalable server-side applications.
                </p>
                <div className="pt-6 border-t border-blue-100 flex flex-wrap gap-4">
                  <span className="text-sm">PHP</span>
                  <span className="text-sm">MySQL</span>
                  <span className="text-sm">Laravel</span>
                </div>
              </div>
            </div>
            
            {/* Expertise 3 */}
            <div className="space-y-8">
              <p className="text-sm text-gray-500">[ <span className="text-blue-500">E.</span> 03/03 ]</p>
              <h3 className="text-3xl font-light">Emerging Tech</h3>
              <div className="space-y-4">
                <p className="text-lg font-light leading-relaxed">
                  Exploring and implementing cutting-edge technologies.
                </p>
                <div className="pt-6 border-t border-blue-100 flex flex-wrap gap-4">
                  <span className="text-sm">AI</span>
                  <span className="text-sm">Blockchain</span>
                  <span className="text-sm">Web3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Minimalist Style */}
      <section id="contact" className="py-32 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm tracking-widest uppercase text-gray-500 mb-20">[ <span className="text-blue-500">Contact</span> ]</p>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-6">
              <h2 className="text-5xl md:text-6xl font-light mb-16">Let&apos;s create <span className="text-blue-500">something</span> together.</h2>
              <p className="text-lg font-light leading-relaxed mb-16">
                I&apos;m always open to new opportunities and interesting projects. Feel free to reach out if you&apos;d like to connect.
              </p>
              <a href="mailto:hello@franceannobil.com" className="inline-block text-lg border-b border-blue-500 text-blue-500 pb-1 hover:text-blue-600 hover:border-blue-600 transition-colors">
                hello@franceannobil.com
              </a>
            </div>
            
            <div className="md:col-span-6 md:pl-16 flex flex-col justify-between">
              <div className="space-y-8">
                <div>
                  <p className="text-sm text-gray-500 mb-2">Location</p>
                  <p className="text-lg font-light">London, United Kingdom</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 mb-2">Social</p>
                  <div className="flex gap-8">
                    <a href="#" className="text-lg font-light hover:text-blue-600 transition-colors">Twitter</a>
                    <a href="#" className="text-lg font-light hover:text-blue-600 transition-colors">GitHub</a>
                    <a href="#" className="text-lg font-light hover:text-blue-600 transition-colors">LinkedIn</a>
                  </div>
                </div>
              </div>
              
              <div className="mt-16 pt-16 border-t border-blue-100">
                <p className="text-sm text-gray-500">
                  Available for freelance projects starting <span className="text-blue-500">{new Date().toLocaleString('default', { month: 'long' })}</span> {new Date().getFullYear()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Minimalist Style */}
      <footer className="py-12 px-6 md:px-16 border-t border-blue-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">© {new Date().getFullYear()} <span className="text-blue-500">France Annobil</span></p>
          <p className="text-sm text-gray-500">Designed & Developed with purpose</p>
        </div>
      </footer>
    </main>
  );
}
