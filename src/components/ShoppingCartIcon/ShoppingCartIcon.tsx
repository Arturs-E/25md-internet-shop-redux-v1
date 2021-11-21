import React from 'react';
import './ShoppingCartIcon.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useAppSelector } from '../../redux/hooks/hooks';
import { RootState } from '../../redux/store/store';

const ShoppingCartIcon = () => {
  const productCount = useAppSelector((state: RootState) => state.shoppingCartProductCount.count);
  return (
    <div className="header__shopping-cart-icon-wrapper">
      <FontAwesomeIcon className="header__shopping-cart-icon" icon={faShoppingCart} />
      {productCount === 0
        ? ''
        : (
          <span className="header__shopping-cart-icon-quantity">
            {productCount}
          </span>
        )}
    </div>

  );
};

export default ShoppingCartIcon;
