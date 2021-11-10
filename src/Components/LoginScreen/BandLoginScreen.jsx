import React, {Component} from 'react';


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
                <form onSubmit={this.handleSubmit}>
                    <input name="username" onChange={this.handleChange} value={this.state.username} placeholder='Username'/>
                    <input name="password" onChange={this.handleChange} value={this.state.password} placeholder='password'/>
                    <button type="submit">Login</button>
                </form>
            </div> 
        );
    }
}
 
export default BandLoginScreen;