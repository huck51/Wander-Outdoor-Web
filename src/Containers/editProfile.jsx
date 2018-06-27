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
        canoeing: false,
        fishing: false,
        hiking: false,
        hunting: false,
        iceClimbing: false,
        mountainBiking: false,
        mountainClimbing: false,
        rafting: false,
        rockClimbing: false,
        surfing: false,
        other: false,
    };
  }

  componentDidMount() {
    const id = localStorage.getItem('fierceIce');
    console.log(id);
    axios.get('https://fierce-ridge-55021.herokuapp.com/find-user', id)
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
    const chexmix = ['canoeing', 'fishing', 'iceClimbing', 'hiking', 'hunting', 'mountainBiking', 'mountainClimbing', 'rafting', 'rockClimbing', 'surfing', 'other'];
    const chex = [];
    for (let i = 0; i < chexmix.length; i++) {
      if (this.state[chexmix[i]] === true) {
        chex.push(chexmix[i]);
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
                />
                <FieldGroup
                  name="lastName"
                  type="text"
                  label="Last Name"
                  placeholder="Last Name"
                  onChange={this.handleChange}
                  value={this.state.lastName}
                />
                <FieldGroup
                  name="DOB"
                  type="date"
                  label="Date of Birth"
                  placeholder=""
                  onChange={this.handleChange}
                  value={this.state.DOB}
                />
                <FieldGroup
                  name="email"
                  type="email"
                  label="Preferred Email"
                  placeholder="Ex: user@website.com"
                  onChange={this.handleChange}
                  value={this.state.email}
                />
                <FieldGroup
                  name="phone"
                  type="text"
                  label="Phone"
                  placeholder="Ex: 612-911-5555"
                  onChange={this.handleChange}
                  value={this.state.phone}
                />
                <FieldGroup
                  name="city"
                  type="text"
                  label="Current City"
                  placeholder="Current City"
                  onChange={this.handleChange}
                  value={this.state.city}
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
                  <Checkbox
                    inline
                    onClick={this.handleCheckBoxChange}
                    value={this.state.canoeing}
                    checked={this.state.canoeing}
                    name="canoeing">Canoeing</Checkbox>
                  <Checkbox
                    inline
                    onClick={this.handleCheckBoxChange}
                    value={this.state.fishing}
                    checked={this.state.fishing}
                    name="fishing">Fishing</Checkbox>
                  <Checkbox
                    inline
                    onClick={this.handleCheckBoxChange}
                    value={this.state.hiking}
                    checked={this.state.hiking}
                    name="hiking">Hiking</Checkbox>
                  <Checkbox
                    inline
                    onClick={this.handleCheckBoxChange}
                    value={this.state.hunting}
                    checked={this.state.hunting}
                    name="hunting">Hunting</Checkbox>
                  <Checkbox
                    inline
                    onClick={this.handleCheckBoxChange}
                    value={this.state.iceClimbing}
                    checked={this.state.iceClimbing}
                    name="iceClimbing">Ice Climbing</Checkbox>
                  <Checkbox
                    inline
                    onClick={this.handleCheckBoxChange}
                    value={this.state.mountainBiking}
                    checked={this.state.mountainBiking}
                    name="mountainBiking">Mountain Biking</Checkbox>
                  <Checkbox
                    inline
                    onClick={this.handleCheckBoxChange}
                    value={this.state.mountainClimbing}
                    checked={this.state.mountainClimbing}
                    name="mountainClimbing">Mountain Climbing</Checkbox>
                  <Checkbox
                    inline
                    onClick={this.handleCheckBoxChange}
                    value={this.state.rockClimbing}
                    checked={this.state.rockClimbing}
                    name="rockClimbing">Rock Climbing</Checkbox>
                  <Checkbox
                    inline
                    onClick={this.handleCheckBoxChange}
                    value={this.state.rafting}
                    checked={this.state.rafting}
                    name="rafting">Rafting</Checkbox>
                  <Checkbox
                    inline
                    onClick={this.handleCheckBoxChange}
                    value={this.state.surfing}
                    checked={this.state.surfing}
                    name="surfing">Surfing</Checkbox>
                  <Checkbox
                    inline
                    onClick={this.handleCheckBoxChange}
                    value={this.state.other}
                    checked={this.state.other}
                    name="other">Other</Checkbox>
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
