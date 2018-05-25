import React, { Component } from 'react';
import { FormGroup, HelpBlock, Radio } from 'react-bootstrap';
import FieldGroup from '../Components/fieldGroup';
import './Styles/editProfile.css';


class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  handleSubmit = () => {

  }

  render() {
    return (
      <div>
        <h1>EDIT PROFILE</h1>
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Radio inline>Guide</Radio>
              <Radio inline>Expolorer</Radio>
              <HelpBlock>*Please only select "Guide" if you are a certified guide currently employed by a company</HelpBlock>
            </FormGroup>
            <FieldGroup
              type="text"
              label="Test 1"
              placeholder="Placeholder 1"
            />
            <FieldGroup
              type="text"
              label="Test 2"
              placeholder="Placeholder 2"
            />
            <FieldGroup
              type="text"
              label="Test 3"
              placeholder="Placeholder 3"
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
