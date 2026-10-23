import React from 'react';
import { HelpCircle, Clock, AlertTriangle, ArrowRight, Bed, Stethoscope, IndianRupee, Navigation, Users } from 'lucide-react';

interface TribalHealthGapProps {
  t?: {
    tag?: string;
    headline?: string;
    subheadline?: string;
  };
}

export const TribalHealthGap: React.FC<TribalHealthGapProps> = ({ t: _t }) => {
  const questions = [
    {
      q: "Is a bed available?",
      desc: "Families arrive without knowing if ICU or general beds exist.",
      icon: Bed,
      color: "text-amber-700 bg-amber-50 border-amber-200/70"
    },
    {
      q: "Can they treat us?",
      desc: "Uncertainty whether the required specialist is on duty.",
      icon: Stethoscope,
      color: "text-rose-700 bg-rose-50 border-rose-200/70"
    },
    {
      q: "Can we afford it?",
      desc: "Fear of predatory charges and lack of transparent pricing.",
      icon: IndianRupee,
      color: "text-emerald-700 bg-emerald-50 border-emerald-200/70"
    },
    {
      q: "How do we get there?",
      desc: "Navigating rough terrain, distances, and limited transport.",
      icon: Navigation,
      color: "text-sky-700 bg-sky-50 border-sky-200/70"
    },
    {
      q: "Who will help us navigate?",
      desc: "Bureaucratic hospital counters intimidate rural patients.",
      icon: Users,
      color: "text-purple-700 bg-purple-50 border-purple-200/70"
    }
  ];

  const delays = [
    {
      step: "01",
      title: "Emergency Arrival",
      detail: "Patient reaches hospital in critical condition",
      time: "~10 min"
    },
    {
      step: "02",
      title: "Registration & Forms",
      detail: "Attendant has to fill forms & documentation",
      time: "~10 min"
    },
    {
      step: "03",
      title: "Hospital Alerts Doctor",
      detail: "Admin contacts on-call recommended specialists",
      time: "~5 min"
    },
    {
      step: "04",
      title: "Doctor Arrival",
      detail: "Doctors take time to travel & reach emergency",
      time: "~35–40 min"
    },
    {
      step: "05",
      title: "Treatment Staging",
      detail: "Equipment & beds prepared only after patient is present",
      time: "Delayed"
    }
  ];

  return (
    <section id="the-gap" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16 sm:space-y-20">
        
        {/* Section Header: The Hard Reality */}
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-rose-600 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse" />
            <span>The Reality of Rural & Tribal Healthcare</span>
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.18]">
            For Tribal Communities, Healthcare Is Far Away.
            <span className="block text-slate-600 font-normal mt-1">Lack of the right information makes it even farther.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
            When an emergency strikes in a remote village, distance is only the first obstacle. Families embark on an anxious journey with five unanswered questions:
          </p>
        </div>

        {/* The 5 Critical Questions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {questions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${item.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 leading-snug">
                    "{item.q}"
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-200/50 flex items-center gap-1 text-[11px] font-medium text-slate-400">
                  <HelpCircle className="w-3 h-3 text-slate-400" />
                  <span>Unanswered in village</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* The Golden Hour Breakdown Card */}
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white p-8 sm:p-12 lg:p-14 overflow-hidden border border-slate-800 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative space-y-10">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800/80 pb-8">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-semibold border border-rose-500/30">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>The Golden Hour Dilemma</span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
                  When healthcare is already far away, every lost minute matters.
                </h3>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  For tribal communities, the journey doesn't end when they reach the hospital. Critical time is lost even after arrival due to unprepared hospital infrastructure.
                </p>
              </div>

              {/* Red Callout Pill */}
              <div className="p-4 sm:p-5 rounded-2xl bg-rose-950/60 border border-rose-600/40 text-center shrink-0">
                <span className="block text-2xl sm:text-3xl font-extrabold text-rose-400">
                  ~60–75 MIN
                </span>
                <span className="text-xs uppercase tracking-wider font-semibold text-rose-200">
                  Lost before treatment starts
                </span>
              </div>
            </div>

            {/* Delay Timeline Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {delays.map((d, index) => (
                <div 
                  key={index}
                  className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between space-y-3 relative group hover:border-slate-700 transition-colors"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-slate-400">Step {d.step}</span>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-rose-400 bg-rose-950/40 px-2 py-0.5 rounded-md border border-rose-800/30">
                        <Clock className="w-3 h-3" />
                        <span>{d.time}</span>
                      </span>
                    </div>
                    <h4 className="text-sm font-semibold text-white">
                      {d.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {d.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Core Insight Banner */}
            <div className="p-4 sm:p-5 rounded-xl bg-slate-900/90 border border-teal-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </div>
                <p className="text-xs sm:text-sm text-slate-300">
                  <span className="text-white font-medium">In an emergency, reaching a hospital is only half the journey.</span> Reaching the right care in time is what saves lives.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
