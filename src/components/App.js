import React, { useEffect, useState } from 'react';
import Navbar from './Navbar.js';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
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

    const [currentUser, setCurrentUser] = useState({"uid": "Log Out"});
    const navigateTo = useNavigate();

    // user profile default info, with functions to set new ones
    const [userName, setUserName] =  useState('Beaver B. Beaver');
    const [userLang, setUserLang] = useState('English, French, Beaverish');
    const [userPlaces, setUserPlaces] = useState('Rivers, Forests, Woodcraft Fairs');
    const [userFood, setUserFood] = useState('Flowers, Berries, Fish');

    // useEffect(() => {
    //     const db = getDatabase();
    //     const data = ref(db, 'userData/'+currentUser.uid);
    //     onValue(events, (snapshot) => {
    //         const changedValue = snapshot.val();
            
    //         const objkeys = Object.keys(changedValue);
    //         const changedEvents = objkeys.map((keyString) =>{
    //             const obj = changedValue[keyString];
    //             obj.id= keyString;
    //             return obj;
    //         })
    //         setPostData(changedEvents);
    //     })
    // },[]);

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

    const [postData, setPostData] = useState(POST_DATA);
    function evtBtnCallbk() {
        const postDataCopy = [...postData];
        setPostData(postDataCopy);
    }

    const handleSignOut = (event) => {
        signOut(getAuth());
        setCurrentUser({"uid": "Log Out"});
      }  

    useEffect(() =>{
        const auth = getAuth();
        onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) {
                setCurrentUser(firebaseUser);
                navigateTo('home');
            }
        })
    },[]);

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
                    <Route path='home' element={<Home currentUser={currentUser} postData={postData} evtBtnCallbk={evtBtnCallbk} />} />
                    <Route path='plan' element={<Plan currentUser={currentUser}/>} />
                    <Route path='profile' element={<Profile currentUser={currentUser} userProfile={userProfile} noteData={NOTE_DATA} outback={handleSignOut}/>} />        
                </Route>
            </Routes>
            <Footer />
        </div>
    );
}

function ProtectedPage(props) {
    console.log(props.currentUser.uid);
    if(props.currentUser.uid === "Log Out") { 
      return <Navigate to="/signin" />
    }
    else { 
      return <Outlet />
    }
  }