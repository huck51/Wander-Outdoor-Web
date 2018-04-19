import React, { Component } from 'react';
import axios from 'axios';
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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCompanyChange(e) {
    this.setState({companyName: e.target.value});
  }
  handleAddressChange(e) {
    this.setState({companyAddress: e.target.value});
  }
  handleCompanyPhoneChange(e) {
    this.setState({companyPhone: e.target.value});
  }
  handleContactNameChange(e) {
    this.setState({contactName: e.target.value});
  }
  handleJobTitleChange(e) {
    this.setState({jobTitle: e.target.value});
  }
  handleContactPhoneChange(e) {
    this.setState({contactPhone: e.target.value});
  }
  handleContactEmailChange(e) {
    this.setState({contactEmail: e.target.value});
  }
  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }
  handleVerifyPWChange(e) {
    this.setState({verifyPW: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    const { companyName, companyAddress, companyPhone, contactName, jobTitle, contactPhone, contactEmail, password, verifyPW } = this.state;
    const newCompany = { companyName, companyAddress, companyPhone, contactName, jobTitle, contactPhone, contactEmail, password, verifyPW };
    this.setState({
      companyName: '',
      companyAddress: '',
      companyPhone: '',
      contactName: '',
      jobTitle: '',
      contactPhone: '',
      contactEmail: '',
      password: '',
      verifyPW: ''
    });
    axios.post('https://fierce-ridge-55021.herokuapp.com/signup/guiding-company', newCompany)
      .then(() => {
        window.location = '/';
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>Guiding Company SignUp</h1>
        <form onSubmit={this.handleSubmit}>
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
          <button type="submit" onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default SignUpGC;
