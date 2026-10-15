import React from 'react';
import { CheckCircle2, Shield, Sparkles } from 'lucide-react';
import type { Translations } from '../i18n/translations';

interface HeroProps {
  onSearch?: (query: string) => void;
  onOpenBooking?: (serviceType?: string) => void;
  t?: Translations['hero'];
}

export const Hero: React.FC<HeroProps> = ({ t }) => {
  const preHeadline = t?.preHeadline || "let us take care of you.";
  const headline = t?.headline || "Your Family’s Health, Seamlessly Coordinated.";
  const subheadline = t?.subheadline || "Connecting every corner of Bharat with direct access to top-tier verified medical partners and compassionate community care.";
  const communitiesSupported = t?.communitiesSupported || "500+ Communities Supported";
  const hospitalPartners = t?.hospitalPartners || "46+ Vetted Hospital Partners";
  const floatingCare = t?.floatingCare || "24/7 Care Coordination";
  const floatingCareSub = t?.floatingCareSub || "Verified Swasthya-Mitras On Call";
  const floatingVetted = t?.floatingVetted || "100% Vetted Medical Partners";

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
              <span>{preHeadline}</span>
            </p>

            {/* Main Headline: Very large, bold, tracking-tight geometric sans */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.4rem] font-extrabold text-slate-900 tracking-tight leading-[1.06] sm:leading-[1.08]">
              {headline}
            </h1>

            {/* Sub-headline: Crisp, deep navy #0f172a */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-800 font-normal leading-relaxed max-w-2xl">
              {subheadline}
            </p>

            {/* Micro-Trust Signals */}
            <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm font-medium text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>{communitiesSupported}</span>
              </div>
              <span className="hidden sm:inline text-slate-300">•</span>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-teal-600 shrink-0" />
                <span>{hospitalPartners}</span>
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
                          {floatingCare}
                        </span>
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      </div>
                      <p className="text-[11px] text-slate-500 font-normal">
                        {floatingCareSub}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Badge 2 (Top Right) */}
                <div className="hidden sm:flex absolute -top-3 -right-3 z-20 bg-white/95 backdrop-blur-md rounded-xl px-3.5 py-2 border border-slate-200 shadow-md items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span className="text-xs font-semibold text-slate-800">{floatingVetted}</span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
