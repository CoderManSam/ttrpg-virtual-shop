// import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function AddShop(props) {
//   const [show, setShow] = useState(false);

  const handleClose = () => props.setShowAddShopModal(false);
//   const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={props.showAddShopModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a shop</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={props.handleSubmit}>
                <div >
                    <label >Shop name</label>
                    <input required name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" onChange={props.handleChange}/>
                </div>
                <div >
                    <label >Shop image url</label>
                    <input required name="image" className="form-control" id="exampleInputPassword1" placeholder="Image url" onChange={props.handleChange}/>
                </div>
                {/* <button type="submit" className="btn btn-primary">Submit</button> */}
                <Button type="submit" className="btn btn-primary"   >
                    Submit
                </Button>
            </Form>
        </Modal.Body>
        {/* <Modal.Footer> */}
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          {/* <Button type="submit" variant="primary" onClick={props.handleSubmit} >
            Save Changes
          </Button> */}
        {/* </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default AddShop