import { useState } from 'react';
import Header from '../../header/header/Header';
import DmShopView from './DmShopView';
import MyItemsList from './MyItemsList';

function DmShop() {
  return (
    <>
    <Header />
    <DmShopView />
    <MyItemsList />
    </>
  )
}

export default DmShop;