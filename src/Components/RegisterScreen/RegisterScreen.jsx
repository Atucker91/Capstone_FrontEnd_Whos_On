import React from 'react';
import { Link } from 'react-router-dom';
import './RegisterScreen.css'

const LandingScreen = () => {
    return (
        <div>
            <div class="row">
                <div class="top-row"></div>
            </div>

            <div class="row">
                <div class="col"></div>
                <div class="col">
                    
                    <div class="container mt-3 links">
                        <h1>Select Registration Type</h1>
                        <div class="mb-3 mt-3">
                            <Link to='/userregister'><button type="button" class="btn btn-primary btn-block">Fan Registration</button></Link>
                        </div>
                        <div class="mb-3 mt-3">
                            <Link to='/bandregister'><button type="button" class="btn btn-primary">Band Registration</button></Link>
                        </div>
                        <div class="mb-3 mt-3">
                            <Link to='/venueregister'><button type="button" class="btn btn-primary">Venue Registration</button></Link>
                        </div>
                    </div>
                </div>
                <div class="col"></div>
            </div>

            <div class="row">
                    <div class="bottom-row"></div>
                </div>
        </div>
    )
}

export default LandingScreen