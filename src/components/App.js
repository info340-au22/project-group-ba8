import React, { useState } from 'react';
import Navbar from './Navbar.js';
import { Routes, Route } from 'react-router-dom';
import Home from './Home.js';
import Plan from './Plan.js';
import Profile from './Profile.js';

export default function App(props) {

    const [currentTab, setCurrentTab] = useState('home');
    function changeTabCallbk(tabName) {
        setCurrentTab(tabName);
    }

    return (
        <div>
            <Navbar changeTabCallbk={changeTabCallbk} />
            <Routes>
                <Route index element={<Home /> }/>
                <Route path='/home' element={<Home /> }/>
                <Route path='/plan' element={<Plan />}/>
                <Route path='/profile' element={<Profile />}/>
            </Routes>

        </div>
    );
}