import React from 'react';
import { Col, Row } from 'react-bootstrap';
import DisplayCard from './displayCard';

const ProfileList = ({heading, listArr, emptyMsg, url, guide=false}) => {
  return (
    <Row className="mainCard">
      <Col xs={12} sm={12} md={12} lg={12}>
        <h2>{heading}</h2>
        <ul className="guideUl">
          <Row className="container">
            {
              listArr.length === 0 ?
                <li>{emptyMsg}</li> :
              listArr.map(item => <DisplayCard className="listCheck" item={item} Url={guide ? `/profile/${item.id}` : `/trips/${item._id}`} />)
            }
          </Row>
        </ul>
      </Col>
    </Row>
  );
};

export default ProfileList;
