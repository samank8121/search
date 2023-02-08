import React from 'react';
import Image from 'next/image';

export const SearchComponent = () => (
  <div className='search-component'>
    <input type="text" className='input-field' placeholder='Search Product' />
    <Image className='search-icon' src='/Search.svg' alt='search' width={20} height={20} />
  </div>
);
