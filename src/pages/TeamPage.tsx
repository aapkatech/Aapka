import React from 'react';
import { 
  Mail, 
  User 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const LinkedInIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.67 1.67 0 1 0 0 3.34 1.67 1.67 0 0 0 0-3.34Z" />
  </svg>
);

interface LeaderCardProps {
  name: string;
  role: string;
  image: string;
  fallbackImage: string;
  linkedin: string;
  email: string;
  bio: string;
  priority?: boolean;
}

const LeaderCard: React.FC<LeaderCardProps> = ({
  name,
  role,
  image,
  fallbackImage,
  linkedin,
  email,
  bio,
  priority = false
}) => (
  <div className="flex flex-col text-left group">
    {/* Square Photo with Click-to-open LinkedIn Hover Interaction */}
    <a
      href={linkedin}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${name}'s LinkedIn profile`}
      title={`Click to open ${name}'s LinkedIn profile`}
      className="group/photo relative block w-full aspect-square rounded-2xl overflow-hidden bg-[#EAE7DF] border border-slate-200/90 shadow-2xs hover:shadow-xl transition-all duration-300 cursor-pointer"
    >
      <img 
        src={image} 
        alt={name}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = fallbackImage;
        }}
        className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover/photo:scale-105"
        loading={priority ? "eager" : "lazy"}
      />

      {/* Subtle resting LinkedIn pill hint in top-right */}
      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs text-[#0077b5] flex items-center justify-center shadow-xs border border-white/60 transition-opacity duration-300 group-hover/photo:opacity-0">
        <LinkedInIcon className="w-4 h-4" />
      </div>

      {/* Hover Overlay: Dark Tint + "Open LinkedIn" Pill */}
      <div className="absolute inset-0 bg-slate-950/45 backdrop-blur-[2px] opacity-0 group-hover/photo:opacity-100 transition-all duration-300 flex items-center justify-center p-4">
        <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0077b5] text-white text-xs font-semibold shadow-xl border border-white/20 transform translate-y-2 group-hover/photo:translate-y-0 transition-all duration-300">
          <LinkedInIcon className="w-4 h-4 fill-white shrink-0" />
          <span>Open LinkedIn ↗</span>
        </div>
      </div>
    </a>

    {/* Classic Editorial Typography matching IDEO reference */}
    <div className="mt-4 space-y-1">
      <div className="flex items-center justify-between gap-2">
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          {name}
        </h3>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name}'s LinkedIn`}
          title="Open LinkedIn"
          className="text-slate-400 hover:text-[#0077b5] transition-colors p-1"
        >
          <LinkedInIcon className="w-4 h-4" />
        </a>
      </div>
      <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-teal-700">
        {role}
      </p>
      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-1.5">
        {bio}
      </p>
      <div className="pt-2">
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 transition-colors"
        >
          <Mail className="w-3.5 h-3.5 text-slate-400" />
          <span>{email}</span>
        </a>
      </div>
    </div>
  </div>
);

