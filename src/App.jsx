import React, { Component } from 'react';
import axios from 'axios';
import Auth from './auth';
import NavigationBar from './Components/navigationbar';
import Main from './main';
import Footer from './Components/footer';
import bouldering from './Images/BackgroundImages/bouldering.jpg';
import canyonRun from './Images/BackgroundImages/canyonRun.jpg';
import deepSnowHike from './Images/BackgroundImages/deepSnowHike.jpg';
import grayTightRope from './Images/BackgroundImages/grayTightRope.jpg';
import hangingGear from './Images/BackgroundImages/hangingGear.jpg';
import sunsetClimb from './Images/BackgroundImages/sunsetClimb.jpg';
import surfing from './Images/BackgroundImages/surfing.jpg';
import heidiClimb from './Images/BackgroundImages/heidiClimb.jpg';
import './App.css';


const backgroundArray = [bouldering, canyonRun, deepSnowHike, grayTightRope,
  hangingGear, sunsetClimb, surfing, heidiClimb];
const rando = Math.floor(Math.random() * backgroundArray.length);
const stylz = {
  backgroundImage: `url(${backgroundArray[rando]})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '100vh',
};

const stile = { backgroundColor: 'white' };


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      user: {
        username: '',
        email: '',
      },
    };
  }

  componentWillMount() {
    const auth = new Auth();
    const loggedIn = auth.isAuthenticated();
    if (loggedIn !== this.state.loggedIn) {
      this.setState({
        loggedIn,
        user: {
          username: localStorage.getItem('nickname'),
          email: localStorage.getItem('email'),
        },
      });
    }
  }

  componentDidMount() {
    const token = localStorage.getItem('access_token');
    const options = {
      qs: { q: 'name:"jane smith"', search_engine: 'v3' },
      headers: { authorization: `Bearer ${token}` },
    };
    axios.get('https://wander-outdoor.auth0.com/api/v2/users', options)
      .then((response) => {
        console.log(response);
        this.setState({ response });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <div style={window.location.pathname === '/' ? stylz : stile}>
        <div id="body">
          <NavigationBar loggedIn={this.state.loggedIn} user={this.state.user} />
          <Main />
        </div>
        <div id="footer">
          <Footer />
        </div>
      </div>
    );
  }
}


export default App;
