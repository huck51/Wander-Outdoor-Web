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
        <ul className="guideUl">
          <Row className="container">
            <Col xs={12} sm={6} md={4} lg={3}>
              <Link to={`/dashboard/${this.props.match.params.company}/trips`}>
                <li className="btnCard">
                  <h3 className="addNew">Manage Trips</h3>
                  <h1 className="giantPlus">+</h1>
                </li>
              </Link>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <Link to={`/dashboard/${this.props.match.params.company}/guides`}>
                <li className="btnCard">
                  <h3 className="addNew">Manage Guides</h3>
                  <h1 className="giantPlus">+</h1>
                </li>
              </Link>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <Link to={`dashboard/${this.props.match.params.company}/edit-company`}>
                <li className="btnCard">
                  <h3 className="addNew">Edit Company Details</h3>
                  <h1 className="giantPlus">+</h1>
                </li>
              </Link>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <Link to={`/dashboard/${this.props.match.params.company}/company-account`}>
                <li className="btnCard">
                  <h3 className="addNew">Company Account Info</h3>
                  <h1 className="giantPlus">+</h1>
                </li>
              </Link>
            </Col>
          </Row>
        </ul>
        <div className="container auto">
          <Row className="auto">
            <Col md={6}>
              <Link to={`/dashboard/${this.props.match.params.company}/trips`}><button>Manage Trips</button></Link>
            </Col>
            <Col md={6}>
              <Link to={`/dashboard/${this.props.match.params.company}/guides`}><button>Manage Guides</button></Link>
            </Col>
            <Col md={6}>
              <Link to={`dashboard/${this.props.match.params.company}/edit-company`}><button>Edit Company Details</button></Link>
            </Col>
            <Col md={6}>
              <Link to={`/dashboard/${this.props.match.params.company}/company-account`}><button>Company Account Info</button></Link>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default CompanyDashboard;
