import React, { Component } from 'react';
import {
  Button,
  Checkbox,
  Col,
  ControlLabel,
  FormControl,
  FormGroup,
  HelpBlock,
  Radio,
  Row,
 } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import FieldGroup from '../Components/fieldGroup';
import TwoOptModal from '../Components/twoOptModal';
import { activitiesArr, activitiesDict } from '../Data/activities';
import usa from '../Data/stateNames';
import './Styles/signUpGuides.css';


class SignUpGuides extends Component {
  constructor(props) {
    super(props);
    this.state = {
        firstName: '',
        lastName: '',
        DOB: '',
        email: '',
        phone: '',
        bio: '',
        roleGroup: 'guide',
        picture: null,
        companyCode: this.props.match.params.company,
        city: '',
        stateName: '',
        activitiesDict: JSON.parse(JSON.stringify(activitiesDict)),
        tripsAvailable: [],
        tripsSelected: {},
        show: false,
    };
  }

  componentDidMount() {
    axios.get(`https://fierce-ridge-55021.herokuapp.com/trips/${this.props.match.params.company}`)
    .then(result => {
      this.mapTripsToState(result.data);
    })
    .catch(error => {
      console.log(error);
    });
  }

  backToDash = () => {
    const company = this.state.companyCode;
    this.props.history.push(`/dashboard/${company}/guides`);
  }

  createAnother = () => {
    this.mapTripsToState(this.state.tripsAvailable);
    this.setState({
      firstName: '',
      lastName: '',
      DOB: '',
      email: '',
      phone: '',
      bio: '',
      city: '',
      stateName: '',
      show: false,
      picture: null,
      activitiesDict,
    });
  }

  mapTripsToState = (trips) => {
    const tripsSelected = {};
    for (let i = 0; i < trips.length; i++) {
      let tripName = trips[i].name;
      tripsSelected[tripName] = false;
    }
    this.setState({
      tripsAvailable: trips,
      tripsSelected,
    });
  }

