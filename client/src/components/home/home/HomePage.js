import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import client from '../../../utils/client.js';

import Header from '../../header/header/Header.js';
import DmPage from '../dmPage/DmPage.js';
import PlayerPage from '../playerPage/PlayerPage.js';

function HomePage() {
    const [playerView, setPlayerView] = useState(false)
    const [userData, setUserData] = useState({})
    const [myShops, setMyShops] = useState([])
    const [myItems, setMyItems] = useState([])
    const [playerShops, setPlayerShops] = useState([])
    const [playerInventory, setPlayerInventory] = useState([])

    useEffect(() => {
        const token = localStorage.getItem(process.env.REACT_APP_USER_TOKEN);
        if (!token) {
            return;
        }

        client
            .get(`/user`)
            .then(res => {
                setUserData({id: res.data.data.id, username: res.data.data.username});
                setMyShops(res.data.data.myShops);
                setMyItems(res.data.data.myItems);
                setPlayerShops(res.data.data.playerShops);
                setPlayerInventory(res.data.data.playerInventory);
            })
            .catch(err => console.error('user error', err));
    }, []);

  return (
    <>
        <Header username={userData.username} />
        <nav className="main-nav">
            <h3 onClick={() => setPlayerView(false)} className="hover">DM</h3>
            <h3> / </h3>
            <h3 onClick={() => setPlayerView(true)} className="hover">Player</h3>
        </nav>
        {playerView ?
            (<PlayerPage playerShops={playerShops} playerInventory={playerInventory} username={userData.username}/>)
            :
            (<DmPage myShops={myShops} setMyShops={setMyShops} myItems={myItems} setMyItems={setMyItems} username={userData.username} />)

        }
    </>
  )
}

export default HomePage;