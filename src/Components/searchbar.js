import React, { Component } from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap';
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
          <Button type="submit">
            <i class="fas fa-search"></i>
          </Button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
