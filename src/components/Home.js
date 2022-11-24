import React from "react";
import EventCard from "./EventCard";

export default function Home(props) {
    // console.log(props);
    const publicPosts = props.postData.map((post) => {
        if (!post.isSaved){
            return (
                <EventCard evtObj={post} isSaved={post.isSaved} key={post.id} evtBtnCallbk={props.evtBtnCallbk}/>
            )
        }
    })
    const savedPosts = props.postData.map((post) => {
        if (post.isSaved){
            return (
                <EventCard evtObj={post} isSaved={post.isSaved} key={post.id} evtBtnCallbk={props.evtBtnCallbk} />
            )
        }
    })
    return (
        <div className="index-body mt-4 mx-3">
            {/* <h1>This is Home Page</h1> */}
            <div className="container-fluid mr-0">
                <div className="row justify-content-around">
                    <div className="col-lg col-sm-12">
                        <div className="my-2 p-3">
                            <h1>Events Around You</h1>
                            {publicPosts}
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="my-2 p-3">
                            <h1>Your Saved Events</h1>
                            {savedPosts}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}