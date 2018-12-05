import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ReviewCard from './reviewCard';

const ReviewList = ({reviews}) => {
  return (
    <Row className="mainCard">
      <Col xs={12} sm={12} md={12} lg={12}>
        <h2>Reviews</h2>
        <ul className="guideUl">
          <Row className="container">
          {
            reviews.length === 0 ?
              <li>No reviews available. Be the first one!</li> :
            reviews.map((review, index) => <ReviewCard review={review} index={index} />)
          }
          </Row>
        </ul>
      </Col>
    </Row>
  );
};

export default ReviewList;
