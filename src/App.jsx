import React, { Component } from 'react';
import axios from 'axios';
import Auth from './auth';
import Footer from './Components/footer';
import Main from './main';
import NavigationBar from './Components/navigationbar';
import bouldering from './Images/BackgroundImages/bouldering.jpg';
import canyonRun from './Images/BackgroundImages/canyonRun.jpg';
import './App.css';

const fallRun = 'https://res.cloudinary.com/wander-outdoor/image/upload/v1529539222/Wander/DSC_0076-2.jpg';
const grayTightRope = 'https://res.cloudinary.com/wander-outdoor/image/upload/v1529538924/Wander/grayTightRope.jpg';
const hangingGear = 'https://res.cloudinary.com/wander-outdoor/image/upload/v1529538889/Wander/hangingGear.jpg';
const heidiClimb = 'https://res.cloudinary.com/wander-outdoor/image/upload/v1529538806/Wander/heidiClimb.jpg';
const sunsetClimb = 'https://res.cloudinary.com/wander-outdoor/image/upload/v1529538844/Wander/sunsetClimb.jpg';
const surfing = 'https://res.cloudinary.com/wander-outdoor/image/upload/v1529538872/Wander/surfing.jpg';
const deepSnowHike = 'https://res.cloudinary.com/wander-outdoor/image/upload/v1530098328/Wander/deepSnowHike.jpg';

const backgroundArray = [bouldering, canyonRun, deepSnowHike, grayTightRope,
  hangingGear, sunsetClimb, surfing, heidiClimb, fallRun];
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
    const token = process.env.REACT_APP_TOKEN;
    const email = localStorage.getItem('email');
    console.log(email);
    const options = {
      qs: { q: `email: ${email}`, search_engine: 'v3' },
      headers: { authorization: `Bearer ${token}` },
    };

    axios.get('https://wander-outdoor.auth0.com/api/v2/users', options)
      .then((response) => {
        const data = response.data[0];
        console.log(data);
        const fierceIce = process.env.REACT_APP_CAT.concat(data.identities[0].user_id);
        localStorage.setItem('fierceIce', fierceIce);
        const secondaryOptions = {
          id: fierceIce,
          email: data.email,
        };
        axios.post('https://fierce-ridge-55021.herokuapp.com/signup-newuser', secondaryOptions)
          .then((response) => {
            alert('success');
            console.log(response);
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <div style={window.location.pathname === '/' ? stylz : stile}>
        <div className={window.location.pathname === '/' ? 'shadeLayer' : ''}>
          <div id="body">
            <NavigationBar loggedIn={this.state.loggedIn} user={this.state.user} />
            <Main />
          </div>
          <div id="footer">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}


export default App;
