import React, { useState } from 'react';
import { Award, Trophy, Medal, X, ExternalLink } from 'lucide-react';
import type { Translations } from '../i18n/translations';

interface QuietProofProps {
  t?: Translations['proof'];
}

export const QuietProof: React.FC<QuietProofProps> = ({ t }) => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string; title: string } | null>(null);

  const defaultAwards = [
    {
      id: "swati-rai",
      title: "Swati Rai Award for Excellence in Entrepreneurship",
      badge: "1st Prize Winner (₹10 Lakh)",
      organization: "Sankalp Bharat Summit 2024",
      description: "Winners of the Swati Rai Award (1st prize of 10 lakh rupees) for Excellence in Entrepreneurship at the Sankalp Bharat Summit.",
      image: "/awards/swati-rai-sankalp-photo.png"
    },
    {
      id: "ficci",
      title: "FICCI Healthcare India Excellence Awards",
      badge: "Top 3 Finalist",
      organization: "FICCI New Delhi",
      description: "Finalist in FICCI Healthcare India Excellence Award (Top 3) organized by Federation of Indian Chambers of Commerce & Industry, New Delhi.",
      image: "/awards/ficci-healthcare-photo.png"
    },
    {
      id: "iim-kashipur",
      title: "Scale UP Pitchathon — Uththistha 2024",
      badge: "1st Runner-Up",
      organization: "IIM Kashipur",
      description: "Became first runner up among 70 startups at Scale UP pitchathon at Uththistha 2024, organized by IIM Kashipur.",
      image: "/awards/iim-kashipur-photo.png"
    }
  ];

  const awards = t?.awards || defaultAwards;
  const tag = t?.tag || "Recognition";
  const recognitionTag = t?.recognitionTag || "Institutional Recognition & Awards";
  const sectionTitle = t?.sectionTitle || "Validated by India’s leading healthcare and entrepreneurial institutions.";
  const sectionSubtitle = t?.sectionSubtitle || "Recognized for driving accessible, dignified patient navigation and clinical quality across Bharat.";

  const badgeIcons: Record<string, React.ElementType> = {
    "swati-rai": Trophy,
    "ficci": Award,
    "iim-kashipur": Medal
  };

  return (
    <section id="impact" className="py-20 sm:py-28 bg-zinc-50/70 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
            {recognitionTag}
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
            {sectionTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            {sectionSubtitle}
          </p>
        </div>

        {/* 3 Real Awards Grid with Authentic Stage Photos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awards.map((award) => {
            const Icon = badgeIcons[award.id] || Award;
            return (
              <div 
                key={award.id}
                className="group flex flex-col justify-between bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 overflow-hidden"
              >
                <div>
                  {/* Image Presentation Container */}
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Top Badge Overlay */}
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md text-white text-[11px] font-semibold tracking-tight border border-white/10 shadow-sm">
                        <Icon className="w-3 h-3 text-teal-400" />
                        <span>{award.badge}</span>
                      </span>
                    </div>

                    {/* Hover Hint */}
                    <div className="absolute bottom-2.5 right-3 opacity-0 group-hover:opacity-100 transition-opacity text-[11px] font-medium text-white/90 flex items-center gap-1 bg-black/50 px-2 py-0.5 rounded-md backdrop-blur-xs">
                      <span>View photo</span>
                      <ExternalLink className="w-3 h-3" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-2.5">
                    <p className="text-xs font-semibold text-teal-700 tracking-wide uppercase">
                      {award.organization}
                    </p>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-snug">
                      {award.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed pt-1">
                      {award.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Card Footer */}
                <div className="px-6 pb-6 pt-2 border-t border-slate-100/80 flex items-center justify-between text-xs font-medium text-slate-500">
                  <span className="flex items-center gap-1.5 text-teal-700 font-semibold text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                    Official Certificate & Grant
                  </span>
                  <span className="text-slate-400 font-normal text-[11px]">SP Rural India Services</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal for Photo Inspection */}
      {selectedImage && (
        <div 
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[75vh] object-contain bg-slate-950" 
            />
            <div className="p-5 bg-white border-t border-slate-100">
              <p className="text-sm font-bold text-slate-900">{selectedImage.title}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
