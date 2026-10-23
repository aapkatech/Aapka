# Aapka (SP Rural India Services) 🏥🇮🇳

> **"Let us take care of you — Healthcare accessibility for every corner of Bharat."**

**Aapka** is a transformative healthcare accessibility and patient advocacy platform designed specifically for rural, semi-urban, and Tier-3/4 regions across Bharat. Incubated and supported at Jawaharlal Nehru University (JNU), New Delhi, Aapka bridges the gap between rural citizens and quality healthcare infrastructure through a dedicated network of village-level **Swasthya-Mitras (Gram Mitras)**, pre-negotiated partner hospital packages, digital health cards, and doorstep diagnostics.

---

## 🏆 Awards & Prestigious Recognition

- **Swati Rai Innovation Award**: Winner of the prestigious ₹10 Lakh grant for healthcare inclusion & rural transformation.
- **FICCI Healthcare India Excellence Awards**: National Finalist for Primary & Rural Care Delivery.
- **Uththistha 2024 (IIM Kashipur)**: 1st Runner-Up in National Healthcare Pitch.
- **Sankalp Bharat Summit**: Recognized as a Top Social Enterprise for Tier-3/4 Health Equity.

---

## 📊 Grassroots Impact at a Glance

- **500+ Villages** covered across rural clusters.
- **46+ Verified Partner Hospitals** with dedicated admission beds.
- **40,000+ Pincodes** serviced nationwide.
- **₹4.2 Crore+** in direct medical savings provided to rural patient households.

---

## 🩺 Key Services & Features

1. **Hospitalization & Paperwork Assistance**: A local Swasthya-Mitra accompanies patients to network hospitals, resolves insurance/Ayushman claims, and secures 20%-40% surgery discounts.
2. **24x7 Bedside Attendant & Caregiver Support**: Trained nursing staff for post-operative, elderly, and chronic disease care.
3. **Pathology & Radiology with Free Home Pickup**: NABL-accredited diagnostic panels with reports delivered within 24 hours.
4. **Doctor Tele-Consultations**: Real-time video/audio access to MD doctors in local dialects (Hindi, Bhojpuri, Maithili, etc.).
5. **Aapka Smart Health Card**: One comprehensive health security card covering a family of up to 6 members with free annual body checkups and subsidized medicines.
6. **Gram Mitra Grassroots Program**: Training and certifying rural youth and women as healthcare facilitators, generating dignified village incomes (₹15,000 - ₹35,000/month).

---

## 📹 Directly Hosted Video Testimonials Architecture

Aapka uses a self-contained, native HTML5 video pipeline for real patient and Gram Mitra case recordings without relying on external third-party embeds (YouTube, Vimeo, etc.).

### Why Native Hosting?
- **Ad-Free & Respectful**: Rural patient families are not subjected to distracting third-party advertisements or trackers.
- **Data Privacy (DPDP Act 2023)**: Complete confidentiality without external video platform profiling.
- **Fast Progressive Streaming**: Immediate playback on rural 3G/4G connections with preloaded metadata and `faststart` MP4 headers.
- **Bilingual Subtitles**: Direct WebVTT (`.vtt`) subtitle integration for multi-dialect accessibility (Hindi & English).

### Directory & File Structure
```text
Aapka/
├── public/
│   ├── videos/                    # Raw .mp4 video files (H.264 + AAC)
│   │   ├── .gitkeep
│   │   └── README.md              # Video encoding & compression specifications
│   ├── video-posters/             # Thumbnail preview posters (.webp / .jpg)
│   │   └── .gitkeep
│   └── captions/                  # WebVTT subtitle files (.vtt)
│       └── .gitkeep
│
└── src/
    ├── components/
    │   └── testimonials/
    │       ├── VideoTestimonials.tsx      # Main section with category filters & grid
    │       ├── VideoTestimonialCard.tsx   # Native HTML5 <video> player with controls
    │       └── testimonialsData.ts        # Typed patient stories registry
    └── pages/
        └── HomePage.tsx                   # Section integration on Home
```

### Adding New Video Testimonials
1. Place compressed `.mp4` into `public/videos/<slug>.mp4` (recommended: 720p/1080p, H.264, AAC).
2. Save preview poster to `public/video-posters/<slug>.webp`.
3. (Optional) Add WebVTT subtitles in `public/captions/<slug>.en.vtt` and `<slug>.hi.vtt`.
4. Register the new record in `src/components/testimonials/testimonialsData.ts`.

---

## 💻 Tech Stack & Architecture

- **Frontend**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4 (Modern cleanism, high color contrast compliance)
- **Media Engine**: Native HTML5 Video + WebVTT Closed Captions
- **Icons**: Lucide React
- **Bilingual Engine**: Real-time seamless toggle between English & हिन्दी
- **Accessibility**: ARIA labels, responsive touch targets, mobile-first design for rural smartphone users

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation
```bash
git clone https://github.com/aapkatech/Aapka.git
cd Aapka
npm install
```

### Run Locally
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

---

## 🏢 Corporate & Entity Details

- **Company**: SP Rural India Services Private Limited
- **Incubation Hub**: Atal Incubation Centre / Innovation & Incubation Hub, Jawaharlal Nehru University (JNU), New Delhi - 110067, India
- **24/7 Rural Helpline**: +91 96670 33044
- **Email**: info@aapka.co.in
- **Website**: [aapka.co.in](https://aapka.co.in)
