import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { BounceLoader } from 'react-spinners';

class AuthLoad extends Component {
  render() {
    return (
      <Row>
        <Col md={2} mdOffset={5}>
          <BounceLoader
            loading={true}
            size={75}
            color="rgb(55,131,182)"
          />
        </Col>
      </Row>
    );
  }
}

export default AuthLoad;
