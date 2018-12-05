import React from 'react';
import { Col, Row } from 'react-bootstrap';
import DisplayCard from './displayCard';

const ProfileList = ({heading, listArr, emptyMsg}) => {
  return (
    <Row className="mainCard">
      <Col xs={12} sm={12} md={12} lg={12}>
        <h2>{heading}</h2>
        <ul className="guideUl">
          <Row className="container">
            {
              listArr.length === 0 ?
                <li>{emptyMsg}</li> :
              listArr.map(item => <DisplayCard className="listCheck" item={item} />)
            }
          </Row>
        </ul>
      </Col>
    </Row>
  );
};

export default ProfileList;
