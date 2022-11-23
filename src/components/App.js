import React, { useState } from 'react';
import Navbar from './Navbar.js';
import Viewport from './Viewport.js';

export default function App(props) {

    const [currentTab, setCurrentTab] = useState('home');
    function changeTabCallbk(tabName) {
        setCurrentTab(tabName);
    }

    return (
        <div>
            <Navbar changeTabCallbk={changeTabCallbk} />
            <Viewport displayTab={currentTab} />
        </div>
    );
}