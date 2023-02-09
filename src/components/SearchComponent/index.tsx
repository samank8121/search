import React, { FC, useState } from 'react';
import Image from 'next/image';

interface Props {
  onClick: (filter: string) => void;
}

export const SearchComponent: FC<Props> = ({onClick}) => {
  const [searchCriteria, setSearchCriteria] = useState('');
  return (
    <div className='search-component'>
      <input
        type='text'
        className='input-field'
        placeholder='Search Product'
        value={searchCriteria}
        onChange={(e)=>{setSearchCriteria(e.target.value)}}
      />
      <Image
        onClick={(e) => onClick(searchCriteria)}
        className='search-icon'
        src='/Search.svg'
        alt='search'
        width={20}
        height={20}
      />
    </div>
  );
};
