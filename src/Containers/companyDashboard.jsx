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
              <Link to={`/dashboard/${this.props.match.params.company}/trips`}><button>Manage Trips</button></Link>
            </Col>
            <Col md={6}>
              <Link to={`/dashboard/${this.props.match.params.company}/guides`}><button>Manage Guides</button></Link>
            </Col>
            <Col md={6}>
              <Link to={`/edit-company/${this.props.match.params.company}`}><button>Edit Company Details</button></Link>
            </Col>
            <Col md={6}>
              <Link to={`/company-account/${this.props.match.params.company}`}><button>Company Account Info</button></Link>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default CompanyDashboard;
