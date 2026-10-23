# Aapka Video Testimonials Directory (`/public/videos/`)

This directory stores directly hosted, self-contained `.mp4` video files for the **Video Testimonials** section of the Aapka website.

We use **native HTML5 `<video>` players** rather than third-party embeds (like YouTube or Vimeo) to guarantee:
- ⚡ **Zero Third-Party Tracking / Ad-Free Experience**: Respects rural patient privacy (DPDP Act 2023 compliance).
- 🚀 **Fast Progressive Streaming**: Immediate playback on rural 3G/4G/5G mobile networks without slow external iframe loading.
- 🎨 **Unified Design System**: Cohesive design matching Aapka's brand standards.

---

## 📁 Related Directories

| Directory | Purpose | Supported Formats |
| :--- | :--- | :--- |
| `public/videos/` | High-quality compressed video files | `.mp4` (H.264 + AAC) |
| `public/video-posters/` | Still preview poster / thumbnail image | `.webp`, `.jpg`, `.png` (16:9 recommended) |
| `public/captions/` | Subtitles / closed captions for accessibility | `.vtt` (WebVTT standard) |

---

## 🎥 Video Encoding Best Practices

To ensure smooth playback on mobile devices with limited bandwidth:

1. **Format**: MP4 container (`.mp4`)
2. **Video Codec**: H.264 / AVC (High or Main profile)
3. **Audio Codec**: AAC-LC (128 kbps stereo)
4. **Resolution**: 1080p (1920×1080) or 720p (1280×720)
5. **Target Bitrate**:
   - 720p: 1.2 Mbps – 2.0 Mbps
   - 1080p: 2.5 Mbps – 3.5 Mbps
6. **Web Optimization (`faststart`)**: Place the `moov` atom at the beginning of the MP4 file so playback begins instantly before the entire video downloads.

### Recommended FFmpeg Command

You can optimize any raw camera or mobile recording using FFmpeg:

```bash
# 1. Compress and web-optimize video:
ffmpeg -i raw_input.mp4 \
  -c:v libx264 -preset slow -crf 23 -maxrate 2.5M -bufsize 5M \
  -vf "scale='min(1280,iw)':-2" \
  -c:a aac -b:a 128k \
  -movflags +faststart \
  public/videos/ramesh-kumar-cataract.mp4

# 2. Extract a poster thumbnail at 2 seconds into the video:
ffmpeg -ss 00:00:02 -i public/videos/ramesh-kumar-cataract.mp4 \
  -vframes 1 -q:v 2 \
  public/video-posters/ramesh-kumar-cataract.webp
```

---

## 📝 Step-by-Step: Adding a New Testimonial

### Step 1: Copy your video file
Place the optimized `.mp4` file into `public/videos/`:
```text
public/videos/ramesh-kumar-cataract.mp4
```

### Step 2: Add poster image & optional captions
- Place your poster image into `public/video-posters/ramesh-kumar-cataract.webp`.
- (Optional) Place WebVTT subtitles into `public/captions/ramesh-kumar-cataract.hi.vtt`.

### Step 3: Register in `src/components/testimonials/testimonialsData.ts`
Open `src/components/testimonials/testimonialsData.ts` and append an entry to the `videoTestimonials` array:

```typescript
{
  id: "ramesh-kumar-cataract",
  name: "Ramesh Kumar",
  location: "Gaya, Bihar",
  districtState: "Bihar",
  treatment: "Cataract Surgery",
  treatmentHi: "मोतियाबिंद सर्जरी",
  saving: "Saved ₹18,500",
  savingHi: "₹18,500 की बचत",
  quoteEn: "Aapka's Gram Mitra stayed with me throughout my eye surgery at the hospital. I didn't have to run from desk to desk.",
  quoteHi: "अस्पताल में मेरी मोतियाबिंद की सर्जरी के दौरान आपका के ग्राम मित्र हर कदम पर साथ रहे। मुझे इधर-उधर भटकना नहीं पड़ा।",
  videoSrc: "/videos/ramesh-kumar-cataract.mp4",
  posterSrc: "/video-posters/ramesh-kumar-cataract.webp",
  duration: "1:45",
  verified: true,
  caregiverOrMitra: "Assisted by Gram Mitra Manoj (Gaya Cluster)",
  captions: [
    {
      src: "/captions/ramesh-kumar-cataract.en.vtt",
      srclang: "en",
      label: "English Subtitles"
    },
    {
      src: "/captions/ramesh-kumar-cataract.hi.vtt",
      srclang: "hi",
      label: "हिन्दी सबटाइटल्स",
      default: true
    }
  ]
}
```

The video will automatically appear on the website with native HTML5 playback, thumbnail poster, verified patient badge, and bilingual descriptions.
