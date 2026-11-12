import React from 'react';
import { 
  TrendingDown, 
  ShieldCheck, 
  CheckCircle2, 
  XCircle, 
  Receipt, 
  BadgePercent,
  Coins
} from 'lucide-react';

// ============================================================================
// EXACT TOTAL SAVINGS VALUE (Update this constant when exact number is provided)
// ============================================================================
export const TOTAL_PATIENT_SAVINGS = "₹4.8+ Crores";

interface PatientSavingsProps {
  onOpenBooking?: (service?: string) => void;
}

export const PatientSavings: React.FC<PatientSavingsProps> = ({ onOpenBooking }) => {
  const savingsPillars = [
    {
      icon: TrendingDown,
      metric: "₹35,000 – ₹85,000",
      title: "Avg. Savings per Hospitalization",
      desc: "Contractually pre-negotiated package rates on surgical procedures and critical care admissions.",
      accent: "text-emerald-700 bg-emerald-50 border-emerald-200/80"
    },
    {
      icon: BadgePercent,
      metric: "100% Zero-Commission",
      title: "Middleman Gouging Eliminated",
      desc: "Direct hospital billing with no referral kickbacks or agent markups added to your family's estimate.",
      accent: "text-teal-700 bg-teal-50 border-teal-200/80"
    },
    {
      icon: ShieldCheck,
      metric: "₹5,00,000 Cover / Family",
      title: "Government Schemes Unlocked",
      desc: "Full guidance and claim assistance for Ayushman Bharat (PM-JAY) and state healthcare subsidies.",
      accent: "text-sky-700 bg-sky-50 border-sky-200/80"
    },
    {
      icon: Receipt,
      metric: "Pre-Admission Audit",
      title: "Zero Hidden Hospital Charges",
      desc: "Written, transparent tariff estimates verified before admission to prevent discharge-day billing shocks.",
      accent: "text-amber-700 bg-amber-50 border-amber-200/80"
    }
  ];

  return (
    <section id="savings" className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50/60 to-white border-y border-slate-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-700 flex items-center gap-2">
            <Coins className="w-4 h-4 text-teal-600" />
            <span>Financial Protection &amp; Patient Savings</span>
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.18]">
            How Much Money Families Have Saved Through Aapka
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            A single medical emergency can push a rural or middle-class family into decades of debt. Aapka contractually negotiates hospital tariffs, audits bills, and eliminates middleman commissions to protect your family's hard-earned money.
          </p>
        </div>

        {/* Hero Highlight Metric Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-teal-950 text-white p-8 sm:p-12 lg:p-14 shadow-xl border border-slate-800">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-950/80 border border-teal-500/30 px-3 py-1 rounded-full inline-block">
                Verified Patient Impact
              </span>
              <div className="space-y-1">
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white font-serif">
                  {TOTAL_PATIENT_SAVINGS}
                </div>
                <p className="text-base sm:text-lg text-slate-300 font-medium">
                  Total hospital &amp; surgical expenses saved by patient families through Aapka
                </p>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-1 max-w-xl">
                Cumulative out-of-pocket medical expenses saved across 20+ cities through tariff pre-audits, contractual partner discounts, and Ayushman Bharat claim facilitation.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-3">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-200">
                  <strong className="text-white block font-semibold">100% Free Patient Guidance</strong>
                  Families pay nothing to Aapka coordinators. Our navigation is fully patient-first.
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-200">
                  <strong className="text-white block font-semibold">Contractual Zero-Overcharging Charter</strong>
                  Partner hospitals are legally bound to agreed rates without hidden admission extras.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Savings Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {savingsPillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div 
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow duration-300 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${pillar.accent}`}>
                    <IconComponent className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  <div>
                    <span className="text-xl sm:text-2xl font-bold font-serif text-slate-900 tracking-tight block">
                      {pillar.metric}
                    </span>
                    <h3 className="text-sm font-semibold text-slate-900 mt-1">
                      {pillar.title}
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Transparent Cost Comparison Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-6">
          <div className="max-w-2xl space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700">Cost Transparency</span>
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-slate-900">
              The Real Difference: Traditional Admission vs. Aapka Navigation
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              See how our clinical coordination protects your family from unverified hospital billing practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            
            {/* Without Aapka */}
            <div className="p-6 rounded-2xl bg-rose-50/50 border border-rose-200/70 space-y-4">
              <div className="flex items-center gap-2 text-rose-700 font-semibold text-sm">
                <XCircle className="w-5 h-5 shrink-0" />
                <span>Without Aapka (Traditional Route)</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">•</span>
                  <span><strong>Inflated Retail Tariffs:</strong> Hospitals charge standard walk-in rates with zero pre-negotiated discounts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">•</span>
                  <span><strong>Hidden Middleman Fees:</strong> Local agents and touts secretly take 20%–40% commission cuts from patient bills.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">•</span>
                  <span><strong>Surprise Discharge Invoices:</strong> Unexplained consumable, ICU, and surgical extras added at discharge.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">•</span>
                  <span><strong>Unclaimed Govt Schemes:</strong> Lack of guidance leaves Ayushman Bharat (PM-JAY) cards unused.</span>
                </li>
              </ul>
            </div>

            {/* With Aapka */}
            <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-200/70 space-y-4">
              <div className="flex items-center gap-2 text-emerald-800 font-semibold text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>With Aapka Care Navigation</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span><strong>Contractual Pre-Negotiated Rates:</strong> Up to 35%–50% savings on major surgical and hospital packages.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span><strong>Zero Commission Charter:</strong> 100% direct hospital billing with strict anti-gouging oversight.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span><strong>Verified Bill Pre-Audit:</strong> Our clinical coordination team audits estimates before admission and billing.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span><strong>Full Ayushman Bharat Cashless:</strong> Dedicated facilitators ensure eligible families receive 100% cashless cover.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
