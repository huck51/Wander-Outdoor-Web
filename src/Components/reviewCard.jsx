import React from 'react';
import { Col } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';
import './Styles/reviewCard.css';

const ReviewCard = ({review, index}) => {
  return (
    <Col xs={12} sm={12} md={12} lg={12}>
      <li className="reviewListItem">
        <div>
          <StarRatingComponent
            name={review.author + index}
            starColor="#FCB803"
            emptyStarColor="#D1D1D1"
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
