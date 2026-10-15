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
    <section id="network" className="py-24 sm:py-32 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        
        <div className="max-w-xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
            {tag}
          </p>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-zinc-950">
            {title}
          </h2>
          <p className="text-sm text-zinc-500 font-normal leading-relaxed pt-1">
            {description}
          </p>
        </div>

        {/* 3 Regional Hub Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hubs.map((hub, i) => (
            <div 
              key={i} 
              className="p-8 rounded-2xl bg-zinc-50/60 border border-zinc-200/60 hover:border-zinc-300 transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-white border border-zinc-200/80 flex items-center justify-center text-zinc-800">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-medium text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200/60">
                    {hub.status}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-base font-semibold text-zinc-950">
                    {hub.region}
                  </h3>
                  <p className="text-xs text-zinc-500">
                    {hub.specialties}
                  </p>
                </div>

                <div className="space-y-1.5 pt-2 text-xs text-zinc-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                    <span className="font-medium text-zinc-900">{hub.centers}</span>
                  </div>
                  <p className="text-zinc-400 pl-5.5">{hub.coverage}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-200/50">
                <button
                  onClick={onOpenBooking}
                  className="text-xs font-semibold text-zinc-900 hover:text-teal-700 flex items-center gap-1.5 cursor-pointer transition-colors"
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
