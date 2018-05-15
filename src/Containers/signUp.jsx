import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import './Styles/signUp.css';


const SignUp = () => (
  <div>
    <h1>What kind of user are you?</h1>
    <div className="container">
      <Row>
        <Col md={4}>
          <Link to="/signup/traveler"><button className="funnelBtn travBtn"><span className="btnText"><h1><b>TRAVELER</b></h1></span></button></Link>
        </Col>
        <Col md={4}>
          <Link to="/signup/guide"><button className="funnelBtn guideBtn"><span className="btnText"><h1><b>GUIDE</b></h1></span></button></Link>
        </Col>
        <Col md={4}>
          <Link to="/signup/guiding-company"><button className="funnelBtn compBtn"><span className="btnText"><h1><b>GUDING COMPANY</b></h1></span></button></Link>
        </Col>
      </Row>
      <div className="pCenter">
        <p className="pCenter">Already have an account? <Link to="/login">Log in</Link></p>
      </div>
    </div>
  </div>
);

export default SignUp;
