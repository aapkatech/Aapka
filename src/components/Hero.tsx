import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Shield, HeartHandshake, PhoneCall } from 'lucide-react';
import type { Translations } from '../i18n/translations';

interface HeroProps {
  onSearch?: (query: string) => void;
  onOpenBooking?: (serviceType?: string) => void;
  t?: Translations['hero'];
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, t }) => {
  const headline = t?.headline || "India's Trusted Healthcare Platform.";
  const subheadline = t?.subheadline || "Let us take care of you.";
  const downloadApp = t?.downloadApp || "Download App";

  return (
    <section id="home" className="relative bg-white pt-3 pb-6 sm:pt-5 sm:pb-8 lg:pt-6 lg:pb-10 overflow-hidden scroll-mt-24">
      {/* Subtle ambient background glow */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-teal-100/30 via-amber-100/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Prestigious Editorial Narrative & Actionable CTAs */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
            
            {/* Top Reassurance Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-semibold tracking-wide shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-600 animate-pulse" />
              <span>24/7 Verified Healthcare Network Across 20+ Cities</span>
            </div>

            {/* Main Headline: Classic Editorial Typography in Lora Serif */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.3rem] font-semibold text-slate-900 tracking-[-0.02em] leading-[1.12]">
              {headline}
            </h1>

            {/* Reassuring Sub-headline */}
            <div className="space-y-1.5">
              <p className="text-lg sm:text-xl text-slate-900 font-medium tracking-tight">
                {subheadline}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed max-w-xl">
                Connecting families directly to 240+ verified partner hospitals with confirmed beds, transparent pricing, and caring on-ground coordinators by your side.
              </p>
            </div>

            {/* Action Bar: High-Trust Primary CTA + Google Play Store Button + Helpline */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              {onOpenBooking && (
                <button
                  type="button"
                  onClick={() => onOpenBooking('hospitalization')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-950 hover:bg-teal-700 text-white font-semibold text-xs sm:text-sm tracking-tight shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-[0.98] group"
                >
                  <span>Book Care Support</span>
                  <ArrowRight className="w-4 h-4 text-teal-400 group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
                </button>
              )}

              <a
                href="https://play.google.com/store/apps/details?id=com.kapp.smartgram&pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-medium text-xs sm:text-sm border border-slate-200/80 transition-all shadow-2xs group"
              >
                <svg 
                  className="w-4 h-4 fill-current text-teal-600 group-hover:scale-110 transition-transform shrink-0" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M3.609 1.814L13.793 12 3.61 22.186c-.195-.195-.31-.476-.31-.786V2.6c0-.31.115-.591.31-.786zm11.238 11.24l2.585 2.586-11.45 6.47 8.865-9.056zm0-2.108L5.982 1.89l11.45 6.47-2.585 2.586zm1.485 1.054l3.52-1.987c.666-.376.666-.99 0-1.366l-3.52-1.987-2.109 2.109 2.109 2.231z"/>
                </svg>
                <span>{downloadApp}</span>
              </a>

              <a
                href="tel:+917458895889"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-medium text-xs sm:text-sm border border-slate-200/80 transition-all shadow-2xs"
              >
                <PhoneCall className="w-3.5 h-3.5 text-teal-600" />
                <span>+91 74588 95889</span>
              </a>
            </div>

            {/* Micro-Trust Signals */}
            <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-y-2 gap-x-4 sm:gap-x-6 text-xs font-medium text-slate-600">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>20+ Active Cities</span>
              </div>
              <span className="text-slate-300">•</span>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Shield className="w-4 h-4 text-teal-600 shrink-0" />
                <span>240+ Vetted Hospitals</span>
              </div>
              <span className="text-slate-300">•</span>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <HeartHandshake className="w-4 h-4 text-teal-600 shrink-0" />
                <span>24/7 On-Call Support</span>
              </div>
            </div>

          </div>

          {/* Right Column: Grounded, Prestigious Custom Visual Presentation */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end w-full">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-full max-w-md lg:max-w-none"
            >
              {/* Premium Framing Card Container - Grounds the visual so it looks intentional, elegant, and seamless */}
              <div className="relative rounded-3xl bg-gradient-to-tr from-amber-50/70 via-teal-50/30 to-sky-50/50 border border-slate-200/80 p-3 sm:p-4 shadow-xl shadow-slate-200/60 overflow-hidden">
                
                {/* Internal Decorative Layered Aura Shapes */}
                <div className="absolute -top-10 -right-10 w-44 h-44 bg-gradient-to-br from-amber-200/35 to-teal-200/25 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-teal-200/30 to-sky-200/25 rounded-full blur-2xl pointer-events-none" />

                {/* Inner Stage Card */}
                <div className="relative rounded-2xl bg-white/70 backdrop-blur-xs border border-white/80 p-2 sm:p-3 overflow-hidden flex items-center justify-center">
                  <picture className="w-full flex items-center justify-center">
                    <source srcSet="/hero-family-cutout.webp" type="image/webp" />
                    <img
                      src="/hero-family-cutout.png"
                      alt="Dedicated healthcare nurse assisting mother, child, and grandfather"
                      className="w-full h-auto max-h-[300px] sm:max-h-[350px] lg:max-h-[370px] object-contain drop-shadow-[0_12px_24px_rgba(15,23,42,0.08)] transition-transform duration-500 hover:scale-[1.01]"
                      loading="eager"
                      decoding="async"
                    />
                  </picture>

                  {/* Soft bottom grounding to melt the base naturally */}
                  <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-white/90 via-white/40 to-transparent pointer-events-none rounded-b-2xl" />
                </div>

                {/* Floating Reassurance Badge (Bottom Left) */}
                <div className="absolute -bottom-2 left-4 sm:left-6 z-20">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 border border-slate-200/90 shadow-lg shadow-slate-900/8 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-teal-600" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold text-slate-900 tracking-tight">
                          24/7 Care Coordination
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      </div>
                      <p className="text-[10px] text-slate-500 font-normal">
                        Verified Hospital Navigators On Call
                      </p>
                    </div>
                  </div>
                </div>

                {/* Top Mini Badge (Top Right) */}
                <div className="hidden sm:flex absolute -top-2 -right-2 z-20 bg-white/95 backdrop-blur-md rounded-xl px-2.5 py-1 border border-slate-200 shadow-md items-center gap-1.5">
                  <Shield className="w-3 h-3 text-teal-600" />
                  <span className="text-[10px] font-semibold text-slate-800">100% Vetted Medical Partners</span>
                </div>

              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
