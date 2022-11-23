import React, { useState } from "react";
import Form from "./Form";

export default function Plan(props) {
    const [eventObj,setEventObj] = useState({});

    const getForm = (formObj) => {
        setEventObj(formObj);
    }

    return (
    <div className="mx-4 my-4">
        <div className="container">
            <div className="row">
                <Form getFormCallback={getForm}/>
                <div className="d-none d-xl-block col-xl-4">
                    <h1>Event: {eventObj.name}</h1>
                    <h1>Location: {eventObj.location}</h1>
                    <h1>Date: {eventObj.date}</h1>
                    <h1>Time: {eventObj.time}</h1>
                    <h1>Intro: {eventObj.intro}</h1>
                </div>
            </div>
        </div>
    </div>
    );
}