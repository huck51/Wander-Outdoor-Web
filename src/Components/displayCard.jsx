import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';
import RequestModal from '../Components/requestModal';

const DisplayCard = ({item, Url}) => {
  if (item.roleGroup === 'company') {
    item.name = item.companyName;
  }
  var bgSize = '100% 100%';
  if (item.roleGroup === 'guide') {
    bgSize = '100% auto';
  }
  var price = '';
  var priceStyle = {
    display: 'none'
  }
  if (item.price) {
    price = item.price;
    priceStyle = {
      display: 'block'
    }
  }
  return (
    <Col xs={12} sm={6} md={4} lg={3}>
      <li className="list">
        <Link to={Url}>
        <div className="thumbox">
          <div
            style={
              {
                backgroundImage: `url(${item.picture})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: bgSize,
                backgroundColor: 'white',
              }
            }
            className="cardImg"
          />
          <div className="caption">
            <h3>{item.name}</h3>
            <p>{`${item.city}, ${item.stateName}`}</p>
            <div style={{ display: 'block' }}>
              <StarRatingComponent
                name={item.companyName}
                starColor="#3783B6"
                emptyStarColor="#B5D994"
                value={item.rating.rate}
              />
            </div>
            <p style={priceStyle}>{`$${price}`}</p>
          </div>
        </div>
      </Link>
      </li>
    </Col>
  );
};

export default DisplayCard;
