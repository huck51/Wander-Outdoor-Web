import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';

const DisplayCard = ({item}) => {
  const url = [];
  if (item.roleGroup === 'company') {
    item.name = item.companyName;
    url.push(`/company/${item.companyCode}`);
  }
  var bgSize = '100% 100%';
  if (item.roleGroup === 'guide') {
    bgSize = '100% auto';
    url.push(`/profile/${item.id}`);
  }
  if (item.roleGroup === 'trip') {
    url.push(`/trips/${item._id}`);
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
        <Link to={url[0]}>
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
