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
    <div className="group relative p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-slate-300/90 transition-all duration-300 flex flex-col justify-between space-y-6">
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
