import React, { Component } from 'react';
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

const stile = { backgroundColor: 'rgba(104,131,191,1)' };


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
      user: {
        firstName: 'Evan',
        typeOfUser: '',
      },
    };
  }

  render() {
    return (
      <div style={window.location.pathname === '/' ? stylz : stile}>
        {console.log(window.location)}
        <div id="body">
          <NavigationBar loggedIn={this.state.loggedIn} user={this.state.user}/>
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
