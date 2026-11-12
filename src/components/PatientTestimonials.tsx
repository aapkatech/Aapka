import React from 'react';
import { Star, ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react';
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
  // Fallback items based on verified source screenshot if t is not fully passed
  const items = t?.items || [
    {
      id: "amarpal-singh",
      name: lang === 'hi' ? "श्री अमरपाल सिंह" : "Mr. AmarPal Singh",
      location: lang === 'hi' ? "ग्राम खेड़ा, गौतम बुद्ध नगर" : "Village Kheda Gautam Budh Nagar",
      rating: 5,
      treatment: lang === 'hi' ? "ट्यूमर ऑपरेशन एवं अस्पताल मार्गदर्शन" : "Tumor Operation & Hospital Guidance",
      story: lang === 'hi'
        ? "मेरे सिर में ट्यूमर था, सरकारी अस्पताल में ऑपरेशन के लिए 3 साल बाद की तारीख मिली थी, जबकि मेरा ट्यूमर 3 महीने में फटने की कगार पर था। प्राइवेट अस्पताल बहुत महंगे थे। स्मार्टग्राम (आपका) ने मेरी क्षमता के अनुसार एक बेहतरीन अस्पताल खोजने में पूरी मदद की.."
        : "I was having a tumor in my head, I got appointment for a date after 3 years in govt hospitals for my operation, while my tumor was ready to burst in 3 months. Private Hospitals were very expensive. SmartGram helped me to check a good hospital at a price I could afford..",
      image: "/testimonials/amarpal-singh.webp",
      initials: "AS",
      mitraHelp: lang === 'hi' ? "अस्पताल मार्गदर्शन एवं सही खर्च पर समन्वय" : "Hospital Guidance & Surgical Rate Audit"
    },
    {
      id: "kumar-madhur",
      name: lang === 'hi' ? "श्री कुमार मधुर" : "Mr Kumar Madhur",
      location: lang === 'hi' ? "राज नगर एक्सटेंशन, गाजियाबाद" : "Raj Nagar Extension Ghaziabad",
      rating: 5,
      treatment: lang === 'hi' ? "विशेषज्ञ परामर्श एवं उपचार व्यवस्था" : "Specialist Consultation & Procedure Coordination",
      story: lang === 'hi'
        ? "मुझे समझ नहीं आ रहा था कि हेयर ट्रांसप्लांट के लिए कहाँ जाऊँ। मैंने स्मार्टग्राम टीम से संपर्क किया और उन्होंने 3 जगहों पर अपॉइंटमेंट तय किए। उन्होंने हमें ट्रांसपोर्ट दिया और उनके 'स्वास्थ्य मित्र' ने पूरी प्रक्रिया में मदद की और डिस्काउंटेड दर पर काम कराया। मैं उनकी सेवाओं से बेहद संतुष्ट हूँ और सबको सुझाव देता हूँ।"
        : "I didn’t know where to go for my Hair transplant. I contacted SmartGram people and they fixed my appointment at 3 places. They provided us transport and their “Swastha Mitra” helped us in the entire procedure and they get it done at a discounted price. I am extremely satisfied with their services and recommend them to everyone.",
      initials: "KM",
      mitraHelp: lang === 'hi' ? "मल्टी-सेंटर परामर्श एवं आवागमन सुविधा" : "Multi-Center Consultation & Transport Support"
    },
    {
      id: "anupam",
      name: lang === 'hi' ? "सुश्री अनुपम" : "Ms Anupam",
      location: lang === 'hi' ? "ग्राम छपरौला, गाजियाबाद" : "Village Chhapraula Ghaziabad",
      rating: 5,
      treatment: lang === 'hi' ? "किडनी स्टोन सर्जरी व कागजी कार्रवाई" : "Kidney Stone Surgery & Paperwork Clearance",
      story: lang === 'hi'
        ? "किडनी स्टोन के ऑपरेशन के लिए हमने गाँव के डॉक्टर से संपर्क किया था, पर वे ऑपरेशन नहीं कर सके। हमें शहर के अस्पतालों और कागजी कार्रवाई की कोई जानकारी नहीं थी। स्मार्टग्राम वाले भैया (स्वास्थ्य मित्र) ने अपॉइंटमेंट, कागजी कार्रवाई और सर्जरी प्रक्रिया में हर कदम पर मदद की। मैं दिल से आभारी हूँ।"
        : "For my Kidney stone operation, I consulted local doctor in our village. But he was not able to operate it. We didn’t knew about many hospitals in city and didn’t know how to deal with the paperwork in hospital. SmartGram waale bhaiya (Swastha Mitra) helped for for appointment , paperwork and surgery procedure. I am very thankful for them.",
      image: "/testimonials/anupam.webp",
      initials: "A",
      mitraHelp: lang === 'hi' ? "कागजी कार्रवाई एवं सर्जरी प्रक्रिया सहायता" : "Paperwork Clearance & Surgery Procedure Support"
    }
  ];

  const sectionTag = t?.tag || (lang === 'hi' ? 'सत्यापित मरीज अनुभव' : 'Verified Patient Experiences');
  const sectionTitle = t?.title || (lang === 'hi' ? 'उपचार और आर्थिक सुरक्षा की सच्ची कहानियां' : 'Real Stories of Healing and Financial Protection');
  const sectionSubtitle = t?.subtitle || (lang === 'hi' 
    ? 'उत्तर प्रदेश और एनसीआर के परिवारों के वास्तविक अनुभव, जिन्हें आपका और हमारे स्वास्थ्य मित्रों ने सही समय और सही खर्च पर उपचार दिलाया।'
    : 'Authentic accounts from patients and families guided through complex treatments with verified hospitals by Aapka and our dedicated Swasthya Mitras.');

  return (
    <section id="testimonials" className="py-20 sm:py-24 bg-gradient-to-b from-slate-50/70 via-white to-slate-50/40 border-b border-zinc-100 relative overflow-hidden">
      {/* Subtle Dot Grid Background as seen in the original brand showcase */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(circle, #0f172a 1.2px, transparent 1.2px)',
          backgroundSize: '24px 24px'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-semibold tracking-wide uppercase mb-4">
            <HeartHandshake className="w-3.5 h-3.5 text-teal-700" />
            <span>{sectionTag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-slate-950 tracking-tight leading-tight">
            {sectionTitle}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            {sectionSubtitle}
          </p>
        </div>

        {/* 3 Testimonials Cards Grid */}
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

              {/* Patient Footer Information */}
              <div className="pt-5 border-t border-slate-100 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3.5 min-w-0">
                  {/* Avatar / Photo */}
                  <div className="relative shrink-0">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                        className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-xs ring-1 ring-slate-200"
                        onError={(e) => {
                          // Graceful fallback to initials monogram if image cannot load
                          const target = e.currentTarget;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement | null;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 text-white font-bold text-sm items-center justify-center border-2 border-white shadow-xs ring-1 ring-slate-200 ${
                        item.image ? 'hidden' : 'flex'
                      }`}
                      aria-hidden="true"
                    >
                      {item.initials}
                    </div>
                  </div>

                  {/* Name and Location in warm terracotta/orange */}
                  <div className="min-w-0">
                    <h3 className="text-sm sm:text-[15px] font-bold text-slate-950 truncate tracking-tight">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-[13px] font-medium text-orange-600 truncate mt-0.5">
                      {item.location}
                    </p>
                  </div>
                </div>

                {/* Small Verified Indicator */}
                <div 
                  className="shrink-0 p-1 rounded-full bg-emerald-50 text-emerald-700" 
                  title={lang === 'hi' ? "सत्यापित मरीज अनुभव" : "Verified Patient Record"}
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
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
