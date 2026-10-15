import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Globe2, Sparkles } from 'lucide-react';

interface HeroProps {
  onSearch?: (query: string) => void;
  onOpenBooking: (serviceType?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative bg-white pt-8 pb-16 sm:pt-14 sm:pb-24 lg:pt-16 lg:pb-32 overflow-hidden">
      {/* Subtle architectural ambient background glow */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-teal-100/35 via-amber-100/25 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Bold, Modern Typography & High-Trust Narrative */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-left">
            
            {/* Pre-headline (Small, crisp, deep navy #0f172a) */}
            <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-slate-900/90 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
              <span>let us take care of you.</span>
            </p>

            {/* Main Headline: Very large, bold, tracking-tight geometric sans */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.4rem] font-extrabold text-slate-900 tracking-tight leading-[1.06] sm:leading-[1.08]">
              Your Family’s Health, Seamlessly Coordinated.
            </h1>

            {/* Sub-headline: Crisp, deep navy #0f172a */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-800 font-normal leading-relaxed max-w-2xl">
              Connecting every corner of Bharat with direct access to top-tier verified medical partners and compassionate community care.
            </p>

            {/* Action Elements: Dual CTAs */}
            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* Primary CTA (Vibrant Emerald / Dark Navy button style) */}
              <button
                type="button"
                onClick={() => onOpenBooking('hospitalization')}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-slate-950 hover:bg-teal-700 text-white font-semibold text-sm tracking-tight shadow-lg shadow-slate-950/15 hover:shadow-teal-700/25 transition-all cursor-pointer active:scale-[0.99] group"
              >
                <Globe2 className="w-4 h-4 text-teal-400 group-hover:text-white transition-colors" />
                <span>Explore Our Global Network</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
              </button>

              {/* Secondary CTA (Outlined minimalist button) */}
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-900 font-semibold text-sm border border-slate-300 hover:border-slate-400 shadow-2xs transition-all text-center"
              >
                <span>How It Works</span>
                <span className="text-slate-400">→</span>
              </a>
            </div>

            {/* Micro-Trust Signals Below CTAs */}
            <div className="pt-4 sm:pt-6 border-t border-slate-100 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm font-medium text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>500+ Communities Supported</span>
              </div>
              <span className="hidden sm:inline text-slate-300">•</span>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-teal-600 shrink-0" />
                <span>46+ Vetted Hospital Partners</span>
              </div>
            </div>

          </div>

          {/* Right Column: Fused Custom Visual (Cut-out Figures on Defined Geometric Backdrop) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            
            {/* Visual Fusion Composition Container */}
            <div className="relative w-full max-w-lg lg:max-w-none">
              
              {/* Custom Defined Geometric & Organic Background Panel */}
              <div className="relative rounded-[2.5rem] bg-gradient-to-tr from-amber-50 via-teal-50/40 to-sky-50/60 border border-slate-200/70 p-4 sm:p-6 shadow-xl shadow-slate-200/50 overflow-hidden">
                
                {/* Internal Decorative Layered Aura Shapes */}
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br from-amber-200/40 to-teal-200/30 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-gradient-to-tr from-teal-200/35 to-sky-200/30 rounded-full blur-2xl pointer-events-none" />

                {/* Subtle Geometric Framing Card */}
                <div className="relative rounded-[2rem] bg-gradient-to-b from-white/90 via-white/70 to-white/40 backdrop-blur-xs border border-white/80 p-2 sm:p-4">
                  
                  {/* The Cutout Figures: Mother, Daughter, Nurse & Grandfather in Bed */}
                  <div className="relative flex items-center justify-center">
                    <img
                      src="/hero-family-cutout.png"
                      alt="Dedicated healthcare nurse assisting mother, child, and grandfather"
                      className="w-full h-auto max-h-[380px] sm:max-h-[440px] lg:max-h-[460px] object-contain drop-shadow-[0_12px_24px_rgba(15,23,42,0.12)] transition-transform duration-500 hover:scale-[1.02]"
                      loading="eager"
                    />

                    {/* Gentle bottom grounding fade to melt bed into container */}
                    <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-white/85 via-white/30 to-transparent pointer-events-none rounded-b-[1.5rem]" />
                  </div>

                </div>

                {/* Floating Reassurance Badge 1 (Bottom Left) */}
                <div className="absolute -bottom-2 left-6 sm:left-8 z-20">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 border border-slate-200/80 shadow-lg shadow-slate-900/8 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight">
                          24/7 Care Coordination
                        </span>
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      </div>
                      <p className="text-[11px] text-slate-500 font-normal">
                        Verified Swasthya-Mitras On Call
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Badge 2 (Top Right) */}
                <div className="hidden sm:flex absolute -top-3 -right-3 z-20 bg-white/95 backdrop-blur-md rounded-xl px-3.5 py-2 border border-slate-200 shadow-md items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span className="text-xs font-semibold text-slate-800">100% Vetted Medical Partners</span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
