import React, { useState, useEffect } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { AapkaLogo } from './AapkaLogo';

interface NavbarProps {
  onOpenPortal?: () => void;
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
          ? 'bg-white/90 backdrop-blur-xl border-b border-zinc-100 shadow-xs py-3.5' 
          : 'bg-white/95 backdrop-blur-sm border-b border-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Left: Official Aapka Logo Lockup */}
        <a href="#" className="flex items-center group py-0.5">
          <AapkaLogo variant="full" className="h-12 sm:h-14 lg:h-16 w-auto transition-transform group-hover:scale-[1.02]" />
        </a>

        {/* Center / Navigation Links: Services, Global Network, About, Contact */}
        <nav className="hidden md:flex items-center gap-9 text-sm font-medium text-slate-600">
          <a href="#services" className="hover:text-slate-950 transition-colors">
            Services
          </a>
          <a href="#network" className="hover:text-slate-950 transition-colors">
            Global Network
          </a>
          <a href="#pillars" className="hover:text-slate-950 transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-slate-950 transition-colors">
            Contact
          </a>
        </nav>

        {/* Far Right: Language Selector */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => setLang(lang === 'en' ? 'global' : 'en')}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-900 px-2.5 py-1.5 rounded-lg border border-transparent hover:border-slate-200 transition-colors cursor-pointer"
            aria-label="Toggle Regional Language Setting"
          >
            <Globe className="w-3.5 h-3.5 text-slate-400" />
            <span>{lang === 'en' ? 'English (EN / Global)' : 'हिन्दी (IN / Global)'}</span>
          </button>
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
          <nav className="flex flex-col space-y-3 text-sm font-medium text-slate-700">
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-slate-950"
            >
              Services
            </a>
            <a 
              href="#network" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-slate-950"
            >
              Global Network
            </a>
            <a 
              href="#pillars" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-slate-950"
            >
              About
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-slate-950"
            >
              Contact
            </a>
          </nav>

          <div className="pt-4 border-t border-zinc-100 flex flex-col gap-2.5">
            <div className="flex justify-between items-center text-xs text-slate-500 pt-1">
              <span>Direct Support</span>
              <a href="tel:+919667033044" className="font-semibold text-slate-900">+91 9667033044</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
