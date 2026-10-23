import React, { useState, useEffect } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { AapkaLogo } from './AapkaLogo';
import type { Language, Translations } from '../i18n/translations';

interface NavbarProps {
  onOpenPortal?: () => void;
  lang: Language;
  setLang: (lang: Language) => void;
  t?: Translations['nav'];
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, t }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-xl border-b border-zinc-100 shadow-xs py-2.5' 
          : 'bg-white/95 backdrop-blur-sm border-b border-transparent py-2.5 sm:py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Left: Official Aapka Logo Lockup */}
        <a href="#" className="flex items-center group py-0.5" aria-label="Aapka Home">
          <AapkaLogo variant="full" className="h-10 sm:h-11 lg:h-12 w-auto transition-transform group-hover:scale-[1.02]" />
        </a>

        {/* Center / Navigation Links: Services, Global Network, Founders, About, Contact */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8 text-sm font-medium text-slate-600">
          <a href="#services" className="hover:text-slate-950 transition-colors">
            {t?.services || "Services"}
          </a>
          <a href="#network" className="hover:text-slate-950 transition-colors">
            {t?.network || "Global Network"}
          </a>
          <a href="#founders" className="hover:text-slate-950 transition-colors">
            {lang === 'hi' ? 'संस्थापक' : 'Founders'}
          </a>
          <a href="#recognition" className="hover:text-slate-950 transition-colors">
            {t?.about || "About"}
          </a>
          <a href="#contact" className="hover:text-slate-950 transition-colors">
            {t?.contact || "Contact"}
          </a>
        </nav>

        {/* Far Right: Language Switcher Pill */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="flex items-center bg-slate-100 p-0.5 rounded-full border border-slate-200/80 text-xs font-medium">
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                lang === 'en'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
              aria-label="Switch to English"
            >
              <Globe className="w-3.5 h-3.5 text-slate-400" />
              <span>English</span>
            </button>
            <button
              type="button"
              onClick={() => setLang('hi')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                lang === 'hi'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
              aria-label="हिन्दी में बदलें"
            >
              <span>हिन्दी</span>
            </button>
          </div>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-600 hover:text-slate-950 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Minimal Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-100 bg-white/98 backdrop-blur-xl px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-2">
          {/* Mobile Language Toggle */}
          <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
            <span className="text-xs font-medium text-slate-500">Language / भाषा:</span>
            <div className="flex items-center bg-slate-100 p-0.5 rounded-full border border-slate-200/80 text-xs font-medium">
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                  lang === 'en'
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-500'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang('hi')}
                className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                  lang === 'hi'
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-500'
                }`}
              >
                हिन्दी
              </button>
            </div>
          </div>

          <nav className="flex flex-col space-y-3 text-sm font-medium text-slate-700">
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-slate-950"
            >
              {t?.services || "Services"}
            </a>
            <a 
              href="#network" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-slate-950"
            >
              {t?.network || "Global Network"}
            </a>
            <a 
              href="#founders" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-slate-950 font-medium text-teal-700"
            >
              {lang === 'hi' ? 'संस्थापक' : 'Founders'}
            </a>
            <a 
              href="#recognition" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-slate-950"
            >
              {t?.about || "About"}
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-slate-950"
            >
              {t?.contact || "Contact"}
            </a>
          </nav>

          <div className="pt-4 border-t border-zinc-100 flex flex-col gap-2.5">
            <div className="flex justify-between items-center text-xs text-slate-500 pt-1">
              <span>{t?.directSupport || "Direct Support"}</span>
              <a href="tel:+919667033044" className="font-semibold text-slate-900">+91 9667033044</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
