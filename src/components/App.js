import React from 'react';
import { useState } from 'react';
import {Navbar} from './Navigation.js';
function App(props) {
//Just return a copy of old index.html. Need to divid it into several js files. index
  return (
  <body>
        <header>
            {Navbar({})}
        </header>
        <main>
            <div className="morning-event">
                <a href="#"><span className="material-icons md-36" aria-label="Home">location_on</span></a>
                <div className="col-xl-3 col-md-6 d-flex">
                    <div className="card-morning mb-4">
                        <div className="card-body">
                            <div className="col-sm-auto col-xl-12">
                                <img className="img pb-3 index-img" src="img/tea.jpeg" alt="dog park event" />
                            </div>
                            <div className="col-sm">
                                <h2 className="card-title">Morning Tea!</h2>
                                <p className="card-text">Enjoying traditional Cantonese morning tea with friends with all my deadlines cleared lol</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="afternoon-event">
                <a href="#"><span className="material-icons" aria-label="Home">location_on</span></a>
                <div className="col-xl-3 col-md-6 d-flex">
                    <div className="card-afternoon mb-4">
                        <div className="card-body">
                            <div className="col-sm-auto col-xl-12">
                                <img className="img pb-3 index-img" src="img/dogs.jpeg" alt="dog park event" />
                            </div>
                            <div className="col-sm">
                                <h2 className="card-title">Dog park time!</h2>
                                <p className="card-text">Taking Jax to his favorite dog park for a afternoon. This week has been a long week and finally I can have some time with him.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="night-event">
                <a href="#"><span className="material-icons" aria-label="Home">location_on</span></a>
                <div className="col-xl-3 col-md-6 d-flex">
                    <div className="card-night mb-4">
                        <div className="card-body">
                            <div className="col-sm-auto col-xl-12">
                                <img className="img pb-3 index-img" src="img/fireworks.jpg" alt="dog park event" />
                            </div>
                            <div className="col-sm">
                                <h2 className="card-title">fireworks!</h2>
                                <p className="card-text">Seeing pretty fireworks with my roommates. Remind them to wear masks, there would be a huge crowd.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <footer className="container-fluid bg-info sticky-bottom pb-5">
            <div className="row contacts">
                <h1>Contacts</h1>
    
                <div className="col-12 col-sm-6 col-lg-3">
                    <h2>Vince</h2>
                    <h3>Software Engineerer</h3>
                    <p>Email: <a href="mailto:dannyyue@uw.edu"><span className="material-icons"></span> qqian2@uw.edu</a></p>
                    <p>Phone: <a href="tel:555-123-4567"><span className="material-icons"></span> 206-227-3454</a></p>
                </div>
    
                <div className="col-12 col-sm-6 col-lg-3">
                    <h2>Danny</h2>
                    <h3>Software Engineerer</h3>
                    <p>Email: <a href="mailto:dannyyue@uw.edu"><span className="material-icons"></span> dannyyue@uw.edu</a></p>
                    <p>Phone: <a href="tel:555-123-4567"><span className="material-icons"></span> 206-376-1204</a></p>
                </div>
    
                <div className="col-12 col-sm-6 col-lg-3">
                    <h2>Chaowei</h2>
                    <h3>Product Manager</h3>
                    <p>Email: <a href="mailto:dannyyue@uw.edu"><span className="material-icons"></span> cxiao4@uw.edu</a></p>
                    <p>Phone: <a href="tel:555-123-4567"><span className="material-icons"></span> 206-468-2376</a></p>
                </div>
    
                <div className="col-12 col-sm-6 col-lg-3">
                    <h2>Annie</h2>
                    <h3>Software Engineerer</h3>
                    <p>Email: <a href="mailto:dannyyue@uw.edu"><span className="material-icons"></span> ychen21@uw.edu</a></p>
                    <p>Phone: <a href="tel:555-123-4567"><span className="material-icons"></span> 206-227-4056</a></p>
                </div>
            </div>
            <p>&copy; GROUP BA 8 2022</p>
        </footer>

        <nav className="nav-bar bg-dark fixed-bottom d-lg-none p-2 border-top-white">
            <ul className="nav justify-content-evenly">
                <li className="nav-item">
                    <a className="nav-link text-light fs-1" href="edit.html">
                        <i className="fa fa-pencil-square-o" aria-label="add event"></i>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light fs-1" aria-current="page" href="index.html">
                        <i className="fa fa-home" aria-label="homepage"></i>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light fs-1" href="profile.html">
                        <i className="fa fa-book" aria-label="my profile"></i>
                    </a>
                </li>
            </ul>
        </nav>
    </body>
  );
}

export default App;