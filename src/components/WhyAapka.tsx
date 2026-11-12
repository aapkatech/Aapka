import React from 'react';
import { 
  Building2, 
  HeartHandshake, 
  ShieldCheck, 
  PhoneCall, 
  ArrowRight,
  CheckCircle2,
  Stethoscope,
  Bed,
  UserCheck,
  FileCheck,
  CreditCard,
  TrendingDown,
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
        flow: [
          { label: isHi ? "मरीज की जरूरत" : "Patient Need", icon: Stethoscope },
          { label: isHi ? "लाइव बेड व डॉक्टर" : "Live Bed Match", icon: Bed },
          { label: isHi ? "त्वरित भर्ती" : "Direct Admission", icon: CheckCircle2, highlight: true }
        ],
        points: isHi ? [
          "50+ सत्यापित अस्पतालों में रियल-टाइम बेड उपलब्धता",
          "वरिष्ठ सर्जनों और विशेषज्ञ डॉक्टरों से सीधा संपर्क",
          "इमरजेंसी में बिना देरी के त्वरित दाखिला"
        ] : [
          "Real-time bed availability across 50+ network hospitals",
          "Direct referral to vetted surgeons & senior specialists",
          "Zero waitlist delays during emergency admissions"
        ],
        quote: isHi 
          ? "इमरजेंसी में अस्पताल दर अस्पताल भटकने से पूरी मुक्ति।"
          : "No wandering between hospital desks in medical distress."
      },
      {
        icon: HeartHandshake,
        title: isHi ? "समर्पित ग्राम एवं केयर मित्र" : "Dedicated Care Navigators",
        tagline: isHi ? "अस्पताल में आपका साथी" : "Ground Companionship",
        accent: "text-sky-700 bg-sky-50 border-sky-200/70",
        flow: [
          { label: isHi ? "घर पर संपर्क" : "Doorstep Call", icon: UserCheck },
          { label: isHi ? "अस्पताल में साथ" : "Personal Escort", icon: HeartHandshake },
          { label: isHi ? "सम्मानजनक इलाज" : "Dignified Care", icon: CheckCircle2, highlight: true }
        ],
        points: isHi ? [
          "अस्पताल काउंटर पर 1-ऑन-1 व्यक्तिगत मार्गदर्शक",
          "भर्ती, फाइलिंग और कागजी औपचारिकताओं का पूरा जिम्मा",
          "ग्रामीण परिवारों और बुजुर्गों के लिए सम्मानजनक सेवा"
        ] : [
          "1-on-1 personal patient escort at the hospital desk",
          "Complete admission paperwork, claims & triage handling",
          "Compassionate bedside support for village families"
        ],
        quote: isHi
          ? "अस्पताल की भीड़ में आप अकेले नहीं हैं, परिवार की तरह हर कदम पर साथ।"
          : "You are never left alone in a crowded hospital lobby."
      },
      {
        icon: ShieldCheck,
        title: isHi ? "पारदर्शी दरें एवं योजना लाभ" : "Transparent Tariffs & Scheme Access",
        tagline: isHi ? "जीरो कमीशन, निष्पक्ष बिल" : "Price Protection",
        accent: "text-amber-700 bg-amber-50 border-amber-200/70",
        flow: [
          { label: isHi ? "बिल पूर्व-जांच" : "Pre-Audit Bill", icon: FileCheck },
          { label: isHi ? "आयुष्मान लाभ" : "Ayushman Link", icon: CreditCard },
          { label: isHi ? "35%-50% बचत" : "Zero Hidden Fee", icon: TrendingDown, highlight: true }
        ],
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
    <section className="py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        
        {/* Section Header (HUMAN CARE, HONEST GUIDANCE tag removed per request) */}
        <div className="max-w-3xl space-y-3">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.2]">
            {content.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            {content.subtitle}
          </p>
        </div>

        {/* 3 Crisp, Visual & Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {content.cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div 
                key={idx}
                className="group p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-slate-300 transition-all duration-300 flex flex-col justify-between space-y-5"
              >
                {/* Header & Title */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-11 h-11 rounded-2xl flex items-center justify-center border ${card.accent}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                      {card.tagline}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-serif leading-snug">
                      {card.title}
                    </h3>
                  </div>

                  {/* Visual Pathway Mini Diagram */}
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <div className="flex items-center justify-between gap-1 text-[10px] sm:text-[11px] font-semibold">
                      {card.flow.map((step, sIdx) => {
                        const StepIcon = step.icon;
                        return (
                          <React.Fragment key={sIdx}>
                            <div 
                              className={`flex items-center gap-1 px-2 py-1 rounded-lg border transition-transform group-hover:scale-105 ${
                                step.highlight 
                                  ? 'bg-teal-50 border-teal-300/80 text-teal-900 shadow-2xs font-bold' 
                                  : 'bg-white border-slate-200 text-slate-700 shadow-2xs'
                              }`}
                            >
                              <StepIcon className="w-3 h-3 text-teal-600 shrink-0" />
                              <span className="truncate max-w-[70px] sm:max-w-none">{step.label}</span>
                            </div>
                            {sIdx < card.flow.length - 1 && (
                              <ArrowRight className="w-3 h-3 text-slate-400 shrink-0" />
                            )}
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>

                  {/* Crisp Points List */}
                  <ul className="space-y-2 pt-1 text-xs text-slate-700 font-medium">
                    {card.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Engaging Quote Chip at Bottom */}
                <div className="p-3 rounded-xl bg-slate-50/80 border-l-2 border-teal-600 flex items-start gap-2 text-[11px] text-slate-600 italic">
                  <Quote className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5 opacity-80" />
                  <span>"{card.quote}"</span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Reassuring Care Desk Strip (Human, Glorifying & Editorial Clean Theme) */}
        <div className="p-7 sm:p-9 rounded-3xl bg-gradient-to-r from-teal-50/90 via-emerald-50/60 to-sky-50/80 border border-teal-200/90 shadow-xs flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-800">
              <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
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
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs sm:text-sm tracking-tight transition-colors shadow-xs"
            >
              <PhoneCall className="w-4 h-4 text-teal-200" />
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
