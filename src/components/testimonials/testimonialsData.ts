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
  savingEn: string;
  savingHi: string;
  quoteEn: string;
  quoteHi: string;
  storyEn: string;
  storyHi: string;
  mitraName?: string;
  hospitalName?: string;
  videoSrc: string;
  posterSrc: string;
  duration: string;
  verified: boolean;
  category: 'surgery' | 'maternity' | 'cardiac' | 'emergency';
  tags: { en: string[]; hi: string[] };
  captions?: CaptionTrack[];
}

export const videoTestimonialsData: VideoTestimonial[] = [
  {
    id: "ramesh-kumar-cataract",
    name: "Ramesh Kumar",
    roleEn: "Farmer & Micro-Enterpriser",
    roleHi: "किसान एवं लघु व्यवसायी",
    village: "Dobhi",
    district: "Gaya",
    state: "Bihar",
    treatmentEn: "Cataract Surgery & Lens Replacement",
    treatmentHi: "मोतियाबिंद सर्जरी एवं लेंस प्रत्यारोपण",
    savingEn: "Saved ₹18,500 via Ayushman Bharat",
    savingHi: "आयुष्मान भारत द्वारा ₹18,500 की बचत",
    quoteEn: "Aapka's Gram Mitra escorted me directly to the hospital and handled all admission paperwork. I did not face middleman extortion.",
    quoteHi: "अस्पताल में मेरी मोतियाबिंद की सर्जरी के दौरान आपका के ग्राम मित्र हर कदम पर साथ रहे। मुझे दलालों और कागजी झंझटों से मुक्ति मिली।",
    storyEn: "After suffering diminishing eyesight for 14 months, local private agents demanded ₹28,000 upfront. Aapka routed Ramesh to an empanelled tier-1 ophthalmology unit, verified his Ayushman entitlement, and covered post-op medications.",
    storyHi: "14 महीने तक कम रोशनी से जूझने के बाद शहर में ₹28,000 की मांग की जा रही थी। आपका ने उन्हें पैनल अस्पताल पहुंचाया, आयुष्मान कार्ड से पूरा क्लेम दिलवाया और दवाइयों में राहत दिलाई।",
    mitraName: "Manoj Kumar (Gaya Cluster Mitra)",
    hospitalName: "Magadh Netra Super-Speciality Hospital",
    videoSrc: "/videos/ramesh-kumar-cataract.mp4",
    posterSrc: "/video-posters/ramesh-kumar-cataract.webp",
    duration: "1:45",
    verified: true,
    category: "surgery",
    tags: {
      en: ["Ayushman Bharat", "Eye Care", "Escorted Admission"],
      hi: ["आयुष्मान भारत", "नेत्र चिकित्सा", "अस्पताल सहायता"]
    },
    captions: [
      {
        src: "/captions/ramesh-kumar-cataract.en.vtt",
        srclang: "en",
        label: "English"
      },
      {
        src: "/captions/ramesh-kumar-cataract.hi.vtt",
        srclang: "hi",
        label: "हिन्दी",
        default: true
      }
    ]
  },
  {
    id: "sunita-devi-maternal",
    name: "Sunita Devi",
    roleEn: "Mother of Two",
    roleHi: "गृहिणी व माता",
    village: "Mahmudabad",
    district: "Sitapur",
    state: "Uttar Pradesh",
    treatmentEn: "Emergency Maternity Delivery",
    treatmentHi: "आपातकालीन प्रसव एवं जच्चा-बच्चा सुरक्षा",
    savingEn: "20-Min Emergency Response at 2:00 AM",
    savingHi: "रात 2 बजे 20 मिनट में आपातकालीन सहायता",
    quoteEn: "When severe complications arose in the dead of night, Gram Mitra Sarita dispatched an emergency vehicle and got us admitted without delay.",
    quoteHi: "रात 2 बजे जब तेज प्रसव पीड़ा हुई और कोई साधन नहीं था, ग्राम मित्र दीदी ने 20 मिनट में गाड़ी भेजी और अस्पताल में बिना अग्रिम पैसे दाखिला कराया।",
    storyEn: "With local primary health centers shuttered past midnight, Aapka's 24/7 care desk dispatched an equipped ambulance, pre-alerted the obstetric team, and oversaw safe delivery with zero out-of-pocket hospital deposit hurdles.",
    storyHi: "आधी रात को नजदीकी प्राथमिक केंद्र बंद होने पर आपका के 24x7 इमरजेंसी डेस्क ने एम्बुलेंस भेजी और अस्पताल में एडवांस फीस की रुकावट के बिना सुरक्षित प्रसव कराया।",
    mitraName: "Sarita Devi (Mahmudabad Block Lead)",
    hospitalName: "Awadh Mother & Child Care Hospital",
    videoSrc: "/videos/sunita-devi-maternal.mp4",
    posterSrc: "/video-posters/sunita-devi-maternal.webp",
    duration: "2:10",
    verified: true,
    category: "maternity",
    tags: {
      en: ["Emergency Triage", "Maternal Care", "Night Transport"],
      hi: ["इमरजेंसी ट्राइएज", "मातृ सुरक्षा", "रात्रि एम्बुलेंस"]
    },
    captions: [
      {
        src: "/captions/sunita-devi-maternal.en.vtt",
        srclang: "en",
        label: "English"
      },
      {
        src: "/captions/sunita-devi-maternal.hi.vtt",
        srclang: "hi",
        label: "हिन्दी",
        default: true
      }
    ]
  },
  {
    id: "rajeshwar-yadav-cardiac",
    name: "Rajeshwar Yadav",
    roleEn: "Agronomist & Village Elder",
    roleHi: "वरिष्ठ किसान",
    village: "Mauganj",
    district: "Rewa",
    state: "Madhya Pradesh",
    treatmentEn: "Cardiac Stenting & Cath-Lab Care",
    treatmentHi: "हृदय एंजियोप्लास्टी एवं स्टेंटिंग",
    savingEn: "Saved ₹68,000 via Pre-Negotiated Tariff",
    savingHi: "तय रियायती दरों से ₹68,000 की सीधी बचत",
    quoteEn: "A commercial hospital demanded ₹1.65 Lakh, which would have forced us to mortgage our farmland. Aapka got it done under a transparent tariff.",
    quoteHi: "निजी अस्पताल में ₹1.65 लाख मांगे जा रहे थे जिसके लिए जमीन गिरवी रखनी पड़ती। आपका ने अपने अनुबंधित अस्पताल में निष्पक्ष दरों पर इलाज कराया।",
    storyEn: "A sudden myocardial infarction required urgent cardiac catheterization. Aapka activated its empanelled regional super-speciality partner, reducing surgery costs by 42% through structured institutional caps.",
    storyHi: "अचानक दिल के दौरे के बाद तुरंत स्टेंटिंग जरूरी थी। आपका ने अपने सुपर-स्पेशियलिटी नेटवर्क अस्पताल में इलाज करवाकर परिवार को भारी कर्ज से बचा लिया।",
    mitraName: "Vikas Patel (Rewa District Coordinator)",
    hospitalName: "Vindhya Heart & Vascular Institute",
    videoSrc: "/videos/rajeshwar-yadav-cardiac.mp4",
    posterSrc: "/video-posters/rajeshwar-yadav-cardiac.webp",
    duration: "2:25",
    verified: true,
    category: "cardiac",
    tags: {
      en: ["Cardiac Emergency", "Pre-Negotiated Pricing", "Debt Prevention"],
      hi: ["हृदय रोग", "रियायती दरें", "कर्ज मुक्ति"]
    },
    captions: [
      {
        src: "/captions/rajeshwar-yadav-cardiac.en.vtt",
        srclang: "en",
        label: "English"
      },
      {
        src: "/captions/rajeshwar-yadav-cardiac.hi.vtt",
        srclang: "hi",
        label: "हिन्दी",
        default: true
      }
    ]
  }
];
