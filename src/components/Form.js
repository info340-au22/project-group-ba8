import React, { useState } from 'react';

export default function Form(props) {
    const [name, setName] = useState('');
    const [privacy, setPrivacy] = useState(false);
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [intro, setIntro] = useState('');

    const handleName = (event) => {
        setName(event.target.value);
        props.getFormCallback({name,privacy,location,date,time,intro});
    }

    const handlePrivacy = (event) => {
        setPrivacy(event.target.checked);
        props.getFormCallback({name,privacy,location,date,time,intro});
    }

    const handleLocation = (event) => {
        setLocation(event.target.value);
        props.getFormCallback({name,privacy,location,date,time,intro});
    }
    const handleDate = (event) => {
        setDate(event.target.value);
        props.getFormCallback({name,privacy,location,date,time,intro});
    }
    const handleTime = (event) => {
        setTime(event.target.value);
        props.getFormCallback({name,privacy,location,date,time,intro});
    }

    const handleIntro = (event) => {
        setIntro(event.target.value);
        props.getFormCallback({name,privacy,location,date,time,intro});
    }

    const handleSubmit = (event) => {
        props.getFormCallback({name,privacy,location,date,time,intro});
        event.preventDefault();
    }

    return(
        <div className="col-xl-8">
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-9">
                    <label htmlFor="event-input" className="form-label">Event:</label>
                    <input type="text" className="form-control" id="event-input" 
                    placeholder="Consider a cool name.." value={name} onChange={handleName} required />
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

                <div className="col-md-6">
                    <label htmlFor="date-input" className="form-label">Date:</label>
                    <input type="date" id="date-Input" className="form-control" 
                    value={date} onChange={handleDate} required />
                </div>

                <div className="col-md-6">
                    <label htmlFor="time-input" className="form-label">Time:</label>
                    <input type="time" className="form-control" id="time-input" 
                    value={time} onChange={handleTime} required />
                </div>

                <div className="col-12">
                    <label htmlFor="intro-input" className="form-label">Introduction:</label>
                    <textarea className="form-control" id="intro-input" placeholder="What it is.." 
                    value={intro} onChange={handleIntro} required ></textarea>
                </div>

                <div className="col-12">
                    <label htmlFor="background-image" className="form-label">Background image</label>
                    <input type="file" className="form-control" id="background-image" />
                </div>

                <div className="d-grid gap-2 col-6 mx-auto mt-4">
                    <button className="btn btn-dark" type="submit">Add it to your plan!</button>
                </div>
            </form>
        </div>
    )
}