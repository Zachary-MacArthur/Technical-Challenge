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
            ${isGenerating ? 'opacity-50' : 'opacity-100'}
            ${numbers.num1 !== null && numbers.num2 !== null &&
              numbers.num1 === numbers.num2 ? 
              'bg-blue-200 opacity-90 cursor-default hover:opacity-80' : 'bg-white'}
            ${numbers.num1 !== null && numbers.num2 !== null &&
              numbers.num1 !== numbers.num2 ? 'opacity-80 border-gray-300 hover:opacity-50 cursor-default' : ''}
          `}
        >
          {num !== null ? num : '-'}
        </div>
      ))}
    </div>
  );
};

export default NumberDisplay;