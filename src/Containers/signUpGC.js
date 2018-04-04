import React, { Component } from 'react';
import './Styles/signUpGC.css';


class SignUpGC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: '',
      companyAddress: '',
      companyPhone: '',
      contactName: '',
      jobTitle: '',
      contactPhone: '',
      contactEmail: '',
      password: '',
      verifyPW: '',
    };

    this.handleCompanyChange = this.handleCompanyChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleCompanyPhoneChange = this.handleCompanyPhoneChange.bind(this);
    this.handleContactNameChange = this.handleContactNameChange.bind(this);
    this.handleJobTitleChange = this.handleJobTitleChange.bind(this);
    this.handleContactPhoneChange = this.handleContactPhoneChange.bind(this);
    this.handleContactEmailChange = this.handleContactEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleVerifyPWChange = this.handleVerifyPWChange.bind(this);
  }

  handleCompanyChange(e) {
    this.setState({companyName: e.target.companyName});
  }
  handleAddressChange(e) {
    this.setState({companyAddress: e.target.companyAddress});
  }
  handleCompanyPhoneChange(e) {
    this.setState({companyPhone: e.target.companyPhone});
  }
  handleContactNameChange(e) {
    this.setState({contactName: e.target.contactName});
  }
  handleJobTitleChange(e) {
    this.setState({jobTitle: e.target.jobTitle});
  }
  handleContactPhoneChange(e) {
    this.setState({contactPhone: e.target.contactPhone});
  }
  handleContactEmailChange(e) {
    this.setState({contactEmail: e.target.contactEmail});
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
        <h1>Guiding Company SignUp</h1>
        <form>
          <input
            name="companyName"
            type="text"
            placeholder="Company Name"
            value={this.state.companyName}
            onChange={this.handleCompanyChange} />
          <input
            name="companyAddress"
            type="text"
            placeholder="Company Address"
            value={this.state.companyAddress}
            onChange={this.handleAddressChange} />
          <input
            name="companyPhone"
            type="number"
            placeholder="Company Phone"
            value={this.state.companyPhone}
            onChange={this.handleCompanyPhoneChange} />
          <input
            name="contactName"
            type="text"
            placeholder="Contact Name"
            value={this.state.contactName}
            onChange={this.handleContactNameChange} />
          <input
            name="jobTitle"
            type="text"
            placeholder="Jobt Title"
            value={this.state.jobTitle}
            onChange={this.handleJobTitleChange} />
          <input
            name="contactPhone"
            type="number"
            placeholder="Contact Phone"
            value={this.state.contactPhone}
            onChange={this.handleContactPhoneChange} />
          <input
            name="contactEmail"
            type="email"
            placeholder="E-mail"
            value={this.state.contactEmail}
            onChange={this.handleContactEmailChange} />
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

export default SignUpGC;
