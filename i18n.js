import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import  transltionAR from './i18n/ar.json';
import  transltionEN from './i18n/en.json';

const resources = {
  en:{ 
    transltion : transltionEN 
  },
  ar:{ 
    transltion : transltionAR 
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources : resources ,
    lng:'ar',
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false, 
    },
    react:{
      useSuspense : false 
    }
  });


export default i18n;

