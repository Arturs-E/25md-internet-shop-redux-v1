import React from 'react';
import { useAppSelector } from '../redux/hooks/hooks';
import { RootState } from '../redux/store/store';
import CartItem from '../components/CartItem/CartItem';
import { ShoppingCartInterface } from '../components/ShoppingCart/shoppingCartSlice';

const ShoppingCart = () => {
  const activeLanguage = useAppSelector((state: RootState) => state.language.value);
  const cartItems = useAppSelector((state) => state.shoppingCartItems);

  const totalSum = cartItems
    .reduce((sum: number, item) => sum + (item.quantity * item.pricePerUnit), 0)
    .toFixed(2);

  return (
    <section className="shopping-cart">
      <h1 className="heading1">{activeLanguage === 'en' ? 'Shopping Cart' : 'Pirkumu grozs'}</h1>
      <div className="shopping-cart__list-wrapper">
        {
          cartItems.map(({
            productName,
            quantity,
            pricePerUnit,
            imgUrl,
          }) => (
            <CartItem
              key={productName}
              productName={productName}
              quantity={quantity}
              price={pricePerUnit}
              imgUrl={imgUrl}
            />
          ))
        }
      </div>
      <span className="shopping-cart__total-sum">
        {activeLanguage === 'en' ? `Total: ${totalSum} EUR` : `Kopā: ${totalSum} EUR`}
      </span>
    </section>
  );
};

export default ShoppingCart;
