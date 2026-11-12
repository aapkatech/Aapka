import React, { useEffect, useState } from 'react';
import { Clock, TrendingUp, ShieldCheck, Coins } from 'lucide-react';
import {
  getSavingsSnapshot,
  formatCrores,
  formatINR,
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
      className="py-16 sm:py-22 bg-gradient-to-b from-white via-slate-50/50 to-white border-t border-slate-100 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-700 flex items-center gap-2">
            <Coins className="w-4 h-4 text-teal-600" />
            <span>
              {isHi
                ? 'रियल-टाइम मरीज बचत और प्रभाव'
                : 'Real-Time Patient Savings Telemetry'}
            </span>
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.18]">
            {isHi
              ? 'हर घंटा कीमती है, हर रुपया सुरक्षित है।'
              : 'Every Hour Counts. Every Rupee Protected.'}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {isHi
              ? `वार्षिक ₹4 करोड़ (₹${snapshot.hourlyRateRounded.toLocaleString('en-IN')}/घंटा) की निरंतर गति से मरीजों की बचत। जैसे ही हर 1 घंटा पूरा होता है, वह राशि इस वर्ष और लाइफटाइम कुल बचत में स्वतः जुड़ जाती है।`
              : `Aapka saves patients ₹4 Crores per year (~₹${snapshot.hourlyRateRounded.toLocaleString('en-IN')}/hour). With every completed hour, savings automatically accumulate into the current year and the ₹13+ Crore lifetime total.`}
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
            description={
              isHi
                ? 'वार्षिक ₹4 करोड़ के आधार पर हर 1 घंटे में ₹4,566 की सीधी बचत। 60 मिनट पूरे होते ही यह राशि वार्षिक और लाइफटाइम टोटल में जुड़ती है।'
                : 'Calculated from our ₹4 Crore annual patient savings rate. At the end of every hour, this amount rolls into the yearly and lifetime totals.'
            }
            footerLeft={
              isHi
                ? `₹${snapshot.dailyRateRounded.toLocaleString('en-IN')} / दिन`
                : `₹${snapshot.dailyRateRounded.toLocaleString('en-IN')} / day`
            }
            footerRight={isHi ? 'हर 60 मिनट पर ऑटो-ऐड' : 'Auto-adds hourly'}
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
            description={
              isHi
                ? `1 जनवरी ${snapshot.currentYear} से आज ${snapshot.formattedDateHi} तक की कुल बचत। हर घंटे ₹${snapshot.hourlyRateRounded.toLocaleString('en-IN')} स्वतः इसमें जुड़ते हैं।`
                : `Cumulative patient savings recorded from Jan 1, ${snapshot.currentYear} to today (${snapshot.formattedDateEn}). Automatically updates with every hour elapsed.`
            }
            footerLeft={isHi ? '₹4 करोड़ / वर्ष दर' : '₹4 Cr / year pace'}
            footerRight={`₹${formatINR(snapshot.ytdSavedRupees)}`}
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

          {/* DIAL 3: Cumulative Lifetime Savings (₹13+ Crores) */}
          <SavingsDialCard
            badgeIcon={ShieldCheck}
            badgeText={isHi ? 'लाइफटाइम संचयी बचत' : 'Lifetime Total Impact'}
            badgeTone="text-emerald-800 bg-emerald-50 border-emerald-200/80"
            title={
              isHi
                ? `अब तक ₹${lifetimeCr} करोड़ लाइफटाइम बचत`
                : `₹${lifetimeCr} Cr+ Saved in Lifetime`
            }
            description={
              isHi
                ? `अस्पताल भर्ती, सर्जरी छूट और आयुष्मान भारत क्लेम से अब तक ₹13 करोड़ से अधिक की कुल सुरक्षित पूंजी। हर घंटे की बचत इसमें स्वतः जुड़ती रहती है।`
                : `Total out-of-pocket medical debt prevented across Bharat. Reaches ₹13+ Crores and automatically accumulates with every passing hour.`
            }
            footerLeft={isHi ? '500+ गांवों तक पहुंच' : '500+ Villages Reached'}
            footerRight={`₹${formatINR(snapshot.lifetimeSavedRupees)}`}
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
                  ₹{lifetimeCr} Cr
                </span>
                <span className="mt-1 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/70 text-[10px] font-semibold text-emerald-800">
                  {isHi ? '₹13+ करोड़ मील का पत्थर' : '₹13+ Crore Milestone'}
                </span>
              </DialRingSvg>
            }
          />
        </div>
      </div>
    </section>
  );
};
