import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustPillars } from './components/TrustPillars';
import { ServicesShowcase } from './components/ServicesShowcase';
import { GlobalNetwork } from './components/GlobalNetwork';
import { QuietProof } from './components/QuietProof';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { translations, type Language } from './i18n/translations';

export function App() {
  const [lang, setLang] = useState<Language>('en');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('hospitalization');

  const t = translations[lang] || translations.en;

  const handleOpenBooking = (service: string = 'hospitalization') => {
    setSelectedService(service);
    setIsBookingOpen(true);
  };

  const handleSearch = (_query: string) => {
    setSelectedService('hospitalization');
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-950 font-sans selection:bg-zinc-900 selection:text-white">
      {/* 1. Floating Minimalist Navigation Bar with Interactive Language Switcher */}
      <Navbar 
        onOpenPortal={() => handleOpenBooking('consultation')} 
        lang={lang} 
        setLang={setLang}
        t={t.nav}
      />

      <main className="flex-grow">
        {/* 2. Hero Section: Direct, Breathable, Immense Whitespace & Visual Fusion */}
        <Hero 
          onSearch={handleSearch} 
          onOpenBooking={handleOpenBooking}
          t={t.hero}
        />

        {/* 3. The Three Trust Pillars: Massive Padding & Subtle Borders */}
        <TrustPillars t={t.pillars} />

        {/* 4. Core Services Showcase: Minimalist Grid & One-Sentence Descriptions */}
        <ServicesShowcase 
          onSelectService={handleOpenBooking}
          t={t.services}
        />

        {/* 5. Global Healthcare Network: 46+ Verified Hospitals */}
        <GlobalNetwork 
          onOpenBooking={() => handleOpenBooking('hospitalization')}
          t={t.network}
        />

        {/* 6. Global Impact & Quiet Proof Section: Understated Numbers & Accolades */}
        <QuietProof t={t.proof} />
      </main>

      {/* 7. High-End Minimalist Multi-Column Footer */}
      <Footer t={t.footer} />

      {/* Modern Clinical Coordination Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={selectedService}
        t={t.booking}
      />
    </div>
  );
}

export default App;
