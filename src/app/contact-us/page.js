"use client"
import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Apps() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div>
      <h2 className='text-center'>Registered address</h2>
       <h3 className='text-center'>Downtown Infra Group Mall
    Plot.No.17 to 20, Sy.No.166/P,<br/>
    Near Joshi Wadewale,In front of Union bank of India,<br/>
    Shroff Road Baner, Pune,Maharashtra<br/>
    Zip Code: 411045, IN</h3>
    </div>
      <div className='d-flex justify-content-center'>
      <Button variant="info" onClick={handleShow}>
        Helpline Number
      </Button>{' '}
      </div>
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>9933669966</Modal.Title>
        </Modal.Header>
        <Modal.Body>Thank You for contact with us </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Apps;