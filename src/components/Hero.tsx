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
    <section id="home" className="relative bg-white pt-2 pb-12 sm:pt-4 sm:pb-16 lg:pt-4 lg:pb-20 overflow-hidden scroll-mt-24">
      {/* Subtle architectural ambient background glow */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-teal-100/35 via-amber-100/25 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Classic, High-Trust Editorial Narrative */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6 sm:space-y-7 text-left pt-2 sm:pt-3 lg:pt-3 pb-2">
            
            {/* Pre-headline (Optional) */}
            {preHeadline && (
              <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-slate-900/90 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
                <span>{preHeadline}</span>
              </p>
            )}

            {/* Main Headline: Classic, prestigious professional typography */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[3.8rem] font-medium sm:font-semibold text-slate-900 tracking-[-0.02em] leading-[1.12]">
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

          {/* Right Column: Hero Visual - Aligned UP with headline text, sleek proportions, seamlessly blended */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex items-start justify-center lg:justify-end w-full pt-1 sm:pt-2">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-full max-w-lg lg:max-w-xl flex items-start justify-center lg:justify-end"
            >
              {/* Soft, borderless atmospheric radial ambient aura that merges into page */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gradient-to-tr from-teal-100/35 via-amber-100/20 to-sky-100/25 rounded-full blur-3xl pointer-events-none -z-10" />

              {/* Large, borderless visual seamlessly blended into the background without harsh overlay */}
              <div className="relative w-full flex items-start justify-center lg:justify-end">
                <picture className="w-full flex items-start justify-center lg:justify-end">
                  <source srcSet="/hero-family-cutout.webp" type="image/webp" />
                  <img
                    src="/hero-family-cutout.png"
                    alt="Aapka Family Healthcare - Compassionate care for families"
                    className="w-full h-auto max-h-[420px] sm:max-h-[460px] lg:max-h-[480px] object-contain drop-shadow-[0_12px_28px_rgba(15,23,42,0.07)]"
                    loading="eager"
                    decoding="async"
                  />
                </picture>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

