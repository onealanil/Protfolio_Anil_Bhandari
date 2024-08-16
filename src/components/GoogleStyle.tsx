import React from 'react';

const GoogleStyle = () => {
  return (
    <div className="flex items-center text-3xl font-sans font-bold">
      <span className="text-blue-600">G</span>
      <span className="text-red-500">o</span>
      <div className="flex items-center overflow-hidden">
        {[...Array(10)].map((_, index) => (
          <span 
            key={index} 
            className="text-yellow-400 inline-block "
            style={{
              position: 'relative',
            }}
          >
            o
          </span>
        ))}
      </div>
      <span className="text-blue-600 ml-1">g</span>
      <span className="text-green-500">l</span>
      <span className="text-red-500">e</span>
      <span className="text-blue-600 ml-4 text-xl">&gt;</span>
    </div>
  );
};

export default GoogleStyle;