import React from 'react';
import { Award, Trophy, Medal, Sparkles } from 'lucide-react';
import type { Translations } from '../i18n/translations';

interface QuietProofProps {
  t?: Translations['proof'];
}

export const QuietProof: React.FC<QuietProofProps> = ({ t }) => {
  const icons = [Trophy, Sparkles, Award, Medal];

  const defaultRecognitions = [
    { title: "FICCI Healthcare Awards", detail: "Excellence Finalist" },
    { title: "Sankalp Bharat Summit", detail: "Top Social Enterprise" },
    { title: "Swati Rai Innovation", detail: "₹10 Lakh Winner" },
    { title: "IIM Kashipur Uththistha", detail: "1st Runner-Up" }
  ];

  const recognitions = t?.recognitions || defaultRecognitions;
  const recognitionTag = t?.recognitionTag || "Institutional Recognition & Grants";

  return (
    <section id="impact" className="py-16 sm:py-20 bg-zinc-50/70 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-6">
        
        {/* Recognition Strip in Clean Line */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-6">
            {recognitionTag}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recognitions.map((item, i) => {
              const Icon = icons[i % icons.length];
              return (
                <div 
                  key={i}
                  className="flex items-center gap-3.5 p-4 rounded-xl bg-white border border-zinc-200/60 shadow-2xs hover:border-zinc-300 transition-colors"
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
