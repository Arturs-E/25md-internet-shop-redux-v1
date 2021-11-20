import React, { FC, useState } from 'react';
import './ProductCard.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { RootState } from '../../redux/store/store';
import { addToCart } from '../ShoppingCart/shoppingCartSlice';
import ChangeQuantityButtons from '../ChangeQuantityButtons/ChangeQuantityButtons';

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

  const increaseQuantity = () => {
    setCounter(counter + 1);
  };

  const addProductToCart = () => {
    dispatch(addToCart({ productName, quantity: counter, pricePerUnit: price }));
  };

  return (
    <div className="products__product-card">
      <img src={imgUrl} alt={productName} className="products__product-card-image" />
      <div className="products__product-card-info-wrapper">
        <div className="products__product-card-name-price-wrapper">
          <h5>{productName}</h5>
          <span>
            {
            activeLanguage === 'en' ? `Price: ${price.toFixed(2)} EUR` : `Cena: ${price.toFixed(2)} EUR`
          }
          </span>
        </div>
        <div className="products__product-card-add-to-cart-wrapper">
          <ChangeQuantityButtons
            decreaseQuantity={decreaseQuantity}
            quantity={counter}
            increaseQuantity={increaseQuantity}
          />
          <button onClick={addProductToCart}>
            {activeLanguage === 'en' ? 'Add' : 'Pievienot'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
