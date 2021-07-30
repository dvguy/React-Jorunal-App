import moment from 'moment'
import React from 'react'
import { useDispatch } from 'react-redux'
import { activeNote } from '../actions/notes'

export const JournalEntry = ({id, date, title, body, url}) => {

    const dispatch = useDispatch();

    const activated = () =>{
        dispatch( activeNote(id, {
            date, title, body, url
        }) );
    }

    const noteDate = moment(date);
        return (
        <div className="journal__entry pointer animate__animated animate__fadeIn" onClick={activated}>
            {
                url &&
                <div 
                    className="jorunal__picture" 
                    style={{
                        backgroundSize: 'cover', 
                        backgroundImage: `url(${url})`
                    }}>
                </div>
            }

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    {title}
                </p>
                <p className="journal__entry-content">
                    {body}
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>{noteDate.format('ddd')}</span>
                <h4>{noteDate.format('Do')}</h4>
            </div>
        </div>
    )
}
