import React, {Component} from 'react';


class CreateVenue extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            venue_name: '',
            city: '',
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
                <form onSubmit={this.handleSubmit}>
                    <input name="venue_name" onChange={this.handleChange} value={this.state.venue_name} placeholder='Venue Name'/>
                    <input name="city" onChange={this.handleChange} value={this.state.city} placeholder='City'/>
                    <button type="submit">Submit</button>
                </form>
            </div> 
        );
    }
}
 
export default CreateVenue;