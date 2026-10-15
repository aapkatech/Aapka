import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustPillars } from './components/TrustPillars';
import { ServicesShowcase } from './components/ServicesShowcase';
import { GlobalNetwork } from './components/GlobalNetwork';
import { QuietProof } from './components/QuietProof';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

export function App() {
  const [lang, setLang] = useState<'en' | 'global'>('en');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('hospitalization');

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
      {/* 1. Floating Minimalist Navigation Bar */}
      <Navbar 
        onOpenPortal={() => handleOpenBooking('consultation')} 
        lang={lang} 
        setLang={setLang} 
      />

      <main className="flex-grow">
        {/* 2. Hero Section: Direct, Breathable, Immense Whitespace */}
        <Hero 
          onSearch={handleSearch} 
          onOpenBooking={handleOpenBooking} 
        />

        {/* 3. The Three Trust Pillars: Massive Padding & Subtle Borders */}
        <TrustPillars />

        {/* 4. Core Services Showcase: Minimalist Grid & One-Sentence Descriptions */}
        <ServicesShowcase 
          onSelectService={handleOpenBooking} 
        />

        {/* 5. Global Healthcare Network: 46+ Verified Hospitals */}
        <GlobalNetwork 
          onOpenBooking={() => handleOpenBooking('hospitalization')} 
        />

        {/* 6. Global Impact & Quiet Proof Section: Understated Numbers & Accolades */}
        <QuietProof />
      </main>

      {/* 7. High-End Minimalist Multi-Column Footer */}
      <Footer />

      {/* Modern Clinical Coordination Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={selectedService}
      />
    </div>
  );
}

export default App;
