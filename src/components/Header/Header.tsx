import React from 'react';
import dehazeIcon from '@/assets/dehaze.svg';

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center w-full px-4 py-3 shadow-[0_0_2px_#E60012]">
      <img src={dehazeIcon.src} alt="Logo" className="h-10 w-auto object-contain" />
      <button className="p-2 flex items-center justify-center hover:opacity-80">
        <img src={dehazeIcon.src} alt="Menu" className="w-6 h-6" />
      </button>
    </header>
  );
}; 