import React from 'react';
import { 
  Building2, 
  HeartHandshake, 
  ShieldCheck, 
  PhoneCall, 
  ArrowRight,
  CheckCircle2,
  Quote
} from 'lucide-react';
import type { Language } from '../i18n/translations';

interface WhyAapkaProps {
  lang?: Language;
  onOpenBooking?: (service?: string) => void;
}

export const WhyAapka: React.FC<WhyAapkaProps> = ({ lang = 'en', onOpenBooking }) => {
  const isHi = lang === 'hi';

  const content = {
    title: isHi ? "AAPKA ही क्यों?" : "Why AAPKA?",
    subtitle: isHi 
      ? "स्वास्थ्य सेवा केवल इलाज नहीं, विश्वास और सम्मान का विषय है। जब परिवार को चिकित्सा सहायता की आवश्यकता होती है, तो हम हर कदम पर उनके साथ खड़े रहते हैं।"
      : "Healthcare decisions are deeply personal. When your family faces medical uncertainty, you deserve clear guidance, honest costs, and a trusted hand at every step.",
    cards: [
      {
        icon: Building2,
        title: isHi ? "सत्यापित अस्पताल और डॉक्टर" : "Verified Hospital & Doctor Access",
        tagline: isHi ? "सीधा सही अस्पताल" : "Zero Confusion",
        accent: "text-teal-700 bg-teal-50 border-teal-200/70",
        points: isHi ? [
          "250+ सत्यापित अस्पतालों में रियल-टाइम बेड उपलब्धता",
          "वरिष्ठ सर्जनों और विशेषज्ञ डॉक्टरों से सीधा संपर्क",
          "इमरजेंसी में बिना देरी के त्वरित दाखिला"
        ] : [
          "Real-time bed availability across 250+ network hospitals",
          "Direct referral to vetted surgeons & senior specialists",
          "Zero waitlist delays during emergency admissions"
        ],
        quote: isHi 
          ? "इमरजेंसी में अस्पताल दर अस्पताल भटकने से पूरी मुक्ति।"
          : "No wandering between hospital desks in medical distress."
      },
      {
        icon: HeartHandshake,
        title: isHi ? "समर्पित केयर नेविगेटर" : "Dedicated Care Navigators",
        tagline: isHi ? "अस्पताल में आपका साथी" : "Ground Companionship",
        accent: "text-sky-700 bg-sky-50 border-sky-200/70",
        points: isHi ? [
          "अस्पताल काउंटर पर 1-ऑन-1 व्यक्तिगत मार्गदर्शक साथी",
          "भर्ती, टीपीए बीमा और कागजी औपचारिकताओं का पूरा जिम्मा",
          "15+ शहरों में मरीजों और उनके परिवारों के लिए निरंतर सहायता"
        ] : [
          "1-on-1 personal patient escort at hospital admission desks",
          "Complete paperwork, TPA insurance & triage clearance",
          "Compassionate bedside coordination across 15+ cities"
        ],
        quote: isHi
          ? "अस्पताल की भीड़ में आप कभी अकेले नहीं हैं, हर कदम पर परिवार जैसा साथ।"
          : "You are never left alone in a crowded hospital lobby."
      },
      {
        icon: ShieldCheck,
        title: isHi ? "पारदर्शी दरें एवं योजना लाभ" : "Transparent Tariffs & Scheme Access",
        tagline: isHi ? "जीरो कमीशन, निष्पक्ष बिल" : "Price Protection",
        accent: "text-amber-700 bg-amber-50 border-amber-200/70",
        points: isHi ? [
          "पहले से तय रियायती पैकेज — डिस्चार्ज पर कोई सरप्राइज चार्ज नहीं",
          "आयुष्मान भारत (PM-JAY) कैशलेस क्लेम में शत-प्रतिशत सहायता",
          "बिचौलियों और दलालों के कमीशन पर सख्त पाबंदी"
        ] : [
          "Pre-negotiated surgery packages with written price protection",
          "100% cashless guidance for Ayushman Bharat (PM-JAY)",
          "Strict elimination of tout markups and middleman commissions"
        ],
        quote: isHi
          ? "अस्पताल में केवल उचित शुल्क — बिना किसी छुपे हुए खर्च के।"
          : "Pay only what is right — pre-negotiated before admission."
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
    <section className="py-5 sm:py-6 lg:py-7 bg-transparent border-t border-sky-100/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-4 sm:space-y-5">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-1.5">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.2]">
            {content.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            {content.subtitle}
          </p>
        </div>

        {/* 3 Refined & Elevated Healthcare Cards (Aura Wave & Clinical Lattice Theme) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {content.cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div 
                key={idx}
                className="group relative p-6 sm:p-7 rounded-3xl bg-white/95 backdrop-blur-md border border-sky-100 shadow-[0_4px_24px_-4px_rgba(2,132,199,0.06)] hover:shadow-[0_16px_36px_-6px_rgba(2,132,199,0.14)] hover:border-sky-400/70 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Precision Beveled Aura Top Rim Gradient */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 transition-all" />

                <div className="space-y-5">
                  {/* Icon & Badge Header */}
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-2xs group-hover:scale-105 transition-transform ${card.accent}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold tracking-wide uppercase px-3 py-1 rounded-full bg-sky-50 text-sky-800 border border-sky-200/80">
                      {card.tagline}
                    </span>
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 font-serif leading-snug tracking-tight">
                      {card.title}
                    </h3>
                  </div>

                  {/* Points Checklist with Clean & High-Legibility Typography */}
                  <ul className="space-y-3 pt-2 text-[13.5px] text-slate-700 font-normal leading-relaxed">
                    {card.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                        <span className="break-words">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Patient Assurance Quote */}
                <div className="mt-6 p-4 rounded-2xl bg-sky-50/60 border border-sky-100/90 flex items-start gap-2.5 text-xs text-slate-700 italic leading-relaxed">
                  <Quote className="w-3.5 h-3.5 text-sky-700 shrink-0 mt-0.5 opacity-80" />
                  <span className="leading-relaxed break-words">"{card.quote}"</span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Reassuring Care Desk Strip (Aura Lattice Clean Theme) */}
        <div className="p-7 sm:p-9 rounded-3xl bg-gradient-to-r from-sky-50/90 via-cyan-50/60 to-blue-50/80 border border-sky-200/90 shadow-xs flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600" />
          <div className="space-y-1.5 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-800">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-700" />
              <span>{isHi ? "24/7 क्लिनिकल केयर डेस्क" : "24/7 Clinical Care Desk"}</span>
            </div>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
              {content.calloutTitle}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {content.calloutDesc}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="tel:+918860880044"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 text-white font-semibold text-xs sm:text-sm tracking-tight transition-all shadow-md shadow-sky-600/20"
            >
              <PhoneCall className="w-4 h-4 text-cyan-100" />
              <span>+91 8860880044</span>
            </a>
            {onOpenBooking && (
              <button
                type="button"
                onClick={() => onOpenBooking('hospitalization')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 font-semibold text-xs sm:text-sm tracking-tight transition-colors shadow-2xs cursor-pointer"
              >
                <span>{content.calloutCta2}</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
