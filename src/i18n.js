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
      "contact": "Contact",
      "resume":"resume",
      "blog":"blog"
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
      "contact": "Kontakt",
      "resume": "CV",
      "blog": "Blogg"
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
      "contact": "संपर्क करें",
      "resume": "बायोडाटा",
      "blog": "ब्लॉग"
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
