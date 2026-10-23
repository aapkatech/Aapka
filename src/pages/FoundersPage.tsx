import React from 'react';
import { 
  Users, 
  Award, 
  CheckCircle2, 
  GraduationCap, 
  Briefcase, 
  Building2, 
  HeartHandshake, 
  Mail, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const FoundersPage: React.FC = () => {
  const founders = [
    {
      name: "Prabal Pratap Singh",
      role: "Co-Founder & Chief Executive Officer",
      tagline: "Visionary leadership bridging rural health vulnerability with institutional healthcare ecosystems.",
      image: "/founders/prabal-pratap-singh.webp",
      fallbackImage: "/founders/prabal-pratap-singh.jpg",
      bio: "Prabal leads the strategic vision, institutional partnerships, and government alignment at Aapka. With deep domain expertise across rural access platforms, agri-fintech, and grassroots social development, he has pioneered scalable outreach models that bring essential services to India's hardest-to-reach populations.",
      responsibilities: [
        "Architects strategic direction, healthcare institutional alliances & hospital partnerships",
        "Leads state and national government scheme linkages (Ayushman Bharat / PMJAY)",
        "Drives corporate governance, fundraising, and nationwide replication strategy",
        "Spearheads patient-first charter and hospital tariff pre-negotiation"
      ],
      pedigree: [
        { label: "Education", val: "Goa Institute of Management (GIM)" },
        { label: "Leadership", val: "Hesa Technologies (Rural Commerce & Access)" },
        { label: "Incubation", val: "Indigram Labs Foundation / DST" },
        { label: "Corporate", val: "DCM Shriram • Adda247" }
      ],
      badge: "Co-Founder & CEO"
    },
    {
      name: "Shruti Thakur",
      role: "Co-Founder & Chief Operating Officer",
      tagline: "Empowering rural women and village youth into certified frontline health navigators.",
      image: "/founders/shruti-thakur.webp",
      fallbackImage: "/founders/shruti-thakur.jpg",
      bio: "Shruti commands Aapka's day-to-day operations and grassroots human infrastructure. She has spearheaded the recruitment, credentialing, and field supervision of over 1,270+ Gram Mitras across 1,050+ villages, turning community health advocacy into a dignified local livelihood.",
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
      ],
      badge: "Co-Founder & COO"
    },
    {
      name: "Yudhishthir Sharma",
      role: "Co-Founder & Chief Technology Officer",
      tagline: "Architecting zero-connectivity, high-reliability health infrastructure for rural Bharat.",
      image: "/founders/yudhishthir-sharma.webp",
      fallbackImage: "/founders/yudhishthir-sharma.jpg",
      bio: "Yudhishthir oversees technology, product architecture, and algorithmic healthcare matching at Aapka. Bringing extensive global engineering experience from Qualcomm and HCL, he designs offline-capable digital platforms that connect remote village patients with urban tertiary care centers in real time.",
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
      ],
      badge: "Co-Founder & CTO"
    }
  ];

  const milestones = [
    { num: "1,270+", label: "Gram Mitras Mobilized", desc: "Trained village cadres on duty" },
    { num: "1,050+", label: "Villages Served", desc: "Remote tribal & rural habitations" },
    { num: "240+", label: "Vetted Hospital Partners", desc: "Transparent pre-negotiated care" },
    { num: "1,040+", label: "Surgeries Facilitated", desc: "Safe, dignified hospital outcomes" }
  ];

  return (
    <div className="py-12 sm:py-16 space-y-20 bg-white">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-tr from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden border border-slate-800 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold border border-amber-500/30">
              <Users className="w-3.5 h-3.5" />
              <span>Dedicated Webpage • Executive Leadership</span>
            </div>
            
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Meet the Founders Behind Aapka
            </h1>
            
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              A multidisciplinary leadership team combining tier-one corporate engineering, grassroots operational mastery, and rural healthcare access advocacy.
            </p>

            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-800">
              {milestones.map((m, idx) => (
                <div key={idx} className="space-y-0.5">
                  <p className="text-2xl sm:text-3xl font-bold font-serif text-teal-400">{m.num}</p>
                  <p className="text-xs font-semibold text-white">{m.label}</p>
                  <p className="text-[11px] text-slate-400">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Founders In-Depth Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        <div className="space-y-12">
          {founders.map((founder, idx) => (
            <div 
              key={idx}
              className="p-8 sm:p-12 rounded-3xl bg-slate-50/70 border border-slate-200/90 shadow-sm hover:shadow-md transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
            >
              {/* Left Column: Authentic Portrait & Badges */}
              <div className="lg:col-span-4 space-y-6">
                <div className="relative aspect-4/5 max-w-[280px] lg:max-w-none rounded-2xl overflow-hidden border-2 border-slate-200 shadow-md bg-white mx-auto lg:mx-0">
                  <img 
                    src={founder.image} 
                    alt={founder.name}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = founder.fallbackImage;
                    }}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 to-transparent p-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-teal-600 px-2.5 py-0.5 rounded text-white shadow-xs">
                      {founder.badge}
                    </span>
                  </div>
                </div>

                {/* Pedigree & Affiliations Card */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 space-y-3">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-slate-500" />
                    <span>Credentials &amp; Pedigree</span>
                  </p>
                  <div className="space-y-2 text-xs">
                    {founder.pedigree.map((item, pIdx) => (
                      <div key={pIdx} className="flex flex-col pb-2 border-b border-slate-100 last:border-b-0 last:pb-0">
                        <span className="text-slate-400 text-[10px] uppercase font-semibold">{item.label}</span>
                        <span className="text-slate-800 font-medium">{item.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Bio, Vision, & Responsibilities */}
              <div className="lg:col-span-8 space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-teal-800 text-xs font-semibold border border-teal-200/60">
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                    <span>Founding Leadership</span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                    {founder.name}
                  </h2>
                  <p className="text-sm sm:text-base font-semibold text-teal-700">
                    {founder.role}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500 italic">
                    "{founder.tagline}"
                  </p>
                </div>

                <div className="prose prose-sm text-slate-600 leading-relaxed max-w-none">
                  <p>{founder.bio}</p>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-200">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-teal-600" />
                    <span>Core Responsibilities &amp; Strategic Mandate</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {founder.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80 text-xs text-slate-700">
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
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Our founders are guided by seasoned academic advisors, national incubation hubs, and social health innovators across the country.
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

      {/* Bottom Connect with Leadership Card */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row md:items-center justify-between gap-8 shadow-xl border border-slate-800">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs uppercase font-bold tracking-wider text-amber-400">Institutional &amp; Impact Dialogue</span>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">Connect directly with the Founders</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Interested in CSR collaboration, district-wide healthcare pilots, hospital network empanelment, or investing in rural health equity?
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs tracking-tight transition-colors shadow-md"
            >
              Get in Touch with Founders
            </Link>
            <a
              href="mailto:prabal@aapka.co.in"
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs tracking-tight transition-colors border border-slate-700 flex items-center gap-2"
            >
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span>prabal@aapka.co.in</span>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};
