import React, { Component } from 'react';
import axios from 'axios';
import './Styles/signUpTravelers.css';


class SignUpTravelers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      DOB: '',
      email: '',
      phone: '',
      username: '',
      password: '',
      verifyPW: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value});
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      DOB,
      email,
      phone,
      username,
      password,
    } = this.state;
    const newTraveler = {
      firstName,
      lastName,
      DOB,
      email,
      phone,
      username,
      password,
    };
    this.setState({
      firstName: '',
      lastName: '',
      DOB: '',
      email: '',
      phone: '',
      username: '',
      password: '',
      verifyPW: '',
    });
    axios.post('https://fierce-ridge-55021.herokuapp.com/signup/traveler', newTraveler)
      .then(() => {
        window.location = '/';
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>Traveler SignUp</h1>
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
            name="DOB"
            type="date"
            placeholder="Date of Birth"
            value={this.state.DOB}
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
          <button type="submit" onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default SignUpTravelers;
