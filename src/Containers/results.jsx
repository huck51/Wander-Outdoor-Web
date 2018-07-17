import React, { Component } from 'react';
import { Col, Row, Thumbnail } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';
import StarRatingComponent from 'react-star-rating-component';
import axios from 'axios';
import SearchBar from '../Components/searchbar';
import './Styles/results.css';


class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      loading: true,
      value: '',
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
                  if (result.roleGroup) {
                    return (
                      <Col xs={12} sm={6} md={4} lg={3}>
                        <li className="list">
                          <Thumbnail
                            src={result.picture}
                            className="thumbox"
                          >
                            <h3>{`${result.firstName} ${result.lastName}`}</h3>
                            <p>{`${result.city}, ${result.state}`}</p>
                            <StarRatingComponent
                              name={result.firstName+result.lastName}
                            />
                          <Link to={`/profile/${result.firstName}`}><button className="removeButn">View Company</button></Link>
                          </Thumbnail>
                        </li>
                      </Col>
                    );
                  }
                  return (
                    <Col xs={12} sm={6} md={4} lg={3}>
                      <li className="list">
                        <Thumbnail
                          src={result.picture}
                          className="thumbox"
                        >
                          <h3>{result.companyName}</h3>
                          <p>{`${result.city}, ${result.stateName}`}</p>
                          <StarRatingComponent
                            name={result.companyName}
                          />
                        <Link to={`/company/${result.companyName}`}><button className="removeButn">View Company</button></Link>
                        </Thumbnail>
                      </li>
                    </Col>
                  );
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
