import React from "react";

export default function currentNote(props) {
    const [title, setTitle] = useState('Add A Note~');

    const curContent = (event) => {
        setTitle(event.target.value);
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
                                <h3>curContent.title</h3>
                                <p>curContent.content</p>
                            </div>
                        </div>


                        <div className="row-2">
                            <button type="button" className="btn btn-dark my-2">
                                Add Notes
                            </button>
                        </div>

                    </div>
                    </div>
                    </div>
                    </div>
    );
}