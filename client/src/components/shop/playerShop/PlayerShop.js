import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import client from '../../../utils/client.js';
import Header from '../../header/header/Header';
import DmShopView from '../dmShop/DmShopView';
import MyItemsListItems from '../dmShop/MyItemsListItems';

function PlayerShop() {
    const location = useLocation()
    const {shopId, username, shopName} = location.state

    const [userData, setUserData] = useState({})
    const [locations, setLocations] = useState([])
    const [newLocations, setNewLocations] = useState([])
    // const [players, setPlayers] = useState([])
    const [myItems, setMyItems] = useState([])
    const [playerView] =useState(true)

    useEffect(() => {
        const token = localStorage.getItem(process.env.REACT_APP_USER_TOKEN);
        if (!token) {
            return;
        }

        client
            .get(`/shop/${shopId}`)
            .then(res => {
                setUserData({id: res.data.data.shop.id, name: res.data.data.shop.name, image: res.data.data.shop.image, userId: res.data.data.shop.userId});
                setNewLocations(res.data.data.shop.locations);
                setLocations(res.data.data.shop.locations);
                // setMyItems(res.data.data.items.items);
                // setPlayers(res.data.data.players);
                // console.log(res.data.data)
                // console.log("myItems", myItems)
            })
            .catch(err => console.error('user error', err));

            client
            .get(`/items/${shopId}`)
            .then(res => {
                setMyItems(res.data.data.items);
                console.log(res.data.data)
            })
            .catch(err => console.error('user error', err));
    }, []);

  return (
    <>
        <Header username={username} shopName={shopName}/>
        <main className='dmshop'>
            <div className='dmshop-view'>            
                <DmShopView image={userData.image}/>
            </div>
            <div className='dmshop-itemlist'>
                <h3>Cart</h3>
                <ul className="">
                        {myItems.map((item, index) => (
                        <MyItemsListItems
                            item={item}
                            shopId={shopId}
                            locations={locations}
                            newLocations={newLocations}
                            setNewLocations={setNewLocations}
                            playerView={playerView}
                            myItems={myItems}
                            setMyItems={setMyItems}
                            key={index}
                        />
                        ))}
                </ul>
            </div>
        </main>
    </>
  )
}

export default PlayerShop;