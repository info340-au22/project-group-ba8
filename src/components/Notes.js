import React from "react";
import NOTE_DATA from '../data/noteData.json';

export default function Notes(props) {
    const noteArr = NOTE_DATA.map((note) => {
        return (
            <div class="row">
                <div class="card my-2 p-3 rounded-0">
                    <h3>{note.title}</h3>
                    <p>{note.content}</p>
                </div>
            </div>
        );
    })


    return (
        <div className="col-sm-12 col-lg-6 card-col">
            <div className="card my-2 p-3 rounded-0">
                <div className="card-body">
                    <h2 id="personalPicture">Notes</h2>
                    {noteArr}
                    
                </div>
            </div>
        </div>
    );
}