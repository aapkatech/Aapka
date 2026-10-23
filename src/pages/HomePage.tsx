import React from 'react';
import { Hero } from '../components/Hero';
import { ExecutionStrengths } from '../components/ExecutionStrengths';
import { TribalHealthGap } from '../components/TribalHealthGap';
import { AapkaWorkflow } from '../components/AapkaWorkflow';
import { GramMitraSection } from '../components/GramMitraSection';
import { QuietProof } from '../components/QuietProof';
import { ArrowRight, Building2, Users, ShieldCheck, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Translations } from '../i18n/translations';

interface HomePageProps {
  onOpenBooking: (service?: string) => void;
  t?: {
    hero?: Translations['hero'];
    proof?: Translations['proof'];
  };
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenBooking, t }) => {
  return (
    <div className="space-y-0">
      {/* 1. Hero Section (LOCKED - Untouched) */}
      <Hero 
        onSearch={() => onOpenBooking('hospitalization')} 
        onOpenBooking={onOpenBooking}
        t={t?.hero}
      />

      {/* 2. Real Scale Execution Metrics Strip (1,270+ Gram Mitras, 240+ Hospitals, etc.) */}
      <ExecutionStrengths />

      {/* 3. The Tribal & Rural Healthcare Reality & The 60-75 Minute Lost Delay Gap */}
      <TribalHealthGap />

      {/* 4. Proactive Solution: From 'Where Should We Go?' to 'Care Starts Faster' */}
      <AapkaWorkflow />

      {/* 5. Gram Mitra: Aapka's Strength on the Ground & BLS Training */}
      <GramMitraSection />

      {/* 6. Awards & National Recognition (Ceremony photos & Accolades) */}
      <QuietProof t={t?.proof} />

      {/* 7. Quick Navigation Pathways to Dedicated Pages */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-teal-400">
              Explore Aapka's Dedicated Webpages
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white">
              Dignified Healthcare Access at Scale
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Discover our comprehensive clinical services, 240+ hospital network, founding leadership, and ground mission.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            <Link
              to="/services"
              className="p-5 rounded-2xl bg-slate-800/70 border border-slate-700/80 hover:border-teal-500/80 hover:bg-slate-800 transition-all group flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center border border-teal-500/30">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-teal-400 transition-colors">
                  Our Services
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Hospitalization assistance, diagnostic lab routing, smart health cards, and emergency transfer.
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-teal-400 pt-2 border-t border-slate-700/60">
                <span>View Services</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/network"
              className="p-5 rounded-2xl bg-slate-800/70 border border-slate-700/80 hover:border-teal-500/80 hover:bg-slate-800 transition-all group flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center border border-sky-500/30">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-sky-400 transition-colors">
                  Global Network
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  240+ partner hospitals across government, empanelled, and private facilities with live bed staging.
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-sky-400 pt-2 border-t border-slate-700/60">
                <span>Explore Network</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/founders"
              className="p-5 rounded-2xl bg-slate-800/70 border border-slate-700/80 hover:border-teal-500/80 hover:bg-slate-800 transition-all group flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                  The Founders
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Meet Prabal Pratap Singh, Shruti Thakur, and Yudhishthir Sharma with proven pedigrees (GIM, Qualcomm, HCL).
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-400 pt-2 border-t border-slate-700/60">
                <span>Meet Founders</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/about"
              className="p-5 rounded-2xl bg-slate-800/70 border border-slate-700/80 hover:border-teal-500/80 hover:bg-slate-800 transition-all group flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center border border-purple-500/30">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-purple-400 transition-colors">
                  About &amp; Mission
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Scaling impact in tribal India, 4-phase healthcare pilot roadmap, and national accolades.
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-purple-400 pt-2 border-t border-slate-700/60">
                <span>Our Mission</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/contact"
              className="p-5 rounded-2xl bg-slate-800/70 border border-slate-700/80 hover:border-teal-500/80 hover:bg-slate-800 transition-all group flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                  Contact &amp; Care
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  24/7 care coordination desk, emergency hotline, WhatsApp support, and hospital empanelment.
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 pt-2 border-t border-slate-700/60">
                <span>Get in Touch</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
};
