import React, {useState} from 'react';
import './NonFanProfileView.css';

const FanViewVenueProfile = (props) => {

    

    return (
        <div>
            <div class="row">
                <div class="col-1"></div>
                <div class="col-10">
                    <div class="container mt-3 form">
                        <div class="row">
                            <h1>{props.venueProfile.venue_name}</h1>
                            
                        </div>
                        <div class="row mb-5">
                            <div class="col">
                                <img class="img-fluid" src="https://storage.googleapis.com/whos_on_bucket/band.jpg" alt="band photo" ></img>
                            </div>
                            <div class="col pt-2 pb-2"> 
                                <div class="row">
                                    <h2>City : {props.venueProfile.city}</h2>
                                    <h2>About</h2>
                                </div>   
                                <div class="row">
                                    <p>{props.venueProfile.about}</p>
                                    <button class="btn btn-primary" onClick={()=> props.addVenueToFollow(props.venueProfile)}>Follow</button>
                                    
                                </div>
                            </div>
                        </div>
        
                        <h2>Schedule</h2>
                        <div class="row">
                            
                                {props.venueShows.map((show)=> (
                                    <div class='col'>
                                        <h6>{show.day} {show.month} {show.time}</h6> Band:{show.band_name} 
                                    </div>
                                ))}
                            
                        </div>
                    </div>
                </div>
                <div class="col-1"></div>
            </div>   
        </div>
    )
}

export default FanViewVenueProfile