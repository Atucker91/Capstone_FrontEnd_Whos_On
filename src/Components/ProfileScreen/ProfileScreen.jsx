import React from 'react';

const ProfileScreen = (props) => {
    console.log(props.user)
    return (
        <div>
            <h1>ProfileScreen {props.user.username}</h1>
        </div>
    )
}

export default ProfileScreen