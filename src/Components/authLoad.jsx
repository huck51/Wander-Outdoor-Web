import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { BounceLoader } from 'react-spinners';

class AuthLoad extends Component {
  componentDidMount() {
    this.props.auth.handleAuthentication()
      .then(() => {
        const profile = this.props.auth.getProfile();
        console.log(`Profile: ${profile}`);
        return;
      })
      .then(() => window.location = '/');
  }
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
