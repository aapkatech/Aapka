import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExecutionStrengths } from './components/ExecutionStrengths';
import { TribalHealthGap } from './components/TribalHealthGap';
import { AapkaWorkflow } from './components/AapkaWorkflow';
import { GramMitraSection } from './components/GramMitraSection';
import { ServicesShowcase } from './components/ServicesShowcase';
import { LeadershipTeam } from './components/LeadershipTeam';
import { QuietProof } from './components/QuietProof';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { translations, type Language } from './i18n/translations';

export function App() {
  const [lang, setLang] = useState<Language>('en');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('hospitalization');
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [privacyTab, setPrivacyTab] = useState<'privacy' | 'terms'>('privacy');

  const t = translations[lang] || translations.en;

  const handleOpenBooking = (service: string = 'hospitalization') => {
    setSelectedService(service);
    setIsBookingOpen(true);
  };

  const handleOpenPrivacy = (tab: 'privacy' | 'terms' = 'privacy') => {
    setPrivacyTab(tab);
    setIsPrivacyOpen(true);
  };

  const handleSearch = (_query: string) => {
    setSelectedService('hospitalization');
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-950 font-sans selection:bg-zinc-900 selection:text-white">
      {/* 1. Floating Minimalist Navigation Bar with Interactive Language Switcher (LOCKED) */}
      <Navbar 
        onOpenPortal={() => handleOpenBooking('consultation')} 
        lang={lang} 
        setLang={setLang}
        t={t.nav}
      />

      <main className="flex-grow">
        {/* 2. Hero Section (LOCKED - Untouched) */}
        <Hero 
          onSearch={handleSearch} 
          onOpenBooking={handleOpenBooking}
          t={t.hero}
        />

        {/* 3. Verified Execution Strengths & Scale Metrics (Page 6 of Deck) */}
        <ExecutionStrengths />

        {/* 4. The Tribal & Rural Healthcare Reality & The Golden Hour Dilemma (Pages 2 & 3 of Deck) */}
        <TribalHealthGap />

        {/* 5. From 'Where Should We Go?' to 'Care Starts Faster' — 5-Step Clinical Workflow (Page 4 of Deck) */}
        <AapkaWorkflow />

        {/* 6. Gram Mitra: Aapka's Strength on the Ground & BLS Training (Pages 5 & 10 of Deck) */}
        <GramMitraSection />

        {/* 7. Comprehensive Clinical Pathways & Sustainable Model (Page 7 of Deck) */}
        <ServicesShowcase 
          onSelectService={handleOpenBooking}
          t={t.services}
        />

        {/* 8. Our Leadership Team — Co-Founders & Pedigree (Page 6 of Deck) */}
        <LeadershipTeam />

        {/* 9. Comprehensive Awards & Recognition (Page 8 of Deck) */}
        <QuietProof t={t.proof} />

        {/* 10. Working Care Coordination & Contact Desk (Item 20) */}
        <ContactSection />
      </main>

      {/* 11. High-End Minimalist Multi-Column Footer with Legal Linkages */}
      <Footer t={t.footer} onOpenPrivacy={handleOpenPrivacy} />

      {/* Modern Clinical Coordination Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={selectedService}
        t={t.booking}
      />

      {/* 19. Privacy & Patient Data Safeguards Modal (DPDP Act 2023) */}
      <PrivacyPolicyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
        initialTab={privacyTab}
      />
    </div>
  );
}

export default App;

