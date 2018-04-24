import React, { Component } from 'react';
import {
  Row,
  Col,
} from 'react-bootstrap';
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
            <Col>
              <h3>Trips:</h3>
              <ul />
            </Col>
            <Col>
              <h3>Guides:</h3>
              <ul />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default CompanyDashboard;
