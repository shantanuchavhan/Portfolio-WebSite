// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en:
  {
    "translation": {
      "home": "Home",
      "about": "About Me",
      "portfolio": "portfolio",
      "contact": "Contact",
      "welcome_message": "Welcome to my portfolio!",
      "Aboute Me": "About Me",
      "about_me_description": "I am a passionate developer with experience in...",
      "projects": "Projects",
      "project_name": "Project Name",
      "project_description": "A brief description of the project...",
      "contact me": "Contact Me",
      "contact_intro": "Feel free to reach out to me!",
      "name": "Name",
      "email": "Email",
      "message": "Message",
      "send_message": "Send Message",
      // ... other English translations
    }
  }
  
  ,
  fr:// fr.json
 // fr.json
{
    "translation": {
      "home": "Accueil",
      "about": "À propos de moi",
      "portfolio": "Portfolio",  // Fix the typo here
      "contact": "Contact",
      "welcome_message": "Bienvenue sur mon portfolio !",
      "Aboute Me": "À propos de moi",
      "about_me_description": "Je suis un développeur passionné avec de l'expérience en...",
      "projects": "Projets",
      "project_name": "Nom du projet",
      "project_description": "Une brève description du projet...",
      "contact me": "Me contacter",
      "contact_intro": "N'hésitez pas à me contacter !",
      "name": "Nom",
      "email": "Email",
      "message": "Message",
      "send_message": "Envoyer le message",
      // ... other French translations
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
