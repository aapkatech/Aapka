import React, { useState } from 'react';
import { Search, ArrowRight, ShieldCheck, Check, Sparkles, Building2, PhoneCall } from 'lucide-react';

interface HeroProps {
  onSearch: (query: string) => void;
  onOpenBooking: (serviceType?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearch, onOpenBooking }) => {
  const [query, setQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    } else {
      onOpenBooking('consultation');
    }
  };

  const quickTopics = [
    { label: "Surgical Navigation", service: "hospitalization" },
    { label: "Tele-Specialists", service: "teleconsult" },
    { label: "Doorstep Pathology", service: "pathology" },
    { label: "Family Health Card", service: "smartcard" }
  ];

  return (
    <section className="relative pt-16 pb-24 md:pt-28 md:pb-36 bg-white overflow-hidden">
      {/* Immense Negative Space & Crisp Content Container */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center space-y-10">
        
        {/* Subtle, Understated Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200/80 text-xs font-medium text-zinc-600 transition-all hover:border-zinc-300">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
          <span>Global Healthcare Accessibility Platform</span>
          <span className="text-zinc-300">|</span>
          <span className="text-zinc-500">ISO & Ayushman Compliant</span>
        </div>

        {/* Primary Headline: Large, Breathable, Elegant */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-zinc-950 leading-[1.06] max-w-4xl mx-auto">
          Healthcare, simplified for everyone, everywhere.
        </h1>

        {/* Refined Sub-headline */}
        <p className="text-lg sm:text-xl text-zinc-500 font-normal leading-relaxed max-w-2xl mx-auto">
          Connecting you instantly to verified global medical professionals, 24/7 clinical care coordination, and seamless health records.
        </p>

        {/* Action Hub: Unified Search & Scheduling Bar */}
        <div className="max-w-2xl mx-auto pt-2">
          <form 
            onSubmit={handleSearchSubmit}
            className="flex items-center gap-2 p-1.5 rounded-2xl bg-white border border-zinc-200/90 shadow-sm hover:border-zinc-300 focus-within:border-zinc-900 focus-within:ring-4 focus-within:ring-zinc-900/5 transition-all"
          >
            <div className="pl-4 flex items-center text-zinc-400 pointer-events-none">
              <Search className="w-4 h-4" />
            </div>

            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Find a specialist, partner hospital, or diagnostic service..."
              className="w-full py-3 px-3 text-sm text-zinc-900 placeholder-zinc-400 bg-transparent focus:outline-none"
            />

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-semibold tracking-tight transition-all shrink-0 cursor-pointer active:scale-[0.98]"
            >
              <span>Explore Care</span>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
            </button>
          </form>

          {/* Quick Select Chips */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-zinc-500">
            <span className="text-zinc-400 font-normal">Common requests:</span>
            {quickTopics.map((topic, i) => (
              <button
                key={i}
                type="button"
                onClick={() => onOpenBooking(topic.service)}
                className="px-3 py-1 rounded-full bg-zinc-50 hover:bg-zinc-100 text-zinc-600 border border-zinc-200/60 transition-colors cursor-pointer"
              >
                {topic.label}
              </button>
            ))}
          </div>
        </div>

        {/* Quiet Trust Bar */}
        <div className="pt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-zinc-400">
          <div className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-teal-600" />
            <span>46+ Accredited Hospitals</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-teal-600" />
            <span>Zero Administrative Overhead</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-teal-600" />
            <span>Under 15-Minute Response Time</span>
          </div>
        </div>

      </div>
    </section>
  );
};
