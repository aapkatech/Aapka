import React from 'react';
import { Hero } from '../components/Hero';
import { PatientSavings } from '../components/PatientSavings';
import { WhyAapka } from '../components/WhyAapka';
import { WhatsAppContactSection } from '../components/WhatsAppContactSection';
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
      {/* 1. Hero Section (Trusted platform narrative + App download) */}
      <Hero 
        onSearch={() => onOpenBooking('hospitalization')} 
        onOpenBooking={onOpenBooking}
        t={t?.hero}
      />

      {/* 2. Patient Financial Protection: How Much Money Families Have Saved */}
      <PatientSavings onOpenBooking={onOpenBooking} />

      {/* 3. Human Ground Healthcare Guidance: Why AAPKA? */}
      <WhyAapka 
        lang={lang} 
        onOpenBooking={onOpenBooking} 
      />

      {/* 4. Direct WhatsApp Helpline & Support Section (9667033044) */}
      <WhatsAppContactSection />

      {/* 5. Awards & National Recognition (Ceremony photos & Light Modal) */}
      <QuietProof t={t?.proof} />
    </div>
  );
};
