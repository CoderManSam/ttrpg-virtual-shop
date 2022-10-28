import { Link } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';
import { useState } from 'react';
import client from '../../../utils/client.js';

import PlayerShopListItem from './PlayerShopListItem.js';
import ItemListItem from '../dmPage/ItemListItem';

function PlayerPage({playerShops, playerInventory, username}) {
    const shopsArray = playerShops
    const itemsArray = playerInventory

  return (
    <main className='home-main'>
        <div className='home-shops'>
            <h2>Player Shops</h2>
            {/* <ShopList myShops={myShops}/> */}
            <ul className="home-shops-list">
                {shopsArray.map((shop, index) => (
                    <PlayerShopListItem
                        shop={shop}
                        key={index}
                        username={username}
                    />
                ))}
            </ul>
        </div>
        <div className='home-items'>
            <h2>Player Inventory</h2>
            {/* <ItemList myItems={myItems}/> */}
            <ul className="home-items-list">
                {itemsArray.map((item, index) => (
                    <ItemListItem
                        item={item}
                        key={index}
                    />
                ))}
            </ul>
        </div>
    </main>
  )
}

export default PlayerPage;