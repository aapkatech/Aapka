import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, MapPin, Shield, PhoneCall, ChevronRight, MessageSquare } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppContactSection';
import { StoreBadgeIcon } from './StoreBadgeIcon';
import { getAppStoreUrl, handleAppDownloadClick, isIOSDevice } from '../utils/appDownload';
import type { Translations } from '../i18n/translations';

interface HeroProps {
  onSearch?: (query: string) => void;
  onOpenBooking?: (serviceType?: string) => void;
  t?: Translations['hero'];
}

export const Hero: React.FC<HeroProps> = ({ t }) => {
  const [connectOpen, setConnectOpen] = useState(false);

  const preHeadline = t?.preHeadline;
  const headline = t?.headline || "India's Trusted Healthcare Platform.";
  const subheadline = t?.subheadline || "Let us take care of you.";
  const communitiesSupported = t?.communitiesSupported || "25+ Cities";
  const villagesCovered = t?.villagesCovered || "500+ Villages";
  const hospitalPartners = t?.hospitalPartners || "50+ Vetted Hospital Partners";
  const downloadApp = t?.downloadApp || "Download the App";
  const connectLabel = t?.connectLabel || "Connect";

  const isIOS = isIOSDevice();
  const appStoreUrl = getAppStoreUrl();

  const whatsappNumber = "9667033044";
  const formattedWhatsApp = "+91 96670 33044";
  const helplineNumber = "8860880044";
  const formattedHelpline = "+91 88608 80044";
  const whatsappUrl = `https://wa.me/91${whatsappNumber}?text=Hello%20Aapka%20Team%2C%20I%20would%20like%20to%20connect%20for%20healthcare%20guidance.`;

  return (
    <section className="relative bg-white pt-2 pb-14 sm:pt-3 sm:pb-20 lg:pt-3 lg:pb-24 overflow-hidden">
      {/* Subtle architectural ambient background glow */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-teal-100/35 via-amber-100/25 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Classic, High-Trust Editorial Narrative */}
          <div className="lg:col-span-6 xl:col-span-5 space-y-6 sm:space-y-7 text-left pt-2 sm:pt-4 lg:pt-6 xl:pt-8 pb-2 lg:pb-6 relative z-30">
            
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

            {/* Primary Actions: OS-Aware App Download + Connect Side-by-Side */}
            <div className="pt-2 relative sm:static flex flex-wrap items-center gap-3">
              {/* Smart OS-Aware Download Button: App Store on iOS, Play Store on Android/Default */}
              <a
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => handleAppDownloadClick(e, appStoreUrl)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-950 hover:bg-slate-800 text-white font-medium text-xs sm:text-sm tracking-tight shadow-xs hover:shadow transition-all group"
              >
                <StoreBadgeIcon
                  isIOS={isIOS}
                  className="w-4 h-4 fill-current text-teal-400 group-hover:scale-110 transition-transform shrink-0"
                />
                <span>{downloadApp}</span>
              </a>

              {/* Premium Connect Action right next to Download App */}
              <div 
                className="static sm:relative inline-block"
                onMouseEnter={() => setConnectOpen(true)}
                onMouseLeave={() => setConnectOpen(false)}
              >
                <div className="static sm:relative inline-flex items-center">
                  {/* Connect Button */}
                  <button
                    type="button"
                    onClick={() => setConnectOpen(!connectOpen)}
                    aria-expanded={connectOpen}
                    aria-haspopup="true"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-950 hover:bg-slate-800 text-white font-medium text-xs sm:text-sm tracking-tight shadow-xs hover:shadow transition-all group/btn cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 text-teal-400 group-hover/btn:scale-110 transition-transform shrink-0" />
                    <span>{connectLabel}</span>
                    <ChevronRight className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${connectOpen ? 'rotate-90 sm:rotate-0 sm:translate-x-0.5 text-teal-400' : 'group-hover/btn:translate-x-0.5'}`} />
                  </button>

                  {/* Responsive Flyout Menu (Below on mobile, Right-side on sm+) */}
                  <AnimatePresence>
                    {connectOpen && (
                      <motion.div
                        initial={{ opacity: 0, x: -6, scale: 0.98 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -6, scale: 0.98 }}
                        transition={{ duration: 0.16, ease: "easeOut" }}
                        className="absolute left-0 top-full mt-2 sm:left-full sm:top-1/2 sm:mt-0 sm:-translate-y-1/2 sm:ml-3 z-40"
                      >
                        {/* Invisible hover bridge to prevent premature closure */}
                        <div className="hidden sm:block absolute -left-3 top-0 bottom-0 w-3 pointer-events-auto" />

                        <div className="relative w-64 sm:w-72 bg-white rounded-2xl shadow-xl shadow-slate-900/15 border border-slate-200/90 p-2 space-y-1">
                          
                          {/* Caret pointing left towards the Connect button on desktop */}
                          <div className="hidden sm:block absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-l border-b border-slate-200/90 rotate-45 transform" />

                          {/* Option 1: Connect on WhatsApp */}
                          <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-emerald-50/70 transition-colors group/item"
                          >
                            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#25D366] flex items-center justify-center shrink-0 border border-emerald-200/60 group-hover/item:scale-105 transition-transform shadow-2xs">
                              <WhatsAppIcon className="w-4 h-4 fill-current" />
                            </div>
                            <div className="text-left min-w-0">
                              <span className="text-xs font-semibold text-slate-900 block group-hover/item:text-emerald-700 transition-colors">
                                Connect on WhatsApp
                              </span>
                              <span className="text-[11px] text-slate-500 font-medium block">
                                {formattedWhatsApp}
                              </span>
                            </div>
                          </a>

                          {/* Option 2: Call on Helpline Number */}
                          <a
                            href={`tel:+91${helplineNumber}`}
                            className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-teal-50/70 transition-colors group/item"
                          >
                            <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 border border-teal-200/60 group-hover/item:scale-105 transition-transform shadow-2xs">
                              <PhoneCall className="w-4 h-4" />
                            </div>
                            <div className="text-left min-w-0">
                              <span className="text-xs font-semibold text-slate-900 block group-hover/item:text-teal-700 transition-colors">
                                Call on Helpline Number
                              </span>
                              <span className="text-[11px] text-slate-500 font-medium block">
                                {formattedHelpline}
                              </span>
                            </div>
                          </a>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Micro-Trust Signals: 25+ Cities, 500+ Villages/Towns, 50+ Vetted Hospital Partners */}
            <div className="pt-2 sm:pt-3 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm font-medium text-slate-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>{communitiesSupported}</span>
              </div>
              <span className="hidden sm:inline text-slate-300">•</span>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-teal-600 shrink-0" />
                <span>{villagesCovered}</span>
              </div>
              <span className="hidden sm:inline text-slate-300">•</span>
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-teal-600 shrink-0" />
                <span>{hospitalPartners}</span>
              </div>
            </div>

            {/* Official Government Partnership Trust Badge */}
            <div className="pt-1">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200/90 text-slate-700 text-[11px] sm:text-xs font-medium shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0 animate-pulse" />
                <span>Partnered with Ministry of Commerce and Ministry of Electronic and Information Technology</span>
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
              <div className="relative w-full h-full overflow-hidden rounded-2xl flex items-center justify-center bg-white/60 backdrop-blur-xs border border-white/80">
                <img
                  src="/hero-family-cutout.png"
                  alt="Aapka Family Healthcare - Compassionate care for rural families"
                  className="w-full h-full max-h-[580px] object-contain transition-transform duration-500 ease-out hover:scale-105 drop-shadow-[0_16px_32px_rgba(15,23,42,0.12)]"
                  loading="eager"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
