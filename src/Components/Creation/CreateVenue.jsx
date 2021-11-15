import React, {Component} from 'react';
import  '../RegisterScreen/RegisterScreen';

class CreateVenue extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            venue_name: '',
            city: '',
            about: '',
            img: ''
         }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createVenue(this.state)
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
                            <h2>Enter Venue Info</h2>
                            <form onSubmit={this.handleSubmit}>

                            <div class="row mb-3 mt-3">
                                <label for="username">Venue Name</label>
                                <input class="form-control" name="venue_name" onChange={this.handleChange} value={this.state.venue_name} placeholder='Venue Name'/>
                            </div>
                            <div class="row mb-3 mt-3">
                                <label for="username">City</label>
                                <input class="form-control" name="city" onChange={this.handleChange} value={this.state.city} placeholder='City'/>
                            </div>
                            <div class="row mb-3 mt-3">
                                <label for="username">Add Profile Image</label>
                                <input class="form-control" name="img" onChange={this.handleChange} value={this.state.img} placeholder='Add Profile Image'/>
                            </div>
                            <div class="row mb-3 mt-3">
                                <label for="username">About The Venue</label>
                                <input class="form-control" name="about" onChange={this.handleChange} value={this.state.about} placeholder='Add About The Venue'/>
                            </div>
                                <button class="btn btn-primary" type="submit">Submit</button>
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
 
export default CreateVenue;