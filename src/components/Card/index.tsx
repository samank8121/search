import React, { FC } from 'react';
import Image from 'next/image';
import { ProductType } from '@/types/ProductType';

export const Card: FC<ProductType> = ({ imgSrc,name, brand, price }) => (
  <div className='card-component'>
    <div className='image-placeholder'>
    <Image
      className='image'
      src={imgSrc}
      alt='search'
      width={20}
      height={20}
    />
    </div>
    
    <span className='name'>{name}</span>
    <span className='brand'>{brand}</span>
    <span className='price'>{`$ ${price}`}</span>
  </div>
);
