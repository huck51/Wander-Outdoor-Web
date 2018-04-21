import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Styles/searchbar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    axios.get('https://fierce-ridge-55021.herokuapp.com/results');
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Search..."
            value={this.state.value}
            onChange={this.handleChange}
          />
          <Link to="/results">
            <Button type="submit">
              <i className="fas fa-search" />
            </Button>
          </Link>
        </form>
      </div>
    );
  }
}

export default SearchBar;
