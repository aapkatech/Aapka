import React from 'react';
import { GlobalNetwork } from '../components/GlobalNetwork';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Stethoscope, 
  Activity, 
  Bed 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Translations } from '../i18n/translations';

interface NetworkPageProps {
  onOpenBooking: () => void;
  t?: Translations['network'];
}

export const NetworkPage: React.FC<NetworkPageProps> = ({ onOpenBooking, t }) => {
  const networkMetrics = [
    { label: "Partner Hospitals", val: "250+", sub: "Govt, empanelled & private facilities" },
    { label: "Patients Protected", val: "1,270+", sub: "₹4.1 Cr+ patient savings achieved" },
    { label: "Cities Across Bharat", val: "15+", sub: "Regional care navigation nodes" },
    { label: "Average Staging ETA", val: "< 35 min", sub: "Pre-arrival casualty notification" }
  ];

  const standards = [
    {
      title: "Contractual Zero-Gouging Guarantee",
      desc: "Every hospital in our network signs a binding agreement honoring pre-negotiated, transparent tariff schedules with zero surprise bills.",
      icon: ShieldCheck
    },
    {
      title: "Casualty & ICU Bed Pre-Staging",
      desc: "Emergency casualty departments and ICUs receive direct digital alerts and patient vitals before the vehicle arrives.",
      icon: Bed
    },
    {
      title: "Credentialed Clinical Specialists",
      desc: "Verified senior surgeons, cardiologists, oncologists, and pediatricians on duty with active credentialing.",
      icon: Stethoscope
    },
    {
      title: "NABL Accredited Diagnostics",
      desc: "Integrated regional pathology and imaging facilities guaranteeing verified, rapid digital laboratory reports.",
      icon: Activity
    }
  ];

  return (
    <div className="py-4 sm:py-6 space-y-6 sm:space-y-8 bg-transparent">
      
      {/* Header Banner (Aura Wave & Clinical Lattice Theme) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white/95 backdrop-blur-md border border-sky-100 shadow-xs relative overflow-hidden">
          {/* Precision Beveled Aura Top Rim Gradient */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600" />

          <div className="relative max-w-3xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-sky-700 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-600 animate-pulse" />
              <span>Verified Healthcare Network</span>
            </p>
            
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.18]">
              250+ Verified Hospitals Across Bharat
            </h1>
            
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              From district hospitals to premier tertiary super-specialty institutions — vetted for transparent pricing, clinical excellence, and immediate bed staging.
            </p>

            {/* Quick Metrics Bar */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-sky-100">
              {networkMetrics.map((m, idx) => (
                <div key={idx} className="space-y-0.5">
                  <p className="text-2xl sm:text-3xl font-bold font-serif text-sky-700">{m.val}</p>
                  <p className="text-xs font-semibold text-slate-900">{m.label}</p>
                  <p className="text-[11px] text-slate-500 font-normal">{m.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Regional Network Grid Component */}
      <GlobalNetwork onOpenBooking={onOpenBooking} t={t} />

      {/* Clinical Vetting & Quality Standards */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-4 sm:space-y-5">
        <div className="max-w-3xl space-y-1.5">
          <p className="text-xs font-semibold uppercase tracking-wider text-sky-700">
            Quality Assurance &amp; Governance
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900">
            How Aapka Vets Every Hospital Partner
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            We eliminate the predatory practices that often plague vulnerable rural patients. No facility enters our network without strict compliance with our patient-first charter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {standards.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-sky-100 shadow-xs hover:border-sky-300 hover:shadow-md transition-all flex flex-col justify-between space-y-4 relative overflow-hidden"
              >
                <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-cyan-400 to-sky-500" />
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200/60 flex items-center justify-center text-sky-700">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 font-serif">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-sky-100 text-[11px] font-semibold text-sky-700 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                  <span>Active Audit Protocol</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Hospital Empanelment Invitation Banner (Aura Lattice Theme) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="p-6 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-md text-slate-900 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xs border border-sky-100 relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600" />

          <div className="space-y-1.5 max-w-xl">
            <span className="text-xs uppercase font-semibold tracking-wider text-sky-700">Institutional Empanelment</span>
            <h3 className="text-xl sm:text-2xl font-semibold font-serif text-slate-900">Represent a hospital or diagnostic laboratory?</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Partner with Aapka to expand patient footfall across 15+ cities and enable pre-coordinated casualty admissions.
            </p>
          </div>

          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 text-white font-semibold text-xs sm:text-sm tracking-tight transition-all shadow-md shadow-sky-600/20 self-start md:self-auto shrink-0"
          >
            Apply for Hospital Empanelment
          </Link>
        </div>
      </div>

    </div>
  );
};
