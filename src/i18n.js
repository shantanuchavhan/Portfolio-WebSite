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
      "I am full Stack Web Developer":"I am full Stack Web Developer"
      // ... other English translations
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
    "I am full Stack Web Developer": "Jeg er Full Stack Web-utvikler"
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
      "I am full Stack Web Developer": "मैं एक फुल स्टैक वेब डेवेलपर हूँ"
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
