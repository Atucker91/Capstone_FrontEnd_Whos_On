import React, {Component} from 'react';
import  './LoginScreen.css';

class BandLoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            password: '',
         }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.loginUser(this.state)
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
                        <div class="container mt-3 login-form">
                            <h2>Login</h2>
                            <form  onSubmit={this.handleSubmit}>
                                <div class="mb-3 mt-3">
                                    <label for="username">Username:</label>
                                    <input class="form-control" name="username" onChange={this.handleChange} value={this.state.username} placeholder='Enter Username'/>
                                </div>
                                <div class="mb-3">
                                    <label for="password">Password:</label>
                                    <input class="form-control" name="password" onChange={this.handleChange} value={this.state.password} placeholder='Enter Password'/>
                                </div>
                                    <button class="btn btn-primary" type="submit">Login</button>
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
 
export default BandLoginScreen;