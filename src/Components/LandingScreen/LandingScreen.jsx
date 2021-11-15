import React from 'react';
import { Link } from 'react-router-dom';
import  './LandingScreen.css';

const LandingScreen = () => {
    return (
        <div>
            <div class="row">
                <div class="top-row"></div>
            </div>
                <div class="row">
                    <div class="col-2"></div>
                    <div class="col-8 ">
                    <div class="container mt-5 pt-4 bg-light login-form">
                        <h1>Welcome To Who's On</h1>
                        <p>A Place For Fans To Easily See When Thier Favorite Local Bands Are About To Hit The Stage</p> 
                    </div>
                    </div>
                    <div class="col-2"></div>
                </div>
            <div class="row">
                <div class="bottom-row"></div>
            </div>
        </div>
    )
}

export default LandingScreen