import React from "react";

export default function Profile(props) {
    return (
        //<h1>This is Profile Page</h1>
        <div className="mx-5 mb-5">
            <div className="container-fluid mt-4">
                <div className="col-sm-12 col-lg-4 card-col">
                    <div className="card my-2 p-3 rounded-0">
                        <div className="card-body">
                            <h2 id="personalPicture">Personal Info</h2>
                            <img className="avatar" label="avatar" src="img/beaver.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}