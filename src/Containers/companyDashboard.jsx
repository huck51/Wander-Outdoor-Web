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
        <h1>Company Dashboard</h1>
        <div className="container auto">
          <Row className="auto">
            <Col md={6}>
              <h3>Trips:</h3>
              <Link to="/company/add-trip"><button>+Add Trip</button></Link>
              <Link to="/company/remove-trip"><button>-Remove Trip</button></Link>
            </Col>
            <Col md={6}>
              <h3>Guides:</h3>
              <Link to="/company/add-guide"><button>+Add Guide</button></Link>
              <Link to="/company/remove-guide"><button>-Remove Guide</button></Link>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default CompanyDashboard;
