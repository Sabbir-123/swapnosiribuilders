"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      image: "/images/sbl_exterior_new.jpg",
      title: "Discover Modern Living",
      subtitle: "with Swapnosiri Builders Ltd.",
    },
    {
      image: "/images/sbl_exterior_2.jpg",
      title: "Architectural Grandeur",
      subtitle: "Built with Pristine Integrity.",
    }
  ];

  // Auto transition slideshow timer
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6500); // 6.5s interval
    return () => clearInterval(timer);
  }, []);

  // Motion values for mouse movement tracking
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Smooth springs for 3D parallax depth effect
  const springConfig = { damping: 30, stiffness: 120, mass: 0.6 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Map mouse coordinate values (0 to 1) to subtle offsets (-12px to 12px)
  const bgTranslateX = useTransform(springX, [0, 1], ["-1.5%", "1.5%"]);
  const bgTranslateY = useTransform(springY, [0, 1], ["-1.5%", "1.5%"]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Framer Motion staggered entrance animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number], // Luxury custom cubic-bezier
      },
    },
  };

  return (
    <div 
      ref={heroRef} 
      className="relative w-full h-screen overflow-hidden bg-[#08060f]"
    >
      {/* Blueprint Drawing Grid System background */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-3 z-0 pointer-events-none" />

      {/* 1. Cinematic Background Image Slider with 3D Mouse Parallax & Ken Burns Zoom */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none">
        {slides.map((slide, idx) => {
          const isActive = idx === activeSlide;
          return (
            <motion.div
              key={idx}
              initial={{ scale: 1.08, opacity: 0 }}
              animate={{ 
                scale: isActive ? 1.00 : 1.08, 
                opacity: isActive ? 1 : 0,
              }}
              transition={{ 
                opacity: { duration: 2.0, ease: "easeInOut" },
                scale: { duration: 25.0, ease: "linear" } 
              }}
              style={{
                x: bgTranslateX,
                y: bgTranslateY,
              }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={slide.image}
                alt="Swapnosiri Luxury Real Estate Building Render"
                className="w-full h-full object-cover object-[78%_center] md:object-right-top"
              />
            </motion.div>
          );
        })}
      </div>

      {/* Luxury Golden Ambient Glow behind the building */}
      <div 
        className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full bg-[radial-gradient(circle,rgba(212,160,23,0.12)_0%,transparent_70%)] blur-3xl right-0 top-1/2 -translate-y-1/2 z-10 pointer-events-none select-none"
      />

      {/* 2. Responsive Cinematic Dark Gradient Overlay (Keeps building 100% clearly visible) */}
      {/* Mobile overlay: vertical gradient to ensure bottom text readability */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none md:hidden"
        style={{
          background: "linear-gradient(to top, rgba(17, 13, 46, 0.95) 0%, rgba(17, 13, 46, 0.40) 55%, rgba(17, 13, 46, 0.0) 85%)"
        }}
      />
      {/* Desktop overlay: horizontal gradient to ensure left text readability and absolute right-side building clarity */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none hidden md:block"
        style={{
          background: "linear-gradient(to right, rgba(17, 13, 46, 0.92) 0%, rgba(17, 13, 46, 0.45) 45%, rgba(17, 13, 46, 0.0) 70%)"
        }}
      />

      {/* 3. Global Spacing & Layout Alignment wrapper */}
      <div className="max-w-7xl mx-auto h-full px-6 md:px-20 lg:px-[120px] relative z-20 flex items-center justify-start">
        {/* Content Container (620px restricted width to match Picture 2) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-[620px] text-left space-y-6"
        >
          {/* Eyebrow Text */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center"
          >
            <span className="font-sans text-sm font-bold text-[#D4AF37] tracking-wider">
              Building Your Future
            </span>
          </motion.div>

          {/* Headline (Spacious modern sans-serif sentence-case typography matching Picture 2) */}
          <motion.h1 
            variants={itemVariants}
            className="font-sans text-3xl sm:text-[40px] md:text-[46px] font-extrabold text-white leading-[1.2] tracking-normal"
          >
            {slides[activeSlide].title} {slides[activeSlide].subtitle}
          </motion.h1>

          {/* Description (Sentence case matching Picture 2 exactly) */}
          <motion.p 
            variants={itemVariants}
            className="text-white/80 font-sans text-sm md:text-base font-normal leading-relaxed max-w-[500px]"
          >
            Developing modern residential communities in <strong>Purbachal</strong> and <strong>Jolshiri Abashon</strong> with uncompromising Quality &amp; Innovative Design.
          </motion.p>

          {/* Buttons (Primary & Secondary CTA matching Picture 2 exactly) */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            {/* Primary CTA (Explore Projects) */}
            <Link
              href="/projects"
              className="px-6 py-3 rounded-lg bg-[#D4AF37] hover:bg-[#C9A227] text-white font-sans text-sm font-semibold tracking-wider transition-all duration-300 hover:-translate-y-0.5 hover:shadow-gold-glow flex items-center gap-2"
              style={{
                boxShadow: "0 0 15px rgba(212, 160, 23, 0.15)"
              }}
            >
              Explore Projects
            </Link>

            {/* Secondary CTA (Contact Us - transparent background with white border) */}
            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg border border-white bg-transparent hover:bg-white hover:text-[#08060f] text-white font-sans text-sm font-semibold tracking-wider transition-all duration-300 hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Slide Navigation Dots (Clickable controls) */}
      <div className="absolute bottom-8 right-6 md:right-20 lg:right-[120px] flex items-center gap-3 z-30">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveSlide(idx)}
            className={`w-8 h-2.5 rounded-full transition-all duration-350 ${
              activeSlide === idx ? "bg-[#D4AF37] w-12" : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-6 md:left-20 lg:left-[120px] flex items-center gap-4 z-20 pointer-events-none opacity-40">
        <span className="text-white text-[9px] font-sans font-semibold tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-12 h-[1px] bg-white/30 relative overflow-hidden">
          <motion.div 
            animate={{ x: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="absolute inset-y-0 left-0 w-1/2 bg-[#D4AF37]" 
          />
        </div>
      </div>
    </div>
  );
}
