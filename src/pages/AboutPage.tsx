import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  HeartHandshake, 
  CheckCircle2, 
  PhoneCall, 
  ArrowRight,
  Sparkles,
  Award,
  Users2,
  FileCheck,
  Stethoscope,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  const patientGuarantees = [
    {
      title: "Written Price Protection",
      tagline: "Zero Bill Shocks",
      description: "Before you step into a partner hospital, our care auditors pre-audit surgical package tariffs line-by-line. What is quoted before admission is what you pay — no surprise fees at discharge.",
      icon: FileCheck,
      accent: "text-teal-700 bg-teal-50 border-teal-200/80"
    },
    {
      title: "Dedicated On-Ground Companion",
      tagline: "Never Alone in a Hospital",
      description: "A trained, compassionate care coordinator meets your family at the hospital admission desk, handles paperwork and TPA insurance, and stands beside you through admission and discharge.",
      icon: HeartHandshake,
      accent: "text-sky-700 bg-sky-50 border-sky-200/80"
    },
    {
      title: "Verified Doctors & Staged Beds",
      tagline: "Vetted Clinical Excellence",
      description: "Direct routing to experienced surgeons, senior specialists, and accredited hospitals with live bed and ICU pre-allocation, eliminating chaotic waiting rooms during critical hours.",
      icon: Building2,
      accent: "text-indigo-700 bg-indigo-50 border-indigo-200/80"
    },
    {
      title: "100% Free Patient Guidance",
      tagline: "Unbiased Family Advocacy",
      description: "Families never pay a single rupee for our guidance, care desk coordination, or on-ground assistance. We work strictly in the patient's interest with absolute transparency.",
      icon: ShieldCheck,
      accent: "text-emerald-700 bg-emerald-50 border-emerald-200/80"
    }
  ];

  const journeySteps = [
    {
      number: "01",
      title: "Direct Connect (24/7)",
      desc: "Call our helpline (+91 88608 80044) or message on WhatsApp. Share your medical reports, doctor prescriptions, or surgery requirement.",
      icon: PhoneCall
    },
    {
      number: "02",
      title: "Package & Hospital Comparison",
      desc: "Receive clear, pre-negotiated package options across top accredited partner hospitals with verified doctor credentials and upfront quotes.",
      icon: Stethoscope
    },
    {
      number: "03",
      title: "On-Ground Admission Escort",
      desc: "An Aapka care coordinator meets you at the hospital reception to fast-track admissions, Ayushman Bharat (PM-JAY), and cashless insurance clearance.",
      icon: Users2
    },
    {
      number: "04",
      title: "Discharge & Bill Verification",
      desc: "Our team audits the final hospital invoice line-by-line before payment to eliminate duplicate or inflated charges, saving families 30% to 50%.",
      icon: Clock
    }
  ];

  const institutionalRecognitions = [
    {
      name: "AMBA & BGA Excellence Awards (London, UK)",
      badge: "First Runner-Up",
      highlight: "Start-Up of the Year — Prabal Pratap Singh (Goa Institute of Management), only Asian finalist"
    },
    {
      name: "FICCI Healthcare Excellence Awards",
      badge: "Top 3 Finalist",
      highlight: "Recognized nationally for excellence in patient service delivery and care innovation"
    },
    {
      name: "Ministry of Commerce & Industry and MeitY",
      badge: "National Partner",
      highlight: "Partnered and recognized under flagship national enterprise and digital health initiatives"
    },
    {
      name: "Swati Rai Award for Entrepreneurship",
      badge: "Winner (₹10 Lakh)",
      highlight: "1st prize at Sankalp Bharat Summit 2024 for pioneering accessible healthcare navigation"
    }
  ];

  return (
    <div className="py-4 sm:py-6 space-y-6 sm:space-y-8 bg-transparent">
      
      {/* 1. Page Header (Aura Wave & Clinical Lattice Theme) */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white/95 backdrop-blur-md border border-sky-100 shadow-xs relative overflow-hidden">
          {/* Precision Beveled Aura Top Rim Gradient */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600" />

          <div className="max-w-3xl space-y-3">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.18]">
              Healthcare Guidance Built on Trust, Dignity, and Honest Costs.
            </h1>
            
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Aapka is India's dedicated patient navigation and price protection platform. We stand beside families from the first doctor consultation to hospital discharge — ensuring you never face medical distress alone.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs sm:text-sm font-semibold text-slate-700">
              <span className="flex items-center gap-1.5 text-sky-800">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                ₹4.1 Cr+ Patient Debt Prevented (1,270+ Patients)
              </span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5 text-sky-800">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                250+ Accredited Network Hospitals
              </span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5 text-sky-800">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                15+ Cities Across Bharat
              </span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5 text-sky-800">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                15,000+ Consultations Guided
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our Origin & Story (Why We Built Aapka) */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
                Our Genesis &amp; Purpose
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 leading-snug">
                Why We Built Aapka
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              When a family member falls critically ill, the medical system can feel cold, fragmented, and terrifying. Families spend vital hours asking neighbors which hospital to visit, dealing with aggressive touts at hospital gates, and receiving surprise billing estimates that wipe out years of savings.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Aapka was founded by <strong>Prabal Pratap Singh</strong> (MBA, Goa Institute of Management) to fundamentally transform this reality. We believe healthcare is not merely a transaction — it is about dignity, transparency, and human companionship.
            </p>

            <div className="p-5 rounded-2xl bg-sky-50/70 border border-sky-200/80 space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-900 block">Our Founding Promise</span>
              <p className="text-sm sm:text-base text-sky-950 font-serif italic leading-relaxed">
                "No family should ever be left alone in a hospital lobby, and no patient should face financial ruin for simply seeking medical care."
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="p-6 sm:p-7 rounded-3xl bg-white/95 backdrop-blur-md text-slate-900 space-y-4 shadow-xs border border-sky-100 relative overflow-hidden">
              {/* Precision Beveled Aura Top Rim Gradient */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600" />

              <div className="space-y-1">
                <span className="text-[11px] font-mono text-sky-700 uppercase tracking-widest font-semibold">
                  Leadership Spotlight
                </span>
                <h3 className="text-xl font-bold font-serif text-slate-900">
                  Prabal Pratap Singh
                </h3>
                <p className="text-xs font-semibold text-sky-800">
                  Founder &amp; Chief Executive Officer
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Alumnus of the Goa Institute of Management (MBA) and computer science engineer. Recognized globally as Start-Up of the Year finalist at the AMBA &amp; BGA Business Excellence Awards in London, Prabal has spent years building institutional care navigation solutions that safeguard families across Bharat.
              </p>

              <div className="pt-2 border-t border-sky-100 flex items-center justify-between text-xs">
                <Link
                  to="/team"
                  className="text-sky-700 hover:text-sky-900 font-semibold inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Meet Our Leadership Team</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href="https://www.linkedin.com/in/aapkaprabal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-slate-900 transition-colors"
                >
                  LinkedIn Profile ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 4 Patient Promises (Our Core Values) */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-4 sm:space-y-5">
        <div className="max-w-3xl space-y-1.5">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
            Our Patient Charter
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900">
            The Four Guarantees Every Family Receives
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Every clinical intervention, surgery package, and bed booking is governed by our strict patient-first principles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {patientGuarantees.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-3xl bg-white/95 backdrop-blur-md border border-sky-100 shadow-xs hover:shadow-lg hover:border-sky-300 transition-all flex flex-col justify-between space-y-4 relative overflow-hidden group"
              >
                {/* Precision Beveled Aura Top Rim Gradient */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600" />

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center border shadow-2xs ${item.accent}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10.5px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full bg-sky-50 text-sky-800 border border-sky-200/60">
                      {item.tagline}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 font-serif leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. How It Works for Families (4 Simple Steps) */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-4 sm:space-y-5">
        <div className="max-w-3xl space-y-1.5">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
            Simple &amp; Transparent
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900">
            How Aapka Protects Families in 4 Steps
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            From the moment you contact our care desk to your safe discharge home, our team manages every operational detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {journeySteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-3xl bg-white/95 backdrop-blur-md border border-sky-100 shadow-xs hover:border-sky-300 hover:shadow-md transition-all flex flex-col justify-between space-y-4 relative overflow-hidden group"
              >
                <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-cyan-400 to-sky-500" />

                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-serif font-bold text-sky-700">
                      {step.number}
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-sky-50 border border-sky-200/60 flex items-center justify-center text-sky-700">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 font-serif">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Institutional Recognitions & Credentials */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-4 sm:space-y-5">
        <div className="max-w-3xl space-y-1.5">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
            National &amp; Global Validation
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900">
            Backed by Prestigious Institutions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Recognized by prominent business leadership bodies, government ministries, and national accelerators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {institutionalRecognitions.map((item, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-3xl bg-white/95 backdrop-blur-md border border-sky-100 shadow-xs hover:shadow-md hover:border-sky-300 transition-all space-y-2.5 relative overflow-hidden"
            >
              <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600" />
              <div className="flex items-center justify-between">
                <span className="text-[10.5px] font-bold uppercase tracking-wider bg-sky-50 text-sky-800 px-3 py-1 rounded-full border border-sky-200/70">
                  {item.badge}
                </span>
                <Award className="w-5 h-5 text-amber-500" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-serif">
                {item.name}
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                {item.highlight}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Reassuring Patient CTA */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="p-6 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-md border border-sky-100 text-slate-900 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xs relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600" />

          <div className="space-y-1.5 max-w-xl">
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-900">
              Have questions about a surgery package or need hospital advice?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our 24/7 care coordination desk provides free hospital verification, pre-admission tariff audits, and bedside support.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="tel:+918860880044"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 text-white font-semibold text-xs sm:text-sm tracking-tight transition-all shadow-md shadow-sky-600/20"
            >
              <PhoneCall className="w-4 h-4 text-cyan-100" />
              <span>Call Helpline: +91 88608 80044</span>
            </a>
            <Link
              to="/services"
              className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-900 font-semibold text-xs sm:text-sm tracking-tight transition-colors shadow-2xs"
            >
              Explore All Services →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
