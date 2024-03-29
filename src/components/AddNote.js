import React, { useState } from 'react';

export function AddNote(props) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleTitle = (event) => {
        setTitle(event.target.value);
    }

    const handleContent = (event) => {
        setContent(event.target.value);
    }
    
    const handleClick = (event) => {
        props.newNote({title:title, content:content});
    }


    return (
        <div className="col-sm-12 col-lg-4 card-col">
        <div className="card my-2 p-3 rounded-0">
        <div className="card-body">
            <h2>Add Notes</h2>
            <div className="container">

                <div className="row">
                    <div className="card my-2 p-3 rounded-0">
                        <h3>
                            <input type="text" className="form-control" id="title-input" 
                            placeholder="Add a title for your note" value={title} onChange={handleTitle} required />
                        </h3>
                    </div>
                </div>

                <div className="row">
                    <div className="card my-2 p-3 rounded-0">
                        <h3>
                            <textarea type="text" className="form-control" id="content-input" 
                            placeholder="Put some content" value={content} onChange={handleContent} required />
                        </h3>
                    </div>
                </div>


                <div className="row-2 d-flex row">
                    <button type="button" className="btn btn-dark my-2" onClick = {handleClick}>
                        Add Note
                    </button>
                </div>

            </div>
        </div>
        </div>
        </div>
    );
}