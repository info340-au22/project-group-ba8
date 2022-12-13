import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export function EditProfile(props) {
  const userProfile = props.userProfile;

  const [show, setShow] = useState(false);
  const [nameInput, setNameInput] = useState('');
  const [langInput, setLangInput] = useState('');
  const [placesInput, setPlacesInput] = useState('');
  const [foodInput, setFoodInput] = useState('');

  const handleClose = () => {
    setNameInput('');
    setLangInput('');
    setPlacesInput('');
    setFoodInput('');
    setShow(false)
  }
  const handleShow = () => setShow(true);

  function handleNameInput(evt) {
    setNameInput(evt.target.value);
  }
  function handleLangInput(evt) {
    setLangInput(evt.target.value);
  }
  function handlePlacesInput(evt) {
    setPlacesInput(evt.target.value);
  }
  function handleFoodInput(evt) {
    setFoodInput(evt.target.value);
  }

  function handleSubmit() {
    if (nameInput) {
      userProfile.changeUserName(nameInput);
    }
    if (langInput) {
      userProfile.changeUserLang(langInput);
    }
    if (placesInput) {
      userProfile.changeUserPlaces(placesInput);
    }
    if (foodInput) {
      userProfile.changeUserFood(foodInput);
    }
    setNameInput('');
    setLangInput('');
    setPlacesInput('');
    setFoodInput('');
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
          <form>
            <label htmlFor='nameInput'>Name</label>
            <input type="text" className='form-control' id='nameInput' placeholder='Type your new name' value={nameInput} onChange={handleNameInput}/>
            <label htmlFor='langInput'>Language</label>
            <input type="text" className='form-control' id='langInput' placeholder='Type your languages' value={langInput} onChange={handleLangInput}/>
            <label htmlFor='placesInput'>Places</label>
            <input type="text" className='form-control' id='placesInput' placeholder='Type your favorite places' value={placesInput} onChange={handlePlacesInput}/>
            <label htmlFor='foodInput'>Name</label>
            <input type="text" className='form-control' id='foodInput' placeholder='Type your favorite food' value={foodInput} onChange={handleFoodInput}/>
          </form>
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
