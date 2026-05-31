"use client";

import React from "react";
import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale-up" | "fade";
  duration?: number;
  delay?: number;
  threshold?: number;
  className?: string;
}

/**
 * A premium scroll reveal component using high-performance Framer Motion transitions.
 * Integrates easeOutExpo cubic-bezier bezier curves for a smooth luxury feel.
 */
export default function ScrollReveal({
  children,
  variant = "fade-up",
  duration = 0.9,
  delay = 0,
  threshold = 0.1,
  className = "",
}: ScrollRevealProps) {
  const getVariants = () => {
    switch (variant) {
      case "fade-up":
        return {
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        };
      case "fade-down":
        return {
          hidden: { opacity: 0, y: -40 },
          visible: { opacity: 1, y: 0 },
        };
      case "fade-left":
        return {
          hidden: { opacity: 0, x: 40 },
          visible: { opacity: 1, x: 0 },
        };
      case "fade-right":
        return {
          hidden: { opacity: 0, x: -40 },
          visible: { opacity: 1, x: 0 },
        };
      case "scale-up":
        return {
          hidden: { opacity: 0, scale: 0.94 },
          visible: { opacity: 1, scale: 1 },
        };
      case "fade":
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: threshold }}
      variants={getVariants()}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.16, 1, 0.3, 1], // easeOutExpo: very fast start, beautiful slow completion
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
