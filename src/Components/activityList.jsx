import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ActivityList = ({activities}) => {
  return (
    <Row className="mainCard">
      <Col xs={12} sm={12} md={12} lg={12}>
        <h2>Sports / Activities</h2>
        <ul>
          {
            activities.length === 0 ?
              <li>No activities available</li> :
            activities.map(activity => <Link to={`/results/${activity}`}><li className="listCheck" >{activity}</li></Link>)
          }
        </ul>
      </Col>
    </Row>
  );
};

export default ActivityList;
