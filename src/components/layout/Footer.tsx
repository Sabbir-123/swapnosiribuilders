import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
  ];

  const services = [
    { name: "Modern Residential Buildings", href: "/services" },
    { name: "High Quality Apartment Construction", href: "/services" },
    { name: "BNBC Compliant Structural Design", href: "/services" },
    { name: "Earthquake & Wind Resistant Design", href: "/services" },
    { name: "Project Supervision & QA", href: "/services" },
  ];

  return (
    <footer className="bg-[#08060f] text-white relative overflow-hidden">
      {/* 1. Dual fading gold gradient divider at the very top boundary */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />

      {/* Subtle blueprint grid drafting overlay */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-[0.03] pointer-events-none" />
      
      {/* Absolute decorative coordinate ticks for architectural drafting feeling */}
      <div className="absolute top-12 left-12 text-[#D4AF37]/10 font-mono text-[8px] hidden lg:block select-none pointer-events-none">
        GRID_LOC: PURBACHAL_SBL_HQ // 23.77N 90.39E
      </div>
      <div className="absolute bottom-12 right-12 text-[#D4AF37]/10 font-mono text-[8px] hidden lg:block select-none pointer-events-none">
        SHEET_REF: SBL_ARCH_A1_09
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-20 lg:px-[120px] pt-24 pb-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* COLUMN 1: Brand Story (Left, Spans 4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6 text-left">
            <Link href="/" className="flex items-center group">
              <img
                src="/images/sbl_logo.png"
                alt="Swapnosiri Builders Ltd. Logo"
                className="h-12 w-auto object-contain transition-all duration-300 group-hover:brightness-110"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed font-sans font-light">
              Swapnosiri Builders Ltd. is a premier luxury residential developer dedicated to building elite architectural masterpieces in Purbachal New Town and Jolshiri Abashon. Anchored in structural safety, BNBC compliance, and timeless spatial beauty, we build quality homes with care and integrity.
            </p>
            <span className="text-[#D4AF37] text-xs font-serif font-bold uppercase tracking-widest">
              "The Apple of Real Estate Developers"
            </span>
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-gold hover:text-gold transition-all duration-300 text-gray-400 hover:shadow-gold-glow" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-gold hover:text-gold transition-all duration-300 text-gray-400 hover:shadow-gold-glow" aria-label="Instagram">
                <svg className="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-gold hover:text-gold transition-all duration-300 text-gray-400 hover:shadow-gold-glow" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* COLUMN 2: Double-width Navigation Catalogue (Center, Spans 4 Cols) */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="font-serif text-gold text-xs tracking-[0.2em] uppercase mb-6 font-bold">Catalogue</h3>
              <ul className="flex flex-col gap-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-sans font-light flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-[1px] bg-gold opacity-0 group-hover:opacity-100 group-hover:w-3 transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-gold text-xs tracking-[0.2em] uppercase mb-6 font-bold">Pillars</h3>
              <ul className="flex flex-col gap-3">
                {services.slice(0, 4).map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-sans font-light flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-[1px] bg-gold opacity-0 group-hover:opacity-100 group-hover:w-3 transition-all duration-300" />
                      {service.name.split(" ")[0] + " " + (service.name.split(" ")[1] || "")}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* COLUMN 3: Contact & Consultation (Right, Spans 4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6 text-left">
            <h3 className="font-serif text-gold text-xs tracking-[0.2em] uppercase mb-1 font-bold">Consultation</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm font-sans font-light leading-relaxed">
                  House #38, Road #302, Sector #15, Purbachal New Town, Dhaka, Bangladesh
                </span>
              </li>
              
              <li className="flex items-center gap-4 bg-white/3 border border-white/5 p-4 rounded-xl hover:border-gold/20 transition-colors">
                <div className="w-9 h-9 rounded-full bg-[#1e1740] border border-gold/15 flex items-center justify-center text-gold shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-gray-500 text-[10px] uppercase block tracking-wider">Direct Dial</span>
                  <a href="tel:+8801759983983" className="text-white hover:text-gold transition-colors text-sm font-medium">
                    +8801759983983
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-4 bg-white/3 border border-white/5 p-4 rounded-xl hover:border-gold/20 transition-colors">
                <div className="w-9 h-9 rounded-full bg-[#1e1740] border border-gold/15 flex items-center justify-center text-gold shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-gray-500 text-[10px] uppercase block tracking-wider">WhatsApp</span>
                  <a href="https://wa.me/8801759983983" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition-colors text-sm font-medium">
                    Message Consultants
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* 2. Gold divider: height 1px; linear-gradient fading at endpoints */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent mb-8" />

        {/* Bottom copyright section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
          <p className="text-gray-500 text-xs font-sans font-light">
            © 2026 Swapnosiri Builders Ltd. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="text-gray-500 hover:text-gray-400 transition-colors duration-300 text-xs font-sans font-light">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="text-gray-500 hover:text-gray-400 transition-colors duration-300 text-xs font-sans font-light">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
