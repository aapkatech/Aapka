import React from 'react';
import { 
  HeartHandshake, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Activity, 
  Award,
  ArrowUp,
  ExternalLink
} from 'lucide-react';
import type { Language } from '../data/translations';
import { content } from '../data/translations';

interface FooterProps {
  lang: Language;
  onOpenBooking: (serviceType: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenBooking }) => {
  const t = content[lang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info & Mission */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-br from-sky-500 to-sky-600 text-white shadow-md">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-black tracking-tight text-white">
                  Aapka<span className="text-emerald-400">.</span>
                </span>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Rural India Healthcare Network
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              {t.footer.tagline}
            </p>

            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Incorporated Entity</span>
              </div>
              <p className="text-xs font-semibold text-white">
                {t.footer.companyName}
              </p>
              <p className="text-[11px] text-slate-400">
                Incubated & Supported at Jawaharlal Nehru University (JNU), New Delhi.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-300">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#smart-card" className="hover:text-emerald-400 transition-colors">
                  {t.nav.smartCard}
                </a>
              </li>
              <li>
                <a href="#gram-mitra" className="hover:text-emerald-400 transition-colors">
                  {t.nav.gramMitra}
                </a>
              </li>
              <li>
                <a href="#impact" className="hover:text-emerald-400 transition-colors">
                  {t.nav.impact}
                </a>
              </li>
              <li>
                <a href="#stories" className="hover:text-emerald-400 transition-colors">
                  {t.nav.testimonials}
                </a>
              </li>
              <li>
                <button 
                  onClick={() => onOpenBooking('smartcard')} 
                  className="text-emerald-400 font-bold hover:underline"
                >
                  Apply for Smart Card
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-300">
              {t.footer.addressTitle}
            </h4>
            
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed text-slate-300">
                  {t.footer.address}
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <span className="text-slate-400">24/7 Helpline: </span>
                  <a href="tel:+919667033044" className="font-bold text-white hover:text-emerald-400">
                    {t.footer.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <span className="text-slate-400">Email: </span>
                  <a href="mailto:info@aapka.co.in" className="font-semibold text-white hover:text-amber-400">
                    {t.footer.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Action in Footer */}
            <div className="pt-2">
              <a
                href="tel:+919667033044"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-600/30 border border-sky-500/40 text-sky-300 font-bold text-xs hover:bg-sky-600/50 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Emergency Dispatch: 96670 33044</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>{t.footer.copyright}</p>
          
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">{t.footer.privacyPolicy}</span>
            <span className="hover:text-slate-400 cursor-pointer">{t.footer.termsOfService}</span>
            <span className="hover:text-slate-400 cursor-pointer">{t.footer.patientCharter}</span>
            
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors ml-2"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-[11px] text-slate-600 text-center leading-relaxed">
          {t.footer.disclaimer}
        </p>

      </div>
    </footer>
  );
};
