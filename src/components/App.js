import React, { useState } from 'react';
import Navbar, {navBot} from './Navbar.js';
import { Routes, Route } from 'react-router-dom';
import Home from './Home.js';
import Plan from './Plan.js';
import Profile from './Profile.js';
import Footer from './Footer.js';
import POST_DATA from '../data/postData.json';
import NOTE_DATA from '../data/noteData.json';
import {getDatabase,ref,set as firebaseSet} from 'firebase/database';

export default function App(props) {
    const db = getDatabase();
    const oneEvent = ref(db,'Event1');
    console.log(oneEvent);
    firebaseSet(oneEvent,POST_DATA);








    const [postData, setPostData] = useState(POST_DATA);
    function evtBtnCallbk() {
        const postDataCopy = [...postData];
        setPostData(postDataCopy);
    }

    return (
        <div>
            <Navbar />
            <Routes>
                <Route index element={<Home postData={postData} evtBtnCallbk={evtBtnCallbk} /> }/>
                <Route path='/home' element={<Home postData={postData} evtBtnCallbk={evtBtnCallbk} /> }/>
                <Route path='/plan' element={<Plan />}/>
                <Route path='/profile' element={<Profile />}/>
            </Routes>
            <Footer />
        </div>
    );
}