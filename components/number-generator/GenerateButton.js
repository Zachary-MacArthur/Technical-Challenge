'use client';

import React from 'react';

const GenerateButton = ({ onClick, isGenerating, text }) => {
  return (
    <button 
      onClick={onClick} 
      disabled={isGenerating}
      className="w-40 px-4 py-2 text-sm border border-gray-300 rounded-md
        transition-colors duration-200
        hover:opacity-60 active:bg-gray-100
        disabled:opacity-50"
    >
      {text}
    </button>
  );
};

export default GenerateButton;