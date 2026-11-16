import React, { useEffect, useState } from 'react';
import { Clock, TrendingUp, ShieldCheck } from 'lucide-react';
import {
  getSavingsSnapshot,
  formatCrores,
  type SavingsSnapshot,
} from '../utils/savingsTelemetry';
import { DialRingSvg } from './savings/DialRingSvg';
import { SavingsDialCard } from './savings/SavingsDialCard';
import type { Language } from '../i18n/translations';

interface PatientSavingsProps {
  lang?: Language;
}

export const PatientSavings: React.FC<PatientSavingsProps> = ({ lang = 'en' }) => {
  const isHi = lang === 'hi';
  const [snapshot, setSnapshot] = useState<SavingsSnapshot>(() => getSavingsSnapshot());

  // High-frequency telemetry tick: keeps the hourly 60-minute dial and accumulation live
  useEffect(() => {
    const id = window.setInterval(() => {
      setSnapshot(getSavingsSnapshot());
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  const formattedMinutes = String(snapshot.minutesIntoHour).padStart(2, '0');
  const formattedSeconds = String(snapshot.secondsIntoMinute).padStart(2, '0');
  const ytdCr = formatCrores(snapshot.ytdSavedRupees);
  const lifetimeCr = formatCrores(snapshot.lifetimeSavedRupees);

  return (
    <section
      id="savings"
      className="py-8 sm:py-10 lg:py-12 bg-gradient-to-b from-white via-slate-50/50 to-white border-t border-slate-100 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-6 sm:space-y-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.18]">
            {isHi
              ? 'हर घंटा कीमती है, हर रुपया सुरक्षित है।'
              : 'Every Hour Counts. Every Rupee Protected.'}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {isHi
              ? `वार्षिक ₹1.64 करोड़ (₹${snapshot.hourlyRateRounded.toLocaleString('en-IN')}/घंटा) की निरंतर गति से बचत। अब तक 1,270+ मरीजों के ₹4.1 करोड़ से अधिक के चिकित्सा खर्च सुरक्षित।`
              : `Aapka saves patients ₹1.64 Crores per year (~₹${snapshot.hourlyRateRounded.toLocaleString('en-IN')}/hour). Over ₹4.1 Crores in cumulative medical expenses saved across 1,270+ patients.`}
          </p>
        </div>

        {/* 3 Chronograph Impact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* DIAL 1: Current Hour Live Pace */}
          <SavingsDialCard
            badgeIcon={Clock}
            badgeText={isHi ? 'प्रति घंटा लाइव बचत' : 'Live Hourly Savings'}
            badgeTone="text-teal-800 bg-teal-50 border-teal-200/80"
            title={
              isHi
                ? `हर 1 घंटे में ₹${snapshot.hourlyRateRounded.toLocaleString('en-IN')} की बचत`
                : `₹${snapshot.hourlyRateRounded.toLocaleString('en-IN')} Saved Per Hour`
            }
            dial={
              <DialRingSvg
                gradientId="liveHourGrad"
                gradientFrom="#0d9488"
                gradientTo="#10b981"
                tickCount={60}
                tickHighlightEvery={5}
                progress={snapshot.hourProgress}
                showTipDot={true}
                tipDotColor="#0f766e"
              >
                <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-teal-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{isHi ? 'हर 1 घंटे की गति' : 'Per Hour Rate'}</span>
                </span>
                <span className="text-2xl sm:text-[1.7rem] font-bold font-serif text-slate-950 tracking-tight leading-tight mt-0.5 tabular-nums">
                  ₹{snapshot.hourlyRateRounded.toLocaleString('en-IN')}
                </span>
                <span className="mt-1 px-2.5 py-0.5 rounded-full bg-teal-50 border border-teal-200/70 text-[10px] font-mono font-semibold text-teal-800 tabular-nums">
                  {formattedMinutes}:{formattedSeconds}m • ₹{snapshot.currentHourAccumulated.toLocaleString('en-IN')}
                </span>
              </DialRingSvg>
            }
          />

          {/* DIAL 2: Year-to-Date Savings with Dynamic Date */}
          <SavingsDialCard
            badgeIcon={TrendingUp}
            badgeText={isHi ? 'इस वर्ष की बचत' : 'Year-to-Date Savings'}
            badgeTone="text-sky-800 bg-sky-50 border-sky-200/80"
            title={
              isHi
                ? `इस वर्ष आज तक ₹${ytdCr} करोड़ सुरक्षित`
                : `₹${ytdCr} Cr Saved This Year`
            }
            dial={
              <DialRingSvg
                gradientId="ytdGrad"
                gradientFrom="#0284c7"
                gradientTo="#0d9488"
                tickCount={12}
                tickHighlightEvery={3}
                tickStrokeColor="#94a3b8"
                progress={snapshot.yearProgress}
                animateOnMount={true}
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700">
                  {isHi ? 'इस वर्ष की कुल बचत' : 'Saved This Year'}
                </span>
                <span className="text-2xl sm:text-[1.7rem] font-bold font-serif text-slate-950 tracking-tight leading-tight mt-0.5 tabular-nums">
                  ₹{ytdCr} Cr
                </span>
                <span className="mt-1 px-2.5 py-0.5 rounded-full bg-sky-50 border border-sky-200/70 text-[10px] font-semibold text-sky-800">
                  {isHi ? `आज तक: ${snapshot.formattedDateHi}` : `Till ${snapshot.formattedDateEn}`}
                </span>
              </DialRingSvg>
            }
          />

          {/* DIAL 3: Cumulative Lifetime Savings (₹4.1+ Crores from 1,270+ Patients) */}
          <SavingsDialCard
            badgeIcon={ShieldCheck}
            badgeText={isHi ? 'लाइफटाइम संचयी बचत' : 'Lifetime Total Impact'}
            badgeTone="text-emerald-800 bg-emerald-50 border-emerald-200/80"
            title={
              isHi
                ? `अब तक ₹4.1 करोड़ लाइफटाइम बचत`
                : `₹4.1 Cr+ Saved in Lifetime`
            }
            dial={
              <DialRingSvg
                gradientId="lifetimeGrad"
                gradientFrom="#059669"
                gradientMid="#0d9488"
                gradientTo="#d97706"
                tickCount={24}
                tickHighlightEvery={6}
                progress={1}
                showOuterHalo={true}
                animateOnMount={true}
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                  {isHi ? 'लाइफटाइम कुल बचत' : 'Saved in Lifetime'}
                </span>
                <span className="text-2xl sm:text-[1.75rem] font-bold font-serif text-slate-950 tracking-tight leading-tight mt-0.5 tabular-nums">
                  ₹4.1 Cr
                </span>
                <span className="mt-1 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/70 text-[10px] font-semibold text-emerald-800">
                  {isHi ? '1,270+ मरीज लाभान्वित' : '1,270+ Patients Protected'}
                </span>
              </DialRingSvg>
            }
          />
        </div>
      </div>
    </section>
  );
};
