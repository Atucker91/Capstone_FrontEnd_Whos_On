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




class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      userData:null
    }
  }

  async componentDidMount() {
    const jwt = localStorage.getItem('token');
    try{
      console.log("ComponentDidMount Inside Try")
      const user = jwtDecode(jwt);
      let response = await axios.get(`http://127.0.0.1:8000/api/auth/get_user/${user.user_id}/`, {headers: {Authorization: 'Bearer ' + jwt}})
      console.log(response.data)
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

  logoutUser = async() =>{
    localStorage.removeItem('token');
    window.location = '/login'
  }





  
  render() { 

    const user = this.state.user;
    console.log("Inside Render", user);

    return ( 
      <div>
        <NavigationBar user={this.state.userData} logoutUser={this.logoutUser}/>
        <div>
          <Switch>
            <Route path='/profile' render={props => {
                if (!localStorage.getItem("token")){
                  console.log("Redirecting to Login")
                  return <Redirect to='/login' />;
                } else {
                  if(this.state.userData != null){
                    console.log("Redirecting to Profile")
                    return <ProfileScreen {...props} user={this.state.userData} />
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
