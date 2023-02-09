import React, { FC, useEffect, useState } from 'react';
import clsx from 'clsx';

export interface Props {
  categories: string[];
  onClick: (category: string) => void;
}

export const Categories: FC<Props> = ({ categories, onClick }) => {
  const [active, setActive] = useState('');

  useEffect(() => {
    if (categories && categories.length > 0) setActive(categories[0]);
  }, [categories]);

  const filterClicked = (filter: string) => {
    setActive(filter);
    onClick(filter);
  };

  return (
    <div className='filter-component'>
      {categories.map((f) => {
        return (
          <div
            key={f}
            className={clsx(
              { active: active === f },
              { 'not-active': active !== f }
            )}
            onClick={() => {
              filterClicked(f);
            }}
          >
            {f}
          </div>
        );
      })}
    </div>
  );
};
