import React from 'react';
import { ContactSection } from '../components/ContactSection';
import { 
  PhoneCall, 
  CheckCircle2, 
  MessageSquare,
  Sparkles
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-16 space-y-12 bg-white">
      
      {/* Header Banner (Clean White Background, Human & Clear) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-white border border-slate-200/90 shadow-sm relative overflow-hidden">
          <div className="relative max-w-3xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-700 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
              <span>24/7 Care Coordination Desk</span>
            </p>
            
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.18]">
              Get in Touch With Our Care Coordination Desk
            </h1>
            
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Immediate hospital admission triage, emergency ambulance coordination, Gram Mitra registration, and institutional hospital empanelment.
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-4 text-xs sm:text-sm font-medium text-slate-700">
              <span className="flex items-center gap-1.5 text-teal-700">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /> Response Time &lt; 15 Minutes
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1.5 text-teal-700">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /> 24/7 Doctor &amp; Bed Staging
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1.5 text-teal-700">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /> DPDP Act 2023 Compliant
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Interactive Contact Section Component */}
      <ContactSection />

      {/* Emergency Hotline Callout Strip (Clean White Background) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-white text-slate-900 border border-slate-200/90 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1.5 max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              <span>Immediate Clinical Attention Needed?</span>
            </span>
            <h3 className="text-xl sm:text-2xl font-semibold font-serif text-slate-900">Direct Line to Emergency Dispatch</h3>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">Available 24 hours a day, 7 days a week for critical patient referrals.</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="tel:+919716332976"
              className="px-5 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-medium text-xs sm:text-sm tracking-tight transition-colors flex items-center gap-2 shadow-xs"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call +91 9716332976</span>
            </a>
            <a
              href="https://wa.me/919716332976"
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
