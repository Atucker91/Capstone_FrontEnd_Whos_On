import React, {Component} from 'react';


class CreateBand extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            band_name: '',
            song_to_display: '',
         }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createBand(this.state)
    }

    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name="band_name" onChange={this.handleChange} value={this.state.band_name} placeholder='Band Name'/>
                    <input name="song_to_display" onChange={this.handleChange} value={this.state.song_to_display} placeholder='Add Spoitfy Link'/>
                    <button type="submit">Submit</button>
                </form>
            </div> 
        );
    }
}
 
export default CreateBand;