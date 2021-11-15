import React, {useState} from 'react';

const BandProfileScreen = (props) => {

    const [venue_name, setVenueName] = useState();
    // const [date, setDate] = useState();
    const [month, setMonth] = useState();
    const [day, setDay] = useState();
    const [year, setYear] = useState();
    const [time, setTime] = useState();

    let venueId = 1;

    const handleChangeVenue = (event) => {
        
        setVenueName(event.target.value)
    }

    // const handleChangeDate = (event) => {
    //     setDate(event.target.value)
    // }

    const handleChangeMonth = (event) => {
        setMonth(event.target.value)
    }

    const handleChangeDay = (event) => {
        setDay(event.target.value)
    }

    const handleChangeYear = (event) => {
        setYear(event.target.value)
    }

    const handleChangeTime = (event) => {
        setTime(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("venue name:", venue_name)
        // console.log("date:", date)
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
            // date:date,
            month:month,
            day:day,
            year:year,
            time:time
        }
        props.addShow(show)
    }

    return (
        <div>
            <div>
                <h1>Band ProfileScreen {props.user.username}</h1>
                <h1>{props.loggedInBand.band_name}</h1>
                <img src="https://storage.googleapis.com/whos_on_bucket/band.jpg" alt="band photo" width="700" height="500"></img>
                <iframe src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3" width="500" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>

            <h2>Schedule</h2>
            <div>
                <ul>
                    {props.allSchedule.map((show)=> (
                        <div>
                            <li>Date:{show.day} {show.month} {show.time} Band:{show.band_name} Venue:{show.venue_name}</li>
                        </div>
                    ))}
                </ul>
            </div>

            <div>
                <h2>Add Show</h2>
                <form onSubmit={handleSubmit}>
                    <input name="venue_name" onChange={handleChangeVenue} value={venue_name} placeholder='Venue Name'/>
                    {/* <input name="date" onChange={handleChangeDate} value={date} placeholder='Date'/> */}
                    <input name="month" onChange={handleChangeMonth} value={month} placeholder='Month'/>
                    <input name="day" onChange={handleChangeDay} value={day} placeholder='Day'/>
                    <input name="year" onChange={handleChangeYear} value={year} placeholder='Year'/>
                    <input name="time" onChange={handleChangeTime} value={time} placeholder='Time'/>
                    <button type="submit">Add</button>
                </form>
            </div> 

        </div>
    )
}

export default BandProfileScreen