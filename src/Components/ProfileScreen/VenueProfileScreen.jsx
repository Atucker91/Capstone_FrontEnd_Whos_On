import React, {useState} from 'react';
import './NonFanProfileView.css';

const VenueProfileScreen = (props) => {

    const [band_name, setBandName] = useState();
    const [date, setDate] = useState();
    const [month, setMonth] = useState();
    const [day, setDay] = useState();
    const [year, setYear] = useState();
    const [time, setTime] = useState();
    
    let bandId = 1;

    const handleChangeBand = (event) => {
        
        setBandName(event.target.value)
    }

    const handleChangeDate = (event) => {
        setDate(event.target.value)
    }

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
            date:date,
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
                            <h1>{props.loggedInVenue.venue_name}</h1>
                        </div>
                        <div class="row mb-5">
                            <div class="col">
                                <img class="img-fluid" src={props.loggedInVenue.img} alt="band photo" ></img>
                            </div>
                            <div class="col pt-2 pb-2"> 
                                <div class="row">
                                    <h2>City : {props.loggedInVenue.city}</h2>
                                    <h2>About</h2>
                                </div>   
                                <div class="row">
                                    <p>{props.loggedInVenue.about}</p>
                                </div>
                            </div>
                        </div>
                
                
            
        
            <h2>Schedule</h2>
            <div class="row">
                
                    {props.allSchedule.map((show)=> (
                        <div class='col'>
                            <h6>{show.day} {show.month} {show.time}</h6> Band:{show.band_name} 
                        </div>
                    ))}
                
            </div>

            <div class="row mt-3">
                <h2>Add Show</h2>
                <form onSubmit={handleSubmit}>
                    <div class="row">
                        <div class="col">
                            <label for="venue_name">Band</label>
                            <input class="form-control" name="band_name" onChange={handleChangeBand} value={band_name} placeholder='Band Name'/>
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

export default VenueProfileScreen