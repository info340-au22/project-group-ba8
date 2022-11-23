import React, { useState } from 'react';
import Navbar, {navBot} from './Navbar.js';
import { Routes, Route } from 'react-router-dom';
import Home from './Home.js';
import Plan from './Plan.js';
import Profile from './Profile.js';
import Footer from './Footer.js';
import POST_DATA from '../data/postData.json';

export default function App(props) {

    return (
        <div>
            <Navbar />
            <Routes>
                <Route index element={<Home postData={POST_DATA} /> }/>
                <Route path='/home' element={<Home postData={POST_DATA} /> }/>
                <Route path='/plan' element={<Plan />}/>
                <Route path='/profile' element={<Profile />}/>
            </Routes>
            <Footer />
        </div>
    );
}