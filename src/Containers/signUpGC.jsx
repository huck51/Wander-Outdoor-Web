import React, { Component } from 'react';
import {
  Checkbox,
  Col,
  ControlLabel,
  FormControl,
  FormGroup,
  Row,
} from 'react-bootstrap';
import axios from 'axios';
import FieldGroup from '../Components/fieldGroup';
import activities from '../Data/activities';
import usa from '../Data/stateNames';
import './Styles/signUpGC.css';


class SignUpGC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: '',
      streetAddress: '',
      city: '',
      stateName: '',
      zipCode: '',
      companyPhone: '',
      contactName: '',
      jobTitle: '',
      contactPhone: '',
      contactEmail: '',
      picture: null,
      bio: '',
      atv: false,
      backPacking: false,
      birdWatching: false,
      canoeing: false,
      deepSeaFish: false,
      dirtBiking: false,
      fishing: false,
      flyFishing: false,
      hiking: false,
      hunting: false,
      iceClimbing: false,
      kayaking: false,
      mountainBiking: false,
      mountaineering: false,
      offRoading: false,
      rafting: false,
      roadBiking: false,
      rockClimbing: false,
      scuba: false,
      skiing: false,
      snorkeling: false,
      snowboarding: false,
      surfing: false,
      other: false,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleCheckBoxChange = (e) => {
    const bullsEye = e.target.name;
    this.setState({
      [e.target.name]: !this.state[bullsEye]
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const chex = [];
    for (let i = 0; i < activities.length; i++) {
      if (this.state[activities[i].name] === true) {
        chex.push(activities[i].name);
      }
    }
    const {
      companyName,
      streetAddress,
      city,
      stateName,
      zipCode,
      companyPhone,
      contactName,
      jobTitle,
      contactPhone,
      contactEmail,
      picture,
      bio
    } = this.state;
    const newCompany = {
      companyName,
      streetAddress,
      city,
      stateName,
      zipCode,
      companyPhone,
      contactName,
      jobTitle,
      contactPhone,
      contactEmail,
      picture,
      bio,
      chex,
      owner: localStorage.getItem('fierceIce'),
    };
    this.setState({
      companyName: '',
      streetAddress: '',
      city: '',
      stateName: '',
      zipCode: '',
      companyPhone: '',
      contactName: '',
      jobTitle: '',
      contactPhone: '',
      contactEmail: '',
      picture: '',
      bio: ''
    });
    axios.post('https://fierce-ridge-55021.herokuapp.com/signup/guiding-company', newCompany)
      .then(() => {
        window.location = '/dashboard';
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }

  uploadWidget = () => {
    const cloudData = {
      paramsToSign: {
        eager: 'w_400,h_300,c_pad|w_260,h_200,c_crop',
        public_id: 'userImage',
      }
    }
    axios.post('https://fierce-ridge-55021.herokuapp.com/cloudinary', cloudData)
      .then((response) => {
        console.log(response.data);
        const widgetOptions = {
          cloud_name: 'wander-outdoor',
          signature: response.data,
          upload_preset: 'ypvspamw'
        };
        window.cloudinary.openUploadWidget(widgetOptions, (err, result) => {
          if (err) {
            console.log(err);
          }
          if (result) {
            console.log(result);
            this.setState({
              picture: result[0].secure_url,
            });
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
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
                  autocomplete="organization"
                />
                <FieldGroup
                  label="Street Address"
                  name="streetAddress"
                  type="text"
                  placeholder="Street Address"
                  value={this.state.streetAddress}
                  onChange={this.handleChange}
                  autocomplete="address-line1"
                />
                <FieldGroup
                  label="City"
                  name="city"
                  type="text"
                  placeholder="City"
                  value={this.state.city}
                  onChange={this.handleChange}
                  autocomplete="address-level2"
                />
                <FormGroup controlId="formControlsSelect">
                  <ControlLabel>State</ControlLabel>
                  <FormControl
                    name="stateName"
                    componentClass="select"
                    placeholder="select"
                    className="textArea"
                    onChange={this.handleChange}>
                    <option value={this.state.state}>{this.state.state}</option>
                    { usa.map((stateName) => {
                      return <option value={stateName}>{stateName}</option>
                    })
                  }
                  </FormControl>
                </FormGroup>
                <FieldGroup
                  label="Zip Code"
                  name="zipCode"
                  type="text"
                  placeholder="Zip Code"
                  value={this.state.zipCode}
                  onChange={this.handleChange}
                  autocomplete="postal-code"
                />
                <FieldGroup
                  label="Company Phone Number"
                  name="companyPhone"
                  type="text"
                  placeholder="Company Phone"
                  value={this.state.companyPhone}
                  onChange={this.handleChange}
                  autocomplete="tel-national"
                />
                <FieldGroup
                  label="Contact Name"
                  name="contactName"
                  type="text"
                  placeholder="Contact Name"
                  value={this.state.contactName}
                  onChange={this.handleChange}
                  autocomplete="name"
                />
                <FieldGroup
                  label="Job Title"
                  name="jobTitle"
                  type="text"
                  placeholder="Job Title"
                  value={this.state.jobTitle}
                  onChange={this.handleChange}
                  autocomplete="organization-title"
                />
                <FieldGroup
                  label="Contact Phone Number"
                  name="contactPhone"
                  type="text"
                  placeholder="Contact Phone"
                  value={this.state.contactPhone}
                  onChange={this.handleChange}
                  autocomplete="tel-national"
                />
                <FieldGroup
                  label="Contact Email"
                  name="contactEmail"
                  type="email"
                  placeholder="E-mail"
                  value={this.state.contactEmail}
                  onChange={this.handleChange}
                  autocomplete="email"
                />
                <FormGroup>
                  <ControlLabel>Sports/Activities Offered</ControlLabel>
                  <br />
                  {
                    activities.map((activity) => {
                      return (
                        <Checkbox
                          inline
                          onClick={this.handleCheckBoxChange}
                          value={this.state[activity.name]}
                          checked={this.state[activity.name]}
                          name={activity.name}
                        >{activity.pretty}
                        </Checkbox>
                      );
                    })
                  }
                </FormGroup>
                <FormGroup controlId="formControlsTextarea">
                  <ControlLabel>Company Bio</ControlLabel>
                  <FormControl
                    componentClass="textarea"
                    placeholder="Maximum of 250 words..."
                    value={this.state.bio}
                    onChange={this.handleChange}
                    name="bio"
                    className="textArea"
                    rows="10"
                  />
                </FormGroup>
                <button
                  type="submit"
                  onClick={this.handleSubmit}
                  className="epSaveBtn"
                >Submit</button>
              </form>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4}>
              <div className="container">
                <button
                  className="uploadWidget"
                  onClick={this.uploadWidget}
                >Upload Photo</button>
                <h4>Preview Logo/Company Photo</h4>
                  <img src={this.state.picture} alt="Logo" className="profPic"/>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default SignUpGC;
