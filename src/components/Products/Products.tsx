import React, { FC } from 'react';
import './Products.scss';
import { useAppSelector } from '../../redux/hooks/hooks';
import { RootState } from '../../redux/store/store';
import ProductCard from '../ProductCard/ProductCard';

const Products:FC = () => {
  const products = useAppSelector((state: RootState) => state.products);
  const activeLanguage = useAppSelector((state: RootState) => state.language.value);

  return (
    <section className="products">
      <div className="products__product-card-wrapper">
        {
          products.map(({ imgUrl, productName, price }) => (
            <ProductCard key={productName} imgUrl={imgUrl} productName={productName} price={price} />
          ))
        }
      </div>
      <button>
        {activeLanguage === 'en' ? 'Load more' : 'Ielādēt vēl'}
      </button>
    </section>
  );
};

export default Products;
