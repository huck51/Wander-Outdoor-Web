import React, { Component } from 'react';
import { Col, Row, Thumbnail } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';
import axios from 'axios';
import SearchBar from '../Components/searchbar';
import './Styles/results.css';


class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }

  componentDidMount() {
    const { search } = this.props.match.params;
    console.log(search);
    axios.get(`https://fierce-ridge-55021.herokuapp.com/results/${search}`)
      .then((result) => {
        this.setState({
          results: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>RESULTS</h1>
        <SearchBar />
        <div>
          <Row>
            <ul>
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
            </ul>
          </Row>
        </div>
      </div>
    );
  }
}

export default Results;
