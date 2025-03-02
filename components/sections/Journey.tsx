"use client";

import React from 'react';
import { TimelineDemo } from "@/components/ui/timeline.demo";

export default function Journey() {
  return (
    <section id="journey" className="py-32 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm tracking-widest uppercase text-gray-800 mb-20">[ <span className="text-blue-600">Professional Journey</span> ]</p>
        <TimelineDemo />
      </div>
    </section>
  );
} 