"use client";

import React, { useRef, useState } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";

interface InteractiveCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function InteractiveCard({ children, className = "" }: InteractiveCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Motion values for raw coordinates
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Smoothen the motion values using spring physics
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  // Map coordinate coordinates (0 to 1) to rotation angles (-10 to 10 degrees)
  const rotateX = useTransform(springY, [0, 1], [10, -10]);
  const rotateY = useTransform(springX, [0, 1], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Normalize coordinates to 0 - 1
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    // Return smoothly to center
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative transition-shadow duration-300 will-change-transform ${className}`}
    >
      <div 
        style={{ transform: "translateZ(20px)" }} 
        className="w-full h-full"
      >
        {children}
      </div>
    </motion.div>
  );
}
