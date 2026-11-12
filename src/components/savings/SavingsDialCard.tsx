import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface SavingsDialCardProps {
  badgeIcon: LucideIcon;
  badgeText: string;
  badgeTone: string;
  dial: React.ReactNode;
  title: string;
  description: string;
  footerLeft: string;
  footerRight: string;
}

/** Shared card frame for each chronograph savings telemetry instrument. */
export const SavingsDialCard: React.FC<SavingsDialCardProps> = ({
  badgeIcon: BadgeIcon,
  badgeText,
  badgeTone,
  dial,
  title,
  description,
  footerLeft,
  footerRight,
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

      <div className="space-y-4">
        <div className="space-y-1.5 text-center">
          <h3 className="text-lg sm:text-xl font-serif font-semibold text-slate-900">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2 text-[11px] font-semibold text-slate-500">
          <span className="text-slate-700">{footerLeft}</span>
          <span className="text-slate-300">•</span>
          <span className="text-teal-700">{footerRight}</span>
        </div>
      </div>
    </div>
  );
};
