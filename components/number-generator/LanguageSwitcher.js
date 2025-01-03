'use client';

import React from 'react';
import LanguageIcon from './LanguageIcon';

const LanguageSwitcher = ({ language, onToggle }) => {
  return (
    <button 
      onClick={onToggle}
      className="p-2 border border-gray-300 rounded-md
        transition-colors duration-200
        hover:opacity-60 active:bg-gray-100
        flex items-center justify-center"
      title={language === 'en' ? 'Switch to French' : 'Passer en anglais'}
    >
      <LanguageIcon />
      <span className="ml-1 text-xs">{language.toUpperCase()}</span>
    </button>
  );
};

export default LanguageSwitcher;
