// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Преводи
const resources = {
  en: {
    translation: {
      "welcome": "Welcome",
      "description": "This is an example description."
    }
  },
  bg: {
    translation: {
      "welcome": "Добре дошли",
      "description": "Това е примерна описание."
    }
  }
};

i18n
  .use(initReactI18next) // свързване на react-i18next с i18next
  .init({
    resources,
    lng: "en", // началния език
    interpolation: {
      escapeValue: false // react вече предпазва от XSS
    }
  });

export default i18n;
