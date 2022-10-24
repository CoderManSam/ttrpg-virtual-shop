import { useState } from 'react';
import Header from '../../header/header/Header';
import Cart from './Cart';
import PlayerShopView from './PlayerShopView';

function PlayerShop() {
  return (
    <>
    <Header />
    <PlayerShopView />
    <Cart />
    </>
  )
}

export default PlayerShop;