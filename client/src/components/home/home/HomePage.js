import { Link } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import client from '../../../utils/client.js';

import Header from '../../header/header/Header.js';
import DmPage from '../dmPage/DmPage.js';
import PlayerPage from '../playerPage/PlayerPage.js';

function HomePage() {
    const [dmView, setDmView] = useState(true)
    const [userData, setUserData] = useState({})
    const [myShops, setMyShops] = useState([])
    const [myItems, setMyItems] = useState([])
    const [playerShops, setPlayerShops] = useState([])
    const [playerItems, setPlayerItems] = useState([])

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
                setPlayerItems(res.data.data.playerItems);
            })
            .catch(err => console.error('user error', err));
    }, []);

  return (
    <>
        <Header username={userData.username}/>
        <nav className="">
            <h3 onClick={() => setDmView(true)}>DM</h3>
            <h3 onClick={() => setDmView(false)}>Player</h3>
        </nav>
        {dmView ?
            (<DmPage />)
            :
            (<PlayerPage />)
        }
    </>
  )
}

export default HomePage;