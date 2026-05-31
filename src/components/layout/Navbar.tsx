"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on path changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full z-50 bg-navy/90 backdrop-blur-md border-b border-gold/15 shadow-lg py-4"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center group">
            <img
              src="/images/sbl_logo.png"
              alt="Swapnosiri Builders Ltd. Logo"
              className="h-11 md:h-12 w-auto object-contain transition-all duration-300 group-hover:brightness-110"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative font-sans text-sm font-medium tracking-widest uppercase transition-colors duration-300 py-2 ${
                    isActive ? "text-gold" : "text-white/80 hover:text-gold"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="navActiveLine"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-gold"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Section / CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+8801759983983"
              className="text-white hover:text-gold transition-colors duration-300 flex items-center gap-2 text-sm tracking-wider font-medium mr-4"
            >
              <Phone className="w-4 h-4 text-gold" />
              +8801759983983
            </a>
            <Link
              href="/projects"
              className="relative px-6 py-2.5 rounded-lg border border-gold bg-gold/10 hover:bg-gold text-white font-sans text-xs font-semibold tracking-widest uppercase transition-all duration-300 overflow-hidden group flex items-center gap-2"
            >
              <span className="relative z-10">Explore Projects</span>
              <ArrowRight className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-350 ease-out -z-10" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center lg:hidden gap-4">
            <a
              href="tel:+8801759983983"
              className="text-white hover:text-gold transition-colors duration-300 flex items-center justify-center p-2 rounded-full border border-white/10"
            >
              <Phone className="w-4 h-4 text-gold" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white hover:text-gold transition-colors duration-300 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (AnimatePresence) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-dark/95 backdrop-blur-lg flex flex-col justify-center px-8 md:px-16 lg:hidden"
          >
            <div className="flex flex-col gap-6 text-left">
              {navLinks.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`font-serif text-2xl font-semibold tracking-wider block transition-colors duration-300 ${
                        isActive ? "text-gold" : "text-white hover:text-gold"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="mt-8 border-t border-white/10 pt-8 flex flex-col gap-4"
              >
                <a
                  href="tel:+8801759983983"
                  className="text-white hover:text-gold transition-colors duration-300 text-lg flex items-center gap-3"
                >
                  <Phone className="w-5 h-5 text-gold" />
                  +8801759983983
                </a>
                <Link
                  href="/projects"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-6 py-4 text-center rounded-lg bg-gold text-white font-sans text-sm font-semibold tracking-widest uppercase transition-all duration-300 hover:bg-gold/90"
                >
                  Explore Projects
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
