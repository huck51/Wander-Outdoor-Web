import React from 'react';
import { Button, InputGroup, FormGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Styles/searchbar.css';

const SearchBar = ({ val, change, submit }) => (
  <div>
    <form className="sbForm" onSubmit={submit}>
      <FormGroup>
        <InputGroup>
          <FormControl
            className="inputStyle"
            type="text"
            placeholder="Search..."
            value={val}
            onChange={change}
          />
          <InputGroup.Button>
            <Link to={`/results/${val ? val : 'Everything'}`}>
              <Button
                type="submit"
                className="searchSubmit btn-lg"
                onClick={submit}
                >
                <i className="fas fa-search" />
              </Button>
            </Link>
          </InputGroup.Button>
        </InputGroup>
      </FormGroup>
    </form>
  </div>
);

export default SearchBar;
