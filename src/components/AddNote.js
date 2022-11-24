import React, { useState } from 'react';

export function AddNote(props) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleTitle = (event) => {
        setTitle(event.target.value);
        props.getFormCallback({title,content});
    }

    const handleContent = (event) => {
        setContent(event.target.value);
        props.getFormCallback({title,content});
    }


    return (
        <div className="col-sm-12 col-lg-4 card-col">
        <div className="card my-2 p-3 rounded-0">
        <div className="card-body">
            <h2>Notes</h2>
            <div className="container">

                <div className="row">
                    <div className="card my-2 p-3 rounded-0">
                        <h3>
                            <input type="text" className="form-control" id="title-input" 
                            placeholder="Add A Note~" value={title} onChange={handleTitle} required />
                        </h3>
                    </div>
                </div>

                <div className="row">
                    <div className="card my-2 p-3 rounded-0">
                        <h3>
                            <textarea type="text" className="form-control" id="content-input" 
                            placeholder="hmmm..." value={content} onChange={handleContent} required />
                        </h3>
                    </div>
                </div>


                <div className="row-2">
                    <button type="button" className="btn btn-dark my-2">
                        Add Note
                    </button>
                </div>

            </div>
        </div>
        </div>
        </div>
    );
}