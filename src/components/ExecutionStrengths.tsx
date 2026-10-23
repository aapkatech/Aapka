import React from 'react';
import { Users, Building2, MapPin, Activity } from 'lucide-react';

interface ExecutionStrengthsProps {
  t?: {
    tag?: string;
    title?: string;
    subtitle?: string;
  };
}

export const ExecutionStrengths: React.FC<ExecutionStrengthsProps> = ({ t }) => {
  const defaultMetrics = [
    {
      value: "1,270+",
      label: "Gram Mitras",
      sub: "Working at the community level across rural and tribal areas.",
      icon: Users,
      accent: "text-teal-700 bg-teal-50 border-teal-200/60"
    },
    {
      value: "240+",
      label: "Hospitals",
      sub: "Across government, empanelled, and private healthcare facilities.",
      icon: Building2,
      accent: "text-sky-700 bg-sky-50 border-sky-200/60"
    },
    {
      value: "1,050+",
      label: "Villages Reached",
      sub: "Active ground-level penetration through our facilitator network.",
      icon: MapPin,
      accent: "text-amber-700 bg-amber-50 border-amber-200/60"
    },
    {
      value: "1,040+",
      label: "Surgeries Assisted",
      sub: "Guiding and supporting critical patients to reach care on time.",
      icon: Activity,
      accent: "text-emerald-700 bg-emerald-50 border-emerald-200/60"
    }
  ];

  const tag = t?.tag || "Proven Ground Execution";
  const title = t?.title || "Our Strengths for Execution";
  const subtitle = t?.subtitle || "An established platform and a shared purpose to build healthier, stronger tribal communities.";

  return (
    <section id="network" className="py-14 sm:py-20 bg-gradient-to-b from-white via-slate-50/50 to-white border-y border-slate-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
            {tag}
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* 4 Execution Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {defaultMetrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${item.accent}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-medium text-slate-400">0{idx + 1}</span>
                  </div>

                  <div className="space-y-1">
                    <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
                      {item.value}
                    </p>
                    <h3 className="text-base font-semibold text-slate-900">
                      {item.label}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.sub}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-medium text-teal-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-600 animate-pulse" />
                  <span>Verified Operational Data</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
