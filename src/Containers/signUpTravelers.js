import React, { Component } from 'react';
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

    this.handleFNChange = this.handleFNChange.bind(this);
    this.handleLNChange = this.handleLNChange.bind(this);
    this.handleDOBChange = this.handleDOBChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleVerifyPWChange = this.handleVerifyPWChange.bind(this);
  }

  handleFNChange(e) {
    this.setState({firstName: e.target.firstName});
  }
  handleLNChange(e) {
    this.setState({lastName: e.target.lastName});
  }
  handleDOBChange(e) {
    this.setState({DOB: e.target.DOB});
  }
  handleEmailChange(e) {
    this.setState({email: e.target.email});
  }
  handlePhoneChange(e) {
    this.setState({phone: e.target.phone});
  }
  handleUserChange(e) {
    this.setState({username: e.target.username});
  }
  handlePasswordChange(e) {
    this.setState({password: e.target.password});
  }
  handleVerifyPWChange(e) {
    this.setState({verifyPW: e.target.verifyPW});
  }

  render() {
    return (
      <div>
        <h1>Traveler SignUp</h1>
        <form>
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={this.handleFNChange} />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={this.handleLNChange} />
          <input
            name="DOB"
            type="date"
            placeholder="Date of Birth"
            value={this.state.DOB}
            onChange={this.handleDOBChange} />
          <input
            name="email"
            type="email"
            placeholder="E-mail"
            value={this.state.email}
            onChange={this.handleEmailChange} />
          <input
            name="phone"
            type="number"
            placeholder="Phone"
            value={this.state.phone}
            onChange={this.handlePhoneChange} />
          <input
            name="username"
            type="text"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleUserChange} />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handlePasswordChange} />
          <input
            name="verifyPW"
            type="password"
            placeholder="Verify Password"
            value={this.state.verifyPW}
            onChange={this.handleVerifyPWChange} />
        </form>
      </div>
    );
  }
}

export default SignUpTravelers;
