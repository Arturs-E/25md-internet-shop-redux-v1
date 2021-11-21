import React, { FC } from 'react';
import './CartItem.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { RootState } from '../../redux/store/store';
import ChangeQuantityButtons from '../ChangeQuantityButtons/ChangeQuantityButtons';
import { decreaseQuantity, increaseQuantity } from '../ShoppingCart/shoppingCartSlice';

interface CartItemProps {
  productName: string;
  quantity: number;
  price: number;
  imgUrl: string;
}

const CartItem:FC<CartItemProps> = ({
  productName, quantity, price, imgUrl,
}) => {
  const activeLanguage = useAppSelector((state: RootState) => state.language.value);
  const dispatch = useAppDispatch();
  const formattedPrice = price.toFixed(2);
  const total = (quantity * price).toFixed(2);

  const decreaseItemCount = () => {
    dispatch(decreaseQuantity(productName));
  };

  const increaseItemCount = () => {
    dispatch(increaseQuantity(productName));
  };

  return (
    <div className="shopping-cart__item-wrapper">
      <img src={imgUrl} alt={productName} className="shopping-cart__item-image" />
      <h4>{productName}</h4>
      <div className="shopping-cart__price-quantity-wrapper">
        <span>
          {
            activeLanguage === 'en' ? `Price per unit: ${formattedPrice} EUR` : `Cena/gab.: ${formattedPrice} EUR`
          }
        </span>
        <span>
          {activeLanguage === 'en' ? 'Quantity: ' : 'Skaits: '}
          <ChangeQuantityButtons
            decreaseQuantity={decreaseItemCount}
            quantity={quantity}
            increaseQuantity={increaseItemCount}
          />
        </span>
        <span>
          {
            activeLanguage === 'en' ? `Total: ${total} EUR` : `Kopā: ${total} EUR`
          }
        </span>
      </div>
    </div>
  );
};

export default CartItem;
