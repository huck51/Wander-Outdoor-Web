import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import './Styles/authRedirect.css';

const AuthRedirect = ({auth}) => {
  return (
    <div className="backDrop">
      <Row>
        <Col xsOffset={1} xs={10} smOffset={1} sm={10} mdOffset={1} md={6} lgOffset={1} lg={6} >
          <div className="interface">
            <p className="lnOne">Sorry, that page is private...</p>
            <p className="lnTwo">Please sign in to continue. If you do not have an account sign up and create one!</p>
            <div className="btnBar">
              <Button className="reBtn" bsSize="large" onClick={auth.login}>Sign In</Button>
              <Button className="reBtn" bsSize="large" onClick={auth.login}>Sign Up</Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AuthRedirect;
