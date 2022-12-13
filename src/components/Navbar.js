import React from "react"; //import React library
import {Link} from 'react-router-dom'


export default function Navbar(props) {

    return (
        <nav className="navbar navbar-expand bg-info d-lg-block" id='navbar'>
            <div className="container-fluid">
                <ul className="navbar-nav p-1">
                    <li>
                       <img className="app-logo navicon" src="img/otterlarger.png" />
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/home">
                           <p className = "navtext"><i className="material-icons">receipt_long</i><span className="nav-label">Events Map</span></p>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/plan">
                        <p className = "navtext"><i className="material-icons">add_box</i><span className="nav-label">Plan Events</span></p>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/profile">
                        <p className = "navtext"><i className="material-icons">account_circle</i><span className="nav-label">My Profile</span></p> 
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>)
}
export function navBot(props) {
   return (
    <nav className="nav-bar bg-dark fixed-bottom d-lg-none p-4 border-top-white">
        <ul className="nav justify-content-evenly">
            <li className="nav-item">
                <Link to ="/plan">
                    <i aria-label="add event"><img className="navicon" src="img/addeventicon.png" /></i>
                </Link>
            </li>
            <li className="nav-item">
                <Link  aria-current="page" to="/home">
                    <i aria-label="homepage"><img className="navicon" src="img/homeicon.png" /></i>
                </Link>
            </li>
            <li className="nav-item">
                <Link  to="/profile">
                    <i aria-label="my profile"><img className="navicon" src="img/profileicon.png" /></i>
                </Link>
            </li>
        </ul>
    </nav>
   )
}
