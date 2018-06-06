import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';
import './Styles/viewCompany.css';


class ViewCompany extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: '',
      streetAddress: '',
      city: '',
      stateName: '',
      zipCode: '',
      companyPhone: '',
      guides: [],
      trips: [],
      bio: '',
      locations: [],
      permits: [],
      rating: null,
      activities: [],
      picture: '',
    };
  }
  componentDidMount() {
    axios.get(`https://fierce-ridge-55021.herokuapp.com/company/${this.props.match.params.companyName}`)
      .then((response) => {
        const {
          companyName,
          streetAddress,
          city,
          stateName,
          zipCode,
          companyPhone,
          guides,
          trips,
          bio,
          locations,
          permits,
          rating,
          activities,
          picture,
        } = response.data;
        this.setState({
          companyName,
          streetAddress,
          city,
          stateName,
          zipCode,
          companyPhone,
          guides,
          trips,
          bio,
          locations,
          permits,
          rating,
          activities,
          picture,
        });
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
  }

  render() {
    return (
      <div>
        <div className="contain">
          <Row className="mainCard">
            <Col xs={12} sm={12} md={4} lg={4}>
              <img src={this.state.picture} alt="Profile Pic" />
            </Col>
            <Col xs={12} sm={12} md={8} lg={8}>
              <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                  <div className="">
                    <h2 className="basicInfo2">{this.state.companyName}</h2>
                    <h4 className="basicInfo4">{this.state.companyPhone}</h4>
                    <h4 className="basicInfo4">{this.state.city}, {this.state.stateName}</h4>
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
              <h2>Guides</h2>
              <ul>
                {
                  this.state.guides.length === 0 ?
                    <li>No guides available</li> :
                  this.state.guides.map(guide => <li>{guide}</li>)
                }
              </ul>
            </Col>
          </Row>
          <Row className="mainCard">
            <Col xs={12} sm={12} md={12} lg={12}>
              <h2>Trips</h2>
              <ul>
                {
                  this.state.trips.length === 0 ?
                    <li>No trips available</li> :
                  this.state.trips.map(trip => <li>{trip}</li>)
                }
              </ul>
            </Col>
          </Row>
          <Row className="mainCard">
            <Col xs={12} sm={12} md={12} lg={12}>
              <h2>Activities</h2>
              <ul>
                {
                  this.state.activities.length === 0 ?
                    <li>No activities available</li> :
                  this.state.activities.map(activity => <li>{activity}</li>)
                }
              </ul>
            </Col>
          </Row>
          <Row className="mainCard">
            <Col xs={12} sm={12} md={12} lg={12}>
              <h2>Locations</h2>
              <ul>
                {
                  this.state.locations.length === 0 ?
                    <li>No alternate available</li> :
                  this.state.locations.map(location => <li>{location}</li>)
                }
              </ul>
            </Col>
          </Row>
          <Row className="mainCard">
            <Col xs={12} sm={12} md={12} lg={12}>
              <h2>Permits</h2>
              <ul>
                {
                  this.state.permits.length === 0 ?
                    <li>No permits available</li> :
                  this.state.permits.map(permit => <li>{permit}</li>)
                }
              </ul>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default ViewCompany;
