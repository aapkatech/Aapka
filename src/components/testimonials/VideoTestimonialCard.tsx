import React, { useRef, useState, useEffect } from 'react';
import { 
  Play, 
  MapPin, 
  UserCheck, 
  Building2, 
  AlertCircle
} from 'lucide-react';
import type { VideoTestimonial } from './testimonialsData';
import type { Language } from '../../i18n/translations';

interface VideoTestimonialCardProps {
  testimonial: VideoTestimonial;
  lang?: Language;
  activeVideoId: string | null;
  onPlayStateChange: (id: string, isPlaying: boolean) => void;
}

export const VideoTestimonialCard: React.FC<VideoTestimonialCardProps> = ({
  testimonial,
  lang = 'en',
  activeVideoId,
  onPlayStateChange,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  // If another video becomes active, pause this video's playback
  const isCurrentActive = activeVideoId === testimonial.id;
  useEffect(() => {
    if (!isCurrentActive && videoRef.current && !videoRef.current.paused) {
      videoRef.current.pause();
    }
  }, [isCurrentActive]);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      // Allow audio playback after explicit user gesture
      videoRef.current.muted = false;
      setHasStarted(true);
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          onPlayStateChange(testimonial.id, true);
        })
        .catch(() => {
          setHasError(true);
        });
    }
  };

  const handleNativePlay = () => {
    setIsPlaying(true);
    setHasStarted(true);
    onPlayStateChange(testimonial.id, true);
  };

  const handleNativePause = () => {
    setIsPlaying(false);
    onPlayStateChange(testimonial.id, false);
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
    onPlayStateChange(testimonial.id, false);
  };

  const quote = lang === 'hi' ? testimonial.quoteHi : testimonial.quoteEn;
  const role = lang === 'hi' ? testimonial.roleHi : testimonial.roleEn;
  const treatment = lang === 'hi' ? testimonial.treatmentHi : testimonial.treatmentEn;
  const saving = lang === 'hi' ? testimonial.savingHi : testimonial.savingEn;
  const story = lang === 'hi' ? testimonial.storyHi : testimonial.storyEn;
  const tags = lang === 'hi' ? testimonial.tags.hi : testimonial.tags.en;

  return (
    <article className="group bg-white/95 backdrop-blur-md rounded-3xl border border-sky-100 shadow-[0_4px_20px_-4px_rgba(2,132,199,0.06)] hover:shadow-xl hover:border-sky-300/80 transition-all duration-300 flex flex-col justify-between overflow-hidden relative">
      {/* Precision Beveled Aura Top Rim Gradient */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 z-20 pointer-events-none" />
      
      {/* 1. Native HTML5 Video Container (Optimized for Mobile Portrait 9:16 Video) */}
      <div className="relative aspect-[4/5] sm:aspect-[3/4] max-h-[460px] w-full bg-slate-950 overflow-hidden flex items-center justify-center">
        
        {/* Native HTML5 Video Element */}
        <video
          ref={videoRef}
          src={testimonial.videoSrc}
          poster={testimonial.posterSrc}
          preload="metadata"
          playsInline
          controls={hasStarted}
          onPlay={handleNativePlay}
          onPause={handleNativePause}
          onEnded={handleVideoEnded}
          onError={() => setHasError(true)}
          className="w-full h-full object-contain bg-black"
        >
          {testimonial.captions?.map((cap, idx) => (
            <track
              key={idx}
              kind="subtitles"
              src={cap.src}
              srcLang={cap.srclang}
              label={cap.label}
              default={cap.default || (cap.srclang === lang)}
            />
          ))}
          Your browser does not support the native HTML5 video element.
        </video>

        {/* Video Overlay Poster & Play Button (Shown before first user play) */}
        {!hasStarted && !hasError && (
          <div 
            onClick={togglePlay}
            className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-slate-950/40 flex flex-col justify-between p-5 cursor-pointer z-10"
            role="button"
            tabIndex={0}
            aria-label={`Play testimonial video of ${testimonial.name}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                togglePlay();
              }
            }}
          >
            {/* Centered Large Play Button */}
            <div className="flex items-center justify-center my-auto">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-teal-600/90 text-white flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-teal-500 transition-all duration-300 border-2 border-white/80 ring-4 ring-teal-500/20">
                <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
              </div>
            </div>

            {/* Bottom Info inside Video Thumbnail */}
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-slate-200 font-medium">
                <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>{testimonial.village ? `${testimonial.village}, ` : ''}{testimonial.district} ({testimonial.state})</span>
              </div>
              {saving && <p className="text-xs text-teal-300 font-semibold">{saving}</p>}
            </div>
          </div>
        )}

        {/* Clear Informational Notice if Video File is not available */}
        {hasError && (
          <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-xs flex flex-col items-center justify-center p-6 text-center text-white z-30 space-y-2">
            <AlertCircle className="w-8 h-8 text-amber-400" />
            <p className="text-xs font-semibold text-slate-200">
              {lang === 'hi' ? 'वीडियो फ़ाइल लोड नहीं हो सकी' : 'Video Loading Error'}
            </p>
            <p className="text-[11px] text-slate-400 max-w-xs leading-relaxed font-mono">
              {testimonial.videoSrc}
            </p>
          </div>
        )}

      </div>

      {/* 2. Text Content & Testimonial Details */}
      <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-5">
        
        {/* Patient Profile & Condition */}
        <div className="space-y-3">
          
          {/* Header Row: Name & Treatment Category */}
          <div className="space-y-1">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="text-lg font-serif font-bold text-slate-900 group-hover:text-teal-900 transition-colors">
                  {testimonial.name}
                </h3>
                <p className="text-xs text-slate-500 font-medium">{role}</p>
              </div>

              <span className="shrink-0 px-2.5 py-1 rounded-full bg-teal-50 text-teal-800 text-[11px] font-semibold border border-teal-200/80">
                {treatment}
              </span>
            </div>
          </div>

          {/* Quotation */}
          {quote && (
            <blockquote className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal italic border-l-2 border-teal-600 pl-3 py-0.5">
              "{quote}"
            </blockquote>
          )}

          {/* Narrative Summary */}
          {story && (
            <p className="text-xs text-slate-600 leading-relaxed">
              {story}
            </p>
          )}

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {tags.map((tag, tIdx) => (
                <span 
                  key={tIdx} 
                  className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10px] font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

        </div>

        {/* 3. Footer: Care Coordination Metadata */}
        <div className="pt-4 border-t border-slate-100 space-y-1.5 text-[11px] text-slate-500">
          {testimonial.mitraName && (
            <div className="flex items-center gap-1.5 text-slate-700 font-medium">
              <UserCheck className="w-3.5 h-3.5 text-teal-600 shrink-0" />
              <span>{testimonial.mitraName}</span>
            </div>
          )}
          {testimonial.hospitalName && (
            <div className="flex items-center gap-1.5 text-slate-500">
              <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="truncate">{testimonial.hospitalName}</span>
            </div>
          )}
        </div>

      </div>

    </article>
  );
};
