import React from 'react';
import { motion } from 'framer-motion';
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
    <section className="relative bg-white pt-2 pb-14 sm:pt-3 sm:pb-20 lg:pt-3 lg:pb-24 overflow-hidden">
      {/* Subtle architectural ambient background glow */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-teal-100/35 via-amber-100/25 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Classic, High-Trust Editorial Narrative (Aligned crisp with hero photo) */}
          <div className="lg:col-span-6 xl:col-span-5 space-y-5 sm:space-y-6 text-left pt-2 lg:pt-4">
            
            {/* Pre-headline (Optional) */}
            {preHeadline && (
              <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-slate-900/90 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
                <span>{preHeadline}</span>
              </p>
            )}

            {/* Main Headline: Classic, prestigious professional typography */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[3.6rem] xl:text-[4rem] font-medium sm:font-semibold text-slate-900 tracking-[-0.02em] leading-[1.14] sm:leading-[1.12]">
              {headline}
            </h1>

            {/* Sub-headline: Warm & Reassuring */}
            <p className="text-lg sm:text-xl md:text-2xl text-slate-700 font-normal leading-relaxed max-w-xl">
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

          {/* Right Column: Hero Visual (50% - 55% width, 550px - 620px height, slide-in from left, strictly clipped) */}
          <div className="lg:col-span-6 xl:col-span-7 relative flex items-center justify-center lg:justify-end w-full">
            <motion.div
              initial={{ x: -80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full h-[460px] sm:h-[520px] lg:h-[560px] xl:h-[620px] rounded-3xl overflow-hidden flex items-center justify-center p-3 sm:p-5 bg-gradient-to-tr from-amber-50/70 via-teal-50/30 to-sky-50/50 border border-slate-200/80 shadow-xl shadow-slate-200/50"
            >
              {/* Internal Decorative Layered Aura Shapes */}
              <div className="absolute -top-12 -right-12 w-56 h-56 bg-gradient-to-br from-amber-200/40 to-teal-200/30 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-52 h-52 bg-gradient-to-tr from-teal-200/35 to-sky-200/30 rounded-full blur-2xl pointer-events-none" />

              {/* Strict Inner Clipped Container with overflow-hidden */}
              <div className="relative w-full h-full overflow-hidden rounded-2xl flex items-center justify-center bg-white/50 backdrop-blur-xs border border-white/80">
                <img
                  src="/hero-family-cutout.png"
                  alt="Aapka Family Healthcare - Compassionate care for rural families"
                  className="w-full h-full max-h-[580px] object-contain transition-transform duration-500 ease-out hover:scale-105 drop-shadow-[0_16px_32px_rgba(15,23,42,0.12)]"
                  loading="eager"
                />

                {/* Seamless bottom grounding gradient overlay - eliminates any cut-out leakage */}
                <div className="absolute bottom-0 inset-x-0 h-16 sm:h-20 bg-gradient-to-t from-white/95 via-white/40 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

