import React from 'react';

const ProfileScreen = (props) => {
    return (
        <div>
            <h1>ProfileScreen {props.user.username}</h1>
        </div>
    )
}

export default ProfileScreen