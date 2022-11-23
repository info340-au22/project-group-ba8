import React from "react"; //import React library
import {Link} from 'react-router-dom'


export default function Navbar(props) {

    return (
        <nav className="navbar navbar-expand bg-info d-none d-lg-block" id='navbar'>
            <div className="container-fluid">
                <ul className="navbar-nav p-1">
                    <li >
                       <img className="navicon" src="img/otter.png" />
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/home">
                           <p className = "navtext">Events Map</p> 
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/plan">
<<<<<<< HEAD
                        <p className = "navtext">  Create Events</p> 
=======
                            Create Events
>>>>>>> fd8ea09242a9caa69fa3f68563298c05b0f4980f
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/profile">
                        <p className = "navtext">  My Profile</p> 
                        </Link>
                    </li>
                    
                </ul>
            </div>
        </nav>)
}
export function navBot(props)
{
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
