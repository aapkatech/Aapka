import React from 'react';
import { PhoneCall } from 'lucide-react';
import { VideoTestimonials } from '../components/testimonials/VideoTestimonials';
import { PatientTestimonials } from '../components/PatientTestimonials';
import type { Language, Translations } from '../i18n/translations';

interface TestimonialsPageProps {
  lang?: Language;
  t?: Translations;
  onOpenBooking?: (service?: string) => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({
  lang = 'en',
  t,
  onOpenBooking
}) => {
  return (
    <div className="min-h-screen bg-transparent py-4 sm:py-6 space-y-6 sm:space-y-8">
      {/* Editorial Header (Aura Wave & Clinical Lattice Theme) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div className="p-6 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-md border border-sky-100 shadow-xs relative overflow-hidden text-center max-w-4xl mx-auto">
          {/* Precision Beveled Aura Top Rim Gradient */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600" />
          
          <div className="max-w-3xl mx-auto space-y-1.5">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-slate-900 tracking-tight leading-tight">
              {lang === 'hi'
                ? 'परिवार "आपका" को क्यों चुनते हैं?'
                : 'Why Families Choose Aapka'}
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
              {lang === 'hi'
                ? '15+ शहरों और पार्टनर अस्पतालों में ईमानदार दरों और बिना किसी भागदौड़ के उपचार कराने वाले परिवारों के वास्तविक अनुभव।'
                : 'Real patient experiences across 15+ cities and partner hospital networks guided with honest pricing and zero hospital stress.'}
            </p>
          </div>
        </div>
      </div>

      {/* 1. Patient Video Testimonials (Playable Directly on the Website) */}
      <VideoTestimonials
        lang={lang}
        onOpenBooking={onOpenBooking}
      />

      {/* 2. Verified Patient Testimonials Showcase */}
      <PatientTestimonials
        lang={lang}
        t={t?.testimonials}
        onOpenBooking={onOpenBooking}
      />

      {/* Assistance CTA Bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-2">
        <div className="p-6 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-md border border-sky-100 text-slate-900 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xs relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600" />

          <div className="space-y-1.5 max-w-xl">
            <h2 className="text-xl sm:text-2xl font-serif text-slate-900 font-semibold">
              {lang === 'hi' ? 'क्या आपके परिवार को अस्पताल सहायता की आवश्यकता है?' : 'Does Your Family Need Immediate Hospital Support?'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {lang === 'hi'
                ? 'हमारे स्वास्थ्य-मित्र अस्पताल भर्ती, डिस्काउंटेड पैकेज और आयुष्मान भारत सहायता के लिए 24/7 तैयार हैं।'
                : 'Our clinical care coordinators are on standby 24/7 to assist with bed bookings, pre-admission tariff audits, and surgical planning.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => onOpenBooking?.('hospitalization')}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 text-white font-semibold text-xs sm:text-sm tracking-tight transition-all shadow-md shadow-sky-600/20 cursor-pointer"
            >
              {lang === 'hi' ? 'केयर कोऑर्डिनेटर से बात करें' : 'Speak With A Care Coordinator'}
            </button>
            <a
              href="tel:+918860880044"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-50 hover:bg-sky-100 border border-sky-200/80 text-sky-800 font-medium text-xs sm:text-sm transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-sky-700" />
              <span>+91 8860880044</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
