import React, { useState } from 'react';
import { 
  PhoneCall, 
  CheckCircle2, 
  Video,
  Info,
  HeartHandshake
} from 'lucide-react';
import { videoTestimonialsData } from './testimonialsData';
import { VideoTestimonialCard } from './VideoTestimonialCard';
import type { Language } from '../../i18n/translations';

interface VideoTestimonialsProps {
  lang?: Language;
  onOpenBooking?: (service?: string) => void;
}

export const VideoTestimonials: React.FC<VideoTestimonialsProps> = ({ 
  lang = 'en',
  onOpenBooking 
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const handlePlayStateChange = (id: string, isPlaying: boolean) => {
    if (isPlaying) {
      setActiveVideoId(id);
    } else if (activeVideoId === id) {
      setActiveVideoId(null);
    }
  };

  const categories = [
    { id: 'all', labelEn: 'All Categories', labelHi: 'सभी श्रेणियां' },
    { id: 'surgery', labelEn: 'Surgery & Eyecare', labelHi: 'सर्जरी एवं नेत्र चिकित्सा' },
    { id: 'maternity', labelEn: 'Maternal Care', labelHi: 'मातृत्व व प्रसव सुरक्षा' },
    { id: 'cardiac', labelEn: 'Cardiac Procedures', labelHi: 'हृदय रोग व प्रक्रियाएं' },
  ];

  const hasTestimonials = videoTestimonialsData.length > 0;
  const filteredTestimonials = activeCategory === 'all'
    ? videoTestimonialsData
    : videoTestimonialsData.filter(item => item.category === activeCategory);

  const heading = lang === 'hi'
    ? 'मरीज अनुभव एवं जमीनी स्वास्थ्य सेवाएं'
    : 'Patient Experiences & Healthcare Navigation';

  const subtitle = lang === 'hi'
    ? 'मरीज और उनके परिवारों की सहमति से रिकॉर्ड किए गए वीडियो अनुभव एवं अस्पताल सहायता रिकॉर्डिंग्स।'
    : 'Video testimonials and care coordination recordings, published with patient consent and clinical review.';

  return (
    <section id="video-testimonials" className="py-20 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-teal-50 text-teal-900 text-xs font-semibold border border-teal-200/60">
              <HeartHandshake className="w-3.5 h-3.5 text-teal-600" />
              <span>{lang === 'hi' ? 'मरीज अनुभव एवं वीडियो अनुभाग' : 'Patient Stories & Media Archive'}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.18]">
              {heading}
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {subtitle}
            </p>
          </div>

          {/* Player Specification Tag */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] text-slate-600 self-start md:self-auto shrink-0">
            <Video className="w-4 h-4 text-teal-600 shrink-0" />
            <span>{lang === 'hi' ? 'सीधा वेब प्लेयर (नो एक्सटर्नल ट्रैकर)' : 'Self-Hosted Native Video • Ad-Free'}</span>
          </div>
        </div>

        {/* Category Filter Pills (Only rendered if testimonials exist) */}
        {hasTestimonials && (
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/80'
                  }`}
                >
                  {lang === 'hi' ? cat.labelHi : cat.labelEn}
                </button>
              );
            })}
          </div>
        )}

        {/* Video Cards Grid OR Clean Empty State */}
        {hasTestimonials && filteredTestimonials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((item) => (
              <VideoTestimonialCard
                key={item.id}
                testimonial={item}
                lang={lang}
                activeVideoId={activeVideoId}
                onPlayStateChange={handlePlayStateChange}
              />
            ))}
          </div>
        ) : (
          /* Clean Empty State */
          <div className="p-10 sm:p-14 rounded-3xl bg-slate-50 border border-slate-200/90 text-center max-w-2xl mx-auto space-y-5">
            <div className="w-14 h-14 rounded-2xl bg-teal-50 border border-teal-200/60 text-teal-700 flex items-center justify-center mx-auto shadow-xs">
              <Video className="w-7 h-7 text-teal-600" />
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                {lang === 'hi' 
                  ? 'सत्यापित वीडियो टेस्टीमोनियल्स जल्द उपलब्ध होंगे' 
                  : 'Approved Patient Testimonials Coming Soon'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-lg mx-auto">
                {lang === 'hi'
                  ? 'मूल वीडियो फाइल्स, मरीज की सूचित सहमति और चिकित्सकीय विवरण AAPKA टीम द्वारा सत्यापित एवं अनुमोदित होने के बाद यहां प्रकाशित किए जाएंगे।'
                  : 'Official video recordings will appear here once original video files, informed consent documentation, and clinical case details are reviewed and approved by the AAPKA team.'}
              </p>
            </div>

            <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-slate-500">
              <Info className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>
                {lang === 'hi'
                  ? 'हम अप्रमाणित या काल्पनिक मरीज मामलों को वास्तविक अनुभव के रूप में प्रस्तुत नहीं करते।'
                  : 'We do not publish placeholder or unverified patient cases as authentic testimonials.'}
              </span>
            </div>

            <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
              {onOpenBooking && (
                <button
                  onClick={() => onOpenBooking('hospitalization')}
                  className="px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-medium transition-colors shadow-xs cursor-pointer flex items-center gap-2"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{lang === 'hi' ? 'अस्पताल सहायता प्राप्त करें' : 'Connect with Care Desk'}</span>
                </button>
              )}
              <a
                href="tel:+919667033044"
                className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 text-xs font-medium border border-slate-200 transition-colors flex items-center gap-2"
              >
                <PhoneCall className="w-3.5 h-3.5 text-teal-600" />
                <span>+91 9667033044</span>
              </a>
            </div>
          </div>
        )}

        {/* Bottom Grassroots Callout Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/90 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
              {lang === 'hi' 
                ? 'क्या आपके परिवार में किसी को सर्जरी या अस्पताल सहायता की आवश्यकता है?' 
                : 'Need Hospitalization or Surgery Assistance for Your Family?'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {lang === 'hi' 
                ? 'हमारे 24x7 केयर डेस्क से तुरंत संपर्क करें या अपने नजदीकी ग्राम मित्र से परामर्श लें।'
                : 'Connect with our 24/7 care coordination desk for hospital guidance, admission support, and verified care pathways.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {onOpenBooking && (
              <button
                onClick={() => onOpenBooking('hospitalization')}
                className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs sm:text-sm font-medium transition-colors shadow-xs cursor-pointer flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>{lang === 'hi' ? 'अस्पताल सहायता बुक करें' : 'Get Care Assistance'}</span>
              </button>
            )}
            <a
              href="tel:+919667033044"
              className="px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 text-xs sm:text-sm font-medium border border-slate-200 transition-colors flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-teal-600" />
              <span>+91 9667033044</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
