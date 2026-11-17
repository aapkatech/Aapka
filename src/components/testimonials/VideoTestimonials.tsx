import React, { useState } from 'react';
import { videoTestimonialsData } from './testimonialsData';
import { VideoTestimonialCard } from './VideoTestimonialCard';
import type { Language } from '../../i18n/translations';

interface VideoTestimonialsProps {
  lang?: Language;
  onOpenBooking?: (service?: string) => void;
}

export const VideoTestimonials: React.FC<VideoTestimonialsProps> = ({ 
  lang = 'en',
}) => {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const handlePlayStateChange = (id: string, isPlaying: boolean) => {
    if (isPlaying) {
      setActiveVideoId(id);
    } else if (activeVideoId === id) {
      setActiveVideoId(null);
    }
  };

  const heading = lang === 'hi'
    ? 'मरीजों के वास्तविक वीडियो अनुभव'
    : 'Patient Video Testimonials';

  const subtitle = lang === 'hi'
    ? 'अस्पताल भर्ती, आपातकालीन सर्जरी और रियायती पैकेज दर पर इलाज कराने वाले परिवारों के सीधे अनुभव।'
    : 'Real accounts shared by patients and families assisted with hospital admissions, emergency surgery coordination, and pre-negotiated package tariffs.';

  return (
    <section id="video-testimonials" className="py-2 sm:py-4 bg-transparent border-b-0">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-4 sm:space-y-5">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-1.5">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 leading-[1.18]">
            {heading}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            {subtitle}
          </p>
        </div>

        {/* 4 Native Video Cards Grid (Playable Directly on the Website) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto gap-5 sm:gap-6 items-stretch">
          {videoTestimonialsData.map((item) => (
            <VideoTestimonialCard
              key={item.id}
              testimonial={item}
              lang={lang}
              activeVideoId={activeVideoId}
              onPlayStateChange={handlePlayStateChange}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
