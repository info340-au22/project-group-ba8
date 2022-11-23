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
