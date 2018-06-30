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
import usa from '../Data/stateNames';
import './Styles/editCompany.css';


class EditCompany extends Component {
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

  componentDidMount() {
    const id = localStorage.getItem('fierceIce');
    // CHANGE URL BEFORE SERIOUS TESTING !!!!
    axios.get(`https://fierce-ridge-55021.herokuapp.com/company/${this.state.companyName}`, id)
    .then((response) => {
      console.log(response.data);
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
        bio,
        chex,
      } = response.data;
      this.setState({
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
      });
      for (let i = 0; i < chex.length; i++) {
        this.setState({
          [chex[i]]: true
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
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
    const chexmix = ['atv', 'backPacking', 'birdWatching', 'canoeing', 'deepSeaFish', 'dirtBiking', 'fishing', 'flyFishing', 'hiking', 'hunting', 'iceClimbing', 'kayaking', 'mountainBiking', 'mountaineering', 'offRoading', 'rafting', 'roadBiking', 'rockClimbing', 'scuba', 'skiing', 'snorkeling', 'snowboarding', 'surfing', 'other'];
    const chex = [];
    for (let i = 0; i < chexmix.length; i++) {
      if (this.state[chexmix[i]] === true) {
        chex.push(chexmix[i]);
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
    const sports = [{name: 'atv', pretty: 'ATV Off-Roading'}, {name: 'backPacking', pretty: 'Backpacking'}, {name: 'birdWatching', pretty: 'Bird Watching'}, {name: 'canoeing', pretty: 'Canoeing'}, {name: 'deepSeaFish', pretty: 'Deep Sea Fishing'}, {name: 'dirtBiking', pretty: 'Dirt Biking'}, {name: 'fishing', pretty: 'Fishing'}, {name: 'flyFishing', pretty: 'Fly Fishing'}, {name: 'hiking', pretty: 'Hiking'}, {name: 'hunting', pretty: 'Hunting'}, {name: 'iceClimbing', pretty: 'Ice Climbing'}, {name: 'kayaking', pretty: 'Kayaking'}, {name: 'mountainBiking', pretty: 'Mountain Biking'}, {name: 'mountaineering', pretty: 'Mountaineering'}, {name: 'offRoading', pretty: 'Off-Roading'}, {name: 'rafting', pretty: 'Rafting'}, {name: 'roadBiking', pretty: 'Road Biking'}, {name: 'rockClimbing', pretty: 'Rock Climbing'}, {name: 'scuba', pretty: 'Scuba Diving'}, {name: 'skiing', pretty: 'Skiing'}, {name: 'snorkeling', pretty: 'Snorkeling'}, {name: 'snowboarding', pretty: 'Snowboarding'}, {name: 'surfing', pretty: 'Surfing'}, {name: 'other', pretty: 'Other'}];
    return (
      <div className="container">
        <h1>Edit Company Details</h1>
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
                    sports.map((sport) => {
                      return (
                        <Checkbox
                          inline
                          onClick={this.handleCheckBoxChange}
                          value={this.state[sport.name]}
                          checked={this.state[sport.name]}
                          name={sport.name}
                        >{sport.pretty}
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

export default EditCompany;