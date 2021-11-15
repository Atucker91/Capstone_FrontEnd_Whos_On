import React, {useState} from 'react';
import './NonFanProfileView.css';

const FanViewBandProfile = (props) => {

    return (
        <div>
            <div class="row">
                <div class="col-1"></div>
                    <div class="col-10">
                        <div class="container mt-3 form">
                            <div class="row">
                                <h1>{props.bandProfile.band_name}</h1>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <img class="img-fluid" src="https://storage.googleapis.com/whos_on_bucket/band.jpg" alt="band photo" ></img>
                                </div>
                                <div class="col pt-2 pb-2"> 
                                    <div class="row">
                                        <h2>City : {props.bandProfile.city}</h2>
                                        <h2>About</h2>
                                    </div>
                                    <div class="row">
                                        <p>{props.bandProfile.about}</p>
                                        <button class="btn btn-primary" onClick={()=> props.addBandToFollow(props.bandProfile)}>Follow</button>
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="row mt-5 mb-5">
                                <iframe src={props.loggedInBand.song_to_display} width="500" height="400" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                            </div>

                            <h2>Schedule</h2>
                            <div class="row">
                                
                                    {props.bandShows.map((show)=> (
                                        <div class='col'>
                                            <h6>{show.day} {show.month} {show.time}</h6> Venue: {show.venue_name}
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

export default FanViewBandProfile