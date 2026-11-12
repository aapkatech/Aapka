import React, { useRef, useState, useEffect } from 'react';
import { 
  Play, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  UserCheck, 
  Building2, 
  Subtitles,
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
    <article className="group bg-white rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden">
      
      {/* 1. HTML5 Video Player Container */}
      <div className="relative aspect-video w-full bg-slate-950 overflow-hidden">
        
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
          className="w-full h-full object-cover"
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
            className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex flex-col justify-between p-4 sm:p-5 cursor-pointer z-10"
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
            {/* Top Bar inside Video Thumbnail */}
            <div className="flex items-center justify-between gap-2">
              {testimonial.verified ? (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-md text-[11px] font-semibold text-teal-300 border border-teal-500/30">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                  <span>{lang === 'hi' ? 'सत्यापित विवरण' : 'Verified by AAPKA'}</span>
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-md text-[11px] font-semibold text-amber-300 border border-amber-500/30">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>{lang === 'hi' ? 'सत्यापन प्रक्रियाधीन' : 'Pending Verification'}</span>
                </span>
              )}

              <div className="flex items-center gap-2">
                {testimonial.captions && testimonial.captions.length > 0 && (
                  <span 
                    title="Subtitles available"
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-900/80 text-[10px] font-bold text-slate-300 backdrop-blur-md"
                  >
                    <Subtitles className="w-3 h-3 text-teal-400" />
                    <span>CC</span>
                  </span>
                )}
                {testimonial.duration && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-900/80 text-[10px] font-semibold text-slate-200 backdrop-blur-md">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>{testimonial.duration}</span>
                  </span>
                )}
              </div>
            </div>

            {/* Centered Large Play Button */}
            <div className="flex items-center justify-center my-auto">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-teal-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-teal-500 transition-all duration-300 border-2 border-white/80 ring-4 ring-teal-500/20">
                <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current ml-0.5" />
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
              {lang === 'hi' ? 'वीडियो फ़ाइल उपलब्ध नहीं है' : 'Video File Not Yet Mounted'}
            </p>
            <p className="text-[11px] text-slate-400 max-w-xs leading-relaxed font-mono">
              {testimonial.videoSrc}
            </p>
            <p className="text-[10px] text-slate-500 max-w-xs">
              {lang === 'hi'
                ? 'मूल MP4 फ़ाइल जोड़े जाने के बाद ही वीडियो देखा जा सकेगा।'
                : 'Playback requires the approved .mp4 asset to be present in /public/videos/.'}
            </p>
          </div>
        )}

      </div>

      {/* 2. Text Content & Testimonial Details */}
      <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-6">
        
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

              <span className="shrink-0 px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-800 text-[11px] font-semibold border border-teal-200/80">
                {treatment}
              </span>
            </div>
          </div>

          {/* Quotation */}
          {quote && (
            <blockquote className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal italic border-l-2 border-teal-500 pl-3 py-0.5">
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
        <div className="pt-4 border-t border-slate-100 space-y-2 text-[11px] text-slate-500">
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
