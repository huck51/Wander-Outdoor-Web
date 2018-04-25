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
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const {
      companyName,
      companyAddress,
      companyPhone,
      contactName,
      jobTitle,
      contactPhone,
      contactEmail,
      password,
    } = this.state;
    const newCompany = {
      companyName,
      companyAddress,
      companyPhone,
      contactName,
      jobTitle,
      contactPhone,
      contactEmail,
      password,
    };
    this.setState({
      companyName: '',
      companyAddress: '',
      companyPhone: '',
      contactName: '',
      jobTitle: '',
      contactPhone: '',
      contactEmail: '',
      password: '',
      verifyPW: '',
    });
    axios.post('https://fierce-ridge-55021.herokuapp.com/signup/guiding-company', newCompany)
      .then(() => {
        window.location = '/guiding-companies';
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
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
            onChange={this.handleChange}
          />
          <input
            name="companyAddress"
            type="text"
            placeholder="Company Address"
            value={this.state.companyAddress}
            onChange={this.handleChange}
          />
          <input
            name="companyPhone"
            type="text"
            placeholder="Company Phone"
            value={this.state.companyPhone}
            onChange={this.handleChange}
          />
          <input
            name="contactName"
            type="text"
            placeholder="Contact Name"
            value={this.state.contactName}
            onChange={this.handleChange}
          />
          <input
            name="jobTitle"
            type="text"
            placeholder="Job Title"
            value={this.state.jobTitle}
            onChange={this.handleChange}
          />
          <input
            name="contactPhone"
            type="text"
            placeholder="Contact Phone"
            value={this.state.contactPhone}
            onChange={this.handleChange}
          />
          <input
            name="contactEmail"
            type="email"
            placeholder="E-mail"
            value={this.state.contactEmail}
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

export default SignUpGC;
