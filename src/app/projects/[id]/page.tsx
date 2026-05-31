import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { 
  MapPin, 
  ShieldCheck, 
  Wind, 
  Award, 
  Sparkles, 
  Maximize, 
  ArrowLeft, 
  FileText,
  CheckCircle,
  Clock
} from "lucide-react";
import Link from "next/link";
import { SBL_PROJECTS } from "@/utils/data";
import InquiryForm from "@/components/ui/InquiryForm";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return SBL_PROJECTS.map((p) => ({
    id: p.id,
  }));
}

export default async function ProjectDetail({ params }: PageProps) {
  const { id } = await params;
  const project = SBL_PROJECTS.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-24 bg-transparent">
      {/* Back Button Overlay Banner */}
      <section className="bg-navy-gradient text-white py-12 relative border-b border-gold/15">
        <ScrollReveal variant="fade-down" duration={0.8} className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-gray-300 hover:text-gold transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects Catalogue
          </Link>
          <div className="flex items-center gap-2">
            <span className="font-sans text-[10px] font-bold text-gold tracking-widest bg-gold/10 px-3 py-1 rounded border border-gold/30 uppercase">
              {project.status}
            </span>
            <span className="font-sans text-[10px] font-bold text-gray-300 tracking-widest bg-white/5 px-3 py-1 rounded border border-white/10 uppercase">
              {project.area}
            </span>
          </div>
        </ScrollReveal>
      </section>

      {/* Cinematic Banner & Visual Section */}
      <section className="py-16 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Visual Carousel Render */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal variant="fade-right" duration={0.9}>
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-103"
                  priority
                />
              </div>
            </ScrollReveal>
            
            {/* Gallery Thumbnails */}
            <div className="grid grid-cols-2 gap-4">
              {project.images.map((img, idx) => (
                <ScrollReveal key={idx} variant="scale-up" duration={0.8} delay={idx * 0.15}>
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10">
                    <Image
                      src={img}
                      alt={`${project.title} Render ${idx + 1}`}
                      fill
                      sizes="(max-width: 768px) 50vw, 30vw"
                      className="object-cover"
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Core Overview & Callouts */}
          <ScrollReveal variant="fade-left" duration={0.9} delay={0.15} className="lg:col-span-5 flex flex-col items-start text-left justify-between space-y-6">
            <div className="space-y-4">
              <span className="font-sans text-xs font-bold text-gold tracking-[0.25em] uppercase block">
                Overview
              </span>
              <h1 className="font-serif text-3xl md:text-4xl font-extrabold text-white leading-tight">
                {project.title}
              </h1>
              <p className="text-gold font-serif text-lg italic tracking-wide">
                "{project.tagline}"
              </p>
              <div className="flex items-center gap-2 text-gray-450 text-sm font-sans font-light pb-4 border-b border-white/10">
                <MapPin className="w-4 h-4 text-gold shrink-0" />
                <span>{project.location}</span>
              </div>
              <p className="text-gray-300 font-sans text-sm font-light leading-relaxed pt-2">
                {project.description}
              </p>
            </div>

            {/* SBL Quality Safeguards */}
            <div className="w-full space-y-3 bg-[#140f2a]/80 p-6 rounded-2xl border border-white/10">
              <h4 className="font-serif text-xs font-bold text-white uppercase tracking-wider mb-2">SBL Structural Safety Seals</h4>
              <div className="grid grid-cols-2 gap-3 text-[10px] font-sans font-medium text-gray-350">
                <div className="flex items-center gap-2 bg-[#1e1740]/80 p-2.5 rounded border border-white/10">
                  <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
                  <span>BNBC Design</span>
                </div>
                <div className="flex items-center gap-2 bg-[#1e1740]/80 p-2.5 rounded border border-white/10">
                  <Wind className="w-4 h-4 text-gold shrink-0" />
                  <span>225 km/h Wind Shield</span>
                </div>
                <div className="flex items-center gap-2 bg-[#1e1740]/80 p-2.5 rounded border border-white/10">
                  <Award className="w-4 h-4 text-gold shrink-0" />
                  <span>Earthquake Core</span>
                </div>
                <div className="flex items-center gap-2 bg-[#1e1740]/80 p-2.5 rounded border border-white/10">
                  <Sparkles className="w-4 h-4 text-gold shrink-0" />
                  <span>Premium Grade</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Structural Highlights & Amenities Details */}
      <section className="py-20 bg-[#140f2a]/25 backdrop-blur-[2px] border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Engineering Features */}
          <ScrollReveal variant="fade-right" duration={0.9} className="text-left space-y-6">
            <span className="font-sans text-xs font-bold text-gold tracking-[0.25em] uppercase block">
              Engineering Specs
            </span>
            <h3 className="font-serif text-2xl font-bold text-white">Structural & Quality Safeguards</h3>
            <ul className="space-y-4">
              {project.features.map((feat, idx) => (
                <li key={idx} className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-gray-300 font-sans text-sm font-light leading-relaxed">{feat}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Premium Amenities */}
          <ScrollReveal variant="fade-left" duration={0.9} delay={0.15} className="text-left space-y-6">
            <span className="font-sans text-xs font-bold text-gold tracking-[0.25em] uppercase block">
              Luxury Accents
            </span>
            <h3 className="font-serif text-2xl font-bold text-white">Signature Amenities Included</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.amenities.map((amen, idx) => (
                <div key={idx} className="flex items-center gap-2.5 bg-[#1e1740]/80 p-4 rounded-xl border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  <span className="text-white font-sans text-xs font-medium leading-relaxed">{amen}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Floor Plans & Technical Specifications Lists */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Floor Plans */}
        <ScrollReveal variant="fade-right" duration={0.9} className="text-left space-y-6">
          <span className="font-sans text-xs font-bold text-gold tracking-[0.25em] uppercase block">
            Floor Plans
          </span>
          <h3 className="font-serif text-2xl font-bold text-white">Available Premium Space Layouts</h3>
          <div className="space-y-4">
            {project.floorPlans.map((plan, idx) => (
              <div key={idx} className="flex items-center justify-between bg-light p-4 rounded-xl border border-white/10">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-gold" />
                  <span className="text-white font-sans text-sm font-semibold">{plan.split(":")[0]}</span>
                </div>
                <span className="text-gray-400 font-sans text-xs font-light">{plan.split(":")[1]}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Technical specs table */}
        <ScrollReveal variant="fade-left" duration={0.9} delay={0.15} className="text-left space-y-6">
          <span className="font-sans text-xs font-bold text-gold tracking-[0.25em] uppercase block">
            Specifications
          </span>
          <h3 className="font-serif text-2xl font-bold text-white">Materials & Engineering Log</h3>
          <div className="border border-white/10 rounded-xl overflow-hidden shadow-sm">
            <table className="w-full text-left font-sans text-xs">
              <tbody>
                {project.specifications.map((spec, idx) => (
                  <tr key={idx} className="border-b border-white/10 last:border-0 hover:bg-white/5 transition-colors">
                    <td className="p-4 font-semibold text-white w-1/3 bg-white/5 border-r border-white/10">{spec.label}</td>
                    <td className="p-4 text-gray-300 font-light leading-relaxed">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </section>

      {/* Inquiry Block */}
      <section className="py-20 bg-navy-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />
        <ScrollReveal variant="scale-up" duration={0.9} className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-8">
          <h2 className="font-serif text-3xl font-bold text-white uppercase tracking-wider">Acquire Your SBL Residence</h2>
          <p className="text-gray-300 font-sans text-sm font-light max-w-lg mx-auto">
            Book an offline private consultation at our Purbachal site or arrange a digital presentation with our senior structural consultants.
          </p>
          <div className="max-w-xl mx-auto text-white">
            <InquiryForm projectTitle={project.title} />
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
