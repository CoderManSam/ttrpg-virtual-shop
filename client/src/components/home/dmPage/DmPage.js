import { Link } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import client from '../../../utils/client.js';

import ShopListItem from './ShopListItem.js';
import ItemListItem from './ItemListItem.js';
import { AddBoxOutlined } from '@mui/icons-material';
import AddShop from './AddShop.js';
import AddItem from './AddItem.js';

function DmPage({myShops, setMyShops, myItems, setMyItems, username}) {
    const [showAddShopModal, setShowAddShopModal] = useState(false)
    const [showAddItemModal, setShowAddItemModal] = useState(false)
    const [newShop, setNewShop] = useState({})
    const [newItem, setNewItem] = useState({})
    // const [returnedNewShop, setReturnedNewShop] = useState({})

    // let returnedNewShop = {}

    // useEffect(() => {
    //     setMyShops([
    //         ...myShops,
    //         returnedNewShop,
    //         ])  
    // }, [returnedNewShop]);

    // const getMyShops = event => {
    //     const token = localStorage.getItem(process.env.REACT_APP_USER_TOKEN);
    //     if (!token) {
    //         return;
    //     }

    //     event.preventDefault();
    //     client
    //       .get('/shop')
    //       .then(res => console.log("data", res))
    //       .then( res => setMyShops(res.data.myShops))
    
    //       .catch(err => {
    //         console.error(err.response);
    //       });
    // }

    // const updateShopArray = async => {
    //     const returnedNewShop = addShop()

    //      setMyShops([
    //                 ...myShops,
    //                 returnedNewShop,
    //                 ]) 
    // }

    const addItem = async event => {
        const token = localStorage.getItem(process.env.REACT_APP_USER_TOKEN);
        if (!token) {
            return;
        }

        event.preventDefault();
        client
          .post('/item', newItem)
        //   .then( res => setReturnedNewShop(res.data.data))
          .then(
                setMyItems([
                    ...myItems,
                    newItem,
                ])   
          )
          .then(() => setShowAddItemModal(false))

    
          .catch(err => {
            console.error(err.response);
          });
    };
    
    const handleItemChange = event => {
        event.preventDefault();
        const { value, name } = event.target;

        setNewItem({
            ...newItem,
            [name]: value,
        });
    };

    const addShop = async event => {
        const token = localStorage.getItem(process.env.REACT_APP_USER_TOKEN);
        if (!token) {
            return;
        }

        event.preventDefault();
        client
          .post('/shop', newShop)
        //   .then( res => setReturnedNewShop(res.data.data))
          .then(
                setMyShops([
                    ...myShops,
                    newShop,
                ])   
          )
          .then(() => setShowAddShopModal(false))

    
          .catch(err => {
            console.error(err.response);
          });
    };
    
    const handleShopChange = event => {
        event.preventDefault();
        const { value, name } = event.target;

        setNewShop({
            ...newShop,
            [name]: value,
        });
    };

  return (
    <main className='home-main'>
        <div className='home-shops'>
            <div className='home-main-h2'>
                <h2>My Shops</h2>
                <AddBoxOutlined onClick={() => setShowAddShopModal(true)} className="hover"/>
            </div>
            <AddShop showAddShopModal={showAddShopModal} setShowAddShopModal={setShowAddShopModal} handleChange={handleShopChange} handleSubmit={addShop}/>
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
            <div className='home-main-h2'>
                <h2>My Items</h2>
                <AddBoxOutlined onClick={() => setShowAddItemModal(true)} className="hover"/>
            </div>
            <AddItem showAddItemModal={showAddItemModal} setShowAddItemModal={setShowAddItemModal} handleChange={handleItemChange} handleSubmit={addItem}/>
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