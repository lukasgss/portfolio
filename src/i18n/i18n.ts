import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "../locales/en.json";
import translationPtBr from "../locales/ptBR.json";

const resources = {
  en: {
    translation: translationEN,
  },
  ptBR: {
    translation: translationPtBr,
  },
};

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    debug: true,
    fallbackLng: "en",
    supportedLngs: ["en", "ptBR"],
    interpolation: {
      escapeValue: false,
    },
  });
}
