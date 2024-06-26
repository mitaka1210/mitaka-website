import i18n from "i18next";
// import XHR from 'i18next-xhr-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import bg from "../public/locales/bg/translation.json";
import en from "../public/locales/en/translation.json";

const resources = {
    bg: {
        translation: bg
    },
    en: {
        translation: en
    }
};
i18n
    .use(LanguageDetector)
    .use(initReactI18next) // bind react-i18next to the instance
    .init({
        resources,
        fallbackLng: "bg",
        debug: false,

        interpolation: {
            escapeValue: false, // not needed for react!!
        },
        // whitelist: ["bg", "en"],
        // react i18next special options (optional)
        // override if needed - omit if ok with defaults
        /*
        react: {
          bindI18n: 'languageChanged',
          bindI18nStore: '',
          transEmptyNodeValue: '',
          transSupportBasicHtmlNodes: true,
          transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
          useSuspense: true,
        }
        */
    });

export default i18n;
