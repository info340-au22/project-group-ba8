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