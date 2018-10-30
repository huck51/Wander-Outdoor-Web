import React from 'react';
import { Col } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';

const ReviewCard = ({review, index}) => {
  return (
    <Col xs={12} sm={6} md={4} lg={3}>
      <li>
        <div>
          <StarRatingComponent
            name={review.author + index}
            starColor="#3783B6"
            emptyStarColor="#B5D994"
            value={review.rate}
            className="starRating"
            editing={false}
          />
        <p>{review.text}</p>
          <p>-{review.author}</p>
          <p>{review.date}</p>
        </div>
      </li>
    </Col>
  );
};

ReviewCard.defaultProps = {
  review: {
    author: '',
    rate: 5,
    text: '',
    date: '',
  },
  index: 1000,
};

export default ReviewCard;
