import React, { useRef, useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  UserCheck, 
  Building2, 
  Subtitles,
  Volume2,
  VolumeX,
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
  const [isMuted, setIsMuted] = useState(false);
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
      setHasStarted(true);
      videoRef.current
        .play()
        .catch(() => {
          setHasError(true);
        });
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
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
          controls={hasStarted && isPlaying}
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

        {/* Video Overlay Poster & Play Button (Shown when not playing or before initial click) */}
        {(!isPlaying || !hasStarted) && (
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
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-md text-[11px] font-semibold text-teal-300 border border-teal-500/30">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                <span>{lang === 'hi' ? 'सत्यापित मरीज' : 'Verified Case'}</span>
              </span>

              <div className="flex items-center gap-2">
                {testimonial.captions && (
                  <span 
                    title="Subtitles available in Hindi & English"
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-900/80 text-[10px] font-bold text-slate-300 backdrop-blur-md"
                  >
                    <Subtitles className="w-3 h-3 text-teal-400" />
                    <span>CC</span>
                  </span>
                )}
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-900/80 text-[10px] font-semibold text-slate-200 backdrop-blur-md">
                  <Clock className="w-3 h-3 text-slate-400" />
                  <span>{testimonial.duration}</span>
                </span>
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
                <span>{testimonial.village}, {testimonial.district} ({testimonial.state})</span>
              </div>
              <p className="text-xs text-teal-300 font-semibold">{saving}</p>
            </div>
          </div>
        )}

        {/* Video Control Bar when Playing */}
        {hasStarted && isPlaying && (
          <div className="absolute top-3 right-3 z-20 flex items-center gap-2">
            <button
              onClick={toggleMute}
              className="p-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-900 text-white backdrop-blur-md transition-colors cursor-pointer"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
            <button
              onClick={togglePlay}
              className="p-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-900 text-white backdrop-blur-md transition-colors cursor-pointer"
              aria-label="Pause video"
            >
              <Pause className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Informative Note if Video File is not yet placed in /public/videos/ */}
        {hasError && (
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-xs flex flex-col items-center justify-center p-6 text-center text-white z-30 space-y-2">
            <AlertCircle className="w-8 h-8 text-amber-400" />
            <p className="text-xs font-semibold text-slate-200">
              {lang === 'hi' ? 'वीडियो फ़ाइल अपलोड हो रही है' : 'Video Stream Staged in Archive'}
            </p>
            <p className="text-[11px] text-slate-400 max-w-xs leading-relaxed font-mono">
              {testimonial.videoSrc}
            </p>
            <button
              onClick={() => {
                setHasError(false);
                setIsPlaying(false);
                setHasStarted(false);
              }}
              className="mt-2 px-3 py-1 text-xs rounded-md bg-teal-600 hover:bg-teal-500 text-white font-medium cursor-pointer"
            >
              {lang === 'hi' ? 'वापस जाएं' : 'Back to Poster'}
            </button>
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
          <blockquote className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal italic border-l-2 border-teal-500 pl-3 py-0.5">
            "{quote}"
          </blockquote>

          {/* Detailed Narrative */}
          <p className="text-xs text-slate-600 leading-relaxed">
            {story}
          </p>

          {/* Tags */}
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
