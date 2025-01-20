"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import useMeasure from "react-use-measure";

export const InfiniteSliderCentered = ({
  children,
  duration = 30,
  className,
  reverse = false,
}: {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  reverse?: boolean;
}) => {
  const [duplicates, setDuplicates] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const [ref, { width }] = useMeasure();

  useEffect(() => {
    if (containerRef.current && width) {
      const containerWidth = containerRef.current.offsetWidth;
      const duplicatesNeeded = Math.ceil((containerWidth * 2) / width);
      setDuplicates(duplicatesNeeded);
    }
  }, [width]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <div
        ref={ref}
        className="flex min-w-full shrink-0 animate-slide"
        style={{
          animationDuration: `${duration}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {[...Array(duplicates)].map((_, i) => (
          <div key={i} className="flex shrink-0 justify-center min-w-full gap-4">
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}; 