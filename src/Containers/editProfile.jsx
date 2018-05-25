import React, { Component } from 'react';
import { FormGroup, HelpBlock, Radio } from 'react-bootstrap';
import axios from 'axios';
import FieldGroup from '../Components/fieldGroup';
import './Styles/editProfile.css';


class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        test1: '',
        test2: '',
        test3: '',
        roleGroup: 'explorer',
        explorer: true,
        guide: false,
    };
  }

  handleClick = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      explorer: !this.state.explorer,
      guide: !this.state.guide,
    });
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.put('https://fierce-ridge-55021.herokuapp.com/update-profile');
  }

  render() {
    return (
      <div>
        <h1>EDIT PROFILE</h1>
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Radio
                onClick={this.handleClick}
                value="guide"
                name="roleGroup"
                inline
                checked={this.state.guide}
                >Guide</Radio>
              <Radio
                onClick={this.handleClick}
                value="explorer"
                name="roleGroup"
                inline
                checked={this.state.explorer}
                >Expolorer</Radio>
              <HelpBlock>*Please only select "Guide" if you are a certified guide currently employed by a company</HelpBlock>
            </FormGroup>
            <FieldGroup
              name="test1"
              type="text"
              label="Test 1"
              placeholder="Placeholder 1"
              onChange={this.handleChange}
              value={this.state.test1}
            />
            <FieldGroup
              name="test2"
              type="text"
              label="Test 2"
              placeholder="Placeholder 2"
              onChange={this.handleChange}
              value={this.state.test2}
            />
            <FieldGroup
              name="test3"
              type="text"
              label="Test 3"
              placeholder="Placeholder 3"
              onChange={this.handleChange}
              value={this.state.test3}
            />
          <button
            className="epSaveBtn"
            type="submit"
            onClick={this.handleSubmit}
            >Save</button>
          </form>
        </div>
      </div>
    );
  }
}

export default EditProfile;
