import { Link } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';
import { useState } from 'react';
import client from '../../../utils/client.js';

function PlayerPage() {
  return (
    <main className='home-main'>
        <h2>Player Shops</h2>
        <h2>Player Inventory</h2>
    </main>
  )
}

export default PlayerPage;