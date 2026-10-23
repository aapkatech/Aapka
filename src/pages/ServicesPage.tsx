import React from 'react';
import { ServicesShowcase } from '../components/ServicesShowcase';
import { 
  Building2, 
  FlaskConical, 
  CreditCard, 
  CheckCircle2, 
  PhoneCall, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Translations } from '../i18n/translations';

interface ServicesPageProps {
  onSelectService: (serviceId: string) => void;
  t?: Translations['services'];
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onSelectService, t }) => {
  const revenueStreams = [
    {
      step: "01",
      title: "Hospitalisation & Surgical Care",
      subtitle: "Full-cycle facilitation for hospital admissions, verified ICU pre-allocation, and insurance navigation.",
      icon: Building2,
      points: [
        "Bed and ICU pre-reservation before arrival",
        "Pre-negotiated institutional tariffs with zero hidden charges",
        "Discharge clearance and insurance paperwork navigation",
        "Dedicated on-site patient facilitator to assist your family"
      ]
    },
    {
      step: "02",
      title: "Diagnostic & Pathology Testing",
      subtitle: "Reliable pathology and imaging through certified diagnostic centers with doorstep collection.",
      icon: FlaskConical,
      points: [
        "NABL-accredited diagnostic partner laboratories",
        "Doorstep blood and sample collection in rural areas",
        "Verified digital reports delivered directly within 24 hours",
        "Subsidized test rates for low-income and rural families"
      ]
    },
    {
      step: "03",
      title: "Smart Health Cards & Family Protection",
      subtitle: "Preventative healthcare coverage, government scheme linkage, and outpatient pharmacy savings.",
      icon: CreditCard,
      points: [
        "Aapka Smart Health Card for the whole family",
        "Annual preventative health screenings and doctor checkups",
        "Seamless linkage with Ayushman Bharat (PM-JAY)",
        "Discounts on essential chronic medications and medical equipment"
      ]
    }
  ];

  const serviceHighlights = [
    { value: "0 Hidden Charges", label: "Tariff Transparency", desc: "Pre-negotiated hospital pricing" },
    { value: "24/7 Care Desk", label: "Clinical Navigation", desc: "Always on-call for patient families" },
    { value: "1,040+ Surgeries", label: "Care Assisted", desc: "Completed with safe patient outcomes" },
    { value: "100% Cashless", label: "Scheme Linkage", desc: "Ayushman Bharat & insurance support" }
  ];

  return (
    <div className="bg-[#FAFAFA] min-h-screen text-slate-900">
      
      {/* 1. Seamless Hero Section Header (Full-Width Canvas, No Dark Floating Box) */}
      <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-8">
          
          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Healthcare Services Built Around Patients &amp; Families
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              From pre-negotiated surgery tariffs and verified hospital bed reservations to doorstep diagnostic testing and emergency transfers — we eliminate confusion, hidden fees, and treatment delays.
            </p>
          </div>

          {/* Clean Borderless Stat Bar */}
          <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 border-t border-slate-100">
            {serviceHighlights.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                  {stat.value}
                </p>
                <p className="text-xs font-bold uppercase tracking-wide text-teal-800">
                  {stat.label}
                </p>
                <p className="text-xs text-slate-500">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 2. Interactive Core Services Showcase */}
      <div className="py-8">
        <ServicesShowcase onSelectService={onSelectService} t={t} />
      </div>

      {/* 3. Sustainable Care Delivery & Revenue Model (Slide 7 of Deck) */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
              How Aapka Delivers Long-Term Value &amp; Impact
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              By aligning patient advocacy with healthcare provider efficiency, our sustainable model allows Aapka to continuously expand services across underserved rural and tribal regions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {revenueStreams.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="p-8 rounded-2xl bg-[#FAFAFA] border border-slate-200/90 hover:border-slate-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-slate-400">Pathway {item.step}</span>
                      <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200/60 flex items-center justify-center text-teal-700">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="text-lg font-bold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.subtitle}
                      </p>
                    </div>

                    <ul className="space-y-2.5 pt-3 border-t border-slate-200/70">
                      {item.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-snug">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-200/70">
                    <button
                      onClick={() => onSelectService('hospitalization')}
                      className="text-xs font-semibold text-teal-700 hover:text-teal-900 flex items-center gap-1.5 cursor-pointer transition-colors"
                    >
                      <span>Inquire about this service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Full-Width Emergency Callout (Seamless Full Bleed, Not a Floating Box) */}
      <section className="w-full bg-[#0B132B] text-white py-16 sm:py-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Need Immediate Assistance?</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Talk to Our Clinical Care Coordinator
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Our clinical navigators are available 24/7 to reserve hospital beds, confirm insurance coverage, and arrange emergency transfers.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs tracking-tight transition-colors shadow-sm"
            >
              Contact Care Desk
            </Link>
            <a
              href="tel:+919716332976"
              className="px-6 py-3 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-white font-semibold text-xs tracking-tight transition-colors flex items-center gap-2 border border-slate-700"
            >
              <PhoneCall className="w-3.5 h-3.5 text-teal-400" />
              <span>Call +91 9716332976</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
