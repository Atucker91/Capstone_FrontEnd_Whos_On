import './App.css';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      user: {}
    }
  }

  componentDidMount() {
    const jwt = localStorage.getItem('token');
    try{
      const user = jwtDecode(jwt);
      this.setState({
        user
      });
    } catch {
  
    }
  }   
  
  render() { 

    const user = this.state.user

    return ( 
      <div>
        <Navigation user={user} />
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
            <Route path='/registrer' component={RegisterScreen} />
            <Route path='/login' component={LoginScreen} />
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
