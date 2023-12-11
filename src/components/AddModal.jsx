import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";

function AddModal({show, handleClose, drName, handleAdd}) {
  const [name, setName]=useState("")
  const [date, setDate]=useState("")

  const handleSubmit=(e)=>{
    e.preventDefault();
    const newAppointment={
        id: new Date().getTime(),
        patient: name,
        day:date,
        consulted: false,
        doctor: drName,
    }
    handleAdd(newAppointment);
    handleClose()

  };

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment For {drName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
             <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter Name" required/>
        <Form.Text className="text-muted">
         
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="date">
        <Form.Label>date</Form.Label>
        <Form.Control onChange={(e)=>setDate(e.target.value)} type="date" placeholder="date" required/>
      </Form.Group>
     <div>
     <Button variant="success" type="submit" className='me-2'>
        Save
      </Button>
      <Button variant="danger" type='button' onClick={handleClose}>
            Close
          </Button>
     </div>
      
    </Form></Modal.Body>
        
      </Modal>
    </>
  );
}

export default AddModal;