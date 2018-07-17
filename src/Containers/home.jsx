import React, { Component } from 'react';
import SearchBar from '../Components/searchbar';
import './Styles/home.css';
import '../App.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div>
        <div className="sbRug">
          <h2 id="topQ">Where will you wander?</h2>
          <SearchBar
            id="LPSearch"
            val={this.state.value}
            change={this.handleChange}
          />
          <h2 id="bottomQ">What will you do?</h2>
        </div>
      </div>
    );
  }
}

export default Home;
