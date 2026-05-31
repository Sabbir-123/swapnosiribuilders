import React from "react";
import { MapPin, Phone, MessageSquare, Mail, Clock, ShieldCheck, Compass } from "lucide-react";
import InquiryForm from "@/components/ui/InquiryForm";

export default function Contact() {
  return (
    <div className="pt-24 bg-transparent">
      {/* Editorial Header Banner */}
      <section className="bg-navy-gradient text-white py-20 relative">
        <div className="absolute inset-0 bg-dot-grid opacity-25 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-left space-y-4">
          <span className="font-sans text-xs font-bold text-gold tracking-[0.25em] uppercase">
            Get In Touch
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-black max-w-3xl leading-tight">
            Schedule a Private Consultation
          </h1>
          <p className="text-gray-300 font-sans text-sm md:text-base font-light max-w-xl leading-relaxed">
            Arrange a digital presentation or visit our Purbachal site office to inspect structural logs.
          </p>
        </div>
      </section>

      {/* Main Interactive Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Info Columns */}
          <div className="lg:col-span-5 text-left space-y-8">
            <div className="space-y-4">
              <span className="font-sans text-xs font-bold text-gold tracking-[0.25em] uppercase block">
                Office Information
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-extrabold text-white leading-tight">
                Swapnosiri Builders Ltd. Head Office
              </h2>
              <p className="text-gray-300 font-sans text-sm font-light leading-relaxed">
                Our offices are designed to facilitate fully collaborative design alterations. Visit us to sit down with our lead structural engineers.
              </p>
            </div>

            {/* Communication cards */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold shrink-0 mt-1 border border-gold/15">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-serif text-xs font-bold text-white uppercase tracking-wider">Site Address</h4>
                  <p className="text-gray-400 text-xs font-sans font-light mt-0.5 leading-relaxed">
                    House #38, Road #302, Sector #15, Purbachal New Town, Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold shrink-0 mt-1 border border-gold/15">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-serif text-xs font-bold text-white uppercase tracking-wider">Phone Sourcing</h4>
                  <a
                    href="tel:+8801759983983"
                    className="text-gray-400 text-xs font-sans font-light mt-0.5 hover:text-gold transition-colors duration-300 block"
                  >
                    +8801759983983 (Direct Desk)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold shrink-0 mt-1 border border-gold/15">
                  <MessageSquare className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-serif text-xs font-bold text-white uppercase tracking-wider">WhatsApp Support</h4>
                  <a
                    href="https://wa.me/8801759983983"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 text-xs font-sans font-light mt-0.5 hover:text-gold transition-colors duration-300 block"
                  >
                    +8801759983983 (Chat Available 24/7)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold shrink-0 mt-1 border border-gold/15">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-serif text-xs font-bold text-white uppercase tracking-wider">Email Inquiry</h4>
                  <a
                    href="mailto:info@swapnosiri.com"
                    className="text-gray-400 text-xs font-sans font-light mt-0.5 hover:text-gold transition-colors duration-300 block"
                  >
                    info@swapnosiri.com
                  </a>
                </div>
              </div>
            </div>

            {/* Operational hours */}
            <div className="bg-[#140f2a]/80 p-6 rounded-2xl border border-white/10 text-xs text-white font-sans space-y-3">
              <h4 className="font-serif font-bold uppercase tracking-wider flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold" />
                Visiting Hours
              </h4>
              <div className="flex justify-between items-center text-gray-400 font-light border-b border-white/10 pb-2 last:border-0 last:pb-0">
                <span>Saturday - Thursday:</span>
                <span className="font-semibold text-white">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between items-center text-gray-400 font-light">
                <span>Friday:</span>
                <span className="font-semibold text-gold uppercase font-bold text-[9px] tracking-widest bg-gold/15 px-2 py-0.5 rounded">Closed</span>
              </div>
            </div>
          </div>

          {/* Inquiry form card Column */}
          <div className="lg:col-span-7 w-full">
            <InquiryForm />
          </div>
        </div>
      </section>

      {/* Interactive Google Map Mockup Layout */}
      <section className="h-[450px] relative w-full overflow-hidden border-t border-white/5 bg-[#140f2a]/25 backdrop-blur-[2px]">
        <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white">
          <div className="border border-white/10 p-8 rounded-2xl bg-[#1e1740] shadow-2xl max-w-sm space-y-4">
            <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center text-gold mx-auto bg-gold/10">
              <MapPin className="w-6 h-6 animate-bounce" />
            </div>
            <h3 className="font-serif text-lg font-bold uppercase tracking-wider">Sector 15 Site Office</h3>
            <p className="text-gray-400 font-sans text-xs font-light leading-relaxed">
              Plot #38, Road #302, Sector #15, Purbachal New Town, Dhaka. Located strategically near the main bypass expressway access point.
            </p>
            <a 
              href="https://maps.google.com/?q=Sector+15+Purbachal+New+Town+Dhaka" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gold hover:bg-gold/80 text-white font-sans text-[10px] uppercase font-bold tracking-widest transition-all"
            >
              Open in Google Maps
              <Compass className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
