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
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  render() {
    return (
      <div>
        <form>
          <input
          type="text"
          placeholder="Search..."
          value={this.state.value}
          onChange={this.handleChange}>
          </input>
          <Link to='/results'>
            <Button type="submit">
              <i className="fas fa-search"></i>
            </Button>
          </Link>
        </form>
      </div>
    );
  }
}

export default SearchBar;
