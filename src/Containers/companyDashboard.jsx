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
      <div>
        <h1>Company Dashboard</h1>
        <div>
          <Row>
            <Col md={6}>
              <h3>Trips:</h3>
              <ul />
              <button><Link to="/company/add-trip">+Add Trip</Link></button>
            </Col>
            <Col md={6}>
              <h3>Guides:</h3>
              <ul />
              <button>+Add Guide</button>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default CompanyDashboard;
