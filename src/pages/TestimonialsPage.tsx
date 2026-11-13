import React from 'react';
import { ShieldCheck, PhoneCall } from 'lucide-react';
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
    <div className="min-h-screen bg-white">
      {/* Editorial Header */}
      <section className="pt-16 sm:pt-20 pb-12 sm:pb-16 bg-gradient-to-b from-slate-50 via-white to-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold tracking-wide uppercase mb-5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>{lang === 'hi' ? 'AAPKA ही क्यों?' : 'Why Aapka — Verified Patient Stories'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-normal text-slate-950 tracking-tight leading-tight">
            {lang === 'hi'
              ? 'परिवार "आपका" को क्यों चुनते हैं?'
              : 'Why Families Choose Aapka'}
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto">
            {lang === 'hi'
              ? 'दिल्ली एनसीआर और पार्टनर अस्पतालों में ईमानदार दरों और बिना किसी भागदौड़ के उपचार कराने वाले परिवारों के वास्तविक अनुभव।'
              : 'Real patient experiences across Delhi NCR and partner hospital networks guided with honest pricing and zero hospital stress.'}
          </p>
        </div>
      </section>

      {/* Verified Patient Testimonials Showcase */}
      <PatientTestimonials
        lang={lang}
        t={t?.testimonials}
        onOpenBooking={onOpenBooking}
      />

      {/* Assistance CTA Bar */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 font-normal">
            {lang === 'hi' ? 'क्या आपके परिवार को अस्पताल सहायता की आवश्यकता है?' : 'Does Your Family Need Immediate Hospital Support?'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            {lang === 'hi'
              ? 'हमारे स्वास्थ्य-मित्र अस्पताल भर्ती, डिस्काउंटेड पैकेज और आयुष्मान भारत सहायता के लिए 24/7 तैयार हैं।'
              : 'Our clinical care coordinators are on standby 24/7 to assist with bed bookings, pre-admission tariff audits, and surgical planning.'}
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => onOpenBooking?.('hospitalization')}
              className="px-6 py-3 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-semibold text-sm transition-colors cursor-pointer shadow-xs"
            >
              {lang === 'hi' ? 'केयर कोऑर्डिनेटर से बात करें' : 'Speak With A Care Coordinator'}
            </button>
            <a
              href="tel:+918860880044"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-900 font-semibold text-sm transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-teal-700" />
              <span>+91 8860880044</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
