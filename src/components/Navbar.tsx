import React, { useState, useEffect } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
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
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: t?.home || (lang === 'hi' ? 'होम' : 'Home') },
    { to: "/services", label: t?.services || "Services" },
    { to: "/network", label: t?.network || "Global Network" },
    { to: "/founders", label: lang === 'hi' ? 'संस्थापक' : 'Founders' },
    { to: "/about", label: t?.about || "About" },
    { to: "/contact", label: t?.contact || "Contact" }
  ];

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
        <Link to="/" className="flex items-center group py-0.5" aria-label="Aapka Home">
          <AapkaLogo variant="full" className="h-9 sm:h-10 w-auto transition-transform group-hover:scale-[1.02]" />
        </Link>

        {/* Center / Navigation Links: Services, Global Network, Founders, About, Contact */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link 
                key={link.to} 
                to={link.to} 
                className={`transition-colors relative py-1 ${
                  isActive 
                    ? 'text-slate-950 font-semibold' 
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 inset-x-0 h-0.5 bg-teal-600 rounded-full" />
                )}
              </Link>
            );
          })}
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
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link 
                  key={link.to} 
                  to={link.to} 
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-1 transition-colors ${
                    isActive 
                      ? 'text-teal-700 font-semibold' 
                      : 'hover:text-slate-950'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
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
