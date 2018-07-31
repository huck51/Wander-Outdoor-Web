import React, { Component } from 'react';
import { Row, Col, Thumbnail } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';
import StarRatingComponent from 'react-star-rating-component';
import axios from 'axios';
import RequestModal from '../Components/requestModal';
import './Styles/guides.css';


class Guides extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guides: [],
      loading: true,
    };
  }

  componentDidMount() {
    axios.get('https://fierce-ridge-55021.herokuapp.com/guides')
      .then((result) => {
        // eslint-disable-next-line no-console
        console.log(result);
        this.setState({
          guides: [...result.data],
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
        <h1>GUIDES</h1>
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
              {this.state.guides.map((guide) => {
                return (
                  <Col xs={12} sm={6} md={4} lg={3}>
                    <li className="list">
                      <div className="thumbox">
                        <div
                          style={
                            {
                              backgroundImage: `url(${guide.picture})`,
                              backgroundPosition: 'center',
                              backgroundRepeat: 'no-repeat',
                              backgroundSize: '100% auto',
                              backgroundColor: 'white',
                            }
                          }
                          className="cardImg"
                        />
                        <div className="caption">
                          <h3>{`${guide.firstName} ${guide.lastName}`}</h3>
                          <p>{`${guide.city}, ${guide.state}`}</p>
                          <div style={{ display: 'block' }}>
                            <StarRatingComponent
                              name={guide.firstName + guide.lastName}
                              starColor="#3783B6"
                              emptyStarColor="#B5D994"
                            />
                          </div>
                          <Link to={`/profile/${guide.firstName}`}><button className="removeButn">View Guide</button></Link>
                          <div className="removeButn">
                            <RequestModal btnText="Request Guide" />
                          </div>
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

export default Guides;
