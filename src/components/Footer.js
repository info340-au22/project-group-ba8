import React from "react";

export default function Footer(props) {
    return(
        <footer>
            {/* <div className="container-fluid"> */}
                <div className="row contacts ms-5 d-flex">
                    <h1>Contacts</h1>
                    <a href="mailto:dannyyue@uw.edu">dannyyue@uw.edu</a>
                </div>
                <p className="text-end">&copy; GROUP BA 8 2022</p>
            {/* </div> */}
        </footer>
    )
}