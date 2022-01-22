import React from 'react';
import { Route, Routes } from "react-router-dom";

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<HomePage />} ></Route>
        <Route exact path='/shop' element={<ShopPage/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
