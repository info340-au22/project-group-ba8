import React, { useState } from "react";
import EventCard from "./EventCard";
import { getDatabase, onValue, ref, set as firebaseSet } from 'firebase/database';
import { updateCurrentUser } from "firebase/auth";

export default function Home(props) {

    const [postData,setPostData] = useState(props.postData);

    const userDfRef = ref(getDatabase(), "userData/"+updateCurrentUser.userId+"events");


    const addCard = (title) => {

        const updateCards = postData.map((card) => {
            if (card.title !== title) {
              return card;
            }
            const update = card;
            update[props.currentUser.uid] = true;
            return update;
          })
          setPostData(updateCards);
    }

    const removeCard = (title) => {
        const updateCards = postData.map((card) => {
            if (card.title !== title) {
              return card;
            }
            const update = card;
            delete update[props.currentUser.uid];
            return update;
          })
          setPostData(updateCards);
    }
    
    const publicPosts = props.postData.map((post) => {
        
        if (!post[props.currentUser.uid]){
            return (
                <EventCard evtObj={post} isSaved={false} key={post.id} evtBtnCallbk={addCard}/>
            )
        }
    })
    const savedPosts = props.postData.map((post) => {
        if (post[props.currentUser.uid]){
            return (
                <EventCard evtObj={post} isSaved={true} key={post.id} evtBtnCallbk={removeCard} />
            )
        }
    })
    return (
        <div className="react-body mt-4 mx-3">
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