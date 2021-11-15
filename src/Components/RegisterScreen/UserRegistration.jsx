import React, {Component} from 'react';
import  './RegisterScreen';

class UserRegisterScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            email: '',
            first_name: '',
            last_name: '',
            city: '',
            password: '',
            is_band: false,
            is_venue: false
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
                        
                        <h1>Fan Registration</h1>
                        <form onSubmit={this.handleSubmit}>

                        <div class="row mb-3 mt-3">
                            <div class="col">
                                <label for="username">Username</label>
                                <input class="form-control" name="username" onChange={this.handleChange} value={this.state.username} placeholder='Username'/>
                            </div>
                            <div class="col"> 
                                <label for="username">Email</label>
                                <input class="form-control" name="email" onChange={this.handleChange} value={this.state.email} placeholder='Email'/>
                            </div>
                        </div>
                        <div class="row mb-3 mt-3">
                            <div class="col">
                                <label for="username">First Name</label>
                                <input class="form-control" name="first_name" onChange={this.handleChange} value={this.state.first_name} placeholder='First Name'/>
                            </div>
                            <div class="col">
                                <label for="username">Last Name</label>
                                <input class="form-control" name="last_name" onChange={this.handleChange} value={this.state.last_name} placeholder='Last Name'/>
                            </div>
                        </div>
                        <div class="row mb-3 mt-3">
                            <div class="col">
                                <label for="username">City</label>
                                <input class="form-control" name="city" onChange={this.handleChange} value={this.state.city} placeholder='City'/>
                            </div>
                            <div class="col"> 
                                <label for="username">Password</label>
                                <input class="form-control" type="password" name="password" onChange={this.handleChange} value={this.state.password} placeholder='password'/>
                            </div>
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
 
export default UserRegisterScreen;