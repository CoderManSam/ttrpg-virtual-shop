import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import client from '../../../utils/client.js';
import InvitePlayersModal from "./InvitePlayersModal.js";

function Header({username, shopName, newLocations, setNewLocations, dmView, shopId}) {
    const [showModal, setShowModal] = useState(false)
    const [newPlayers, setNewPlayers] = useState({})

    let navigate = useNavigate();
  
    const toHomepage = () => {
      navigate('../homepage', { replace: true });
    };

    const savePositions = () => {
        const token = localStorage.getItem(process.env.REACT_APP_USER_TOKEN);
        if (!token) {
            return;
        }

        client
          .patch(`/location`, newLocations)
        //   .then( res => setReturnedNewShop(res.data.data))
          .then(res =>
            setNewLocations([
                    ...res.data.data.locations
                ])   
          )
    
          .catch(err => {
            console.error(err.response);
          });
    }

    const handleSubmit = async event => {
        event.preventDefault();

        const players = await newPlayers.username.split(' ')

        client
          .patch(`/shop/${shopId}`, players)
          .then(() => setShowModal(false))
    
          .catch(err => {
            console.error(err.response);
          });
      };
    
      const handleChange = event => {
        event.preventDefault();
        const { value, name } = event.target;
    
        setNewPlayers({
          ...newPlayers,
            [name]: value
        })
      };

    return (
        <header className="header">
            <h2 className="header-logo">
                TTRPG <br></br>
                <span className="indent-1">Virtual <br></br></span>
                <span className="indent-2">Shop</span>
            </h2>
            <h1>{shopName}</h1>
            {dmView ?
                <h2 className="hover" onClick={() => setShowModal(true)}>Invite Players</h2>
                :
                <div></div>
            }
            {dmView ?
                <h2 className="hover" onClick={() => savePositions()}>Save item positions</h2>
                :
                <div></div>
            }
            <InvitePlayersModal showModal={showModal} setShowModal={setShowModal} handleChange={handleChange} handleSubmit={handleSubmit}/>
            {/* <Link className="header-username" to="/homepage">
                {username}
            </Link>  */}
            <h3 className="header-username hover" onClick={() => toHomepage()}>{username}</h3>
        </header>
    )
}

export default Header;
