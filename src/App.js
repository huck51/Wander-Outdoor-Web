import React, { Component } from 'react';
import logo from './Images/WanderLogo.png';
import SearchBar from './Components/searchbar';
import NavigationBar from './Components/navigationbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <h2>Where will you wander?</h2>
        <SearchBar id="LPSearch" />

      </div>
    );
  }
}

export default App;
