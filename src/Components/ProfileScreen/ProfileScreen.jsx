import React from 'react';
import './ProfileScreen.css'

const ProfileScreen = (props) => {
    console.log(props.user)

    return (
        <div>
            

            <div class="row">
                
                <div class="col-12">

                    <div class="container content">
                        <h1>See Who's On Next In {props.user.city}</h1>

                        <div class="row">
                            <h2>Schedule</h2>
                            <div>
                                <ul>
                                    {props.allSchedule.map((show)=> (
                                        <div>
                                            <li>Date:{show.day} {show.month} {show.year} {show.time} Band:{show.band_name} Venue:{show.venue_name}</li>
                                        </div>
                                    ))}
                                </ul>
                            </div>
                        </div>
                            <h2>Bands to follow</h2>
                            <div>
                                <ul>
                                    {props.bands.map((band)=> (
                                        <div>
                                            <li>{band.band_name}</li>
                                            <button onClick={()=> props.addBandToFollow(band)}>Follow</button>
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
                                            <button onClick={()=> {props.addVenueToFollow(venue)}}>Follow</button>
                                        </div>
                                    ))}
                                </ul>
                            </div>

                            <h2>Bands Followed</h2>
                            <div>
                                <ul>
                                    {props.followedBands.map((band)=> (
                                        <div>
                                            <li>{band.band_name}</li>
                                        </div>
                                    ))}
                                </ul>
                            </div>

                            <h2>Venues Followed</h2>
                            <div>
                                <ul>
                                    {props.followedVenues.map((venue)=> (
                                        <div>
                                            <li>{venue.venue_name}</li>
                                        </div>
                                    ))}
                                </ul>
                            </div>

                        
                    </div>
                </div>
                
            </div>    
            <div class="row">
                <div class="bottom-row"></div>
            </div>
        </div>
    )
}

export default ProfileScreen