export const TeamPage: React.FC = () => {
  // 1. The Founder (Prabal Pratap Singh)
  const founder = {
    name: "Prabal Pratap Singh",
    role: "Founder & Chief Executive Officer (CEO)",
    image: "/founders/prabal-pratap-singh.webp",
    fallbackImage: "/founders/prabal-pratap-singh.jpg",
    linkedin: "https://www.linkedin.com/in/aapkaprabal/",
    email: "prabal@aapka.co.in",
    bio: "Alumnus of Goa Institute of Management (GIM). Built and scaled rural access networks across Hesa Technologies, DCM Shriram, and Indigram Labs Foundation (DST, Govt. of India). Conceived Aapka to eliminate the critical emergency delay gap and middleman exploitation across rural Bharat, establishing 240+ verified partner hospitals."
  };

  // 2. Co-Founders (Shruti Thakur & Yudhishthir Sharma)
  const coFounders = [
    {
      name: "Shruti Thakur",
      role: "Co-Founder & Chief Operating Officer (COO)",
      image: "/founders/shruti-thakur.webp",
      fallbackImage: "/founders/shruti-thakur.jpg",
      linkedin: "https://www.linkedin.com/in/shruti-thakur-604a8422/",
      email: "shruti@aapka.co.in",
      bio: "Former leader at Aim Foundation and Indradhanusha Initiatives. Commands Aapka's on-ground operations, emergency triage desk, and the recruitment and training of 1,270+ certified Gram Mitras across 1,050+ villages, championing maternal health protocols and frontline patient navigation."
    },
    {
      name: "Yudhishthir Sharma",
      role: "Co-Founder & Chief Technology Officer (CTO)",
      image: "/founders/yudhishthir-sharma.webp",
      fallbackImage: "/founders/yudhishthir-sharma.jpg",
      linkedin: "https://www.linkedin.com/in/yudhishthir-sharma/",
      email: "yudhishthir@aapka.co.in",
      bio: "Alumnus of Aston University (UK) with global engineering leadership at Qualcomm and HCL Technologies. Architects Aapka's low-bandwidth mobile applications, automated hospital matching engine, and DPDP-compliant longitudinal patient health records for rural Bharat."
    }
  ];

  // 3. Core Operational Team (Meet the Team)
  const coreTeam = [
    {
      name: "Safalta",
      role: "Founder's Office",
      image: "" // Space reserved for photo
    },
    {
      name: "Bulbul",
      role: "Patient Counsellor",
      image: ""
    },
    {
      name: "Vishal Mishra",
      role: "AVP – Strategic Growth & Partnership",
      image: ""
    },
    {
      name: "Osama",
      role: "Business Development Executive (BDE)",
      image: ""
    },
    {
      name: "Deepak",
      role: "Business Manager",
      image: ""
    },
    {
      name: "Himanshu Sharma",
      role: "Business Development Executive (BDE)",
      image: ""
    },
    {
      name: "Upadhyay",
      role: "Patient Acquisition",
      image: ""
    },
    {
      name: "Tushar",
      role: "Patient Dealing",
      image: ""
    }
  ];

  return (
    <div className="py-12 sm:py-16 space-y-20 bg-white">
      
      {/* Page Header (Clean, Editorial) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-700 flex items-center justify-center gap-2">
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

      {/* SECTION 1: LEADERSHIP (FOUNDER ON TOP, CO-FOUNDERS SIDE-BY-SIDE BELOW) */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12 sm:space-y-16">
        
        {/* Founder on Top (Centered Square Portrait) */}
        <div className="max-w-sm mx-auto w-full">
          <LeaderCard
            name={founder.name}
            role={founder.role}
            image={founder.image}
            fallbackImage={founder.fallbackImage}
            linkedin={founder.linkedin}
            email={founder.email}
            bio={founder.bio}
            priority={true}
          />
        </div>

        {/* Co-Founders Just Bottom Side-by-Side (2 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 max-w-3xl mx-auto w-full pt-6 border-t border-slate-100">
          {coFounders.map((member, idx) => (
            <div key={idx} className="max-w-sm mx-auto w-full">
              <LeaderCard
                name={member.name}
                role={member.role}
                image={member.image}
                fallbackImage={member.fallbackImage}
                linkedin={member.linkedin}
                email={member.email}
                bio={member.bio}
              />
            </div>
          ))}
        </div>

      </section>

      {/* SECTION 2: MEET THE TEAM (CORE OPERATIONAL TEAM) */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12 pt-4">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
            Core Operations &amp; Growth
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">
            Meet the team
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-normal">
            The dedicated coordinators, counsellors, and business managers driving patient care across Bharat.
          </p>
        </div>

        {/* Circular Avatar Grid matching reference design */}
        <div className="flex flex-wrap justify-center gap-y-12 gap-x-8 sm:gap-x-12 lg:gap-x-14 max-w-5xl mx-auto">
          {coreTeam.map((member, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center text-center w-36 sm:w-44 group"
            >
              {/* Circular Portrait Frame (Space reserved for pic) */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-slate-100 border-2 border-slate-200/90 shadow-2xs mb-3 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-teal-600/40 group-hover:shadow-md">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-slate-200/80 text-slate-400">
                    <User className="w-10 h-10 sm:w-11 sm:h-11 stroke-[1.25] text-slate-400/80 transition-colors group-hover:text-teal-700/80" />
                  </div>
                )}
              </div>

              {/* Name */}
              <h3 className="text-sm sm:text-base font-semibold text-slate-900 tracking-tight leading-snug">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-xs text-slate-500 font-normal leading-relaxed mt-0.5 max-w-[155px]">
                {member.role}
              </p>
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

      {/* Connect with Team Banner */}
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
