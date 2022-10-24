import { Link } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';
import { useState } from 'react';
import client from '../../../utils/client.js';

import Header from '../../header/header/Header.js';
import ShopList from '../dmPage/ShopList';
import ItemList from '../dmPage/ItemList';

function PlayerPage() {
  return (
    <>
        <Header />
        <nav className="">
            <Link className="home-nav-link" to="/dungeon-master">
                DM
            </Link>
            <Link className="home-nav-link" to="/player">
                Player
            </Link>
        </nav>
        <main className='home-main'>
            <h2>My Shops</h2>
            <ShopList />
            <h2>My Items</h2>
            <ItemList />
        </main>
    </>
  )
}

export default PlayerPage;