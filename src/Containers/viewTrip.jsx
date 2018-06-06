import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import './Styles/viewTrip.css';

const pic = 'https://res.cloudinary.com/wander-outdoor/image/upload/v1528176929/sf6xs4l7xkbr1a8nf4hu.jpg';

class ViewTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'TripName',
      company: 'TripCompany',
      city: 'St. Somewhere',
      stateName: 'Colorado',
      description: 'This is a super dope trip...and you should pay me money for it. But dont take my word for it; just ask Peyton Manning.',
      price: '100',
      guides: [],
      rating: 5,
      picture: '',
    }
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
                    <h2 className="basicInfo2">{this.state.name}</h2>
                    <h4 className="basicInfo4">{this.state.company}</h4>
                    <h4 className="basicInfo4">{this.state.companyName}</h4>
                    <h4 className="basicInfo4">{this.state.city}, {this.state.stateName}</h4>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                  <div className="">
                    <hr className="cardBreak" />
                    <div className="contain">
                      <p className="bio">{this.state.description}</p>
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
        </div>
      </div>
    );
  }
}

export default ViewTrip;
