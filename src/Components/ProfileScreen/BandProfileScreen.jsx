import React, {useState} from 'react';
import './NonFanProfileView.css';

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
            <div class="row">
                <div class="col-1"></div>
                    <div class="col-10">
                        <div class="container mt-3 form">
                            <div class="row">
                                <h1>{props.loggedInBand.band_name}</h1>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <img class="img-fluid" src={props.loggedInBand.img} alt="band photo" ></img>
                                </div>
                                <div class="col pt-2 pb-2"> 
                                    <div class="row">
                                        <h2>City : {props.loggedInBand.city}</h2> 
                                        <h2>About</h2>
                                    </div>
                                    <div class="row">
                                        <p>{props.loggedInBand.about}</p>
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="row mt-5 mb-5">
                                <iframe src={props.loggedInBand.song_to_display} width="500" height="400" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                            </div>

                            <h2>Schedule</h2>
                            <div class="row">
                                
                                    {props.allSchedule.map((show)=> (
                                        <div class='col'>
                                            <h6>{show.day} {show.month} {show.time}</h6> Venue: {show.venue_name}
                                        </div>
                                    ))}
                                
                            </div>

                            <div class="row mt-3">
                                <h2>Add Show</h2>
                                <form  onSubmit={handleSubmit}>
                                    
                                    <div class="row">
                                            <div class="col">
                                                <label for="venue_name">Venue</label>
                                                <input class="form-control" name="venue_name" onChange={handleChangeVenue} value={venue_name} placeholder='Venue Name'/>
                                            </div>
                                            <div class="col">
                                                <label for="venue_name">Month</label>
                                                <input class="form-control" name="month" onChange={handleChangeMonth} value={month} placeholder='Month'/>
                                            </div>
                                            <div class="col">
                                                <label for="venue_name">Day</label>
                                                <input class="form-control" name="day" onChange={handleChangeDay} value={day} placeholder='Day'/>
                                            </div>
                                            <div class="col">
                                                <label for="venue_name">Year</label>
                                                <input class="form-control" name="year" onChange={handleChangeYear} value={year} placeholder='Year'/>
                                            </div>
                                            <div class="col">
                                                <label for="venue_name">Time</label>
                                                <input class="form-control" name="time" onChange={handleChangeTime} value={time} placeholder='Time'/>
                                            </div>
                                        
                                        <button class="btn btn-primary mt-2" type="submit">Add</button>
                                        
                                    </div>
                                    
                                </form>
                            </div> 
                        </div>
                    </div>
                <div class="col-1"></div>
            </div>
             
        </div>      
    )
}

export default BandProfileScreen