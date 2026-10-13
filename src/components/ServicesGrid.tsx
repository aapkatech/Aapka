import React, { useState } from 'react';
import { 
  Hospital, 
  HeartHandshake, 
  FlaskConical, 
  PhoneCall, 
  CreditCard, 
  Ambulance, 
  ArrowUpRight, 
  Check, 
  Shield, 
  Sparkles 
} from 'lucide-react';
import type { Language } from '../data/translations';
import { content } from '../data/translations';

interface ServicesGridProps {
  lang: Language;
  onOpenBooking: (serviceId: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ lang, onOpenBooking }) => {
  const t = content[lang];
  const [activeTab, setActiveTab] = useState<'all' | 'hospital' | 'home'>('all');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Hospital':
        return Hospital;
      case 'HeartHandshake':
        return HeartHandshake;
      case 'FlaskConical':
        return FlaskConical;
      case 'PhoneCall':
        return PhoneCall;
      case 'CreditCard':
        return CreditCard;
      case 'Ambulance':
        return Ambulance;
      default:
        return Hospital;
    }
  };

  const filteredItems = t.services.items.filter(item => {
    if (activeTab === 'hospital') {
      return item.id === 'hospitalization' || item.id === 'emergency' || item.id === 'smartcard';
    }
    if (activeTab === 'home') {
      return item.id === 'caretaker' || item.id === 'pathology' || item.id === 'teleconsult';
    }
    return true;
  });

  return (
    <section id="services" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sky-100/80 text-sky-800 text-xs font-bold border border-sky-200">
              <Shield className="w-3.5 h-3.5 text-sky-600" />
              <span>{t.services.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              {t.services.title}
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-normal">
              {t.services.subtitle}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-white rounded-2xl border border-slate-200 shadow-2xs self-start md:self-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'all'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {lang === 'hi' ? 'सभी सेवाएं' : 'All Services'}
            </button>
            <button
              onClick={() => setActiveTab('hospital')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'hospital'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {lang === 'hi' ? 'अस्पताल व आपातकाल' : 'Hospital & Emergency'}
            </button>
            <button
              onClick={() => setActiveTab('home')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'home'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {lang === 'hi' ? 'घर बैठे सेवाएं' : 'Home Diagnostics'}
            </button>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const IconComponent = getIcon(item.icon);
            return (
              <div
                key={item.id}
                className="group relative rounded-3xl bg-white border border-slate-200/90 p-7 hover:border-sky-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-sky-50 text-sky-600 border border-sky-100 flex items-center justify-center group-hover:scale-105 group-hover:bg-sky-600 group-hover:text-white transition-all shadow-xs">
                      <IconComponent className="w-7 h-7" />
                    </div>

                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-200/80">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1 mb-3">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-emerald-600">
                      {item.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Card Footer: Stat & Action */}
                <div className="mt-6 pt-5 border-t border-slate-100 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700 bg-slate-50 py-2 px-3 rounded-xl border border-slate-100">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>{item.stat}</span>
                  </div>

                  <button
                    onClick={() => onOpenBooking(item.id)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-100 hover:bg-sky-600 text-slate-800 hover:text-white font-bold text-xs uppercase tracking-wider transition-all group-hover:shadow-md cursor-pointer"
                  >
                    <span>{t.services.bookBtn}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              <Check className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-sm text-slate-900">
                {lang === 'hi' ? '100% पारदर्शी दरें और कोई छुपी हुई फीस नहीं' : '100% Transparent Hospital Pricing & Zero Hidden Fees'}
              </p>
              <p className="text-xs text-slate-500">
                {lang === 'hi' ? 'हमारे स्वास्थ्य-मित्र अस्पताल में आपके साथ हर कदम पर खड़े रहते हैं।' : 'Our Swasthya-Mitras negotiate and stand with you from admission to discharge.'}
              </p>
            </div>
          </div>

          <a
            href="tel:+919667033044"
            className="text-xs font-bold text-sky-700 bg-sky-50 px-4 py-2.5 rounded-xl border border-sky-200 hover:bg-sky-100 transition-colors whitespace-nowrap"
          >
            {lang === 'hi' ? 'मुफ्त सलाह लें: +91 9667033044' : 'Get Free Guidance: +91 96670 33044'}
          </a>
        </div>

      </div>
    </section>
  );
};
