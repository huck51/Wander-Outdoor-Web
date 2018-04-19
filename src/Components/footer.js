import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './Styles/footer.css';


class Footer extends Component {

  render() {
    return (
      <div className="footer container">
        <Row>
          <Col md={6}>
            <Row>
              <Col md={12} className="lefty">
                <a>©️ 2016 Wander Outdoor LLC</a>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="lefty">
                <a>Founded in Boulder, Colorado 2015</a>
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
  }
}

export default Footer;
