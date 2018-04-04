import React, { Component } from 'react';
import './Styles/signUpGuides.css';


class SignUpGuides extends Component {
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
    };

    this.handleFNChange = this.handleFNChange.bind(this);
    this.handleLNChange = this.handleLNChange.bind(this);
    this.handleCompanyNameChange = this.handleCompanyNameChange.bind(this);
    this.handleCompanyCodeChange = this.handleCompanyCodeChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleDOBChange = this.handleDOBChange.bind(this);
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
  handleCompanyNameChange(e) {
    this.setState({companyName: e.target.companyName});
  }
  handleCompanyCodeChange(e) {
    this.setState({companyCode: e.target.companyCode});
  }
  handleEmailChange(e) {
    this.setState({email: e.target.email});
  }
  handlePhoneChange(e) {
    this.setState({phone: e.target.phone});
  }
  handleDOBChange(e) {
    this.setState({DOB: e.target.DOB});
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
        <h1>Guide SignUp</h1>
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
            name="companyName"
            type="text"
            placeholder="Company Name"
            value={this.state.companyName}
            onChange={this.handleCompanyNameChange} />
          <input
            name="companyCode"
            type="text"
            placeholder="Company Code"
            value={this.state.companyCode}
            onChange={this.handleCompanyCodeChange} />
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
            name="DOB"
            type="date"
            placeholder="Date of Birth"
            value={this.state.DOB}
            onChange={this.handleDOBChange} />
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

export default SignUpGuides;
