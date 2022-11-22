import React from 'react';
import { useState } from 'react';

function App(props) {
//Just return a copy of old index.html. Need to divid it into several js files. index
  return (
  <body>
        <header>
            <nav class="navbar navbar-expand bg-info d-none d-lg-block">
                <div class="container-fluid">
                    <ul class="navbar-nav p-2">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="index.html">
                                Events Map
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="edit.html">
                                Create Events
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="profile.html">
                                My Profile
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        <main>
            <div class="morning-event">
                <a href="#"><span class="material-icons md-36" aria-label="Home">location_on</span></a>
                <div class="col-xl-3 col-md-6 d-flex">
                    <div class="card-morning mb-4">
                        <div class="card-body">
                            <div class="col-sm-auto col-xl-12">
                                <img class="img pb-3 index-img" src="img/tea.jpeg" alt="dog park event" />
                            </div>
                            <div class="col-sm">
                                <h2 class="card-title">Morning Tea!</h2>
                                <p class="card-text">Enjoying traditional Cantonese morning tea with friends with all my deadlines cleared lol</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="afternoon-event">
                <a href="#"><span class="material-icons" aria-label="Home">location_on</span></a>
                <div class="col-xl-3 col-md-6 d-flex">
                    <div class="card-afternoon mb-4">
                        <div class="card-body">
                            <div class="col-sm-auto col-xl-12">
                                <img class="img pb-3 index-img" src="img/dogs.jpeg" alt="dog park event" />
                            </div>
                            <div class="col-sm">
                                <h2 class="card-title">Dog park time!</h2>
                                <p class="card-text">Taking Jax to his favorite dog park for a afternoon. This week has been a long week and finally I can have some time with him.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="night-event">
                <a href="#"><span class="material-icons" aria-label="Home">location_on</span></a>
                <div class="col-xl-3 col-md-6 d-flex">
                    <div class="card-night mb-4">
                        <div class="card-body">
                            <div class="col-sm-auto col-xl-12">
                                <img class="img pb-3 index-img" src="img/fireworks.jpg" alt="dog park event" />
                            </div>
                            <div class="col-sm">
                                <h2 class="card-title">fireworks!</h2>
                                <p class="card-text">Seeing pretty fireworks with my roommates. Remind them to wear masks, there would be a huge crowd.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <footer class="container-fluid bg-info sticky-bottom pb-5">
            <div class="row contacts">
                <h1>Contacts</h1>
    
                <div class="col-12 col-sm-6 col-lg-3">
                    <h2>Vince</h2>
                    <h3>Software Engineerer</h3>
                    <p>Email: <a href="mailto:dannyyue@uw.edu"><span class="material-icons"></span> qqian2@uw.edu</a></p>
                    <p>Phone: <a href="tel:555-123-4567"><span class="material-icons"></span> 206-227-3454</a></p>
                </div>
    
                <div class="col-12 col-sm-6 col-lg-3">
                    <h2>Danny</h2>
                    <h3>Software Engineerer</h3>
                    <p>Email: <a href="mailto:dannyyue@uw.edu"><span class="material-icons"></span> dannyyue@uw.edu</a></p>
                    <p>Phone: <a href="tel:555-123-4567"><span class="material-icons"></span> 206-376-1204</a></p>
                </div>
    
                <div class="col-12 col-sm-6 col-lg-3">
                    <h2>Chaowei</h2>
                    <h3>Product Manager</h3>
                    <p>Email: <a href="mailto:dannyyue@uw.edu"><span class="material-icons"></span> cxiao4@uw.edu</a></p>
                    <p>Phone: <a href="tel:555-123-4567"><span class="material-icons"></span> 206-468-2376</a></p>
                </div>
    
                <div class="col-12 col-sm-6 col-lg-3">
                    <h2>Annie</h2>
                    <h3>Software Engineerer</h3>
                    <p>Email: <a href="mailto:dannyyue@uw.edu"><span class="material-icons"></span> ychen21@uw.edu</a></p>
                    <p>Phone: <a href="tel:555-123-4567"><span class="material-icons"></span> 206-227-4056</a></p>
                </div>
            </div>
            <p>&copy; GROUP BA 8 2022</p>
        </footer>

        <nav class="nav-bar bg-dark fixed-bottom d-lg-none p-2 border-top-white">
            <ul class="nav justify-content-evenly">
                <li class="nav-item">
                    <a class="nav-link text-light fs-1" href="edit.html">
                        <i class="fa fa-pencil-square-o" aria-label="add event"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-light fs-1" aria-current="page" href="index.html">
                        <i class="fa fa-home" aria-label="homepage"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-light fs-1" href="profile.html">
                        <i class="fa fa-book" aria-label="my profile"></i>
                    </a>
                </li>
            </ul>
        </nav>
    </body>
  );
}

export default App;