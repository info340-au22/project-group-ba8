import React, { useEffect, useState } from 'react';
import Navbar from './Navbar.js';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { Routes, Route, Outlet, Navigate, useNavigate } from 'react-router-dom';
import Home from './Home.js';
import Plan from './Plan.js';
import Profile from './Profile.js';
import Footer from './Footer.js';
import SignInPage from './SigninPage.js';
import { getDatabase, onValue, ref } from 'firebase/database';

export default function App(props) {

    const [currentUser, setCurrentUser] = useState({"uid": "Log Out"});
    const navigateTo = useNavigate();

    const [postData, setPostData] = useState([]);
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
                    <Route index element={<Home currentUser={currentUser} postData={postData} evtBtnCallbk={evtBtnCallbk} />} />
                    <Route path='home' element={<Home currentUser={currentUser} postData={postData} evtBtnCallbk={evtBtnCallbk} />} />
                    <Route path='plan' element={<Plan />} />
                    <Route path='profile' element={<Profile currentUser={currentUser} signOutCallbk={handleSignOut}/>} />        
                </Route>
            </Routes>
            <Footer />
        </div>
    );
}

function ProtectedPage(props) {
    if(props.currentUser.uid === "Log Out") { 
      return <Navigate to="/signin" />
    }
    else { 
      return <Outlet />
    }
  }