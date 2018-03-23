import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

class SearchBar extends Component {
  constructor(props) {
    super(props);
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
