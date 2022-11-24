import React from "react";

export default function Profile(props) {
    return (
        <div className>
            <h1>This is Profile Page</h1>
            <div className="mx-5 mb-5">
                <div className="container-fluid mt-4">
                    <div className="row">
                    <div className="col-sm-12 col-lg-4 card-col">
                        <div className="card my-2 p-3 rounded-0">
                            <div className="card-body">
                                <h2 id="personalPicture">Personal Info</h2>
                                <img className="avatar" label="avatar" src="img/beaver.jpg" />
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
                    <currentNote />
                    
            </div>
            </div>
            

            </div>
        </div>
    );
}