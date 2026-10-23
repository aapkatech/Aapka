import React from 'react';
import { ServicesShowcase } from '../components/ServicesShowcase';
import { 
  Building2, 
  FlaskConical, 
  CreditCard, 
  ShieldCheck, 
  Clock, 
  IndianRupee, 
  CheckCircle2, 
  PhoneCall, 
  ArrowRight 
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
      title: "Hospitalisation Assistance",
      subtitle: "Commission earned for facilitating patient access, hospital admissions and surgical clearances.",
      icon: Building2,
      points: [
        "Bed & ICU pre-allocation",
        "Empanelled institutional pricing",
        "Discharge and insurance navigation",
        "Dedicated on-site patient facilitator"
      ]
    },
    {
      step: "02",
      title: "Diagnostic Services",
      subtitle: "Commission from booked pathology and diagnostic tests through accredited partner laboratories.",
      icon: FlaskConical,
      points: [
        "NABL-accredited diagnostic centers",
        "Doorstep blood & sample collection",
        "Digital reports delivered within 24 hours",
        "Subsidized rates for rural families"
      ]
    },
    {
      step: "03",
      title: "Additional Healthcare & Health Cards",
      subtitle: "Sustainable revenue from insurance facilitation, health-card subscriptions, and institutional partnerships.",
      icon: CreditCard,
      points: [
        "Aapka Smart Health Card benefits",
        "Annual preventive health checkups",
        "Government scheme linkage (Ayushman Bharat)",
        "Pharmacy and medical equipment discounts"
      ]
    }
  ];

  return (
    <div className="py-12 sm:py-16 space-y-20 bg-white">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-tr from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden border border-slate-800 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold border border-teal-500/30">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Dedicated Webpage • Clinical Pathways</span>
            </div>
            
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Healthcare Services, Simplified for Everyone, Everywhere.
            </h1>
            
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Transparent, end-to-end surgical coordination, diagnostic testing, emergency transfer, and family health cards built to eliminate confusion and delays.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-300">
              <span className="flex items-center gap-1.5 text-teal-400">
                <CheckCircle2 className="w-4 h-4" /> Zero Hidden Charges
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-teal-400">
                <CheckCircle2 className="w-4 h-4" /> 24/7 Clinical Coordination
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-teal-400">
                <CheckCircle2 className="w-4 h-4" /> Pre-Negotiated Hospital Rates
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Core Services Showcase */}
      <ServicesShowcase onSelectService={onSelectService} t={t} />

      {/* Sustainable Business Model Section (Page 7 of Deck) */}
      <section className="py-16 sm:py-20 bg-slate-50/70 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
              Our Business &amp; Care Delivery Model
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900">
              Sustainable Revenue for Greater Social Impact
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Multiple revenue streams built directly around patient needs allow Aapka to remain financially sustainable while expanding healthcare access into underserved tribal districts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {revenueStreams.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-slate-400">Pathway {item.step}</span>
                      <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200/60 flex items-center justify-center text-teal-700">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="text-lg font-bold text-slate-900 font-serif">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.subtitle}
                      </p>
                    </div>

                    <ul className="space-y-2 pt-2 border-t border-slate-100">
                      {item.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <button
                      onClick={() => onSelectService('hospitalization')}
                      className="text-xs font-semibold text-teal-700 hover:text-teal-900 flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <span>Inquire about this pathway</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Bottom Emergency / Coordination Bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="p-8 rounded-2xl bg-teal-900 text-white flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 max-w-xl">
            <h3 className="text-xl font-bold font-serif text-white">Need immediate care navigation or surgery check?</h3>
            <p className="text-xs text-teal-200">Our clinical coordinators stage beds and alert emergency doctors within 15 minutes.</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-xl bg-white text-slate-950 font-semibold text-xs hover:bg-slate-100 transition-colors"
            >
              Contact Care Desk
            </Link>
            <a
              href="tel:+919716332976"
              className="px-5 py-2.5 rounded-xl bg-teal-800 text-white font-semibold text-xs hover:bg-teal-700 transition-colors flex items-center gap-2 border border-teal-700"
            >
              <PhoneCall className="w-3.5 h-3.5 text-teal-300" />
              <span>Call +91 9716332976</span>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};
