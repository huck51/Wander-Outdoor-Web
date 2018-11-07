import React, { Component } from 'react';
import axios from 'axios';
import Auth from './auth';
import Footer from './Components/footer';
import Main from './main';
import MegaContext from './Components/megaContext';
import NavigationBar from './Components/navigationbar';
import './App.css';

const fallRun = 'https://res.cloudinary.com/wander-outdoor/image/upload/c_scale,q_60,w_1600/v1529539222/Wander/DSC_0076-2.webp';
const grayTightRope = 'https://res.cloudinary.com/wander-outdoor/image/upload/c_scale,q_60,w_1600/v1529538924/Wander/grayTightRope.webp';
const hangingGear = 'https://res.cloudinary.com/wander-outdoor/image/upload/c_scale,q_60,w_1600/v1529538889/Wander/hangingGear.webp';
const heidiClimb = 'https://res.cloudinary.com/wander-outdoor/image/upload/c_scale,q_60,w_1600/v1529538806/Wander/heidiClimb.webp';
const sunsetClimb = 'https://res.cloudinary.com/wander-outdoor/image/upload/c_scale,q_60,w_1600/v1529538844/Wander/sunsetClimb.webp';
const surfing = 'https://res.cloudinary.com/wander-outdoor/image/upload/c_scale,q_60,w_1600/v1529538872/Wander/surfing.webp';
const deepSnowHike = 'https://res.cloudinary.com/wander-outdoor/image/upload/c_scale,q_60,w_1600/v1530098328/Wander/deepSnowHike.webp';
const bouldering = 'https://res.cloudinary.com/wander-outdoor/image/upload/c_scale,w_1600/v1541621996/Wander/bouldering-min.webp';
const canyonRun = 'https://res.cloudinary.com/wander-outdoor/image/upload/c_scale,w_1600/v1541621984/Wander/canyonRun-min.webp';

const backgroundArray = [bouldering, canyonRun, deepSnowHike, grayTightRope, hangingGear, sunsetClimb, surfing, heidiClimb, fallRun];
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
    var token;
    axios.get('https://fierce-ridge-55021.herokuapp.com/testy-puller')
    .then(initResponse => {
      console.log(initResponse.data);
      token = initResponse.data.access_token;
      const email = localStorage.getItem('email');
      if (!email) {
        return;
      }
      const eMarr = email.split('');
      for (let i = 0; i < eMarr.length; i++) {
        if (eMarr[i] === '@') {
          eMarr[i] = '%40';
          break;
        }
      }
      const webmail = eMarr.join('');
      const options = {
        headers: { authorization: `Bearer ${token}` },
      };
      axios.get(`https://wander-outdoor.auth0.com/api/v2/users-by-email?email=${webmail}`, options)
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
            .then((secondaryResponse) => {
              console.log(secondaryResponse);
              localStorage.setItem('name', secondaryResponse.data.name);
            })
            .catch((err) => {
              console.error(err);
            });
        })
        .catch((err) => {
          console.error(err);
        });
    })
    .catch(error => {
      console.log(error);
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
