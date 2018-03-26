import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
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
          <FormGroup bsSize="large">
            <FormControl
            type="text"
            placeholder="Search..."
            value={this.state.value}
            onChange={this.handleChange}/>
          </FormGroup>
        </form>
      </div>
    );
  }
}

export default SearchBar;
