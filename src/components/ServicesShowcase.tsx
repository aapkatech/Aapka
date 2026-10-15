import React, { useState } from 'react';
import { 
  Video, 
  Building2, 
  FlaskConical, 
  CreditCard, 
  HeartHandshake, 
  Ambulance, 
  ArrowUpRight 
} from 'lucide-react';

interface ServicesShowcaseProps {
  onSelectService: (serviceId: string) => void;
}

export const ServicesShowcase: React.FC<ServicesShowcaseProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'hospital' | 'home'>('all');

  const services = [
    {
      id: "hospitalization",
      category: "hospital",
      title: "Hospitalization Assistance",
      tagline: "End-to-end surgical coordination and paperwork clearance.",
      description: "Dedicated clinical facilitators accompany you during admissions, eliminate bureaucratic delay, and guarantee institutional rates.",
      icon: Building2
    },
    {
      id: "teleconsult",
      category: "home",
      title: "Teleconsultation",
      tagline: "Instant video consultations with verified medical specialists.",
      description: "Direct access to top cardiologists, oncologists, pediatricians, and general practitioners from anywhere in the world.",
      icon: Video
    },
    {
      id: "pathology",
      category: "home",
      title: "Diagnostic Lab Routing",
      tagline: "High-precision pathology with doorstep sample collection.",
      description: "Seamless scheduling with accredited diagnostic centers with verified digital results delivered within 24 hours.",
      icon: FlaskConical
    },
    {
      id: "smartcard",
      category: "hospital",
      title: "Smart Health Card",
      tagline: "Unified preventative care and pre-negotiated family coverage.",
      description: "One digital instrument granting subsidized surgeries, complimentary annual health panels, and pharmacy discounts.",
      icon: CreditCard
    },
    {
      id: "caretaker",
      category: "home",
      title: "Bedside Attendants & Home Care",
      tagline: "Vetted medical caregivers for post-surgical and elderly recovery.",
      description: "Compassionate, certified nursing professionals providing continuous vital monitoring in hospital wards or at home.",
      icon: HeartHandshake
    },
    {
      id: "emergency",
      category: "hospital",
      title: "Emergency Transport Network",
      tagline: "Rapid, GPS-coordinated rural and urban critical care transfer.",
      description: "Advance-life-support vehicles connected to regional hub trauma centers with pre-reserved ICU bed staging.",
      icon: Ambulance
    }
  ];

  const filteredServices = services.filter(s => {
    if (activeCategory === 'hospital') return s.category === 'hospital';
    if (activeCategory === 'home') return s.category === 'home';
    return true;
  });

  return (
    <section id="services" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        
        {/* Header with Minimalist Tab Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-100 pb-8">
          <div className="max-w-xl space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Care Solutions
            </p>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-zinc-950">
              Comprehensive clinical pathways, curated for simplicity.
            </h2>
          </div>

          {/* Minimalist Switcher */}
          <div className="flex items-center gap-1 p-1 bg-zinc-100 rounded-xl self-start md:self-auto text-xs font-medium">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeCategory === 'all' 
                  ? 'bg-white text-zinc-950 shadow-2xs font-semibold' 
                  : 'text-zinc-500 hover:text-zinc-800'
              }`}
            >
              All Services
            </button>
            <button
              onClick={() => setActiveCategory('hospital')}
              className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeCategory === 'hospital' 
                  ? 'bg-white text-zinc-950 shadow-2xs font-semibold' 
                  : 'text-zinc-500 hover:text-zinc-800'
              }`}
            >
              Hospital & Surgery
            </button>
            <button
              onClick={() => setActiveCategory('home')}
              className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeCategory === 'home' 
                  ? 'bg-white text-zinc-950 shadow-2xs font-semibold' 
                  : 'text-zinc-500 hover:text-zinc-800'
              }`}
            >
              Remote & Diagnostics
            </button>
          </div>
        </div>

        {/* Crisp Clean Grid (One-Sentence Focus) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                onClick={() => onSelectService(service.id)}
                className="group relative p-8 rounded-2xl bg-white border border-zinc-200/70 hover:border-zinc-900 transition-all duration-200 flex flex-col justify-between cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-800 group-hover:bg-zinc-950 group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-zinc-300 group-hover:text-zinc-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-lg font-medium text-zinc-950 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs font-medium text-teal-700">
                      {service.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-zinc-500 font-normal leading-relaxed pt-1">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-semibold text-zinc-950">
                  <span>Learn more</span>
                  <span className="text-zinc-400 font-normal group-hover:text-zinc-900 transition-colors">→</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
