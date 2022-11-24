import React, { useState } from 'react';
import {AddNote} from "./AddNote"

export default function Profile(props) {
    const [noteObj,setNoteObj] = useState({title:'title', content:'content'});
    const cur = (formObj) => {
        setNoteObj(formObj);
    }


    return (
        <div className>
            <div className="mx-5 mb-5">
                <div className="container-fluid mt-4">
                    <div className="row">
                    <div className="col-sm-12 col-lg-4 card-col">
                        <div className="card my-2 p-3 rounded-0">
                            <div className="card-body">
                                <h2 id="personalPicture">Personal Info</h2>
                                <img className="avatar" label="avatar" src="img/profile.png" />
                                <dl className="my-2">
                                    <dt className="col-sm-3">Name</dt>
                                    <dd className="col-sm-9">
                                        <p>Beaver B. Beaver</p>
                                    </dd>

                                    <dt className="col-sm-3">Language</dt>
                                    <dd className="col-sm-9">
                                        <p>English, French, Beaverish</p>
                                    </dd>

                                    <dt className="col-sm-3">Places</dt>
                                    <dd className="col-sm-9">
                                        <p>Rivers, Forests, Woodcraft Fairs</p>
                                    </dd>

                                    <dt className="col-sm-3 text-truncate">Food</dt>
                                    <dd className="col-sm-9">
                                        <p>Flowers, Berries, Fish</p>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>

                    <AddNote getFormCallback={cur}/>
                    <div class="col-sm-12 col-lg-4 card-col">
                        <div class="card my-2 p-3 rounded-0">
                            <div class="card-body">
                                <h2>Notes</h2>
                                <div class="container">
        
                                    <div class="row">
                                        <div class="card my-2 p-3 rounded-0">
                                            <h3>Things before Alaska</h3>
                                            <p>A good fur coat, Alaska local sim card, Power bank ,Visit grandparents before leaving</p>
                                        </div>
                                    </div>
        
                                    <div class="row">
                                        <div class="card my-2 p-3 rounded-0">
                                            <h3>Marco</h3>
                                            <p>
                                                Marco said we should go to Mt. Rainier next weekend. Remember to ask uncle Bill to drive us there.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
            </div>
            </div>
            

            </div>
        </div>
    );
}