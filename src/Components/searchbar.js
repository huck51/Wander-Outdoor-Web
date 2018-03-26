import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
import './Styles/searchbar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
  }
  render() {
    return (
      <div>
        <form>
          <FormGroup bsSize="large">
            <FormControl type="text" placeholder="Search..." />
          </FormGroup>
        </form>
      </div>
    );
  }
}

export default SearchBar;
