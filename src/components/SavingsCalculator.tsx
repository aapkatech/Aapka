import React, { useState } from 'react';
import { 
  CreditCard, 
  CheckCircle2, 
  TrendingDown, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  Heart,
  Pill,
  Stethoscope,
  Activity
} from 'lucide-react';
import type { Language } from '../data/translations';
import { content } from '../data/translations';

interface SavingsCalculatorProps {
  lang: Language;
  onOpenBooking: (serviceType: string) => void;
}

export const SavingsCalculator: React.FC<SavingsCalculatorProps> = ({ lang, onOpenBooking }) => {
  const t = content[lang];
  const [familyMembers, setFamilyMembers] = useState<number>(4);
  const [includeSurgery, setIncludeSurgery] = useState<boolean>(true);
  const [includeLabs, setIncludeLabs] = useState<boolean>(true);
  const [includeMeds, setIncludeMeds] = useState<boolean>(true);

  // Dynamic Savings Calculation
  const baseSavingsPerMember = 3800; // annual OPD + consults
  const surgerySavings = includeSurgery ? 22000 : 0;
  const labSavings = includeLabs ? familyMembers * 2100 : 0;
  const medSavings = includeMeds ? familyMembers * 3200 : 0;
  const totalEstimatedSavings = (familyMembers * baseSavingsPerMember) + surgerySavings + labSavings + medSavings;

  return (
    <section id="smart-card" className="py-20 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Smart Health Card Features & Benefits */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>{t.calculator.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              {lang === 'hi'
                ? 'एक कार्ड — पूरे परिवार की सम्पूर्ण स्वास्थ्य सुरक्षा'
                : 'One Smart Health Card — Lifelong Protection For Your Entire Family'}
            </h2>

            <p className="text-base text-slate-600 leading-relaxed font-normal">
              {lang === 'hi'
                ? 'अचानक बीमारी या दुर्घटना में भारी खर्च से अपने परिवार को बचाएं। आपका स्मार्ट हेल्थ कार्ड आपको पार्टनर अस्पतालों, दवाइयों और जांच पर बेजोड़ छूट प्रदान करता है।'
                : 'Sudden hospitalizations shouldn\'t drain your life savings. The Aapka Smart Health Card provides pre-negotiated surgery packages, subsidized diagnostics, and free tele-doctor access across 46+ top hospitals.'}
            </p>

            {/* Benefit Checkmarks */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">
                    {lang === 'hi' ? 'वार्षिक मुफ्त बॉडी चेकअप पैकेज' : 'Free Annual Full-Body Checkup'}
                  </h4>
                  <p className="text-xs text-slate-600">
                    {lang === 'hi' ? 'परिवार के 2 वरिष्ठ सदस्यों के लिए 48+ महत्वपूर्ण जांच मुफ्त।' : 'Complimentary 48-parameter blood & vital panel for 2 senior members.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-8 h-8 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">
                    {lang === 'hi' ? 'सर्जरी पर 20% से 40% तक की छूट' : 'Pre-Negotiated 20% to 40% Surgery Packages'}
                  </h4>
                  <p className="text-xs text-slate-600">
                    {lang === 'hi' ? 'हर्निया, पथरी, मोतियाबिंद, डिलीवरी और अन्य सर्जिकल प्रक्रियाओं पर तय रियायती दरें।' : 'Zero inflation on bed charges, doctor fees, or OT consumables.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">
                    {lang === 'hi' ? 'समर्पित स्वास्थ्य-मित्र सहायता' : 'Dedicated Personal Swasthya-Mitra'}
                  </h4>
                  <p className="text-xs text-slate-600">
                    {lang === 'hi' ? 'अस्पताल के हर कागजी काम, टीपीए और आयुष्मान क्लेम में मदद के लिए व्यक्तिगत साथी।' : 'Your family guide handles hospital coordination, insurance approvals & discharges.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenBooking('smartcard')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/20 active:scale-95 transition-all cursor-pointer"
              >
                <CreditCard className="w-4 h-4" />
                <span>{t.calculator.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Savings Calculator Widget */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-slate-900 text-white p-7 sm:p-9 shadow-2xl border border-slate-800 relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <TrendingDown className="w-5 h-5 text-emerald-400" />
                    {t.calculator.badge}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    {lang === 'hi' ? 'पारिवारिक जरूरतों के अनुसार अपनी बचत देखें' : 'Instant Estimate For Your Household'}
                  </p>
                </div>
                <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {lang === 'hi' ? 'सत्यापित गणना' : 'Verified Rates'}
                </span>
              </div>

              {/* Slider: Family Members */}
              <div className="py-6 space-y-3">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span className="text-slate-300">{t.calculator.familyLabel}</span>
                  <span className="text-emerald-400 text-base font-extrabold px-3 py-1 bg-slate-800 rounded-xl border border-slate-700">
                    {familyMembers} {lang === 'hi' ? 'सदस्य' : 'Members'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="8"
                  value={familyMembers}
                  onChange={(e) => setFamilyMembers(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>1 Member (Individual)</span>
                  <span>4 (Nuclear Family)</span>
                  <span>8 (Joint Family)</span>
                </div>
              </div>

              {/* Toggles: Needs */}
              <div className="space-y-3 pb-6 border-b border-slate-800">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {t.calculator.serviceLabel}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setIncludeSurgery(!includeSurgery)}
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      includeSurgery 
                        ? 'bg-emerald-950/60 border-emerald-500 text-white' 
                        : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Activity className="w-4 h-4 mb-1 text-emerald-400" />
                    <p className="text-xs font-bold leading-tight">
                      {lang === 'hi' ? 'सर्जरी / भर्ती' : 'Surgery / Inpatient'}
                    </p>
                    <span className="text-[10px] text-slate-300">~ ₹22,000 saved</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setIncludeLabs(!includeLabs)}
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      includeLabs 
                        ? 'bg-emerald-950/60 border-emerald-500 text-white' 
                        : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Stethoscope className="w-4 h-4 mb-1 text-sky-400" />
                    <p className="text-xs font-bold leading-tight">
                      {lang === 'hi' ? 'जांच / ब्लड टेस्ट' : 'Diagnostic Tests'}
                    </p>
                    <span className="text-[10px] text-slate-300">~ 50% discount</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setIncludeMeds(!includeMeds)}
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      includeMeds 
                        ? 'bg-emerald-950/60 border-emerald-500 text-white' 
                        : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Pill className="w-4 h-4 mb-1 text-amber-400" />
                    <p className="text-xs font-bold leading-tight">
                      {lang === 'hi' ? 'नियमित दवाइयां' : 'Monthly Medicines'}
                    </p>
                    <span className="text-[10px] text-slate-300">~ 20% off bill</span>
                  </button>
                </div>
              </div>

              {/* Total Calculated Savings Output */}
              <div className="pt-6 space-y-4">
                <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/90 to-sky-950/90 border border-emerald-500/40 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      {t.calculator.annualEstimatedSavings}
                    </span>
                    <p className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1">
                      ₹{totalEstimatedSavings.toLocaleString('en-IN')}
                      <span className="text-xs font-semibold text-slate-300 ml-1.5">/ year</span>
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400">
                    <Sparkles className="w-6 h-6" />
                  </div>
                </div>

                <button
                  onClick={() => onOpenBooking('smartcard')}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-extrabold text-sm shadow-lg shadow-emerald-500/25 active:scale-95 transition-all cursor-pointer text-center"
                >
                  {lang === 'hi'
                    ? `मात्र ₹499 में कार्ड लें और ₹${totalEstimatedSavings.toLocaleString('en-IN')} बचाएं`
                    : `Get Card for Just ₹499 & Save ₹${totalEstimatedSavings.toLocaleString('en-IN')}`}
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
