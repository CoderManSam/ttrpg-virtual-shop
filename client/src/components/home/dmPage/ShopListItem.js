import { useState } from 'react';
import { Link } from 'react-router-dom';

function ShopListItem({shop, username}) {
  return (
    <li>
            <Link className="" to="/DM-shop" state={{shopId: shop.id, username: username, shopName: shop.name}}>
            {/* <Link className="" to={{pathname: "/DM-shop", state: {shopId: shop.id, username: username}}}> */}
            <img src={shop.image} alt={`${shop.name} icon`} className="dmpage-list-icon"></img>
            <p>{shop.name}</p>
            </Link> 
      {/* <img src={shop.image} alt={`${shop.name} icon`} className="shop-list-item-icon"></img>
      <p>{shop.name}</p> */}
    </li>
  )
}

export default ShopListItem;