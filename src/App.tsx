import React from 'react';
import './App.scss';
import {
  BrowserRouter, Routes, Route, HashRouter,
} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';

const App = () => (
  // Use BrowserRouter for normal workflow
  <HashRouter>
    <div className="internet-shop">
      <div className="internet-shop-wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </div>
    </div>
  </HashRouter>
);

export default App;
