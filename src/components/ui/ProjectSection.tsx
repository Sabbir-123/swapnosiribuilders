"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowRight, Building, ShieldCheck, X } from "lucide-react";
import { SBL_PROJECTS, Project } from "@/utils/data";
import InteractiveCard from "./InteractiveCard";
import InquiryForm from "./InquiryForm";
import ScrollReveal from "./ScrollReveal";

export default function ProjectSection() {
  const [filter, setFilter] = useState<"All" | "Ongoing" | "Upcoming" | "Completed">("All");
  const [activeInquiryProject, setActiveInquiryProject] = useState<Project | null>(null);

  const filteredProjects = SBL_PROJECTS.filter((project) => {
    if (filter === "All") return true;
    return project.status === filter;
  });

  const featuredProject = SBL_PROJECTS.find(p => p.id === "purbachal-heights");
  const otherProjects = SBL_PROJECTS.filter(p => p.id !== "purbachal-heights");

  return (
    <div className="space-y-16">
      {/* Category Filter Toolbar */}
      <ScrollReveal variant="fade-up" duration={0.8}>
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {(["All", "Ongoing", "Upcoming", "Completed"] as const).map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-6 py-2.5 rounded-full font-sans text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${
                filter === status
                  ? "bg-gold text-white shadow-lg shadow-gold/25 shadow-gold-glow"
                  : "bg-white/3 border border-white/8 text-white hover:border-gold hover:text-gold"
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Featured Project Showcase + Projects Catalogue */}
      {filter === "All" && featuredProject ? (
        <div className="space-y-16">
          {/* 1. Featured Project Star Row (Full-width, large split layout) */}
          <ScrollReveal variant="scale-up" duration={0.9}>
            <div className="w-full bg-white/[0.02] backdrop-blur-md rounded-3xl overflow-hidden border border-white/8 shadow-luxury-glow grid grid-cols-1 lg:grid-cols-12 gap-0 group">
              {/* Visual Image Banner column */}
              <div className="lg:col-span-7 relative h-[380px] md:h-[480px] lg:h-[580px] overflow-hidden">
                <Image
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-[1200ms] group-hover:scale-103"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08060f] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#08060f]/70 pointer-events-none" />
                
                {/* Badge */}
                <div className="absolute top-6 left-6 glassmorphism-light px-4 py-1.5 rounded-full border border-white/10">
                  <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-gold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                    FLAGSHIP PORTFOLIO
                  </span>
                </div>
              </div>

              {/* Context details column */}
              <div className="lg:col-span-5 p-8 md:p-12 lg:p-14 flex flex-col justify-between text-left">
                <div className="space-y-6">
                  <span className="font-sans text-[10px] font-bold text-gold tracking-[0.3em] uppercase block">
                    {featuredProject.area} • {featuredProject.status}
                  </span>
                  
                  <h3 className="font-serif text-3xl md:text-4xl lg:text-[40px] font-black text-white leading-tight uppercase tracking-tight">
                    {featuredProject.title}
                  </h3>
                  
                  <p className="text-[#F8F8F6]/75 font-sans font-light text-sm leading-relaxed">
                    {featuredProject.description}
                  </p>

                  <div className="flex items-center gap-2 text-gray-400 text-xs font-sans font-light border-b border-white/10 pb-4">
                    <MapPin className="w-4 h-4 text-gold shrink-0" />
                    <span>{featuredProject.location}</span>
                  </div>

                  {/* Stats / Tech Grid */}
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="bg-white/3 border border-white/5 p-4 rounded-xl">
                      <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Confinement Cones</span>
                      <span className="font-serif text-sm font-bold text-white uppercase block mt-1">Zone 2 Ductility</span>
                    </div>
                    <div className="bg-white/3 border border-white/5 p-4 rounded-xl">
                      <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Wind Shield</span>
                      <span className="font-serif text-sm font-bold text-gold uppercase block mt-1">225 KM/H Tested</span>
                    </div>
                    <div className="bg-white/3 border border-white/5 p-4 rounded-xl">
                      <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Reinforcement</span>
                      <span className="font-serif text-sm font-bold text-white uppercase block mt-1">BSRM 72.5G Steel</span>
                    </div>
                    <div className="bg-white/3 border border-white/5 p-4 rounded-xl">
                      <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Atrium entry</span>
                      <span className="font-serif text-sm font-bold text-gold uppercase block mt-1">Italian Marble</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between gap-4 pt-8 border-t border-white/10 mt-8">
                  <Link
                    href={`/projects/${featuredProject.id}`}
                    className="font-sans text-xs font-bold tracking-widest text-white hover:text-gold transition-colors duration-300 uppercase flex items-center gap-2 group/btn"
                  >
                    Explore Showcase
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                  <button
                    onClick={() => setActiveInquiryProject(featuredProject)}
                    className="px-6 py-3.5 rounded-lg text-xs font-bold tracking-widest bg-gold hover:bg-gold/90 text-white uppercase transition-all duration-300 hover:shadow-gold-glow hover:-translate-y-0.5"
                    style={{
                      boxShadow: "0 0 15px rgba(212, 160, 23, 0.15)"
                    }}
                  >
                    Direct Inquiry
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 2. Grid for other SBL projects underneath */}
          <div className="space-y-8 pt-10">
            <ScrollReveal variant="fade-right" duration={0.8}>
              <h4 className="font-serif text-xl md:text-2xl font-bold text-white text-left uppercase tracking-wider border-l-2 border-gold pl-4">
                Other Prestige Portfolios
              </h4>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherProjects.map((project, idx) => (
                <ScrollReveal
                  key={project.id}
                  variant="fade-up"
                  duration={0.8}
                  delay={(idx % 2) * 0.15}
                  className="h-full"
                >
                  <InteractiveCard className="h-full bg-white/[0.02] backdrop-blur-md rounded-2xl overflow-hidden shadow-lg border border-white/8 hover:border-gold/30 transition-all duration-300 flex flex-col group">
                    <div className="relative h-64 overflow-hidden shrink-0">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-103"
                      />
                      <div className="absolute top-4 left-4 glassmorphism-light px-4 py-1.5 rounded-full border border-white/10">
                        <span className={`font-sans text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 ${
                          project.status === "Ongoing" ? "text-white" : project.status === "Upcoming" ? "text-gold" : "text-emerald-400"
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            project.status === "Ongoing" ? "bg-gold animate-pulse" : project.status === "Upcoming" ? "bg-gold animate-bounce" : "bg-emerald-500"
                          }`} />
                          {project.status}
                        </span>
                      </div>
                    </div>

                    <div className="p-8 flex flex-col flex-grow text-left">
                      <span className="font-sans text-[10px] font-semibold text-gold tracking-[0.25em] uppercase mb-1">
                        {project.area}
                      </span>
                      <h4 className="font-serif text-xl font-bold text-white mb-2 tracking-wide line-clamp-1 uppercase">
                        {project.title}
                      </h4>
                      <p className="text-gray-400 font-sans font-light text-xs leading-relaxed mb-6 line-clamp-2">
                        {project.description}
                      </p>

                      <div className="flex items-center gap-2 text-gray-400 text-xs font-sans font-light mb-6 border-b border-white/10 pb-4">
                        <MapPin className="w-4 h-4 text-gold" />
                        <span>{project.location}</span>
                      </div>

                      <div className="flex items-center justify-between gap-3 mt-auto pt-4">
                        <Link
                          href={`/projects/${project.id}`}
                          className="font-sans text-xs font-bold tracking-widest text-white hover:text-gold transition-colors uppercase flex items-center gap-1 group/s-btn"
                        >
                          View Details
                          <ArrowRight className="w-3.5 h-3.5 group-hover/s-btn:translate-x-1 transition-transform" />
                        </Link>
                        <button
                          onClick={() => setActiveInquiryProject(project)}
                          className="px-4 py-2 text-[10px] font-bold tracking-widest bg-white/5 border border-white/10 hover:border-gold hover:text-gold text-white rounded uppercase transition-colors"
                        >
                          Inquire
                        </button>
                      </div>
                    </div>
                  </InteractiveCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Grid catalogue for filtered selections (e.g. Completed, Upcoming) */
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="h-full"
              >
                <InteractiveCard className="h-full bg-white/[0.02] backdrop-blur-md rounded-2xl overflow-hidden shadow-lg border border-white/8 hover:border-gold/30 transition-all duration-300 flex flex-col group">
                  {/* Visual Image Header */}
                  <div className="relative h-64 md:h-72 overflow-hidden shrink-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                    {/* Status Overlay Badge */}
                    <div className="absolute top-4 left-4 glassmorphism-light px-4 py-1.5 rounded-full">
                      <span className={`font-sans text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 ${
                        project.status === "Ongoing" ? "text-white" : project.status === "Upcoming" ? "text-gold" : "text-emerald-400"
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          project.status === "Ongoing" ? "bg-gold animate-pulse" : project.status === "Upcoming" ? "bg-gold animate-bounce" : "bg-emerald-500"
                        }`} />
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Card Context */}
                  <div className="p-6 flex flex-col flex-grow text-left">
                    <span className="font-sans text-[10px] font-semibold text-gold tracking-[0.25em] uppercase mb-1">
                      {project.area}
                    </span>
                    <h4 className="font-serif text-lg font-bold text-white mb-2 tracking-wide line-clamp-1 uppercase">
                      {project.title}
                    </h4>
                    <p className="text-gray-400 font-sans font-light text-xs leading-relaxed mb-6 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-2 text-gray-400 text-xs font-sans font-light mb-6 border-b border-white/10 pb-4">
                      <MapPin className="w-4 h-4 text-gold shrink-0" />
                      <span className="line-clamp-1">{project.location}</span>
                    </div>

                    {/* Core engineering safety triggers */}
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 text-[10px] font-sans font-medium text-gray-300 bg-white/5 px-3 py-1 rounded">
                        <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                        <span>BNBC Compliant Frame</span>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] font-sans font-medium text-gray-300 bg-white/5 px-3 py-1 rounded">
                        <Building className="w-3.5 h-3.5 text-gold" />
                        <span>225 km/h Wind Resistant</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-between gap-3 mt-auto pt-4">
                      <Link
                        href={`/projects/${project.id}`}
                        className="font-sans text-xs font-bold tracking-widest text-white hover:text-gold transition-colors duration-300 uppercase flex items-center gap-1 group/btn"
                      >
                        View Details
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Link>
                      <button
                        onClick={() => setActiveInquiryProject(project)}
                        className="px-4 py-2 text-[10px] font-bold tracking-widest bg-gold text-white hover:bg-gold/80 rounded-lg uppercase transition-all duration-300"
                      >
                        Inquire
                      </button>
                    </div>
                  </div>
                </InteractiveCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      {/* Inquiry Modal */}
      <AnimatePresence>
        {activeInquiryProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveInquiryProject(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>

              <InquiryForm 
                projectTitle={activeInquiryProject.title} 
                onSuccess={() => {
                  setTimeout(() => {
                    setActiveInquiryProject(null);
                  }, 3000);
                }}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
