import React, { Component } from 'react';
import {
  Row,
  Col,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Styles/companyDashboard.css';


class CompanyDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: 'state',
    };
  }

  render() {
    return (
      <div className="container auto">
        <h1>{`${this.props.match.params.company} Dashboard`}</h1>
        <ul className="guideUl">
          <Row className="container">
            <Col xs={12} sm={6} md={6} lg={6} className="dashCol">
              <Link to={`/dashboard/${this.props.match.params.companyCode}/trips`}>
                <li id="manageTrips" className="dashCard">
                  <h3 className="cardHeader">Manage Trips</h3>
                  <h1 className="cardIcon"><span><i class="far fa-compass"></i></span></h1>
                </li>
              </Link>
            </Col>
            <Col xs={12} sm={6} md={6} lg={6} className="dashCol">
              <Link to={`/dashboard/${this.props.match.params.companyCode}/guides`}>
                <li id="manageGuides" className="dashCard">
                  <h3 className="cardHeader">Manage Guides</h3>
                  <h1 className="cardIcon"><span><i class="fas fa-users"></i></span></h1>
                </li>
              </Link>
            </Col>
            <Col xs={12} sm={6} md={6} lg={6} className="dashCol">
              <Link to={`/dashboard/${this.props.match.params.companyCode}/edit-company`}>
                <li id="editCompanyDetails" className="dashCard">
                  <h3 className="cardHeader">Edit Company Details</h3>
                  <h1 className="cardIcon"><span><i class="fas fa-cogs"></i></span></h1>
                </li>
              </Link>
            </Col>
            <Col xs={12} sm={6} md={6} lg={6} className="dashCol">
              <Link to={`/dashboard/${this.props.match.params.companyCode}/company-account`}>
                <li id="companyAccountInfo" className="dashCard">
                  <h3 className="cardHeader">Company Account Info</h3>
                  <h1 className="cardIcon"><span><i class="fas fa-clipboard-list"></i></span></h1>
                </li>
              </Link>
            </Col>
          </Row>
        </ul>
      </div>
    );
  }
}

export default CompanyDashboard;
