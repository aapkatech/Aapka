import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, TrendingUp, ShieldCheck, Coins } from 'lucide-react';
import type { Language } from '../i18n/translations';

export const SAVINGS_PER_MINUTE = 5000;
export const ANNUAL_SAVINGS_CR = '₹262.8 Cr';
export const TOTAL_PATIENT_SAVINGS = '₹10+ Cr';

interface PatientSavingsProps {
  lang?: Language;
}

interface TickRingProps {
  count: number;
  radius?: number;
  highlightEvery?: number;
  strokeColor?: string;
}

/** Shared precision dial tick marks around a 200x200 SVG center. */
const TickRing: React.FC<TickRingProps> = ({
  count,
  radius = 93,
  highlightEvery = 5,
  strokeColor = '#cbd5e1',
}) => {
  const ticks = Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * 2 * Math.PI - Math.PI / 2;
    const isMajor = i % highlightEvery === 0;
    const inner = isMajor ? radius - 6 : radius - 3;
    return {
      x1: 100 + inner * Math.cos(angle),
      y1: 100 + inner * Math.sin(angle),
      x2: 100 + radius * Math.cos(angle),
      y2: 100 + radius * Math.sin(angle),
      isMajor,
    };
  });

  return (
    <g aria-hidden="true">
      {ticks.map((t, idx) => (
        <line
          key={idx}
          x1={t.x1}
          y1={t.y1}
          x2={t.x2}
          y2={t.y2}
          stroke={t.isMajor ? '#64748b' : strokeColor}
          strokeWidth={t.isMajor ? 1.75 : 1}
          strokeLinecap="round"
        />
      ))}
    </g>
  );
};

const DIAL_RADIUS = 78;
const DIAL_CIRCUMFERENCE = 2 * Math.PI * DIAL_RADIUS;

