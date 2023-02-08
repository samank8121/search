import { SearchComponent } from '@/components/SearchComponent';
import React from 'react';
import styles from '@/styles/Search.module.css';
import Image from 'next/image';
import { Filters } from '@/components/Filters';
import { GetStaticPropsContext } from 'next';
import { ProductType } from '@/types/ProductType';
import { Card } from '@/components/Card';

const filters = ['Trendy foods', 'Bread', 'Milk', 'Egg'];

interface Props {
  products: ProductType[];
}
const Search: React.FC<Props> = ({ products }) => {
  // Hooks

  const onClick = (searchCriteria: string) => {
    //Call Api
  };

  return (
    <>
      <main className={styles.searchPage}>
        <section className={styles.section}>
          <div className={styles.header}>
            <Image
              src='/Menu.svg'
              alt='search'
              width={22}
              height={14}
              priority
            />
            <SearchComponent />
          </div>
          <label className={styles.title}>
            Find your favorite product now.
          </label>
          <Filters filters={filters} onClick={onClick} />
          <div className={styles.cards}>
            {products.map((p) => {
                return (<Card
                imgSrc={p.imgSrc}
                brand={p.brand}
                name={p.name}
                price={p.price}
                key={p.name}
                />);
            })}
          </div>
          
        </section>
      </main>
    </>
  );
};

export default Search;

export function getStaticProps({ locale }: GetStaticPropsContext): {
  props: { products: ProductType[] };
} {
  return {
    props: {
      products: [
        {
          imgSrc: '/product.webp',
          name: 'product name',
          brand: 'Brand',
          price: 799,
        },
        {
          imgSrc: '/product.webp',
          name: 'product name',
          brand: 'Brand',
          price: 599,
        },
        {
          imgSrc: '/product.webp',
          name: 'product name',
          brand: 'Brand',
          price: 199,
        },
        {
          imgSrc: '/product.webp',
          name: 'product name',
          brand: 'Brand',
          price: 299,
        },
      ],
    },
  };
}
