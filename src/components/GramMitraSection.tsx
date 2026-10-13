import React from 'react';
import { 
  Users, 
  GraduationCap, 
  Stethoscope, 
  IndianRupee, 
  ArrowRight, 
  CheckCircle, 
  ShieldCheck, 
  Award,
  Sparkles,
  MapPin,
  Heart
} from 'lucide-react';
import type { Language } from '../data/translations';
import { content } from '../data/translations';

interface GramMitraProps {
  lang: Language;
  onOpenBooking: (serviceType: string) => void;
}

export const GramMitraSection: React.FC<GramMitraProps> = ({ lang, onOpenBooking }) => {
  const t = content[lang];

  return (
    <section id="gram-mitra" className="py-20 bg-gradient-to-b from-slate-50 via-emerald-50/30 to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 text-emerald-900 text-xs font-bold border border-emerald-300/80 shadow-2xs">
            <Users className="w-3.5 h-3.5 text-emerald-700" />
            <span>{t.gramMitra.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {t.gramMitra.title}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            {t.gramMitra.subtitle}
          </p>
        </div>

        {/* Pillars & Swasthya-Mitra Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: 3 Program Pillars */}
          <div className="lg:col-span-7 space-y-5">
            {/* Pillar 1 */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0 shadow-2xs">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-slate-900">
                  {t.gramMitra.point1Title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {t.gramMitra.point1Desc}
                </p>
                <div className="pt-1 flex items-center gap-2 text-xs font-semibold text-emerald-700">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>{lang === 'hi' ? 'चिकित्सकों द्वारा ऑनलाइन व ऑफलाइन सर्टिफिकेशन' : 'Certified in Patient Advocacy & First Aid'}</span>
                </div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-sky-50 text-sky-600 border border-sky-100 flex items-center justify-center shrink-0 shadow-2xs">
                <Stethoscope className="w-7 h-7" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-slate-900">
                  {t.gramMitra.point2Title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {t.gramMitra.point2Desc}
                </p>
                <div className="pt-1 flex items-center gap-2 text-xs font-semibold text-sky-700">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>{lang === 'hi' ? 'घर-घर जाकर जांच करने के लिए स्मार्ट किट' : 'Complete Portable Tele-Health Equipment'}</span>
                </div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center shrink-0 shadow-2xs">
                <IndianRupee className="w-7 h-7" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-slate-900">
                  {t.gramMitra.point3Title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {t.gramMitra.point3Desc}
                </p>
                <div className="pt-1 flex items-center gap-2 text-xs font-semibold text-amber-700">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>{lang === 'hi' ? 'पारदर्शी कमीशन व मासिक प्रोत्साहन राशि' : 'Direct Bank Transfer with Zero Delay'}</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={() => onOpenBooking('grammitra')}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-extrabold text-base shadow-lg shadow-emerald-600/25 active:scale-95 transition-all cursor-pointer"
              >
                <Users className="w-5 h-5 text-emerald-100" />
                <span>{t.gramMitra.cta}</span>
                <ArrowRight className="w-4 h-4 text-emerald-100" />
              </button>
            </div>
          </div>

          {/* Right Column: Verified Swasthya-Mitra Profile Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-8 bg-white border border-slate-200/90 shadow-2xl space-y-6">
              
              {/* Profile Card Header Badge */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-100 text-emerald-800">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                  {lang === 'hi' ? 'सत्यापित ग्राम मित्र' : 'Certified Gram Mitra'}
                </span>
                <span className="text-[11px] font-bold text-slate-400">ID: GM-UP-4182</span>
              </div>

              {/* Persona Profile Details */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-sky-600 to-emerald-600 p-1 shadow-md">
                    <div className="w-full h-full rounded-xl bg-slate-100 flex items-center justify-center font-black text-2xl text-slate-700">
                      MK
                    </div>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-white text-xs">
                    ✓
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-black text-slate-900">{t.gramMitra.cardName}</h3>
                  <p className="text-xs font-bold text-emerald-600 uppercase tracking-wide">
                    {t.gramMitra.cardRole}
                  </p>
                  <div className="flex items-center gap-1 text-xs text-slate-500 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{t.gramMitra.cardLocation}</span>
                  </div>
                </div>
              </div>

              {/* Monthly Achievement Stat */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  {lang === 'hi' ? 'सामुदायिक प्रभाव' : 'Community Impact'}
                </p>
                <p className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
                  <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                  {t.gramMitra.cardStat}
                </p>
              </div>

              {/* Equipment Badge Checklist */}
              <div className="space-y-2 text-xs font-medium text-slate-700">
                <p className="font-bold text-slate-900">
                  {lang === 'hi' ? 'अधिकृत जांच व सेवाएं:' : 'Authorized Services & Kit:'}
                </p>
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <span className="p-2 rounded-xl bg-sky-50 text-sky-800 border border-sky-100 flex items-center gap-1.5 font-semibold">
                    • Digital BP & Pulse
                  </span>
                  <span className="p-2 rounded-xl bg-sky-50 text-sky-800 border border-sky-100 flex items-center gap-1.5 font-semibold">
                    • Blood Sugar Check
                  </span>
                  <span className="p-2 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-100 flex items-center gap-1.5 font-semibold">
                    • Hospital Bed Booking
                  </span>
                  <span className="p-2 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-100 flex items-center gap-1.5 font-semibold">
                    • Ayushman Claims
                  </span>
                </div>
              </div>

              {/* Direct call / WhatsApp support */}
              <div className="pt-2 border-t border-slate-100">
                <a
                  href="tel:+919667033044"
                  className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <span>{lang === 'hi' ? 'अपने गांव के मित्र से संपर्क करें' : 'Connect with Local Mitra'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
