// import React, { useState } from 'react';
import client from '../../../utils/client.js';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ItemInfoModal({item, show, setShow, playerView, myItems, setMyItems, shopId}) {

  const handleClose = () => setShow(false);

  const handleClick =() => {
    const token = localStorage.getItem(process.env.REACT_APP_USER_TOKEN);
    if (!token) {
        return;
    }

    client
    .patch(`/item/${item.id}`)
    .catch(err => {
      console.error(err.response);
    });

    // const ids = {
    //     shopId: shopId,
    //     itemId: item.id
    // }

    const itemLocation = item.locations.find((location) => location.shopId === shopId)

    // console.log("itemLocation", itemLocation)

    client
    // .delete(`/location`, ids)
    .delete(`/location/${itemLocation.id}`)
    .catch(err => {
      console.error(err.response);
    });

    const filteredMyItems = myItems.filter((element) => element.id !== item.id) 

    setMyItems(filteredMyItems)

    setShow(false)
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{item.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img src={item.image} alt={`${item.name} icon`} className="itemInfo-icon" ></img>
            <p>{item.description}</p>
            <p>{item.cost}G</p>
            {/* <Form onSubmit={props.handleSubmit}>
                <div >
                    <label >Item name</label>
                    <input required name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" onChange={props.handleChange}/>
                </div>
                <div >
                    <label >Item description</label>
                    <input required name="description" className="form-control" id="exampleInputPassword1" placeholder="Description" onChange={props.handleChange}/>
                </div>
                <div >
                    <label >Item cost</label>
                    <input required name="cost" className="form-control" id="exampleInputPassword1" placeholder="Cost" onChange={props.handleChange}/>
                </div>
                <div >
                    <label >Item image url</label>
                    <input required name="image" className="form-control" id="exampleInputPassword1" placeholder="Image url" onChange={props.handleChange}/>
                </div>
                <Button type="submit" className="btn btn-primary"   >
                    Submit
                </Button>
            </Form> */}
        </Modal.Body>
        <Modal.Footer>
            {/* <p>{item.cost}G</p> */}
            {playerView ?
                <Button className="btn btn-primary"  onClick={() => handleClick()} >
                    Buy Item
                </Button>
                :
                <div></div>
            }
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ItemInfoModal