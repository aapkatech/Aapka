import React from 'react';
import { 
  Trophy, 
  Award, 
  Medal, 
  Building2, 
  MapPin, 
  Users2, 
  IndianRupee, 
  Sparkles,
  CheckCircle
} from 'lucide-react';
import type { Language } from '../data/translations';
import { content } from '../data/translations';

interface ImpactRibbonProps {
  lang: Language;
}

export const ImpactRibbon: React.FC<ImpactRibbonProps> = ({ lang }) => {
  const t = content[lang];

  const awards = [
    {
      title: "Swati Rai Innovation Award",
      tag: "Winner (₹10 Lakh Grant)",
      institution: "Recognized for Grassroots Healthcare Inclusion",
      color: "from-amber-500 to-amber-600",
      textColor: "text-amber-800",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      icon: Trophy
    },
    {
      title: "FICCI Healthcare India Awards",
      tag: "National Finalist",
      institution: "Excellence in Rural & Primary Care Innovation",
      color: "from-sky-600 to-sky-700",
      textColor: "text-sky-800",
      bgColor: "bg-sky-50",
      borderColor: "border-sky-200",
      icon: Award
    },
    {
      title: "Uththistha 2024",
      tag: "1st Runner-Up",
      institution: "IIM Kashipur National Healthcare Pitch",
      color: "from-emerald-600 to-emerald-700",
      textColor: "text-emerald-800",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      icon: Medal
    },
    {
      title: "Sankalp Bharat Summit",
      tag: "Top Social Enterprise",
      institution: "Excellence in Tier-3/4 Health Equity",
      color: "from-purple-600 to-purple-700",
      textColor: "text-purple-800",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      icon: Sparkles
    }
  ];

  return (
    <section id="impact" className="py-14 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t.impact.subtitle}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            {t.impact.title}
          </h2>
        </div>

        {/* Awards Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {awards.map((award, index) => {
            const Icon = award.icon;
            return (
              <div 
                key={index}
                className={`relative rounded-2xl p-5 ${award.bgColor} border ${award.borderColor} hover:shadow-lg transition-all duration-300 flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white shadow-2xs ${award.textColor}`}>
                      {award.tag}
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-white shadow-xs flex items-center justify-center text-slate-700 group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4 text-amber-500" />
                    </div>
                  </div>
                  <h3 className="font-extrabold text-base text-slate-900 leading-snug">
                    {award.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 font-medium">
                    {award.institution}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1 text-[11px] font-semibold text-slate-500">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Jury Validated Impact</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Metrics Grid */}
        <div className="bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left relative z-10">
            {/* Metric 1 */}
            <div className="space-y-2 border-b sm:border-b-0 sm:border-r border-slate-700/60 pb-6 sm:pb-0 sm:pr-6">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-emerald-400">
                <MapPin className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider">Rural Outreach</span>
              </div>
              <p className="text-4xl sm:text-5xl font-black text-white tracking-tight">500+</p>
              <p className="text-sm font-medium text-slate-300">{t.impact.metricVillagesLabel}</p>
            </div>

            {/* Metric 2 */}
            <div className="space-y-2 border-b sm:border-b-0 sm:border-r border-slate-700/60 pb-6 sm:pb-0 sm:pr-6">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-sky-400">
                <Building2 className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider">Healthcare Infra</span>
              </div>
              <p className="text-4xl sm:text-5xl font-black text-white tracking-tight">46+</p>
              <p className="text-sm font-medium text-slate-300">{t.impact.metricHospitalsLabel}</p>
            </div>

            {/* Metric 3 */}
            <div className="space-y-2 border-b sm:border-b-0 sm:border-r border-slate-700/60 pb-6 sm:pb-0 sm:pr-6">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-amber-400">
                <Users2 className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider">Trusted Coverage</span>
              </div>
              <p className="text-4xl sm:text-5xl font-black text-white tracking-tight">40,000+</p>
              <p className="text-sm font-medium text-slate-300">{t.impact.metricPincodesLabel}</p>
            </div>

            {/* Metric 4 */}
            <div className="space-y-2">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-emerald-400">
                <IndianRupee className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider">Financial Relief</span>
              </div>
              <p className="text-4xl sm:text-5xl font-black text-white tracking-tight">₹4.2 Cr+</p>
              <p className="text-sm font-medium text-slate-300">
                {lang === 'hi' ? 'मरीजों के चिकित्सा खर्च में बचत' : 'Saved for Patient Households'}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
