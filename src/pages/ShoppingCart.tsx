import React from 'react';
import { useAppSelector } from '../redux/hooks/hooks';
import { RootState } from '../redux/store/store';
import CartItem from '../components/CartItem/CartItem';

const ShoppingCart = () => {
  const activeLanguage = useAppSelector((state: RootState) => state.language.value);
  const cartItems = useAppSelector((state) => state.shoppingCartItems);

  return (
    <section className="shopping-cart">
      <h1>{activeLanguage === 'en' ? 'Shopping Cart' : 'Pirkumu grozs'}</h1>
      <div className="shopping-cart__list-wrapper">
        {
          cartItems.map(({
            productName,
            quantity,
            pricePerUnit,
            imgUrl,
          }) => (
            <CartItem productName={productName} quantity={quantity} price={pricePerUnit} imgUrl={imgUrl} />))
        }
      </div>
    </section>
  );
};

export default ShoppingCart;
