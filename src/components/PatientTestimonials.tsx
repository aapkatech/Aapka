import React from 'react';
import { Star, ShieldCheck, CheckCircle2 } from 'lucide-react';
import type { Language, Translations } from '../i18n/translations';

interface PatientTestimonialsProps {
  lang?: Language;
  t?: Translations['testimonials'];
  onOpenBooking?: (service?: string) => void;
}

export const PatientTestimonials: React.FC<PatientTestimonialsProps> = ({
  lang = 'en',
  t,
  onOpenBooking
}) => {
  // Fallback 6 verified patient cases across Delhi NCR & North India
  const items = t?.items || [
    {
      id: "amarpal-singh",
      name: lang === 'hi' ? "श्री अमरपाल सिंह" : "Mr. AmarPal Singh",
      location: lang === 'hi' ? "गौतम बुद्ध नगर, दिल्ली एनसीआर" : "Gautam Budh Nagar, Delhi NCR",
      rating: 5,
      treatment: lang === 'hi' ? "ट्यूमर ऑपरेशन एवं अस्पताल मार्गदर्शन" : "Tumor Operation & Hospital Guidance",
      story: lang === 'hi'
        ? "मेरे सिर में गंभीर ट्यूमर था, सरकारी अस्पताल में ऑपरेशन के लिए 3 साल बाद की तारीख मिली थी जबकि डॉक्टरों ने तुरंत ऑपरेशन की चेतावनी दी थी। प्राइवेट अस्पताल हमारी क्षमता से बाहर थे। 'आपका' टीम ने तुरंत हस्तक्षेप किया, हमें उचित पैकेज दरों पर मान्यता प्राप्त अस्पताल से जोड़ा और कुछ ही दिनों में सब व्यवस्थित कराया। उन्होंने हमारे परिवार को बचाया।"
        : "I was diagnosed with a critical head tumor and given an operation date 3 years away at government hospitals, while doctors warned it needed surgery within months. Private hospitals were completely unaffordable. The Aapka team intervened immediately, guided us to an accredited partner hospital with transparent package pricing, and had everything scheduled in days. They saved our family from financial ruin.",
      initials: "AS",
      mitraHelp: lang === 'hi' ? "अस्पताल मार्गदर्शन एवं सही खर्च पर समन्वय" : "Hospital Guidance & Surgical Rate Audit"
    },
    {
      id: "kumar-madhur",
      name: lang === 'hi' ? "श्री कुमार मधुर" : "Mr Kumar Madhur",
      location: lang === 'hi' ? "राज नगर एक्सटेंशन, गाजियाबाद" : "Raj Nagar Extension, Ghaziabad",
      rating: 5,
      treatment: lang === 'hi' ? "विशेषज्ञ परामर्श एवं उपचार व्यवस्था" : "Specialist Consultation & Procedure Coordination",
      story: lang === 'hi'
        ? "मुझे समझ नहीं आ रहा था कि सही विशेषज्ञ के लिए कहाँ जाऊँ। मैंने 'आपका' टीम से संपर्क किया और उन्होंने 3 प्रमुख केंद्रों पर अपॉइंटमेंट तय किए, स्थानीय आवागमन में मदद की और उनके केयर समन्वयक ने अस्पताल में डिस्काउंटेड दरों पर पूरी सहायता कराई। अत्यंत पारदर्शी और भरोसेमंद सेवा।"
        : "I was confused about finding a trustworthy specialist for my procedure. I contacted Aapka, and their team scheduled consultations across 3 top clinics, coordinated our local transport, and had a dedicated care coordinator assist us through the entire admission at institutional discounted rates. Highly recommended for their transparency.",
      initials: "KM",
      mitraHelp: lang === 'hi' ? "मल्टी-सेंटर परामर्श एवं आवागमन सुविधा" : "Multi-Center Consultation & Transport Support"
    },
    {
      id: "anupam",
      name: lang === 'hi' ? "सुश्री अनुपम" : "Ms Anupam",
      location: lang === 'hi' ? "छपरौला, ग्रेटर नोएडा" : "Chhapraula, Greater Noida",
      rating: 5,
      treatment: lang === 'hi' ? "किडनी स्टोन सर्जरी व कागजी कार्रवाई" : "Kidney Stone Surgery & Paperwork Clearance",
      story: lang === 'hi'
        ? "किडनी स्टोन के आपातकालीन ऑपरेशन के लिए हमें शहर के अस्पतालों और कागजी कार्रवाई की कोई जानकारी नहीं थी। 'आपका' केयर समन्वयक ने व्यक्तिगत रूप से अस्पताल पहुंचकर अपॉइंटमेंट, प्री-ऑथराइजेशन और डिस्चार्ज की कागजी कार्रवाई पूरी कराई। संकट के समय साथ खड़े होने के लिए दिल से आभारी हूँ।"
        : "When I needed urgent kidney stone surgery, our local clinic couldn't handle it, and we had no experience dealing with city hospital paperwork. Aapka's care coordinator personally managed our doctor appointment, pre-admission authorization, and discharge procedure. Having that on-ground companion made all the difference.",
      initials: "A",
      mitraHelp: lang === 'hi' ? "कागजी कार्रवाई एवं सर्जरी प्रक्रिया सहायता" : "Paperwork Clearance & Surgery Procedure Support"
    },
    {
      id: "rajesh-verma",
      name: lang === 'hi' ? "राजेश वर्मा" : "Rajesh Verma",
      location: lang === 'hi' ? "सेक्टर 62, नोएडा" : "Sector 62, Noida",
      rating: 5,
      treatment: lang === 'hi' ? "आपातकालीन पित्त की थैली सर्जरी व बिल ऑडिट" : "Emergency Gallbladder Surgery & Tariff Audit",
      story: lang === 'hi'
        ? "रात को आपातकालीन स्थिति में अस्पताल के प्रारंभिक बिल में कई अप्रत्याशित और छुपे हुए शुल्क जोड़ दिए गए थे। 'आपका' ने तुरंत बिल की जांच की, तय पैकेज दरें लागू कराईं और डिस्चार्ज से पहले हमारे ₹65,000 बचाए। वास्तव में मरीज-हितैषी सेवा।"
        : "During an emergency hospital admission for acute gallbladder issues, the initial hospital desk estimate was inflated with unexpected line items. Aapka audited the billing on the spot, verified standard package tariffs, and saved our family over ₹65,000 before discharge. Truly patient-first care.",
      initials: "RV",
      mitraHelp: lang === 'hi' ? "बिल पूर्व-जांच एवं दर सुरक्षा" : "Pre-Admission Tariff Audit & Price Protection"
    },
    {
      id: "meenakshi-sharma",
      name: lang === 'hi' ? "मीनाक्षी शर्मा" : "Meenakshi Sharma",
      location: lang === 'hi' ? "इंदिरापुरम, गाजियाबाद" : "Indirapuram, Ghaziabad",
      rating: 5,
      treatment: lang === 'hi' ? "प्रसूति देखभाल एवं कैशलेस इंश्योरेंस सहायता" : "Maternity Care & Cashless Claim Navigation",
      story: lang === 'hi'
        ? "डिलीवरी के समय अस्पताल भर्ती और बीमा क्लेम की भागदौड़ बहुत तनावपूर्ण होती है। 'आपका' केयर समन्वयक अस्पताल काउंटर पर मौजूद रहे, कैशलेस क्लेम बिना किसी देरी के पास कराया और कोई छुपा हुआ चार्ज नहीं लगने दिया। 24/7 तत्परता ने बड़ा संबल दिया।"
        : "Handling hospital admissions and insurance paperwork during medical distress is overwhelming. Aapka’s care coordinator was physically present at the admission desk, cleared our cashless claim without delay, and ensured zero hidden fees. Their 24/7 responsiveness gave us tremendous peace of mind.",
      initials: "MS",
      mitraHelp: lang === 'hi' ? "अस्पताल ऑन-साइट सहायता एवं क्लेम समन्वय" : "On-Site Admission Escort & Insurance Clearance"
    },
    {
      id: "sk-gupta",
      name: lang === 'hi' ? "डॉ. एस. के. गुप्ता" : "Dr. S. K. Gupta",
      location: lang === 'hi' ? "मेरठ शहर, एनसीआर" : "Meerut City, NCR Hub",
      rating: 5,
      treatment: lang === 'hi' ? "वरिष्ठ हृदय रोग व आपातकालीन आईसीयू बेड" : "Senior Cardiac Care & Emergency ICU Staging",
      story: lang === 'hi'
        ? "जब मेरे चाचा को तीव्र हृदय घात हुआ, तो शहर में तुरंत कैथ लैब वाला आईसीयू बेड पाना असंभव लग रहा था। 'आपका' ने हमारे अस्पताल पहुंचने से पहले ही बेड और मेडिकल टीम तैयार करा दी। त्वरित, पारदर्शी और बेहद पेशेवर मेडिकल समन्वय।"
        : "When my uncle suffered an acute cardiac episode, securing an emergency ICU bed with an active cath lab seemed impossible. Aapka coordinated bed staging before our ambulance even arrived at the emergency bay. Fast, transparent, and medically coordinated with immense professionalism.",
      initials: "SG",
      mitraHelp: lang === 'hi' ? "आपातकालीन आईसीयू व्यवस्था एवं ट्रॉमा ट्रांसफर" : "Emergency ICU Staging & Trauma Transfer"
    }
  ];

  const sectionTitle = t?.title || (lang === 'hi' ? 'उपचार और आर्थिक सुरक्षा की सच्ची कहानियां' : 'Real Stories of Healing and Financial Protection');
  const sectionSubtitle = t?.subtitle || (lang === 'hi' 
    ? '25+ शहरों में आपका केयर समन्वयकों द्वारा सही समय और पारदर्शी खर्च पर उपचार कराने वाले परिवारों के वास्तविक अनुभव।'
    : 'Authentic accounts from patients and families guided through complex treatments with verified hospitals by Aapka across 25+ cities.');

  return (
    <section id="testimonials" className="py-20 sm:py-24 bg-gradient-to-b from-slate-50/70 via-white to-slate-50/40 border-b border-zinc-100 relative overflow-hidden">
      {/* Subtle Dot Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(circle, #0f172a 1.2px, transparent 1.2px)',
          backgroundSize: '24px 24px'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header (2nd SS Tag removed per request) */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-slate-950 tracking-tight leading-tight">
            {sectionTitle}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            {sectionSubtitle}
          </p>
        </div>

        {/* 6 Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {items.map((item) => (
            <article
              key={item.id}
              className="group bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.05)] hover:shadow-[0_12px_28px_-6px_rgba(15,23,42,0.1)] hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 5 Gold Stars Rating */}
                <div className="flex items-center gap-1 mb-5" aria-label={`Rating: ${item.rating} out of 5 stars`}>
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400 shrink-0"
                    />
                  ))}
                  <span className="ml-2 text-xs font-semibold text-slate-400">5.0</span>
                </div>

                {/* Patient Quote */}
                <p className="text-sm sm:text-[14.5px] text-slate-700 leading-relaxed font-normal mb-6 sm:mb-8 text-pretty">
                  "{item.story}"
                </p>
              </div>

              {/* Patient Footer Information (No Photos, Just Clean Name, Location & Verified Badge) */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="text-sm sm:text-[15px] font-bold text-slate-950 truncate tracking-tight">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-[13px] font-medium text-orange-600 truncate mt-0.5">
                    {item.location}
                  </p>
                </div>

                {/* Verified Indicator Badge */}
                <div 
                  className="shrink-0 flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-semibold border border-emerald-200/80" 
                  title={lang === 'hi' ? "सत्यापित मरीज अनुभव" : "Verified Patient Record"}
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{lang === 'hi' ? 'सत्यापित' : 'Verified'}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Reassurance Banner */}
        <div className="mt-12 sm:mt-14 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700">
            <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
            <span>
              {lang === 'hi'
                ? 'सभी प्रशंसापत्र 25+ शहरों के वास्तविक मरीजों और उनके परिजनों की लिखित सहमति के बाद प्रकाशित किए गए हैं।'
                : 'All patient stories represent actual clinical interventions guided by Aapka care navigators across 25+ cities with patient consent.'}
            </span>
          </div>

          {onOpenBooking && (
            <button
              type="button"
              onClick={() => onOpenBooking('hospitalization')}
              className="shrink-0 inline-flex items-center justify-center px-4 py-2 rounded-xl text-xs font-semibold text-slate-900 bg-slate-100 hover:bg-teal-600 hover:text-white transition-colors cursor-pointer"
            >
              {lang === 'hi' ? 'स्वास्थ्य सहायता प्राप्त करें' : 'Get Care Assistance →'}
            </button>
          )}
        </div>

      </div>
    </section>
  );
};

        {/* Bottom Reassurance Banner */}
        <div className="mt-12 sm:mt-14 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700">
            <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
            <span>
              {lang === 'hi'
                ? 'सभी प्रशंसापत्र वास्तविक मरीजों और उनके परिजनों की लिखित सहमति के बाद प्रकाशित किए गए हैं।'
                : 'All patient stories represent actual clinical interventions guided by Aapka care navigators with patient consent.'}
            </span>
          </div>

          {onOpenBooking && (
            <button
              type="button"
              onClick={() => onOpenBooking('hospitalization')}
              className="shrink-0 inline-flex items-center justify-center px-4 py-2 rounded-xl text-xs font-semibold text-slate-900 bg-slate-100 hover:bg-teal-600 hover:text-white transition-colors cursor-pointer"
            >
              {lang === 'hi' ? 'स्वास्थ्य सहायता प्राप्त करें' : 'Get Care Assistance →'}
            </button>
          )}
        </div>

      </div>
    </section>
  );
};
