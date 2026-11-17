import React, { useState } from 'react';
import { 
  Video, 
  Building2, 
  FlaskConical, 
  CreditCard, 
  HeartHandshake, 
  Ambulance,
  ShieldCheck,
  Stethoscope,
  FileCheck,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import type { Translations } from '../i18n/translations';

interface ServicesShowcaseProps {
  onSelectService?: (serviceId: string) => void;
  t?: Translations['services'];
}

export const ServicesShowcase: React.FC<ServicesShowcaseProps> = ({ onSelectService, t }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'hospital' | 'home'>('all');

  const iconMap: Record<string, React.ElementType> = {
    hospitalization: Building2,
    teleconsult: Video,
    pathology: FlaskConical,
    smartcard: CreditCard,
    caretaker: HeartHandshake,
    emergency: Ambulance,
    insurance: ShieldCheck,
    opinion: Stethoscope,
    audit: FileCheck
  };

  const serviceImages: Record<string, string> = {
    hospitalization: '/services/hospitalization.webp',
    teleconsult: '/services/teleconsult.webp',
    pathology: '/services/pathology.webp',
    smartcard: '/services/smartcard.webp',
    caretaker: '/services/caretaker.webp',
    emergency: '/services/emergency.webp',
    insurance: '/services/insurance.webp',
    opinion: '/services/opinion.webp',
    audit: '/services/audit.webp'
  };

  const defaultServices = [
    {
      id: "hospitalization",
      category: "hospital" as const,
      title: "Hospitalization Assistance",
      tagline: "End-to-end surgical coordination and paperwork clearance.",
      description: "Dedicated clinical facilitators accompany you during admissions, eliminate bureaucratic delay, and guarantee institutional rates.",
      badge: "Surgery & Admission",
      features: ["Pre-Negotiated Tariffs", "Bed & ICU Staging", "Admission Escort"],
      image: "/services/hospitalization.webp"
    },
    {
      id: "teleconsult",
      category: "home" as const,
      title: "Teleconsultation",
      tagline: "Instant video consultations with verified medical specialists.",
      description: "Direct access to top cardiologists, oncologists, pediatricians, and general practitioners from anywhere in the world.",
      badge: "Instant Video Consult",
      features: ["Senior Specialists", "Prescription & Follow-up", "No Hospital Travel"],
      image: "/services/teleconsult.webp"
    },
    {
      id: "pathology",
      category: "home" as const,
      title: "Diagnostic Lab Routing",
      tagline: "High-precision pathology with doorstep sample collection.",
      description: "Seamless scheduling with accredited diagnostic centers with verified digital results delivered within 24 hours.",
      badge: "Lab & Blood Tests",
      features: ["Doorstep Sample Pickup", "NABL Accredited Labs", "Digital Reports < 24h"],
      image: "/services/pathology.webp"
    },
    {
      id: "smartcard",
      category: "hospital" as const,
      title: "Smart Health Card",
      tagline: "Unified preventative care and pre-negotiated family coverage.",
      description: "One digital instrument granting subsidized surgeries, complimentary annual health panels, and pharmacy discounts.",
      badge: "Family Health Card",
      features: ["Up to 50% Subsidies", "Annual Health Checkup", "Pharmacy Discounts"],
      image: "/services/smartcard.webp"
    },
    {
      id: "caretaker",
      category: "home" as const,
      title: "Bedside Attendants & Home Care",
      tagline: "Vetted medical caregivers for post-surgical and elderly recovery.",
      description: "Compassionate, certified nursing professionals providing continuous vital monitoring in hospital wards or at home.",
      badge: "Bedside & Elder Care",
      features: ["Certified Nursing Staff", "Post-Surgical Care", "Vital Monitoring"],
      image: "/services/caretaker.webp"
    },
    {
      id: "emergency",
      category: "hospital" as const,
      title: "Emergency Transport Network",
      tagline: "Rapid, GPS-coordinated rural and urban critical care transfer.",
      description: "Advance-life-support vehicles connected to regional hub trauma centers with pre-reserved ICU bed staging.",
      badge: "24/7 Rapid Ambulance",
      features: ["ALS / BLS Transport", "Pre-Reserved ICU Bay", "Emergency Hotline"],
      image: "/services/emergency.webp"
    },
    {
      id: "insurance",
      category: "hospital" as const,
      title: "Ayushman & Cashless Insurance Desk",
      tagline: "100% cashless claims and government scheme navigation.",
      description: "Dedicated insurance desk managers verify policy eligibility, handle pre-authorization with insurers, and eliminate out-of-pocket surprise expenses.",
      badge: "Cashless & Ayushman",
      features: ["Ayushman Bharat (PM-JAY)", "Hassle-Free Pre-Auth", "Zero Tout Commissions"],
      image: "/services/insurance.webp"
    },
    {
      id: "opinion",
      category: "home" as const,
      title: "Super-Specialist Second Opinion",
      tagline: "Independent clinical review from premier super-specialists.",
      description: "Connect with board-certified surgeons and oncologists from premier national institutions to review scans, confirm surgical necessity, and validate line of treatment.",
      badge: "Clinical Opinion",
      features: ["AIIMS & Top Specialists", "Scan & MRI Verification", "Unbiased Treatment Plan"],
      image: "/services/opinion.webp"
    },
    {
      id: "audit",
      category: "hospital" as const,
      title: "Surgical Package Tariff Audit",
      tagline: "Written price protection before you step inside the hospital.",
      description: "Our medical auditors review hospital billing estimates line-by-line, eliminate predatory markups, and lock pre-negotiated package discounts.",
      badge: "Price Protection",
      features: ["30-50% Expense Savings", "Line-by-Line Bill Audit", "Written Quote Guarantee"],
      image: "/services/audit.webp"
    }
  ];

  const services = t?.items || defaultServices;
  const tag = t?.tag || "Care Solutions";
  const title = t?.title || "Comprehensive clinical pathways, curated for simplicity.";
  const tabs = t?.tabs || {
    all: "All Services",
    hospital: "Hospital & Surgery",
    home: "Remote & Diagnostics"
  };

  const filteredServices = services.filter(s => {
    if (activeCategory === 'hospital') return s.category === 'hospital';
    if (activeCategory === 'home') return s.category === 'home';
    return true;
  });

  return (
    <section id="services" className="py-2 sm:py-3 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-4 sm:space-y-5">
        
        {/* Header with Minimalist Tab Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-sky-100 pb-3">
          <div className="max-w-xl space-y-1.5">
            <p className="text-xs font-semibold uppercase tracking-wider text-sky-700">
              {tag}
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-medium tracking-tight text-slate-900">
              {title}
            </h2>
          </div>

          {/* Minimalist Switcher */}
          <div className="flex items-center gap-1 p-1 bg-sky-50/70 border border-sky-200/60 rounded-xl self-start md:self-auto text-xs font-medium">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeCategory === 'all' 
                  ? 'bg-gradient-to-r from-sky-600 to-cyan-600 text-white shadow-xs font-semibold' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {tabs.all} ({services.length})
            </button>
            <button
              onClick={() => setActiveCategory('hospital')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeCategory === 'hospital' 
                  ? 'bg-gradient-to-r from-sky-600 to-cyan-600 text-white shadow-xs font-semibold' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {tabs.hospital}
            </button>
            <button
              onClick={() => setActiveCategory('home')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeCategory === 'home' 
                  ? 'bg-gradient-to-r from-sky-600 to-cyan-600 text-white shadow-xs font-semibold' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {tabs.home}
            </button>
          </div>
        </div>

        {/* 9 Rich, Visible Photo Healthcare Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {filteredServices.map((service) => {
            const Icon = iconMap[service.id] || Building2;
            const imgSrc = service.image || serviceImages[service.id] || '/services/hospitalization.webp';
            const badgeText = service.badge || (service.category === 'hospital' ? 'Hospital Care' : 'Remote Care');
            const features = service.features || ["Verified Specialists", "24/7 Assistance", "Zero Hidden Costs"];

            return (
              <article
                key={service.id}
                onClick={() => onSelectService?.(service.id)}
                className="group relative rounded-3xl bg-white/95 backdrop-blur-md border border-sky-100 hover:border-sky-400 shadow-[0_4px_24px_-4px_rgba(2,132,199,0.06)] hover:shadow-[0_16px_36px_-6px_rgba(2,132,199,0.14)] transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
              >
                {/* Precision Beveled Aura Top Rim Gradient */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 z-10" />

                {/* 1. High-Impact Visual Photo Banner (100% visible, emotional patient connect) */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                  <img
                    src={imgSrc}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle Gradient to anchor badge and floating icon */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/15 to-transparent" />

                  {/* Top-Right Category Badge */}
                  <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10.5px] font-bold text-slate-900 tracking-wider uppercase shadow-xs border border-white/60">
                    {badgeText}
                  </div>

                  {/* Overlapping Floating Icon */}
                  <div className="absolute -bottom-5 left-6 w-11 h-11 rounded-2xl bg-white shadow-md border border-slate-100 flex items-center justify-center text-sky-700 group-hover:bg-gradient-to-r group-hover:from-sky-600 group-hover:to-cyan-600 group-hover:text-white transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* 2. Card Content Body */}
                <div className="pt-8 px-6 sm:px-7 pb-6 sm:pb-7 flex flex-col justify-between flex-grow space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold font-serif text-slate-950 tracking-tight leading-snug group-hover:text-sky-900 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-sky-700">
                      {service.tagline}
                    </p>
                    <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-normal pt-1">
                      {service.description}
                    </p>

                    {/* Feature Chips */}
                    <div className="pt-3 flex flex-wrap gap-1.5">
                      {features.map((feat, fIdx) => (
                        <span
                          key={fIdx}
                          className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-sky-50/70 border border-sky-200/60 text-[11px] font-medium text-slate-700"
                        >
                          <CheckCircle2 className="w-3 h-3 text-sky-600 shrink-0" />
                          <span>{feat}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Interactive CTA Strip */}
                  <div className="pt-4 border-t border-sky-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-sky-700 group-hover:text-sky-900 flex items-center gap-1.5 transition-colors">
                      <span>Request Assistance</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400">
                      15+ Cities
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
