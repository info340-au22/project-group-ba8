import React from 'react';

export default function Form(props) {
    return(
        <div className="col-xl-12 p-5">
            <form className="row g-3">
                <div className="col-md-9">
                    <label for="event-input" className="form-label">Event:</label>
                    <input type="text" className="form-control" id="event-input" placeholder="Consider a cool name.." required />
                </div>

                <div className="col-md-3 align-self-end">
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="privacy-check" />
                        <label className="form-check-label" htmlFor="privacy-check">Make it public</label>
                    </div>
                </div>

                <div className="col-12">
                    <label for="location-input" className="form-label">Location:</label>
                    <div className="input-group">
                        <input type="text" className="form-control" id="location-input" placeholder="Where is the event.." />
                        <button className="btn btn-outline-secondary" type="button"><i className="fa fa-map-marker" aria-label="map"></i></button>
                    </div>
                </div>

                <div className="col-md-6">
                    <label for="date-input" className="form-label">Date:</label>
                    <input type="date" id="date-Input" className="form-control" required />
                </div>

                <div className="col-md-6">
                    <label for="time-input" className="form-label">Time:</label>
                    <input type="time" className="form-control" id="time-input" required />
                </div>

                <div className="col-12">
                    <label for="intro-input" className="form-label">Introduction:</label>
                    <textarea className="form-control" id="intro-input" placeholder="What it is.." required ></textarea>
                </div>

                <div className="col-12">
                    <label for="background-image" className="form-label">Background image</label>
                    <input type="file" className="form-control" id="background-image" />
                </div>

                <div className="col-12">
                    <button type="submit" className="btn btn-dark">Submit</button>
                </div>
            </form>
        </div>
    )
}