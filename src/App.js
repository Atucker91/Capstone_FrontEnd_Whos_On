import axios from 'axios';
import React, {Component} from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom'
import jwtDecode from "jwt-decode";
import NavigationBar from './Components/NavigationBar/NavigationBar';
import LandingScreen from './Components/LandingScreen/LandingScreen';
import LoginScreen from './Components/LoginScreen/LoginScreen';
import Logout from './Components/Logout/Logout';
import NotFound from './Components/NotFound/NotFound';
import ProfileScreen from './Components/ProfileScreen/ProfileScreen';
import RegisterScreen from './Components/RegisterScreen/RegisterScreen';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      
    }
  }

  componentDidMount() {
    const jwt = localStorage.getItem('token');
    try{
      const user = jwtDecode(jwt);
      this.setState({
        user
      });
    } catch(err) {
      console.log("ComponentDidMount - user not found", err);
    }
  }   




  registerUser = async(newUser) =>{
    const response = await axios.post(`http://127.0.0.1:8000/api/auth/register/`, newUser);
    window.location = '/login';
  }


  loginUser = async(userCredentials) =>{
    const response = await axios.post(`http://127.0.0.1:8000/api/auth/login/`, userCredentials);
    try{
      localStorage.setItem('token', response.data.access);
      window.location = '/profile';
    }
    catch(err){
      console.log("LoginUser - user not found", err);
    }
  }


  
  render() { 

    const user = this.state.user;
    console.log("Inside Render", user);

    return ( 
      <div>
        <NavigationBar user={user} />
        <div>
          <Switch>
            <Route path='/profile' render={props => {
                if (!user){
                  return <Redirect to='/login' />;
                } else {
                  return <ProfileScreen {...props} user={user} />
                }
              }}
            />
            <Route path='/register'  render={props =>  <RegisterScreen {...props} registerUser={this.registerUser} /> } />
            <Route path='/login' render={props =>  <LoginScreen {...props} loginUser={this.loginUser} /> } />
            <Route path='/logout' component={Logout} />
            <Route path='/not-found' component={NotFound} />
            <Route path='/' component={LandingScreen} />
            <Redirect to='/not-found' />
          </Switch>
        </div>
      </div>
     );
  }
}
 
export default App;
