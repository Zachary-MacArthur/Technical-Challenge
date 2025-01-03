'use client';

import React from 'react';

const NumberHistory = ({ history, title }) => {
  return (
    <div className="mt-8">
      <h3 className="text-lg cursor-default font-medium mb-3">{title}</h3>
      <div className="max-h-64 overflow-y-auto space-y-1">
        {history.map((item, index) => (
          <div 
            key={`${item.num1}-${item.num2}-${index}`}
            className="py-2 cursor-default border-b text-sm flex justify-between"
          >
            <span>{item.num1} - {item.num2}</span>
            <span className="text-gray-500">{item.timestamp}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NumberHistory;
