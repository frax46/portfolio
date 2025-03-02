"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="w-full font-sans"
    >
      <div ref={ref} className="relative">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row border-t border-gray-100 py-16 relative"
          >
            {/* Timeline dot marker */}
            <div className="absolute left-0 md:left-[1.5%] top-16 w-2 h-2 rounded-full bg-blue-500 hidden md:block"></div>
            
            <div className="md:w-1/4 mb-8 md:mb-0 md:pl-8 md:pr-16">
              <p className="text-sm text-gray-500 mb-2">[T. {String(index + 1).padStart(2, '0')}/{String(data.length).padStart(2, '0')}]</p>
              <p className="font-light text-2xl text-gray-900">{item.title}</p>
            </div>

            <div className="md:w-3/4">
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-[1.5%] hidden md:block top-0 w-[1px] bg-gray-200"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[1px] bg-blue-500"
          />
        </div>
      </div>
    </div>
  );
}; 