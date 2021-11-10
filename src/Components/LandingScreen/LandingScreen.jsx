import React from 'react';
import { Link } from 'react-router-dom';

const LandingScreen = () => {
    return (
        <div>
            <h1>LandingScreen</h1>
            <ul>
                <li>
                    <Link to='/register'>Register</Link>
                </li>
                <li>
                    <Link to='/bandregister'>Band Register</Link>
                </li>
                <li>
                    <Link to='/venueregister'>Venue Register</Link>
                </li>
            </ul>
        </div>
    )
}

export default LandingScreen