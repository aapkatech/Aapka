import React from 'react';
import { GlobalNetwork } from '../components/GlobalNetwork';
import { 
  Building2, 
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
    { val: "240+", label: "Partner Hospitals", sub: "District, empanelled & tertiary facilities" },
    { val: "1,040+", label: "Surgeries Assisted", sub: "Safely coordinated with dedicated care" },
    { val: "48+", label: "Regional Referral Hubs", sub: "Super-specialty clinical centers" },
    { val: "< 35 Mins", label: "Fast Emergency Assistance", sub: "Doctor pre-alert & bed reservation" }
  ];

  const standards = [
    {
      title: "Guaranteed Transparent Pricing",
      desc: "Every empanelled hospital commits to pre-negotiated, transparent tariff schedules, eliminating surprise medical bills for vulnerable families.",
      icon: ShieldCheck
    },
    {
      title: "Bed Reservation Before Arrival",
      desc: "Casualty departments and ICUs receive patient details and vital signs while the patient is en route, ensuring immediate admission upon arrival.",
      icon: Bed
    },
    {
      title: "Verified Clinical Specialists",
      desc: "Round-the-clock availability of credentialed senior surgeons, cardiologists, pediatricians, and trauma teams.",
      icon: Stethoscope
    },
    {
      title: "NABL-Accredited Diagnostics",
      desc: "Direct integration with certified pathology and advanced imaging centers ensuring rapid, accurate digital report delivery.",
      icon: Activity
    }
  ];

  return (
    <div className="bg-[#FAFAFA] min-h-screen text-slate-900">
      
      {/* 1. Seamless Hero Section Header (Full-Width Canvas, No Dark Floating Box) */}
      <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-8">
          
          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              240+ Verified Hospitals Across Bharat
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Guaranteed bed availability, transparent costs, and dedicated care assistance. From reputable district centers to premier tertiary hospitals, each facility is thoroughly vetted for patient safety and clinical excellence.
            </p>
          </div>

          {/* Clean Borderless Horizontal Stat Bar */}
          <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 border-t border-slate-100">
            {networkMetrics.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                  {stat.val}
                </p>
                <p className="text-xs font-bold uppercase tracking-wide text-teal-800">
                  {stat.label}
                </p>
                <p className="text-xs text-slate-500">
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 2. Interactive Regional Network Hubs */}
      <div className="py-8">
        <GlobalNetwork onOpenBooking={onOpenBooking} t={t} />
      </div>

      {/* 3. Hospital Vetting Standards & Quality Governance */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
              How Aapka Vets Every Hospital Partner
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We protect patients from predatory pricing, unwarranted surgical procedures, and bureaucratic admission delays. No facility enters our network without meeting our patient-first charter.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {standards.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl bg-[#FAFAFA] border border-slate-200/90 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200/60 flex items-center justify-center text-teal-700">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      {s.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-200/70 text-[11px] font-semibold text-teal-700 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                    <span>Active Audit Standard</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Full-Width Hospital Empanellment Banner (Seamless Full-Bleed) */}
      <section className="w-full bg-[#0B132B] text-white py-16 sm:py-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400 flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5" />
              <span>Hospital &amp; Diagnostic Partnerships</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Represent a Healthcare Provider?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Empanel your hospital or laboratory with Aapka to connect with families across 1,050+ villages and enable pre-coordinated casualty admissions.
            </p>
          </div>

          <Link
            to="/contact"
            className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs tracking-tight transition-colors shadow-sm self-start md:self-auto shrink-0"
          >
            Apply for Hospital Empanelment
          </Link>
        </div>
      </section>

    </div>
  );
};
