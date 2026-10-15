import React from 'react';
import { ShieldCheck, Compass, Eye } from 'lucide-react';

export const TrustPillars: React.FC = () => {
  const pillars = [
    {
      id: "01",
      title: "Verified Global Network",
      description: "Rigorous clinical vetting across tier-1 healthcare systems, academic centers, and regional health institutions. Every surgeon, specialist, and facility meets exacting standards of care.",
      icon: ShieldCheck,
      detail: "100% credentialed specialists"
    },
    {
      id: "02",
      title: "Zero-Hassle Coordination",
      description: "Dedicated care navigators handle all administrative burdens—from hospital admissions and bed allocation to insurance pre-authorizations and post-discharge follow-ups.",
      icon: Compass,
      detail: "Dedicated clinical facilitator"
    },
    {
      id: "03",
      title: "Complete Transparency",
      description: "Upfront pricing schedules with no hidden line items or surprise fees. Coupled with bank-grade encryption ensuring your family's longitudinal health records remain private.",
      icon: Eye,
      detail: "Pre-negotiated transparent rates"
    }
  ];

  return (
    <section id="pillars" className="py-24 sm:py-32 bg-zinc-50/50 border-y border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        
        {/* Subtle Section Tag */}
        <div className="max-w-xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Our Foundation
          </p>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-zinc-950">
            A healthcare infrastructure built on trust, precision, and human dignity.
          </h2>
        </div>

        {/* 3 Pillars Grid with Massive Whitespace */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={pillar.id}
                className="group relative p-8 sm:p-10 rounded-3xl bg-white border border-zinc-200/60 hover:border-zinc-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-medium text-zinc-400">
                      {pillar.id}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-700 group-hover:text-zinc-950 transition-colors">
                      <Icon className="w-4 h-4 text-teal-700" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-medium text-zinc-950 tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-zinc-500 font-normal leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-zinc-100 flex items-center text-xs font-medium text-zinc-400">
                  <span>{pillar.detail}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
