'use client';

import React from 'react';

const NumberDisplay = ({ numbers, isGenerating }) => {
  return (
    <div className="flex justify-center gap-6">
      {[numbers.num1, numbers.num2].map((num, idx) => (
        <div
          key={idx}
          className={`
            w-20 h-20 flex items-center justify-center text-2xl
            border rounded
            transition-all duration-300 ease-in-out
            ${isGenerating ? 'opacity-50' : 'opacity-100'}
            ${numbers.num1 !== null && numbers.num2 !== null &&
              numbers.num1 === numbers.num2 ? 'bg-gray-50' : ''}
          `}
        >
          {num !== null ? num : '-'}
        </div>
      ))}
    </div>
  );
};

export default NumberDisplay;
