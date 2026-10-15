import React from 'react';
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { AapkaLogo } from './AapkaLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-zinc-100 pt-20 pb-16 text-zinc-600 text-xs font-normal">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        
        {/* Multi-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Brand & Corporate entity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center">
              <AapkaLogo variant="full" className="h-8 w-auto" />
            </div>

            <p className="text-xs text-zinc-500 leading-relaxed max-w-sm">
              Healthcare, simplified for everyone, everywhere. Bridging patient households with accredited hospital infrastructure and digital care navigation.
            </p>

            <div className="pt-2 text-[11px] text-zinc-400 space-y-1">
              <p className="font-semibold text-zinc-700">SP Rural India Services Private Limited</p>
              <p>Supported at Atal Incubation Centre, Jawaharlal Nehru University (JNU), New Delhi - 110067, India.</p>
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-3">
            <p className="text-xs font-semibold text-zinc-950 uppercase tracking-wider">
              Care Pathways
            </p>
            <ul className="space-y-2 text-zinc-500">
              <li><a href="#services" className="hover:text-zinc-950 transition-colors">Hospitalization Assistance</a></li>
              <li><a href="#services" className="hover:text-zinc-950 transition-colors">Teleconsultations</a></li>
              <li><a href="#services" className="hover:text-zinc-950 transition-colors">Pathology Routing</a></li>
              <li><a href="#services" className="hover:text-zinc-950 transition-colors">Smart Health Card</a></li>
              <li><a href="#services" className="hover:text-zinc-950 transition-colors">Emergency Transport</a></li>
            </ul>
          </div>

          {/* Foundation & Governance */}
          <div className="space-y-3">
            <p className="text-xs font-semibold text-zinc-950 uppercase tracking-wider">
              Platform & Reach
            </p>
            <ul className="space-y-2 text-zinc-500">
              <li><a href="#pillars" className="hover:text-zinc-950 transition-colors">The Three Pillars</a></li>
              <li><a href="#impact" className="hover:text-zinc-950 transition-colors">Quiet Scale & Proof</a></li>
              <li><a href="#network" className="hover:text-zinc-950 transition-colors">Network Hospitals (46+)</a></li>
              <li><a href="#pillars" className="hover:text-zinc-950 transition-colors">Clinical Quality Vetting</a></li>
              <li><a href="#impact" className="hover:text-zinc-950 transition-colors">Institutional Grants</a></li>
            </ul>
          </div>

          {/* Direct Support */}
          <div className="space-y-3">
            <p className="text-xs font-semibold text-zinc-950 uppercase tracking-wider">
              Global Support
            </p>
            <ul className="space-y-2.5 text-zinc-500">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                <a href="tel:+919667033044" className="hover:text-zinc-950 font-medium text-zinc-700">
                  +91 9667033044
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                <a href="mailto:info@aapka.co.in" className="hover:text-zinc-950">
                  info@aapka.co.in
                </a>
              </li>
              <li className="flex items-start gap-2 pt-1 text-[11px] text-zinc-400">
                <MapPin className="w-3.5 h-3.5 text-zinc-400 shrink-0 mt-0.5" />
                <span>JNU Innovation Hub, New Delhi</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-10 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© 2026 SP Rural India Services Private Limited. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span className="hover:text-zinc-900 transition-colors cursor-pointer">Privacy & Data Safeguards</span>
            <span className="hover:text-zinc-900 transition-colors cursor-pointer">Terms of Healthcare Access</span>
            <span className="hover:text-zinc-900 transition-colors cursor-pointer">Clinical Governance</span>

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
