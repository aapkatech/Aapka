import React, { useState } from 'react';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  ShieldCheck, 
  Heart
} from 'lucide-react';
import type { Language } from '../data/translations';
import { content } from '../data/translations';

interface TestimonialsProps {
  lang: Language;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ lang }) => {
  const t = content[lang];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevStory = () => {
    setCurrentIndex((prev) => (prev === 0 ? t.testimonials.items.length - 1 : prev - 1));
  };

  const nextStory = () => {
    setCurrentIndex((prev) => (prev === t.testimonials.items.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="stories" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold border border-emerald-300">
              <Heart className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
              <span>{t.testimonials.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              {t.testimonials.title}
            </h2>
            <p className="text-base text-slate-600 font-normal leading-relaxed">
              {t.testimonials.subtitle}
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={prevStory}
              className="w-12 h-12 rounded-2xl bg-white border border-slate-200 hover:border-sky-500 hover:text-sky-600 flex items-center justify-center text-slate-700 shadow-xs hover:shadow-md transition-all active:scale-95"
              aria-label="Previous story"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextStory}
              className="w-12 h-12 rounded-2xl bg-white border border-slate-200 hover:border-sky-500 hover:text-sky-600 flex items-center justify-center text-slate-700 shadow-xs hover:shadow-md transition-all active:scale-95"
              aria-label="Next story"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.testimonials.items.map((item, index) => {
            const isFeatured = index === currentIndex;
            return (
              <div
                key={item.id}
                onClick={() => setCurrentIndex(index)}
                className={`relative rounded-3xl p-7 bg-white border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isFeatured
                    ? 'border-emerald-500 ring-4 ring-emerald-500/10 shadow-xl -translate-y-1'
                    : 'border-slate-200 hover:border-slate-300 hover:shadow-lg'
                }`}
              >
                <div>
                  {/* Top: Location Badge & Stars */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      {item.location}
                    </span>
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                  </div>

                  {/* Savings Tag */}
                  <div className="mb-3">
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-800 text-[11px] font-extrabold border border-emerald-200">
                      {item.saving}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mt-1">
                      {item.treatment}
                    </h3>
                  </div>

                  {/* Quote */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic relative">
                    <Quote className="w-4 h-4 text-slate-300 inline mr-1 -mt-1" />
                    "{item.quote}"
                  </p>
                </div>

                {/* Bottom: Patient Info */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-extrabold text-sm text-slate-900">{item.name}</h4>
                    <p className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" />
                      {lang === 'hi' ? 'सत्यापित मरीज' : 'Verified Patient'}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
