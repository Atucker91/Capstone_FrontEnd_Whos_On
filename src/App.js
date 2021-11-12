import axios from 'axios';
import React, {Component} from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom'
import jwtDecode from "jwt-decode";
import NavigationBar from './Components/NavigationBar/NavigationBar';
import LandingScreen from './Components/LandingScreen/LandingScreen';
import LoginScreen from './Components/LoginScreen/LoginScreen';
import ProfileScreen from './Components/ProfileScreen/ProfileScreen';
import RegisterScreen from './Components/RegisterScreen/RegisterScreen';
import BandRegisterScreen from './Components/RegisterScreen/BandRegisterScreen';
import VenueRegisterScreen from './Components/RegisterScreen/VenueRegisterScreen';
import BandLoginScreen from './Components/LoginScreen/BandLoginScreen';
import VenueLoginScreen from './Components/LoginScreen/VenueLoginScreen';
import CreateBand from './Components/Creation/CreateBand';
import CreateVenue from './Components/Creation/CreateVenue';
import BandProfileScreen from './Components/ProfileScreen/BandProfileScreen';
import VenueProfileScreen from './Components/ProfileScreen/VenueProfileScreen';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      userData:null,
      bands: [],
      venues: [],
      localBands: [],
      localVenues: [],
      followedBands: [],
      followedVenues: []
    }
  }

  async componentDidMount() {
    const jwt = localStorage.getItem('token');
    try{
      console.log("ComponentDidMount Inside Try")
      const user = jwtDecode(jwt);
      let response = await axios.get(`http://127.0.0.1:8000/api/auth/get_user/${user.user_id}/`, {headers: {Authorization: 'Bearer ' + jwt}})
      this.getBands(response.data, user)
      this.getVenues(response.data, user)
      console.log(response.data)
      console.log("ComponentDidMount End of Try")
      this.setState({
        user,
        userData:response.data
      });
    } catch(err) {
      console.log("ComponentDidMount - user not found", err);
    }
  }   

  registerUser = async(newUser) =>{
    const response = await axios.post(`http://127.0.0.1:8000/api/auth/register/`, newUser);
    window.location = '/login';
  }

  registerBand = async(newUser) =>{
    console.log("Inside registerBand", newUser)
    const response = await axios.post(`http://127.0.0.1:8000/api/auth/register/`, newUser);
    window.location = '/bandlogin';
  }

  registerVenue = async(newUser) =>{
    const response = await axios.post(`http://127.0.0.1:8000/api/auth/register/`, newUser);
    window.location = '/venuelogin';
  }

  loginUser = async(userCredentials) =>{
    console.log("First Line Inside LoginUser Function", userCredentials);
    try{
      const response = await axios.post(`http://127.0.0.1:8000/api/auth/login/`, userCredentials);
      localStorage.setItem('token', response.data.access);
      console.log("Inside LoginUser Function", response.data.access);
      window.location = '/profile';
    }
    catch(err){
      console.log("LoginUser - user not found", err);
    }
  }

  loginBand = async(userCredentials) =>{
    console.log("First Line Inside LoginUser Function", userCredentials);
    try{
      const response = await axios.post(`http://127.0.0.1:8000/api/auth/login/`, userCredentials);
      localStorage.setItem('token', response.data.access);
      console.log("Inside LoginUser Function", response.data.access);
      window.location = '/createBand';
    }
    catch(err){
      console.log("LoginUser - user not found", err);
    }
  }

  loginVenue = async(userCredentials) =>{
    console.log("First Line Inside LoginUser Function", userCredentials);
    try{
      const response = await axios.post(`http://127.0.0.1:8000/api/auth/login/`, userCredentials);
      localStorage.setItem('token', response.data.access);
      console.log("Inside LoginUser Function", response.data.access);
      window.location = '/createVenue';
    }
    catch(err){
      console.log("LoginUser - user not found", err);
    }
  }

  createBand = async(newBand) =>{
    const jwt = localStorage.getItem('token')
    const response = await axios.post(`http://127.0.0.1:8000/api/auth/create_band/`, newBand, {headers: {Authorization: 'Bearer ' + jwt}});
    window.location = '/profile';
  }

  createVenue = async(newVenue) =>{
    const jwt = localStorage.getItem('token')
    const response = await axios.post(`http://127.0.0.1:8000/api/auth/create_venue/`, newVenue, {headers: {Authorization: 'Bearer ' + jwt}});
    window.location = '/profile';
  }

  getBands = async(user, userToken) =>{
    const response = await axios.get(`http://127.0.0.1:8000/api/auth/get_all_bands/`);
    
    this.setState({
      bands: response.data
    })
    this.getBandsByLocation(user, userToken)
  }

  getBandsByLocation = async(user, userToken) =>{

    let localBandsList = []

    for(let i = 0; i < this.state.bands.length; i++){
      
      const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?components=locality:${user.city}&key=AIzaSyDROj9-6ZjDGfBN-ErBlJqFQ3ODGRUYkRw`)
      
      if(this.state.bands[i].city == response.data.results[0].address_components[0].long_name){
        localBandsList.push(this.state.bands[i])
      }
    
    }
    this.setState({
      localBands:localBandsList
    });
    this.getFollowedbands(userToken)
  }

  getVenues = async(user, userToken) =>{
    const response = await axios.get(`http://127.0.0.1:8000/api/auth/get_all_venues/`);
    this.setState({
      venues: response.data
    })
    this.getVenuesByLocation(user, userToken)
  }

  getVenuesByLocation = async(user, userToken) =>{

    let localVenuesList = []

    for(let i = 0; i < this.state.venues.length; i++){
      
      const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?components=locality:${user.city}&key=AIzaSyDROj9-6ZjDGfBN-ErBlJqFQ3ODGRUYkRw`)
      
      if(this.state.venues[i].city == response.data.results[0].address_components[0].long_name){
        localVenuesList.push(this.state.venues[i])
      }
    
    }
    this.setState({
      localVenues:localVenuesList
    });
    this.getFollowedvenues(userToken)
  }

  addBandToFollow = async(band) =>{
    let newObject = {band_id: band.id}
    const jwt = localStorage.getItem('token')
    const response = await axios.post(`http://127.0.0.1:8000/api/auth/follow_band/`, newObject, {headers: {Authorization: 'Bearer ' + jwt}});
    window.location = '/profile';
  }

  addVenueToFollow = async(venue) =>{
    let newObject = {venue_id: venue.id}
    const jwt = localStorage.getItem('token')
    const response = await axios.post(`http://127.0.0.1:8000/api/auth/follow_venue/`, newObject, {headers: {Authorization: 'Bearer ' + jwt}});
    window.location = '/profile';
  }

  getFollowedbands = async(user) =>{
    let newArray = this.state.localBands

    const jwt = localStorage.getItem('token')
    const response = await axios.get(`http://127.0.0.1:8000/api/auth/get_followed_bands/${user.user_id}/`, {headers: {Authorization: 'Bearer ' + jwt}});
    
    for(let i = 0; i < this.state.localBands.length; i++)
    {
      for(let x = 0; x < response.data.length; x++)
      {
        if(this.state.localBands[i].id == response.data[x].id)
        {
          newArray.splice(i, 1)
        }
      }
    }

    this.setState({
      followedBands: response.data,
      localBands: newArray
    })
  }

  getFollowedvenues = async(user) =>{
    let newArray = this.state.localVenues

    const jwt = localStorage.getItem('token')
    const response = await axios.get(`http://127.0.0.1:8000/api/auth/get_followed_venues/${user.user_id}/`, {headers: {Authorization: 'Bearer ' + jwt}});
    
    for(let i = 0; i < this.state.localVenues.length; i++)
    {
      for(let x = 0; x < response.data.length; x++)
      {
        if(this.state.localVenues[i].id == response.data[x].id)
        {
          newArray.splice(i, 1)
        }
      }
    }

    this.setState({
      followedVenues: response.data,
      localVenues: newArray
    })
  }

  // addShow = async(show) =>{

  // }

  logoutUser = async() =>{
    localStorage.removeItem('token');
    window.location = '/login'
  }





  
  render() { 

    const user = this.state.user;
    // console.log("Inside Render", user);

    return ( 
      <div>
        <NavigationBar user={this.state.userData} logoutUser={this.logoutUser}/>
        <div>
          <Switch>
            <Route path='/profile' render={props => {
                if (!localStorage.getItem("token")){
                  // console.log("Redirecting to Login")
                  return <Redirect to='/login' />;
                } else {
                  if(this.state.userData != null && this.state.userData.is_band == false && this.state.userData.is_venue == false){
                    // console.log("Redirecting to Profile")
                    return <ProfileScreen {...props} user={this.state.userData} bands={this.state.localBands} venues={this.state.localVenues} 
                    followedBands={this.state.followedBands} followedVenues={this.state.followedVenues} addBandToFollow={this.addBandToFollow} 
                    addVenueToFollow={this.addVenueToFollow}/>
                  }
                  else if(this.state.userData != null && this.state.userData.is_band)   {
                    return <BandProfileScreen {...props} user={this.state.userData} bands={this.state.localBands} venues={this.state.localVenues}/>
                  }  
                  else if(this.state.userData != null && this.state.userData.is_venue){
                    return <VenueProfileScreen {...props} user={this.state.userData} bands={this.state.localBands} venues={this.state.localVenues}/>
                  }       
                }
              }}
            />
            <Route path='/register'  render={props =>  <RegisterScreen {...props} registerUser={this.registerUser} /> } />
            <Route path='/bandregister'  render={props =>  <BandRegisterScreen {...props} registerUser={this.registerBand} /> } />
            <Route path='/venueregister'  render={props =>  <VenueRegisterScreen {...props} registerUser={this.registerVenue} /> } />
            <Route path='/login' render={props =>  <LoginScreen {...props} loginUser={this.loginUser} /> } />
            <Route path='/bandlogin' render={props =>  <BandLoginScreen {...props} loginUser={this.loginBand} /> } />
            <Route path='/venuelogin' render={props =>  <VenueLoginScreen {...props} loginUser={this.loginVenue} /> } />
            <Route path='/createBand' render={props =>  <CreateBand {...props} createBand={this.createBand} /> } />
            <Route path='/createVenue' render={props =>  <CreateVenue {...props} createVenue={this.createVenue} /> } />
            <Route path='/' component={LandingScreen} />
          </Switch>
        </div>
      </div>
     );
  }
}
 
export default App;
