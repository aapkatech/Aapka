import React from 'react';
import { UserCheck, Briefcase, Award, Shield } from 'lucide-react';

export const LeadershipTeam: React.FC = () => {
  const leaders = [
    {
      name: "Prabal Pratap Singh",
      role: "Co-Founder & CEO",
      bio: "Sets strategic direction, institutional partnerships, and ecosystem engagement. Decades of combined experience scaling rural access networks and social impact platforms.",
      responsibilities: [
        "Sets strategic direction & builds partnerships",
        "Experience in healthcare access & social impact",
        "Leads growth, operations & ecosystem engagement"
      ],
      affiliations: ["Goa Institute of Management (GIM)", "Hesa", "Indigram Labs", "DCM Shriram", "Adda247"],
      initials: "PS",
      color: "bg-teal-700 text-white"
    },
    {
      name: "Shruti Thakur",
      role: "Co-Founder & COO",
      bio: "Drives grassroots program execution and the rapid onboarding of the 1,270+ Gram Mitra network. Champion of rural women health facilitators and community outreach.",
      responsibilities: [
        "Leads day-to-day operations & clinical linkages",
        "Builds and manages the 1,270+ Gram Mitra network",
        "Drives program execution & community engagement"
      ],
      affiliations: ["Aim Foundation", "Indradhanusha Social Impact"],
      initials: "ST",
      color: "bg-amber-700 text-white"
    },
    {
      name: "Yudhishthir Sharma",
      role: "Co-Founder & CTO",
      bio: "Architects the AI hospital-matching engine, offline-first mobile tools for Gram Mitras, and longitudinal patient tracking systems.",
      responsibilities: [
        "Leads technology, data & product development",
        "Builds tools for patient identification & referral tracking",
        "Supports scale & replication in new tribal geographies"
      ],
      affiliations: ["Qualcomm", "HCL Technologies", "Kundan Group", "Aston University Birmingham UK"],
      initials: "YS",
      color: "bg-indigo-700 text-white"
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-slate-50/60 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-700 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
            <span>Leadership & Governance</span>
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.18]">
            Our Team
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
            A shared commitment, proven execution capability, and unified purpose to make healthcare accessible in tribal and rural communities.
          </p>
        </div>

        {/* 3 Co-Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-6">
                
                {/* Profile Header */}
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-2xl ${leader.color} flex items-center justify-center font-bold text-lg font-serif shadow-sm`}>
                    {leader.initials}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-serif">
                      {leader.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-teal-700">
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
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Core Focus</p>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {leader.responsibilities.map((r, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0 mt-1.5" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Pedigree & Affiliations Badges */}
              <div className="pt-6 mt-6 border-t border-slate-100 space-y-2">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Experience & Affiliations</p>
                <div className="flex flex-wrap gap-1.5">
                  {leader.affiliations.map((aff, aIdx) => (
                    <span 
                      key={aIdx} 
                      className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-medium border border-slate-200/60"
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
