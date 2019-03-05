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
import CustomCost from '../Components/customCost';
import FieldGroup from '../Components/fieldGroup';
import { activitiesArr, activitiesDict } from '../Data/activities';
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
      tripUrl: '',
      picture: null,
      transpo: false,
      lunch: false,
      gear: false,
      fullDay: false,
      halfDay: false,
      private: false,
      group: false,
      guides: [],
      addedGuides: [],
      activitiesDict: activitiesDict,
      uniqueCostArr: [],
      addOnDescription: '',
      addOnLabel: '',
      addOnPrice: '',
      addOnType: 'perPerson',
      perPerson: true,
      flatFee: false,
    };
  }

  componentDidMount() {
    axios.get(`https://fierce-ridge-55021.herokuapp.com/company/guides/${this.props.match.params.company}`)
      .then((response) => {
        const guides = [...response.data];
        const addedGuides = [];
        for (let i = 0; i < guides.length; i++) {
          addedGuides[i] = {
            selected: false,
            _id: guides[i]._id,
          };
        }
        this.setState({
          guides,
          addedGuides,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  createAddOn = (e) => {
    e.preventDefault();
    const { addOnDescription, addOnLabel, addOnPrice, uniqueCostArr } = this.state;
      const rand = (Math.random() * 1000000) + 1;
      const id = Math.round(Number(((addOnDescription.length + 1) * rand)));
    const newParameter = {
      addOnDescription,
      addOnLabel,
      addOnPrice,
      id
    };
    uniqueCostArr.push(newParameter);
    this.setState({
      uniqueCostArr,
      addOnDescription: '',
      addOnLabel: '',
      addOnPrice: '',
    });
  }

  selectGuide = (e) => {
    const addGuidesTemp = this.state.addedGuides;
    addGuidesTemp[e.target.id].selected = !addGuidesTemp[e.target.id].selected;
    this.setState({ addedGuides: addGuidesTemp });
  }

  handleActivities = (e) => {
    const bullsEye = e.target.name;
    const tempActDict = this.state.activitiesDict;
    tempActDict[bullsEye] = !tempActDict[bullsEye];
    this.setState({ activitiesDict: tempActDict });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleCheckBoxChange = (e) => {
    const bullsEye = e.target.name;
    this.setState({
      [bullsEye]: !this.state[bullsEye]
    });
  }

  handleDelete = (e) => {
    const target = e.target.value;
    console.log(target);
    const uCArr = this.state.uniqueCostArr;
    for (let i = 0; i < uCArr.length; i++) {
      if (uCArr[i].id == target) {
        uCArr.splice(i, 1);
        break;
      }
    }
    this.setState({
      uniqueCostArr: uCArr
    });
  }

  handleRadio = (e) => {
    const { perPerson, flatFee } = this.state;
    const t = e.target.name;
    console.log(t);
    const tValue = this.state[t];
    console.log(tValue);
    if (!tValue) {
      this.setState({
        perPerson: !perPerson,
        flatFee: !flatFee,
        costType: t
      });
    }
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
    const activities = [];
    for (let j = 0; j < activitiesArr.length; j++) {
      if (this.state.activitiesDict[activitiesArr[j].name]) {
        activities.push(activitiesArr[j].name);
      }
    }
    const {
      name,
      description,
      price,
      city,
      stateName,
      picture,
      addedGuides,
      tripUrl
    } = this.state;
    const guides = [];
    for (let j = 0; j < addedGuides.length; j++) {
      if (addedGuides[j].selected) {
        guides.push(addedGuides[j]._id);
      }
    }
    const newTrip = {
      name,
      description,
      city,
      stateName,
      price,
      picture,
      chex,
      companyCode: this.props.match.params.company,
      guides,
      tripUrl,
      activities,
    };
    this.setState({
      name: '',
      description: '',
      city: '',
      stateName: '',
      price: '',
      picture: null,
      tripUrl: '',
    });
    axios.post('https://fierce-ridge-55021.herokuapp.com/add-trip', newTrip)
      .then(() => {
        // eslint-disable-next-line no-undef
        window.location = `/dashboard/${this.props.match.params.company}/trips`;
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
              <CustomCost
                addOnDescription={this.state.addOnDescription}
                addOnLabel={this.state.addOnLabel}
                addOnPrice={this.state.addOnPrice}
                createAddOn={this.createAddOn}
                flatFee={this.state.flatFee}
                handleChange={this.handleChange}
                handleDelete={this.handleDelete}
                handleRadio={this.handleRadio}
                perPerson={this.state.perPerson}
                uniqueCostArr={this.state.uniqueCostArr}
              />
              <form onSubmit={this.handleSubmit} className="sizeControl">
                <FieldGroup
                  label="Trip Name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  required
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
                    required
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
                    required
                />
                <FieldGroup
                    label="Trip URL"
                    name="tripUrl"
                    type="text"
                    placeholder="www.yourwebsite/this-particular-trip"
                    value={this.state.tripUrl}
                    onChange={this.handleChange}
                />
                <FormGroup>
                  <ControlLabel>Sports/Activities Offered</ControlLabel>
                  <br />
                  {
                    activitiesArr.map((activity) => {
                      return (
                        <Checkbox
                          inline
                          onClick={this.handleActivities}
                          value={this.state.activitiesDict[activity.name]}
                          checked={this.state.activitiesDict[activity.name]}
                          name={activity.name}
                        >{activity.pretty}
                        </Checkbox>
                      );
                    })
                  }
                </FormGroup>
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
                <FormGroup>
                  <ControlLabel>Add Guides</ControlLabel>
                  <br />
                  {
                    this.state.guides.map((guide, index) => {
                      return (
                        <Checkbox
                          id={index}
                          onClick={this.selectGuide}
                          value={this.state.addedGuides[index].selected}
                          checked={this.state.addedGuides[index].selected}
                          name={guide.name}>{guide.name}</Checkbox>
                      );
                    })
                   }
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
