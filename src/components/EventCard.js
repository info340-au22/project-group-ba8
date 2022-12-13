import React from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
export default function EventCard(props) {
    const evtObj = props.evtObj;
    const cardTitle = evtObj.title;
    const isSaved = props.isSaved;
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
                <div className='card-body event'>
                    <h2 className='event-title'>{titleCase(evtObj.title)}</h2>
                    <img className='event-img' src={evtObj.imageUrl || './img/otterlarger.png'}></img>
                    <p className='event-detail'>{evtObj.detail}</p>
                    <p className='event-date'>{"Date: "+evtObj.date}</p>
                    <p className='event-time'>{"Time: "+evtObj.timestampStart+" ~ "+evtObj.timestampEnd}</p>
                    <p className='event-location'>{"Location: "+evtObj.location}</p>
                    <ButtonToolbar className="custom-btn-toolbar">
                    <button className={'btn '+(isSaved ? 'btn-danger' : 'btn-primary')} onClick={handleClick}>{isSaved ? "Remove" : "Save"}</button>
                    </ButtonToolbar>
                </div>
            </div>
        );
    }