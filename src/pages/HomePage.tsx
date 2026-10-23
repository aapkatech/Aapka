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

      {/* 7. Quick Navigation Pathways to Dedicated Pages (Refactored to Crisp Warm Canvas) */}
      <section className="py-16 sm:py-24 bg-[#FAFAFA] border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
              Healthcare Access Pathways
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
              Dignified Healthcare Access at Scale
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Explore our verified hospital network, clinical services, founding leadership, and on-ground tribal pilots.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            <Link
              to="/services"
              className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-200 group flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center border border-teal-100">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                  Our Services
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Hospitalization assistance, diagnostic lab routing, smart health cards, and emergency transfer.
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-teal-700 pt-3 border-t border-slate-100">
                <span>View Services</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/network"
              className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-200 group flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center border border-sky-100">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                  Global Network
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  240+ partner hospitals across government, empanelled, and private facilities with bed reservation.
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-sky-700 pt-3 border-t border-slate-100">
                <span>Explore Network</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/founders"
              className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-200 group flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-100">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                  The Founders
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Meet Prabal Pratap Singh, Shruti Thakur, and Yudhishthir Sharma with proven pedigrees (GIM, Qualcomm, HCL).
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-700 pt-3 border-t border-slate-100">
                <span>Meet Founders</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/about"
              className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-200 group flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center border border-purple-100">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                  About &amp; Mission
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Scaling impact in tribal India, 4-phase healthcare pilot roadmap, and national accolades.
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-purple-700 pt-3 border-t border-slate-100">
                <span>Our Mission</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/contact"
              className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-200 group flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  Contact &amp; Care
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  24/7 care coordination desk, emergency hotline, WhatsApp support, and hospital empanelment.
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 pt-3 border-t border-slate-100">
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