  handleClick = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      explorer: !this.state.explorer,
      guide: !this.state.guide,
    });
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleCheckBoxChange = (e) => {
    const bullsEye = e.target.name.split('-');
    const tempDict = this.state[bullsEye[0]];
    tempDict[bullsEye[1]] = !tempDict[bullsEye[1]];
    this.setState({
      [bullsEye[0]]: tempDict
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const chex = [];
    const activities = [];
    for (let i = 0; i < activitiesArr.length; i++) {
      if (this.state.activitiesDict[activitiesArr[i].name]) {
        chex.push(activitiesArr[i].name);
        activities.push(activitiesArr[i].pretty);
      }
    }
    const {
      firstName,
      lastName,
      DOB,
      email,
      phone,
      bio,
      roleGroup,
      picture,
      companyCode,
      city,
      stateName,
      tripsSelected,
      tripsAvailable,
    } = this.state;
    const tripsFinal = [];
    const tripsAvLen = tripsAvailable.length;
    if (tripsAvLen) {
      for (let i = 0; i < tripsAvLen; i++) {
        const selected = tripsSelected[tripsAvailable[i].name];
        if (selected) {
          tripsFinal.push(tripsAvailable[i]._id);
        }
      }
    }
    const guideObject = {
      firstName,
      lastName,
      DOB,
      email,
      phone,
      bio,
      roleGroup,
      picture,
      companyCode,
      city,
      stateName,
      chex,
      activities,
      tripsQualified: tripsFinal,
    };
    axios.post('https://fierce-ridge-55021.herokuapp.com/guide-bot', guideObject)
      .then((response) => {
        console.log(response.data);
        return axios.post('https://fierce-ridge-55021.herokuapp.com/link-trip-to-guide', { trips: tripsFinal, guide: response.data });
        // this.props.history.push(`/profile/${response.data.id}`);
      })
      .then((response2) => {
        console.log(response2);
        this.setState({ show: true });
      })
      .catch((err) => {
        console.error(err);
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
          upload_preset: 'ypvspamw',
          cropping: true,
          cropping_aspect_ratio: 1.5,
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
      <div>
        <h1>CREATE NEW GUIDE</h1>
        <TwoOptModal
          b1={'Create another guide'}
          b2={'Back to Dashboard'}
          cb1={this.createAnother}
          cb2={this.backToDash}
          bodyText={'What would you like to do now?'}
          show={this.state.show}
          title={'Successfully Created Guide!'}
        />
        <div className="container">
          <Row>
            <Col xs={12} sm={12} md={6} lg={8}>
              <form onSubmit={this.handleSubmit}>
                <FieldGroup
                  name="firstName"
                  type="text"
                  label="First Name"
                  placeholder="First Name"
                  onChange={this.handleChange}
                  value={this.state.firstName}
                  autocomplete="given-name"
                />
                <FieldGroup
                  name="lastName"
                  type="text"
                  label="Last Name"
                  placeholder="Last Name"
                  onChange={this.handleChange}
                  value={this.state.lastName}
                  autocomplete="family-name"
                />
                <FieldGroup
                  name="DOB"
                  type="date"
                  label="Date of Birth"
                  placeholder=""
                  onChange={this.handleChange}
                  value={this.state.DOB}
                  autocomplete="bday"
                />
                <FieldGroup
                  name="email"
                  type="email"
                  label="Preferred Email"
                  placeholder="Ex: user@website.com"
                  onChange={this.handleChange}
                  value={this.state.email}
                  autocomplete="email"
                />
                <FieldGroup
                  name="phone"
                  type="text"
                  label="Phone"
                  placeholder="Ex: 612-911-5555"
                  onChange={this.handleChange}
                  value={this.state.phone}
                  autocomplete="tel-national"
                />
                <FieldGroup
                  name="city"
                  type="text"
                  label="Current City"
                  placeholder="Current City"
                  onChange={this.handleChange}
                  value={this.state.city}
                  autocomplete="address-level2"
                />
                <FormGroup controlId="formControlsSelect">
                  <ControlLabel>Current State</ControlLabel>
                  <FormControl
                    name="stateName"
                    componentClass="select"
                    placeholder="select"
                    className="textArea"
                    onChange={this.handleChange}>
                    <option value={this.state.stateName}>{this.state.stateName}</option>
                    { usa.map((stateName) => {
                      return <option value={stateName}>{stateName}</option>
                    })
                  }
                  </FormControl>
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Select trips they will guide</ControlLabel>
                  <br />
                  {
                    this.state.tripsAvailable.map((trip) => {
                      return (
                        <Checkbox
                          inline
                          onClick={this.handleCheckBoxChange}
                          value={this.state.tripsSelected[trip.name]}
                          checked={this.state.tripsSelected[trip.name]}
                          name={`tripsSelected-${trip.name}`}
                        >{trip.name}
                        </Checkbox>
                      );
                    })
                  }
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Sports/Activities</ControlLabel>
                  <br />
                  {
                    activitiesArr.map((sport) => {
                      return (
                        <Checkbox
                          inline
                          onClick={this.handleCheckBoxChange}
                          value={this.state.activitiesDict[sport.name]}
                          checked={this.state.activitiesDict[sport.name]}
                          name={`activitiesDict-${sport.name}`}
                        >{sport.pretty}
                        </Checkbox>
                      );
                    })
                  }
                </FormGroup>
                <FormGroup controlId="formControlsTextarea">
                  <ControlLabel>Bio</ControlLabel>
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
                className="epSaveBtn"
                type="submit"
                onClick={this.handleSubmit}
                >Save</button>
              </form>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4}>
              <div className="container">
                <button
                  className="uploadWidget"
                  onClick={this.uploadWidget}
                  >Upload Photo</button>
                <h4>Preview Profile Picture</h4>
                  <img src={this.state.picture} alt="Profile Pic" className="profPic"/>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default withRouter(SignUpGuides);
