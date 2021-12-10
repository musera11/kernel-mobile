import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from '../assets/i18n/en';
import ka from '../assets/i18n/ka';
// import { setMomentLocale } from './dateService';

let i18nextConfig = null;

export const initLocalize = () => {
  i18nextConfig = i18next.use(initReactI18next).init({
    resources: {
      en: {translation: en},
      ka: {translation: ka},
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    nsSeparator: false,
  })
};


export const globalData = {
  lang: 'en',
};

export const setLang = (lang: string) => {
  globalData.lang = lang;
  // setMomentLocale(lang);
};

export default i18nextConfig;
