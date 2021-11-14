import React, {useState} from 'react';

const BandProfileScreen = (props) => {

    const [venue_name, setVenueName] = useState();
    const [date, setDate] = useState();
    let venueId = 1;

    const handleChangeVenue = (event) => {
        
        setVenueName(event.target.value)
    }

    const handleChange = (event) => {
        setDate(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("venue name:", venue_name)
        console.log("date:", date)
        console.log("band id:", props.loggedInBand.id)


        for(let i = 0; i < props.venues.length; i++)
        {
            if(props.venues[i].venue_name == venue_name)
            {
                venueId = props.venues[i].id
            }
        }

        console.log("venue id:", venueId)

        let show = {
            band_id:props.loggedInBand.id,
            venue_id:venueId,
            date:date
        }
        props.addShow(show)
    }

    return (
        <div>
            <div>
                <h1>Band ProfileScreen {props.user.username}</h1>
                <h1>{props.loggedInBand.band_name}</h1>
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
                    <input name="venue_name" onChange={handleChangeVenue} value={venue_name} placeholder='Venue Name'/>
                    <input name="date" onChange={handleChange} value={date} placeholder='Date'/>
                    <button type="submit">Add</button>
                </form>
            </div> 

        </div>
    )
}

export default BandProfileScreen