import React, { useState } from 'react';
import {AddNote} from "./AddNote"

export default function Profile(props) {
    const [userName, setUserName] = useState('Beaver B. Beaver');
    const [userNameInput, setUserNameInput] = useState('');
    const [userLang, setUserLang] = useState('English, French, Beaverish');
    const [userLangInput, setUserLangInput] = useState('');
    const [userPlaces, setUserPlaces] = useState('Rivers, Forests, Woodcraft Fairs');
    const [userPlacesInput, setUserPlacesInput] = useState('');
    const [userFood, setUserFood] = useState('Flowers, Berries, Fish');
    const [userFoodInput, setUserFoodInput] = useState('');
    const [noteObj,setNoteObj] = useState({title:'title', content:'content'});
    const cur = (formObj) => {
        setNoteObj(formObj);
    }

    function handleNameInput(evt) {
        setUserNameInput(evt.target.value);
    }
    function handleNameChange(evt) {
        setUserName(userNameInput);
        setUserNameInput('');
    }

    function handleLangInput(evt) {
        setUserLangInput(evt.target.value);
    }
    function handleLangChange(evt) {
        setUserLang(userLangInput);
        setUserLangInput('');
    }

    function handlePlacesInput(evt) {
        setUserPlacesInput(evt.target.value);
    }
    function handlePlacesChange(evt) {
        setUserPlaces(userPlacesInput);
        setUserPlacesInput('');
    }

    function handleFoodInput(evt) {
        setUserFoodInput(evt.target.value);
    }
    function handleFoodChange(evt) {
        setUserFood(userFoodInput);
        setUserFoodInput('');
    }

    return (
        <div className='react-body'>


            <div className="mx-5 mb-5">
                <div className="container-fluid mt-4">
                    <div className="row">
                    <div className="col-sm-12 col-lg-4 card-col">
                        <div className="card my-2 p-3 rounded-0">
                            <div className="card-body">
                                <h2 className="personalPicture">Personal Info</h2>
                                <img className="avatar my-3" label="avatar" src="img/beaver.jpg" alt="your user avatar" />
                                <dl className="my-2">

                                    <div className="row-2 d-flex row mb-3">
                                        <dt className="col-4">
                                            Name
                                        </dt>
                                        <dd className="col">
                                            <p>{userName}</p>
                                        </dd>
                                        <div className='col-4'>
                                            <button type="button" className='btn btn-outline-dark' data-bs-toggle="collapse" data-bs-target="#editName" aria-expanded="false" aria-controls="editName"><i class="material-icons">edit</i></button>
                                        </div>
                                        <div className="collapse" id="editName">
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder="Your new name" aria-label="Your new name" aria-describedby="basic-addon2" value={userNameInput} onChange={handleNameInput} />
                                                <div class="input-group-append">
                                                    <button className="btn btn-dark" type="button" onClick={handleNameChange} data-bs-toggle="collapse" data-bs-target="#editName"><i class="material-icons">done</i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row-2 d-flex row mb-3">
                                        <dt className="col-4">
                                            Language
                                        </dt>
                                        <dd className="col">
                                            <p>{userLang}</p>
                                        </dd>
                                        <div className='col-4'>
                                            <button type="button" className='btn btn-outline-dark' data-bs-toggle="collapse" data-bs-target="#editLang" aria-expanded="false" aria-controls="editLang"><i class="material-icons">edit</i></button>
                                        </div>
                                        <div className="collapse" id="editLang">
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder="Type your languages" aria-label="Type your languages" aria-describedby="basic-addon2" value={userLangInput} onChange={handleLangInput} />
                                                <div class="input-group-append">
                                                    <button className="btn btn-dark" type="button" onClick={handleLangChange} data-bs-toggle="collapse" data-bs-target="#editLang"><i class="material-icons">done</i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row-2 d-flex row mb-3">
                                        <dt className="col-4">
                                            Places
                                        </dt>
                                        <dd className="col">
                                            <p>{userPlaces}</p>
                                        </dd>
                                        <div className='col-4'>
                                            <button type="button" className='btn btn-outline-dark' data-bs-toggle="collapse" data-bs-target="#editPlaces" aria-expanded="false" aria-controls="editPlaces"><i class="material-icons">edit</i></button>
                                        </div>
                                        <div className="collapse" id="editPlaces">
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder="Type your favortite places" aria-label="Type your favortite places" aria-describedby="basic-addon2" value={userPlacesInput} onChange={handlePlacesInput} />
                                                <div class="input-group-append">
                                                    <button className="btn btn-dark" type="button" onClick={handlePlacesChange} data-bs-toggle="collapse" data-bs-target="#editPlaces"><i class="material-icons">done</i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row-2 d-flex row mb-3">
                                        <dt className="col-4">
                                            Food
                                        </dt>
                                        <dd className="col">
                                            <p>{userFood}</p>
                                        </dd>
                                        <div className='col-4'>
                                            <button type="button" className='btn btn-outline-dark' data-bs-toggle="collapse" data-bs-target="#editFood" aria-expanded="false" aria-controls="editFood"><i class="material-icons">edit</i></button>
                                        </div>
                                        <div className="collapse" id="editFood">
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder="Type your favortite foods" aria-label="Type your favortite foods" aria-describedby="basic-addon2" value={userFoodInput} onChange={handleFoodInput} />
                                                <div class="input-group-append">
                                                    <button className="btn btn-dark" type="button" onClick={handleFoodChange} data-bs-toggle="collapse" data-bs-target="#editFood"><i class="material-icons">done</i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>

                    <AddNote getFormCallback={cur}/>
                    <div className="col-sm-12 col-lg-4 card-col">
                        <div className="card my-2 p-3 rounded-0">
                            <div className="card-body">
                                <h2>Notes</h2>
                                <div className="container">
        
                                    <div className="row">
                                        <div className="card my-2 p-3 rounded-0">
                                            <h3>Things before Alaska</h3>
                                            <p>A good fur coat, Alaska local sim card, Power bank ,Visit grandparents before leaving</p>
                                        </div>
                                    </div>
        
                                    <div className="row">
                                        <div className="card my-2 p-3 rounded-0">
                                            <h3>Marco</h3>
                                            <p>
                                                Marco said we should go to Mt. Rainier next weekend. Remember to ask uncle Bill to drive us there.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
            </div>
            </div>
            

            </div>
        </div>
    );
}