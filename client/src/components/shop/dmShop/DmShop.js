import { useState, useEffect } from 'react';
import client from '../../../utils/client.js';
import Header from '../../header/header/Header';
import DmShopView from './DmShopView';
import MyItemsListItems from './MyItemsListItems';

function DmShop({shopId, username}) {
    const [userData, setUserData] = useState({})
    const [locations, setLocations] = useState([])
    const [players, setPlayers] = useState([])

    useEffect(() => {
        const token = localStorage.getItem(process.env.REACT_APP_USER_TOKEN);
        if (!token) {
            return;
        }

        client
            .get(`/shop/${shopId}`)
            .then(res => {
                setUserData({id: res.data.data.id, name: res.data.data.name, image: res.data.data.image, userId: res.data.data.userId});
                setLocations(res.data.data.locations);
                setPlayers(res.data.data.players);
                console.log(res.data.data)
            })
            .catch(err => console.error('user error', err));
    }, []);

    // useEffect(() => {
    //     const token = localStorage.getItem(process.env.REACT_APP_USER_TOKEN);
    //     if (!token) {
    //         return;
    //     }

    //     client
    //         .get(`/shop/${shopId}`)
    //         .then(res => {
    //             setUserData({id: res.data.data.id, name: res.data.data.name, image: res.data.data.image, userId: res.data.data.userId});
    //             setLocations(res.data.data.locations);
    //             setPlayers(res.data.data.players);
    //         })
    //         .catch(err => console.error('user error', err));
    // }, []);

  return (
    <>
        <Header username={username}/>
        <DmShopView image={userData.image} locations={locations} setLocations={setLocations}/>
        {/* <ul className="">
                {myShops.map((item, index) => (
                <MyItemsListItems
                    item={item}
                    key={index}
                />
                ))}
        </ul> */}
    </>
  )
}

export default DmShop;