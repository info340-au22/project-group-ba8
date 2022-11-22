
import React from 'react'; //import React library

export function Navbar(props) {
    return (
        <nav className="navbar navbar-expand bg-info d-none d-lg-block" id='navbar'>
            <div className="container-fluid">
                <ul className="navbar-nav p-2">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="index.html">
                            Events Map
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="edit.html">
                            Create Events
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="profile.html">
                            My Profile
                        </a>
                    </li>
                    
                </ul>
            </div>
        </nav>
    )

}




export function Hide(props) {



}

