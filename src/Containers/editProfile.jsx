import React, { Component } from 'react';
import { FormGroup, HelpBlock, Radio } from 'react-bootstrap';
import axios from 'axios';
import FieldGroup from '../Components/fieldGroup';
import './Styles/editProfile.css';


class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        firstName: '',
        lastName: '',
        DOB: '',
        email: '',
        phone: '',
        roleGroup: 'explorer',
        explorer: true,
        guide: false,
        picture: null,
    };
  }

  componentDidMount() {
    const id = localStorage.getItem('id');
    axios.get('https://fierce-ridge-55021.herokuapp.com/find-user', id)
      .then((response) => {
        const {
          firstName,
          lastName,
          DOB,
          email,
          phone,
          roleGroup
        } = response.data;
        this.setState({
          firstName,
          lastName,
          DOB,
          email,
          phone,
          roleGroup,
        });
      })
      .catch((err) => {
        console.error(err);
      });
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
    const {
      firstName,
      lastName,
      DOB,
      email,
      phone,
      roleGroup
    } = this.state;
    const updateObject = {
      firstName,
      lastName,
      DOB,
      email,
      phone,
      roleGroup
    };
    axios.put('https://fierce-ridge-55021.herokuapp.com/update-profile', updateObject)
      .then((response) => {
        const {
          firstName,
          lastName,
          DOB,
          email,
          phone,
          roleGroup
        } = response.data;
        this.setState({
          firstName,
          lastName,
          DOB,
          email,
          phone,
          roleGroup,
        });
        alert('Successfully updated');
      })
      .catch((err) => {
        console.error(err);
      });
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
              name="firstName"
              type="text"
              label="First Name"
              placeholder="First Name"
              onChange={this.handleChange}
              value={this.state.test1}
            />
            <FieldGroup
              name="lastName"
              type="text"
              label="Last Name"
              placeholder="Last Name"
              onChange={this.handleChange}
              value={this.state.test2}
            />
            <FieldGroup
              name="DOB"
              type="date"
              label="Date of Birth"
              placeholder=""
              onChange={this.handleChange}
              value={this.state.test3}
            />
            <FieldGroup
              name="email"
              type="email"
              label="Preferred Email"
              placeholder="Ex: user@website.com"
              onChange={this.handleChange}
              value={this.state.test1}
            />
            <FieldGroup
              name="phone"
              type="text"
              label="Phone"
              placeholder="Ex: 612-911-5555"
              onChange={this.handleChange}
              value={this.state.test1}
            />
            <FieldGroup
              type="file"
              name="picture"
              value={this.state.picture}
              label="Profile Picture"
              placeholder="Select a file"
              onChange={this.handleChange}
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
