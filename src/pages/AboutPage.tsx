import React from 'react';
import { 
  Building2, 
  Target, 
  MapPin, 
  Users, 
  ShieldCheck, 
  CheckCircle2, 
  Award, 
  TrendingUp, 
  Calendar, 
  Activity, 
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  const pillars = [
    {
      title: "Scale With Precision",
      desc: "Expanding across high-need tribal districts in Madhya Pradesh, Odisha, Jharkhand, and Chhattisgarh where tertiary clinical access is critically absent.",
      icon: TrendingUp,
      tag: "Geographic Expansion"
    },
    {
      title: "Reach Tribal Communities",
      desc: "Mobilizing local tribal youth and women as certified Gram Mitras to eliminate cultural, linguistic, and systemic distrust in modern clinical systems.",
      icon: Users,
      tag: "Community-Led Delivery"
    },
    {
      title: "Replicate Proven Model",
      desc: "Deploying our standardized, technology-enabled playbook that unifies offline triage, emergency transport, and cashless hospital bed pre-staging.",
      icon: Target,
      tag: "Institutional Blueprint"
    }
  ];

  const roadmapPhases = [
    {
      phase: "Phase 01",
      timing: "Months 1 - 2",
      title: "Community Mapping & Baseline Assessment",
      desc: "Comprehensive demographic and epidemiological surveys to identify acute disease burdens, infant and maternal health gaps, and transport bottlenecks.",
      deliverables: [
        "Village-level healthcare vulnerability mapping",
        "Direct engagement with tribal village councils (Gram Sabhas)",
        "Baseline survey of out-of-pocket medical expenditure"
      ]
    },
    {
      phase: "Phase 02",
      timing: "Months 2 - 4",
      title: "Gram Mitra Recruitment & BLS Certification",
      desc: "Identifying trusted village candidates, prioritizing women champions, followed by intensive Basic Life Support (BLS) and digital app training.",
      deliverables: [
        "Rigorous 4-week medical triage & emergency protocol training",
        "Deployment of offline-first Aapka Gram Mitra mobile application",
        "Diagnostic screening kit handover (BP, SpO2, blood sugar, temp)"
      ]
    },
    {
      phase: "Phase 03",
      timing: "Months 4 - 6",
      title: "Hospital Network & Emergency Integration",
      desc: "Empanelling regional district hospitals, mission hospitals, and private tertiary care centers under our binding zero-gouging patient charter.",
      deliverables: [
        "Binding agreements with 240+ regional hospital network nodes",
        "Digital casualty pre-notification integration with hospital ICUs",
        "Dedicated hospital-based Aapka Patient Facilitator desks"
      ]
    },
    {
      phase: "Phase 04",
      timing: "Months 6 - 12",
      title: "Full Pilot Rollout & Impact Measurement",
      desc: "Live clinical facilitation across pilot districts, measuring survival rate increases, Golden Hour delay reductions, and financial protection for families.",
      deliverables: [
        "Real-time monitoring of clinical turnaround time",
        "Longitudinal health records under DPDP Act 2023 compliance",
        "Independent third-party impact assessment report"
      ]
    }
  ];

  const recognitionList = [
    {
      title: "FICCI Healthcare Excellence Summit",
      badge: "Healthcare Innovation",
      org: "Federation of Indian Chambers of Commerce & Industry",
      summary: "Honored for pioneering rural emergency staging protocols and tech-enabled hospital linkage."
    },
    {
      title: "IIM Kashipur FIED Uttishtha",
      badge: "National Accelerator",
      org: "Foundation for Innovation & Entrepreneurship Development",
      summary: "Selected among India's top social enterprise scaleups driving sustainable healthcare equity."
    },
    {
      title: "Swati Rai Sankalp Stree Samman",
      badge: "Women Leadership",
      org: "Sankalp Foundation",
      summary: "Recognized for empowering 1,270+ rural women as certified primary healthcare facilitators."
    }
  ];

  const aboutMetrics = [
    { num: "1,270+", label: "Gram Mitras", sub: "Trained village cadres on duty" },
    { num: "1,050+", label: "Villages Covered", sub: "Underserved rural habitations" },
    { num: "240+", label: "Vetted Hospitals", sub: "Quality assured care network" },
    { num: "< 35 Mins", label: "Emergency Response", sub: "Pre-arrival doctor coordination" }
  ];

  return (
    <div className="bg-[#FAFAFA] min-h-screen text-slate-900">
      
      {/* 1. Seamless Hero Section Header (Full-Width Canvas, No Dark Floating Box) */}
      <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-8">
          
          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Reimagining Healthcare Access for Rural &amp; Tribal India
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              SP Rural India Services Private Limited (operating as Aapka) connects remote rural families to verified hospitals through certified on-ground Gram Mitras, eliminating the catastrophic 60 to 75-minute treatment delay gap.
            </p>
          </div>

          {/* Clean Borderless Horizontal Stat Bar */}
          <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 border-t border-slate-100">
            {aboutMetrics.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                  {stat.num}
                </p>
                <p className="text-xs font-bold uppercase tracking-wide text-teal-800">
                  {stat.label}
                </p>
                <p className="text-xs text-slate-500">
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 2. Corporate Origin & The "Lost Golden Hour" Story */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
                Solving the Lost "Golden Hour" for Rural Families
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              In deep rural and tribal belts across India, medical emergencies don't just threaten health — they devastate family savings. Families routinely spend 60 to 75 critical minutes asking neighbors where to go, negotiating with informal drivers, and arriving at distant hospitals only to find zero ICU beds or specialists on duty.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Aapka replaces this chaos with calm, coordinated care. By stationing trained, certified <strong>Gram Mitras</strong> directly in villages and linking them digitally to our <strong>240+ vetted hospital network</strong>, we ensure immediate basic life support, transparent ambulance routing, and guaranteed bed pre-staging.
            </p>

            <div className="p-6 rounded-2xl bg-teal-50/70 border border-teal-200/60 space-y-2">
              <p className="text-xs font-bold uppercase tracking-wider text-teal-900">Our Anchor Principle</p>
              <p className="text-sm text-teal-900 font-semibold italic">
                "People. Partnerships. Possibilities: Building healthier, resilient, and financially protected communities across Bharat."
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-6">
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-teal-700 uppercase tracking-widest font-bold">Corporate Identity</span>
                <h3 className="text-lg font-bold text-slate-900">SP Rural India Services Pvt. Ltd.</h3>
              </div>

              <div className="space-y-3.5 text-xs text-slate-600">
                <div className="flex items-start gap-3">
                  <Building2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-900 font-semibold">Brand Identity:</span> Aapka
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-900 font-semibold">Registered Office:</span> 201 Convention Centre, Jawaharlal Nehru University (JNU), New Delhi - 110067
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Activity className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-900 font-semibold">Regional Operations:</span> Madhya Pradesh Regional Operations Hub &amp; Tribal Districts
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-900 font-semibold">Compliance:</span> DPDP Act 2023 Patient Privacy Safeguards &amp; ISO Quality Standards
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Scaling Impact in Tribal India (Slide 9 of Deck) */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
              Scaling Impact Across Tribal India
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Three strategic pillars designed to bridge the systemic divide between remote tribal habitations and urban medical infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div 
                  key={idx}
                  className="p-8 rounded-2xl bg-[#FAFAFA] border border-slate-200/90 hover:border-slate-300 hover:shadow-md transition-all space-y-5 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200/60">
                        {p.tag}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200/60 flex items-center justify-center text-teal-700">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900">
                      {p.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. 4-Phase Roadmap for Tribal Healthcare Pilot (Slide 11 of Deck) */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        <div className="max-w-3xl space-y-3">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
            Our Plan for a Tribal Healthcare Pilot
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            A standardized, 4-phase execution framework designed to deliver measurable clinical outcomes across 100+ tribal villages over 12 months.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {roadmapPhases.map((phase, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-teal-500/60 hover:shadow-md transition-all space-y-5"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-teal-700">{phase.phase}</span>
                <span className="text-xs font-medium text-slate-500 flex items-center gap-1.5 bg-slate-100 px-3 py-1 rounded-full">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{phase.timing}</span>
                </span>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-slate-900">
                  {phase.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {phase.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 space-y-2">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Key Deliverables</p>
                <ul className="space-y-2 text-xs text-slate-700">
                  {phase.deliverables.map((d, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. National Honors & Validation */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
              Endorsed by Healthcare &amp; Innovation Leaders
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Recognized at prestigious national forums for our measurable impact on rural healthcare accessibility and women's empowerment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recognitionList.map((item, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-2xl bg-[#FAFAFA] border border-slate-200/90 space-y-3 hover:border-slate-300 hover:shadow-xs transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-teal-50 text-teal-800 px-2.5 py-1 rounded border border-teal-200/60">
                    {item.badge}
                  </span>
                  <Award className="w-5 h-5 text-amber-500" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="text-xs text-teal-700 font-semibold">{item.org}</p>
                <p className="text-xs text-slate-600 leading-relaxed">{item.summary}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Full-Width Collaboration CTA (Seamless Full-Bleed) */}
      <section className="w-full bg-[#0B132B] text-white py-16 sm:py-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Partner with Aapka</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Join Our District Healthcare Pilots
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We collaborate with state health missions, CSR foundations, and healthcare providers to eliminate treatment delays for rural families.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              to="/founders"
              className="px-6 py-3 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-white font-semibold text-xs tracking-tight transition-colors border border-slate-700 shadow-sm"
            >
              Meet the Founders
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs tracking-tight transition-colors shadow-sm"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
