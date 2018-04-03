import React, { Component } from 'react';
import SearchBar from '../Components/searchbar';
import './Styles/results.css';


class Results extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>RESULTS</h1>
        <SearchBar />
      </div>
    );
  }
}

export default Results;
