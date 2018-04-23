import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import './Styles/signUp.css';


const SignUp = () => (
  <div>
    <h2>What kind of user are you?</h2>
    <div className="container">
      <Row>
        <Col md={4}>
          <Link to="/signup/traveler"><button className="funnelBtn">Traveler</button></Link>
        </Col>
        <Col md={4}>
          <Link to="/signup/guide"><button className="funnelBtn">Guide</button></Link>
        </Col>
        <Col md={4}>
          <Link to="/signup/guiding-company"><button className="funnelBtn">Guiding Company</button></Link>
        </Col>
      </Row>
    </div>
  </div>
);

export default SignUp;
