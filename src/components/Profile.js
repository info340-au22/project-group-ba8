import React, { useState, useEffect } from 'react';
import {AddNote} from "./AddNote";
import Note from './NoteCard';
import { getDatabase, ref, onValue, set as firebaseSet } from 'firebase/database';
import { EditProfile } from "./Popup";


export default function Profile(props) {
    const currentUser = props.currentUser;
    const [changeInfo, setChangeInfo] = useState(false);
    const [noteData, setNoteData] = useState([]);
    const [noteObj,setNoteObj] = useState({title:'title', content:'content'});
    
    const [userName, setUserName] =  useState('Beaver B. Beaver');
    const [userLang, setUserLang] = useState('English, French, Beaverish');
    const [userPlaces, setUserPlaces] = useState('Rivers, Forests, Woodcraft Fairs');
    const [userFood, setUserFood] = useState('Flowers, Berries, Fish');

    function changeUserName(str) {
        setUserName(str);
        const userDbRef =ref(getDatabase(), "userData/"+currentUser.uid+"/profile/name");
        firebaseSet(userDbRef,str);
    }
    function changeUserLang(str) {
        setUserLang(str);
        const userDbRef =ref(getDatabase(), "userData/"+currentUser.uid+"/profile/lang");
        firebaseSet(userDbRef,str);
    }
    function changeUserPlaces(str) {
        setUserPlaces(str);
        const userDbRef =ref(getDatabase(), "userData/"+currentUser.uid+"/profile/places");
        firebaseSet(userDbRef,str);
    }
    function changeUserFood(str) {
        setUserFood(str);
        const userDbRef =ref(getDatabase(), "userData/"+currentUser.uid+"/profile/food");
        firebaseSet(userDbRef,str);
    }
    const userProfile = {
        'userName': userName,
        'changeUserName': changeUserName,
        'userLang': userLang,
        'changeUserLang': changeUserLang,
        'userPlaces': userPlaces,
        'changeUserPlaces': changeUserPlaces,
        'userFood': userFood,
        'changeUserFood': changeUserFood,
    };

    useEffect(() => {
        const db = getDatabase();
        const profile = ref(db, 'userData/'+currentUser.uid+'/profile');
        onValue(profile, (snapshot) => {
            const changedValue = snapshot.val();
            if (changedValue.name) {
                setUserName(changedValue.name);
            }
            if (changedValue.lang) {
                setUserLang(changedValue.lang);
            }
            if (changedValue.places) {
                setUserPlaces(changedValue.places);
            }
            if (changedValue.food) {
                setUserFood(changedValue.food);
            }    
        })
    },[]);

    useEffect(() => {
        const db = getDatabase();
        const notes = ref(db, "userData/"+currentUser.uid+"/notes");
        onValue(notes, (snapshot) => {
            const changedValue = snapshot.val();
            
            const objkeys = Object.keys(changedValue);
            const changedNotes = objkeys.map((keyString) =>{
                const obj = changedValue[keyString];
                obj.id= keyString;
                return obj;
            })
            setNoteData(changedNotes);
        })
    },[]);

    const newNote = (formObj) => {
        setNoteObj(formObj);
        let newNotes = [...noteData, formObj];
        setNoteData(newNotes);

        const userDbRef =ref(getDatabase(), "userData/"+currentUser.uid+"/notes");
        firebaseSet(userDbRef,newNotes);

    }

    function YourNotes(props) {
        const noteDataArr = noteData.map((note) => {
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
                                <h2 className="personalPicture">Personal Info <EditProfile currentUser={props.currentUser} show = {changeInfo} onHide = {() => setChangeInfo(false)} 
                                userProfile = {userProfile}/></h2>
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
            
            <div className="d-grid gap-2 col-6 mx-auto mt-4 mb-4">
                <button className="btn btn-danger ms-2" onClick={props.outback}>Sign Out</button>
            </div>
            </div>
        </div>
    );
}