export type Language = 'en' | 'hi';

export const content = {
  en: {
    nav: {
      about: "About Us",
      services: "Services",
      smartCard: "Smart Health Card",
      gramMitra: "Gram Mitra",
      impact: "Impact & Awards",
      testimonials: "Patient Stories",
      contact: "Contact",
      downloadApp: "Book Service / App",
      emergencyCall: "24x7 Helpline: 96670 33044"
    },
    stickers: {
      awardWinner: "🏆 Sankalp Bharat Award Winner",
      villagesCovered: "⭐ 500+ Villages Covered",
      verifiedHospitals: "🛡️ 100% Verified Partner Hospitals",
      zeroPaperwork: "⚡ Zero Paperwork Stress",
      swatiRai: "💰 Swati Rai Award Winner (₹10 Lakh)",
      ficciAward: "🎖️ FICCI Healthcare Finalist",
      iimAward: "🥈 1st Runner-Up IIM Kashipur (Uththistha '24)",
      ayushmanCompliant: "✅ Ayushman Bharat Support",
      atHomeCollection: "🧪 Free At-Home Sample Pickup",
      savingsBadge: "Save up to 40% on Hospital Bills"
    },
    hero: {
      tagline: "Bharat's Grassroots Healthcare Revolution",
      headline: "Let us take care of you — Healthcare accessibility for every corner of Bharat.",
      subheadline: "Bridging the rural-urban divide with trusted local Swasthya-Mitras, guaranteed hospital discounts, seamless paperwork handling, and 24x7 doctor tele-consultations.",
      applyCardCTA: "Apply For Smart Health Card",
      exploreServicesCTA: "Explore Services",
      cardPreviewTitle: "Aapka Smart Health Card",
      cardSubtitle: "One Card. Complete Family Health Security.",
      verifiedText: "Verified by SP Rural India Services",
      familyCover: "Family of 6 Covered",
      admissionSupport: "2-Hour Bed Guarantee",
      callNow: "Need Emergency Assistance?",
      callNumber: "+91 96670 33044"
    },
    impact: {
      title: "Recognized Nationwide for Transforming Grassroots Healthcare",
      subtitle: "Backing from India's premier healthcare and entrepreneurship institutions",
      metricVillages: "500+",
      metricVillagesLabel: "Villages Empowered",
      metricHospitals: "46+",
      metricHospitalsLabel: "Verified Partner Hospitals",
      metricPincodes: "40,000+",
      metricPincodesLabel: "Pincodes Supported",
      metricLives: "15,000+",
      metricLivesLabel: "Patients Treated with Dignity"
    },
    services: {
      badge: "Comprehensive Care Network",
      title: "Healthcare Solutions Built For Rural & Semi-Urban India",
      subtitle: "From OPD consultations to complex surgical hospitalizations, your local Swasthya-Mitra stands beside you at every step.",
      bookBtn: "Book Service Now",
      learnMore: "Learn More",
      items: [
        {
          id: "hospitalization",
          title: "Hospitalization Assistance",
          tagline: "Never face hospitalization alone",
          description: "Our dedicated Swasthya-Mitra accompanies you to the hospital, handles all admission paperwork, ensures pre-negotiated package discounts, and resolves insurance or Ayushman claims.",
          badge: "Most Trusted",
          icon: "Hospital",
          stat: "Avg. ₹28,000 saved per surgery"
        },
        {
          id: "caretaker",
          title: "24x7 Care Taker & Bedside Support",
          tagline: "Dedicated nursing & elderly care",
          description: "Compassionate, trained medical attendants and caregivers for post-operative recovery, chronic patient monitoring, and elderly family members right at home or in-ward.",
          badge: "Verified Staff",
          icon: "HeartHandshake",
          stat: "Over 8,000 care hours logged"
        },
        {
          id: "pathology",
          title: "Pathology & Radiology Tests",
          tagline: "Accredited diagnostics at your doorstep",
          description: "Book blood tests, urine panels, ECG, and diagnostic imaging. Swasthya-Mitras collect samples from your home with guaranteed NABL lab results delivered to your phone in 24 hours.",
          badge: "Up to 50% Off",
          icon: "FlaskConical",
          stat: "120+ Diagnostic panels available"
        },
        {
          id: "teleconsult",
          title: "Doctor Tele-Consultation",
          tagline: "Video & phone expert care in your dialect",
          description: "Connect with specialized doctors (Cardiologists, Gynecologists, Pediatricians, General Physicians) in Hindi, Bhojpuri, Maithili, and English without traveling 50km to the city.",
          badge: "Instant Connect",
          icon: "PhoneCall",
          stat: "< 10 min average wait time"
        },
        {
          id: "smartcard",
          title: "Aapka Smart Health Card",
          tagline: "One card for the entire family's health",
          description: "Unlock pre-negotiated OPD & surgery discounts, medicine subsidies at partner pharmacies, and a yearly preventative health checkup package for all family members.",
          badge: "All-In-One",
          icon: "CreditCard",
          stat: "Save ₹35,000+ annually"
        },
        {
          id: "emergency",
          title: "Emergency Ambulance Dispatch",
          tagline: "Rapid response rural ambulance network",
          description: "GPS-enabled emergency ambulance booking with oxygen-equipped vehicles and oxygen concentrators, dispatched directly from local district hubs with zero price gouging.",
          badge: "24x7 Emergency",
          icon: "Ambulance",
          stat: "Fastest rural response"
        }
      ]
    },
    calculator: {
      badge: "Savings Calculator",
      title: "Calculate How Much Your Family Can Save",
      subtitle: "See how the Aapka Smart Health Card protects your hard-earned household savings against sudden medical expenses.",
      familyLabel: "Select Family Members Covered:",
      serviceLabel: "Select Anticipated Health Needs:",
      annualEstimatedSavings: "Estimated Annual Savings with Aapka",
      routineCheckups: "Free Annual Preventative Checkups Included",
      medicineSavings: "Flat 15% - 25% Off at Partner Chemists",
      surgeryDiscount: "Up to 30% Off on Planned Surgeries",
      cta: "Claim Your Card Now"
    },
    gramMitra: {
      badge: "Community Guardian Network",
      title: "Empowering Rural Youth & Women: The Gram Mitra Program",
      subtitle: "Local champions trained as certified healthcare facilitators, providing vital medical guidance while earning a respectable, stable livelihood in their own villages.",
      point1Title: "Doctor-Certified Training",
      point1Desc: "Comprehensive orientation on patient triaging, basic diagnostics, digital record management, and Ayushman claim facilitation.",
      point2Title: "Digital Health Kit Provided",
      point2Desc: "Smart diagnostic kit equipped with digital BP monitor, pulse oximeter, blood glucometer, and smartphone diagnostic app.",
      point3Title: "Dignified Village Income",
      point3Desc: "Earn ₹15,000 – ₹35,000 per month through diagnostic bookings, hospitalization coordination, and health card registrations.",
      cta: "Become a Gram Mitra Today",
      cardName: "Manoj Kumar",
      cardRole: "Lead Swasthya-Mitra",
      cardLocation: "Bulandshahr District, UP",
      cardStat: "120+ Families Assisted This Month"
    },
    testimonials: {
      badge: "Real Stories of Hope",
      title: "Transforming Lives Across Rural Bharat",
      subtitle: "Hear directly from patients and families who experienced seamless, affordable treatment with Aapka's Swasthya-Mitras.",
      items: [
        {
          id: 1,
          name: "Rameshwar Sharma",
          location: "Ghaziabad, Uttar Pradesh",
          treatment: "Tumor Care & Surgical Assistance",
          saving: "Saved ₹1,85,000",
          quote: "When my mother was diagnosed with an abdominal tumor, private hospitals quoted ₹3.5 Lakhs which was impossible for us. Our Aapka Swasthya-Mitra guided us to a top partner hospital, got our Ayushman paperwork cleared in 4 hours, and supervised the surgery. We paid less than half and my mother is fully healthy today.",
          rating: 5
        },
        {
          id: 2,
          name: "Smt. Kamla Devi",
          location: "Bulandshahr, Uttar Pradesh",
          treatment: "Kidney Stone Laser Surgery",
          saving: "Saved ₹42,000",
          quote: "I was suffering from unbearable kidney stone pain. The local Aapka Gram Mitra arranged an ambulance within 30 minutes, took us to a verified hospital in Noida, and stayed with my family through the admission and discharge. No hidden fees, pure honesty and brotherly care.",
          rating: 5
        },
        {
          id: 3,
          name: "Vikas Yadav",
          location: "Noida Sector 62 / Rural Fringe",
          treatment: "Hair Restoration & Reconstructive Care",
          saving: "Saved ₹55,000",
          quote: "I had scalp scarring and severe hair loss after a road accident. Most clinics offered inflated rates and confusing promises. Aapka connected me with a board-certified reconstructive surgeon through their Smart Card discount network with zero commission markup.",
          rating: 5
        },
        {
          id: 4,
          name: "Mohd. Irfan",
          location: "Meerut District, Uttar Pradesh",
          treatment: "Emergency Cardiac Stenting",
          saving: "Saved ₹95,000",
          quote: "My father experienced chest angina late at night. The Aapka 24x7 helpline coordinated an ICU bed with a cath lab ready before we even reached. That speed and hospital coordination saved his life. I recommend every rural household to keep this card.",
          rating: 5
        }
      ]
    },
    pincode: {
      badge: "Check Village Coverage",
      title: "Is Aapka Active In Your Region?",
      subtitle: "Enter your 6-digit Pincode or Village name to locate nearby Swasthya-Mitras and network hospitals.",
      placeholder: "Enter 6-Digit PIN Code (e.g. 201001, 203001)",
      button: "Check Availability",
      activeText: "✅ Aapka Active: 4 Swasthya-Mitras on duty & 3 Network Hospitals within 25 km.",
      coveredBadge: "40,000+ Pincodes Serviced Nationwide"
    },
    footer: {
      companyName: "SP Rural India Services Private Limited",
      tagline: "Empowering every village with dignified, affordable, and accessible healthcare solutions.",
      addressTitle: "Registered Head Office",
      address: "Atal Incubation Centre / Innovation & Incubation Hub, Jawaharlal Nehru University (JNU), New Delhi - 110067, India",
      phone: "+91 9667033044",
      email: "info@aapka.co.in",
      quickLinks: "Quick Links",
      legal: "Legal & Compliance",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      patientCharter: "Patient Rights Charter",
      copyright: "© 2026 SP Rural India Services Private Limited. All rights reserved.",
      disclaimer: "Aapka is a healthcare facilitation and patient advocacy platform bridging rural citizens with verified medical institutions."
    }
  },
  hi: {
    nav: {
      about: "हमारे बारे में",
      services: "सेवाएं",
      smartCard: "स्मार्ट हेल्थ कार्ड",
      gramMitra: "ग्राम मित्र",
      impact: "उपलब्धियां व पुरस्कार",
      testimonials: "मरीजों की कहानियां",
      contact: "संपर्क करें",
      downloadApp: "सेवा बुक करें / ऐप",
      emergencyCall: "24x7 हेल्पलाइन: 96670 33044"
    },
    stickers: {
      awardWinner: "🏆 संकल्प भारत पुरस्कार विजेता",
      villagesCovered: "⭐ 500+ गांव जुड़े",
      verifiedHospitals: "🛡️ 100% सत्यापित पार्टनर अस्पताल",
      zeroPaperwork: "⚡ कागजी कार्रवाई से मुक्ति",
      swatiRai: "💰 स्वाति राय पुरस्कार विजेता (₹10 लाख)",
      ficciAward: "🎖️ फिक्की (FICCI) हेल्थकेयर फाइनलिस्ट",
      iimAward: "🥈 IIM काशीपुर उपविजेता (उत्तिष्ठ '24)",
      ayushmanCompliant: "✅ आयुष्मान भारत सहायता",
      atHomeCollection: "🧪 घर पर निशुल्क जांच सैंपल संग्रह",
      savingsBadge: "अस्पताल बिलों पर 40% तक की बचत"
    },
    hero: {
      tagline: "भारत की जमीनी स्वास्थ्य क्रांति",
      headline: "हम करेंगे आपकी देखभाल — भारत के हर कोने तक सुलभ व विश्वसनीय स्वास्थ्य सेवा।",
      subheadline: "स्थानीय स्वास्थ्य-मित्रों, अस्पताल में भारी छूट, बिना झंझट कागजी कार्रवाई और 24x7 डॉक्टर परामर्श के साथ ग्रामीण भारत को सशक्त बनाना।",
      applyCardCTA: "स्मार्ट हेल्थ कार्ड बनवाएं",
      exploreServicesCTA: "हमारी सेवाएं देखें",
      cardPreviewTitle: "आपका स्मार्ट हेल्थ कार्ड",
      cardSubtitle: "एक कार्ड, पूरे परिवार की स्वास्थ्य सुरक्षा",
      verifiedText: "SP Rural India Services द्वारा सत्यापित",
      familyCover: "6 सदस्यों का परिवार सुरक्षित",
      admissionSupport: "2 घंटे में बेड की गारंटी",
      callNow: "आपातकालीन सहायता चाहिए?",
      callNumber: "+91 96670 33044"
    },
    impact: {
      title: "जमीनी स्वास्थ्य सेवा में बदलाव के लिए राष्ट्रीय स्तर पर सम्मानित",
      subtitle: "भारत के प्रतिष्ठित स्वास्थ्य और अनुसंधान संस्थानों द्वारा मान्यता प्राप्त",
      metricVillages: "500+",
      metricVillagesLabel: "सशक्त गांव",
      metricHospitals: "46+",
      metricHospitalsLabel: "सत्यापित अस्पताल",
      metricPincodes: "40,000+",
      metricPincodesLabel: "पिनकोड में सेवा",
      metricLives: "15,000+",
      metricLivesLabel: "मरीजों को मिला सम्मानजनक इलाज"
    },
    services: {
      badge: "सम्पूर्ण स्वास्थ्य नेटवर्क",
      title: "ग्रामीण और कस्बाई भारत के लिए विशेष स्वास्थ्य सेवाएं",
      subtitle: "ओपीडी परामर्श से लेकर जटिल सर्जरी तक, आपका स्थानीय स्वास्थ्य-मित्र हर कदम पर आपके साथ खड़ा रहता है।",
      bookBtn: "अभी सेवा बुक करें",
      learnMore: "विस्तार से जानें",
      items: [
        {
          id: "hospitalization",
          title: "अस्पताल में भर्ती और सहायता",
          tagline: "अस्पताल में कभी अकेले न रहें",
          description: "हमारा प्रशिक्षित स्वास्थ्य-मित्र आपके साथ अस्पताल जाता है, सभी कागजी कार्रवाई संभालता है, रियायती दरों पर भर्ती कराता है और आयुष्मान/बीमा क्लेम कराता है।",
          badge: "सर्वाधिक लोकप्रिय",
          icon: "Hospital",
          stat: "औसतन ₹28,000 प्रति सर्जरी बचत"
        },
        {
          id: "caretaker",
          title: "24x7 केयरटेकर और देखभाल",
          tagline: "बुजुर्गों और मरीजों की समर्पित सेवा",
          description: "सर्जरी के बाद देखभाल, गंभीर रोगियों और बुजुर्गों के लिए घर या अस्पताल में प्रशिक्षित अटेंडेंट और नर्सिंग स्टाफ की सुविधा।",
          badge: "सत्यापित स्टाफ",
          icon: "HeartHandshake",
          stat: "8,000+ घंटे से अधिक की सेवा"
        },
        {
          id: "pathology",
          title: "लैब टेस्ट और जांच (पैथोलॉजी)",
          tagline: "घर बैठे प्रामाणिक डायग्नोस्टिक जांच",
          description: "खून जांच, यूरिन टेस्ट, ईसीजी और स्कैन की बुकिंग। स्वास्थ्य-मित्र घर से सैंपल लेता है और 24 घंटे में आपके फोन पर NABL प्रमाणित रिपोर्ट आती है।",
          badge: "50% तक छूट",
          icon: "FlaskConical",
          stat: "120+ जांच पैकेज उपलब्ध"
        },
        {
          id: "teleconsult",
          title: "डॉक्टर टेली-परामर्श (फ़ोन/वीडियो)",
          tagline: "अपनी भाषा में विशेषज्ञ डॉक्टर से बात",
          description: "शहर के 50 किमी चक्कर लगाए बिना अपने गांव से ही एमडी स्पेशलिस्ट और वरिष्ठ डॉक्टरों से फोन या वीडियो कॉल पर परामर्श प्राप्त करें।",
          badge: "तुरंत कनेक्ट",
          icon: "PhoneCall",
          stat: "< 10 मिनट प्रतीक्षा समय"
        },
        {
          id: "smartcard",
          title: "आपका स्मार्ट हेल्थ कार्ड",
          tagline: "पूरे परिवार के लिए एक संपूर्ण स्वास्थ्य कार्ड",
          description: "पार्टनर अस्पतालों में ओपीडी और सर्जरी पर भारी छूट, दवाइयों पर सब्सिडी और परिवार के लिए वार्षिक निशुल्क बॉडी चेकअप।",
          badge: "ऑल-इन-वन",
          icon: "CreditCard",
          stat: "सालाना ₹35,000+ की बचत"
        },
        {
          id: "emergency",
          title: "आपातकालीन एम्बुलेंस नेटवर्क",
          tagline: "त्वरित ग्रामीण एम्बुलेंस सेवा",
          description: "ऑक्सीजन और प्राथमिक चिकित्सा उपकरणों से लैस जीपीएस-ट्रैक एम्बुलेंस, स्थानीय जिला केंद्रों से तुरंत रवाना, बिना किसी अनुचित शुल्क के।",
          badge: "24x7 आपातकाल",
          icon: "Ambulance",
          stat: "सबसे तेज ग्रामीण सेवा"
        }
      ]
    },
    calculator: {
      badge: "बचत कैलकुलेटर",
      title: "जानिए आपका परिवार कितना बचा सकता है",
      subtitle: "देखें कि कैसे आपका स्मार्ट हेल्थ कार्ड अचानक आने वाले चिकित्सा खर्चों से आपकी मेहनत की कमाई की रक्षा करता है।",
      familyLabel: "परिवार के सदस्यों की संख्या चुनें:",
      serviceLabel: "संभावित स्वास्थ्य आवश्यकताएं चुनें:",
      annualEstimatedSavings: "आपका कार्ड से अनुमानित वार्षिक बचत",
      routineCheckups: "वार्षिक मुफ्त जांच पैकेज शामिल",
      medicineSavings: "दवाइयों पर 15% - 25% की सीधी छूट",
      surgeryDiscount: "सर्जरी पर 30% तक की भारी बचत",
      cta: "कार्ड के लिए आवेदन करें"
    },
    gramMitra: {
      badge: "ग्रामीण रक्षक नेटवर्क",
      title: "ग्रामीण युवाओं व महिलाओं का सशक्तिकरण: ग्राम मित्र योजना",
      subtitle: "गांव के स्थानीय युवाओं को प्रमाणित स्वास्थ्य मित्र बनाकर उन्हें सम्मानजनक रोजगार देना और पूरे गांव को स्वस्थ रखना।",
      point1Title: "डॉक्टरों द्वारा प्रमाणित प्रशिक्षण",
      point1Desc: "मरीजों की प्राथमिक जांच, डिजिटल रिकॉर्ड और आयुष्मान योजना के क्लेम में सहायता का सम्पूर्ण प्रशिक्षण।",
      point2Title: "डिजिटल हेल्थ किट उपलब्ध",
      point2Desc: "डिजिटल बीपी मशीन, पल्स ऑक्सीमीटर, ग्लूकोमीटर और स्मार्टफोन ऐप से लैस आधुनिक किट।",
      point3Title: "सम्मानजनक मासिक आय",
      point3Desc: "जांच बुकिंग, अस्पताल समन्वय और कार्ड पंजीकरण के जरिए हर महीने ₹15,000 से ₹35,000 तक की कमाई।",
      cta: "आज ही ग्राम मित्र बनें",
      cardName: "मनोज कुमार",
      cardRole: "वरिष्ठ स्वास्थ्य-मित्र",
      cardLocation: "बुलंदशहर जिला, उत्तर प्रदेश",
      cardStat: "इस महीने 120+ परिवारों की सहायता की"
    },
    testimonials: {
      badge: "सच्ची उम्मीद की कहानियां",
      title: "ग्रामीण भारत में बदलती जिंदगियां",
      subtitle: "जानिए उन मरीजों और परिवारों से जिन्हें 'आपका' और स्वास्थ्य-मित्रों के साथ मिला सस्ता और सम्मानजनक इलाज।",
      items: [
        {
          id: 1,
          name: "रामेश्वर शर्मा",
          location: "गाजियाबाद, उत्तर प्रदेश",
          treatment: "ट्यूमर सर्जरी और भर्ती सहायता",
          saving: "₹1,85,000 की बचत की",
          quote: "जब मेरी मां को पेट में ट्यूमर का पता चला, तो निजी अस्पतालों ने ₹3.5 लाख का खर्च बताया जो हमारे लिए असंभव था। हमारे स्वास्थ्य-मित्र ने एक बड़े पार्टनर अस्पताल में हमारा आयुष्मान क्लेम केवल 4 घंटे में पास कराया और सफल ऑपरेशन करवाया। मेरी मां आज बिल्कुल स्वस्थ हैं।",
          rating: 5
        },
        {
          id: 2,
          name: "श्रीमती कमला देवी",
          location: "बुलंदशहर, उत्तर प्रदेश",
          treatment: "गुर्दे की पथरी का लेजर ऑपरेशन",
          saving: "₹42,000 की बचत की",
          quote: "मुझे पथरी का असहनीय दर्द हो रहा था। हमारे स्थानीय ग्राम मित्र ने 30 मिनट में एम्बुलेंस का प्रबंध किया, नोएडा के अस्पताल में भर्ती कराया और छुट्टी होने तक परिवार के साथ खड़े रहे। कोई छुपा हुआ खर्च नहीं, सिर्फ सच्चा अपनापन।",
          rating: 5
        },
        {
          id: 3,
          name: "विकास यादव",
          location: "नोएडा सेक्टर 62 / देहात क्षेत्र",
          treatment: "हेयर ट्रांसप्लांट व रीकंस्ट्रक्टिव सर्जरी",
          saving: "₹55,000 की बचत की",
          quote: "दुर्घटना के बाद सिर में चोट और बालों की समस्या थी। कई क्लिनिकों ने भारी खर्च बताया। आपका के जरिए मुझे प्रमाणित प्लास्टिक सर्जन से बहुत कम खर्च में पारदर्शी इलाज मिला।",
          rating: 5
        },
        {
          id: 4,
          name: "मोहम्मद इरफान",
          location: "मेरठ जिला, उत्तर प्रदेश",
          treatment: "इमरजेंसी दिल का दौरा व स्टेंटिंग",
          saving: "₹95,000 की बचत की",
          quote: "आधी रात को मेरे पिता को सीने में तेज दर्द हुआ। आपका 24x7 हेल्पलाइन ने अस्पताल पहुंचने से पहले ही आईसीयू बेड और कैथ लैब तैयार करवा दिया। उस तेजी ने मेरे पिता की जान बचा ली। हर ग्रामीण परिवार के पास यह कार्ड होना चाहिए।",
          rating: 5
        }
      ]
    },
    pincode: {
      badge: "गांव में उपलब्धता जांचें",
      title: "क्या आपके क्षेत्र में 'आपका' सेवा उपलब्ध है?",
      subtitle: "अपना 6 अंकों का पिनकोड या गांव का नाम दर्ज करें और निकटतम स्वास्थ्य-मित्र व अस्पताल खोजें।",
      placeholder: "6 अंकों का पिनकोड दर्ज करें (उदा. 201001, 203001)",
      button: "उपलब्धता जांचें",
      activeText: "✅ 'आपका' सेवा सक्रिय: 4 स्वास्थ्य-मित्र तैनात हैं और 25 किमी के दायरे में 3 नेटवर्क अस्पताल हैं।",
      coveredBadge: "देशभर में 40,000+ पिनकोड में उपलब्ध"
    },
    footer: {
      companyName: "SP Rural India Services Private Limited",
      tagline: "सम्मानजनक, किफायती और विश्वसनीय स्वास्थ्य सेवाओं से हर गांव को सशक्त बनाना।",
      addressTitle: "पंजीकृत प्रधान कार्यालय",
      address: "अटल इनक्यूबेशन सेंटर / इनोवेशन हब, जवाहरलाल नेहरू विश्वविद्यालय (JNU), नई दिल्ली - 110067, भारत",
      phone: "+91 9667033044",
      email: "info@aapka.co.in",
      quickLinks: "महत्वपूर्ण लिंक",
      legal: "कानूनी व अनुपालन",
      privacyPolicy: "गोपनीयता नीति",
      termsOfService: "सेवा की शर्तें",
      patientCharter: "मरीज अधिकार चार्टर",
      copyright: "© 2026 SP Rural India Services Private Limited. सर्वाधिकार सुरक्षित।",
      disclaimer: "Aapka ग्रामीण नागरिकों को प्रामाणिक चिकित्सा संस्थानों से जोड़ने वाला एक स्वास्थ्य सुविधा और मरीज सहायता मंच है।"
    }
  }
};
