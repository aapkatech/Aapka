import React, { useState } from 'react';
import { Trophy, X, ExternalLink, Newspaper, CheckCircle2 } from 'lucide-react';
import type { Translations } from '../i18n/translations';

interface QuietProofProps {
  t?: Translations['proof'];
}

export const QuietProof: React.FC<QuietProofProps> = ({ t: _t }) => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string; title: string } | null>(null);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedImage) {
        setSelectedImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  // Key photo awards with verified ceremony photography
  const photoAwards = [
    {
      id: "swati-rai",
      title: "Swati Rai Award for Excellence in Entrepreneurship",
      badge: "WINNER 2024 (₹10 Lakh)",
      organization: "Sankalp Bharat Summit 2024",
      description: "Winners of the prestigious Swati Rai Award (1st prize of ₹10 lakh) for Excellence in Entrepreneurship, driving healthcare access to rural & tribal Bharat.",
      image: "/awards/swati-rai-sankalp-photo.png"
    },
    {
      id: "ficci",
      title: "FICCI Healthcare Excellence Awards",
      badge: "FINALIST (TOP 3)",
      organization: "FICCI New Delhi",
      description: "Top 3 Finalist in Patient Service Delivery at the national FICCI Healthcare India Excellence Awards, evaluated by eminent healthcare leaders.",
      image: "/awards/ficci-healthcare-photo.png"
    },
    {
      id: "iim-kashipur",
      title: "Scale UP Pitchathon — Uththistha 2024",
      badge: "1st RUNNER-UP",
      organization: "IIM Kashipur",
      description: "Recognized as first runner-up among 70 competitive startups at the Scale UP pitchathon at Uththistha 2024, organized by IIM Kashipur.",
      image: "/awards/iim-kashipur-photo.png"
    }
  ];

  // Full Institutional Accolades from Page 8 of Deck
  const institutionalAccolades = [
    {
      title: "AMBA & BGA Business Excellence Award, UK",
      recognition: "FIRST RUNNER-UP",
      subtitle: "Only startup from the entire Asian continent",
      tag: "Global Accolade"
    },
    {
      title: "Techpreneur 2.0 by HDFC ERGO, Google & BCG",
      recognition: "TOP 10 FINALIST",
      subtitle: "Selected in top 10 finalists out of 700+ competing startups",
      tag: "Technology & AI"
    },
    {
      title: "HDFC Parivartan Grant Winner",
      recognition: "GRANT WINNER",
      subtitle: "Institutional grant supporting our tribal health access mission",
      tag: "Social Impact"
    },
    {
      title: "Rotary Delhi Startup Awards",
      recognition: "STARTUP OF THE YEAR",
      subtitle: "Recognized as Startup of the Year for high-impact social healthcare delivery",
      tag: "Leadership"
    },
    {
      title: "Janhit Jagran Business Award 2025",
      recognition: "WINNER 2025",
      subtitle: "Honored by Dainik Jagran for grassroots community empowerment",
      tag: "National Media"
    },
    {
      title: "Strategic Leadership Impact Award 2026",
      recognition: "WINNER 2026",
      subtitle: "Awarded under 35–45 Yr Category by GoPhD Foundation",
      tag: "Leadership"
    }
  ];

  const mediaOutlets = [
    "Rajasthan Patrika",
    "Dainik Bhaskar",
    "Dainik Jagran",
    "Amar Ujala",
    "Major Regional News Networks"
  ];

  return (
    <section id="recognition" className="py-20 sm:py-28 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-700 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
            <span>Validation of Our Impact & Commitment</span>
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.18]">
            Awards &amp; Recognition
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
            Recognized by India's and the world's leading healthcare bodies, academic institutions, and global corporations for driving accessible, timely healthcare to tribal communities.
          </p>
        </div>

        {/* 3 Real Ceremony Photo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {photoAwards.map((award) => (
            <div 
              key={award.id}
              className="group flex flex-col justify-between bg-white rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 overflow-hidden"
            >
              <div>
                {/* Image Container with Zoom hint */}
                <div 
                  onClick={() => setSelectedImage({ src: award.image, alt: award.title, title: award.title })}
                  className="relative aspect-4/3 w-full overflow-hidden bg-slate-100 cursor-zoom-in"
                >
                  <img 
                    src={award.image} 
                    alt={award.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Top Badge Overlay */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-900 text-[11px] font-semibold tracking-tight border border-slate-200/80 shadow-xs">
                      <Trophy className="w-3 h-3 text-teal-600" />
                      <span>{award.badge}</span>
                    </span>
                  </div>

                  {/* Hover Hint */}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity text-[11px] font-medium text-slate-800 flex items-center gap-1.5 bg-white/95 px-2.5 py-1 rounded-lg border border-slate-200/80 shadow-xs backdrop-blur-xs">
                    <span>View photo</span>
                    <ExternalLink className="w-3 h-3 text-slate-600" />
                  </div>
                </div>

                {/* Card Details */}
                <div className="p-6 sm:p-7 space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
                    {award.organization}
                  </p>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight leading-snug">
                    {award.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 mt-2">
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span className="text-teal-800 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                    <span>Verified Ceremony Event</span>
                  </span>
                  <span className="text-slate-400">Awarded on Stage</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 6 Grid of Prestigious Institutional Accolades */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-slate-900">
            Institutional Honors &amp; Industry Grants
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {institutionalAccolades.map((item, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded-md border border-teal-200/50">
                      {item.tag}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-400">0{idx + 1}</span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 leading-snug">
                    {item.title}
                  </h4>

                  <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
                    {item.recognition}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Media Coverage Strip */}
        <div className="p-8 rounded-2xl bg-white border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-2xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800 shrink-0">
              <Newspaper className="w-5 h-5 text-teal-700" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Featured in Leading National Media</h4>
              <p className="text-xs text-slate-500">Documenting our journey to transform tribal healthcare access</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {mediaOutlets.map((outlet, mIdx) => (
              <span 
                key={mIdx}
                className="px-3 py-1.5 rounded-lg bg-slate-50 text-slate-700 text-xs font-medium border border-slate-200/80"
              >
                {outlet}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200/80 text-slate-800 text-center text-xs sm:text-sm font-medium shadow-2xs">
          Recognised for our journey to make healthcare more accessible across communities through innovation, partnerships and impact.
        </div>

      </div>

      {/* Lightbox Modal - Clean, elegant light gallery presentation */}
      {selectedImage && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4.5 border-b border-slate-100 bg-slate-50/70">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-200/80 flex items-center justify-center text-teal-700">
                  <Trophy className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-serif font-semibold text-slate-900 tracking-tight">
                    {selectedImage.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium">Verified Ceremony Photography</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-200/60 transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Viewport */}
            <div className="p-4 sm:p-6 bg-slate-100/60 flex items-center justify-center">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                loading="eager"
                decoding="async"
                className="max-h-[72vh] w-auto max-w-full object-contain rounded-2xl border border-slate-200/90 shadow-md bg-white"
              />
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3.5 bg-white border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
              <span className="flex items-center gap-1.5 text-teal-700 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                <span>Official Recognition Record</span>
              </span>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="text-slate-500 hover:text-slate-800 font-medium transition-colors cursor-pointer"
              >
                Close (Esc)
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
