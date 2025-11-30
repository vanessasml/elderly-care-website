import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language, Content } from '../types';
import { TRANSLATIONS } from '../constants';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  content: Content;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Explicitly typing as React.FC to avoid children prop issues in strict mode
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'pt' ? 'en' : 'pt'));
  };

  const content = TRANSLATIONS[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, content }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};