import React, { FC } from 'react';
import './CartItem.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { RootState } from '../../redux/store/store';
import ChangeQuantityButtons from '../ChangeQuantityButtons/ChangeQuantityButtons';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { decreaseQuantity, increaseQuantity, removeItem } from '../ShoppingCart/shoppingCartSlice';
import { decreaseCartProductCount } from '../ShoppingCartIcon/shoppingCartIconSlice';

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
  const shoppingCartItems = useAppSelector((state: RootState) => state.shoppingCartItems);
  const dispatch = useAppDispatch();
  const formattedPrice = price.toFixed(2);
  const total = (quantity * price).toFixed(2);

  const decreaseItemCount = () => {
    dispatch(decreaseQuantity(productName));
  };

  const increaseItemCount = () => {
    dispatch(increaseQuantity(productName));
  };

  const removeProduct = () => {
    dispatch(removeItem(productName));
    dispatch(decreaseCartProductCount(shoppingCartItems.length));
  };

  return (
    <div className="shopping-cart__item-wrapper">
      <img src={imgUrl} alt={productName} className="shopping-cart__item-image" />
      <h4 className="heading4">{productName}</h4>
      <div className="shopping-cart__price-quantity-wrapper">
        <span>
          {
            activeLanguage === 'en' ? `Price per unit: ${formattedPrice} EUR` : `Cena/gab.: ${formattedPrice} EUR`
          }
        </span>
        <span className="shopping-cart__quantity-wrapper">
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
      <FontAwesomeIcon icon={faTrash} className="shopping-cart__remove-item" onClick={removeProduct} />
    </div>
  );
};

export default CartItem;
