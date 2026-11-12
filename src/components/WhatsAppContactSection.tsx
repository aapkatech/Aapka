import React from 'react';
import { PhoneCall, CheckCircle2, ShieldCheck } from 'lucide-react';

export const WhatsAppIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg 
    className={className} 
    fill="currentColor" 
    viewBox="0 0 24 24" 
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.677.15-.2.301-.777.978-.952 1.179-.176.2-.351.226-.652.075-.301-.15-1.27-.468-2.42-1.493-.895-.798-1.5-1.784-1.676-2.085-.175-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.151-.175.2-.301.301-.501.101-.2.05-.376-.025-.526-.075-.15-.677-1.632-.927-2.234-.244-.587-.492-.507-.677-.516-.175-.009-.376-.011-.577-.011-.201 0-.527.075-.802.376-.276.301-1.053 1.028-1.053 2.508 0 1.479 1.078 2.908 1.229 3.109.15.2 2.122 3.24 5.141 4.544.718.31 1.279.496 1.716.635.722.23 1.379.197 1.9.12.58-.087 1.78-.727 2.03-1.43.251-.702.251-1.304.176-1.43-.075-.126-.276-.201-.577-.351zM12.04 2C6.516 2 2.028 6.488 2.028 12.012c0 1.905.534 3.684 1.464 5.204L2 22l4.945-1.43a9.96 9.96 0 0 0 5.095 1.442h.005c5.524 0 10.012-4.488 10.012-10.012C22.057 6.488 17.564 2 12.04 2zm0 18.23h-.004a8.21 8.21 0 0 1-4.186-1.149l-.3-.178-3.111.9 1.002-3.032-.195-.31a8.195 8.195 0 0 1-1.258-4.449c0-4.542 3.696-8.238 8.242-8.238 2.2 0 4.269.858 5.824 2.414a8.19 8.19 0 0 1 2.41 5.824c0 4.543-3.696 8.238-8.424 8.238z" />
  </svg>
);

export const WhatsAppContactSection: React.FC = () => {
  const whatsappNumber = "9667033044";
  const formattedWhatsApp = "+91 96670 33044";
  const callingHelpline = "8860880044";
  const formattedHelpline = "+91 88608 80044";
  const whatsappUrl = `https://wa.me/91${whatsappNumber}?text=Hello%20Aapka%20Team%2C%20I%20would%20like%20to%20connect%20for%20healthcare%20guidance.`;

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50/70 via-white to-teal-50/60 text-slate-900 p-8 sm:p-12 lg:p-16 shadow-sm border border-emerald-200/90">
          
          {/* Subtle Warm Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300/80 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                <span>24/7 Human Care Coordination</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.18]">
                Need Immediate Healthcare Guidance?
              </h2>

              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
                Connect directly with our care coordinators on WhatsApp or call our emergency helpline. Whether you need an emergency bed, specialist doctor routing, or hospital tariff audit, our team is right beside you.
              </p>

              {/* Trust Badges */}
              <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm font-medium text-slate-700">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>100% Free Patient Guidance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>50+ Vetted Partner Hospitals</span>
                </div>
              </div>
            </div>

            {/* Right Action Box: High-Trust White Consultation Card */}
            <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center gap-4">
              <div className="w-full sm:w-auto p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-md text-center sm:text-left space-y-4 w-full">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700 block">
                    Direct Calling Helpline Number
                  </span>
                  <div className="text-2xl sm:text-3xl font-bold font-serif text-slate-950 tracking-tight">
                    {formattedHelpline}
                  </div>
                </div>

                <div className="flex flex-col gap-2.5 pt-1">
                  {/* Primary WhatsApp CTA Button */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-slate-950 font-bold text-sm sm:text-base tracking-tight shadow-xs hover:shadow transition-all duration-200 cursor-pointer group"
                  >
                    <WhatsAppIcon className="w-5 h-5 fill-slate-950 group-hover:scale-110 transition-transform shrink-0" />
                    <span>Contact on WhatsApp</span>
                  </a>

                  {/* Secondary Call Direct to Helpline */}
                  <a
                    href={`tel:+91${callingHelpline}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm tracking-tight transition-colors shadow-xs"
                  >
                    <PhoneCall className="w-4 h-4 text-teal-300" />
                    <span>Call Helpline: {formattedHelpline}</span>
                  </a>
                </div>

                <p className="text-[11px] text-slate-500 text-center leading-snug">
                  WhatsApp: {formattedWhatsApp} • Helpline: {formattedHelpline}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
