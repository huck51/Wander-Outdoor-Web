import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Styles/footer.css';


const Footer = () => (
  <div className="footer container">
    <Row>
      <Col md={6}>
        <Row>
          <Col md={12} className="lefty">
            <a href="http://wander-outdoor-temp.herokuapp.com/"><span role="img">©️</span> 2016 Wander Outdoor LLC</a>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="lefty">
            <a href="http://wander-outdoor-temp.herokuapp.com/">Founded in Boulder, Colorado 2015</a>
          </Col>
        </Row>
      </Col>
      <Col md={6}>
        <Row>
          <Col md={12}>
            <a href="https://www.facebook.com/wanderoutdoor.co/" target="_blank" rel="noopener noreferrer">Facebook</a>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <a href="https://www.instagram.com/wanderoutdoorllc/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <a href="https://www.wanderoutdoor.co/terms-and-conditions" target="_blank" rel="noopener noreferrer">Terms & Conditions</a>
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
);

export default Footer;
