import React from 'react';

const BandProfileScreen = (props) => {

    return (
        <div>
            <h1>Band ProfileScreen {props.user.username}</h1>
            <h1>{props.loggedInBand.band_name}</h1>
        </div>
    )
}

export default BandProfileScreen