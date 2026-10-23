import React from 'react';
import { ContactSection } from '../components/ContactSection';
import { 
  PhoneCall, 
  CheckCircle2, 
  MessageSquare,
  Sparkles
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const contactStats = [
    { value: "< 15 Mins", label: "Response Time", desc: "Swift clinical dispatch" },
    { value: "24/7 Active", label: "Care Coordination", desc: "Casualty and bed reservation" },
    { value: "100% Protected", label: "Patient Privacy", desc: "DPDP Act 2023 compliant" },
    { value: "Zero Extra Fees", label: "Tariff Guarantee", desc: "Pre-negotiated hospital rates" }
  ];

  return (
    <div className="bg-[#FAFAFA] min-h-screen text-slate-900">
      
      {/* 1. Seamless Hero Section Header (Full-Width Canvas, No Dark Floating Box) */}
      <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-8">
          
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
              Care Coordination &amp; Inquiries
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Connect With Our Clinical Care Desk
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Whether you need urgent emergency bed reservation, diagnostic testing, want to join as a Gram Mitra, or represent a hospital looking to empanel with Aapka — our team is here to assist you.
            </p>
          </div>

          {/* Clean Borderless Horizontal Stat Bar */}
          <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 border-t border-slate-100">
            {contactStats.map((stat, idx) => (
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

      {/* 2. Interactive Care Coordination Desk Component */}
      <div className="py-6">
        <ContactSection />
      </div>

      {/* 3. Full-Width Emergency Dispatch Callout (Seamless Full-Bleed) */}
      <section className="w-full bg-[#0B132B] text-white py-16 sm:py-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Immediate Medical Emergency?</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Direct Access to Emergency Dispatch
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Available 24 hours a day, 7 days a week for immediate hospital pre-notification, ambulance staging, and doctor coordination.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="tel:+919716332976"
              className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs tracking-tight transition-colors flex items-center gap-2 shadow-sm"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Call +91 9716332976</span>
            </a>
            <a
              href="https://wa.me/919716332976"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-white font-semibold text-xs tracking-tight transition-colors flex items-center gap-2 border border-slate-700"
            >
              <MessageSquare className="w-3.5 h-3.5 text-teal-400" />
              <span>WhatsApp Emergency</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
