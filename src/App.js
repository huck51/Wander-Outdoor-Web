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
        <h2 id="topQ">Where will you wander?</h2>
        <SearchBar id="LPSearch" />
        <h2 id="bottomQ">What will you do?</h2>

      </div>
    );
  }
}

export default App;
