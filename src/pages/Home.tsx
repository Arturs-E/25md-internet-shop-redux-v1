import React from 'react';
import { useAppSelector } from '../redux/hooks/hooks';
import { RootState } from '../redux/store/store';

const Home = () => {
  const activeLanguage = useAppSelector((state: RootState) => state.language.value);
  return (
    <>
      <h1>
        {activeLanguage === 'en' && 'Home'}
        {activeLanguage === 'lv' && 'Sākums'}
      </h1>
    </>
  );
};

export default Home;
