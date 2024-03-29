import React, { FC } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { changeLanguage } from '../SelectLanguage/selectLanguageSlice';
import { useAppDispatch } from '../../redux/hooks/hooks';
import ShoppingCartIcon from '../ShoppingCartIcon/ShoppingCartIcon';

const Header:FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="header">
      <nav>
        <Link to="/">
          <img src="./assets/logo/Leica_Geosystems_Logo.svg" alt="Leica Geosystems logo" className="logo" />
        </Link>
      </nav>
      <select name="language" onChange={() => dispatch(changeLanguage())}>
        <option value="en">EN</option>
        <option value="lv">LV</option>
      </select>
      <nav>
        <Link to="/cart">
          <ShoppingCartIcon />
        </Link>
      </nav>
    </div>
  );
};

export default Header;
