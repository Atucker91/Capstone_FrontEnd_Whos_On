import React, {useState} from 'react';

const VenueProfileScreen = (props) => {

    const [band_name, setBandName] = useState();
    const [date, setDate] = useState();
    let bandId = 1;

    const handleChangeBand = (event) => {
        
        setBandName(event.target.value)
    }

    const handleChange = (event) => {
        setDate(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("band name:", band_name)
        console.log("date:", date)
        console.log("venue id:", props.loggedInVenue.id)


        for(let i = 0; i < props.bands.length; i++)
        {
            if(props.bands[i].band_name == band_name)
            {
                bandId = props.bands[i].id
            }
        }

        console.log("band id:", bandId)

        let show = {
            band_id:bandId,
            venue_id:props.loggedInVenue.id,
            date:date
        }
        props.addShow(show)
    }

    return (
        <div>
            <div>
                <h1>Venue ProfileScreen {props.user.username}</h1>
                <h1>{props.loggedInVenue.venue_name}</h1>
            </div>
        
            <h2>Schedule</h2>
            <div>
                <ul>
                    {props.allSchedule.map((show)=> (
                        <div>
                            <li>Date:{show.date} Band:{show.band_name} Venue:{show.venue_name}</li>
                        </div>
                    ))}
                </ul>
            </div>

            <div>
                <h2>Add Show</h2>
                <form onSubmit={handleSubmit}>
                    <input name="band_name" onChange={handleChangeBand} value={band_name} placeholder='Band Name'/>
                    <input name="date" onChange={handleChange} value={date} placeholder='Date'/>
                    <button type="submit">Add</button>
                </form>
            </div> 

        </div>
    )
}

export default VenueProfileScreen