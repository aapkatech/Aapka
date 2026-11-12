export type Language = 'en' | 'hi';

export interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    testimonials: string;
    team: string;
    contact: string;
    network?: string;
    directSupport: string;
    activeLangLabel: string;
    switchTo: string;
  };
  hero: {
    preHeadline: string;
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    communitiesSupported: string;
    villagesCovered?: string;
    hospitalPartners: string;
    floatingCare: string;
    floatingCareSub: string;
    floatingVetted: string;
    downloadApp?: string;
    connectLabel?: string;
  };
  pillars: {
    tag: string;
    title: string;
    items: Array<{
      id: string;
      title: string;
      description: string;
      detail: string;
    }>;
  };
  services: {
    tag: string;
    title: string;
    tabs: {
      all: string;
      hospital: string;
      home: string;
    };
    learnMore: string;
    items: Array<{
      id: string;
      category: 'hospital' | 'home';
      title: string;
      tagline: string;
      description: string;
    }>;
  };
  network: {
    tag: string;
    title: string;
    description: string;
    requestDirectory: string;
    hubs: Array<{
      region: string;
      specialties: string;
      centers: string;
      coverage: string;
      status: string;
    }>;
  };
  proof: {
    tag: string;
    recognitionTag: string;
    sectionTitle?: string;
    sectionSubtitle?: string;
    metrics?: Array<{
      value: string;
      label: string;
      sub: string;
    }>;
    recognitions?: Array<{
      title: string;
      detail: string;
    }>;
    awards?: Array<{
      id: string;
      title: string;
      badge: string;
      organization: string;
      description: string;
      image: string;
    }>;
  };
  footer: {
    tagline: string;
    company: string;
    location: string;
    phone?: string;
    email?: string;
    carePathwaysTitle: string;
    platformReachTitle: string;
    globalSupportTitle: string;
    privacy: string;
    terms: string;
    governance: string;
    copyright: string;
    pathways: string[];
    platformLinks: string[];
  };
  booking: {
    title: string;
    subtitle: string;
    serviceLabel: string;
    nameLabel: string;
    namePlaceholder: string;
    contactLabel: string;
    contactPlaceholder: string;
    cityLabel: string;
    cityPlaceholder: string;
    submitButton: string;
    submittingButton: string;
    successTitle: string;
    successDesc: string;
    closeButton: string;
    serviceOptions: Record<string, string>;
  };
  testimonials?: {
    tag: string;
    title: string;
    subtitle: string;
    verifiedBadge: string;
    items: Array<{
      id: string;
      name: string;
      location: string;
      rating: number;
      treatment?: string;
      story: string;
      image?: string;
      initials: string;
      mitraHelp?: string;
    }>;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      testimonials: "Testimonials",
      team: "Team",
      contact: "Contact Us",
      network: "Global Network",
      directSupport: "Direct Support",
      activeLangLabel: "English (EN)",
      switchTo: "Switch to हिन्दी"
    },
    hero: {
      preHeadline: "",
      headline: "India's Trusted Healthcare Platform.",
      subheadline: "Let us take care of you.",
      primaryCta: "Explore Our Global Network",
      secondaryCta: "How It Works →",
      communitiesSupported: "25+ Cities",
      villagesCovered: "500+ Villages",
      hospitalPartners: "50+ Vetted Hospital Partners",
      floatingCare: "24/7 Care Coordination",
      floatingCareSub: "Verified Swasthya-Mitras On Call",
      floatingVetted: "100% Vetted Medical Partners",
      downloadApp: "Download the App",
      connectLabel: "Connect"
    },
    pillars: {
      tag: "Our Foundation",
      title: "A healthcare infrastructure built on trust, precision, and human dignity.",
      items: [
        {
          id: "01",
          title: "Verified Global Network",
          description: "Rigorous clinical vetting across tier-1 healthcare systems, academic centers, and regional health institutions. Every surgeon, specialist, and facility meets exacting standards of care.",
          detail: "100% credentialed specialists"
        },
        {
          id: "02",
          title: "Zero-Hassle Coordination",
          description: "Dedicated care navigators handle all administrative burdens—from hospital admissions and bed allocation to insurance pre-authorizations and post-discharge follow-ups.",
          detail: "Dedicated clinical facilitator"
        },
        {
          id: "03",
          title: "Complete Transparency",
          description: "Upfront pricing schedules with no hidden line items or surprise fees. Coupled with bank-grade encryption ensuring your family's longitudinal health records remain private.",
          detail: "Pre-negotiated transparent rates"
        }
      ]
    },
    services: {
      tag: "Care Solutions",
      title: "Comprehensive clinical pathways, curated for simplicity.",
      tabs: {
        all: "All Services",
        hospital: "Hospital & Surgery",
        home: "Remote & Diagnostics"
      },
      learnMore: "Learn more",
      items: [
        {
          id: "hospitalization",
          category: "hospital",
          title: "Hospitalization Assistance",
          tagline: "End-to-end surgical coordination and paperwork clearance.",
          description: "Dedicated clinical facilitators accompany you during admissions, eliminate bureaucratic delay, and guarantee institutional rates."
        },
        {
          id: "teleconsult",
          category: "home",
          title: "Teleconsultation",
          tagline: "Instant video consultations with verified medical specialists.",
          description: "Direct access to top cardiologists, oncologists, pediatricians, and general practitioners from anywhere in the world."
        },
        {
          id: "pathology",
          category: "home",
          title: "Diagnostic Lab Routing",
          tagline: "High-precision pathology with doorstep sample collection.",
          description: "Seamless scheduling with accredited diagnostic centers with verified digital results delivered within 24 hours."
        },
        {
          id: "smartcard",
          category: "hospital",
          title: "Smart Health Card",
          tagline: "Unified preventative care and pre-negotiated family coverage.",
          description: "One digital instrument granting subsidized surgeries, complimentary annual health panels, and pharmacy discounts."
        },
        {
          id: "caretaker",
          category: "home",
          title: "Bedside Attendants & Home Care",
          tagline: "Vetted medical caregivers for post-surgical and elderly recovery.",
          description: "Compassionate, certified nursing professionals providing continuous vital monitoring in hospital wards or at home."
        },
        {
          id: "emergency",
          category: "hospital",
          title: "Emergency Transport Network",
          tagline: "Rapid, GPS-coordinated rural and urban critical care transfer.",
          description: "Advance-life-support vehicles connected to regional hub trauma centers with pre-reserved ICU bed staging."
        }
      ]
    },
    network: {
      tag: "Network Infrastructure",
      title: "46+ Vetted hospital systems and accredited diagnostic laboratories.",
      description: "Every center in our network is contractually bound to transparent fee schedules, zero administrative gouging, and expedited patient intake.",
      requestDirectory: "Request Full Network Directory",
      hubs: [
        {
          region: "North Region Network",
          specialties: "Oncology, Cardiology & Orthopedic Hubs",
          centers: "18 Tier-1 Partner Hospitals",
          coverage: "NCR, Western UP, Haryana & Punjab",
          status: "Direct Bed Allocation Active"
        },
        {
          region: "Central & Rural Network",
          specialties: "General Surgery, Maternal Health & Nephrology",
          centers: "16 District Referral Centers",
          coverage: "Bulandshahr, Meerut, Aligarh & Mathura",
          status: "Swasthya-Mitra On-Duty"
        },
        {
          region: "Diagnostic & Telehealth Grid",
          specialties: "NABL Pathology, MRI/CT & 24/7 Virtual Specialists",
          centers: "12 Accredited Regional Laboratories",
          coverage: "Pan-Bharat 40,000+ Pincodes",
          status: "Home Collection Active"
        }
      ]
    },
    proof: {
      tag: "Recognition",
      recognitionTag: "Institutional Recognition & Awards",
      sectionTitle: "Validated by India’s leading healthcare and entrepreneurial institutions.",
      sectionSubtitle: "Recognized for driving accessible, dignified patient navigation and clinical quality across Bharat.",
      awards: [
        {
          id: "swati-rai",
          title: "Swati Rai Award for Excellence in Entrepreneurship",
          badge: "1st Prize Winner (₹10 Lakh)",
          organization: "Sankalp Bharat Summit",
          description: "Winners of the Swati Rai Award (1st prize of 10 lakh rupees) for Excellence in Entrepreneurship at the Sankalp Bharat Summit.",
          image: "/awards/swati-rai-sankalp-photo.png"
        },
        {
          id: "ficci",
          title: "FICCI Healthcare India Excellence Awards",
          badge: "Top 3 Finalist",
          organization: "FICCI New Delhi",
          description: "Finalist in FICCI Healthcare India Excellence Award (Top 3) organized by Federation of Indian Chambers of Commerce & Industry, New Delhi.",
          image: "/awards/ficci-healthcare-photo.png"
        },
        {
          id: "iim-kashipur",
          title: "Scale UP Pitchathon — Uththistha 2024",
          badge: "1st Runner-Up",
          organization: "IIM Kashipur",
          description: "Became first runner up among 70 startups at Scale UP pitchathon at Uththistha 2024, organized by IIM Kashipur.",
          image: "/awards/iim-kashipur-photo.png"
        }
      ]
    },
    footer: {
      tagline: "Aapka offers a transformative solution to rural India's healthcare and hygiene challenges through an intuitive app and dedicated local representatives. Our platform seamlessly connects villagers with healthcare professionals, essential products, enhancing convenience, affordability, and quality.",
      company: "SP Rural India Services Private Limited",
      location: "201 Convention Centre, JNU New Delhi, 110067",
      phone: "+91 9667033044",
      email: "Info@Aapka.co.in",
      carePathwaysTitle: "Care Pathways",
      platformReachTitle: "Platform & Reach",
      globalSupportTitle: "Global Support",
      privacy: "Privacy & Data Safeguards",
      terms: "Terms of Healthcare Access",
      governance: "Clinical Governance",
      copyright: "© 2026 SP Rural India Services Private Limited. All rights reserved.",
      pathways: [
        "Hospitalization Assistance",
        "Teleconsultations",
        "Pathology Routing",
        "Smart Health Card",
        "Emergency Transport"
      ],
      platformLinks: [
        "The Three Pillars",
        "Quiet Scale & Proof",
        "Network Hospitals (46+)",
        "Clinical Quality Vetting",
        "Institutional Grants"
      ]
    },
    booking: {
      title: "Access Clinical Coordination",
      subtitle: "Submit your requirement. A dedicated Swasthya-Mitra coordinator will contact you.",
      serviceLabel: "Required Care Pathway",
      nameLabel: "Full Name of Patient / Guardian",
      namePlaceholder: "e.g. Rahul Sharma",
      contactLabel: "Phone Number / WhatsApp",
      contactPlaceholder: "10-digit mobile number",
      cityLabel: "City / District",
      cityPlaceholder: "e.g. Meerut, Bulandshahr, Delhi NCR",
      submitButton: "Request Care Navigation",
      submittingButton: "Initiating Coordination...",
      successTitle: "Coordination Request Logged",
      successDesc: "Our clinical coordination desk has received your request. A dedicated care navigator will reach you.",
      closeButton: "Close Window",
      serviceOptions: {
        hospitalization: "Hospitalization & Surgery Coordination",
        consultation: "Doctor Teleconsultation (Instant / Scheduled)",
        diagnostics: "Diagnostic Lab & Pathology Home Collection",
        emergency: "Emergency Transport & Bed Reservation",
        card: "Smart Health Card Inquiry"
      }
    },
    testimonials: {
      tag: "Verified Patient Experiences",
      title: "Real Stories of Healing and Financial Protection",
      subtitle: "Authentic accounts from patients and families guided through complex treatments with verified hospitals by Aapka's Swasthya Mitras.",
      verifiedBadge: "Verified Patient",
      items: [
        {
          id: "amarpal-singh",
          name: "Mr. AmarPal Singh",
          location: "Village Kheda Gautam Budh Nagar",
          rating: 5,
          treatment: "Tumor Operation & Hospital Guidance",
          story: "I was having a tumor in my head, I got appointment for a date after 3 years in govt hospitals for my operation, while my tumor was ready to burst in 3 months. Private Hospitals were very expensive. SmartGram helped me to check a good hospital at a price I could afford..",
          image: "/testimonials/amarpal-singh.webp",
          initials: "AS",
          mitraHelp: "Hospital Guidance & Surgical Rate Audit"
        },
        {
          id: "kumar-madhur",
          name: "Mr Kumar Madhur",
          location: "Raj Nagar Extension Ghaziabad",
          rating: 5,
          treatment: "Specialist Consultation & Procedure Coordination",
          story: "I didn’t know where to go for my Hair transplant. I contacted SmartGram people and they fixed my appointment at 3 places. They provided us transport and their “Swastha Mitra” helped us in the entire procedure and they get it done at a discounted price. I am extremely satisfied with their services and recommend them to everyone.",
          initials: "KM",
          mitraHelp: "Multi-Center Consultation & Transport Support"
        },
        {
          id: "anupam",
          name: "Ms Anupam",
          location: "Village Chhapraula Ghaziabad",
          rating: 5,
          treatment: "Kidney Stone Surgery & Paperwork Clearance",
          story: "For my Kidney stone operation, I consulted local doctor in our village. But he was not able to operate it. We didn’t knew about many hospitals in city and didn’t know how to deal with the paperwork in hospital. SmartGram waale bhaiya (Swastha Mitra) helped for for appointment , paperwork and surgery procedure. I am very thankful for them.",
          image: "/testimonials/anupam.webp",
          initials: "A",
          mitraHelp: "Paperwork Clearance & Surgery Procedure Support"
        }
      ]
    }
  },

  hi: {
    nav: {
      home: "होम",
      about: "हमारे बारे में",
      services: "सेवाएं",
      testimonials: "प्रशंसापत्र",
      team: "टीम",
      contact: "संपर्क करें",
      network: "अस्पताल नेटवर्क",
      directSupport: "24/7 सहायता",
      activeLangLabel: "हिन्दी (IN)",
      switchTo: "Switch to English"
    },
    hero: {
      preHeadline: "",
      headline: "भारत का सबसे विश्वसनीय स्वास्थ्य सेवा मंच।",
      subheadline: "आपकी देखभाल, हमारी ज़िम्मेदारी।",
      primaryCta: "हमारा हेल्थकेयर नेटवर्क देखें",
      secondaryCta: "यह कैसे काम करता है →",
      communitiesSupported: "25+ शहर",
      villagesCovered: "500+ गांव",
      hospitalPartners: "50+ सत्यापित अस्पताल भागीदार",
      floatingCare: "24/7 स्वास्थ्य मार्गदर्शन",
      floatingCareSub: "सत्यापित स्वास्थ्य-मित्र सदैव उपलब्ध",
      floatingVetted: "100% सत्यापित चिकित्सा भागीदार",
      downloadApp: "ऐप डाउनलोड करें",
      connectLabel: "संपर्क करें"
    },
    pillars: {
      tag: "हमारी प्रतिबद्धता",
      title: "विश्वास, विशेषज्ञता और मानवीय गरिमा पर आधारित स्वास्थ्य सेवा तंत्र।",
      items: [
        {
          id: "01",
          title: "सत्यापित अस्पताल नेटवर्क",
          description: "टियर-1 सुपर-स्पेशियलिटी अस्पतालों और मेडिकल संस्थानों की कठोर जांच। हर सर्जन, विशेषज्ञ और स्वास्थ्य सुविधा उच्चतम मानकों पर खरी उतरती है।",
          detail: "100% प्रमाणित विशेषज्ञ डॉक्टर"
        },
        {
          id: "02",
          title: "सहज व सरल समन्वय",
          description: "हमारे समर्पित केयर-नेविगेटर अस्पताल में भर्ती, बेड आवंटन, इंश्योरेंस क्लीयरेंस और डिस्चार्ज के बाद तक सभी प्रशासनिक व्यवस्थाएं संभालते हैं।",
          detail: "समर्पित स्वास्थ्य समन्वयक (Swasthya-Mitra)"
        },
        {
          id: "03",
          title: "पूर्ण पारदर्शिता",
          description: "पूर्व-निर्धारित स्पष्ट शुल्क और शून्य छिपा हुआ खर्च। साथ ही बैंक-स्तरीय सुरक्षा जिससे आपके परिवार का स्वास्थ्य डेटा पूरी तरह सुरक्षित रहे।",
          detail: "पारदर्शी एवं पूर्व-निर्धारित दरें"
        }
      ]
    },
    services: {
      tag: "स्वास्थ्य समाधान",
      title: "सरल, सुलभ और व्यापक स्वास्थ्य सेवाएं।",
      tabs: {
        all: "सभी सेवाएं",
        hospital: "अस्पताल व सर्जरी",
        home: "घर पर जांच व परामर्श"
      },
      learnMore: "विस्तार से जानें",
      items: [
        {
          id: "hospitalization",
          category: "hospital",
          title: "अस्पताल भर्ती सहायता",
          tagline: "सर्जरी और अस्पताल भर्ती में संपूर्ण कागजी व प्रशासनिक सहायता।",
          description: "हमारे स्वास्थ्य-मित्र आपके साथ अस्पताल में उपस्थित रहकर त्वरित भर्ती, बेड आरक्षण और रियायती दरों की गारंटी देते हैं।"
        },
        {
          id: "teleconsult",
          category: "home",
          title: "ऑनलाइन डॉक्टर परामर्श",
          tagline: "शीर्ष विशेषज्ञ डॉक्टरों के साथ तुरंत वीडियो परामर्श।",
          description: "देश के प्रमुख कार्डियोलॉजिस्ट, ऑन्कोलॉजिस्ट, पीडियाट्रिशियन और सामान्य चिकित्सकों से घर बैठे परामर्श प्राप्त करें।"
        },
        {
          id: "pathology",
          category: "home",
          title: "पैथोलॉजी व डायग्नोस्टिक टेस्ट",
          tagline: "सटीक पैथोलॉजी जांच, घर बैठे सैंपल कलेक्शन के साथ।",
          description: "एनएबीएल (NABL) मान्यता प्राप्त प्रयोगशालाओं से जांच और 24 घंटे के भीतर डिजिटल रिपोर्ट की सुविधा।"
        },
        {
          id: "smartcard",
          category: "hospital",
          title: "आपका स्मार्ट हेल्थ कार्ड",
          tagline: "परिवार के लिए रियायती उपचार और संपूर्ण स्वास्थ्य सुरक्षा।",
          description: "एक डिजिटल हेल्थ कार्ड जिसके माध्यम से सर्जरी पर विशेष छूट, निःशुल्क वार्षिक जांच और दवाइयों पर रियायत मिलती है।"
        },
        {
          id: "caretaker",
          category: "home",
          title: "होम केयर व नर्सिंग अटेंडेंट",
          tagline: "बुजुर्गों और सर्जरी के बाद देखभाल हेतु प्रशिक्षित स्वास्थ्यकर्मी।",
          description: "घर या अस्पताल में निरंतर स्वास्थ्य निगरानी और देखभाल के लिए संवेदनशील एवं प्रमाणित नर्सिंग स्टाफ।"
        },
        {
          id: "emergency",
          category: "hospital",
          title: "आपातकालीन एम्बुलेंस नेटवर्क",
          tagline: "जीपीएस-सक्षम त्वरित क्रिटिकल केयर एम्बुलेंस सेवा।",
          description: "उन्नत लाइफ-सपोर्ट (ALS) एम्बुलेंस और नजदीकी ट्रॉमा सेंटर में पूर्व-आरक्षित आईसीयू बेड की त्वरित व्यवस्था।"
        }
      ]
    },
    network: {
      tag: "नेटवर्क क्षमता",
      title: "46+ सत्यापित अस्पताल और मान्यता प्राप्त डायग्नोस्टिक लैब्स।",
      description: "हमारे नेटवर्क का प्रत्येक केंद्र पारदर्शी दरों, शून्य अनावश्यक शुल्क और मरीजों के त्वरित उपचार के लिए प्रतिबद्ध है।",
      requestDirectory: "विस्तृत अस्पताल सूची का अनुरोध करें",
      hubs: [
        {
          region: "उत्तर भारत नेटवर्क",
          specialties: "ऑन्कोलॉजी, कार्डियोलॉजी एवं ऑर्थोपेडिक केंद्र",
          centers: "18 टियर-1 पार्टनर अस्पताल",
          coverage: "एनसीआर, पश्चिमी यूपी, हरियाणा एवं पंजाब",
          status: "सीधा बेड आवंटन सक्रिय"
        },
        {
          region: "मध्य एवं ग्रामीण नेटवर्क",
          specialties: "जनरल सर्जरी, मातृ स्वास्थ्य एवं नेफ्रोलॉजी",
          centers: "16 जिला रेफरल केंद्र",
          coverage: "बुलंदशहर, मेरठ, अलीगढ़ एवं मथुरा",
          status: "स्वास्थ्य-मित्र ऑन-ड्यूटी"
        },
        {
          region: "डायग्नोस्टिक व टेलीहेल्थ ग्रिड",
          specialties: "एनएबीएल पैथोलॉजी, एमआरआई/सीटी और 24/7 डॉक्टर",
          centers: "12 मान्यता प्राप्त क्षेत्रीय प्रयोगशालाएं",
          coverage: "अखिल भारतीय 40,000+ पिनकोड",
          status: "होम सैंपल कलेक्शन चालू"
        }
      ]
    },
    proof: {
      tag: "मान्यता एवं सम्मान",
      recognitionTag: "राष्ट्रीय सम्मान एवं उपलब्धियां",
      sectionTitle: "भारत के प्रमुख स्वास्थ्य एवं नवाचार संस्थानों द्वारा सम्मानित।",
      sectionSubtitle: "ग्रामीण व अर्ध-शहरी क्षेत्रों में सुलभ एवं गुणवत्तापूर्ण स्वास्थ्य सेवाओं के लिए प्रतिष्ठित पुरस्कार।",
      awards: [
        {
          id: "swati-rai",
          title: "स्वाति राय अवार्ड फॉर एक्सीलेंस इन एंटरप्रेन्योरशिप",
          badge: "प्रथम पुरस्कार (₹10 लाख विजेता)",
          organization: "संकल्प भारत सम्मेलन",
          description: "संकल्प भारत समिट में उद्यमिता में उत्कृष्टता के लिए स्वाति राय पुरस्कार (10 लाख रुपये का प्रथम पुरस्कार) विजेता।",
          image: "/awards/swati-rai-sankalp-photo.png"
        },
        {
          id: "ficci",
          title: "फिक्की हेल्थकेयर इंडिया एक्सीलेंस अवार्ड्स",
          badge: "फाइनलिस्ट (शीर्ष 3)",
          organization: "फिक्की (FICCI) नई दिल्ली",
          description: "फेडरेशन ऑफ इंडियन चैंबर्स ऑफ कॉमर्स एंड इंडस्ट्री (FICCI), नई दिल्ली द्वारा आयोजित हेल्थकेयर एक्सीलेंस अवार्ड्स में शीर्ष 3 फाइनलिस्ट।",
          image: "/awards/ficci-healthcare-photo.png"
        },
        {
          id: "iim-kashipur",
          title: "स्केल-अप पिचथॉन — उत्तिष्ठ 2024",
          badge: "प्रथम उपविजेता (1st Runner-Up)",
          organization: "आईआईएम काशीपुर",
          description: "आईआईएम काशीपुर द्वारा आयोजित उत्तिष्ठ 2024 के स्केल-अप पिचथॉन में 70 स्टार्टअप्स के बीच प्रथम उपविजेता।",
          image: "/awards/iim-kashipur-photo.png"
        }
      ]
    },
    footer: {
      tagline: "आपका (Aapka) एक सहज ऐप और समर्पित स्थानीय प्रतिनिधियों के माध्यम से ग्रामीण भारत की स्वास्थ्य एवं स्वच्छता संबंधी चुनौतियों का एक परिवर्तनकारी समाधान प्रदान करता है। हमारा मंच ग्रामीणों को स्वास्थ्य पेशेवरों और आवश्यक उत्पादों से सीधे जोड़ता है, जिससे सुविधा, वहनीयता और गुणवत्ता में सुधार होता है।",
      company: "एसपी रूरल इंडिया सर्विसेज प्राइवेट लिमिटेड",
      location: "201 कन्वेंशन सेंटर, जेएनयू, नई दिल्ली - 110067",
      phone: "+91 9667033044",
      email: "Info@Aapka.co.in",
      carePathwaysTitle: "स्वास्थ्य सेवाएं",
      platformReachTitle: "मंच व पहुंच",
      globalSupportTitle: "सहायता व संपर्क",
      privacy: "डेटा गोपनीयता व सुरक्षा",
      terms: "सेवा नियम व शर्तें",
      governance: "क्लिनिकल गवर्नेंस",
      copyright: "© 2026 एसपी रूरल इंडिया सर्विसेज प्राइवेट लिमिटेड। सर्वाधिकार सुरक्षित।",
      pathways: [
        "अस्पताल भर्ती सहायता",
        "ऑनलाइन डॉक्टर परामर्श",
        "पैथोलॉजी व लैब जांच",
        "स्मार्ट हेल्थ कार्ड",
        "आपातकालीन एम्बुलेंस"
      ],
      platformLinks: [
        "हमारे तीन स्तंभ",
        "विश्वसनीयता और प्रभाव",
        "नेटवर्क अस्पताल (46+)",
        "गुणवत्ता जांच मानक",
        "राष्ट्रीय अनुदान"
      ]
    },
    booking: {
      title: "स्वास्थ्य समन्वय सहायता",
      subtitle: "कृपया अपनी आवश्यकता दर्ज करें। हमारे केयर-कोऑर्डिनेटर (स्वास्थ्य-मित्र) आपसे संपर्क करेंगे।",
      serviceLabel: "आवश्यक स्वास्थ्य सेवा",
      nameLabel: "मरीज या अभिभावक का नाम",
      namePlaceholder: "उदा. राहुल शर्मा",
      contactLabel: "फोन नंबर / व्हाट्सएप",
      contactPlaceholder: "10 अंकों का मोबाइल नंबर",
      cityLabel: "शहर या जिला",
      cityPlaceholder: "उदा. मेरठ, बुलंदशहर, दिल्ली एनसीआर",
      submitButton: "सहायता अनुरोध भेजें",
      submittingButton: "अनुरोध दर्ज हो रहा है...",
      successTitle: "अनुरोध सफलतापूर्वक प्राप्त हुआ",
      successDesc: "हमारे स्वास्थ्य-मित्र आपके विवरण की समीक्षा कर रहे हैं और आपसे संपर्क करेंगे।",
      closeButton: "विंडो बंद करें",
      serviceOptions: {
        hospitalization: "अस्पताल भर्ती व सर्जरी सहायता",
        consultation: "ऑनलाइन डॉक्टर परामर्श (Teleconsultation)",
        diagnostics: "पैथोलॉजी व डायग्नोस्टिक लैब टेस्ट",
        emergency: "आपातकालीन एम्बुलेंस व आईसीयू बेड",
        card: "स्मार्ट हेल्थ कार्ड पूछताछ"
      }
    },
    testimonials: {
      tag: "सत्यापित मरीज अनुभव",
      title: "उपचार और आर्थिक सुरक्षा की सच्ची कहानियां",
      subtitle: "उत्तर प्रदेश और एनसीआर के परिवारों के वास्तविक अनुभव, जिन्हें आपका और हमारे स्वास्थ्य मित्रों ने सही समय और सही खर्च पर उपचार दिलाया।",
      verifiedBadge: "सत्यापित मरीज",
      items: [
        {
          id: "amarpal-singh",
          name: "श्री अमरपाल सिंह",
          location: "ग्राम खेड़ा, गौतम बुद्ध नगर",
          rating: 5,
          treatment: "ट्यूमर ऑपरेशन एवं अस्पताल मार्गदर्शन",
          story: "मेरे सिर में ट्यूमर था, सरकारी अस्पताल में ऑपरेशन के लिए 3 साल बाद की तारीख मिली थी, जबकि मेरा ट्यूमर 3 महीने में फटने की कगार पर था। प्राइवेट अस्पताल बहुत महंगे थे। स्मार्टग्राम (आपका) ने मेरी क्षमता के अनुसार एक बेहतरीन अस्पताल खोजने में पूरी मदद की..",
          image: "/testimonials/amarpal-singh.webp",
          initials: "AS",
          mitraHelp: "अस्पताल मार्गदर्शन एवं सही खर्च पर समन्वय"
        },
        {
          id: "kumar-madhur",
          name: "श्री कुमार मधुर",
          location: "राज नगर एक्सटेंशन, गाजियाबाद",
          rating: 5,
          treatment: "विशेषज्ञ परामर्श एवं उपचार व्यवस्था",
          story: "मुझे समझ नहीं आ रहा था कि हेयर ट्रांसप्लांट के लिए कहाँ जाऊँ। मैंने स्मार्टग्राम टीम से संपर्क किया और उन्होंने 3 जगहों पर अपॉइंटमेंट तय किए। उन्होंने हमें ट्रांसपोर्ट दिया और उनके 'स्वास्थ्य मित्र' ने पूरी प्रक्रिया में मदद की और डिस्काउंटेड दर पर काम कराया। मैं उनकी सेवाओं से बेहद संतुष्ट हूँ और सबको सुझाव देता हूँ।",
          initials: "KM",
          mitraHelp: "मल्टी-सेंटर परामर्श एवं आवागमन सुविधा"
        },
        {
          id: "anupam",
          name: "सुश्री अनुपम",
          location: "ग्राम छपरौला, गाजियाबाद",
          rating: 5,
          treatment: "किडनी स्टोन सर्जरी व कागजी कार्रवाई",
          story: "किडनी स्टोन के ऑपरेशन के लिए हमने गाँव के डॉक्टर से संपर्क किया था, पर वे ऑपरेशन नहीं कर सके। हमें शहर के अस्पतालों और कागजी कार्रवाई की कोई जानकारी नहीं थी। स्मार्टग्राम वाले भैया (स्वास्थ्य मित्र) ने अपॉइंटमेंट, कागजी कार्रवाई और सर्जरी प्रक्रिया में हर कदम पर मदद की। मैं दिल से आभारी हूँ।",
          image: "/testimonials/anupam.webp",
          initials: "A",
          mitraHelp: "कागजी कार्रवाई एवं सर्जरी प्रक्रिया सहायता"
        }
      ]
    }
  }
};
