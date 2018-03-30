import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Styles/searchbar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }
  handleSubmit(e) {
    <Link to='/results'></Link>
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
          type="text"
          placeholder="Search..."
          value={this.state.value}
          onChange={this.handleChange}>
          </input>
          <Button type="submit">
            <i className="fas fa-search"></i>
          </Button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
