import React from 'react';
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AapkaLogo } from './AapkaLogo';
import type { Translations } from '../i18n/translations';

interface FooterProps {
  t?: Translations['footer'];
  onOpenPrivacy?: (tab: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ t, onOpenPrivacy }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const tagline = t?.tagline || "Aapka offers a transformative solution to rural India's healthcare and hygiene challenges through an intuitive app and dedicated local representatives. Our platform seamlessly connects villagers with healthcare professionals, essential products, enhancing convenience, affordability, and quality.";
  const company = t?.company || "SP Rural India Services Private Limited";
  const location = t?.location || "201 Convention Centre, JNU New Delhi, 110067";
  const phone = t?.phone || "+91 9667033044";
  const email = t?.email || "Info@Aapka.co.in";
  const carePathwaysTitle = t?.carePathwaysTitle || "Care Pathways";
  const platformReachTitle = t?.platformReachTitle || "Platform & Reach";
  const globalSupportTitle = t?.globalSupportTitle || "Global Support";
  const privacy = t?.privacy || "Privacy & Data Safeguards";
  const terms = t?.terms || "Terms of Healthcare Access";
  const governance = t?.governance || "Clinical Governance";
  const copyright = t?.copyright || "© 2026 SP Rural India Services Private Limited. All rights reserved.";

  const pathways = [
    { label: "Hospitalization Assistance", to: "/services" },
    { label: "Teleconsultations", to: "/services" },
    { label: "Pathology Routing", to: "/services" },
    { label: "Smart Health Card", to: "/services" },
    { label: "Emergency Transport", to: "/services" }
  ];

  const platformLinks = [
    { label: "Global Network (240+)", to: "/network" },
    { label: "Our Team", to: "/team" },
    { label: "Scaling Tribal Impact", to: "/about" },
    { label: "Clinical Quality Vetting", to: "/network" },
    { label: "Tribal Healthcare Pilot", to: "/about" }
  ];

  return (
    <footer id="contact" className="bg-white border-t border-zinc-100 pt-20 pb-16 text-zinc-600 text-xs font-normal">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        
        {/* Multi-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Brand & Corporate entity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center">
              <Link to="/" aria-label="Aapka Home">
                <AapkaLogo variant="full" className="h-11 sm:h-12 w-auto hover:opacity-90 transition-opacity" />
              </Link>
            </div>

            <p className="text-xs sm:text-[13px] text-zinc-600 leading-relaxed max-w-md">
              {tagline}
            </p>

            <div className="pt-2 text-[11px] text-zinc-400 space-y-1 border-t border-zinc-100">
              <p className="font-semibold text-zinc-700">{company}</p>
              <p className="flex items-center gap-1.5 text-zinc-500">
                <MapPin className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                <span>{location}</span>
              </p>
            </div>

            <div className="pt-1">
              <a
                href="https://play.google.com/store/apps/details?id=com.kapp.smartgram&pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-slate-800 hover:text-teal-700 transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current text-teal-600" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3.609 1.814L13.793 12 3.61 22.186c-.195-.195-.31-.476-.31-.786V2.6c0-.31.115-.591.31-.786zm11.238 11.24l2.585 2.586-11.45 6.47 8.865-9.056zm0-2.108L5.982 1.89l11.45 6.47-2.585 2.586zm1.485 1.054l3.52-1.987c.666-.376.666-.99 0-1.366l-3.52-1.987-2.109 2.109 2.109 2.231z"/>
                </svg>
                <span>Google Play • Download App</span>
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-3">
            <p className="text-xs font-semibold text-zinc-950 uppercase tracking-wider">
              {carePathwaysTitle}
            </p>
            <ul className="space-y-2 text-zinc-500">
              {pathways.map((item, idx) => (
                <li key={idx}>
                  <Link to={item.to} className="hover:text-zinc-950 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Foundation & Governance */}
          <div className="space-y-3">
            <p className="text-xs font-semibold text-zinc-950 uppercase tracking-wider">
              {platformReachTitle}
            </p>
            <ul className="space-y-2 text-zinc-500">
              {platformLinks.map((item, idx) => (
                <li key={idx}>
                  <Link to={item.to} className="hover:text-zinc-950 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Support */}
          <div className="space-y-3">
            <p className="text-xs font-semibold text-zinc-950 uppercase tracking-wider">
              {globalSupportTitle}
            </p>
            <ul className="space-y-2.5 text-zinc-500">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                <div className="flex flex-col text-xs">
                  <a href="tel:+919716332976" className="hover:text-zinc-950 font-medium text-zinc-700">
                    +91 9716332976
                  </a>
                  <a href="tel:+919667033044" className="hover:text-zinc-950 text-zinc-500">
                    +91 9667033044
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                <div className="flex flex-col text-xs">
                  <a href="mailto:prabal@aapka.co.in" className="hover:text-zinc-950 font-medium text-zinc-700">
                    prabal@aapka.co.in
                  </a>
                  <a href="mailto:info@aapka.co.in" className="hover:text-zinc-950 text-zinc-500">
                    info@aapka.co.in
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2 pt-1 text-[11px] text-zinc-500">
                <MapPin className="w-3.5 h-3.5 text-zinc-400 shrink-0 mt-0.5" />
                <span>{location}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-10 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>{copyright}</p>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => onOpenPrivacy ? onOpenPrivacy('privacy') : null}
              className="hover:text-zinc-900 transition-colors cursor-pointer text-left"
            >
              {privacy}
            </button>
            <button
              type="button"
              onClick={() => onOpenPrivacy ? onOpenPrivacy('terms') : null}
              className="hover:text-zinc-900 transition-colors cursor-pointer text-left"
            >
              {terms}
            </button>
            <button
              type="button"
              onClick={() => onOpenPrivacy ? onOpenPrivacy('privacy') : null}
              className="hover:text-zinc-900 transition-colors cursor-pointer text-left"
            >
              {governance}
            </button>

            <button
              onClick={scrollToTop}
              className="w-7 h-7 rounded-md border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 text-zinc-600 transition-colors ml-2 cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
