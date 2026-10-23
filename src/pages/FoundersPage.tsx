import React from 'react';
import { 
  Users, 
  CheckCircle2, 
  GraduationCap, 
  Briefcase, 
  Mail, 
  ArrowRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const FoundersPage: React.FC = () => {
  const founders = [
    {
      name: "Prabal Pratap Singh",
      role: "Co-Founder & Chief Executive Officer",
      tagline: "Connecting rural health vulnerability with reliable institutional care ecosystems.",
      image: "/founders/prabal-pratap-singh.webp",
      fallbackImage: "/founders/prabal-pratap-singh.jpg",
      bio: "Prabal leads the strategic vision, institutional partnerships, and government alignment at Aapka. With extensive leadership experience scaling rural access networks and social impact platforms, he has pioneered sustainable operational models that bring essential healthcare to India's hardest-to-reach families.",
      responsibilities: [
        "Architects strategic direction, healthcare alliances & hospital networks",
        "Leads state and national government scheme linkages (Ayushman Bharat / PM-JAY)",
        "Drives corporate governance, financial sustainability, and nationwide expansion",
        "Spearheads patient-first charter and pre-negotiated hospital tariff agreements"
      ],
      pedigree: [
        { label: "Education", val: "Goa Institute of Management (GIM)" },
        { label: "Rural Access", val: "Hesa Technologies (VP / Business Leadership)" },
        { label: "Incubation", val: "Indigram Labs Foundation / DST" },
        { label: "Enterprise", val: "DCM Shriram • Adda247" }
      ],
      badge: "CEO & Strategic Lead"
    },
    {
      name: "Shruti Thakur",
      role: "Co-Founder & Chief Operating Officer",
      tagline: "Empowering rural women and village youth into certified frontline health navigators.",
      image: "/founders/shruti-thakur.webp",
      fallbackImage: "/founders/shruti-thakur.jpg",
      bio: "Shruti commands Aapka's day-to-day operations and grassroots human network. She has spearheaded the recruitment, credentialing, and field supervision of over 1,270+ Gram Mitras across 1,050+ villages, turning community health advocacy into a source of dignified rural livelihood.",
      responsibilities: [
        "Manages on-ground operations across 1,270+ Gram Mitras & 1,050+ villages",
        "Oversees Basic Life Support (BLS) training and emergency medical triage protocols",
        "Directs clinical coordination desk and hospital patient escort teams",
        "Champions gender inclusion and financial independence for rural women"
      ],
      pedigree: [
        { label: "Social Impact", val: "Aim Foundation (Community Development)" },
        { label: "Grassroots", val: "Indradhanusha Social Impact Initiatives" },
        { label: "Operations", val: "1,270+ Field Cadres Managed" },
        { label: "Focus", val: "Maternal, Tribal & Emergency Health Protocols" }
      ],
      badge: "COO & Operations Lead"
    },
    {
      name: "Yudhishthir Sharma",
      role: "Co-Founder & Chief Technology Officer",
      tagline: "Architecting reliable, offline-first health technology for rural Bharat.",
      image: "/founders/yudhishthir-sharma.webp",
      fallbackImage: "/founders/yudhishthir-sharma.jpg",
      bio: "Yudhishthir oversees technology, product architecture, and care-routing algorithms at Aapka. Bringing extensive global engineering experience from Qualcomm and HCL Technologies, he designs low-bandwidth, offline-capable digital tools that connect remote village patients with tertiary specialists in real time.",
      responsibilities: [
        "Architects emergency hospital-matching and casualty pre-alert engines",
        "Develops low-bandwidth, offline-first mobile applications for Gram Mitras",
        "Builds secure patient health records compliant with the DPDP Act 2023",
        "Engineers diagnostic lab routing and telemetry data pipelines"
      ],
      pedigree: [
        { label: "Education", val: "Aston University, Birmingham, United Kingdom" },
        { label: "Global Tech", val: "Qualcomm • HCL Technologies" },
        { label: "Enterprise", val: "Kundan Group" },
        { label: "Specialty", val: "Distributed Systems & Mobile Health Infrastructure" }
      ],
      badge: "CTO & Technology Lead"
    }
  ];

  const milestones = [
    { num: "1,270+", label: "Gram Mitras Mobilized", desc: "Trained village cadres on duty" },
    { num: "1,050+", label: "Villages Served", desc: "Remote tribal & rural habitations" },
    { num: "240+", label: "Vetted Hospital Partners", desc: "Transparent pre-negotiated care" },
    { num: "1,040+", label: "Surgeries Facilitated", desc: "Safe, dignified hospital outcomes" }
  ];

  const institutionalBacking = [
    {
      title: "IIM Kashipur FIED",
      category: "Academic Incubation",
      desc: "Selected among top healthcare innovators under the prestigious Uttishtha Social Enterprise accelerator program."
    },
    {
      title: "FICCI Healthcare Summit",
      category: "Healthcare Excellence",
      desc: "Recognized by the Federation of Indian Chambers of Commerce & Industry for rural care coordination."
    },
    {
      title: "Indigram Labs Foundation",
      category: "Rural Technology Scaling",
      desc: "Supported by the DST-recognized incubation platform for grassroots health tech scale and livelihood enablement."
    },
    {
      title: "JNU Convention Centre",
      category: "Corporate Headquarters",
      desc: "Operating corporate research and institutional offices from Jawaharlal Nehru University, New Delhi."
    }
  ];

  return (
    <div className="bg-[#FAFAFA] min-h-screen text-slate-900">
      
      {/* 1. Seamless Hero Section Header (Full-Width Canvas, No Dark Floating Box) */}
      <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-8">
          
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
              Executive Leadership
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Meet the Founders Behind Aapka
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              A leadership team combining global engineering excellence, rural operational mastery, and an unwavering commitment to health equity for underserved families across India.
            </p>
          </div>

          {/* Clean Borderless Stat Bar */}
          <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 border-t border-slate-100">
            {milestones.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                  {stat.num}
                </p>
                <p className="text-xs font-bold uppercase tracking-wide text-teal-800">
                  {stat.label}
                </p>
                <p className="text-xs text-slate-500">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 2. Detailed Founders Showcase */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        <div className="space-y-12">
          {founders.map((founder, idx) => (
            <div 
              key={idx}
              className="p-8 sm:p-12 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
            >
              {/* Left: Authentic Portrait & Pedigree */}
              <div className="lg:col-span-4 space-y-6">
                <div className="relative aspect-4/5 max-w-[280px] lg:max-w-none rounded-2xl overflow-hidden border border-slate-200 shadow-xs bg-slate-100 mx-auto lg:mx-0">
                  <img 
                    src={founder.image} 
                    alt={founder.name}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = founder.fallbackImage;
                    }}
                    className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent p-4 text-white">
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-teal-600 px-2.5 py-1 rounded text-white shadow-xs inline-block">
                      {founder.badge}
                    </span>
                  </div>
                </div>

                {/* Pedigree Card */}
                <div className="p-5 rounded-xl bg-slate-50/80 border border-slate-200/70 space-y-3">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-teal-700" />
                    <span>Credentials &amp; Pedigree</span>
                  </p>
                  <div className="space-y-2.5 text-xs">
                    {founder.pedigree.map((item, pIdx) => (
                      <div key={pIdx} className="flex flex-col pb-2 border-b border-slate-200/60 last:border-b-0 last:pb-0">
                        <span className="text-slate-400 text-[10px] uppercase font-semibold">{item.label}</span>
                        <span className="text-slate-900 font-semibold">{item.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Bio & Key Responsibilities */}
              <div className="lg:col-span-8 space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {founder.name}
                  </h2>
                  <p className="text-sm sm:text-base font-semibold text-teal-700">
                    {founder.role}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500 italic">
                    "{founder.tagline}"
                  </p>
                </div>

                <div className="text-sm sm:text-base text-slate-600 leading-relaxed space-y-3">
                  <p>{founder.bio}</p>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-teal-700" />
                    <span>Core Responsibilities &amp; Focus</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {founder.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50/70 border border-slate-200/70 text-xs text-slate-700">
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

      {/* 3. Institutional Ecosystem & Incubation Partners */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
              Institutional Ecosystem
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
              Incubated &amp; Supported By Leading Institutions
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Our founders are guided by top academic accelerators, national healthcare forums, and rural innovation institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {institutionalBacking.map((item, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-[#FAFAFA] border border-slate-200/90 hover:border-slate-300 hover:shadow-xs transition-all space-y-2.5"
              >
                <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wide">
                  {item.category}
                </span>
                <h3 className="text-base font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Full-Width Direct Leadership Contact (Seamless Full-Bleed) */}
      <section className="w-full bg-[#0B132B] text-white py-16 sm:py-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Institutional &amp; Impact Partnerships</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Connect Directly with the Founding Team
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Interested in CSR collaboration, district-wide tribal healthcare pilots, or hospital network empanelment? We welcome meaningful conversations.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs tracking-tight transition-colors shadow-sm"
            >
              Get in Touch
            </Link>
            <a
              href="mailto:prabal@aapka.co.in"
              className="px-6 py-3 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-white font-semibold text-xs tracking-tight transition-colors border border-slate-700 flex items-center gap-2"
            >
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span>prabal@aapka.co.in</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
