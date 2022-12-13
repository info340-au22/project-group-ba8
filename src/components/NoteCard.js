import React from "react";

export default function Note(props) {
    const title = props.title;
    const content = props.content;

    return (
        <div className="row">
            <div className="card my-2 p-3 rounded-0">
                <h3>{title}</h3>
                <p>{content}</p>               
            </div>
        </div>
    );
}