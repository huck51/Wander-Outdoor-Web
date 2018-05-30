import React, { Component } from 'react';
import axios from 'axios';
import FieldGroup from '../Components/fieldGroup';
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
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <FieldGroup
              label="Company Name"
              name="companyName"
              type="text"
              placeholder="Company Name"
              value={this.state.companyName}
              onChange={this.handleChange}
            />
            <FieldGroup
              label="Company Address"
              name="companyAddress"
              type="text"
              placeholder="Company Address"
              value={this.state.companyAddress}
              onChange={this.handleChange}
            />
            <FieldGroup
              label="Company Phone Number"
              name="companyPhone"
              type="text"
              placeholder="Company Phone"
              value={this.state.companyPhone}
              onChange={this.handleChange}
            />
            <FieldGroup
              label="Contact Name"
              name="contactName"
              type="text"
              placeholder="Contact Name"
              value={this.state.contactName}
              onChange={this.handleChange}
            />
            <FieldGroup
              label="Job Title"
              name="jobTitle"
              type="text"
              placeholder="Job Title"
              value={this.state.jobTitle}
              onChange={this.handleChange}
            />
            <FieldGroup
              label="Contact Phone Number"
              name="contactPhone"
              type="text"
              placeholder="Contact Phone"
              value={this.state.contactPhone}
              onChange={this.handleChange}
            />
            <FieldGroup
              label="Contact Email"
              name="contactEmail"
              type="email"
              placeholder="E-mail"
              value={this.state.contactEmail}
              onChange={this.handleChange}
            />
            <button
              type="submit"
              onClick={this.handleSubmit}
              className="epSaveBtn"
            >Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUpGC;
