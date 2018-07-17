import React, { Component } from 'react';
import { Row, Col, Thumbnail } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';
import StarRatingComponent from 'react-star-rating-component';
import axios from 'axios';
import './Styles/dashboardGuides.css';


class DashboardTrips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: [],
      loading: true,
    };
  }

  componentDidMount() {
    axios.get(`https://fierce-ridge-55021.herokuapp.com/trips/${this.props.match.params.company}`)
      .then((result) => {
        // eslint-disable-next-line no-console
        console.log(result);
        this.setState({
          trips: [...result.data],
          loading: false,
        });
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
        this.setState({
          loading: false,
        });
      });
  }

  render() {
    return (
      <div>
        <h1>DASHBOARD TRIPS</h1>
        <div>
          <Row>
            <Col md={2} mdOffset={5}>
              <BounceLoader
                loading={this.state.loading}
                size={75}
                color="rgb(55,131,182)"
              />
            </Col>
          </Row>
          <ul className="guideUl">
            <Row className="container">
              <Col xs={12} sm={6} md={4} lg={3}>
                <Link to={`/dashboard/${this.props.match.params.company}/add-trip`}>
                  <li className="btnCard">
                    <h3 className="addNew">Add New Trip</h3>
                    <h1 className="giantPlus">+</h1>
                  </li>
                </Link>
              </Col>
              {this.state.trips.map((trip) => {
                return (
                  <Col xs={12} sm={6} md={4} lg={3}>
                    <li className="list">
                      <Thumbnail
                        src={trip.picture}
                        className="thumbox"
                      >
                        <h3>{trip.company}</h3>
                        <p>{`${trip.city}, ${trip.stateName}`}</p>
                        <StarRatingComponent
                          name={trip.companyName}
                        />
                      <Link to={`/company/${trip.company}`}><button className="removeButn">View Trip</button></Link>
                      </Thumbnail>
                    </li>
                  </Col>
                );
              })}
            </Row>
          </ul>
        </div>
      </div>
    );
  }
}

export default DashboardTrips;
