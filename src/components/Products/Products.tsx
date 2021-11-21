import React, { FC } from 'react';
import './Products.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { RootState } from '../../redux/store/store';
import ProductCard from '../ProductCard/ProductCard';
import Button from '../Button/Button';
import { loadMore } from './productsSlice';

const Products:FC = () => {
  const products = useAppSelector((state: RootState) => state.products);
  const activeLanguage = useAppSelector((state: RootState) => state.language.value);
  const dispatch = useAppDispatch();

  const loadMoreProducts = () => {
    dispatch(loadMore());
  };

  return (
    <section className="products">
      <div className="products__product-card-wrapper">
        {
          products.map(({ imgUrl, productName, price }) => (
            <ProductCard key={productName} imgUrl={imgUrl} productName={productName} price={price} />
          ))
        }
      </div>
      <Button
        title={activeLanguage === 'en' ? 'Load more' : 'Ielādēt vēl'}
        clickHandler={loadMoreProducts}
        additionalClasses="button--load-more"
      />
    </section>
  );
};

export default Products;
