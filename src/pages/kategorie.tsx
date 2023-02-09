import { SearchComponent } from '@/components/SearchComponent';
import React, { useState } from 'react';
import styles from '@/styles/Search.module.css';
import Image from 'next/image';
import { Categories } from '@/components/Categories';
import { GetServerSidePropsContext } from 'next';
import { Card } from '@/components/Card';
import SearchService from '@/services/http/endpoints/search';
import { useRouter } from 'next/router';

const categories = ['Trendy foods', 'Bread', 'Milk', 'Egg'];

interface Props {
  products: any[];
  recentSearches: any[];
}
const Kategories: React.FC<Props> = ({ products, recentSearches }) => {
  const [show, setShow] = useState(true);
  const router = useRouter();
  
  const onClickSearch = (searchCriteria: string) => { 
    if(searchCriteria==='')
    {
      router.push('/kategorie');
    }
    else
      router.push(`?q=${searchCriteria}`);    
  };

  const getProductImageUrl = (image:string)=>{
    return image ? (
      `https://${process.env.NEXT_PUBLIC_IMAGE_DOMAINS}/140x150/${image[0]}/${image[1]}/${image}.jpg`
      ) : undefined;      
  }
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
              <Categories categories={categories}  />
              <div className={styles.cards}>
                {products.map((p) => {
                  return (
                    <Card
                      imgSrc={getProductImageUrl(p.image)}
                      brand={p.brand}
                      name={p.name}
                      price={p.price}
                      key={p.productid}
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

export default Kategories;

async function getProducts(query: string) {
  const result = await SearchService.getSearches('kategori', query)
    .then((response) => response)
    .catch((error) => error);
  return result;
}
async function getRecentSearch(query: string) {
  const result = await SearchService.getRecentSearch(query)
    .then((response) => response)
    .catch((error) => error);
  return result;
}

export async function getServerSideProps({
  query,
}: GetServerSidePropsContext) {  
  // @ts-ignore
  const {data} = await getProducts(query||'');
  // @ts-ignore
  const recent = await getRecentSearch(query&&query.q||'');
  if (!(data.payload && data.payload.products&&recent&&recent.data.suggestions)) {
    return {
      notFound: true,
    };
  }

  return {
    props: {   
      products: data.payload.products || [],  
      recentSearches: recent.data.suggestions || [],
    },
  };
}