import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';
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
                      <h3>{trip.name}</h3>
                      <p>{trip.company}</p>
                      <p>{trip.location}</p>
                      <p>{trip.price}</p>
                      <Link to={`/trips/${trip.name}`}><button className="removeButn">View Trip</button></Link>
                      <button>Remove Trip</button>
                      <Link to={`/dashboard/:company/add-trip/:trip`}><button>Edit Trip</button></Link>
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
