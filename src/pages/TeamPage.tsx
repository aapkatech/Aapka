import React from 'react';
import { 
  CheckCircle2, 
  GraduationCap, 
  Briefcase, 
  Mail, 
  ShieldCheck,
  Users
} from 'lucide-react';
import { Link } from 'react-router-dom';

const LinkedInIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.67 1.67 0 1 0 0 3.34 1.67 1.67 0 0 0 0-3.34Z" />
  </svg>
);

export const TeamPage: React.FC = () => {
  // 1. The Founder (Only Prabal Pratap Singh)
  const founder = {
    name: "Prabal Pratap Singh",
    role: "Founder & Chief Executive Officer (CEO)",
    badge: "Founder & CEO",
    tagline: "Bridging the rural emergency delay gap with dignified, transparent healthcare access for every family in Bharat.",
    image: "/founders/prabal-pratap-singh.webp",
    fallbackImage: "/founders/prabal-pratap-singh.jpg",
    linkedin: "https://www.linkedin.com/in/prabal-pratap-singh/",
    email: "prabal@aapka.co.in",
    bio: [
      "Prabal Pratap Singh is the Founder and Chief Executive Officer of Aapka (SP Rural India Services Private Limited). Driven by a first-hand understanding of rural health vulnerability in India's heartland, he conceived Aapka to solve the tragic 60–75 minute delay gap that often turns treatable medical emergencies into catastrophic loss of life.",
      "An alumnus of the Goa Institute of Management (GIM), Prabal brings extensive leadership experience at the intersection of rural access platforms, grassroots distribution, and agri-fintech. Prior to founding Aapka, he spearheaded large-scale rural enablement networks at Hesa Technologies, served in key corporate leadership roles at DCM Shriram and Adda247, and incubated social innovation models supported by Indigram Labs Foundation (under the Department of Science & Technology, Government of India).",
      "Under his leadership, Aapka has forged a verified network of 240+ partner hospitals, pioneered contractual zero-gouging patient charters, linked rural families to government health entitlements (Ayushman Bharat / PMJAY), and created dignified healthcare navigation pathways that eliminate middleman exploitation across 20+ cities."
    ],
    mandates: [
      "Architects strategic vision, national healthcare roadmap & ecosystem partnerships",
      "Leads state and national government scheme linkages (Ayushman Bharat / PMJAY)",
      "Spearheads patient-first charter and hospital tariff pre-negotiation",
      "Drives corporate governance, capital allocation, and social impact scale"
    ],
    pedigree: [
      { label: "Education", val: "Goa Institute of Management (GIM)" },
      { label: "Past Leadership", val: "Hesa Technologies (Rural Enablement & Access)" },
      { label: "Incubation", val: "Indigram Labs Foundation / DST, Govt. of India" },
      { label: "Corporate", val: "DCM Shriram • Adda247" }
    ]
  };

  // 2. Co-Founders & Core Leadership Team
  const coFounders = [
    {
      name: "Shruti Thakur",
      role: "Co-Founder & Chief Operating Officer (COO)",
      badge: "Co-Founder & COO",
      tagline: "Empowering rural women and village youth into certified frontline health navigators.",
      image: "/founders/shruti-thakur.webp",
      fallbackImage: "/founders/shruti-thakur.jpg",
      linkedin: "https://www.linkedin.com/in/shruti-thakur-aapka/",
      email: "shruti@aapka.co.in",
      bio: "Shruti commands Aapka's day-to-day operations and grassroots human infrastructure. She has spearheaded the recruitment, credentialing, and field supervision of over 1,270+ Gram Mitras across 1,050+ villages, turning community health advocacy into a dignified local livelihood. Bringing extensive experience from the Aim Foundation and Indradhanusha Social Impact Initiatives, she champions women-led healthcare facilitation, maternal care protocols, and patient escort support.",
      responsibilities: [
        "Manages on-ground operations across 1,270+ Gram Mitras & 1,050+ villages",
        "Oversees Basic Life Support (BLS) training and emergency medical triage workflows",
        "Directs clinical coordination desk and hospital patient escort teams",
        "Champions gender inclusion and economic empowerment for village women"
      ],
      pedigree: [
        { label: "Social Impact", val: "Aim Foundation (Community Development)" },
        { label: "Grassroots", val: "Indradhanusha Social Impact Initiatives" },
        { label: "Operations", val: "1,270+ Field Cadres Managed" },
        { label: "Focus", val: "Maternal, Tribal & Emergency Health Protocols" }
      ]
    },
    {
      name: "Yudhishthir Sharma",
      role: "Co-Founder & Chief Technology Officer (CTO)",
      badge: "Co-Founder & CTO",
      tagline: "Architecting zero-connectivity, high-reliability health infrastructure for rural Bharat.",
      image: "/founders/yudhishthir-sharma.webp",
      fallbackImage: "/founders/yudhishthir-sharma.jpg",
      linkedin: "https://www.linkedin.com/in/yudhishthir-sharma/",
      email: "yudhishthir@aapka.co.in",
      bio: "Yudhishthir oversees technology, product architecture, and algorithmic healthcare matching at Aapka. Bringing extensive global engineering experience from Qualcomm and HCL Technologies, and academic background from Aston University (Birmingham, UK), he designs offline-capable digital platforms that connect remote village patients with urban tertiary care centers in real time with stringent data privacy standards.",
      responsibilities: [
        "Architects the AI hospital-matching and casualty pre-notification engine",
        "Develops low-bandwidth, offline-first mobile applications for Gram Mitras",
        "Builds secure longitudinal patient health records under DPDP Act 2023 compliance",
        "Engineers scalable diagnostic routing and telemetry data pipelines"
      ],
      pedigree: [
        { label: "Education", val: "Aston University, Birmingham, United Kingdom" },
        { label: "Global Tech", val: "Qualcomm • HCL Technologies" },
        { label: "Enterprise", val: "Kundan Group" },
        { label: "Specialty", val: "Distributed Systems & Health Tech Mobility" }
      ]
    }
  ];

  return (
    <div className="py-12 sm:py-16 space-y-20 bg-white">
      
      {/* Page Header (Clean, Human, No Metrics Box) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-700 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
            <span>Leadership &amp; Execution</span>
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.18]">
            Our Team
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Meet the dedicated leadership, operations, and technology team committed to transforming rural and tribal healthcare access across Bharat.
          </p>
        </div>
      </div>

      {/* SECTION 1: THE FOUNDER (PRABAL PRATAP SINGH) */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-8">
        <div className="border-b border-slate-200 pb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700">Vision &amp; Leadership</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">
            The Founder
          </h2>
        </div>

        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Portrait, Badges, Links & Credentials */}
          <div className="lg:col-span-4 space-y-6">
            <div className="relative aspect-4/5 max-w-[280px] lg:max-w-none rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50 mx-auto lg:mx-0">
              <img 
                src={founder.image} 
                alt={founder.name}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = founder.fallbackImage;
                }}
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                loading="eager"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent p-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-teal-600 px-2.5 py-0.5 rounded text-white shadow-xs">
                  {founder.badge}
                </span>
              </div>
            </div>

            {/* Direct Connect Buttons: LinkedIn & Email */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 pt-1">
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0077b5] hover:bg-[#006097] text-white text-xs font-semibold transition-colors shadow-xs"
              >
                <LinkedInIcon className="w-4 h-4" />
                <span>Connect on LinkedIn</span>
              </a>
              <a
                href={`mailto:${founder.email}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                <span>{founder.email}</span>
              </a>
            </div>

            {/* Pedigree & Credentials */}
            <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 space-y-3">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-teal-700" />
                <span>Credentials &amp; Pedigree</span>
              </p>
              <div className="space-y-2 text-xs">
                {founder.pedigree.map((item, pIdx) => (
                  <div key={pIdx} className="flex flex-col pb-2 border-b border-slate-200/60 last:border-b-0 last:pb-0">
                    <span className="text-slate-400 text-[10px] uppercase font-semibold">{item.label}</span>
                    <span className="text-slate-800 font-medium">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Deep & Proper Biography of Prabal Sir */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-teal-800 text-xs font-semibold border border-teal-200/60">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                <span>Aapka Founder</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                {founder.name}
              </h3>
              <p className="text-sm sm:text-base font-semibold text-teal-700">
                {founder.role}
              </p>
              <p className="text-xs sm:text-sm text-slate-500 italic">
                "{founder.tagline}"
              </p>
            </div>

            <div className="space-y-4 text-sm text-slate-600 leading-relaxed font-normal">
              {founder.bio.map((paragraph, bIdx) => (
                <p key={bIdx}>{paragraph}</p>
              ))}
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-teal-600" />
                <span>Strategic Mandate &amp; Governance</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {founder.mandates.map((resp, rIdx) => (
                  <div key={rIdx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50/80 border border-slate-200/80 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span className="leading-snug">{resp}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: CO-FOUNDERS & CORE LEADERSHIP TEAM */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-8">
        <div className="border-b border-slate-200 pb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700">Operations &amp; Engineering</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">
            Co-Founders &amp; Leadership Team
          </h2>
        </div>

        <div className="space-y-12">
          {coFounders.map((member, idx) => (
            <div 
              key={idx}
              className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
            >
              {/* Left Column: Portrait & Credentials */}
              <div className="lg:col-span-4 space-y-6">
                <div className="relative aspect-4/5 max-w-[280px] lg:max-w-none rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50 mx-auto lg:mx-0">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = member.fallbackImage;
                    }}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent p-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-teal-600 px-2.5 py-0.5 rounded text-white shadow-xs">
                      {member.badge}
                    </span>
                  </div>
                </div>

                {/* Direct Connect Buttons: LinkedIn & Email */}
                <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 pt-1">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0077b5] hover:bg-[#006097] text-white text-xs font-semibold transition-colors shadow-xs"
                  >
                    <LinkedInIcon className="w-4 h-4" />
                    <span>Connect on LinkedIn</span>
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-slate-500" />
                    <span>{member.email}</span>
                  </a>
                </div>

                {/* Pedigree & Affiliations Card */}
                <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 space-y-3">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-teal-700" />
                    <span>Credentials &amp; Pedigree</span>
                  </p>
                  <div className="space-y-2 text-xs">
                    {member.pedigree.map((item, pIdx) => (
                      <div key={pIdx} className="flex flex-col pb-2 border-b border-slate-200/60 last:border-b-0 last:pb-0">
                        <span className="text-slate-400 text-[10px] uppercase font-semibold">{item.label}</span>
                        <span className="text-slate-800 font-medium">{item.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Bio & Core Focus */}
              <div className="lg:col-span-8 space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-teal-800 text-xs font-semibold border border-teal-200/60">
                    <Users className="w-3.5 h-3.5 text-teal-600" />
                    <span>Leadership Team</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                    {member.name}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-teal-700">
                    {member.role}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500 italic">
                    "{member.tagline}"
                  </p>
                </div>

                <div className="text-sm text-slate-600 leading-relaxed font-normal">
                  <p>{member.bio}</p>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-200">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-teal-600" />
                    <span>Key Focus Areas &amp; Execution</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {member.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50/80 border border-slate-200/80 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Advisory & Institutional Incubation Recognition */}
      <section className="py-16 sm:py-20 bg-slate-50/70 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-10">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
              Institutional Ecosystem
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900">
              Incubated, Recognized &amp; Supported By India's Best
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Our team is guided by seasoned academic advisors, national incubation hubs, and social health innovators across the country.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
              <span className="text-xs font-bold text-teal-700 uppercase">Academic Incubation</span>
              <h3 className="text-base font-bold text-slate-900 font-serif">IIM Kashipur FIED</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Selected among top healthcare innovators under the Uttishtha Social Enterprise accelerator program.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
              <span className="text-xs font-bold text-teal-700 uppercase">National Healthcare</span>
              <h3 className="text-base font-bold text-slate-900 font-serif">FICCI Healthcare</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Recognized at the Federation of Indian Chambers of Commerce &amp; Industry healthcare excellence summit.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
              <span className="text-xs font-bold text-teal-700 uppercase">Agri &amp; Rural Access</span>
              <h3 className="text-base font-bold text-slate-900 font-serif">Indigram Labs</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Supported by the DST-recognized Indigram Labs Foundation for rural technology scaling and livelihood creation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
              <span className="text-xs font-bold text-teal-700 uppercase">University Hub</span>
              <h3 className="text-base font-bold text-slate-900 font-serif">JNU Convention Centre</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Operating corporate and research facilities from Jawaharlal Nehru University Convention Centre, New Delhi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Connect with Team Banner (Clean White Background) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="p-8 sm:p-12 rounded-3xl bg-white text-slate-900 flex flex-col md:flex-row md:items-center justify-between gap-8 shadow-sm border border-slate-200/90">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs uppercase font-semibold tracking-wider text-teal-700">Institutional &amp; Impact Dialogue</span>
            <h3 className="text-xl sm:text-2xl font-semibold font-serif text-slate-900">Connect directly with our Leadership</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Interested in CSR collaboration, district-wide healthcare pilots, hospital network empanelment, or investing in rural health equity?
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs sm:text-sm tracking-tight transition-colors shadow-xs"
            >
              Get in Touch with Team
            </Link>
            <a
              href="mailto:prabal@aapka.co.in"
              className="px-6 py-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 font-medium text-xs sm:text-sm tracking-tight transition-colors border border-slate-200 flex items-center gap-2"
            >
              <Mail className="w-3.5 h-3.5 text-slate-500" />
              <span>prabal@aapka.co.in</span>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};
