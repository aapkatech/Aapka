import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const LeadershipTeam: React.FC = () => {
  const leaders = [
    {
      name: "Prabal Pratap Singh",
      role: "Co-Founder & CEO",
      image: "/founders/prabal-pratap-singh.webp",
      fallbackImage: "/founders/prabal-pratap-singh.jpg",
      bio: "Sets strategic direction, institutional partnerships, and ecosystem engagement. Decades of combined experience scaling rural access networks and social impact platforms.",
      responsibilities: [
        "Sets strategic direction & builds healthcare partnerships",
        "Experience in healthcare access & grassroots social impact",
        "Leads growth, operations & ecosystem engagement"
      ],
      affiliations: ["Goa Institute of Management (GIM)", "Hesa", "Indigram Labs", "DCM Shriram", "Adda247"],
      initials: "PS",
      badge: "CEO & Strategic Lead"
    },
    {
      name: "Shruti Thakur",
      role: "Co-Founder & COO",
      image: "/founders/shruti-thakur.webp",
      fallbackImage: "/founders/shruti-thakur.jpg",
      bio: "Drives grassroots program execution and the rapid onboarding of the 1,270+ Gram Mitra network. Champion of rural women health facilitators and community outreach.",
      responsibilities: [
        "Leads day-to-day operations & clinical linkages",
        "Builds and manages the 1,270+ Gram Mitra network",
        "Drives program execution & community engagement"
      ],
      affiliations: ["Aim Foundation", "Indradhanusha Social Impact"],
      initials: "ST",
      badge: "COO & Operations Lead"
    },
    {
      name: "Yudhishthir Sharma",
      role: "Co-Founder & CTO",
      image: "/founders/yudhishthir-sharma.webp",
      fallbackImage: "/founders/yudhishthir-sharma.jpg",
      bio: "Architects the AI hospital-matching engine, offline-first mobile tools for Gram Mitras, and longitudinal patient tracking systems.",
      responsibilities: [
        "Leads technology, data & product development",
        "Builds tools for patient identification & referral tracking",
        "Supports scale & replication in new tribal geographies"
      ],
      affiliations: ["Qualcomm", "HCL Technologies", "Kundan Group", "Aston University Birmingham UK"],
      initials: "YS",
      badge: "CTO & Technology Lead"
    }
  ];

  return (
    <section id="founders" className="py-20 sm:py-28 bg-slate-50/60 border-t border-slate-100 scroll-mt-20 relative">
      <div id="about" className="absolute -top-20" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        
        {/* Section Header: Explicitly Titled 'Founders' */}
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-700 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
            <span>Co-Founders &amp; Leadership</span>
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.18]">
            Founders
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
            A capable founding team, an established platform, and a shared purpose to build healthier, stronger tribal communities across India.
          </p>
        </div>

        {/* 3 Co-Founders Grid with Authentic Photos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-6">
                
                {/* Profile Header with Authentic Photo */}
                <div className="flex items-center gap-4">
                  <div className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-teal-600/20 shadow-sm shrink-0 bg-slate-100">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      onError={(e) => {
                        // Fallback to jpg if webp fails
                        const target = e.target as HTMLImageElement;
                        target.src = leader.fallbackImage;
                      }}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2 py-0.5 rounded-md border border-teal-200/60 inline-block">
                      {leader.badge}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight pt-0.5">
                      {leader.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-slate-600">
                      {leader.role}
                    </p>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {leader.bio}
                </p>

                {/* Key Responsibilities */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Core Strategic Focus</p>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {leader.responsibilities.map((r, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Pedigree & Affiliations Badges */}
              <div className="pt-6 mt-6 border-t border-slate-100 space-y-2">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Experience &amp; Affiliations</p>
                <div className="flex flex-wrap gap-1.5">
                  {leader.affiliations.map((aff, aIdx) => (
                    <span 
                      key={aIdx} 
                      className="px-2.5 py-1 rounded-md bg-slate-50 text-slate-700 text-[11px] font-medium border border-slate-200/70"
                    >
                      {aff}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Anchor Mission Statement */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 text-center text-xs sm:text-sm text-slate-700 max-w-3xl mx-auto shadow-2xs">
          <strong>People. Partnerships. Possibilities:</strong> A capable team, an established platform, and a shared purpose to build healthier, stronger tribal communities across Bharat.
        </div>

      </div>
    </section>
  );
};
