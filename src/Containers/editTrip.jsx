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
import { activitiesArr, activitiesDict } from '../Data/activities';
import usa from '../Data/stateNames';
import './Styles/editTrip.css';


class EditTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      price: '',
      city: '',
      stateName: '',
      tripUrl: '',
      guides: [],
      addedGuides: [],
      guideDict: {},
      companyCode: '',
      picture: null,
      transpo: false,
      lunch: false,
      gear: false,
      fullDay: false,
      halfDay: false,
      privateTrip: false,
      group: false,
      activitiesDict: activitiesDict,
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`https://fierce-ridge-55021.herokuapp.com/trip/${id}`)
      .then((result) => {
        console.log(result.data);
        const {
          name,
          description,
          price,
          city,
          stateName,
          picture,
          chex,
          tripUrl,
          guides,
          companyCode,
          company,
          companyName,
          activities,
        } = result.data;

        const id = result.data._id;

        this.setState({
          name,
          description,
          price,
          city,
          stateName,
          picture,
          tripUrl,
          companyCode,
          companyName,
          id,
        });

        for (let i = 0; i < chex.length; i++) {
          this.setState({
            [chex[i]]: true
          });
        }

        const addedGuides = [];
        const guideDict = {};

        for (let j = 0; j < guides.length; j++) {
          addedGuides[j] = {
            selected: true,
            _id: guides[j]._id,
          };
          guideDict[guides[j]._id] = {
            value: guides[j]._id,
            status: 'initial',
          };
        }

        const compGuides = company.guides;
        console.log(`compGuides: ${compGuides}`);

        for (let k = 0; k < compGuides.length; k++) {
          if (guideDict[compGuides[k]._id]) {
            continue;
          } else {
            addedGuides.push({
              selected: false,
              _id: compGuides[k]._id,
            });
            guides.push(compGuides[k]);
          }
        }

        const tempActDict = activitiesDict;
        for (let l = 0; l < activities.length; l++) {
          tempActDict[activities[l]] = true;
        }

        this.setState({
          guides,
          addedGuides,
          guideDict,
          activitiesDict: tempActDict,
        });

      })
      .catch((err) => {
        console.log(err);
      });
  }

  selectGuide = (e) => {
    const addGuidesTemp = this.state.addedGuides;
    addGuidesTemp[e.target.id].selected = !addGuidesTemp[e.target.id].selected;
    this.setState({ addedGuides: addGuidesTemp });
  }

  compareGuides = (initialList, finalList) => {
    console.log('CompareGuides');
    for (let i = 0; i < finalList.length; i++) {
      const x = finalList[i];
      if (initialList[x]) {
        if (initialList[x].status === 'initial') {
          initialList[x].status = 'both';
        }
      } else {
        initialList[x] = {
          value: x,
          status: 'final',
        };
      }
    }
    const keys = Object.keys(initialList);
    const linkGuides = [];
    const unlinkGuides = [];
    for (let j = 0; j < keys.length; j++) {
      if (initialList[keys[j]].status === 'initial') {
        unlinkGuides.push(keys[j]);
      }
      if (initialList[keys[j]].status === 'final') {
        linkGuides.push(keys[j]);
      }
    }
    const linkedTrip = this.state.id;
    if (linkGuides.length > 0) {
      this.addTripToGuide(linkGuides, linkedTrip);
    }
    if (unlinkGuides.length > 0) {
      this.removeTripFromGuide(unlinkGuides, linkedTrip);
    }
  }

  addTripToGuide = (guidesToLink, tripToLink) => {
    console.log(`addTripToGuide`);
    axios.post(`https://fierce-ridge-55021.herokuapp.com/link-guide-to-trip`, { guidesToLink, tripToLink })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  removeTripFromGuide = (guidesToUnlink, tripToUnlink) => {
    console.log('removeTripFromGuide');
    axios.post(`https://fierce-ridge-55021.herokuapp.com/unlink-guide-from-trip`, { guidesToUnlink, tripToUnlink })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
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
      [e.target.name]: !this.state[bullsEye]
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const chexmix = ['transpo', 'lunch', 'gear', 'fullDay', 'halfDay', 'privateTrip', 'group'];
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
      companyName,
      tripUrl,
      addedGuides,
    } = this.state;

    const { id } = this.props.match.params;
    const guides = [];

    for (let j = 0; j < addedGuides.length; j++) {
      if (addedGuides[j].selected) {
        guides.push(addedGuides[j]._id);
      }
    }

    const activities = [];
    const ad = this.state.activitiesDict;
    for (let k = 0; k < activitiesArr.length; k++) {
      if (ad[activitiesArr[k].name]) {
        activities.push(activitiesArr[k].pretty);
      }
    }

    const initialGuides = this.state.guideDict;
    this.compareGuides(initialGuides, guides);

    const updateTrip = {
      name,
      description,
      city,
      stateName,
      price,
      picture,
      chex,
      companyName,
      tripUrl,
      id,
      guides,
      activities,
    };

    axios.post(`https://fierce-ridge-55021.herokuapp.com/edit-trip`, updateTrip)
      .then(() => {
        // eslint-disable-next-line no-undef
        window.location = `/dashboard/${this.state.companyCode}/trips`;
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
        <h1>Edit Trip</h1>
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
                <FieldGroup
                    label="Trip Link"
                    name="tripUrl"
                    type="text"
                    placeholder="www.yourwebsite/this-particular-trip"
                    value={this.state.tripUrl}
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
                    <option value={this.state.stateName}>{this.state.stateName}</option>
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
                    value={this.state.privateTrip}
                    checked={this.state.privateTrip}
                    name="privateTrip">Private</Checkbox>
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

export default EditTrip;
