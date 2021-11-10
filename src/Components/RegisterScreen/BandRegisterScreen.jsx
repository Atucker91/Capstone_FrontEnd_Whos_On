import React, {Component} from 'react';

class BandRegisterScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            email: '',
            first_name: '',
            last_name: '',
            city: '',
            password: '',
            is_band: true,
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
                <h1>Band Registration</h1>
                <form onSubmit={this.handleSubmit}>
                    <input name="username" onChange={this.handleChange} value={this.state.username} placeholder='Username'/>
                    <input name="email" onChange={this.handleChange} value={this.state.email} placeholder='Email'/>
                    <input name="password" onChange={this.handleChange} value={this.state.password} placeholder='password'/>
                    <button type="submit">Register</button>
                </form>
            </div> 
        );
    }
}
 
export default BandRegisterScreen;