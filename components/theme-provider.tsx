'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'
import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext({
  language: "en",
  setLanguage: (lang: string) => {},
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("language") || "en";
    }
    return "en";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("language", language);
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

type Language = "en" | "ur";

const translations: Record<Language, { [key: string]: string }> = {
  en: {
    home: "Home",
    aboutUs: "About Us",
    services: "Services",
    gallery: "Gallery",
    contact: "Contact",
    donate: "Donate",
    welcomeMessage: "Welcome to Malakand Rahat Ghar",
    aboutDescription: "Malakand Rahat Ghar provides shelter, food, clothing, medical support, and emotional care to elderly men and women in need.",
    heroTitle: "Serving Our Elders with Love and Respect",
    heroDescription: "Providing care and support to the elderly in Malakand.",
    donateButton: "Donate Now",
    missionLabel: "Our Mission",
    missionTitle: "Caring for the Elderly",
    missionDescription1: "We provide shelter, food, and medical care to those in need.",
    missionDescription2: "Join us in making a difference in their lives.",
    learnMoreButton: "Learn More",
    servicesLabel: "Our Services",
    servicesTitle: "What We Offer",
    servicesDescription: "Comprehensive care for the elderly, including shelter, food, and emotional support.",
    serviceShelterTitle: "Shelter",
    serviceShelterDescription: "Safe and comfortable living spaces.",
    serviceFoodTitle: "Food",
    serviceFoodDescription: "Nutritious meals served daily.",
    serviceClothingTitle: "Clothing",
    serviceClothingDescription: "Providing essential clothing items.",
    serviceMedicalTitle: "Medical Care",
    serviceMedicalDescription: "Access to healthcare and medical support.",
    serviceEmotionalTitle: "Emotional Support",
    serviceEmotionalDescription: "Creating a loving and supportive environment.",
    galleryLabel: "Gallery",
    galleryTitle: "Moments of Care",
    galleryDescription: "Snapshots of our work and the lives we touch.",
    donateLabel: "Donate",
    donateTitle: "Support Our Cause",
    donateDescription: "Your contributions make a difference.",
    donateTab: "Donate",
    paymentMethodsTab: "Payment Methods",
    bankTransferTitle: "Bank Transfer",
    bank1Name: "Bank A",
    bank1AccountTitle: "Account Title A",
    bank1AccountNumber: "123456789",
    bank1BranchCode: "001",
    bank2Name: "Bank B",
    bank2AccountTitle: "Account Title B",
    bank2AccountNumber: "987654321",
    bank2BranchCode: "002",
    mobilePaymentTitle: "Mobile Payment",
    easypaisaName: "Easypaisa",
    easypaisaAccount: "03001234567",
    jazzcashName: "JazzCash",
    jazzcashAccount: "03007654321",
    donationNote: "Thank you for your generosity.",
    contactLabel: "Contact Us",
    contactTitle: "Get in Touch",
    contactDescription: "We are here to assist you.",
    addressTitle: "Address",
    addressDescription: "123 Main Street, Malakand, Pakistan",
    phoneTitle: "Phone",
    phone1: "+92 300 1234567",
    phone2: "+92 300 7654321",
    emailTitle: "Email",
    email1: "info@malakandrahatghar.org",
    email2: "support@malakandrahatghar.org",
    contactFormTitle: "Send Us a Message",
  },
  ur: {
    home: "ہوم",
    aboutUs: "ہمارے بارے میں",
    services: "خدمات",
    gallery: "گیلری",
    contact: "رابطہ کریں",
    donate: "عطیہ کریں",
    welcomeMessage: "ملاکنڈ راحت گھر میں خوش آمدید",
    aboutDescription: "ملاکنڈ راحت گھر بزرگ مردوں اور عورتوں کو پناہ، کھانا، کپڑے، طبی امداد اور جذباتی دیکھ بھال فراہم کرتا ہے۔",
    heroTitle: "محبت اور احترام کے ساتھ بزرگوں کی خدمت",
    heroDescription: "ملاکنڈ کے بزرگوں کو دیکھ بھال اور مدد فراہم کرنا۔",
    donateButton: "اب عطیہ کریں",
    missionLabel: "ہمارا مشن",
    missionTitle: "بزرگوں کی دیکھ بھال",
    missionDescription1: "ہم ضرورت مندوں کو پناہ، کھانا اور طبی دیکھ بھال فراہم کرتے ہیں۔",
    missionDescription2: "ان کی زندگیوں میں فرق پیدا کرنے میں ہمارا ساتھ دیں۔",
    learnMoreButton: "مزید جانیں",
    servicesLabel: "ہماری خدمات",
    servicesTitle: "ہم کیا پیش کرتے ہیں",
    servicesDescription: "بزرگوں کے لیے جامع دیکھ بھال، بشمول پناہ، کھانا، اور جذباتی مدد۔",
    serviceShelterTitle: "پناہ",
    serviceShelterDescription: "محفوظ اور آرام دہ رہائشی جگہیں۔",
    serviceFoodTitle: "کھانا",
    serviceFoodDescription: "روزانہ غذائیت سے بھرپور کھانے۔",
    serviceClothingTitle: "کپڑے",
    serviceClothingDescription: "ضروری کپڑوں کی فراہمی۔",
    serviceMedicalTitle: "طبی دیکھ بھال",
    serviceMedicalDescription: "صحت کی دیکھ بھال اور طبی مدد تک رسائی۔",
    serviceEmotionalTitle: "جذباتی مدد",
    serviceEmotionalDescription: "محبت اور حمایت کا ماحول پیدا کرنا۔",
    galleryLabel: "گیلری",
    galleryTitle: "دیکھ بھال کے لمحات",
    galleryDescription: "ہمارے کام اور ان زندگیوں کی جھلکیاں جنہیں ہم چھوتے ہیں۔",
    donateLabel: "عطیہ کریں",
    donateTitle: "ہمارے مقصد کی حمایت کریں",
    donateDescription: "آپ کی شراکتیں فرق پیدا کرتی ہیں۔",
    donateTab: "عطیہ کریں",
    paymentMethodsTab: "ادائیگی کے طریقے",
    bankTransferTitle: "بینک ٹرانسفر",
    bank1Name: "بینک اے",
    bank1AccountTitle: "اکاؤنٹ ٹائٹل اے",
    bank1AccountNumber: "123456789",
    bank1BranchCode: "001",
    bank2Name: "بینک بی",
    bank2AccountTitle: "اکاؤنٹ ٹائٹل بی",
    bank2AccountNumber: "987654321",
    bank2BranchCode: "002",
    mobilePaymentTitle: "موبائل ادائیگی",
    easypaisaName: "ایزی پیسہ",
    easypaisaAccount: "03001234567",
    jazzcashName: "جاز کیش",
    jazzcashAccount: "03007654321",
    donationNote: "آپ کی سخاوت کا شکریہ۔",
    contactLabel: "ہم سے رابطہ کریں",
    contactTitle: "رابطہ کریں",
    contactDescription: "ہم آپ کی مدد کے لیے حاضر ہیں۔",
    addressTitle: "پتہ",
    addressDescription: "123 مین اسٹریٹ، ملاکنڈ، پاکستان",
    phoneTitle: "فون",
    phone1: "+92 300 1234567",
    phone2: "+92 300 7654321",
    emailTitle: "ای میل",
    email1: "info@malakandrahatghar.org",
    email2: "support@malakandrahatghar.org",
    contactFormTitle: "ہمیں پیغام بھیجیں",
  },
};

export const useTranslation = () => {
  const { language } = useLanguage();
  return translations[language as Language];
};

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
