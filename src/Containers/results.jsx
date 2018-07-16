import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from '../Components/searchbar';
import './Styles/results.css';


class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }

  componentDidMount() {
    const { params } = this.props.match;
    axios.get(`https://fierce-ridge-55021.herokuapp.com/results/${params}`)
      .then((result) => {
        this.setState({
          results: [...result.data],
        });
      })
      .catch((err) => {
        console.log(err);
      });
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
