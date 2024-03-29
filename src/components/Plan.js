import React, { useState } from "react";
import Form from "./Form";
import EventCard from "./EventCard";

import {getDatabase,ref as dbRef,push as firebasePush} from 'firebase/database';

export default function Plan() {
    const [eventObj,setEventObj] = useState({title:'',date:'',timestampStart:'',timestampEnd:'',location:''});

    const getForm = (formObj,done) => {
        setEventObj(formObj);
        if (done) {
            const db = getDatabase();
            const events = dbRef(db,'Events');
            firebasePush(events,formObj);
        }
    }

    return (
    <div className="react-body">
        <div className="container mt-4">
            <div className="row">
                <Form getFormCallback={getForm}/>
                <div className="col-xl-4">
                <label className="form-label">Preview:</label>
                    <EventCard evtObj={eventObj}/>
                </div>
            </div>
        </div>
    </div>
    );
}