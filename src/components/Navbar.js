import React from "react"; //import React library
import {Link} from 'react-router-dom'


export default function Navbar(props) {

    return (
        <nav className="navbar navbar-expand bg-info d-lg-block" id='navbar'>
            <div className="container-fluid">
                <ul className="navbar-nav p-1">
                    <li className = "d-none d-sm-block">
                       <img className="navicon" src="img/otterlarger.png" />
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/home">
                           <p className = "navtext">Events Map</p> 
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/plan">
                        <p className = "navtext">Plan Events</p> 
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/profile">
                        <p className = "navtext">My Profile</p> 
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>)
}
