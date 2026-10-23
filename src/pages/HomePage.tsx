import React from 'react';
import { Hero } from '../components/Hero';
import { ExecutionStrengths } from '../components/ExecutionStrengths';
import { WhyAapka } from '../components/WhyAapka';
import { VideoTestimonials } from '../components/testimonials/VideoTestimonials';
import { QuietProof } from '../components/QuietProof';
import type { Language, Translations } from '../i18n/translations';

interface HomePageProps {
  onOpenBooking: (service?: string) => void;
  lang?: Language;
  t?: {
    hero?: Translations['hero'];
    proof?: Translations['proof'];
  };
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenBooking, lang = 'en', t }) => {
  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <Hero 
        onSearch={() => onOpenBooking('hospitalization')} 
        onOpenBooking={onOpenBooking}
        t={t?.hero}
      />

      {/* 2. Real Scale Execution Metrics Strip */}
      <ExecutionStrengths />

      {/* 3. Human Ground Healthcare Guidance: Why AAPKA? */}
      <WhyAapka 
        lang={lang} 
        onOpenBooking={onOpenBooking} 
      />

      {/* 4. Directly Hosted Video Testimonials (Native HTML5) */}
      <VideoTestimonials 
        lang={lang} 
        onOpenBooking={onOpenBooking} 
      />

      {/* 5. Awards & National Recognition (Ceremony photos & Light Modal) */}
      <QuietProof t={t?.proof} />
    </div>
  );
};
