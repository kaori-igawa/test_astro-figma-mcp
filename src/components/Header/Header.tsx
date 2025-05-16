import React, { useState } from 'react';
import dehazeIcon from '@/assets/dehaze.svg';

import { Menu } from  '@/components/Menu/Menu'

export const Header: React.FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  return (
    <header className="
    relative flex justify-between items-center 
    w-full 
    px-[calc(100vw*(16/375))] py-[calc(100vw*(12/375))] 
    border-b-[calc(100vw*(2/375))] border-b-[#E60012]
    ">
      <img src={dehazeIcon.src} alt="Logo" className="h-[calc(100vw*(40/375))] w-auto object-contain" />
      <button onClick={() => setIsOpenMenu(!isOpenMenu)} className="p-2 flex items-center justify-center hover:opacity-80">
        <img src={dehazeIcon.src} alt="Menu" className="w-[calc(100vw*(24/375))] h-[calc(100vw*(24/375))]" />
      </button>

      <Menu isOpenMenu={isOpenMenu} />
    </header>
  );
}; 