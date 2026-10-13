import React, { useState } from 'react';
import type { Language } from './data/translations';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ImpactRibbon } from './components/ImpactRibbon';
import { ServicesGrid } from './components/ServicesGrid';
import { SavingsCalculator } from './components/SavingsCalculator';
import { GramMitraSection } from './components/GramMitraSection';
import { PincodeChecker } from './components/PincodeChecker';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { Phone, MessageCircle } from 'lucide-react';

export function App() {
  const [lang, setLang] = useState<Language>('en');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingServiceType, setBookingServiceType] = useState('smartcard');

  const handleOpenBooking = (serviceType: string = 'smartcard') => {
    setBookingServiceType(serviceType);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-emerald-500 selection:text-white">
      {/* Sticky Header & Announcement */}
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        onOpenBooking={handleOpenBooking} 
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* 1. Hero Section with 3D Smart Health Card & Floating Stickers */}
        <Hero 
          lang={lang} 
          onOpenBooking={handleOpenBooking} 
        />

        {/* 2. Impact, Prestigious Awards & Live Metrics */}
        <ImpactRibbon 
          lang={lang} 
        />

        {/* 3. Core Interactive Healthcare Services Grid */}
        <ServicesGrid 
          lang={lang} 
          onOpenBooking={handleOpenBooking} 
        />

        {/* 4. Smart Health Card Interactive Savings Calculator */}
        <SavingsCalculator 
          lang={lang} 
          onOpenBooking={handleOpenBooking} 
        />

        {/* 5. Community Guardian & Swasthya-Mitra Network */}
        <GramMitraSection 
          lang={lang} 
          onOpenBooking={handleOpenBooking} 
        />

        {/* 6. Rural Pincode & Village Availability Checker */}
        <PincodeChecker 
          lang={lang} 
          onOpenBooking={handleOpenBooking} 
        />

        {/* 7. Real Patient Success Stories & Testimonials */}
        <Testimonials 
          lang={lang} 
        />
      </main>

      {/* 8. Corporate & Compliance Footer */}
      <Footer 
        lang={lang} 
        onOpenBooking={handleOpenBooking} 
      />

      {/* Interactive Booking / Assistance Dialog Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        lang={lang}
        initialService={bookingServiceType}
      />

      {/* Floating 24x7 Emergency Call Button for Rural Users */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        <a
          href="tel:+919667033044"
          className="group flex items-center gap-3 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-bold text-xs shadow-2xl hover:shadow-emerald-600/40 hover:scale-105 active:scale-95 transition-all border-2 border-white/80"
          title="Emergency 24x7 Helpline"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">24x7 Helpline: 96670 33044</span>
          <span className="sm:hidden font-extrabold">Call Help</span>
        </a>
      </div>
    </div>
  );
}

export default App;
