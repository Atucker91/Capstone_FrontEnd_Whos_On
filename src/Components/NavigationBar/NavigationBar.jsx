import React from 'react';
import './NavigationBar.css';
import { Link } from 'react-router-dom';

const NavigationBar = (props) => {
    return(
        <div>
            {/* {props.user && <h4>Welcome {props.user.username}</h4>} */}
            <ul class="nav-list">
                <li>
                <Link to='/'>Welcome To Who's On</Link>
                </li>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/profile'>Profile</Link>
                </li>
                {!props.user && 
                    <React.Fragment>
                        <li>
                            <Link to='/register'>Register</Link>
                        </li>
                        <li>
                            <Link to='/login'>Login</Link>
                        </li>
                    </React.Fragment>
                }
                {props.user &&
                    <React.Fragment>
                        <li>
                            <Link onClick={props.logoutUser}>Logout</Link>
                        </li>
                    </React.Fragment>
                }
            </ul>
        </div>
    )
}

export default NavigationBar