import React, { Component } from 'react';
import {
  Checkbox,
  Col,
  ControlLabel,
  FormControl,
  FormGroup,
  HelpBlock,
  Radio,
  Row,
 } from 'react-bootstrap';
import axios from 'axios';
import FieldGroup from '../Components/fieldGroup';
import { activitiesArr, activitiesDict } from '../Data/activities';
import usa from '../Data/stateNames';
import './Styles/editProfile.css';

const previewConfig = [null];


class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        firstName: '',
        lastName: '',
        DOB: '',
        email: '',
        phone: '',
        bio: '',
        roleGroup: 'explorer',
        explorer: true,
        guide: false,
        picture: null,
        companyCode: '',
        city: '',
        stateName: '',
        activitiesDict: activitiesDict,
    };
  }

  componentDidMount() {
    const id = props.auth.userProfile['https://wander-outdoor.com/uuid'];
    axios.post('https://fierce-ridge-55021.herokuapp.com/find-user', { id })
      .then((response) => {
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
          chex,
          activities,
        } = response.data;
        if (roleGroup === 'guide') {
          this.setState({
            roleGroup: 'guide',
            explorer: false,
            guide: true
          });
        } else {
          this.setState({
            roleGroup: 'explorer',
            explorer: true,
            guide: false
          });
        }
        const tempActDict = activitiesDict;
        for (let j = 0; j < activities.length; j++) {
          tempActDict[activities[j]] = true;
        }
        this.setState({
          firstName,
          lastName,
          DOB,
          email,
          phone,
          bio,
          picture,
          companyCode,
          city,
          stateName,
          activitiesDict: tempActDict,
        });
        for (let i = 0; i < chex.length; i++) {
          this.setState({
            [chex[i]]: true
          });
        }
          const configAmmo = {
            backgroundImage: `url(${this.state.picture})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '50em'
          }
          previewConfig[0] = configAmmo;
      })
      .catch((err) => {
        console.error(err);
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
    const bullsEye = e.target.name;
    const tempActDict = this.state.activitiesDict;
    tempActDict[bullsEye] = !tempActDict[bullsEye];
    this.setState({
      activitiesDict: tempActDict
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
    } = this.state;
    const updateObject = {
      firstName,
      lastName,
      DOB,
      email,
      phone,
      bio,
      roleGroup,
      picture,
      id: localStorage.getItem('fierceIce'),
      companyCode,
      city,
      stateName,
      chex,
      activities,
    };
    axios.post('https://fierce-ridge-55021.herokuapp.com/update-profile', updateObject)
      .then((response) => {
        window.location = `/profile/${response.data.id}`
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
        <h1>EDIT PROFILE</h1>
        <div className="container">
          <Row>
            <Col xs={12} sm={12} md={6} lg={8}>
              <form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Radio
                    onClick={this.handleClick}
                    value="guide"
                    name="roleGroup"
                    inline
                    checked={this.state.guide}
                    >Guide</Radio>
                  <Radio
                    onClick={this.handleClick}
                    value="explorer"
                    name="roleGroup"
                    inline
                    checked={this.state.explorer}
                    >Expolorer</Radio>
                  <HelpBlock>*Please only select "Guide" if you are a certified guide currently employed by a company</HelpBlock>
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Company Code</ControlLabel>
                  <FormControl
                    name="companyCode"
                    type="password"
                    placeholder="CompanyCode"
                    onChange={this.handleChange}
                    value={this.state.companyCode}
                    disabled={this.state.explorer}
                    className="textArea"
                  />
                  <HelpBlock>*This field is for guides only.</HelpBlock>
                </FormGroup>
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
                  <ControlLabel>Sports/Activities Offered</ControlLabel>
                  <br />
                  {
                    activitiesArr.map((sport) => {
                      return (
                        <Checkbox
                          inline
                          onClick={this.handleCheckBoxChange}
                          value={this.state.activitiesDict[sport.name]}
                          checked={this.state.activitiesDict[sport.name]}
                          name={sport.name}
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

export default EditProfile;
