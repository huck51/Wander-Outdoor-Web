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
import './Styles/addTrip.css';


class AddTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      price: '',
      city: '',
      stateName: '',
      company: this.props.match.params.company,
      picture: null,
      transpo: false,
      lunch: false,
      gear: false,
      fullDay: false,
      halfDay: false,
      private: false,
      group: false,
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
    const chexmix = ['transpo', 'lunch', 'gear', 'fullDay', 'halfDay', 'private', 'group'];
    const chex = [];
    for (let i = 0; i < chexmix.length; i++) {
      if (this.state[chexmix[i]] === true) {
        chex.push(chexmix[i]);
      }
    }
    const {
      name,
      description,
      price,
      city,
      stateName,
      picture,
      company,
    } = this.state;
    const newTrip = {
      name,
      description,
      city,
      stateName,
      price,
      picture,
      chex,
      company,
    };
    this.setState({
      name: '',
      description: '',
      city: '',
      stateName: '',
      price: '',
      picture: null,
    });
    axios.post('https://fierce-ridge-55021.herokuapp.com/add-trip', newTrip)
      .then(() => {
        // eslint-disable-next-line no-undef
        window.location = `/dashboard/${this.state.company}`;
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
      <div>
        <h1>Add Trip</h1>
        <div className="container">
          <Row>
            <Col xs={12} sm={12} md={6} lg={8}>
              <form onSubmit={this.handleSubmit} className="sizeControl">
                <FieldGroup
                  label="Trip Name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
                <FieldGroup
                    label="City"
                    name="city"
                    type="text"
                    placeholder="City"
                    value={this.state.city}
                    onChange={this.handleChange}
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
                    label="Price"
                    name="price"
                    type="text"
                    placeholder="Ex: 100.50"
                    value={this.state.price}
                    onChange={this.handleChange}
                />
                <FormGroup>
                  <ControlLabel>Trip Details</ControlLabel>
                  <br />
                  <Checkbox
                    onClick={this.handleCheckBoxChange}
                    value={this.state.transpo}
                    checked={this.state.transpo}
                    name="transpo">Transportation Included</Checkbox>
                  <Checkbox
                    onClick={this.handleCheckBoxChange}
                    value={this.state.lunch}
                    checked={this.state.lunch}
                    name="lunch">Lunch Included</Checkbox>
                  <Checkbox
                    onClick={this.handleCheckBoxChange}
                    value={this.state.gear}
                    checked={this.state.gear}
                    name="gear">Gear Included</Checkbox>
                  <Checkbox
                    onClick={this.handleCheckBoxChange}
                    value={this.state.fullDay}
                    checked={this.state.fullDay}
                    name="fullDay">Full Day</Checkbox>
                  <Checkbox
                    onClick={this.handleCheckBoxChange}
                    value={this.state.halfDay}
                    checked={this.state.halfDay}
                    name="halfDay">Half Day</Checkbox>
                  <Checkbox
                    onClick={this.handleCheckBoxChange}
                    value={this.state.private}
                    checked={this.state.private}
                    name="private">Private</Checkbox>
                  <Checkbox
                    onClick={this.handleCheckBoxChange}
                    value={this.state.group}
                    checked={this.state.group}
                    name="group">Group</Checkbox>
                </FormGroup>
                <FormGroup controlId="formControlsTextarea">
                  <ControlLabel>Description</ControlLabel>
                  <FormControl
                    componentClass="textarea"
                    placeholder="Maximum of 250 words..."
                    value={this.state.description}
                    onChange={this.handleChange}
                    name="description"
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
                <h4>Preview Trip Picture</h4>
                  <img src={this.state.picture} alt="Trip Pic" className="profPic"/>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default AddTrip;
