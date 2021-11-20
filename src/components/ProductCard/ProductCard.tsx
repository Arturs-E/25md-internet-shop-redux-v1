import React, { FC, useState } from 'react';
import './ProductCard.scss';

interface ProductCardProps {
  imgUrl: string;
  productName: string;
  price: number;
}

const ProductCard:FC<ProductCardProps> = ({ imgUrl, productName, price }) => {
  const [counter, setCounter] = useState(1);

  const decreaseQuantity = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
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
        <button>Add</button>
      </div>
    </div>
  );
};

export default ProductCard;
