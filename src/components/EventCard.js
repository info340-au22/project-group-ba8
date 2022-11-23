import React, { useState } from 'react';


export default function EventCard(props) {
    return (
        // <div className="card-morning mb-4">
        //     <div className="card-body">
        //         <div className="col-sm-auto col-xl-12">
        //             <img className="img pb-3 index-img" src="img/tea.jpeg" alt="dog park event" />
        //         </div>
        //         <div className="col-sm">
        //             <h2 className="card-title">Morning Tea!</h2>
        //             <p className="card-text">Enjoying traditional Cantonese morning tea with friends with all my deadlines cleared lol</p>
        //         </div>
        //     </div>
        // </div>
        <div className='card my-2 p-3'>
            <div className='card-body'>
                <div className="row">
                    <button class="card my-2 p-3 rounded-0"  type="button" data-bs-toggle="collapse" data-bs-target="#summer2022Detail" aria-expanded="false" aria-controls="summer2022Detail">
                        <h3>Summer 2022</h3>
                    </button>
                </div>

                <div className="row collapse" id="summer2022Detail">
                    <ul class="list-group list-group-flush my-2">
                        <li class="list-group-item">
                            <div className='card my-2 p-3 rounded-0'>
                                <p class="date">Oct.20 - Oct.24</p>
                                <p>Hang around in Bay Area</p>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div className='card my-2 p-3 rounded-0'>
                                <p class="date">Oct.25 - Oct.27</p>
                                <p>Drive down CA-1 Hwy</p>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div className='card my-2 p-3 rounded-0'>
                                <p class="date">Oct.28 - Oct.29</p>
                                <p>Go to concerts in LA</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
