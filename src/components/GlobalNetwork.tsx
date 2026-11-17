import React from 'react';
import { Building2, CheckCircle2, ArrowRight } from 'lucide-react';
import type { Translations } from '../i18n/translations';

interface GlobalNetworkProps {
  onOpenBooking: () => void;
  t?: Translations['network'];
}

export const GlobalNetwork: React.FC<GlobalNetworkProps> = ({ onOpenBooking, t }) => {
  const defaultHubs = [
    {
      region: "North Region Network",
      specialties: "Oncology, Cardiology & Orthopedic Hubs",
      centers: "18 Tier-1 Partner Hospitals",
      coverage: "NCR, Western UP, Haryana & Punjab",
      status: "Direct Bed Allocation Active"
    },
    {
      region: "Central & Rural Network",
      specialties: "General Surgery, Maternal Health & Nephrology",
      centers: "16 District Referral Centers",
      coverage: "Bulandshahr, Meerut, Aligarh & Mathura",
      status: "Swasthya-Mitra On-Duty"
    },
    {
      region: "Diagnostic & Telehealth Grid",
      specialties: "NABL Pathology, MRI/CT & 24/7 Virtual Specialists",
      centers: "12 Accredited Regional Laboratories",
      coverage: "Pan-Bharat 40,000+ Pincodes",
      status: "Home Collection Active"
    }
  ];

  const hubs = t?.hubs || defaultHubs;
  const tag = t?.tag || "Network Infrastructure";
  const title = t?.title || "46+ Vetted hospital systems and accredited diagnostic laboratories.";
  const description = t?.description || "Every center in our network is contractually bound to transparent fee schedules, zero administrative gouging, and expedited patient intake.";
  const requestDirectory = t?.requestDirectory || "Request bed or specialist check";

  return (
    <section id="network" className="py-2 sm:py-3 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-4 sm:space-y-5">
        
        <div className="max-w-xl space-y-1.5">
          <p className="text-xs font-semibold uppercase tracking-wider text-sky-700">
            {tag}
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-slate-900">
            {title}
          </h2>
          <p className="text-sm text-slate-600 font-normal leading-relaxed pt-0.5">
            {description}
          </p>
        </div>

        {/* 3 Regional Hub Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {hubs.map((hub, i) => (
            <div 
              key={i} 
              className="p-6 sm:p-7 rounded-3xl bg-white/95 backdrop-blur-md border border-sky-100 hover:border-sky-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4 relative overflow-hidden group"
            >
              {/* Precision Beveled Aura Top Rim Gradient */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600" />

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-200/60 flex items-center justify-center text-sky-700">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-semibold text-sky-800 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-200/70">
                    {hub.status}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-base font-bold text-slate-900 font-serif">
                    {hub.region}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {hub.specialties}
                  </p>
                </div>

                <div className="space-y-1.5 pt-1 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                    <span className="font-semibold text-slate-900">{hub.centers}</span>
                  </div>
                  <p className="text-slate-500 pl-5.5">{hub.coverage}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-sky-100">
                <button
                  onClick={onOpenBooking}
                  className="text-xs font-semibold text-sky-700 hover:text-sky-900 flex items-center gap-1.5 cursor-pointer transition-colors"
                >
                  <span>{requestDirectory}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
