import React, { useState, useEffect } from 'react';
import { Globe, ArrowRight, Menu, X } from 'lucide-react';
import { AapkaLogo } from './AapkaLogo';

interface NavbarProps {
  onOpenPortal: () => void;
  lang: 'en' | 'global';
  setLang: (lang: 'en' | 'global') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPortal, lang, setLang }) => {
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
          ? 'bg-white/80 backdrop-blur-xl border-b border-zinc-100 shadow-xs py-3.5' 
          : 'bg-white/90 backdrop-blur-sm border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Left: Brand Identity with Official Logo & Calm Pulse */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
            <AapkaLogo className="w-full h-full" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-zinc-950">
              Aapka
            </span>
            <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-zinc-100 text-[11px] font-medium text-zinc-600 border border-zinc-200/60">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-600 animate-calm-pulse" />
              <span>Care Active</span>
            </span>
          </div>
        </a>

        {/* Center / Navigation Links (Clean & Spacious) */}
        <nav className="hidden md:flex items-center gap-9 text-sm font-medium text-zinc-600">
          <a href="#services" className="hover:text-zinc-950 transition-colors">
            Services
          </a>
          <a href="#network" className="hover:text-zinc-950 transition-colors">
            Global Network
          </a>
          <a href="#pillars" className="hover:text-zinc-950 transition-colors">
            About
          </a>
          <a href="#impact" className="hover:text-zinc-950 transition-colors">
            Proof & Impact
          </a>
          <button 
            onClick={onOpenPortal}
            className="text-zinc-600 hover:text-zinc-950 transition-colors cursor-pointer"
          >
            Patient Portal
          </button>
        </nav>

        {/* Right: Language Switcher & Sleek Dark CTA Button */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={() => setLang(lang === 'en' ? 'global' : 'en')}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-950 px-2.5 py-1.5 rounded-lg border border-transparent hover:border-zinc-200 transition-colors cursor-pointer"
            aria-label="Toggle Regional Setting"
          >
            <Globe className="w-3.5 h-3.5 text-zinc-400" />
            <span>{lang === 'en' ? 'EN / Global' : 'IN / Hindi'}</span>
          </button>

          <button
            onClick={onOpenPortal}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-semibold tracking-tight transition-all active:scale-[0.98] cursor-pointer"
          >
            <span>Sign In / Get Started</span>
            <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Minimal Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-100 bg-white/98 backdrop-blur-xl px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-zinc-700">
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-zinc-950"
            >
              Services
            </a>
            <a 
              href="#network" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-zinc-950"
            >
              Global Network
            </a>
            <a 
              href="#pillars" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-zinc-950"
            >
              About
            </a>
            <a 
              href="#impact" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-zinc-950"
            >
              Proof & Impact
            </a>
          </nav>

          <div className="pt-4 border-t border-zinc-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPortal();
              }}
              className="w-full py-2.5 rounded-lg bg-zinc-950 text-white text-xs font-semibold text-center"
            >
              Sign In / Get Started
            </button>
            <div className="flex justify-between items-center text-xs text-zinc-500 pt-1">
              <span>24/7 Clinical Coordination</span>
              <a href="tel:+919667033044" className="font-semibold text-zinc-900">+91 9667033044</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
