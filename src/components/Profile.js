import React from "react";

export default function Profile(props) {
    return (
        <div className="lg-col-12">
            <h1>This is Profile Page</h1>
            <div className="mx-5 mb-5">
                <div className="container-fluid mt-4">
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
                </div>
            </div>

            <div className="col-sm-12 col-lg-4 card-col">
            <div className="card my-2 p-3 rounded-0">
            <div className="card-body">
                <h2>Notes</h2>
                <div className="container">

                    <div className="row">
                        <div className="card my-2 p-3 rounded-0">
                            <h3>Things before Alaska</h3>
                            <ul>
                                <li>A good fur coat</li>
                                <li>Alaska local sim card</li>
                                <li>Power bank</li>
                                <li>Visit grandparents before leaving</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row">
                        <div className="card my-2 p-3 rounded-0">
                            <h3>Marco</h3>
                            <p>
                                Marco said we should go to Mt. Rainier next weekend. Remember to ask uncle Bill to drive us there.
                            </p>
                        </div>
                    </div>

                    <div className="row-2">
                        <button type="button" className="btn btn-dark my-2">
                            Add Notes
                        </button>
                    </div>

                </div>
            </div>
            </div>
            </div>
        </div>
    );
}