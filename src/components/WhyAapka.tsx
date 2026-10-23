import React from 'react';
import { Building2, HeartHandshake, ShieldCheck, PhoneCall, ArrowRight } from 'lucide-react';
import type { Language } from '../i18n/translations';

interface WhyAapkaProps {
  lang?: Language;
  onOpenBooking?: (service?: string) => void;
}

export const WhyAapka: React.FC<WhyAapkaProps> = ({ lang = 'en', onOpenBooking }) => {
  const isHi = lang === 'hi';

  const content = {
    tag: isHi ? "विश्वसनीय स्वास्थ्य साथी" : "Human Care, Honest Guidance",
    title: isHi ? "AAPKA ही क्यों?" : "Why AAPKA?",
    subtitle: isHi 
      ? "स्वास्थ्य सेवा केवल इलाज नहीं, विश्वास और सम्मान का विषय है। जब परिवार को चिकित्सा सहायता की आवश्यकता होती है, तो हम हर कदम पर उनके साथ खड़े रहते हैं।"
      : "Healthcare decisions are deeply personal. When your family faces medical uncertainty, you deserve clear guidance, honest costs, and a trusted hand at every step.",
    cards: [
      {
        icon: Building2,
        title: isHi ? "सही अस्पताल और डॉक्टर का मार्गदर्शन" : "Verified Hospital & Doctor Access",
        tagline: isHi ? "अस्पतालों के चक्कर लगाने से मुक्ति" : "No wandering between facilities",
        desc: isHi 
          ? "240+ सत्यापित अस्पतालों के नेटवर्क में सही विशेषज्ञ डॉक्टर, लाइव बेड उपलब्धता और समय पर भर्ती की सीधी सुविधा।"
          : "Direct routing to 240+ vetted hospital partners with real-time bed coordination and credentialed specialist doctors across 20+ cities.",
        accent: "text-teal-700 bg-teal-50 border-teal-200/70"
      },
      {
        icon: HeartHandshake,
        title: isHi ? "समर्पित केयर नेविगेटर का साथ" : "Dedicated Care Navigators",
        tagline: isHi ? "अस्पताल में आप कभी अकेले नहीं हैं" : "Never navigate the medical system alone",
        desc: isHi
          ? "हमारे प्रशिक्षित स्वास्थ्य समन्वयक भर्ती, ओपीडी अपॉइंटमेंट और कागजी औपचारिकताओं में परिवार का व्यक्तिगत मार्गदर्शन करते हैं।"
          : "Our coordinators personally assist families with hospital admissions, doctor appointments, and administrative logistics with dignity.",
        accent: "text-sky-700 bg-sky-50 border-sky-200/70"
      },
      {
        icon: ShieldCheck,
        title: isHi ? "पारदर्शिता और निष्पक्ष मार्गदर्शन" : "Transparent Guidance & Zero Hidden Fees",
        tagline: isHi ? "सरकारी योजनाओं का पूरा लाभ" : "Dignified, honest medical care",
        desc: isHi
          ? "आयुष्मान भारत (PM-JAY) और अन्य सरकारी स्वास्थ्य योजनाओं की स्पष्ट जानकारी, पारदर्शी पैथोलॉजी और उचित दरों पर इलाज।"
          : "Full guidance on Ayushman Bharat (PM-JAY) empanelment, vetted diagnostic rates, and transparent hospital billing without middlemen.",
        accent: "text-amber-700 bg-amber-50 border-amber-200/70"
      }
    ],
    calloutTitle: isHi ? "किसी स्वास्थ्य सहायता या अस्पताल परामर्श की आवश्यकता है?" : "Need hospital assistance or specialist consultation?",
    calloutDesc: isHi 
      ? "हमारी 24/7 केयर समन्वय हेल्पलाइन पर तुरंत बात करें या अपनी सुविधा अनुसार परामर्श बुक करें।"
      : "Our 24/7 care coordination desk is ready to assist your family with verified hospital admissions and doctor routing.",
    calloutCta1: isHi ? "केयर समन्वयक से बात करें" : "Speak to Care Desk",
    calloutCta2: isHi ? "ऑनलाइन सेवा बुक करें" : "Request Hospital Assistance"
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
            {content.tag}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.2]">
            {content.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            {content.subtitle}
          </p>
        </div>

        {/* 3 Human Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {content.cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div 
                key={idx}
                className="p-7 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${card.accent}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-teal-700 tracking-wide uppercase">
                      {card.tagline}
                    </p>
                    <h3 className="text-xl font-bold text-slate-900 font-serif">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassuring Care Desk Strip */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-teal-950 text-white flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-md">
          <div className="space-y-2 max-w-2xl">
            <h4 className="font-serif text-lg sm:text-xl font-semibold text-white">
              {content.calloutTitle}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {content.calloutDesc}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="tel:+919667033044"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-medium text-xs sm:text-sm transition-colors shadow-xs"
            >
              <PhoneCall className="w-4 h-4" />
              <span>+91 9667033044</span>
            </a>
            {onOpenBooking && (
              <button
                type="button"
                onClick={() => onOpenBooking('hospitalization')}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium text-xs sm:text-sm transition-colors cursor-pointer"
              >
                <span>{content.calloutCta2}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
