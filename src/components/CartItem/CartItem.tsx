import React, { FC } from 'react';
import { useAppSelector } from '../../redux/hooks/hooks';
import { RootState } from '../../redux/store/store';

interface CartItemProps {
  productName: string;
  quantity: number;
  price: number;
}

const CartItem:FC<CartItemProps> = ({ productName, quantity, price }) => {
  const activeLanguage = useAppSelector((state: RootState) => state.language.value);
  const formattedPrice = price.toFixed(2);

  return (
    <div className="shopping-cart__item-wrapper">
      <h5>{productName}</h5>
      <span>
        {
          activeLanguage === 'en' ? `Price per unit: ${formattedPrice} EUR` : `Cena/gab.: ${formattedPrice} EUR`
        }
      </span>
      <span>
        {
          activeLanguage === 'en' ? `Quantity: ${quantity}` : `Skaits: ${quantity}`
        }
      </span>
    </div>
  );
};

export default CartItem;
