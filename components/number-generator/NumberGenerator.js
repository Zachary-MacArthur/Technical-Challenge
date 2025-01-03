'use client';

import React, { useState, useEffect } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import NumberDisplay from './NumberDisplay';
import GenerateButton from './GenerateButton';
import NumberHistory from './NumberHistory';
import { translations } from './translations';

const NumberGenerator = () => {
  const [numbers, setNumbers] = useState({ num1: null, num2: null });
  const [isGenerating, setIsGenerating] = useState(false);
  const [language, setLanguage] = useState('en');
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedHistory = localStorage.getItem('numberHistory');
      setHistory(savedHistory ? JSON.parse(savedHistory) : []);
    }
  }, []);

  useEffect(() => {
    if (history.length > 0) {
      localStorage.setItem('numberHistory', JSON.stringify(history));
    }
  }, [history]);

  const generateNumbers = () => {
    setIsGenerating(true);
    setNumbers({ num1: null, num2: null });

    return new Promise(resolve => {
      setTimeout(() => {
        const num1 = Math.floor(Math.random() * 5) + 1;
        const num2 = Math.floor(Math.random() * 5) + 1;
        resolve({ num1, num2 });
      }, 2000);
    });
  };

  const handleGenerate = async () => {
    const newNumbers = await generateNumbers();
    setNumbers(newNumbers);
    setIsGenerating(false);
    setHistory(prev => [
      ...prev,
      {
        ...newNumbers,
        timestamp: new Date().toLocaleString(
          language === 'en' ? 'en-US' : 'fr-FR'
        )
      }
    ]);
  };

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'fr' : 'en'));
  };

  const t = translations[language];

  return (
    <div className="max-w-md mx-auto p-6 space-y-8">
      <div className="grid grid-cols-3 items-center">
        <div /> {/* spacing */}
        <div className="flex justify-center">
          <GenerateButton 
            onClick={handleGenerate}
            isGenerating={isGenerating}
            text={isGenerating ? t.generating : t.generate}
          />
        </div>
        <div className="flex justify-end">
          <LanguageSwitcher 
            language={language}
            onToggle={toggleLanguage}
          />
        </div>
      </div>

      <NumberDisplay 
        numbers={numbers}
        isGenerating={isGenerating}
      />

      <NumberHistory 
        history={history}
        title={t.history}
      />
    </div>
  );
};

export default NumberGenerator;