import React, { Component } from 'react';
import SearchBar from '../Components/searchbar';
import '../App.css';

class Home extends Component {
  render() {
    return (
      <div>
        <h2 id="topQ">Where will you wander?</h2>
        <SearchBar id="LPSearch" />
        <h2 id="bottomQ">What will you do?</h2>

      </div>
    );
  }
}

export default Home;
