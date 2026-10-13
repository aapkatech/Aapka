import React, { useState } from 'react';
import { 
  HeartHandshake, 
  Phone, 
  Menu, 
  X, 
  Globe, 
  Sparkles, 
  ShieldCheck, 
  ChevronRight,
  Activity
} from 'lucide-react';
import type { Language } from '../data/translations';
import { content } from '../data/translations';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  onOpenBooking: (serviceType?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = content[lang];

  return (
    <>
      {/* Top micro announcement bar */}
      <div className="bg-gradient-to-r from-sky-900 via-sky-800 to-emerald-900 text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="inline-flex items-center gap-1 bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full text-[11px] font-semibold border border-emerald-400/30">
              <Sparkles className="w-3 h-3 text-emerald-400" />
              {t.stickers.swatiRai}
            </span>
            <span className="hidden sm:inline text-slate-300">|</span>
            <span className="hidden sm:inline text-slate-200">
              {t.stickers.ficciAward} • {t.stickers.iimAward}
            </span>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <a 
              href="tel:+919667033044" 
              className="flex items-center gap-1.5 font-medium hover:text-emerald-300 transition-colors"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-semibold tracking-wide">{t.nav.emergencyCall}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-600 to-sky-700 text-white shadow-md shadow-sky-600/20 group-hover:scale-105 transition-transform">
              <Activity className="w-6 h-6 text-white" />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-white">
                <HeartHandshake className="w-3 h-3" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors">
                  Aapka<span className="text-emerald-500">.</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-sm bg-sky-50 text-sky-700 border border-sky-200">
                  Bharat
                </span>
              </div>
              <p className="text-[11px] font-medium text-slate-500 leading-tight">
                {lang === 'hi' ? 'स्वास्थ्य सेवा हर घर तक' : 'Healthcare For Every Corner'}
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <a 
              href="#services" 
              className="text-sm font-semibold text-slate-700 hover:text-sky-600 transition-colors"
            >
              {t.nav.services}
            </a>
            <a 
              href="#smart-card" 
              className="text-sm font-semibold text-slate-700 hover:text-sky-600 transition-colors flex items-center gap-1.5"
            >
              {t.nav.smartCard}
              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                40% OFF
              </span>
            </a>
            <a 
              href="#gram-mitra" 
              className="text-sm font-semibold text-slate-700 hover:text-sky-600 transition-colors"
            >
              {t.nav.gramMitra}
            </a>
            <a 
              href="#impact" 
              className="text-sm font-semibold text-slate-700 hover:text-sky-600 transition-colors"
            >
              {t.nav.impact}
            </a>
            <a 
              href="#stories" 
              className="text-sm font-semibold text-slate-700 hover:text-sky-600 transition-colors"
            >
              {t.nav.testimonials}
            </a>
            <a 
              href="#contact" 
              className="text-sm font-semibold text-slate-700 hover:text-sky-600 transition-colors"
            >
              {t.nav.contact}
            </a>
          </nav>

          {/* Right Action buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Selector Toggle */}
            <button
              onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold transition-all shadow-2xs hover:border-slate-300"
              title="Toggle Language"
              aria-label="Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-sky-600" />
              <span>{lang === 'en' ? 'हिन्दी' : 'English'}</span>
            </button>

            {/* CTA Button */}
            <button
              onClick={() => onOpenBooking('general')}
              className="relative group overflow-hidden inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/30 active:scale-95 transition-all"
            >
              <span>{t.nav.downloadApp}</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
              className="p-2 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 text-xs font-bold"
              aria-label="Switch Language"
            >
              {lang === 'en' ? 'हिन्दी' : 'EN'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-slate-200 bg-white/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="grid grid-cols-2 gap-2 pb-2">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-xl bg-slate-50 border border-slate-100 font-semibold text-slate-800 text-sm hover:bg-sky-50 hover:text-sky-700"
              >
                {t.nav.services}
              </a>
              <a
                href="#smart-card"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-xl bg-emerald-50 border border-emerald-100 font-semibold text-emerald-800 text-sm hover:bg-emerald-100"
              >
                {t.nav.smartCard}
              </a>
              <a
                href="#gram-mitra"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-xl bg-slate-50 border border-slate-100 font-semibold text-slate-800 text-sm hover:bg-sky-50"
              >
                {t.nav.gramMitra}
              </a>
              <a
                href="#impact"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-xl bg-slate-50 border border-slate-100 font-semibold text-slate-800 text-sm hover:bg-sky-50"
              >
                {t.nav.impact}
              </a>
              <a
                href="#stories"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-xl bg-slate-50 border border-slate-100 font-semibold text-slate-800 text-sm hover:bg-sky-50"
              >
                {t.nav.testimonials}
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-xl bg-slate-50 border border-slate-100 font-semibold text-slate-800 text-sm hover:bg-sky-50"
              >
                {t.nav.contact}
              </a>
            </div>

            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking('smartcard');
                }}
                className="w-full py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-md text-center"
              >
                {t.hero.applyCardCTA}
              </button>
              <a
                href="tel:+919667033044"
                className="w-full py-2.5 rounded-xl border border-sky-600 text-sky-700 font-bold text-sm text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                {t.hero.callNumber}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
