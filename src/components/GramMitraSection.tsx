import React from 'react';
import { 
  Users, 
  HeartHandshake, 
  Megaphone, 
  Heart, 
  Wind, 
  Droplets, 
  Award, 
  BookOpen, 
  Smartphone, 
  GraduationCap 
} from 'lucide-react';

export const GramMitraSection: React.FC = () => {
  const pillars = [
    {
      title: "Trusted Local Presence",
      desc: "Gram Mitras live inside the village. They are trusted neighbors who eliminate bureaucratic hesitation and help families seek timely care without fear.",
      icon: Users,
      badge: "Community-Rooted"
    },
    {
      title: "Healthcare Guidance & Navigation",
      desc: "End-to-end support with hospital discovery, pre-registration, appointment booking, bed staging, and post-discharge follow-ups.",
      icon: HeartHandshake,
      badge: "Care Navigation"
    },
    {
      title: "Community Awareness & Schemes",
      desc: "Educating families on maternal & child health, immunization, nutrition, and enrolling eligible households into government health schemes.",
      icon: Megaphone,
      badge: "Preventive Health"
    }
  ];

  const blsSkills = [
    {
      title: "Basic Life Support (BLS)",
      desc: "Chest compressions and emergency vital stabilization during acute medical events.",
      icon: Heart,
      color: "text-rose-600 bg-rose-50 border-rose-200/60"
    },
    {
      title: "Choking Management",
      desc: "Rapid airway clearing protocols for infants, children, and elderly villagers.",
      icon: Wind,
      color: "text-sky-600 bg-sky-50 border-sky-200/60"
    },
    {
      title: "Bleeding & Trauma Control",
      desc: "Hemostatic pressure dressing and first-aid stabilization before ambulance arrival.",
      icon: Droplets,
      color: "text-amber-600 bg-amber-50 border-amber-200/60"
    }
  ];

  const methodologyPoints = [
    {
      title: "Localized Digital Modules",
      desc: "Short, visual video modules optimized for low-bandwidth 4G phones.",
      icon: Smartphone
    },
    {
      title: "Standardized Field Toolkits",
      desc: "Physical handbooks, pictorial job aids, and emergency protocol guides.",
      icon: BookOpen
    },
    {
      title: "Certified Master Trainers",
      desc: "Hands-on simulation drills with CPR manikins for verified certification.",
      icon: GraduationCap
    }
  ];

  return (
    <section id="gram-mitra" className="py-20 sm:py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-700 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
            <span>Human-Centric Healthcare Infrastructure</span>
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.18]">
            Gram Mitra: <span className="text-teal-700 font-medium">Aapka's Strength on the Ground</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
            Local community members trained and empowered to connect remote villages with verified hospitals, building healthier and more resilient communities.
          </p>
        </div>

        {/* 3 Core Roles of Gram Mitra */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-8 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200/60 flex items-center justify-center text-teal-700">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-600 bg-white px-2.5 py-1 rounded-full border border-slate-200/80">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/50 flex items-center gap-1.5 text-xs font-medium text-teal-800">
                  <span>1,270+ active village facilitators</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Specialized BLS Training Section */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-tr from-slate-900 via-slate-950 to-slate-900 text-white border border-slate-800 shadow-xl space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-8">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold border border-teal-500/30">
                <Award className="w-3.5 h-3.5" />
                <span>Life-Saving First Responder Skills</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-white">
                BLS (Basic Life Support) Training for Gram Mitras
              </h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Equipping village youth and women facilitators with essential emergency response skills so immediate intervention begins before transport arrives.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center shrink-0">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 block">Sankalp Bharat Grant</span>
              <span className="text-xl font-bold text-teal-400 font-serif">₹10 Lakh Innovation Focus</span>
            </div>
          </div>

          {/* 3 BLS Skills */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blsSkills.map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${skill.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-semibold text-white">
                      {skill.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {skill.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Scalable Training Methodology */}
          <div className="pt-6 border-t border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-6">
            {methodologyPoints.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center shrink-0 border border-teal-500/20">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-white">{m.title}</h5>
                    <p className="text-xs text-slate-400 leading-relaxed mt-0.5">{m.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-4 rounded-xl bg-teal-950/40 border border-teal-700/30 text-center text-xs sm:text-sm text-teal-200">
            <strong>Stronger Villages, Healthier Communities:</strong> With the right training and digital support, Gram Mitras create safer, more health-aware, and more resilient tribal villages.
          </div>

        </div>

      </div>
    </section>
  );
};
