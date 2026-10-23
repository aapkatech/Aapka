import React from 'react';
import { 
  Building2, 
  Target, 
  Compass, 
  MapPin, 
  Users, 
  ShieldCheck, 
  CheckCircle2, 
  Award, 
  HeartHandshake, 
  TrendingUp, 
  Calendar, 
  Activity, 
  ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  const pillars = [
    {
      title: "Scale With Precision",
      desc: "Expanding across underserved tribal districts across Madhya Pradesh, Odisha, Jharkhand, and Chhattisgarh where tertiary healthcare access is critically absent.",
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
      desc: "Comprehensive demographic and epidemiological surveys to identify acute disease burdens, infant/maternal mortality clusters, and transport bottlenecks.",
      deliverables: [
        "Village-level healthcare vulnerability index mapping",
        "Engagement with tribal village councils (Gram Sabhas)",
        "Baseline survey of out-of-pocket medical expenditure"
      ]
    },
    {
      phase: "Phase 02",
      timing: "Months 2 - 4",
      title: "Gram Mitra Recruitment & BLS Certification",
      desc: "Identifying trusted village candidates, with priority given to women champions, followed by intensive Basic Life Support (BLS) and digital app training.",
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
        "Binding MOUs with 240+ regional hospital network nodes",
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

  return (
    <div className="py-12 sm:py-16 space-y-20 bg-white">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-tr from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden border border-slate-800 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold border border-teal-500/30">
              <Compass className="w-3.5 h-3.5" />
              <span>Dedicated Webpage • Our Mission &amp; Roadmap</span>
            </div>
            
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Reimagining Rural &amp; Tribal Healthcare in India
            </h1>
            
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              SP Rural India Services Private Limited (operating as Aapka) is building India's most dependable grassroots-to-tertiary healthcare navigation ecosystem.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-300">
              <span className="flex items-center gap-1.5 text-teal-400">
                <CheckCircle2 className="w-4 h-4" /> 1,270+ Village Gram Mitras
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-teal-400">
                <CheckCircle2 className="w-4 h-4" /> 1,050+ Villages Covered
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-teal-400">
                <CheckCircle2 className="w-4 h-4" /> 240+ Vetted Hospitals
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Corporate Origin & Mission Statement */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
                Our Purpose &amp; Genesis
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900">
                Solving the "Lost Golden Hour" for Rural Families
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              In deep rural and tribal belts across India, medical emergencies don't just threaten health; they threaten family survival. Families routinely spend 60 to 75 vital minutes asking neighbors where to go, negotiating with predatory informal drivers, and arriving at hospitals only to find zero ICU beds or specialists on duty.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Aapka changes this equation permanently. By stationing trained, certified <strong>Gram Mitras</strong> in villages and linking them digitally to our <strong>240+ vetted hospital network</strong>, we ensure immediate basic life support, transparent ambulance routing, and guaranteed bed pre-staging.
            </p>

            <div className="p-6 rounded-2xl bg-teal-50/70 border border-teal-200/60 space-y-2">
              <p className="text-xs font-bold uppercase tracking-wider text-teal-900">Our Core Philosophy</p>
              <p className="text-sm text-teal-900 font-serif font-medium italic">
                "People. Partnerships. Possibilities: Building healthier, resilient, and financially protected tribal communities across Bharat."
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="p-8 rounded-3xl bg-slate-900 text-white space-y-6 shadow-xl border border-slate-800">
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-teal-400 uppercase tracking-widest">Entity Information</span>
                <h3 className="text-lg font-bold font-serif text-white">SP Rural India Services Pvt. Ltd.</h3>
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <Building2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-semibold">Brand Identity:</span> Aapka
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-semibold">Registered Office:</span> 201 Convention Centre, Jawaharlal Nehru University (JNU), New Delhi - 110067
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Activity className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-semibold">Field Command:</span> Madhya Pradesh Regional Operations Hub &amp; Tribal Districts
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-semibold">Compliance:</span> DPDP Act 2023 Patient Privacy Safeguards &amp; ISO Quality Benchmarks
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scaling Impact in Tribal India (Page 9 of Deck) */}
      <section className="py-16 sm:py-20 bg-slate-50/70 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
              Scaling Impact in Tribal India (Deck Slide 9)
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900">
              Three Strategic Pillars for Nationwide Reach
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              How Aapka bridges the systemic divide between remote tribal habitations and urban medical infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div 
                  key={idx}
                  className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-lg transition-all space-y-5 flex flex-col justify-between"
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

                    <h3 className="text-lg font-bold text-slate-900 font-serif">
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

      {/* 4-Phase Roadmap for Tribal Healthcare Pilot (Page 11 of Deck) */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
            Implementation Framework (Deck Slide 11)
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900">
            Our Plan for a Tribal Healthcare Pilot
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            A battle-tested 4-phase execution framework designed to stand up robust, measurable health outcomes across 100+ tribal villages in 12 months.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {roadmapPhases.map((phase, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:border-teal-500/60 hover:shadow-md transition-all space-y-5"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-teal-700">{phase.phase}</span>
                <span className="text-xs font-medium text-slate-500 flex items-center gap-1 bg-slate-100 px-2.5 py-0.5 rounded-full">
                  <Calendar className="w-3 h-3 text-slate-400" />
                  <span>{phase.timing}</span>
                </span>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-slate-900 font-serif">
                  {phase.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {phase.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 space-y-2">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Key Deliverables</p>
                <ul className="space-y-1.5 text-xs text-slate-700">
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

      {/* Recognition & Accolades */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-400">
              National Honors &amp; Validation
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white">
              Endorsed by Healthcare &amp; Innovation Leaders
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Recognized at prestigious national forums for our measurable impact on rural healthcare accessibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recognitionList.map((item, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-3xl bg-slate-800/80 border border-slate-700 space-y-4 hover:border-teal-500/50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-teal-500/20 text-teal-300 px-2.5 py-1 rounded border border-teal-500/30">
                    {item.badge}
                  </span>
                  <Award className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="text-lg font-bold text-white font-serif">{item.title}</h3>
                <p className="text-xs text-teal-300 font-medium">{item.org}</p>
                <p className="text-xs text-slate-400 leading-relaxed">{item.summary}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Bottom CTA to Founders / Contact */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 text-slate-900 flex flex-col md:flex-row md:items-center justify-between gap-8 shadow-sm">
          <div className="space-y-1.5 max-w-xl">
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-900">Want to partner with us or explore our pilot?</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We collaborate with state health departments, CSR foundations, and hospital networks to scale healthcare dignity across India.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/founders"
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs tracking-tight transition-colors shadow-sm"
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
      </div>

    </div>
  );
};
