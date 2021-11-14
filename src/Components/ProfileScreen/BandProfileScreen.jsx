import React from 'react';

const BandProfileScreen = (props) => {

    return (
        <div>
            <h1>Band ProfileScreen {props.user.username}</h1>
            <iframe src="https://open.spotify.com/embed/track/73S9inBZKB60Kygu3qaviQ?si=e8995f7bd8ab477d" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
    )
}

export default BandProfileScreen