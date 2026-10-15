import React from 'react';
import { ArrowRight, CheckCircle2, Shield } from 'lucide-react';

interface HeroProps {
  onSearch?: (query: string) => void;
  onOpenBooking: (serviceType?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative bg-white pt-12 pb-20 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-32 overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Value Proposition & High-Trust Copy */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Main Headline: Large, Bold, Commanding (#0f172a) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-bold text-slate-900 tracking-tight leading-[1.08] sm:leading-[1.1]">
              Your Family’s Health, Managed With{' '}
              <span className="text-slate-900 underline decoration-teal-500/30 decoration-wavy decoration-2 underline-offset-8">
                Care & Integrity.
              </span>
            </h1>

            {/* Reassuring Sub-headline */}
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl">
              Connecting you and your loved ones directly to top-tier doctors, seamless hospital coordination, and verified diagnostic services — anytime, anywhere.
            </p>

            {/* CTAs: High-Contrast Primary & Subtle Secondary Link */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <button
                type="button"
                onClick={() => onOpenBooking('consultation')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm tracking-tight shadow-lg shadow-slate-900/10 hover:shadow-xl transition-all cursor-pointer active:scale-[0.99]"
              >
                <span>Explore Our Care Network</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-teal-700 transition-colors group cursor-pointer py-2"
              >
                <span>How It Works</span>
                <span className="text-slate-400 group-hover:text-teal-700 group-hover:translate-x-1 transition-all">
                  →
                </span>
              </a>
            </div>

            {/* Micro-Trust Signal (Below CTAs) */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-medium text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>500+ Communities Supported</span>
              </div>
              <span className="hidden sm:inline text-slate-300">•</span>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-teal-600 shrink-0" />
                <span>100% Verified Healthcare Partners</span>
              </div>
            </div>

          </div>

          {/* Right Column: Warm, Trust-Building Multi-Generational Visual */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            
            {/* Visual Container */}
            <div className="relative w-full max-w-lg lg:max-w-none">
              
              {/* Main Multi-Generational Family Image */}
              <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-50 shadow-2xl shadow-slate-200/80">
                <img
                  src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80"
                  alt="Happy multi-generational family looking healthy and confident"
                  className="w-full h-[360px] sm:h-[440px] lg:h-[480px] object-cover object-center transform hover:scale-[1.01] transition-transform duration-700"
                  loading="eager"
                />

                {/* Subtle gradient vignette at the bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Reassurance Card (Overlay on Corner of Image) */}
              <div className="absolute -bottom-5 sm:-bottom-6 left-4 sm:left-6 right-4 sm:right-auto z-20">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-xl shadow-slate-900/10 flex items-center gap-3.5 sm:min-w-[280px]">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-slate-900 tracking-tight">
                        24/7 Care Support
                      </span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <p className="text-xs text-slate-500 font-normal mt-0.5">
                      Dedicated Clinical Navigators • Always On Call
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
