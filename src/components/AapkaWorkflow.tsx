import React from 'react';
import { 
  AlertCircle, 
  Search, 
  PhoneCall, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  Users, 
  HeartHandshake, 
  CheckCircle2
} from 'lucide-react';

export const AapkaWorkflow: React.FC = () => {
  const steps = [
    {
      step: 1,
      title: "Patient Needs Care",
      subtitle: "Family seeks immediate help during a medical emergency in the village.",
      icon: AlertCircle,
      accent: "bg-amber-50 text-amber-700 border-amber-200",
      points: [
        "Identified by family or local Gram Mitra",
        "Immediate triage via Aapka platform"
      ]
    },
    {
      step: 2,
      title: "Aapka Finds the Right Hospital",
      subtitle: "Intelligent matching algorithm evaluates facilities in real-time.",
      icon: Search,
      accent: "bg-teal-50 text-teal-700 border-teal-200",
      points: [
        "Disease & severity evaluation",
        "Live ICU & general bed availability",
        "Geographic distance & terrain",
        "Budget & govt scheme eligibility"
      ]
    },
    {
      step: 3,
      title: "Aapka Coordinates Before Arrival",
      subtitle: "Direct clinical handshake between village and destination hospital.",
      icon: PhoneCall,
      accent: "bg-sky-50 text-sky-700 border-sky-200",
      points: [
        "Informs hospital administration & casualty",
        "Transmits vitals & patient condition",
        "Confirms bed & doctor readiness",
        "Pre-processes registration paperwork"
      ]
    },
    {
      step: 4,
      title: "Hospital Prepares in Advance",
      subtitle: "Doctors and facilities are staged before the patient reaches the door.",
      icon: ShieldCheck,
      accent: "bg-indigo-50 text-indigo-700 border-indigo-200",
      points: [
        "Trauma & specialty teams alerted",
        "Staged bed, oxygen, and equipment",
        "Zero registration queue waiting",
        "Expedited casualty admission"
      ]
    },
    {
      step: 5,
      title: "Care Starts Faster",
      subtitle: "Immediate clinical intervention without losing precious Golden Hour minutes.",
      icon: Zap,
      accent: "bg-emerald-50 text-emerald-700 border-emerald-200",
      points: [
        "Treatment begins within minutes of arrival",
        "60–75 minutes of delay eliminated",
        "Significantly higher survival rates",
        "Dignified, stress-free family experience"
      ]
    }
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-slate-50/60 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-700 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
            <span>The Proactive Solution</span>
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.18]">
            From <span className="text-slate-600 font-normal">"Where Should We Go?"</span> to <span className="text-teal-700 font-semibold">"Care Starts Faster."</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
            Aapka helps rural and tribal communities find the right hospital, coordinate before arrival, and navigate care — so that critical time is never lost.
          </p>
        </div>

        {/* 5-Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="relative p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="w-7 h-7 rounded-full bg-slate-950 text-white font-mono text-xs font-bold flex items-center justify-center">
                      {s.step}
                    </span>
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${s.accent}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-base font-semibold text-slate-900 leading-tight">
                      {s.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {s.subtitle}
                    </p>
                  </div>

                  <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                    {s.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-1.5 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* The Execution Equation (Technology + Community = Impact) */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              The Healthcare Access Equation
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Technology alone cannot navigate tribal terrain. People alone cannot track 240+ hospital bed availability. Aapka fuses both.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            
            {/* 1. Technology */}
            <div className="p-6 rounded-2xl bg-teal-50/50 border border-teal-100 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal-700 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Cpu className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-bold uppercase tracking-wider text-teal-800">Powered by Technology</p>
                <h4 className="text-base font-semibold text-slate-900">AI-Enabled Hospital Matching</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Real-time bed availability, distance calculation, department readiness, and transparent pricing.
                </p>
              </div>
            </div>

            {/* 2. Gram Mitras */}
            <div className="p-6 rounded-2xl bg-amber-50/50 border border-amber-100 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Users className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-bold uppercase tracking-wider text-amber-800">Enabled by Gram Mitras</p>
                <h4 className="text-base font-semibold text-slate-900">1,270+ On-Ground Facilitators</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Trusted community members who arrange transport, overcome paperwork anxiety, and guide patients.
                </p>
              </div>
            </div>

            {/* 3. Outcome */}
            <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-100 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-700 text-white flex items-center justify-center shrink-0 shadow-sm">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-800">Faster Access to Care</p>
                <h4 className="text-base font-semibold text-slate-900">Timely, Life-Saving Outcomes</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Hospital knows you are coming. Beds and surgeons are ready upon arrival.
                </p>
              </div>
            </div>

          </div>

          <div className="pt-4 border-t border-slate-100 text-center">
            <p className="text-sm font-medium text-slate-700 italic">
              "When the hospital knows you are coming, care doesn't have to wait."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
