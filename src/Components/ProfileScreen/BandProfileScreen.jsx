import React from 'react';

const BandProfileScreen = (props) => {

    return (
        <div>
            <div>
                <h1>Band ProfileScreen {props.user.username}</h1>
                <h1>{props.loggedInBand.band_name}</h1>
            </div>

            <h2>Schedule</h2>
            <div>
                <ul>
                    {props.allSchedule.map((show)=> (
                        <div>
                            <li>Date:{show.date} Band:{show.band_name} Venue:{show.venue_name}</li>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default BandProfileScreen