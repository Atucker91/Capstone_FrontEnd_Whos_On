import React from 'react';

const ProfileScreen = (props) => {
    console.log(props.user)
    return (
        <div>
            <h1>ProfileScreen {props.user.username}</h1>
            <h2>Bands to follow</h2>
            <div>
                <ul>
                    {props.bands.map((band)=> (
                        <li>{band.band_name}</li>
                    ))}
                </ul>
            </div>
            <h2>Venues to follow</h2>
            <div>
                <ul>
                    {props.venues.map((venue)=> (
                        <li>{venue.venue_name}</li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default ProfileScreen