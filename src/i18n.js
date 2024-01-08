// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Shantanu Chavhan": "Shantanu Chavhan",
      home: "Home",
      "about me": "About Me",
      portfolio: "portfolio",
      "contact me": "Contact Me",
      resume: "resume",
      blog: "blog",
      Heyy: "Heyy",
      "Thank you for comming": "Thank you for comming",
      "I am full Stack Web Developer": "I am full Stack Web Developer",
      all: "all",
      webapps: "webapps",
      dashboards: "dashboards",
      landingpage: "landingpage",
      "Total Projects": "Total Projects",
      "choose color": "choose color",
      "choose language": "choose language",
      "Your email": "Your email",
      Subject: "Subject",
      "Send message": "Send message",
      "Let us know how we can help you": "Let us know how we can help you",
      "Leave a comment": "Leave a comment",
      "aboutMe.title": "About me",
      "aboutMe.fullStackDeveloper": "Full Stack Web Developer",
      "aboutMe.greetings": "Greetings!",
      "aboutMe.specializingIn":
        "I'm a skilled Full Stack Web Developer specializing in",
      "aboutMe.technologies":
        "React, Express.js, Next js, Tailwind, Css, MongoDB, Sql, Node.js.",
      "aboutMe.passionForCrafting":
        "With a passion for crafting seamless digital experiences, I excel in",
      "aboutMe.replicatingDesigns":
        "replicating intricate designs and optimizing solutions.",
      "aboutMe.focusOnCreating":
        "My focus is on creating pixel-perfect, All device responsive interfaces.",
      "aboutMe.embracingApproach":
        "Embracing a component-based and systematic approach, I ensure designs are not just faithfully replicated but also optimized for efficiency.",
      "aboutMe.letsCollaborate": "Let's collaborate",
      "aboutMe.dynamicReality":
        "to turn your digital vision into a dynamic reality!",

      "personalInfo.title": "Personal information",
      "personalInfo.name": "Name",
      "personalInfo.nameValue": "Shantanu Chavhan",
      "personalInfo.age": "Age",
      "personalInfo.ageValue": "23 Years",
      "personalInfo.residence": "Residence",
      "personalInfo.residenceValue": "Mumbai, Maharashtra",
      "personalInfo.address": "Address",
      "personalInfo.addressValue":
        "Mahavir Paradise Phase-3, Forest Naka, Ambernath",
      "personalInfo.email": "Email",
      "personalInfo.emailValue": "Shantanuchavhan002@gmail.com",
      "personalInfo.phone": "Phone",
      "personalInfo.phoneValue": "+91 9011793540",
      "personalInfo.freelance": "Freelance",
      "personalInfo.freelanceValue": "Available",
    },
  },

  // no.json
  no: {
    translation: {
      "Shantanu Chavhan": "Shantanu chavhan",
      home: "Hjem",
      "about me": "Om meg",
      portfolio: "Portefølje",
      "contact me": "Kontakt",
      resume: "CV",
      blog: "Blogg",
      Heyy: "Hei",
      "Thank you for comming": "Takk for at du kom",
      "I am full Stack Web Developer": "Jeg er Full Stack Web-utvikler",
      all: "all",
      webapps: "webapper",
      dashboards: "dashbord",
      landingpage: "destinasjonsside",
      "Total Projects": "Totalt prosjekter",
      "choose color": "velg farge",
      "choose language": "Velg språk",
      "Your email": "Din epost",
      Subject: "Emne",
      "Send message": "Sende melding",
      "Let us know how we can help you":
        "Fortell oss hvordan vi kan hjelpe deg",
      "Leave a comment": "Legg igjen en kommentar",
      "aboutMe.title": "Om meg",
      "aboutMe.fullStackDeveloper": "Full Stack Web Developer",
      "aboutMe.greetings": "Hei!",
      "aboutMe.specializingIn":
        "Jeg er en dyktig Full Stack Web Developer som spesialiserer meg i",
      "aboutMe.technologies":
        "React, Express.js, Next.js, Tailwind, CSS, MongoDB, SQL, Node.js.",
      "aboutMe.passionForCrafting":
        "Med lidenskap for å skape sømløse digitale opplevelser, utmerker jeg meg i",
      "aboutMe.replicatingDesigns":
        "replikere intrikate design og optimalisere løsninger.",
      "aboutMe.focusOnCreating":
        "Fokuset mitt er å lage piksel-perfekte, responsivt grensesnitt for alle enheter.",
      "aboutMe.embracingApproach":
        "Ved å omfavne en komponentbasert og systematisk tilnærming, sørger jeg for at design ikke bare replikeres trofast, men også optimaliseres for effektivitet.",
      "aboutMe.letsCollaborate": "La oss samarbeide",
      "aboutMe.dynamicReality":
        "for å gjøre din digitale visjon til virkelighet!",

      "personalInfo.title": "Personal information",
      "personalInfo.name": "Name",
      "personalInfo.nameValue": "Shantanu Chavhan",
      "personalInfo.age": "Age",
      "personalInfo.ageValue": "23 Years",
      "personalInfo.residence": "Residence",
      "personalInfo.residenceValue": "Mumbai, Maharashtra",
      "personalInfo.address": "Address",
      "personalInfo.addressValue":
        "Mahavir Paradise Phase-3, Forest Naka, Ambernath",
      "personalInfo.email": "Email",
      "personalInfo.emailValue": "Shantanuchavhan002@gmail.com",
      "personalInfo.phone": "Phone",
      "personalInfo.phoneValue": "+91 9011793540",
      "personalInfo.freelance": "Freelance",
      "personalInfo.freelanceValue": "Available",
      "Your satisfaction is my satisfaction":"Din tilfredshet er min tilfredshet"
      
    },
  },
  hi: {
    translation: {
      "Shantanu Chavhan": "शंतनू चव्हाण",
      home: "होम",
      "about me": "मेरे बारे में",
      portfolio: "पोर्टफोलियो",
      "contact me": "संपर्क करें",
      resume: "बायोडाटा",
      blog: "ब्लॉग",
      Heyy: "नमस्ते",
      "Thank you for comming": "आने के लिए धन्यवाद",
      "I am full Stack Web Developer": "मैं एक फुल स्टैक वेब डेवेलपर हूँ",
      all: "सभी",
      webapps: "वेब ऐप्लिकेशन",
      dashboards: "डैशबोर्ड",
      landingpage: "लैंडिंग पृष्ठ",
      "Total Projects": "कुल परियोजनाएँ",
      "choose color": "रंग पसंद करो",
      "choose language": "भाषा चुनें",
      "Your email": "आपका ईमेल",
      Subject: "विषय",
      "Your message": "आपका संदेश",
      "Send message": "मेसेज भेजें",
      "Let us know how we can help you":
        "हमें बताएं कि हम आपकी सहायता कैसे कर सकते हैं",
      "Leave a comment": "एक टिप्पणी छोड़ें",
      "aboutMe.title": "मेरे बारे में",
      "aboutMe.fullStackDeveloper": "पूर्ण स्टैक वेब डेवेलपर",
      "aboutMe.greetings": "नमस्कार!",
      "aboutMe.specializingIn":
        "मैं एक कुशल पूर्ण स्टैक वेब डेवेलपर हूं जो इसमें विशेषज्ञ है",
      "aboutMe.technologies":
        "React, Express.js, Next.js, Tailwind, CSS, MongoDB, SQL, Node.js.",
      "aboutMe.passionForCrafting":
        "सीमित डिजिटल अनुभवों को बनाने के लिए जोश के साथ, मैं उत्कृष्ट हूं",
      "aboutMe.replicatingDesigns":
        "जटिल डिजाइन की पुनरावृत्ति और समाधानों को अनुकूलित करना।",
      "aboutMe.focusOnCreating":
        "मेरा ध्यान पिक्सेल-सही, सभी उपकरण प्रतिसादी इंटरफेस बनाने पर है।",
      "aboutMe.embracingApproach":
        "एक घटक-आधारित और व्यवस्थित दृष्टिकोण को अपनाकर, मैं सुनिश्चित करता हूं कि डिजाइन को सिर्फ विश्वासपूर्वक पुनरावृत्ति किया जाता है बल्कि यह कुशलता के लिए भी अनुकूलित किया जाता है।",
      "aboutMe.letsCollaborate": "आइए सहयोग करें",
      "aboutMe.dynamicReality":
        "ताकि आपका डिजिटल दृष्टिकोण एक गतिशील वास्तविकता में परिणाम हो!",

      "personalInfo.title": "व्यक्तिगत जानकारी",
      "personalInfo.name": "नाम",
      "personalInfo.nameValue": "शांतनु चव्हाण",
      "personalInfo.age": "आयु",
      "personalInfo.ageValue": "23 वर्ष",
      "personalInfo.residence": "निवास",
      "personalInfo.residenceValue": "मुंबई, महाराष्ट्र",
      "personalInfo.address": "पता",
      "personalInfo.addressValue": "महावीर पैराडाइस फेज-3, वन नाका, अंबरनाथ",
      "personalInfo.email": "ईमेल",
      "personalInfo.emailValue": "Shantanuchavhan002@gmail.com",
      "personalInfo.phone": "फ़ोन",
      "personalInfo.phoneValue": "+91 9011793540",
      "personalInfo.freelance": "फ्रीलांस",
      "personalInfo.freelanceValue": "उपलब्ध",
      "Your satisfaction is my satisfaction":"आपकी संतुष्टि ही मेरी संतुष्टि है"
    },
  },
  mr: {
    translation: {
      "Shantanu Chavhan": "शंतनू चव्हाण",
      home: "होम",
      "about me": "माझ्याबद्दल",
      portfolio: "पोर्टफोलिओ",
      "contact me": "माझ्याशी संपर्क साधा",
      resume: "साक्षात्कारपत्र",
      blog: "ब्लॉग",
      Heyy: "हाय",
      "Thank you for comming": "आभारी आहे की आपण आलात",
      "I am full Stack Web Developer": "माझं पूर्ण स्टॅक वेब डेव्हलपर आहे",
      all: "सर्व",
      webapps: "वेब अॅप्लिकेशन्स",
      dashboards: "डॅशबोर्ड्स",
      landingpage: "लॅन्डिंग पेज",
      "Total Projects": "एकूण परियोजना",
      "choose color": "रंग निवडा",
      "choose language": "भाषा निवडा",
      "Your email": "तुमचा ईमेल",
      Subject: "विषय",
      "Send message": "संदेश पाठवा",
      "Let us know how we can help you": "आपल्याला कसे मदत करू शकतो",
      "Leave a comment": "एक टिप्पणी द्या",
      "aboutMe.title": "माझ्याबद्दल",
      "aboutMe.fullStackDeveloper": "पूर्ण स्टॅक वेब डेव्हलपर",
      "aboutMe.greetings": "हाय",
      "aboutMe.specializingIn":
        "माझं कल्याणकारी पूर्ण स्टॅक वेब डेव्हलपर आहे, त्यात स्पेशलाईझिंग करीत आहे",
      "aboutMe.technologies":
        "React, Express.js, Next.js, Tailwind, CSS, MongoDB, SQL, Node.js.",
      "aboutMe.passionForCrafting":
        "सुंदर डिजिटल अनुभवे तयार करण्याच्या उत्कृष्टतेसाठी, माझं उत्साह आहे, मी उत्कृष्टतेत उत्कृष्ट आहे।",
      "aboutMe.replicatingDesigns":
        "सुक्ष्म डिझाईनस कॉपी करणे आणि समाधाने अपघातकी बनविणे.",
      "aboutMe.focusOnCreating":
        "माझं ध्यान पिक्सेल-सही, सर्व डिव्हाइस प्रतिसादी इंटरफेस तयार करण्यावर आहे.",
      "aboutMe.embracingApproach":
        "एक कॉम्पोनेंट-आधारित आणि यंत्रणेसाठी योजना करण्यासाठी अभिवादन करताना, माझं ध्यान दिलेलं आहे की डिझाईन सिर्फ विश्वासपूर्वक पुनरावृत्ती होत नसे तरी कुशलतेसाठी सुधारित होतो.",
      "aboutMe.letsCollaborate":
        "आपल्याला सहयोग कसे करू शकतो हे आपल्याला सांगा",
      "aboutMe.dynamicReality":
        "तुमचे डिजिटल दृष्टिकोण एक गतिशील वास्तविकतेत परिणाम होईल!",

      "personalInfo.title": "वैयक्तिक माहिती",
      "personalInfo.name": "नाव",
      "personalInfo.nameValue": "शांतनु चव्हाण",
      "personalInfo.age": "वय",
      "personalInfo.ageValue": "23 वर्षे",
      "personalInfo.residence": "निवासस्थान",
      "personalInfo.residenceValue": "मुंबई, महाराष्ट्र",
      "personalInfo.address": "पत्ता",
      "personalInfo.addressValue": "महावीर पॅराडाइस फेस-3, वन नाका, अंबरनाथ",
      "personalInfo.email": "ईमेल",
      "personalInfo.emailValue": "Shantanuchavhan002@gmail.com",
      "personalInfo.phone": "फोन",
      "personalInfo.phoneValue": "+91 9011793540",
      "personalInfo.freelance": "स्वतंत्रपेंडिंग",
      "personalInfo.freelanceValue": "उपलब्ध",
      "Your satisfaction is my satisfaction":"तुझे समाधान हेच ​​माझे समाधान"
    },
  },
  // Add more languages and translations as needed
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
