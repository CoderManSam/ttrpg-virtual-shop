// import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function AddShop(props) {

  const handleClose = () => props.setShowAddItemModal(false);

  return (
    <>
      <Modal show={props.showAddItemModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add an item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={props.handleSubmit}>
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
            </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddShop