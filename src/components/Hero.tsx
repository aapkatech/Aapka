import React from 'react';
import { CheckCircle2, Shield } from 'lucide-react';
import type { Translations } from '../i18n/translations';

interface HeroProps {
  onSearch?: (query: string) => void;
  onOpenBooking?: (serviceType?: string) => void;
  t?: Translations['hero'];
}

export const Hero: React.FC<HeroProps> = ({ t }) => {
  const preHeadline = t?.preHeadline;
  const headline = t?.headline || "India's Trusted Healthcare Platform.";
  const subheadline = t?.subheadline || "Let us take care of you.";
  const communitiesSupported = t?.communitiesSupported || "500+ Communities Supported";
  const hospitalPartners = t?.hospitalPartners || "46+ Vetted Hospital Partners";
  const downloadApp = t?.downloadApp || "Download the App";

  return (
    <section className="relative bg-white pt-8 pb-16 sm:pt-14 sm:pb-24 lg:pt-16 lg:pb-32 overflow-hidden">
      {/* Subtle architectural ambient background glow */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-teal-100/35 via-amber-100/25 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Classic, High-Trust Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-left">
            
            {/* Pre-headline (Optional) */}
            {preHeadline && (
              <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-slate-900/90 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
                <span>{preHeadline}</span>
              </p>
            )}

            {/* Main Headline: Classic, prestigious professional typography */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[3.8rem] xl:text-[4.2rem] font-medium sm:font-semibold text-slate-900 tracking-[-0.02em] leading-[1.14] sm:leading-[1.12]">
              {headline}
            </h1>

            {/* Sub-headline: Warm & Reassuring */}
            <p className="text-lg sm:text-xl md:text-2xl text-slate-700 font-normal leading-relaxed max-w-2xl">
              {subheadline}
            </p>

            {/* Small 'Download the App' Action */}
            <div className="pt-1">
              <a
                href="https://play.google.com/store/apps/details?id=com.kapp.smartgram&pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-950 hover:bg-slate-800 text-white font-medium text-xs sm:text-sm tracking-tight shadow-xs hover:shadow transition-all group"
              >
                <svg 
                  className="w-4 h-4 fill-current text-teal-400 group-hover:scale-110 transition-transform shrink-0" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M3.609 1.814L13.793 12 3.61 22.186c-.195-.195-.31-.476-.31-.786V2.6c0-.31.115-.591.31-.786zm11.238 11.24l2.585 2.586-11.45 6.47 8.865-9.056zm0-2.108L5.982 1.89l11.45 6.47-2.585 2.586zm1.485 1.054l3.52-1.987c.666-.376.666-.99 0-1.366l-3.52-1.987-2.109 2.109 2.109 2.231z"/>
                </svg>
                <span>{downloadApp}</span>
              </a>
            </div>

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

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
