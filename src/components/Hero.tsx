import React from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  PhoneCall, 
  CheckCircle2, 
  CreditCard, 
  Wifi, 
  Users, 
  Hospital, 
  QrCode,
  Award,
  Zap,
  Clock
} from 'lucide-react';
import type { Language } from '../data/translations';
import { content } from '../data/translations';

interface HeroProps {
  lang: Language;
  onOpenBooking: (serviceType?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenBooking }) => {
  const t = content[lang];

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-sky-50/70 via-white to-slate-50">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-tr from-sky-200/30 via-emerald-100/30 to-transparent blur-3xl -z-10 pointer-events-none" />
      <div className="absolute -top-24 right-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-2xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Subheadline & Action Controls */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Micro-badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-sky-200/80 shadow-xs text-xs font-bold text-sky-900 mx-auto lg:mx-0">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-emerald-700 font-extrabold uppercase tracking-wide">
                {t.hero.tagline}
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-600">{t.stickers.villagesCovered}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
              Let us take care of you —{' '}
              <span className="bg-gradient-to-r from-sky-600 via-sky-700 to-emerald-600 bg-clip-text text-transparent">
                Healthcare accessibility
              </span>{' '}
              for every corner of Bharat.
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t.hero.subheadline}
            </p>

            {/* Key Value Proposition Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white/80 p-2 rounded-xl border border-slate-100 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{t.hero.admissionSupport}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white/80 p-2 rounded-xl border border-slate-100 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{t.stickers.zeroPaperwork}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white/80 p-2 rounded-xl border border-slate-100 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{t.stickers.savingsBadge}</span>
              </div>
            </div>

            {/* Dual CTAs & Emergency Assistance */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => onOpenBooking('smartcard')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-extrabold text-base shadow-xl shadow-emerald-500/25 hover:shadow-2xl hover:shadow-emerald-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <CreditCard className="w-5 h-5 text-emerald-100" />
                <span>{t.hero.applyCardCTA}</span>
                <ArrowRight className="w-4 h-4 text-emerald-100" />
              </button>

              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-base border-2 border-slate-200/90 hover:border-sky-500 hover:text-sky-600 shadow-sm transition-all"
              >
                <span>{t.hero.exploreServicesCTA}</span>
              </a>
            </div>

            {/* Emergency Hotline Banner */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-3 text-xs text-slate-500">
              <div className="flex items-center gap-1.5 text-slate-700 font-medium bg-amber-50 border border-amber-200/80 px-3 py-1.5 rounded-lg">
                <PhoneCall className="w-3.5 h-3.5 text-amber-600 animate-bounce" />
                <span className="font-semibold">{t.hero.callNow}</span>
                <a href="tel:+919667033044" className="font-bold text-amber-800 underline hover:text-amber-900">
                  {t.hero.callNumber}
                </a>
              </div>
              <span className="hidden sm:inline text-slate-400">•</span>
              <span className="hidden sm:inline font-semibold text-emerald-600">
                100% Free Rural Patient Helpline
              </span>
            </div>
          </div>

          {/* Right Column: High-Fidelity Interactive Mockup & Floating Badges */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Ambient Background Glow Behind Card */}
            <div className="absolute w-72 h-72 sm:w-80 sm:h-80 bg-gradient-to-tr from-sky-400/20 to-emerald-400/20 rounded-full blur-3xl -z-10" />

            {/* The Aapka Smart Health Card 3D Realistic Showcase */}
            <div className="relative w-full max-w-md">
              
              {/* Floating Sticker 1 (Top Left): Sankalp Bharat Award */}
              <div className="absolute -top-7 -left-3 sm:-left-6 z-20 animate-float-slow">
                <div className="glass-badge flex items-center gap-2 px-3.5 py-2 rounded-2xl border border-amber-200 bg-white/95 text-slate-900 shadow-xl">
                  <div className="w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                    <Award className="w-4 h-4 text-amber-600" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-extrabold uppercase tracking-wider text-amber-700">Recognition</p>
                    <p className="text-xs font-black text-slate-800">Sankalp Bharat Winner</p>
                  </div>
                </div>
              </div>

              {/* Floating Sticker 2 (Top Right): 100% Verified Hospitals */}
              <div className="absolute -top-5 -right-2 sm:-right-4 z-20 animate-float-reverse">
                <div className="glass-badge flex items-center gap-2 px-3 py-1.5 rounded-2xl border border-sky-200 bg-white/95 text-slate-900 shadow-xl">
                  <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" />
                  <span className="text-xs font-bold text-slate-800">100% Verified Hospitals</span>
                </div>
              </div>

              {/* Physical Smart Health Card Container */}
              <div className="relative rounded-3xl p-6 sm:p-7 bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 text-white shadow-2xl border border-slate-700/80 overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
                {/* Holographic foil overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-emerald-500/10 to-sky-400/15 pointer-events-none" />
                <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-emerald-500/20 to-transparent rounded-full blur-xl" />

                {/* Card Top: Brand & Contactless */}
                <div className="flex items-center justify-between mb-8 relative z-10">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <span className="text-xl font-black tracking-tight">Aapka<span className="text-emerald-400">.</span></span>
                      <p className="text-[9px] uppercase tracking-widest text-slate-300 font-semibold">Smart Health Card</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Wifi className="w-5 h-5 rotate-90 text-slate-300" />
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                      EMV CHIP
                    </span>
                  </div>
                </div>

                {/* Golden Smart Card Chip Simulation */}
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <div className="w-12 h-9 rounded-md bg-gradient-to-tr from-amber-400 via-amber-200 to-amber-500 border border-amber-300/80 shadow-inner grid grid-cols-3 grid-rows-2 gap-0.5 p-1 opacity-95">
                    <div className="border border-amber-600/40 rounded-xs" />
                    <div className="border border-amber-600/40 rounded-xs" />
                    <div className="border border-amber-600/40 rounded-xs" />
                    <div className="border border-amber-600/40 rounded-xs" />
                    <div className="border border-amber-600/40 rounded-xs" />
                    <div className="border border-amber-600/40 rounded-xs" />
                  </div>
                  
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">Coverage Status</span>
                    <p className="text-xs font-bold text-emerald-400 flex items-center justify-end gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                      Active • 6 Family Members
                    </p>
                  </div>
                </div>

                {/* Card Number & Holder */}
                <div className="space-y-4 relative z-10">
                  <div className="font-mono text-lg sm:text-xl font-bold tracking-widest text-slate-100 flex justify-between">
                    <span>9842</span>
                    <span>••••</span>
                    <span>••••</span>
                    <span>4192</span>
                  </div>

                  <div className="flex items-end justify-between pt-2 border-t border-white/10 text-xs">
                    <div>
                      <p className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold">Cardholder Name</p>
                      <p className="font-bold text-sm tracking-wide text-white">RAMESHWAR SHARMA & FAMILY</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-white p-0.5 flex items-center justify-center">
                        <QrCode className="w-7 h-7 text-slate-900" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Sub-bar */}
                <div className="mt-4 pt-2 flex items-center justify-between text-[10px] text-slate-400">
                  <span>VALID THRU: 12/29</span>
                  <span className="text-emerald-400 font-semibold">SP RURAL INDIA SERVICES</span>
                </div>
              </div>

              {/* Floating Sticker 3 (Bottom Left): Swasthya-Mitra Status */}
              <div className="absolute -bottom-6 -left-2 sm:-left-5 z-20 animate-float-reverse">
                <div className="glass-badge flex items-center gap-3 p-3 rounded-2xl border border-emerald-200 bg-white/95 text-slate-900 shadow-xl">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold text-xs shadow-md shadow-emerald-500/30">
                    <Users className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <p className="text-[10px] font-bold text-emerald-700 uppercase">Swasthya-Mitra</p>
                    </div>
                    <p className="text-xs font-bold text-slate-900">Manoj Kumar (Assigned)</p>
                  </div>
                </div>
              </div>

              {/* Floating Sticker 4 (Bottom Right): 2-Hour Admission */}
              <div className="absolute -bottom-7 -right-2 sm:-right-4 z-20 animate-float-slow">
                <div className="glass-badge flex items-center gap-2 px-3 py-2 rounded-2xl border border-sky-200 bg-white/95 text-slate-900 shadow-xl">
                  <Zap className="w-4 h-4 text-amber-500 shrink-0" />
                  <div className="text-left">
                    <p className="text-xs font-black text-slate-800">2-Hr Bed Guarantee</p>
                    <p className="text-[10px] text-slate-500 font-medium">46+ Network Hospitals</p>
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
