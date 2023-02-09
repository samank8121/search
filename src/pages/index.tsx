import React from 'react';
import styles from '@/styles/Search.module.css';
import { GetServerSidePropsContext } from 'next';
import SearchService from '@/services/http/endpoints/search';


const Home = () => { 
  return (
    <>
      <main className={styles.searchPage}>
       Home Page
      </main>
    </>
  );
};

export default Home;
