import React, { Component } from 'react';
import axios from 'axios';
import './Styles/addGuide.css';


class AddGuide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      companyName: '',
      companyCode: '',
      email: '',
      phone: '',
      DOB: '',
      username: '',
      password: '',
      verifyPW: '',
      bio: '',
      certs: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      companyName,
      companyCode,
      email,
      phone,
      DOB,
      username,
      password,
      bio,
      certs,
    } = this.state;
    const newGuide = {
      firstName,
      lastName,
      companyName,
      companyCode,
      email,
      phone,
      DOB,
      username,
      password,
      bio,
      certs,
    };
    this.setState({
      firstName: '',
      lastName: '',
      companyName: '',
      companyCode: '',
      email: '',
      phone: '',
      DOB: '',
      username: '',
      password: '',
      bio: '',
      certs: '',
    });
    axios.post('https://fierce-ridge-55021.herokuapp.com/signup/guide', newGuide)
      .then(() => {
        window.location = '/guides';
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>Add Guide</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <input
            name="companyName"
            type="text"
            placeholder="Company Name"
            value={this.state.companyName}
            onChange={this.handleChange}
          />
          <input
            name="companyCode"
            type="text"
            placeholder="Company Code"
            value={this.state.companyCode}
            onChange={this.handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="E-mail"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            name="phone"
            type="text"
            placeholder="Phone"
            value={this.state.phone}
            onChange={this.handleChange}
          />
          <input
            name="DOB"
            type="date"
            placeholder="Date of Birth"
            value={this.state.DOB}
            onChange={this.handleChange}
          />
          <input
            name="username"
            type="text"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <input
            name="verifyPW"
            type="password"
            placeholder="Verify Password"
            value={this.state.verifyPW}
            onChange={this.handleChange}
          />
          <input
            name="bio"
            type="textarea"
            placeholder="Bio..."
            value={this.state.bio}
            onChange={this.handleChange}
          />
          <input
            name="certs"
            type="textarea"
            placeholder="List Certifications..."
            value={this.state.certs}
            onChange={this.handleChange}
          />
          <button type="submit" onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddGuide;
