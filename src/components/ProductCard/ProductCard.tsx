import React, { FC, useState } from 'react';
import './ProductCard.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { RootState } from '../../redux/store/store';
import { addToCart } from '../ShoppingCart/shoppingCartSlice';

interface ProductCardProps {
  imgUrl: string;
  productName: string;
  price: number;
}

const ProductCard:FC<ProductCardProps> = ({ imgUrl, productName, price }) => {
  const [counter, setCounter] = useState(1);
  const dispatch = useAppDispatch();
  const activeLanguage = useAppSelector((state: RootState) => state.language.value);

  const decreaseQuantity = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const addProductToCart = () => {
    dispatch(addToCart({ productName, quantity: counter, pricePerUnit: price }));
  };

  return (
    <div className="products__product-card">
      <img src={imgUrl} alt={productName} className="products__product-card-image" />
      <h5>{productName}</h5>
      <span>{price}</span>
      <div className="products__product-card-add-to-cart-wrapper">
        <div>
          <button onClick={decreaseQuantity}>-</button>
          <span>{counter}</span>
          <button onClick={() => setCounter(counter + 1)}>+</button>
        </div>
        <button onClick={addProductToCart}>
          {activeLanguage === 'en' ? 'Add' : 'Pievienot'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
