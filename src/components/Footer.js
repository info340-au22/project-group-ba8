import React from "react";

export default function Footer(props) {
    return(
        <footer className="container-fluid bg-info">
        <div className="row contacts ms-5 d-flex">
            <h1>Contacts</h1>
            <a href="mailto:groupba8@example.com">groupba8@example.com</a>
        </div>
        <p className="text-end">&copy; GROUP BA 8 2022</p>
    </footer>
    )
}