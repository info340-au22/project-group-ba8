import React, { useEffect, useState } from 'react';
import Navbar, { navBot } from './Navbar.js';
import { Routes, Route } from 'react-router-dom';
import Home from './Home.js';
import Plan from './Plan.js';
import Profile from './Profile.js';
import Footer from './Footer.js';
import POST_DATA from '../data/postData.json';
import NOTE_DATA from '../data/noteData.json';
import { getDatabase, onValue, ref, set as firebaseSet } from 'firebase/database';

export default function App(props) {

    
    /*
    console.log(events);
    firebaseSet(events,POST_DATA);
*/
    const [postData, setPostData] = useState(POST_DATA);
    function evtBtnCallbk() {
        const postDataCopy = [...postData];
        setPostData(postDataCopy);
    }

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
                <Route index element={<Home postData={postData} evtBtnCallbk={evtBtnCallbk} />} />
                <Route path='/home' element={<Home postData={postData} evtBtnCallbk={evtBtnCallbk} />} />
                <Route path='/plan' element={<Plan />} />
                <Route path='/profile' element={<Profile />} />
            </Routes>
            <Footer />
        </div>
    );
}