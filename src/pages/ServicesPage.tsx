import React from 'react';
import { ServicesShowcase } from '../components/ServicesShowcase';
import { 
  Building2, 
  FlaskConical, 
  ShieldCheck, 
  CheckCircle2, 
  PhoneCall, 
  ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Translations } from '../i18n/translations';

interface ServicesPageProps {
  onSelectService?: (serviceId: string) => void;
  t?: Translations['services'];
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onSelectService, t }) => {
  const patientPillars = [
    {
      step: "01",
      title: "Pre-Negotiated Hospital Tariffs",
      subtitle: "Written price protection with pre-negotiated package discounts across 250+ network hospitals.",
      image: "/services/hospitalization.webp",
      badge: "Surgical Protection",
      icon: Building2,
      points: [
        "Up to 50% savings on major surgeries",
        "Bed & ICU pre-allocation before arrival",
        "Line-by-line hospital bill pre-audit",
        "Dedicated on-site patient facilitator"
      ]
    },
    {
      step: "02",
      title: "Accredited Diagnostic Routing",
      subtitle: "Doorstep pathology sample collection and high-precision diagnostics delivered digitally.",
      image: "/services/pathology.webp",
      badge: "Lab & Pathology",
      icon: FlaskConical,
      points: [
        "NABL-accredited diagnostic partner labs",
        "Doorstep blood & sample pickup",
        "Verified digital reports under 24 hours",
        "Subsidized institutional tariff pricing"
      ]
    },
    {
      step: "03",
      title: "Cashless Insurance & Ayushman Desk",
      subtitle: "End-to-end guidance for Ayushman Bharat (PM-JAY) and corporate/private TPA health insurance.",
      image: "/services/insurance.webp",
      badge: "100% Cashless",
      icon: ShieldCheck,
      points: [
        "On-ground TPA pre-authorization support",
        "Ayushman Bharat (PM-JAY) eligibility check",
        "Zero hidden fees or discharge surprises",
        "Elimination of tout and middleman markups"
      ]
    }
  ];

  return (
    <div className="py-12 sm:py-16 space-y-20 bg-white">
      
      {/* Page Header (Clean White Background, Human & Clear) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-white border border-slate-200/90 shadow-sm relative overflow-hidden">
          <div className="relative max-w-3xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-700 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-700" />
              <span>Compassionate Care Services</span>
            </p>
            
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.18]">
              Healthcare Services, Simplified for Everyone, Everywhere.
            </h1>
            
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Transparent, end-to-end surgical coordination, diagnostic testing, emergency transfer, and family health cards built to eliminate confusion and delays.
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-4 text-xs sm:text-sm font-medium text-slate-700">
              <span className="flex items-center gap-1.5 text-teal-700">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /> Zero Hidden Charges
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1.5 text-teal-700">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /> 24/7 Clinical Coordination
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1.5 text-teal-700">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /> Pre-Negotiated Hospital Rates
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Core Services Showcase (9 Services with Clear Visible Photos) */}
      <ServicesShowcase onSelectService={onSelectService} t={t} />

      {/* Patient Care Principles Section (Clear, Visible Photos in Every Box) */}
      <section className="py-16 sm:py-20 bg-slate-50/70 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
              Our Patient Charter
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900">
              How Aapka Protects Patients Across Every Pathway
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Every procedure, diagnostic test, and insurance claim is executed with institutional diligence and zero commission to middlemen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {patientPillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="group rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-teal-400/80 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* High-Visibility Photo Banner in Every Box */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent" />
                    
                    {/* Top Badge */}
                    <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10.5px] font-bold text-slate-900 tracking-wider uppercase shadow-xs">
                      {item.badge}
                    </div>

                    {/* Floating Icon */}
                    <div className="absolute -bottom-5 left-6 w-11 h-11 rounded-2xl bg-white shadow-md border border-slate-100 flex items-center justify-center text-teal-700 group-hover:bg-teal-700 group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="pt-8 px-6 sm:px-7 pb-6 sm:pb-7 flex flex-col justify-between flex-grow space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-slate-950 font-serif leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                        {item.subtitle}
                      </p>

                      <ul className="space-y-2 pt-3 border-t border-slate-100">
                        {item.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-slate-100">
                      <Link
                        to="/contact"
                        className="text-xs font-semibold text-teal-700 hover:text-teal-900 flex items-center gap-1.5 cursor-pointer transition-colors"
                      >
                        <span>Request this service</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Bottom Emergency / Coordination Bar (Clean White Background) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 text-slate-900 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1.5 max-w-xl">
            <h3 className="text-xl sm:text-2xl font-semibold font-serif text-slate-900">Need immediate care navigation or surgery check?</h3>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">Our clinical coordinators stage beds and alert emergency doctors promptly.</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-medium text-xs sm:text-sm hover:bg-slate-800 transition-colors shadow-xs"
            >
              Contact Care Desk
            </Link>
            <a
              href="tel:+918860880044"
              className="px-5 py-2.5 rounded-xl bg-teal-50 text-teal-800 font-medium text-xs sm:text-sm hover:bg-teal-100 transition-colors flex items-center gap-2 border border-teal-200/80"
            >
              <PhoneCall className="w-3.5 h-3.5 text-teal-700" />
              <span>Call +91 8860880044</span>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};
