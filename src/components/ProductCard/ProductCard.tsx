import React, { FC } from 'react';
import './ProductCard.scss';

interface ProductCardProps {
  imgUrl: string;
  productName: string;
  price: number;
}

const ProductCard:FC<ProductCardProps> = ({ imgUrl, productName, price }) => (
  <div className="products__product-card">
    <img src={imgUrl} alt={productName} className="products__product-card-image" />
    <h5>{productName}</h5>
    <span>{price}</span>
  </div>
);

export default ProductCard;
