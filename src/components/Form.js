import React, { useState } from 'react';

export default function Form(props) {
    const [title, setTitle] = useState('');
    const [privacy, setPrivacy] = useState(false);
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [timestampStart, setTimestampStart] = useState('');
    const [timestampEnd, setTimestampEnd] = useState('');
    const [detail, setDetail] = useState('');

    const handleName = (event) => {
        setTitle(event.target.value);
        props.getFormCallback({title,privacy,location,date,timestampStart,timestampEnd,detail},false);
    }

    const handlePrivacy = (event) => {
        setPrivacy(event.target.checked);
        props.getFormCallback({title,privacy,location,date,timestampStart,timestampEnd,detail},false);
    }

    const handleLocation = (event) => {
        setLocation(event.target.value);
        props.getFormCallback({title,privacy,location,date,timestampStart,timestampEnd,detail},false);
    }
    const handleDate = (event) => {
        setDate(event.target.value);
        props.getFormCallback({title,privacy,location,date,timestampStart,timestampEnd,detail},false);
    }
    const handleStartTime = (event) => {
        setTimestampStart(event.target.value);
        props.getFormCallback({title,privacy,location,date,timestampStart,timestampEnd,detail},false);
    }
    const handleEndTime = (event) => {
        setTimestampEnd(event.target.value);
        props.getFormCallback({title,privacy,location,date,timestampStart,timestampEnd,detail},false);
    }
    const handleIntro = (event) => {
        setDetail(event.target.value);
        props.getFormCallback({title,privacy,location,date,timestampStart,timestampEnd,detail},false);
    }

    const handleSubmit = (event) => {
        props.getFormCallback({title,privacy,location,date,timestampStart,timestampEnd,detail},true);
        event.preventDefault();
    }

    return(
        <div className="col-xl-8">
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-9">
                    <label htmlFor="event-input" className="form-label">Event:</label>
                    <input type="text" className="form-control" id="event-input" 
                    placeholder="Consider a cool name.." value={title} onChange={handleName} required />
                </div>

                <div className="col-md-3 align-self-end">
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="privacy-check" onChange={handlePrivacy} />
                        <label className="form-check-label" htmlFor="privacy-check">Make it public</label>
                    </div>
                </div>

                <div className="col-12">
                    <label htmlFor="location-input" className="form-label">Location:</label>
                    <div className="input-group">
                        <input type="text" className="form-control" id="location-input" 
                        placeholder="Where is the event.." value={location} onChange={handleLocation} />
                        <button className="btn btn-outline-secondary" type="button"><i className="fa fa-map-marker" aria-label="map"></i></button>
                    </div>
                </div>

                <div className="col-md-4">
                    <label htmlFor="date-input" className="form-label">Date:</label>
                    <input type="date" id="date-input" className="form-control" 
                    value={date} onChange={handleDate} required />
                </div>

                <div className="col-md-4">
                    <label htmlFor="start-time-input" className="form-label">Start time:</label>
                    <input type="time" className="form-control" id="start-time-input" 
                    value={timestampStart} onChange={handleStartTime} required />
                </div>

                <div className="col-md-4">
                    <label htmlFor="end-time-input" className="form-label">End time:</label>
                    <input type="time" className="form-control" id="end-time-input" 
                    value={timestampEnd} onChange={handleEndTime} required />
                </div>

                <div className="col-12">
                    <label htmlFor="intro-input" className="form-label">Introduction:</label>
                    <textarea className="form-control" id="intro-input" placeholder="Give some introduction!" 
                    value={detail} onChange={handleIntro} required ></textarea>
                </div>

                <div className="col-12">
                    <label htmlFor="background-image" className="form-label">Image</label>
                    <input type="file" className="form-control" id="background-image" />
                </div>

                <div className="d-grid gap-2 col-6 mx-auto mt-4">
                    <button className="btn btn-dark" type="submit">Add it to your plan!</button>
                </div>
            </form>
        </div>
    )
}