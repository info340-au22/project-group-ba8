import React, { useState } from 'react';
import Home from './Home';
import Plan from './Plan';
import Profile from './Profile';

export default function Viewport(props) {
    const displayTab = props.displayTab;
    console.log("the displayed tab is ")
    console.log(displayTab)
    if (displayTab === 'home') {
        return <Home />;
    } else if (displayTab === 'plan') {
        return <Plan />;
    } else {
        return <Profile />;
    }
}