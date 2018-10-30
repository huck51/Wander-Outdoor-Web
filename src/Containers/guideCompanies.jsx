import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';
import StarRatingComponent from 'react-star-rating-component';
import axios from 'axios';
import DisplayCard from '../Components/displayCard';
import './Styles/guideCompanies.css';


class GuideCompanies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: [],
      loading: true,
    };
  }

  componentDidMount() {
    axios.get('https://fierce-ridge-55021.herokuapp.com/guiding-companies')
      .then((result) => {
        this.setState({
          companies: [...result.data],
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
        <h1>GUIDING COMPANIES</h1>
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
              {this.state.companies.map((company) => {
                return (
                  <DisplayCard item={company} Url={`/company/${company.companyCode}`} />
                );
              })}
            </Row>
          </ul>
        </div>
      </div>
    );
  }
}

export default GuideCompanies;
