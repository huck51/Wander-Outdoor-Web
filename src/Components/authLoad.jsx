import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';

class AuthLoad extends Component {
  componentDidMount() {
    this.props.auth.handleAuthentication()
      .then(async () => {
        const profile = this.props.auth.getProfile();
        console.log(profile);
        const synched = await this.props.auth.getWander(profile);
        console.log(synched);
        this.props.getAuth(synched);
        this.props.history.push('/');
        return;
      })
      .catch(error => {
        console.log(error)
        this.props.history.push('/');
      });
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

export default withRouter(AuthLoad);
