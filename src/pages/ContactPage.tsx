import React from 'react';
import { ContactSection } from '../components/ContactSection';
import { 
  PhoneCall, 
  MessageSquare,
  Sparkles
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="py-3 sm:py-5 space-y-3 sm:space-y-4 bg-transparent">
      
      {/* Header Banner (Aura Wave & Clinical Lattice Theme) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="p-5 sm:p-6 rounded-3xl bg-white/95 backdrop-blur-md border border-sky-100 shadow-xs relative overflow-hidden">
          {/* Precision Beveled Aura Top Rim Gradient */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600" />
          
          <div className="relative max-w-3xl space-y-1.5">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.18]">
              Get in Touch With Our Care Coordination Desk
            </h1>
            
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Immediate hospital admission triage, emergency ambulance coordination, care navigation, and institutional hospital empanelment across 15+ cities.
            </p>
          </div>
        </div>
      </div>

      {/* Main Interactive Contact Section Component (Seamless Negligible Gap & Aura Lattice Theme) */}
      <ContactSection hideHeader={true} noPadding={true} />

      {/* Emergency Hotline Callout Strip */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-2">
        <div className="p-5 sm:p-6 rounded-3xl bg-white/95 backdrop-blur-md text-slate-900 border border-sky-100 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xs relative overflow-hidden">
          {/* Precision Beveled Aura Top Rim Gradient */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600" />

          <div className="space-y-1 max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-700 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>Immediate Clinical Attention Needed?</span>
            </span>
            <h3 className="text-xl sm:text-2xl font-semibold font-serif text-slate-900">Direct Line to Emergency Dispatch</h3>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">Available 24 hours a day, 7 days a week for critical patient referrals.</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="tel:+918860880044"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 text-white font-medium text-xs sm:text-sm tracking-tight transition-all flex items-center gap-2 shadow-md shadow-sky-600/20"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call +91 8860880044</span>
            </a>
            <a
              href="https://wa.me/919667033044"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 font-medium text-xs sm:text-sm tracking-tight transition-colors flex items-center gap-2 border border-slate-200"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Emergency</span>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};
