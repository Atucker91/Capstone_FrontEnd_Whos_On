import React from 'react';
import './ProfileScreen.css'
import { Link } from 'react-router-dom';

const ProfileScreen = (props) => {
    console.log(props.user)

    return (
        <div>
            

            <div class="row">
                
                <div class="col-12">

                    <div class="container content">
                        <h1>See Who's On Next In {props.user.city}</h1>

                        <div class="row mt-5">
                            <h2>Schedule</h2>
                            <div class="col-10">
                                <div class="row pb-4">
                                    {props.allSchedule.map((show)=> (
                                        <div class="col-4 ">
                                            <div class="event-card shadow-lg p-2 mt-3">
                                                <img class="img-fluid" src={show.img} alt="band photo"></img>
                                                <h3>{show.band_name}</h3>
                                                <h5>{show.day} {show.month}</h5>
                                                <h5>{show.time} at {show.venue_name}</h5>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div class="col-2 text-center">
                            <h4 class="pb-3">More In Your Area</h4>
                            <h5 class="pb-1">Artists</h5>
                                <div>
                                    {props.bands.map((band)=> (
                                        <div class="row pb-2 ">
                                            <h6>{band.band_name}</h6>
                                            <Link to='/viewBand'><button class="btn btn-secondary" onClick={()=> props.getBandProfile(band)}>Profile</button></Link>
                                        </div>
                                    ))}
                                </div>

                                <h5 class="pt-3">Venues</h5>
                                <div>
                                    {props.venues.map((venue)=> (
                                        <div class="row pb-2">
                                            <h6>{venue.venue_name}</h6>
                                            <Link to='/viewVenue'><button class="btn btn-secondary" onClick={()=> props.getVenueProfile(venue)}>Profile</button></Link>
                                        </div>
                                    ))}
                                </div>

                            </div>
                            
                        </div>

                        <div class="row">   
                            <h1>Your Network</h1>
                            <h4 class="pt-3">Artists</h4>
                            <div class="row">
                                {props.followedBands.map((band)=> (
                                    <div class="col-3 pt-3">
                                        <div class="small-card">
                                            <h6>{band.band_name}</h6>
                                            <Link to='/viewBand'><button class="btn btn-secondary" onClick={()=> props.getBandProfile(band)}>Profile</button></Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div> 


                            <h4 class="pt-3">Venues</h4>
                            <div class="row ">
                                
                                {props.followedVenues.map((venue)=> (
                                    <div class="col-3">
                                        <div class="small-card">
                                            <h6>{venue.venue_name}</h6>
                                            <Link to='/viewVenue'><button class="btn btn-secondary" onClick={()=> props.getVenueProfile(venue)}>Profile</button></Link>
                                        </div>
                                    </div>
                                ))}
                                
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