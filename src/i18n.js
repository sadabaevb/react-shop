import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome to ADA Shop!",
      onSale: "On Sale",
      newArrivals: "New Arrivals",
    },
  },
  ru: {
    translation: {
      welcome: "Добро пожаловать",
      onSale: "Распродажа",
      newArrivals: "Новинки",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ru",
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
