import React from 'react';
import { ContactSection } from '../components/ContactSection';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Building2, 
  CheckCircle2, 
  MessageSquare,
  Sparkles
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-16 space-y-12 bg-white">
      
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-tr from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden border border-slate-800 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30">
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Dedicated Webpage • 24/7 Care Coordination</span>
            </div>
            
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Get in Touch With Our Care Coordination Desk
            </h1>
            
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Immediate hospital admission triage, emergency ambulance coordination, Gram Mitra registration, and institutional hospital empanelment.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-300">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-4 h-4" /> Response Time &lt; 15 Minutes
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-4 h-4" /> 24/7 Doctor &amp; Bed Staging
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-4 h-4" /> DPDP Act 2023 Compliant
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Interactive Contact Section Component */}
      <ContactSection />

      {/* Emergency Hotline Callout Strip */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-8">
        <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 max-w-xl">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Immediate Clinical Attention Needed?</span>
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">Direct Line to Emergency Dispatch</h3>
            <p className="text-xs text-slate-300">Available 24 hours a day, 7 days a week for critical patient referrals.</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="tel:+919716332976"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-tight transition-colors flex items-center gap-2 shadow-md"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Call +91 9716332976</span>
            </a>
            <a
              href="https://wa.me/919716332976"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs tracking-tight transition-colors flex items-center gap-2 border border-slate-700"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp Emergency</span>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};
