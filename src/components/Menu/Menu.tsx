import React from 'react';

type PropsType = {
  isOpenMenu: boolean;
}

export const Menu: React.FC<PropsType> = ({ isOpenMenu }) => {
  return (
    <menu className={`
    absolute 
    left-0
    top-[calc(100vw*(66/375))]
    transform 
    overflow-hidden 
    bg-white 
    w-[100vw]
    px-4 pt-5 pb-4 
    text-left 
    shadow-xl
    transition-all transition-discrete duration-500 ease-fluid
    opacity-0
    h-0
    [@starting-style]:opacity-0
    [@starting-style]:h-0 
    ${isOpenMenu ? 'opacity-100 h-fit' : ''}
    `}>
      <li><a href='#test01'>aaa</a></li>
      <li><a href='#test02'>bbb</a></li>
      <li><a href='#test03'>ccc</a></li>
    </menu>
  );
}; 