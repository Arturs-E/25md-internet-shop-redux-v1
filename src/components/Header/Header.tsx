import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <nav>
      <Link to="/">
        <img src="./assets/logo/Leica_Geosystems_Logo.svg" alt="Leica Geosystems logo" className="logo" />
      </Link>
    </nav>
    <select>
      <option>EN</option>
      <option>LV</option>
    </select>
    <nav>
      <Link to="/cart">Cart</Link>
    </nav>
  </div>
);

export default Header;
