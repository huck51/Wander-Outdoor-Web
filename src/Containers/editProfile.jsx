import React, { Component } from 'react';
import {
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
        picture: '',
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
          roleGroup,
          picture
        } = response.data;
        /*
        const reader = new FileReader();
        reader.onloadend = () => {
          this.setState({
            firstName,
            lastName,
            DOB,
            email,
            phone,
            roleGroup,
            imageFile: reader.result,
          });
          */
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

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      DOB,
      email,
      phone,
      roleGroup,
      picture
    } = this.state;
    const updateObject = {
      firstName,
      lastName,
      DOB,
      email,
      phone,
      roleGroup,
      picture,
      id: localStorage.getItem('fierceIce')
    };
    axios.post('https://fierce-ridge-55021.herokuapp.com/update-profile', updateObject)
      .then((response) => {
        const {
          firstName,
          lastName,
          DOB,
          email,
          phone,
          roleGroup,
          picture
        } = response.data;
        /*
        const reader = new FileReader();
        reader.onloadend = () => {
          this.setState({
            firstName,
            lastName,
            DOB,
            email,
            phone,
            roleGroup,
            imageFile: reader.result,
          });
          */
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
  /*
  fileChangeHandler = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    console.log(file);
    reader.onloadend = () => {
      this.setState({
        imageFile: reader.result,
        picture: file
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
  */
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
                <FieldGroup
                  name="firstName"
                  type="text"
                  label="First Name"
                  placeholder="First Name"
                  onChange={this.handleChange}
                  value={this.state.test1}
                />
                <FieldGroup
                  name="lastName"
                  type="text"
                  label="Last Name"
                  placeholder="Last Name"
                  onChange={this.handleChange}
                  value={this.state.test2}
                />
                <FieldGroup
                  name="DOB"
                  type="date"
                  label="Date of Birth"
                  placeholder=""
                  onChange={this.handleChange}
                  value={this.state.test3}
                />
                <FieldGroup
                  name="email"
                  type="email"
                  label="Preferred Email"
                  placeholder="Ex: user@website.com"
                  onChange={this.handleChange}
                  value={this.state.test1}
                />
                <FieldGroup
                  name="phone"
                  type="tel"
                  label="Phone"
                  placeholder="Ex: 612-911-5555"
                  onChange={this.handleChange}
                  value={this.state.test1}
                />
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
                  <img src={this.state.picture} className="profPic"/>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default EditProfile;
