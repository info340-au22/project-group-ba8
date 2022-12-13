import React, { useEffect, useState } from 'react';
import Navbar, { navBot } from './Navbar.js';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Routes, Route, Outlet, Navigate, useNavigate } from 'react-router-dom';
import Home from './Home.js';
import Plan from './Plan.js';
import Profile from './Profile.js';
import Footer from './Footer.js';
import SignInPage from './SigninPage.js';
import POST_DATA from '../data/postData.json';
import NOTE_DATA from '../data/noteData.json';
import { getDatabase, onValue, ref, set as firebaseSet } from 'firebase/database';

export default function App(props) {

    const [currentUser, setCurrentUser] = useState({"userId": null, "userName": "Log Out"});
    const navigateTo = useNavigate();

    // user profile default info, with functions to set new ones
    const [userName, setUserName] = useState('Beaver B. Beaver');
    const [userLang, setUserLang] = useState('English, French, Beaverish');
    const [userPlaces, setUserPlaces] = useState('Rivers, Forests, Woodcraft Fairs');
    const [userFood, setUserFood] = useState('Flowers, Berries, Fish');
    function changeUserName(str) {
        setUserName(str);
    }
    function changeUserLang(str) {
        setUserLang(str);
    }
    function changeUserPlaces(str) {
        setUserPlaces(str);
    }
    function changeUserFood(str) {
        setUserFood(str);
    }
    const userProfile = {
        'userName': userName,
        'changeUserName': changeUserName,
        'namePlaceholder': "Type your new name",
        'userLang': userLang,
        'changeUserLang': changeUserLang,
        'langPlaceholder': "Type your languages",
        'userPlaces': userPlaces,
        'changeUserPlaces': changeUserPlaces,
        'placesPlaceholder': "Type your favortite places",
        'userFood': userFood,
        'changeUserFood': changeUserFood,
        'foodPlaceholder': "Type your favortite foods"
    };
    
    /*
    console.log(events);
    firebaseSet(events,POST_DATA);
*/
    const [postData, setPostData] = useState(POST_DATA);
    function evtBtnCallbk() {
        const postDataCopy = [...postData];
        setPostData(postDataCopy);
    }

    useEffect(() =>{
        const auth = getAuth();
        onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) {
                setCurrentUser(firebaseUser);
            } else {
                console.log("logged out");
            }
        })
    })

    


    useEffect(() => {
        const db = getDatabase();
        const events = ref(db, 'Events');
        onValue(events, (snapshot) => {
            const changedValue = snapshot.val();
            
            const objkeys = Object.keys(changedValue);
            const changedEvents = objkeys.map((keyString) =>{
                const obj = changedValue[keyString];
                obj.id= keyString;
                return obj;
            })
            setPostData(changedEvents);
        })
    },[]);

    return (
        <div className='the-app'>
            <Navbar />
            <Routes>
                <Route path="signin" element={<SignInPage />} />
                <Route element={<ProtectedPage currentUser={currentUser} />}>
                    <Route index element={<Home postData={postData} evtBtnCallbk={evtBtnCallbk} />} />
                    <Route path='home' element={<Home postData={postData} evtBtnCallbk={evtBtnCallbk} />} />
                    <Route path='plan' element={<Plan />} />
                    <Route path='profile' element={<Profile userProfile={userProfile} noteData={NOTE_DATA} />} />        
                </Route>
            </Routes>
            <Footer />
        </div>
    );
}

function ProtectedPage(props) {
    if(props.currentUser.userId === null) { 
      return <Navigate to="/signin" />
    }
    else { 
      return <Outlet />
    }
  }