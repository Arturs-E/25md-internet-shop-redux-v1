import React from 'react';
import { useAppSelector } from '../redux/hooks/hooks';
import { RootState } from '../redux/store/store';
import Products from '../components/Products/Products';

const Home = () => {
  const activeLanguage = useAppSelector((state: RootState) => state.language.value);
  return (
    <section className="home">
      <h1 className="heading1">
        {activeLanguage === 'en' && 'Home'}
        {activeLanguage === 'lv' && 'Produkti'}
      </h1>
      <Products />
    </section>
  );
};

export default Home;
