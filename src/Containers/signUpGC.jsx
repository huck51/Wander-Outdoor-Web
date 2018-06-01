import React, { Component } from 'react';
import { Col, Row, } from 'react-bootstrap';
import axios from 'axios';
import FieldGroup from '../Components/fieldGroup';
import './Styles/signUpGC.css';

const previewConfig = [null];

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
      imageFile: null,
      picture: '',
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
      imageFile
    } = this.state;
    const newCompany = {
      companyName,
      companyAddress,
      companyPhone,
      contactName,
      jobTitle,
      contactPhone,
      contactEmail,
      imageFile
    };
    this.setState({
      companyName: '',
      companyAddress: '',
      companyPhone: '',
      contactName: '',
      jobTitle: '',
      contactPhone: '',
      contactEmail: '',
      imageFile: null,
      picture: ''
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

  fileChangeHandler = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    console.log(file);
    reader.onloadend = () => {
      this.setState({
        imageFile: file,
        picture: reader.result
      });
      const configAmmo = {
        backgroundImage: `url(${this.state.picture})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '30em',
        width: '100%'
      }
      previewConfig[0] = configAmmo;
    }
    reader.readAsDataURL(file);
  }

  render() {
    return (
      <div className="container">
        <h1>Guiding Company SignUp</h1>
        <div className="container">
          <Row>
            <Col xs={12} sm={12} md={6} lg={8}>
              <form onSubmit={this.handleSubmit} className="sizeControl">
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
                <FieldGroup
                  label="Logo/Company Photo"
                  type="file"
                  onChange={this.fileChangeHandler}
                  name="picture"
                />
                <button
                  type="submit"
                  onClick={this.handleSubmit}
                  className="epSaveBtn"
                >Submit</button>
              </form>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4}>
              <div className="container">
                <h4>Preview Logo/Company Photo</h4>
                  <img src={this.state.picture} className="profPic"/>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default SignUpGC;
