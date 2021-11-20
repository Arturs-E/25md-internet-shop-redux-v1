import React, { FC } from 'react';
import './Products.scss';
import { useAppSelector } from '../../redux/hooks/hooks';
import { RootState } from '../../redux/store/store';
import ProductCard from '../ProductCard/ProductCard';

const Products:FC = () => {
  const products = useAppSelector((state: RootState) => state.products);
  return (
    <section className="products">
      {
        products.map(({ imgUrl, productName, price }) => (
          <ProductCard key={productName} imgUrl={imgUrl} productName={productName} price={price} />
        ))
      }
    </section>
  );
};

export default Products;
