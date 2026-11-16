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
  verified: boolean;
  category: 'surgery' | 'maternity' | 'cardiac' | 'emergency';
  tags: { en: string[]; hi: string[] };
  captions?: CaptionTrack[];
}

/**
 * Registry of approved patient video testimonials.
 * Self-hosted native MP4 video recordings playable directly in the website.
 */
export const videoTestimonialsData: VideoTestimonial[] = [
  {
    id: "video-amarpal-singh",
    name: "Mr. AmarPal Singh",
    roleEn: "Patient Family Member",
    roleHi: "मरीज के परिजन",
    village: "Kheda",
    district: "Gautam Budh Nagar",
    state: "Delhi NCR",
    treatmentEn: "Tumor Operation & Hospital Guidance",
    treatmentHi: "ट्यूमर ऑपरेशन एवं अस्पताल मार्गदर्शन",
    savingEn: "Guaranteed Institutional Package Tariffs",
    savingHi: "तय रियायती पैकेज दरें",
    quoteEn: "When private hospitals were out of reach, Aapka helped us check a good hospital at a price we could afford.",
    quoteHi: "जब बड़े अस्पताल हमारी क्षमता से बाहर थे, तब आपका ने हमें सही अस्पताल और उचित खर्च पर इलाज दिलाया।",
    storyEn: "Personal account of overcoming delayed government hospital surgery dates and securing urgent hospital admission with on-ground assistance.",
    storyHi: "आपातकालीन स्थिति में तुरंत निजी अस्पताल में रियायती पैकेज पर ऑपरेशन और भर्ती समन्वय का वास्तविक वीडियो अनुभव।",
    videoSrc: "/videos/aapka1.mp4",
    duration: "0:33",
    verified: false,
    category: "surgery",
    tags: {
      en: ["Tumor Surgery", "Package Tariff", "Gautam Budh Nagar"],
      hi: ["ट्यूमर सर्जरी", "अस्पताल भर्ती", "गौतम बुद्ध नगर"]
    },
    mitraName: "Assisted by On-Ground Care Navigator",
    hospitalName: "Accredited Partner Hospital, Delhi NCR"
  },
  {
    id: "video-anupam",
    name: "Ms. Anupam",
    roleEn: "Patient",
    roleHi: "मरीज",
    village: "Chhapraula",
    district: "Greater Noida",
    state: "Delhi NCR",
    treatmentEn: "Kidney Stone Surgery & Paperwork Clearance",
    treatmentHi: "किडनी स्टोन सर्जरी व कागजी कार्रवाई",
    savingEn: "100% Cashless Support & Zero Out-of-Pocket Debt",
    savingHi: "100% कैशलेस सहायता एवं कागजी कार्रवाई",
    quoteEn: "The on-ground care coordinator accompanied us inside the hospital and handled all admission paperwork smoothly.",
    quoteHi: "केयर समन्वयक ने अस्पताल पहुंचकर सभी कागजी औपचारिकताएं और प्रक्रियाएं पूरी कराईं।",
    storyEn: "Real patient experience describing how an on-ground care companion eliminated bureaucratic stress at city hospital counters.",
    storyHi: "अस्पताल में भर्ती, कागजी कार्रवाई और डिस्चार्ज प्रक्रिया में व्यक्तिगत साथी मिलने पर मरीज का अनुभव।",
    videoSrc: "/videos/aapka2.mp4",
    duration: "0:29",
    verified: false,
    category: "surgery",
    tags: {
      en: ["Kidney Stone Surgery", "Admission Escort", "Greater Noida"],
      hi: ["किडनी स्टोन", "अस्पताल साथी", "ग्रेटर नोएडा"]
    },
    mitraName: "Assisted by On-Ground Care Navigator",
    hospitalName: "Partner Hospital Network, Greater Noida"
  },
  {
    id: "video-kumar-madhur",
    name: "Mr. Kumar Madhur",
    roleEn: "Patient",
    roleHi: "मरीज",
    village: "Raj Nagar Extension",
    district: "Ghaziabad",
    state: "Delhi NCR",
    treatmentEn: "Specialist Consultation & Procedure Support",
    treatmentHi: "विशेषज्ञ परामर्श एवं उपचार व्यवस्था",
    savingEn: "Discounted Institutional Tariffs & Transport",
    savingHi: "रियायती संस्थागत दरें एवं आवागमन",
    quoteEn: "Aapka fixed our appointments across 3 top hospitals and their care coordinator helped us through the entire procedure at a discounted price.",
    quoteHi: "टीम ने 3 प्रमुख अस्पतालों में अपॉइंटमेंट तय किए, स्थानीय आवागमन में मदद की और डिस्काउंटेड दरों पर पूरी सहायता कराई।",
    storyEn: "Personal account of navigating specialist healthcare options, hospital appointment routing, and bedside coordination across Delhi NCR.",
    storyHi: "गाजियाबाद एवं दिल्ली एनसीआर के अस्पतालों में विशेषज्ञ डॉक्टर परामर्श और पारदर्शी दरों पर उपचार का वास्तविक अनुभव।",
    videoSrc: "/videos/aapka3.mp4",
    duration: "1:20",
    verified: false,
    category: "surgery",
    tags: {
      en: ["Specialist Routing", "Procedure Support", "Ghaziabad"],
      hi: ["विशेषज्ञ परामर्श", "अस्पताल भर्ती", "गाजियाबाद"]
    },
    mitraName: "Assisted by On-Ground Care Navigator",
    hospitalName: "Partner Hospital Network, Ghaziabad / NCR"
  }
];
