import { Link } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';
import { useState } from 'react';
import client from '../../../utils/client.js';

import ShopList from './ShopList.js';
import ItemList from './ItemList.js';

function DmPage() {
  return (
    <main className='home-main'>
        <h2>My Shops</h2>
        <ShopList />
        <h2>My Items</h2>
        <ItemList />
    </main>
  )
}

export default DmPage;