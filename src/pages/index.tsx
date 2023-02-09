import { SearchComponent } from '@/components/SearchComponent';
import React, { useState } from 'react';
import styles from '@/styles/Search.module.css';
import Image from 'next/image';
import { Categories } from '@/components/Categories';
import { GetStaticPropsContext } from 'next';
import { ProductType } from '@/types/ProductType';
import { Card } from '@/components/Card';
import SearchService from '@/services/http/endpoints/search';

const categories = ['Trendy foods', 'Bread', 'Milk', 'Egg'];

interface Props {
  products: ProductType[];
}
const Home: React.FC<Props> = ({ products }) => {
  const [show, setShow] = useState(true);
  const [recentSearches,setRecentSearches]=useState([{text:'coca'}]);

  const onClickCategories = (category: string) => {
    //Call Api
  };
  const onClickSearch = (searchCriteria: string) => {
    console.log(searchCriteria);
    // SearchService.getRecentSearch(searchCriteria)
    // .then((response) => {
    //   console.log(response);
    //   //setRecentSearches(response.data)
    // })
    // .catch((error) => console.log(error));
  };

  return (
    <>
      <main className={styles.searchPage}>
        <section className={styles.section}>
          <div className={styles.header}>
            {show && (
              <Image
                src='/Menu.svg'
                alt='search'
                width={22}
                height={14}
                priority
              />
            )}
            <SearchComponent
              onClick={onClickSearch}
              onFocus={() => {
                setShow(false);
              }}
              onBlur={() => {
                setShow(true);
              }}
              recentSearches={recentSearches}
            />
          </div>
          {show && (
            <>
              <label className={styles.title}>
                Find your favorite product now.
              </label>
              <Categories categories={categories} onClick={onClickCategories} />
              <div className={styles.cards}>
                {products.map((p) => {
                  return (
                    <Card
                      imgSrc={p.imgSrc}
                      brand={p.brand}
                      name={p.name}
                      price={p.price}
                      key={p.name}
                    />
                  );
                })}
              </div>
            </>
          )}
        </section>
      </main>
    </>
  );
};

export default Home;

// async function getData(slug: string) {
//   const result = await SearchService.getCategories(slug)
//     .then((response) => response)
//     .catch((error) => error);
//   return result;
// }

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
