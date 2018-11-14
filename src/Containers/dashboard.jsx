import React, { Component } from 'react';
import {
  Row,
  Col
} from 'react-bootstrap';
import { BounceLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';
import axios from 'axios';
import './Styles/dashboard.css';


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: [],
      loading: true,
    };
  }

  componentDidMount() {
    const id = localStorage.getItem('fierceIce');
    axios.post('https://fierce-ridge-55021.herokuapp.com/dashboard-companies', { id })
      .then((response) => {
        console.log(response);
        this.setState({
          companies: [...response.data],
          loading: false,
        });
      })
      .catch((err) => {
        console.error(err);
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <div className="container auto">
        <h1>Dashboard</h1>
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
                <Link to={`/subscription-details`}>
                  <li className="btnCard">
                    <h3 className="addNew">Setup Payment Plan</h3>
                    <h1 className="giantPlus">+</h1>
                  </li>
                </Link>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3}>
                <Link to={`/signup/guiding-company`}>
                  <li className="btnCard">
                    <h3 className="addNew">Register New Company</h3>
                    <h1 className="giantPlus">+</h1>
                  </li>
                </Link>
              </Col>
              {this.state.companies.map((company) => {
                return (
                  <Col xs={12} sm={6} md={4} lg={3}>
                    <li className="list">
                      <div className="thumbox">
                        <div
                          style={
                            {
                              backgroundImage: `url(${company.picture})`,
                              backgroundPosition: 'center',
                              backgroundRepeat: 'no-repeat',
                              backgroundSize: '100% 100%',
                              backgroundColor: 'white',
                            }
                          }
                          className="cardImg"
                        />
                        <div className="caption">
                          <h3>{company.companyName}</h3>
                          <p>{`${company.city}, ${company.stateName}`}</p>
                          <div style={{ display: 'block' }}>
                            <StarRatingComponent
                              name={company.companyName}
                              starColor="#3783B6"
                              emptyStarColor="#B5D994"
                              value={company.rating.rate}
                            />
                          </div>
                          <Link to={`/company/${company.companyCode}`}><button className="removeButn">View Company</button></Link>
                          <Link to={`/dashboard/${company.companyCode}/1/${company.companyName}`}><button className="removeButn">Manage</button></Link>
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

export default Dashboard;
