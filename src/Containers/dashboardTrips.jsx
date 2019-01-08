import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
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
                      <div className="thumbox">
                        <div
                          style={
                            {
                              backgroundImage: `url(${trip.picture})`,
                              backgroundPosition: 'center',
                              backgroundRepeat: 'no-repeat',
                              backgroundSize: '100% 100%',
                              backgroundColor: 'white',
                            }
                          }
                          className="cardImg"
                        />
                        <div className="caption">
                          <h3>{trip.name}</h3>
                          <p>{`${trip.city}, ${trip.stateName}`}</p>
                          <div style={{ display: 'block' }}>
                            <StarRatingComponent
                              name={trip.company}
                              starColor="#3783B6"
                              emptyStarColor="#B5D994"
                            />
                          </div>
                          <Link to={`/trips/${trip.profileNum}`}><button className="removeButn">View Trip</button></Link>
                          <Link to={`/edit-trip/${trip.profileNum}`}><button className="removeButn">Edit Trip</button></Link>
                        </div>
                      </div>
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
