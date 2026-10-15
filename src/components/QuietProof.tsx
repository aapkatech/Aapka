import React from 'react';
import { Award, Trophy, Medal, Sparkles } from 'lucide-react';

export const QuietProof: React.FC = () => {
  const metrics = [
    { value: "500+", label: "Communities Served", sub: "Grassroots village clusters" },
    { value: "40k+", label: "Pin Codes Covered", sub: "Nationwide care reach" },
    { value: "46+", label: "Accredited Hospitals", sub: "Tier-1 network partners" },
    { value: "₹4.2Cr", label: "Patient Capital Preserved", sub: "Direct surgical & drug savings" }
  ];

  const recognitions = [
    { title: "FICCI Healthcare Awards", detail: "Excellence Finalist", icon: Trophy },
    { title: "Sankalp Bharat Summit", detail: "Top Social Enterprise", icon: Sparkles },
    { title: "Swati Rai Innovation", detail: "₹10 Lakh Winner", icon: Award },
    { title: "IIM Kashipur Uththistha", detail: "1st Runner-Up", icon: Medal }
  ];

  return (
    <section id="impact" className="py-24 sm:py-32 bg-zinc-50/70 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-20">
        
        {/* Metric Display in Clean Typography */}
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Quiet Scale
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 pt-4">
            {metrics.map((metric, i) => (
              <div key={i} className="space-y-1.5 border-l border-zinc-200 pl-6">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-zinc-950 font-sans">
                  {metric.value}
                </span>
                <p className="text-sm font-semibold text-zinc-800">
                  {metric.label}
                </p>
                <p className="text-xs text-zinc-400 font-normal">
                  {metric.sub}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Recognition Strip in Clean Line */}
        <div className="pt-12 border-t border-zinc-200/60">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-6">
            Institutional Recognition & Grants
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recognitions.map((item, i) => {
              const Icon = item.icon;
              return (
                <div 
                  key={i}
                  className="flex items-center gap-3.5 p-4 rounded-xl bg-white border border-zinc-200/60"
                >
                  <div className="w-8 h-8 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-600 shrink-0">
                    <Icon className="w-4 h-4 text-zinc-800" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-zinc-900 leading-tight">
                      {item.title}
                    </p>
                    <p className="text-[11px] text-zinc-500 font-normal">
                      {item.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
