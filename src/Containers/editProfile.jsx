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
        state: '',
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
    console.log(id);
    axios.post('https://fierce-ridge-55021.herokuapp.com/find-user', {id})
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
          state,
          chex,
        } = response.data;
        let explorer = true;
        let guide = false;
        if (roleGroup === 'guide') {
          explorer = false;
          guide = true;
        }
        this.setState({
          firstName,
          lastName,
          DOB,
          email,
          phone,
          bio,
          roleGroup,
          explorer,
          guide,
          picture,
          companyCode,
          city,
          state,
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
    console.log(`Event.target ${e.target.name}`);
    this.setState({[e.target.name]: e.target.value});
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
        chex.push(chexmix[i].toLowerCase());
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
      state,
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
      state,
      chex,
    };
    axios.post('https://fierce-ridge-55021.herokuapp.com/update-profile', updateObject)
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
          state,
          chex,
        } = response.data;
        this.setState({
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
          state,
        });
        for (let i = 0; i < chex.length; i++) {
          this.setState({
            [chex[i]]: true
          });
        }
        alert('Save successful!');
        const configAmmo = {
          backgroundImage: `url(${this.state.picture})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '50em',
        }
        previewConfig[0] = configAmmo;
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
                    name="state"
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
