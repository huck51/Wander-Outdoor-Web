import React, { Component } from 'react';
import { Button, InputGroup, FormGroup, FormControl } from 'react-bootstrap';
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
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div>
        <form className="sbForm" onSubmit={this.handleSubmit}>
          <FormGroup>
            <InputGroup>
              <FormControl
                className="inputStyle"
                type="text"
                placeholder="Search..."
                value={this.state.value}
                onChange={this.handleChange}
              />
              <InputGroup.Button>
                <Link to={`/results/${this.state.value}`}>
                  <Button type="submit" className="searchSubmit btn-lg">
                    <i className="fas fa-search" />
                  </Button>
                </Link>
              </InputGroup.Button>
            </InputGroup>
          </FormGroup>
        </form>
      </div>
    );
  }
}

export default SearchBar;
