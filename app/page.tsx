"use client";

import React from 'react';
import Header from '@/components/ui/Header';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Journey from '@/components/sections/Journey';
import Expertise from '@/components/sections/Expertise';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Projects />
      <Journey />
      <Expertise />
      <Contact />
      <Footer />
    </main>
  );
}
