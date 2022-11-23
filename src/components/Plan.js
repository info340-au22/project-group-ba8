import React from "react";
import Form from "./Form";

export default function Plan(props) {
    return (
    <div className="mx-5 my-4">
        <div class="container">
            <div class="row">
                <Form />
                <div class="d-none d-xl-block col-xl-4">
                    <h1>Place for other components.</h1>
                </div>
            </div>
        </div>
    </div>
    );
}