/** Live wall-clock synchronized 60-second savings chronograph (₹5,000/min pace). */
const LiveMinuteDial: React.FC<{ isHi: boolean }> = ({ isHi }) => {
  const [tick, setTick] = useState(() => {
    const now = new Date();
    return { s: now.getSeconds(), ms: now.getMilliseconds() };
  });

  useEffect(() => {
    const id = window.setInterval(() => {
      const now = new Date();
      setTick({ s: now.getSeconds(), ms: now.getMilliseconds() });
    }, 100);
    return () => window.clearInterval(id);
  }, []);

  const progress = (tick.s + tick.ms / 1000) / 60;
  const savedThisMinute = Math.round(progress * SAVINGS_PER_MINUTE);
  const formattedSeconds = String(tick.s).padStart(2, '0');
  const dashOffset = DIAL_CIRCUMFERENCE * (1 - progress);

  const theta = progress * 2 * Math.PI - Math.PI / 2;
  const dotX = 100 + DIAL_RADIUS * Math.cos(theta);
  const dotY = 100 + DIAL_RADIUS * Math.sin(theta);

  return (
    <div className="relative w-48 h-48 mx-auto select-none">
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <linearGradient id="liveDialGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0d9488" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>

        <TickRing count={60} highlightEvery={5} />

        {/* Base track */}
        <circle
          cx="100"
          cy="100"
          r={DIAL_RADIUS}
          fill="none"
          stroke="#e2e8f0"
          strokeWidth="6"
        />

        {/* Animated sweeping second arc */}
        <circle
          cx="100"
          cy="100"
          r={DIAL_RADIUS}
          fill="none"
          stroke="url(#liveDialGrad)"
          strokeWidth="6.5"
          strokeLinecap="round"
          strokeDasharray={DIAL_CIRCUMFERENCE}
          strokeDashoffset={dashOffset}
          transform="rotate(-90 100 100)"
        />

        {/* Tip orb tracking live second hand */}
        <circle cx={dotX} cy={dotY} r="5.5" fill="#0f766e" stroke="#ffffff" strokeWidth="2" />
      </svg>

      {/* Center Readout */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-teal-700">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>{isHi ? 'हर 1 मिनट' : 'Every 1 Min'}</span>
        </span>
        <span className="text-2xl sm:text-[1.7rem] font-bold font-serif text-slate-950 tracking-tight leading-tight mt-0.5 tabular-nums">
          ₹5,000
        </span>
        <span className="mt-1 px-2 py-0.5 rounded-full bg-teal-50 border border-teal-200/70 text-[10px] font-mono font-semibold text-teal-800 tabular-nums">
          00:{formattedSeconds}s • ₹{savedThisMinute.toLocaleString('en-IN')}
        </span>
      </div>
    </div>
  );
};

/** Architectural 12-month radial dial for Annualized Savings Pace. */
const YearlyRunRateDial: React.FC<{ isHi: boolean }> = ({ isHi }) => {
  return (
    <div className="relative w-48 h-48 mx-auto select-none">
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <linearGradient id="yearlyDialGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#0d9488" />
          </linearGradient>
        </defs>

        <TickRing count={12} highlightEvery={3} strokeColor="#94a3b8" />

        <circle
          cx="100"
          cy="100"
          r={DIAL_RADIUS}
          fill="none"
          stroke="#e2e8f0"
          strokeWidth="6"
        />

        <motion.circle
          cx="100"
          cy="100"
          r={DIAL_RADIUS}
          fill="none"
          stroke="url(#yearlyDialGrad)"
          strokeWidth="6.5"
          strokeLinecap="round"
          strokeDasharray={DIAL_CIRCUMFERENCE}
          initial={{ strokeDashoffset: DIAL_CIRCUMFERENCE }}
          whileInView={{ strokeDashoffset: DIAL_CIRCUMFERENCE * 0.12 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          transform="rotate(-90 100 100)"
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700">
          {isHi ? 'वार्षिक दर' : 'Per Year Pace'}
        </span>
        <span className="text-2xl sm:text-[1.7rem] font-bold font-serif text-slate-950 tracking-tight leading-tight mt-0.5 tabular-nums">
          {ANNUAL_SAVINGS_CR}
        </span>
        <span className="mt-1 px-2 py-0.5 rounded-full bg-sky-50 border border-sky-200/70 text-[10px] font-semibold text-sky-800">
          {isHi ? '5.25L+ मिनट / वर्ष' : '5,25,600 mins / yr'}
        </span>
      </div>
    </div>
  );
};

/** Full-circle radiance milestone dial representing ₹10+ Crores cumulative savings. */
const TotalSavedDial: React.FC<{ isHi: boolean }> = ({ isHi }) => {
  return (
    <div className="relative w-48 h-48 mx-auto select-none">
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <linearGradient id="totalDialGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#059669" />
            <stop offset="55%" stopColor="#0d9488" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
        </defs>

        <TickRing count={24} highlightEvery={6} strokeColor="#cbd5e1" />

        {/* Subtle slow orbital halo */}
        <circle
          cx="100"
          cy="100"
          r={DIAL_RADIUS + 7}
          fill="none"
          stroke="#10b981"
          strokeOpacity="0.22"
          strokeWidth="1.5"
          strokeDasharray="6 6"
        />

        <motion.circle
          cx="100"
          cy="100"
          r={DIAL_RADIUS}
          fill="none"
          stroke="url(#totalDialGrad)"
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray={DIAL_CIRCUMFERENCE}
          initial={{ strokeDashoffset: DIAL_CIRCUMFERENCE }}
          whileInView={{ strokeDashoffset: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.25, ease: 'easeOut' }}
          transform="rotate(-90 100 100)"
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
          {isHi ? 'कुल बचत' : 'Total Saved'}
        </span>
        <span className="text-2xl sm:text-[1.75rem] font-bold font-serif text-slate-950 tracking-tight leading-tight mt-0.5">
          {TOTAL_PATIENT_SAVINGS}
        </span>
        <span className="mt-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/70 text-[10px] font-semibold text-emerald-800">
          {isHi ? '₹10,00,00,000+ सुरक्षित' : '₹10 Crore+ Milestone'}
        </span>
      </div>
    </div>
  );
};

export const PatientSavings: React.FC<PatientSavingsProps> = ({ lang = 'en' }) => {
  const isHi = lang === 'hi';

  const dials = [
    {
      badgeIcon: Clock,
      badgeText: isHi ? 'लाइव सेविंग्स क्लॉक' : 'Live Savings Clock',
      badgeTone: 'text-teal-800 bg-teal-50 border-teal-200/80',
      dial: <LiveMinuteDial isHi={isHi} />,
      title: isHi ? 'हर 1 मिनट में ₹5,000 की बचत' : '₹5,000 Saved Every Minute',
      description: isHi
        ? 'अस्पताल शुल्क की पूर्व-जांच, तय सर्जरी पैकेज और बिना बिचौलियों के सीधे इलाज से मरीजों की निरंतर बचत।'
        : 'Real-time out-of-pocket medical savings driven by pre-negotiated hospital tariffs and zero commission guidance.',
      footerLeft: isHi ? '₹83.3 / सेकंड दर' : '₹83 / sec active pace',
      footerRight: isHi ? '₹3,00,000 / घंटा' : '₹3 Lakh / hour',
    },
    {
      badgeIcon: TrendingUp,
      badgeText: isHi ? 'वार्षिक बचत क्षमता' : 'Annualized Velocity',
      badgeTone: 'text-sky-800 bg-sky-50 border-sky-200/80',
      dial: <YearlyRunRateDial isHi={isHi} />,
      title: isHi ? '₹262.8 करोड़ / वर्ष की गति' : '₹262.8 Cr+ Yearly Impact Pace',
      description: isHi
        ? '₹5,000 प्रति मिनट (5,25,600 मिनट प्रति वर्ष) की मौजूदा दर से परिवारों की भारी चिकित्सा पूंजी की रक्षा।'
        : 'Calculated at ₹5,000 saved per minute across 5,25,600 minutes in a year at our active multi-city scale.',
      footerLeft: isHi ? '₹72 लाख / दिन' : '₹72 Lakh / day pace',
      footerRight: isHi ? '25+ शहरों का नेटवर्क' : '25+ Cities Active',
    },
    {
      badgeIcon: ShieldCheck,
      badgeText: isHi ? 'सत्यापित कुल बचत' : 'Cumulative Impact',
      badgeTone: 'text-emerald-800 bg-emerald-50 border-emerald-200/80',
      dial: <TotalSavedDial isHi={isHi} />,
      title: isHi ? 'अब तक ₹10+ करोड़ बचाए गए' : '₹10+ Crores Total Protected',
      description: isHi
        ? 'अस्पताल भर्ती, सर्जरी छूट और आयुष्मान भारत सहायता से अब तक परिवारों के ₹10 करोड़ से अधिक बचे।'
        : 'Over ₹10 Crores already saved directly on hospital and surgical bills for families across Bharat.',
      footerLeft: isHi ? '500+ गांवों तक पहुंच' : '500+ Villages Reached',
      footerRight: isHi ? '50+ अस्पताल भागीदार' : '50+ Vetted Hospitals',
    },
  ];

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
              ? 'हर मिनट कीमती है, हर रुपया सुरक्षित है।'
              : 'Every Minute Counts. Every Rupee Protected.'}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {isHi
              ? 'देखें कैसे AAPKA हर मिनट मरीजों के चिकित्सा खर्च कम कर रहा है — प्रति मिनट गति, वार्षिक दर और अब तक की कुल बचत।'
              : 'Track how Aapka protects families from medical debt — from our live per-minute savings pace to our annual velocity and cumulative ₹10+ Crore milestone.'}
          </p>
        </div>

        {/* 3 Chronograph Impact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {dials.map((card, idx) => {
            const BadgeIcon = card.badgeIcon;
            return (
              <div
                key={idx}
                className="group relative p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-slate-300/90 transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                {/* Top Pill */}
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border ${card.badgeTone}`}
                  >
                    <BadgeIcon className="w-3.5 h-3.5 shrink-0" />
                    <span>{card.badgeText}</span>
                  </span>
                </div>

                {/* Center Chronograph Dial */}
                <div className="py-2">{card.dial}</div>

                {/* Narrative & Telemetry Footer */}
                <div className="space-y-4">
                  <div className="space-y-1.5 text-center">
                    <h3 className="text-lg sm:text-xl font-serif font-semibold text-slate-900">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2 text-[11px] font-semibold text-slate-500">
                    <span className="text-slate-700">{card.footerLeft}</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-teal-700">{card.footerRight}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
