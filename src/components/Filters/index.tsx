import React, { FC, useEffect, useState } from 'react';
import clsx from 'clsx';

export interface Props {
  filters: string[];
  onClick: (filter: string) => void;
}

export const Filters: FC<Props> = ({ filters, onClick }) => {
  const [active, setActive] = useState('');

  useEffect(() => {
    if (filters && filters.length > 0) setActive(filters[0]);
  }, [filters]);

  const filterClicked = (filter: string) => {
    setActive(filter);
    onClick(filter);
  };

  return (
    <div className='filter-component'>
      {filters.map((f) => {
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
