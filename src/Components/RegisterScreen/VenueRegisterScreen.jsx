import React, {Component} from 'react';
import  './RegisterScreen';

class VenueRegisterScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            email: '',
            first_name: '',
            last_name: '',
            city: '0',
            password: '',
            is_band: false,
            is_venue: true
         }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.registerUser(this.state)
    }

    render() { 
        return ( 
            <div>
                <div class="row">
                    <div class="top-row"></div>
                </div>
                <div class="row">
                    <div class="col"></div>
                    <div class="col">
                        <div class="container mt-3 form">

                            <h1>Venue Registration</h1>
                            <form onSubmit={this.handleSubmit}>
                            
                            <div class="row mb-3 mt-3">
                            <label for="username">Username</label>
                                <input class="form-control" name="username" onChange={this.handleChange} value={this.state.username} placeholder='Username'/>
                            </div>
                            <div class="row mb-3 mt-3">
                            <label for="username">Email</label>
                                <input class="form-control" name="email" onChange={this.handleChange} value={this.state.email} placeholder='Email'/>
                            </div>
                            <div class="row mb-3 mt-3">
                                <label for="username">Password</label>
                                <input class="form-control" name="password" onChange={this.handleChange} value={this.state.password} placeholder='Password'/>
                            </div>
                                <button class="btn btn-primary" type="submit">Register</button>
                            </form>

                        </div>
                    </div>
                    <div class="col"></div>
                </div>

                <div class="row">
                    <div class="bottom-row"></div>
                </div>
            </div> 
        );
    }
}
 
export default VenueRegisterScreen;