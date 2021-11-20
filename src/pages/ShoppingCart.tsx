import React from 'react';
import { useAppSelector } from '../redux/hooks/hooks';
import { RootState } from '../redux/store/store';

const ShoppingCart = () => {
  const activeLanguage = useAppSelector((state: RootState) => state.language.value);

  return (
    <h1>{activeLanguage === 'en' ? 'Shopping Cart' : 'Pirkumu grozs'}</h1>
  );
};

export default ShoppingCart;
