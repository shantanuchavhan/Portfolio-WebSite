// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en:
  {
    "translation": {
      "home": "Home",
      "about me": "About Me",
      "portfolio": "portfolio",
      "contact me": "Contact Me",
      "resume":"resume",
      "blog":"blog",
      "Heyy":"Heyy",
      "Thank you for comming":"Thank you for comming",
      "I am full Stack Web Developer":"I am full Stack Web Developer",
      "all":"all",
      "webapps":"webapps",
      "dashboards":"dashboards",
      "landingpage":"landingpage",
      "Total Projects":"Total Projects",
      "choose color":"choose color",
      "choose language":"choose language",
      "Your email":"Your email",
      "Subject":"Subject",
      "Send message":"Send message",
      "Let us know how we can help you":"Let us know how we can help you",
      "Leave a comment":"Leave a comment",
    }
  }

  ,
  no:// no.json
  {
    "translation": {
      "home": "Hjem",
      "about me": "Om meg",
      "portfolio": "Portefølje",
      "contact me": "Kontakt",
      "resume": "CV",
      "blog": "Blogg",
      "Heyy": "Hei",
    "Thank you for comming": "Takk for at du kom",
    "I am full Stack Web Developer": "Jeg er Full Stack Web-utvikler",
    "all":"all",
    "webapps":"webapper",
    "dashboards":"dashbord",
    "landingpage":"destinasjonsside",
    "Total Projects":"Totalt prosjekter",
    "choose color":"velg farge",
    "choose language":"Velg språk",
    "Your email":"Din epost",
    "Subject":"Emne",
    "Send message":"Sende melding",
    "Let us know how we can help you":"Fortell oss hvordan vi kan hjelpe deg",
    "Leave a comment":"Legg igjen en kommentar",
      // ... other Norwegian translations
    }
  }
  ,
  hi:
  {
    "translation": {
      "home": "होम",
      "about me": "मेरे बारे में",
      "portfolio": "पोर्टफोलियो",
      "contact me": "संपर्क करें",
      "resume": "बायोडाटा",
      "blog": "ब्लॉग",
      "Heyy": "नमस्ते",
      "Thank you for comming": "आने के लिए धन्यवाद",
      "I am full Stack Web Developer": "मैं एक फुल स्टैक वेब डेवेलपर हूँ",
      "all":"सभी",
      "webapps":"वेब ऐप्लिकेशन",
      "dashboards":"डैशबोर्ड",
      "landingpage":"लैंडिंग पृष्ठ",
      "Total Projects":"कुल परियोजनाएँ",
      "choose color":"रंग पसंद करो",
      "choose language":"भाषा चुनें",
      "Your email":"आपका ईमेल",
      "Subject":"विषय",
      "Your message":"आपका संदेश",
      "Send message":"मेसेज भेजें",
      "Let us know how we can help you":"हमें बताएं कि हम आपकी सहायता कैसे कर सकते हैं",
      "Leave a comment":"एक टिप्पणी छोड़ें",
    }
  },
  mr: {
    "translation": {
      "home": "होम",
      "about me": "माझ्याबद्दल",
      "portfolio": "पोर्टफोलिओ",
      "contact me": "माझ्याशी संपर्क साधा",
      "resume": "साक्षात्कारपत्र",
      "blog": "ब्लॉग",
      "Heyy": "हाय",
      "Thank you for comming": "आभारी आहे की आपण आलात",
      "I am full Stack Web Developer": "माझं पूर्ण स्टॅक वेब डेव्हलपर आहे",
      "all": "सर्व",
      "webapps": "वेब अॅप्लिकेशन्स",
      "dashboards": "डॅशबोर्ड्स",
      "landingpage": "लॅन्डिंग पेज",
      "Total Projects": "एकूण परियोजना",
      "choose color": "रंग निवडा",
      "choose language": "भाषा निवडा",
      "Your email": "तुमचा ईमेल",
      "Subject": "विषय",
      "Send message": "संदेश पाठवा",
      "Let us know how we can help you": "आपल्याला कसे मदत करू शकतो",
      "Leave a comment": "एक टिप्पणी द्या"
    }
  }
  

  ,
  // Add more languages and translations as needed
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',  // Default language
    fallbackLng: 'en',  // Fallback language
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
