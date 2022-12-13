import React, { useState } from "react";
import Form from "./Form";
import EventCard from "./EventCard";

import {getDatabase,ref,push as firebasePush} from 'firebase/database';

export default function Plan(props) {
    const [eventObj,setEventObj] = useState({title:'',date:'',timestampEnd:'',location:'',isSaved:false});

    const getForm = (formObj,done) => {
        setEventObj(formObj);
        if (done) {
            const db = getDatabase();
            const events = ref(db,'Events');
            firebasePush(events,formObj);
        }
    }

    return (
    <div className="react-body">
        <div className="container mt-4">
            <div className="row">
                <Form getFormCallback={getForm} currentUser={props.currentUser}/>
                <div className="d-none d-xl-block col-xl-4">
                <label className="form-label">Preview:</label>
                    <EventCard evtObj={eventObj}/>
                </div>
            </div>
        </div>
    </div>
    );
}