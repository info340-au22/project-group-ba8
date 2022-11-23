import React from "react"; //import React library

const tabs = ["Home", "Plan", "Profile"];

export default function Navbar(props) {

    function handleClick(tabName) {
        props.changeTabCallbk(tabName.toLowerCase());
    }

    const navItemsArr = tabs.map((tabName) => {
        return (
            <li className="nav-item" key={tabName.toLowerCase()}>
                <button className="nav-link btn rounded-0" onClick={handleClick}>
                    {tabName}
                </button>
            </li>
        );
    });

    return (
    <nav className="navbar navbar-expand bg-info d-none d-lg-block" id="navbar">
        <div className="container-fluid">
        <ul className="navbar-nav p-2">
            {navItemsArr}
        </ul>
        </div>
    </nav>
    );
}
export  function navBot(props)
{
   return (
    <nav className="nav-bar bg-dark fixed-bottom d-lg-none p-4 border-top-white">
        <ul className="nav justify-content-evenly">
            <li className="nav-item">
                <a  href="edit.html">
                    <i aria-label="add event"><img className="navicon" src="img/addeventicon.png" /></i>
                </a>
            </li>
            <li className="nav-item">
                <a  aria-current="page" href="index.html">
                    <i aria-label="homepage"><img className="navicon" src="img/homeicon.png" /></i>
                </a>
            </li>
            <li className="nav-item">
                <a  href="profile.html">
                    <i aria-label="my profile"><img className="navicon" src="img/profileicon.png" /></i>
                </a>
            </li>
        </ul>
    </nav>



   )
}