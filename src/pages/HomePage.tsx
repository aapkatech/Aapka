import React from 'react';
import { Hero } from '../components/Hero';
import { ExecutionStrengths } from '../components/ExecutionStrengths';
import { WhyAapka } from '../components/WhyAapka';
import { AapkaWorkflow } from '../components/AapkaWorkflow';
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

      {/* 2. Real Scale Execution Metrics Strip (20+ Active Cities, 240+ Hospitals, etc.) */}
      <ExecutionStrengths />

      {/* 3. Why AAPKA? Human, clear, reassuring healthcare access */}
      <WhyAapka onOpenBooking={onOpenBooking} lang={lang} />

      {/* 4. Proactive Solution: From 'Where Should We Go?' to 'Care Starts Faster' */}
      <AapkaWorkflow />

      {/* 5. Awards & National Recognition (Ceremony photos & Accolades) */}
      <QuietProof t={t?.proof} />
    </div>
  );
};
