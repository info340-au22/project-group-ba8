import React, { useState } from 'react';

export default function EventCard(props) {
    const evtObj = props.evtObj;
    //console.log(props);
    const cardTitle = evtObj.title;
    const isSaved = evtObj.isSaved;
    function titleCase(str) {
        str = str.toLowerCase();
        let wordArr = str.split(' ');
        wordArr = wordArr.map((word) => {
            if (word[0]!= undefined) {
            return (word[0].toUpperCase() + word.substring(1));
            }
        })
        return wordArr.join(' ');
    }
    
    function handleClick() {
        props.evtBtnCallbk(cardTitle); 
    }
    

    return (
            <div className='card my-3 rounded-0 event-card'>
                <div className='card-body'>
                    {/* modify title by css */}
                    <h2 className='event-title'>{titleCase(evtObj.title)}</h2>
                    <img className='event-img' src={'./img'+evtObj.img}></img>
                    <p className='event-detail'>{evtObj.detail}</p>
                    <p className='event-time'>{"Time: "+evtObj.timestampStart+" ~ "+evtObj.timestampEnd}</p>
                    <p className='event-location'>{"Location: "+evtObj.location}</p>
                    <button className={'btn '+(isSaved ? 'btn-danger' : 'btn-primary')} onClick={handleClick}>{isSaved ? "Remove" : "Save"}</button>
                </div>
            </div>
        );
    }
    

    





















    // <div className='card card-group my-2 p-4 rounded-0 container-fluid'>
    //         <div className="row collapse-parent">
    //             <div class="card py-2 rounded-0 collapse-btn"  type="button" data-bs-toggle="collapse" data-bs-target="#summer2022Detail" aria-expanded="false" aria-controls="summer2022Detail">
    //                 <h3>Summer 2022</h3>
    //             </div>
    //         </div>

    //         <div className="row collapse" id="summer2022Detail">
    //             <ul class="list-group list-group-flush my-2">
    //                 <li class="list-group-item">
    //                     <div className='card my-2 p-3 rounded-0'>
    //                         <p class="date">Oct.20 - Oct.24</p>
    //                         <p>Hang around in Bay Area</p>
    //                     </div>
    //                 </li>
    //                 <li class="list-group-item">
    //                     <div className='card my-2 p-3 rounded-0'>
    //                         <p class="date">Oct.25 - Oct.27</p>
    //                         <p>Drive down CA-1 Hwy</p>
    //                     </div>
    //                 </li>
    //                 <li class="list-group-item">
    //                     <div className='card my-2 p-3 rounded-0'>
    //                         <p class="date">Oct.28 - Oct.29</p>
    //                         <p>Go to concerts in LA</p>
    //                     </div>
    //                 </li>
    //             </ul>
    //         </div>
    // </div>