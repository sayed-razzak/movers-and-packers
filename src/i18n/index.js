import { siteConfig } from "../config/siteConfig";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import ar from "./ar.json";
let saved;
try {
  saved = localStorage.getItem("moving-language");
} catch {
  /* Storage may be disabled. */
}
const language = ["en", "ar"].includes(saved)
  ? saved
  : (navigator.languages || [navigator.language]).some((l) =>
        l.startsWith("ar"),
      )
    ? "ar"
    : "en";
i18n
  .use(initReactI18next)
  .init({
    resources: { en: { translation: en }, ar: { translation: ar } },
    lng: language,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
      defaultVariables: {
        serviceArea:
          language === "ar"
            ? siteConfig.serviceAreaArabic
            : siteConfig.serviceArea,
        company: language === "ar" ? siteConfig.nameArabic : siteConfig.name,
        contactPerson:
          language === "ar"
            ? siteConfig.contactPersonArabic
            : siteConfig.contactPerson,
      },
    },
  });
function applyLanguage(lng) {
  i18n.options.interpolation.defaultVariables = {
    serviceArea:
      lng === "ar" ? siteConfig.serviceAreaArabic : siteConfig.serviceArea,
    company: lng === "ar" ? siteConfig.nameArabic : siteConfig.name,
    contactPerson:
      lng === "ar" ? siteConfig.contactPersonArabic : siteConfig.contactPerson,
  };
  document.documentElement.lang = lng;
  document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
  try {
    localStorage.setItem("moving-language", lng);
  } catch {
    /* Language works without persistence. */
  }
}
applyLanguage(language);
i18n.on("languageChanged", applyLanguage);
export default i18n;
