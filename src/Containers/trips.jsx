import React, { Component } from 'react';
import { Row, Col, Thumbnail } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';
import StarRatingComponent from 'react-star-rating-component';
import axios from 'axios';
import './Styles/trips.css';


class Trips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: [],
      loading: true,
    };
  }

  componentDidMount() {
    axios.get('https://fierce-ridge-55021.herokuapp.com/trips')
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
        <h1>Trips</h1>
        <div className="boxOfCards">
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
              {this.state.trips.map((trip) => {
                return (
                  <Col xs={12} sm={6} md={4} lg={3}>
                    <li className="list">
                      <Thumbnail
                        src={trip.picture}
                        className="thumbox"
                      >
                        <h3>{trip.name}</h3>
                        <p>{trip.company}</p>
                        <p>{`${trip.city}, ${trip.stateName}`}</p>
                        <StarRatingComponent
                          name={`${trip.name}${trip.company}`}
                        />
                      <Link to={`/trips/${trip._id}`}><button className="removeButn">View Trip</button></Link>
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

export default Trips;