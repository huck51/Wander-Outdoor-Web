import React, { Component } from 'react';
import { Checkbox, Col, Row, Thumbnail } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';
import StarRatingComponent from 'react-star-rating-component';
import axios from 'axios';
import RequestModal from '../Components/requestModal';
import SearchBar from '../Components/searchbar';
import './Styles/results.css';


class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      loading: true,
      value: '',
      companies: true,
      guides: true,
      trips: true,
    };
  }

  componentDidMount() {
    const { search } = this.props.match.params;
    console.log(search);
    axios.get(`https://fierce-ridge-55021.herokuapp.com/results/${search}`)
      .then((result) => {
        this.setState({
          results: result.data,
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          loading: false,
        });
      });
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  handleCheckBoxChange = (e) => {
    const bullsEye = e.target.name;
    this.setState({
      [e.target.name]: !this.state[bullsEye]
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('hey');
    const search = this.state.value;
    this.setState({
      loading: true,
    });
    axios.get(`https://fierce-ridge-55021.herokuapp.com/results/${search}`)
      .then((result) => {
        this.setState({
          results: result.data,
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          loading: false,
        });
      });
  }

  render() {
    return (
      <div>
        <h1>RESULTS</h1>
        <form onSubmit={this.handleSubmit}>
          <SearchBar
            val={this.state.value}
            change={this.handleChange}
            submit={this.handleSubmit}
            />
        </form>
        <div className="checkFilter">
          <Checkbox
            inline
            value={this.state.companies}
            onClick={this.handleCheckBoxChange}
            checked={this.state.companies}
            name="companies"
          >Show Companies</Checkbox>
          <Checkbox
            inline
            value={this.state.guides}
            onClick={this.handleCheckBoxChange}
            checked={this.state.guides}
            name="guides"
          >Show Guides</Checkbox>
          <Checkbox
            inline
            value={this.state.trips}
            onClick={this.handleCheckBoxChange}
            checked={this.state.trips}
            name="trips"
          >Show Trips</Checkbox>
        </div>
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
              {
                this.state.results.map((result) => {
                  if (result.roleGroup === 'guide' && this.state.guides) {
                    return (
                      <Col xs={12} sm={6} md={4} lg={3}>
                        <li className="list">
                          <div className="thumbox">
                            <div style={ {
                              backgroundImage: `url(${result.picture})`,
                              backgroundPosition: 'center',
                              backgroundRepeat: 'no-repeat',
                              backgroundSize: '100% auto',
                              backgroundColor: 'white',
                            }
                            } className="cardImg"></div>
                            <div className="caption">
                              <h3>{`${result.firstName} ${result.lastName}`}</h3>
                              <p>{`${result.city}, ${result.state}`}</p>
                              <div style={ { display: 'block' } }>
                                <StarRatingComponent
                                  name={result.firstName+result.lastName}
                                  starColor={'#3783B6'}
                                  emptyStarColor={'#B5D994'}
                                />
                              </div>
                              <div className="removeButn">
                                <RequestModal btnText="Request Guide"/>
                              </div>
                              <Link to={`/profile/${result.firstName}`}><button className="removeButn">View Guide</button></Link>
                            </div>
                          </div>
                        </li>
                      </Col>
                    );
                  }
                  if (result.roleGroup === 'company' && this.state.companies) {
                    return (
                      <Col xs={12} sm={6} md={4} lg={3}>
                        <li className="list">
                          <div className="thumbox">
                            <div style={ {
                              backgroundImage: `url(${result.picture})`,
                              backgroundPosition: 'center',
                              backgroundRepeat: 'no-repeat',
                              backgroundSize: '100% 100%',
                              backgroundColor: 'white',
                            }
                            } className="cardImg"></div>
                            <div className="caption">
                              <h3>{result.companyName}</h3>
                              <p>{`${result.city}, ${result.stateName}`}</p>
                              <div style={ { display: 'block' } }>
                                <StarRatingComponent
                                  name={result.companyName}
                                  starColor={'#3783B6'}
                                  emptyStarColor={'#B5D994'}
                                />
                              </div>
                              <Link to={`/company/${result.companyName}`}><button className="removeButn">View Company</button></Link>
                            </div>
                          </div>
                        </li>
                      </Col>
                    );
                  }
                  if (result.roleGroup === 'trip' && this.state.trips) {
                    return (
                      <Col xs={12} sm={6} md={4} lg={3}>
                        <li className="list">
                          <div className="thumbox">
                            <div style={ {
                              backgroundImage: `url(${result.picture})`,
                              backgroundPosition: 'center',
                              backgroundRepeat: 'no-repeat',
                              backgroundSize: '100% 100%',
                              backgroundColor: 'white',
                            }
                            } className="cardImg"></div>
                            <div className="caption">
                              <h3>{result.name}</h3>
                              <p>{`${result.city}, ${result.stateName}`}</p>
                              <div style={ { display: 'block' } }>
                                <StarRatingComponent
                                  name={result.company}
                                  starColor={'#3783B6'}
                                  emptyStarColor={'#B5D994'}
                                />
                              </div>
                              <div className="removeButn">
                                <RequestModal btnText="Request Trip"/>
                              </div>
                              <Link to={`/trips/${result._id}`}><button className="removeButn">View Trip</button></Link>
                            </div>
                          </div>
                        </li>
                      </Col>
                    );
                  }
                })
              }
            </Row>
          </ul>
        </div>
      </div>
    );
  }
}

export default Results;
