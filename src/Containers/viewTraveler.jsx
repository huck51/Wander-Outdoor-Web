import React, { Component } from 'react';
import {
  Col,
  ControlLabel,
  FormControl,
  FormGroup,
  Row,
} from 'react-bootstrap';
import axios from 'axios';
import './Styles/viewTraveler.css';


class ViewTraveler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      companyName: '',
      username: '',
      picture: '',
      bio: '',
      stats: [null],
      tripsQualified: [null],
      tripsCompleted: [null],
      certs: [null],
      activities: [null],
      rating: null,
      roleGroup: '',
      city: '',
      state: '',
      reviews: [null],
      newReview: '',
    };
    console.log(this.state.activities.length);
  }

  componentDidMount() {
    axios.get('https://fierce-ridge-55021.herokuapp.com/find-user', localStorage.getItem('fierceIce'))
      .then((response) => {
        console.log(response);
        const {
          firstName,
          lastName,
          companyName,
          username,
          picture,
          bio,
          stats,
          tripsQualified,
          tripsCompleted,
          certs,
          activities,
          rating,
          roleGroup,
          city,
          state,
          reviews,
        } = response.data;
        this.setState({
          firstName,
          lastName,
          companyName,
          username,
          picture,
          bio,
          stats,
          tripsQualified,
          tripsCompleted,
          certs,
          activities,
          rating,
          roleGroup,
          city,
          state,
          reviews,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.state.reviews.push(this.state.newReview);
    const axiosOptions = {
      fierceIce: localStorage.getItem('fierceIce'),
      reviews: this.state.reviews,
    };
    axios.post('url', axiosOptions)
    .then((response) => {
      console.log(response);
      this.setState({ newReview: '' });
    })
    .catch((err) => {
      console.error(err);
    });
  }

  render() {
    return (
      <div>
        <div className="contain">
          <Row className="mainCard">
            <Col xs={12} sm={12} md={4} lg={4}>
              <img src={this.state.picture} alt="Profile" />
            </Col>
            <Col xs={12} sm={12} md={8} lg={8}>
              <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                  <div className="">
                    <h2 className="basicInfo2">{this.state.firstName} {this.state.lastName}</h2>
                    <h4 className="basicInfo4">{this.state.roleGroup}</h4>
                    <h4 className="basicInfo4">{this.state.companyName}</h4>
                    <h4 className="basicInfo4">{this.state.city}, {this.state.state}</h4>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                  <div className="">
                    <hr className="cardBreak" />
                    <div className="contain">
                      <p className="bio">{this.state.bio}</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="mainCard">
            <Col xs={12} sm={12} md={12} lg={12}>
              <h2>Activities</h2>
              <ul>
                {
                  this.state.activities.length === 0 ?
                    <li>No activities</li> :
                  this.state.activities.map(activity => <li>{activity}</li>)
                }
              </ul>
            </Col>
          </Row>
          <Row className="mainCard">
            <Col xs={12} sm={12} md={12} lg={12}>
              <h2>Trips</h2>
              <ul>
                {
                  this.state.tripsQualified.length === 0 ?
                    <li>Not qualified to lead any trips.</li> :
                  this.state.tripsQualified.map(trip => <li>{trip}</li>)
                }
              </ul>
            </Col>
          </Row>
          <Row className="mainCard">
            <Col xs={12} sm={12} md={12} lg={12}>
              <h2>Past Trips</h2>
              <ul>
                {
                  this.state.tripsCompleted.length === 0 ?
                    <li>No trips completed</li> :
                  this.state.tripsCompleted.map(trip => <li>{trip}</li>)
                }
              </ul>
            </Col>
          </Row>
          <Row className="mainCard">
            <Col xs={12} sm={12} md={12} lg={12}>
              <h2>Certifications</h2>
              <ul>
                {
                  this.state.certs.length === 0 ?
                    <li>No certifications</li> :
                  this.state.certs.map(cert => <li>{cert}</li>)
                }
              </ul>
            </Col>
          </Row>
          <Row className="mainCard">
            <Col xs={12} sm={12} md={12} lg={12}>
              <h2>Reviews</h2>
              <ul>
                {
                  this.state.reviews.length === 0 ?
                    <li>No reviews. Be the first one!</li> :
                  this.state.reviews.map(review => <li>{review}</li>)
                }
              </ul>
              <div>
                <form>
                  <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>Write a review:</ControlLabel>
                    <FormControl
                      componentClass="textarea"
                      placeholder="Maximum of 250 words..."
                      value={this.state.newReview}
                      onChange={this.handleChange}
                      name="newReview"
                      className="textArea"
                      rows="10"
                    />
                  </FormGroup>
                  <button
                    type="submit"
                    className="epSaveBtn"
                    onClick={this.handleSubmit}
                  >Submit
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default ViewTraveler;
