import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function InvitePlayersModal({ handleSubmit, handleChange, showModal, setShowModal}) {
    // const [counter, setCounter] = useState(["I"])

    // const handleClick = () => {
    //     const newCounter = counter

    //     newCounter.push("I")

    //     setCounter(newCounter)

    //     setCounter(newCounter);
    //   };
//   const [show, setShow] = useState(false);

  const handleClose = () => setShowModal(false);
//   const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Invite Players</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleSubmit}>
                {/* {counter.map((element, index) => ( */}
                    <div >
                        <label >Username</label>
                        <input name="username" className="form-control" placeholder="Username" onChange={handleChange}/>
                        <p><small>Leave a space between username's to add multiple</small></p>
                    </div>
                {/* ))} */}
                {/* <Button className="btn btn-primary" onClick={() => handleClick()}>
                    Add another username
                </Button> */}
                <Button className="btn btn-primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default InvitePlayersModal