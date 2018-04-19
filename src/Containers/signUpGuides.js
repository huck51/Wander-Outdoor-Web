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
      bio: '',
      certs: '',
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
    this.handleBioChange = this.handleBioChange.bind(this);
    this.handleCertsChange = this.handleCertsChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFNChange(e) {
    this.setState({firstName: e.target.value});
  }
  handleLNChange(e) {
    this.setState({lastName: e.target.value});
  }
  handleCompanyNameChange(e) {
    this.setState({companyName: e.target.value});
  }
  handleCompanyCodeChange(e) {
    this.setState({companyCode: e.target.value});
  }
  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }
  handlePhoneChange(e) {
    this.setState({phone: e.target.value});
  }
  handleDOBChange(e) {
    this.setState({DOB: e.target.value});
  }
  handleUserChange(e) {
    this.setState({username: e.target.value});
  }
  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }
  handleVerifyPWChange(e) {
    this.setState({verifyPW: e.target.value});
  }
  handleBioChange(e) {
    this.setState({bio: e.target.value});
  }
  handleCertsChange(e) {
    this.setState({certs: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Guide SignUp</h1>
        <form onSubmit={this.handleSubmit}>
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
          <input
            name="bio"
            type="textarea"
            placeholder="Bio..."
            value={this.state.bio}
            onChange={this.handleBioChange} />
          <input
            name="certs"
            type="textarea"
            placeholder="List Certifications..."
            value={this.state.certs}
            onChange={this.handleCertsChange} />
          <button type="submit" onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default SignUpGuides;
