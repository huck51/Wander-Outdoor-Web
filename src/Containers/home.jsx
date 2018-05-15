import React, { Component } from 'react';
import bouldering from '../Images/BackgroundImages/bouldering.jpg';
import SearchBar from '../Components/searchbar';
import './Styles/home.css';
import '../App.css';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="sbRug">
          <h2 id="topQ">Where will you wander?</h2>
          <SearchBar id="LPSearch" />
          <h2 id="bottomQ">What will you do?</h2>
        </div>
      </div>
    );
  }
}

export default Home;
