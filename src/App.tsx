import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ScrollToTop } from './components/ScrollToTop';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { NetworkPage } from './pages/NetworkPage';
import { FoundersPage } from './pages/FoundersPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
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

  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-950 font-sans selection:bg-zinc-900 selection:text-white">
      {/* Scroll to top automatically on route changes */}
      <ScrollToTop />

      {/* 1. Global Navigation Bar with Multi-Page Links & Language Switcher (LOCKED STYLING) */}
      <Navbar 
        onOpenPortal={() => handleOpenBooking('consultation')} 
        lang={lang} 
        setLang={setLang}
        t={t.nav}
      />

      {/* Main Multi-Page Routed Content */}
      <main className="flex-grow">
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                onOpenBooking={handleOpenBooking} 
                t={{ hero: t.hero, proof: t.proof }} 
              />
            } 
          />
          <Route 
            path="/services" 
            element={
              <ServicesPage 
                onSelectService={handleOpenBooking} 
                t={t.services} 
              />
            } 
          />
          <Route 
            path="/network" 
            element={
              <NetworkPage 
                onOpenBooking={() => handleOpenBooking('hospitalization')} 
                t={t.network} 
              />
            } 
          />
          <Route 
            path="/founders" 
            element={<FoundersPage />} 
          />
          <Route 
            path="/about" 
            element={<AboutPage />} 
          />
          <Route 
            path="/contact" 
            element={<ContactPage />} 
          />
          <Route 
            path="*" 
            element={<NotFoundPage />} 
          />
        </Routes>
      </main>

      {/* High-End Minimalist Multi-Column Footer with Deep Linkages */}
      <Footer t={t.footer} onOpenPrivacy={handleOpenPrivacy} />

      {/* Modern Clinical Coordination Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={selectedService}
        t={t.booking}
      />

      {/* Privacy & Patient Data Safeguards Modal (DPDP Act 2023) */}
      <PrivacyPolicyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
        initialTab={privacyTab}
      />
    </div>
  );
}

export default App;
