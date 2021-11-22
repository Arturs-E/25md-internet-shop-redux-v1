import React, { FC, useState } from 'react';
import './ProductCard.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { RootState } from '../../redux/store/store';
import { addToCart } from '../ShoppingCart/shoppingCartSlice';
import ChangeQuantityButtons from '../ChangeQuantityButtons/ChangeQuantityButtons';
import Button from '../Button/Button';
import { increaseCartProductCount } from '../ShoppingCartIcon/shoppingCartIconSlice';

interface ProductCardProps {
  imgUrl: string;
  productName: string;
  price: number;
}

const ProductCard:FC<ProductCardProps> = ({ imgUrl, productName, price }) => {
  const [counter, setCounter] = useState(1);
  const dispatch = useAppDispatch();
  const activeLanguage = useAppSelector((state: RootState) => state.language.value);
  const shoppingCartProducts = useAppSelector((state) => state.shoppingCartItems);

  const decreaseQuantity = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const increaseQuantity = () => {
    setCounter(counter + 1);
  };

  const addProductToCart = () => {
    dispatch(addToCart({
      productName, quantity: counter, pricePerUnit: price, imgUrl,
    }));
    if (!shoppingCartProducts.some((item) => item.productName === productName)) {
      dispatch(increaseCartProductCount(shoppingCartProducts.length));
    }
  };

  return (
    <div className="products__product-card">
      <div className="products__product-card-image-wrapper">
        <img src={imgUrl} alt={productName} className="products__product-card-image" />
      </div>
      <div className="products__product-card-info-wrapper">
        <div className="products__product-card-name-price-wrapper">
          <h4 className="heading4">{productName}</h4>
          <span className="products__product-card-price">
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
          <Button
            title={activeLanguage === 'en' ? 'Add' : 'Pievienot'}
            clickHandler={addProductToCart}
            additionalClasses="button--add-to-cart"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
