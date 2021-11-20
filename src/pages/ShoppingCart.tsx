import React from 'react';
import { useAppSelector } from '../redux/hooks/hooks';
import { RootState } from '../redux/store/store';
import CartItem from '../components/CartItem/CartItem';

const ShoppingCart = () => {
  const activeLanguage = useAppSelector((state: RootState) => state.language.value);
  const cartItems = useAppSelector((state) => state.shoppingCart);

  return (
    <>
      <h1>{activeLanguage === 'en' ? 'Shopping Cart' : 'Pirkumu grozs'}</h1>
      {
        cartItems.map(({ productName, quantity, pricePerUnit }) => (
          <CartItem productName={productName} quantity={quantity} price={pricePerUnit} />))
      }
    </>
  );
};

export default ShoppingCart;
