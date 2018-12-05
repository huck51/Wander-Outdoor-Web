import React from 'react';
import { Col, Row } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';
import RequestModal from './requestModal';

const ProfTopSection = ({picture, name, url, companyName, city, stateName, rate, price, description, btnText, phone}) => {
  return (
    <Row className="mainCard">
      <Col xs={12} sm={12} md={4} lg={4}>
        <img src={picture} alt="Profile Pic" className="proPic"/>
      </Col>
      <Col xs={12} sm={12} md={8} lg={8}>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <div className="">
              <h2 className="basicInfo2">{name}</h2>
              <h4 className="basicInfo4" style={companyName ? {} : {display: 'none'}}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer">
                  {companyName}
                </a>
              </h4>
              <h4 className="basicInfo4">{city}, {stateName}
              </h4>
              <h4 className="basicInfo4" style={phone ? {} : {display: 'none'}}>{phone}</h4>
              <StarRatingComponent
                name={companyName}
                starColor="#FCB803"
                emptyStarColor="#D1D1D1"
                value={rate}
                className="starRating"
              />
            <h4 className="basicInfo4">{price ? `$${price}` : ''}</h4>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <div style={btnText ? {} : {display: 'none'}}>
              <RequestModal btnText={btnText} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <div className="">
              <hr className="cardBreak" />
              <div className="contain">
                <p className="bio">{description}</p>
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ProfTopSection;
