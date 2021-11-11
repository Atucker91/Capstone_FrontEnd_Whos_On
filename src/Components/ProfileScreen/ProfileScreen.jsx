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
                        <div>
                            <li>{band.band_name}</li>
                            <button onclick={()=> {props.addBandToFollow(band)}}>Follow</button>
                        </div>
                    ))}
                </ul>
            </div>
            <h2>Venues to follow</h2>
            <div>
                <ul>
                    {props.venues.map((venue)=> (
                        <div>
                            <li>{venue.venue_name}</li>
                            <button onclick={()=> {props.addVenueToFollow(venue)}}>Follow</button>
                        </div>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default ProfileScreen