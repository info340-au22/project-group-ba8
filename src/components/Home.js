import React from "react";
import EventCard from "./EventCard";

export default function Home(props) {
    return (
        <div className="index-body">
            <h1>This is Home Page</h1>
            <div class="container mr-0">
                <div class="row justify-content-around">
                    <div class="col-lg-9"></div>
                    <div class="col-lg-3">
                        <h1>Place for event cards</h1>
                        <EventCard />
                    </div>
                </div>
            </div>
        </div>
    );
}