import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export function EditProfile(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let newName = '';
  let newLanguage = '';
  let newPlace = '';
  let newFood = '';
  function handleSubmit() {
    setShow(false);
    // props.handleNameInput(newName);
    // props.handleLangInput(newLanguage);
    // props.handlePlacesInput(newPlace);
    // props.handleFoodInput(newFood);
    // let newName = '';
    // let newLanguage = '';
    // let newPlace = '';
    // let newFood = '';
  }

  return (
    <>
      <Button variant="outline" onClick={handleShow}>
        <i className="material-icons">edit</i>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Personal Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="email"
                placeholder="Type your name"
                //value = {newName}
                //onChange={props.handleNameInput(this)}
                autoFocus
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Language</Form.Label>
              <Form.Control as="textarea" rows={1} 
              placeholder="Language(s) that you speak"
              //value = {newName}
              />
              
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Places</Form.Label>
              <Form.Control
                placeholder="Places you like"
                //value = {newPlace}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Food</Form.Label>
              <Form.Control
                placeholder="Food that your like"
                //value = {newFood}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
