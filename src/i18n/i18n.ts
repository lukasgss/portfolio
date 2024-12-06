import i18n, { type TFunction } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
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

let i18nPromise: Promise<TFunction<"translation", undefined>>;

if (!i18n.isInitialized) {
  i18nPromise = i18n.use(initReactI18next).init({
    resources,
    debug: false,
    fallbackLng: "en",
    supportedLngs: ["en", "ptBR"],
    interpolation: {
      escapeValue: false,
    },
  });
}

if (typeof window !== "undefined") {
  i18n.use(LanguageDetector).init();
}

export const isI18nInitialized = async () => {
  if (!i18nPromise) return i18n.isInitialized;
  await i18nPromise;
  return true;
};
