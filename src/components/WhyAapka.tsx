import React from 'react';
import { 
  CheckCircle2, 
  Search, 
  ShieldCheck, 
  CreditCard, 
  HeartHandshake, 
  MapPin, 
  PhoneCall, 
  ArrowRight 
} from 'lucide-react';
import type { Language } from '../i18n/translations';

interface WhyAapkaProps {
  onOpenBooking?: (service?: string) => void;
  lang?: Language;
}

export const WhyAapka: React.FC<WhyAapkaProps> = ({ onOpenBooking, lang = 'en' }) => {
  const isHindi = lang === 'hi';

  const reasons = [
    {
      icon: Search,
      badge: isHindi ? "सटीक जानकारी" : "Zero Guesswork",
      title: isHindi ? "घर से निकलने से पहले पक्की जानकारी" : "Confirmed Beds & Doctors Before You Leave",
      description: isHindi 
        ? "अस्पताल-अस्पताल भटकने की चिंता नहीं। हम पहले ही जांचते हैं कि संबंधित डॉक्टर मौजूद हैं या नहीं और आईसीयू या जनरल बेड तैयार है या नहीं।"
        : "No running in panic between hospital gates. We verify doctor availability, specialist duty, and ICU or general bed readiness before you travel.",
      tagline: isHindi ? "सही अस्पताल, पहली बार में" : "The right hospital on the first attempt"
    },
    {
      icon: CreditCard,
      badge: isHindi ? "पारदर्शी खर्च" : "Clear Pricing",
      title: isHindi ? "साफ और ईमानदार खर्च, बिना किसी छिपे शुल्क के" : "Transparent Costs & Government Scheme Help",
      description: isHindi
        ? "इलाज के खर्च को लेकर कोई असमंजस नहीं। हम आपको पहले ही अनुमानित खर्च समझाते हैं और आयुष्मान भारत (PM-JAY) व इंश्योरेंस में पूरी मदद करते हैं।"
        : "No surprise medical bills or hidden costs. We provide clear estimates beforehand and assist your family with Ayushman Bharat (PM-JAY) and insurance documentation.",
      tagline: isHindi ? "आयुष्मान भारत और इंश्योरेंस सहायता" : "Complete Ayushman & claim paperwork guidance"
    },
    {
      icon: HeartHandshake,
      badge: isHindi ? "साथी सहायता" : "Personal Care",
      title: isHindi ? "अस्पताल में हर कदम पर आपके साथ एक मददगार" : "A Caring Guide Standing With Your Family",
      description: isHindi
        ? "अस्पताल के काउंटर और फॉर्म किसी को भी परेशान कर सकते हैं। हमारे सहायता साथी पर्ची कटाने, डॉक्टरों से मिलने और जांच कराने में साथ खड़े रहते हैं।"
        : "Hospital registration desks and waiting halls can be stressful. Our coordinators assist your family in person from initial OPD registration to discharge.",
      tagline: isHindi ? "आप अस्पताल में अकेले नहीं हैं" : "You are never left alone in a hospital"
    },
    {
      icon: MapPin,
      badge: isHindi ? "विस्तृत नेटवर्क" : "Wide Reach",
      title: isHindi ? "20+ शहरों में 240+ मान्यता प्राप्त अस्पताल" : "Active in 20+ Cities Across 240+ Hospitals",
      description: isHindi
        ? "चाहे सामान्य परामर्श हो या आपातकालीन सर्जरी, हमारा सत्यापित नेटवर्क सुनिश्चित करता है कि आपके परिजनों को समय पर सर्वोत्तम देखभाल मिले।"
        : "From routine diagnostics to specialized surgeries, our verified partner hospital network ensures your family receives timely, dignified clinical care.",
      tagline: isHindi ? "हर परिवार के लिए सुलभ स्वास्थ्य सेवा" : "Dependable care close to your home"
    }
  ];

  return (
    <section id="why-aapka" className="py-8 sm:py-10 lg:py-12 bg-white border-b border-slate-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-6 sm:space-y-8">
        
        {/* Section Heading - Warm, empathetic & human */}
        <div className="max-w-3xl space-y-2">
          <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-950 tracking-[-0.015em] leading-[1.2]">
            {isHindi ? "AAPKA क्यों चुनें?" : "Why Choose AAPKA?"}
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed max-w-2xl">
            {isHindi 
              ? "जब परिवार में कोई बीमार होता है, तो सही इलाज मिलना कोई संघर्ष नहीं होना चाहिए। हम पहली कॉल से लेकर सुरक्षित डिस्चार्ज तक आपके साथ खड़े रहते हैं।"
              : "When a family member falls sick, finding the right doctor or hospital shouldn't feel like a struggle. We take care of every detail so you can focus entirely on getting better."}
          </p>
        </div>

        {/* 4 Core Pillars - Practical, human, relatable cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="relative p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-teal-500/50 hover:bg-white hover:shadow-md hover:shadow-slate-200/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center text-teal-700 shadow-2xs group-hover:bg-teal-700 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-white border border-slate-200/70 text-slate-600">
                      {item.badge}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-serif font-semibold text-slate-900 group-hover:text-slate-950 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="pt-3.5 mt-4 border-t border-slate-200/70 flex items-center gap-1.5 text-xs font-semibold text-teal-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>{item.tagline}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Human Reassurance & Immediate Action Banner */}
        <div className="p-5 sm:p-7 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-teal-950 text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 shadow-lg shadow-slate-900/10">
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex items-center gap-2 text-teal-400 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{isHindi ? "हमेशा आपकी सेवा में" : "Always By Your Side"}</span>
            </div>
            <h3 className="font-serif text-lg sm:text-xl font-semibold text-white">
              {isHindi ? "क्या आपको या आपके परिवार को अस्पताल सहायता की जरूरत है?" : "Need hospital guidance or have a medical question?"}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
              {isHindi 
                ? "हमारी टीम 24/7 आपकी सहायता के लिए तैयार है। सीधे बात करें या तुरंत सहायता बुक करें।"
                : "Our care support team is on duty to assist your family with verified doctor admissions, bed bookings, and inquiries."}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
            {onOpenBooking && (
              <button
                type="button"
                onClick={() => onOpenBooking('hospitalization')}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold text-xs sm:text-sm transition-all shadow-md active:scale-[0.98] cursor-pointer"
              >
                <span>{isHindi ? "सहायता बुक करें" : "Book Care Support"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
            <a
              href="tel:+917458895889"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-medium text-xs sm:text-sm transition-all"
            >
              <PhoneCall className="w-3.5 h-3.5 text-teal-300" />
              <span>+91 74588 95889</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
