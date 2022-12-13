import React, { useState } from 'react';
import {AddNote} from "./AddNote";
import Note from './NoteCard';

import { EditProfile } from "./Popup";


export default function Profile(props) {
    const userProfile = props.userProfile;

    const [changeInfo, setChangeInfo] = useState(false);

    const [noteObj,setNoteObj] = useState({title:'title', content:'content'});
    const [allNotes, setAllNotes] = useState(props.noteData);
    const newNote = (formObj) => {
        setNoteObj(formObj);
        let newNotes = [...allNotes, formObj];
        setAllNotes(newNotes);
    }

    // const addToAllNotes = (formObj) => {
    //     let newNotes = [...allNotes, formObj];
    //     setAllNotes(newNotes);
    // }

    // Your Notes component (3rd column of the page)
    function YourNotes(props) {
        const noteDataArr = allNotes.map((note) => {
            return (
                <Note title = {note.title} content = {note.content} key = {note.title}/>
            );
        });

        return (
            <div className="col-sm-12 col-lg-4 card-col">
                <div className="card my-2 p-3 rounded-0">
                    <div className="card-body">
                        <h2>Your Notes</h2>
                        <div className="container">
                            {noteDataArr}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    

    return (
        <div className='react-body'>


            <div className="mx-5 mb-5">
                <div className="container-fluid mt-4">
                    <div className="row">
                    <div className="col-sm-12 col-lg-4 card-col">
                        <div className="card my-2 p-3 rounded-0">
                            <div className="card-body">

                            

                                <h2 className="personalPicture">Personal Info <EditProfile show = {changeInfo} onHide = {() => setChangeInfo(false)} 
                                userProfile = {props.userProfile}/></h2>
                                <img className="avatar my-3" label="avatar" src="img/beaver.jpg" alt="your user avatar" />
                                <dl className="my-2">
                                    <div className="row-2 d-flex row mb-3">
                                        <dt className="col-4">
                                            Name
                                        </dt>
                                        <dd className="col">
                                            <p>{userProfile.userName}</p>
                                        </dd>
                                    </div>

                                    <div className="row-2 d-flex row mb-3">
                                        <dt className="col-4">
                                            Language
                                        </dt>
                                        <dd className="col">
                                            <p>{userProfile.userLang}</p>
                                        </dd>
                                    </div>

                                    <div className="row-2 d-flex row mb-3">
                                        <dt className="col-4">
                                            Places
                                        </dt>
                                        <dd className="col">
                                            <p>{userProfile.userPlaces}</p>
                                        </dd>
                                    </div>

                                    <div className="row-2 d-flex row mb-3">
                                        <dt className="col-4">
                                            Food
                                        </dt>
                                        <dd className="col">
                                            <p>{userProfile.userFood}</p>
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>

                    <AddNote newNote={newNote}/>
                    <YourNotes />
                    
            </div>
            </div>
            

            </div>
        </div>
    );
}