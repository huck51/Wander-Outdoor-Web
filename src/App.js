import React, { Component } from 'react';
import logo from './Images/WanderLogo.png';
import SearchBar from './Components/searchbar';
import NavigationBar from './Components/navigationbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <p>Where will you wander?
        </p>
        <SearchBar />

      </div>
    );
  }
}

export default App;
