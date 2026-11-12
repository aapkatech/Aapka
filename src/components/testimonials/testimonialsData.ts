export interface CaptionTrack {
  src: string;
  srclang: string;
  label: string;
  default?: boolean;
}

export interface VideoTestimonial {
  id: string;
  name: string;
  roleEn: string;
  roleHi: string;
  village: string;
  district: string;
  state: string;
  treatmentEn: string;
  treatmentHi: string;
  savingEn?: string;
  savingHi?: string;
  quoteEn: string;
  quoteHi: string;
  storyEn: string;
  storyHi: string;
  mitraName?: string;
  hospitalName?: string;
  videoSrc: string;
  posterSrc?: string;
  duration?: string;
  /**
   * Verification flag.
   * MUST remain false until the responsible AAPKA clinical & operations
   * team verifies patient consent, hospital admission records, and source media.
   */
  verified: boolean;
  category: 'surgery' | 'maternity' | 'cardiac' | 'emergency';
  tags: { en: string[]; hi: string[] };
  captions?: CaptionTrack[];
}

/**
 * Registry of approved patient video testimonials.
 *
 * NOTE: Fictional or unverified sample stories have been removed per compliance review.
 * Real patient testimonials will be populated here once original .mp4 video files,
 * informed consent documentation, and approved case details are verified by the AAPKA team.
 */
export const videoTestimonialsData: VideoTestimonial[] = [];
