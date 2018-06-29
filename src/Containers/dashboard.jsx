import React, { Component } from 'react';
import {
  Row,
  Col,
  Thumbnail,
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
        <h1>Company Dashboard</h1>
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
                      <Thumbnail
                        src={company.picture}
                        className="thumbox"
                      >
                        <h3>{company.companyName}</h3>
                        <p>{`${company.city}, ${company.stateName}`}</p>
                        <StarRatingComponent
                          name={company.companyName}
                        />
                        <Link to={`/company/${company.companyName}`}><button className="removeButn">View Company</button></Link>
                        <Link to={`/dashboard/${company.companyName}`}><button className="removeButn">Manage Company</button></Link>
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

export default Dashboard;
