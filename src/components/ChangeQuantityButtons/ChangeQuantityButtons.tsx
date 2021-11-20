import React, { FC } from 'react';
import './ChangeQuantityButtons.scss';

interface ChangeQuantityButtonsProps {
  decreaseQuantity: () => void;
  quantity: number;
  increaseQuantity: () => void;
}

const ChangeQuantityButtons:FC<ChangeQuantityButtonsProps> = ({ decreaseQuantity, quantity, increaseQuantity }) => (
  <div className="change-quantity-buttons">
    <button className="change-quantity-buttons__button" onClick={decreaseQuantity}>-</button>
    <span>{quantity}</span>
    <button className="change-quantity-buttons__button" onClick={increaseQuantity}>+</button>
  </div>
);

export default ChangeQuantityButtons;
