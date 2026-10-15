export type Language = 'en' | 'hi';

export interface Translations {
  nav: {
    services: string;
    network: string;
    about: string;
    contact: string;
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
    hospitalPartners: string;
    floatingCare: string;
    floatingCareSub: string;
    floatingVetted: string;
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
    metrics: Array<{
      value: string;
      label: string;
      sub: string;
    }>;
    recognitionTag: string;
    recognitions: Array<{
      title: string;
      detail: string;
    }>;
  };
  footer: {
    tagline: string;
    company: string;
    location: string;
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
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      services: "Services",
      network: "Global Network",
      about: "About",
      contact: "Contact",
      directSupport: "Direct Support",
      activeLangLabel: "English (EN)",
      switchTo: "Switch to हिन्दी"
    },
    hero: {
      preHeadline: "let us take care of you.",
      headline: "Your Family’s Health, Seamlessly Coordinated.",
      subheadline: "Connecting every corner of Bharat with direct access to top-tier verified medical partners and compassionate community care.",
      primaryCta: "Explore Our Global Network",
      secondaryCta: "How It Works →",
      communitiesSupported: "500+ Communities Supported",
      hospitalPartners: "46+ Vetted Hospital Partners",
      floatingCare: "24/7 Care Coordination",
      floatingCareSub: "Verified Swasthya-Mitras On Call",
      floatingVetted: "100% Vetted Medical Partners"
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
      tag: "Quiet Scale",
      metrics: [
        { value: "500+", label: "Communities Served", sub: "Grassroots village clusters" },
        { value: "40k+", label: "Pin Codes Covered", sub: "Nationwide care reach" },
        { value: "46+", label: "Accredited Hospitals", sub: "Tier-1 network partners" },
        { value: "₹4.2Cr", label: "Patient Capital Preserved", sub: "Direct surgical & drug savings" }
      ],
      recognitionTag: "Institutional Recognition & Grants",
      recognitions: [
        { title: "FICCI Healthcare Awards", detail: "Excellence Finalist" },
        { title: "Sankalp Bharat Summit", detail: "Top Social Enterprise" },
        { title: "Swati Rai Innovation", detail: "₹10 Lakh Winner" },
        { title: "IIM Kashipur Uththistha", detail: "1st Runner-Up" }
      ]
    },
    footer: {
      tagline: "Healthcare, simplified for everyone, everywhere. Bridging patient households with accredited hospital infrastructure and digital care navigation.",
      company: "SP Rural India Services Private Limited",
      location: "Supported at Atal Incubation Centre, Jawaharlal Nehru University (JNU), New Delhi - 110067, India.",
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
      subtitle: "Submit your requirement. A dedicated Swasthya-Mitra coordinator will contact you within 15 minutes.",
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
      successDesc: "Our clinical coordination desk has received your request. A dedicated care navigator will reach you within 15 minutes.",
      closeButton: "Close Window",
      serviceOptions: {
        hospitalization: "Hospitalization & Surgery Coordination",
        consultation: "Doctor Teleconsultation (Instant / Scheduled)",
        diagnostics: "Diagnostic Lab & Pathology Home Collection",
        emergency: "Emergency Transport & Bed Reservation",
        card: "Smart Health Card Inquiry"
      }
    }
  },

  hi: {
    nav: {
      services: "सेवाएं",
      network: "अस्पताल नेटवर्क",
      about: "हमारे बारे में",
      contact: "संपर्क",
      directSupport: "24/7 सहायता",
      activeLangLabel: "हिन्दी (IN)",
      switchTo: "Switch to English"
    },
    hero: {
      preHeadline: "आपकी देखभाल, हमारी ज़िम्मेदारी।",
      headline: "आपके परिवार का स्वास्थ्य, अब पूरी तरह सुरक्षित व व्यवस्थित।",
      subheadline: "भारत के हर कोने को शीर्ष सत्यापित चिकित्सा संस्थानों, विशेषज्ञ डॉक्टरों और विश्वसनीय सामुदायिक स्वास्थ्य सेवाओं से सीधे जोड़ते हुए।",
      primaryCta: "हमारा हेल्थकेयर नेटवर्क देखें",
      secondaryCta: "यह कैसे काम करता है →",
      communitiesSupported: "500+ समुदाय जुड़े",
      hospitalPartners: "46+ सत्यापित अस्पताल भागीदार",
      floatingCare: "24/7 स्वास्थ्य मार्गदर्शन",
      floatingCareSub: "सत्यापित स्वास्थ्य-मित्र सदैव उपलब्ध",
      floatingVetted: "100% सत्यापित चिकित्सा भागीदार"
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
      tag: "विश्वसनीयता और प्रभाव",
      metrics: [
        { value: "500+", label: "समुदाय जुड़े", sub: "ग्रामीण एवं अर्ध-शहरी क्लस्टर" },
        { value: "40k+", label: "पिनकोड में पहुंच", sub: "देशव्यापी सेवा उपलब्धता" },
        { value: "46+", label: "मान्यता प्राप्त अस्पताल", sub: "शीर्ष टियर-1 नेटवर्क पार्टनर" },
        { value: "₹4.2Cr+", label: "मरीजों की बचत", sub: "सर्जरी और दवाओं पर सीधी राहत" }
      ],
      recognitionTag: "राष्ट्रीय सम्मान एवं अनुदान",
      recognitions: [
        { title: "फिक्की हेल्थकेयर अवार्ड्स (FICCI)", detail: "उत्कृष्टता फाइनलिस्ट" },
        { title: "संकल्प भारत सम्मेलन", detail: "शीर्ष सामाजिक उद्यम विजेता" },
        { title: "स्वाति राय इनोवेशन ग्रांट", detail: "₹10 लाख विजेता" },
        { title: "आईआईएम काशीपुर उत्तिष्ठ", detail: "प्रथम उपविजेता (1st Runner-Up)" }
      ]
    },
    footer: {
      tagline: "स्वास्थ्य सेवा, हर किसी के लिए, हर जगह। मरीजों और परिवारों को गुणवत्तापूर्ण अस्पतालों और डिजिटल स्वास्थ्य सेवाओं से जोड़ना।",
      company: "एसपी रूरल इंडिया सर्विसेज प्राइवेट लिमिटेड",
      location: "अटल इनक्यूबेशन सेंटर, जवाहरलाल नेहरू विश्वविद्यालय (JNU), नई दिल्ली - 110067, भारत।",
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
      subtitle: "कृपया अपनी आवश्यकता दर्ज करें। हमारे केयर-कोऑर्डिनेटर (स्वास्थ्य-मित्र) 15 मिनट में आपसे संपर्क करेंगे।",
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
      successDesc: "हमारे स्वास्थ्य-मित्र आपके विवरण की समीक्षा कर रहे हैं और 15 मिनट के भीतर आपसे संपर्क करेंगे।",
      closeButton: "विंडो बंद करें",
      serviceOptions: {
        hospitalization: "अस्पताल भर्ती व सर्जरी सहायता",
        consultation: "ऑनलाइन डॉक्टर परामर्श (Teleconsultation)",
        diagnostics: "पैथोलॉजी व डायग्नोस्टिक लैब टेस्ट",
        emergency: "आपातकालीन एम्बुलेंस व आईसीयू बेड",
        card: "स्मार्ट हेल्थ कार्ड पूछताछ"
      }
    }
  }
};
