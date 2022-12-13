import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Form(props) {
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [timestampStart, setTimestampStart] = useState('');
    const [timestampEnd, setTimestampEnd] = useState('');
    const [detail, setDetail] = useState('');
    const [imageFile, setImageFile] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const navigateTo = useNavigate();

    const handleName = (event) => {
        setTitle(event.target.value);
        props.getFormCallback({title,location,date,timestampStart,timestampEnd,detail,imageUrl},false);
    }

    const handleRefresh = (event) => {
        props.getFormCallback({title,location,date,timestampStart,timestampEnd,detail,imageUrl},false);
    }

    const handleLocation = (event) => {
        setLocation(event.target.value);
        props.getFormCallback({title,location,date,timestampStart,timestampEnd,detail,imageUrl},false);
    }
    const handleDate = (event) => {
        setDate(event.target.value);
        props.getFormCallback({title,location,date,timestampStart,timestampEnd,detail,imageUrl},false);
    }
    const handleStartTime = (event) => {
        setTimestampStart(event.target.value);
        props.getFormCallback({title,location,date,timestampStart,timestampEnd,detail,imageUrl},false);
    }
    const handleEndTime = (event) => {
        setTimestampEnd(event.target.value);
        props.getFormCallback({title,location,date,timestampStart,timestampEnd,detail,imageUrl},false);
    }
    const handleIntro = (event) => {
        setDetail(event.target.value);
        props.getFormCallback({title,location,date,timestampStart,timestampEnd,detail,imageUrl},false);
    }

    const handleImg = (event) => {
        if (event.target.files.length >0 && event.target.files[0]) {
            const imgFile = event.target.files[0];
            setImageFile(imgFile);
            setImageUrl(URL.createObjectURL(imgFile));
        }
        props.getFormCallback({title,location,date,timestampStart,timestampEnd,detail,imageUrl},false);
    }

    const handleSubmit = (event) => {
        props.getFormCallback({title,location,date,timestampStart,timestampEnd,detail},true);
        event.preventDefault();
        navigateTo('/home');
    }

    return(
        <div className="col-xl-8">
            <form className="row g-3" onSubmit={handleSubmit}>
                
                <div className="col-12">
                    <label htmlFor="event-input" className="form-label required-field">Event: </label>
                    <input type="text" className="form-control" id="event-input" 
                    placeholder="Consider a cool name.." value={title} onChange={handleName} required />
                </div>

                <div className="col-12">
                    <label htmlFor="location-input" className="form-label required-field">Location: </label>
                    <input type="text" className="form-control" id="location-input" 
                    placeholder="Where is the event.." value={location} onChange={handleLocation} />
                </div>

                <div className="col-md-4">
                    <label htmlFor="date-input" className="form-label required-field">Date: </label>
                    <input type="date" id="date-input" className="form-control" 
                    value={date} onChange={handleDate} required />
                </div>

                <div className="col-md-4">
                    <label htmlFor="start-time-input" className="form-label required-field">Start time: </label>
                    <input type="time" className="form-control" id="start-time-input" 
                    value={timestampStart} onChange={handleStartTime} required />
                </div>

                <div className="col-md-4">
                    <label htmlFor="end-time-input" className="form-label required-field">End time: </label>
                    <input type="time" className="form-control" id="end-time-input" 
                    value={timestampEnd} onChange={handleEndTime} required />
                </div>

                <div className="col-12">
                    <label htmlFor="intro-input" className="form-label required-field">Introduction: </label>
                    <textarea className="form-control" id="intro-input" placeholder="Give some introduction!" 
                    value={detail} onChange={handleIntro} required ></textarea>
                </div>

                <div className="col-12">
                    <label htmlFor="background-image" className="form-label">Image</label>
                    <input type="file" className="form-control" id="background-image" onChange={handleImg}/>
                </div>

                <div className="d-grid gap-2 col-6 mx-auto mt-4 mb-4">
                    <button className="btn btn-dark" type="submit">Post the event!</button>
                </div>
            </form>
        </div>
    )
}