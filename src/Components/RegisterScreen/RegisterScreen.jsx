import React from 'react';
import { Link } from 'react-router-dom';

const LandingScreen = () => {
    return (
        <div>

            <h1>Select Registration Type</h1>
            <ul>
                <li>
                    <Link to='/userregister'>Fan Registration</Link>
                </li>
                <li>
                    <Link to='/bandregister'>Band Registration</Link>
                </li>
                <li>
                    <Link to='/venueregister'>Venue Registration</Link>
                </li>
            </ul>

        </div>
    )
}

export default LandingScreen