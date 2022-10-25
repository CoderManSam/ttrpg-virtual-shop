import { Link } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';
import { useState } from 'react';
import client from '../../../utils/client.js';

import ShopList from './ShopList.js';
import ItemList from './ItemList.js';
import ShopListItem from './ShopListItem.js';
import ItemListItem from './ItemListItem.js';

function DmPage({myShops, myItems, username}) {
  return (
    <main className='home-main'>
        <div className='home-shops'>
            <h2>My Shops</h2>
            {/* <ShopList myShops={myShops}/> */}
            <ul className="home-shops-list">
                {myShops.map((shop, index) => (
                    <ShopListItem
                        shop={shop}
                        key={index}
                        username={username}
                    />
                ))}
            </ul>
        </div>
        <div className='home-items'>
            <h2>My Items</h2>
            {/* <ItemList myItems={myItems}/> */}
            <ul className="home-items-list">
                {myItems.map((item, index) => (
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

export default DmPage;