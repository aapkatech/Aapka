import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface SavingsDialCardProps {
  badgeIcon: LucideIcon;
  badgeText: string;
  badgeTone: string;
  dial: React.ReactNode;
  title: string;
}

/** Shared card frame for each chronograph savings telemetry instrument. */
export const SavingsDialCard: React.FC<SavingsDialCardProps> = ({
  badgeIcon: BadgeIcon,
  badgeText,
  badgeTone,
  dial,
  title,
}) => {
  return (
    <div className="group relative p-7 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-md border border-sky-100 shadow-[0_4px_20px_-4px_rgba(2,132,199,0.06)] hover:shadow-[0_16px_32px_-6px_rgba(2,132,199,0.12)] hover:border-sky-300/80 transition-all duration-300 flex flex-col justify-between space-y-6 overflow-hidden">
      {/* Precision Beveled Aura Top Rim Gradient */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 rounded-t-3xl" />

      <div className="flex items-center justify-between">
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border ${badgeTone}`}
        >
          <BadgeIcon className="w-3.5 h-3.5 shrink-0" />
          <span>{badgeText}</span>
        </span>
      </div>

      <div className="py-2">{dial}</div>

      <div className="text-center pt-1">
        <h3 className="text-lg sm:text-xl font-serif font-semibold text-slate-900 leading-snug">
          {title}
        </h3>
      </div>
    </div>
  );
};
