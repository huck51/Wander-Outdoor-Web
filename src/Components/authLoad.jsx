import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { CircleLoader } from 'react-spinners';

class AuthLoad extends Component {
  render() {
    return (
      <Row>
        <Col md={2} mdOffset={5}>
          <CircleLoader
            loading={true}
            size={75}
          />
        </Col>
      </Row>
    );
  }
}

export default AuthLoad;
