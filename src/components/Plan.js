import React, { useState } from "react";
import Form from "./Form";
import EventCard from "./EventCard";

export default function Plan(props) {
    const [eventObj,setEventObj] = useState({title:'',date:'',timestampEnd:'',location:'',isSaved:false});

    const getForm = (formObj) => {
        setEventObj(formObj);
    }

    return (
    <div className="mx-4 my-4">
        <div className="container">
            <div className="row">
                <Form getFormCallback={getForm}/>
                <div className="d-none d-xl-block col-xl-4">
                <label className="form-label">Preview:</label>
                    <EventCard evtObj={eventObj}/>
                </div>
            </div>
        </div>
    </div>
    );
}