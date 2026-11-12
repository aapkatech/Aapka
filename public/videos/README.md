# Aapka Video Testimonials Directory (`/public/videos/`)

This directory stores directly hosted, self-contained `.mp4` video files for the **Video Testimonials** section of the Aapka website.

We use **native HTML5 `<video>` players** rather than third-party embeds (such as YouTube or Vimeo) to:
- Serve videos directly from website storage without third-party advertising cookies or trackers.
- Provide progressive playback on mobile networks using preloaded metadata and `faststart` MP4 headers.
- Allow integrated multi-language captions via WebVTT (`.vtt`) files.

---

## ⚠️ Compliance & Verification Policy

1. **No Fictional Testimonials**: Never publish fictional, fabricated, or unverified patient cases or savings claims as authentic testimonials.
2. **Consent & Verification**: Every published video must have verified patient/guardian informed consent, clinical accuracy sign-off, and administrative approval from the AAPKA leadership team.
3. **Verification Status**: In `src/components/testimonials/testimonialsData.ts`, each record contains a `verified: boolean` field. It must remain `false` until source documentation, consent forms, and video assets are reviewed and confirmed by the AAPKA team.

---

## 📁 Directory Roles

| Directory | Purpose | Supported Formats |
| :--- | :--- | :--- |
| `public/videos/` | Approved, compressed `.mp4` video files | `.mp4` (H.264 + AAC) |
| `public/video-posters/` | Poster / preview images shown before playback | `.webp`, `.jpg`, `.png` (16:9 recommended) |
| `public/captions/` | Subtitles / closed captions for accessibility | `.vtt` (WebVTT standard) |

---

## 🎥 Video Encoding Guidelines

To ensure smooth playback on mobile devices with limited bandwidth:

1. **Container**: MP4 (`.mp4`)
2. **Video Codec**: H.264 / AVC (Baseline or Main profile)
3. **Audio Codec**: AAC-LC (stereo, 128 kbps)
4. **Resolution**: 1080p (1920×1080) or 720p (1280×720)
5. **Bitrate**: 1.5 Mbps – 3.0 Mbps
6. **Web Optimization (`faststart`)**: Place the `moov` atom at the front of the file so streaming begins immediately without waiting for the full download.

### Example FFmpeg Commands

```bash
# Compress and optimize MP4 with faststart:
ffmpeg -i input_source.mp4 \
  -c:v libx264 -preset slow -crf 23 -maxrate 2.5M -bufsize 5M \
  -vf "scale='min(1280,iw)':-2" \
  -c:a aac -b:a 128k \
  -movflags +faststart \
  public/videos/example-story.mp4

# Extract a poster thumbnail at 2 seconds into the video:
ffmpeg -ss 00:00:02 -i public/videos/example-story.mp4 \
  -vframes 1 -q:v 2 \
  public/video-posters/example-story.webp
```

---

## 📝 How to Register an Approved Testimonial

Once the video file, poster, consent, and verified details are confirmed, add an entry to the `videoTestimonialsData` array in `src/components/testimonials/testimonialsData.ts`:

```typescript
{
  id: "case-reference-id",
  name: "Approved Patient / Case Name",
  roleEn: "Community Member / Patient",
  roleHi: "मरीज / परिजन",
  village: "Village Name",
  district: "District Name",
  state: "State Name",
  treatmentEn: "Approved Service Category",
  treatmentHi: "चिकित्सा श्रेणी",
  savingEn: "Approved Verified Saving (Optional)",
  savingHi: "सत्यापित बचत विवरण (वैकल्पिक)",
  quoteEn: "Approved patient or guardian statement in English.",
  quoteHi: "मरीज या परिजन का स्वीकृत कथन (हिन्दी)।",
  storyEn: "Clinical navigation and support summary verified by the team.",
  storyHi: "अस्पताल सहायता एवं उपचार का संक्षिप्त विवरण।",
  mitraName: "Assisting Gram Mitra Name (if applicable)",
  hospitalName: "Empanelled Network Hospital (if applicable)",
  videoSrc: "/videos/example-story.mp4",
  posterSrc: "/video-posters/example-story.webp",
  duration: "1:30",
  verified: false, // Set to true only after AAPKA verification sign-off
  category: "surgery", // 'surgery' | 'maternity' | 'cardiac' | 'emergency'
  tags: {
    en: ["Eye Care", "Hospital Navigation"],
    hi: ["नेत्र चिकित्सा", "अस्पताल सहायता"]
  },
  captions: [
    {
      src: "/captions/example-story.en.vtt",
      srclang: "en",
      label: "English"
    },
    {
      src: "/captions/example-story.hi.vtt",
      srclang: "hi",
      label: "हिन्दी",
      default: true
    }
  ]
}
```
