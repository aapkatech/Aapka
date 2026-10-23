import React, { useState } from 'react';
import { 
  ShieldCheck, 
  PhoneCall, 
  CheckCircle2, 
  Sparkles,
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
    { id: 'all', labelEn: 'All Ground Stories', labelHi: 'सभी सच्ची कहानियां' },
    { id: 'surgery', labelEn: 'Surgery & Eyecare', labelHi: 'सर्जरी एवं नेत्र चिकित्सा' },
    { id: 'maternity', labelEn: 'Emergency Maternity', labelHi: 'मातृत्व व प्रसव सुरक्षा' },
    { id: 'cardiac', labelEn: 'Cardiac Procedures', labelHi: 'हृदय रोग व स्टेंटिंग' },
  ];

  const filteredTestimonials = activeCategory === 'all'
    ? videoTestimonialsData
    : videoTestimonialsData.filter(item => item.category === activeCategory);

  const heading = lang === 'hi'
    ? 'भारत की सच्ची आवाज़ें: ज़मीन पर स्वास्थ्य बदलाव'
    : 'Real Voices from Bharat: How Aapka Delivers Care on Ground';

  const subtitle = lang === 'hi'
    ? 'देखिये कैसे हमारे ग्राम मित्रों और अनुबंधित अस्पतालों ने दूर-दराज के गांवों में आपातकालीन सर्जरी, आयुष्मान भारत और भारी खर्चों से परिवारों को बचाया।'
    : 'Directly recorded ground testimonials of patient families escorted through emergency hospitalization, surgical subsidies, and government scheme navigation without predatory middlemen.';

  return (
    <section id="video-testimonials" className="py-20 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-teal-50 text-teal-900 text-xs font-semibold border border-teal-200/60">
              <HeartHandshake className="w-3.5 h-3.5 text-teal-600" />
              <span>{lang === 'hi' ? 'सत्यापित वीडियो केस रिकॉर्डिंग्स' : 'Verified Video Testimonials'}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.18]">
              {heading}
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {subtitle}
            </p>
          </div>

          {/* Privacy & Direct Hosting Trust Tag */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] text-slate-600 self-start md:self-auto shrink-0">
            <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
            <span>{lang === 'hi' ? 'सीधा सुरक्षित वीडियो (नो थर्ड-पार्टी ऐड्स)' : 'Directly Hosted • Zero Ads • Privacy Assured'}</span>
          </div>
        </div>

        {/* Category Filter Pills */}
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

        {/* Video Cards Grid */}
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

        {/* Bottom Grassroots Callout Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/90 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-teal-700">
              <Sparkles className="w-4 h-4 text-teal-600" />
              <span>{lang === 'hi' ? 'क्या आपके परिवार में किसी को सर्जरी या इलाज की जरूरत है?' : 'Need surgery assistance or emergency hospital bed?'}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
              {lang === 'hi' ? 'हर मरीज का हक है निष्पक्ष और गरिमापूर्ण इलाज' : 'Transparent Pricing, Escorted Hospitalization & Zero Middlemen'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {lang === 'hi' 
                ? 'हमारे 24x7 केयर डेस्क से तुरंत संपर्क करें या अपने नजदीकी ग्राम मित्र से परामर्श लें।'
                : 'Connect with our 24/7 care coordination desk for pre-negotiated package discounts and on-ground escort.'}
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
