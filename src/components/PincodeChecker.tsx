import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  CheckCircle2, 
  Hospital, 
  Users, 
  PhoneCall, 
  ShieldCheck, 
} from 'lucide-react';
import type { Language } from '../data/translations';
import { content } from '../data/translations';

interface PincodeCheckerProps {
  lang: Language;
  onOpenBooking: (serviceType: string) => void;
}

export const PincodeChecker: React.FC<PincodeCheckerProps> = ({ lang, onOpenBooking: _onOpenBooking }) => {
  const t = content[lang];
  const [pincode, setPincode] = useState('');
  const [result, setResult] = useState<{
    searched: boolean;
    available: boolean;
    locationName?: string;
    mitrasCount?: number;
    hospitalsCount?: number;
  }>({ searched: false, available: false });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pincode.trim() || pincode.length < 5) return;

    // Simulate verified coverage lookup
    setResult({
      searched: true,
      available: true,
      locationName: pincode.startsWith('20') ? 'Western UP / NCR Rural Hub' : 'Bharat Rural Cluster',
      mitrasCount: 4,
      hospitalsCount: 3
    });
  };

  return (
    <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
        
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950 border border-sky-500/40 text-sky-400 text-xs font-bold">
            <MapPin className="w-3.5 h-3.5" />
            <span>{t.pincode.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            {t.pincode.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-normal">
            {t.pincode.subtitle}
          </p>
        </div>

        {/* Input Search Form */}
        <form onSubmit={handleSearch} className="max-w-xl mx-auto flex flex-col sm:flex-row gap-3">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              maxLength={6}
              value={pincode}
              onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
              placeholder={t.pincode.placeholder}
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-800/90 border border-slate-700 text-white placeholder-slate-400 text-sm sm:text-base focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 shadow-inner"
            />
          </div>

          <button
            type="submit"
            className="px-7 py-4 rounded-2xl bg-sky-500 hover:bg-sky-600 text-white font-extrabold text-sm shadow-lg shadow-sky-500/25 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
          >
            {t.pincode.button}
          </button>
        </form>

        {/* Search Results Display */}
        {result.searched && (
          <div className="max-w-2xl mx-auto rounded-3xl bg-slate-800/90 border border-slate-700 p-6 text-left space-y-4 animate-in fade-in duration-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <CheckCircle2 className="w-5 h-5" />
                <span>{lang === 'hi' ? 'सेवा सक्रिय है!' : 'Aapka Active in this Region!'}</span>
              </div>
              <span className="text-xs text-slate-400 font-mono">PIN: {pincode}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-2xl bg-slate-900/60 border border-slate-700/60 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">{lang === 'hi' ? 'स्वास्थ्य-मित्र' : 'On-Duty Mitras'}</p>
                  <p className="font-bold text-white text-sm">4 Active in your area</p>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-900/60 border border-slate-700/60 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Hospital className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">{lang === 'hi' ? 'नेटवर्क अस्पताल' : 'Partner Hospitals'}</p>
                  <p className="font-bold text-white text-sm">3 within 25 km</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-700/80">
              <span className="text-xs text-slate-300">
                {lang === 'hi' ? 'तुरंत सहायता या बेड आरक्षण के लिए कॉल करें:' : 'Need urgent hospitalization or home test?'}
              </span>
              <a
                href="tel:+919667033044"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs shadow-md transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call +91 96670 33044</span>
              </a>
            </div>
          </div>
        )}

        {/* Coverage Trust Tag */}
        <div className="pt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>{t.pincode.coveredBadge}</span>
        </div>

      </div>
    </section>
  );
};
