import React, { Component } from 'react';
import logo from './Images/WanderLogo.png';
import SearchBar from './Components/searchbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Wander Outdoor</h1>
        </header>
        <SearchBar />

      </div>
    );
  }
}

export default App;
