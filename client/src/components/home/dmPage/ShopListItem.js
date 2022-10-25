import { useState } from 'react';
import { Link } from 'react-router-dom';

function ShopListItem({shop, username}) {
  return (
    <li>
            {/* <Link className="" to="/DM-shop" shopId={shop.id} username={username}> */}
            <Link className="" to={{pathname: "/DM-shop", state: {shopId: shop.id, username: username}}}>
            <img src={shop.image} alt={`${shop.name} icon`} className="shop-list-item-icon"></img>
            <p>{shop.name}</p>
            </Link> 
      {/* <img src={shop.image} alt={`${shop.name} icon`} className="shop-list-item-icon"></img>
      <p>{shop.name}</p> */}
    </li>
  )
}

export default ShopListItem;