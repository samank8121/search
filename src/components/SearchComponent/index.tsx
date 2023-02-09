import React, { FC, useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { RecentSearchType } from '@/types/RecentSearchType';

interface Props {
  onClick: (filter: string) => void;
  onFocus: () => void;
  onBlur: () => void;
  recentSearches?: RecentSearchType[];
}

export const SearchComponent: FC<Props> = ({
  onClick,
  onFocus,
  onBlur,
  recentSearches,
}) => {
  const [searchCriteria, setSearchCriteria] = useState('');
  const [hasFocus, setHasFocus] = useState(false);

  return (
    <div className={clsx('flex flex-col', { 'w-full': hasFocus })}>
      <div className='search-component'>
        <input
          type='text'
          className='input-field'
          placeholder='Search Product'
          value={searchCriteria}
          onFocus={(e) => {
            setHasFocus(true);
            onFocus();
          }}
          onChange={(e) => {
            setSearchCriteria(e.target.value);
          }}
        />
        <Image
          onClick={(e) => {
            onClick(searchCriteria);
            setHasFocus(false);
            onBlur();
          }}
          className='search-icon'
          src='/Search.svg'
          alt='search'
          width={20}
          height={20}
        />
      </div>
      {hasFocus && (
        <div className='my-10 w-full'>
          <div className='flex justify-between'>
            <span>Popular searches</span>
            <Image
              onClick={(e) => {
                setSearchCriteria('');
                onClick('');
                setHasFocus(false);
                onBlur();
              }}
              className=''
              src='/Close.svg'
              alt='search'
              width={20}
              height={20}
            />
          </div>
          <hr />
          {recentSearches &&
            recentSearches.map((rs) => {
              return (
                <div
                  className='my-10 flex justify-between'
                  key={rs.text}
                  onClick={(e) => {
                    setSearchCriteria(rs.text);
                    onClick(rs.text);
                  }}
                >
                  <span>{rs.text}</span>
                  <Image
                    src='/Search.svg'
                    alt='search'
                    width={20}
                    height={20}
                  />
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};
