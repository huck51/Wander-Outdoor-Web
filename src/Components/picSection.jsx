import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './Styles/picSection.css';

const PicSection = ({
  heading,
  imgSrc,
  picSide,
  text,
}) => {
  if (picSide === 'left') {
    return (
      <div>
        <Row>
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={6}
            className="picCol"
            style={{ backgroundImage: `url(${imgSrc})` }}
          />
          <Col xs={12} sm={12} md={6} lg={6}>
            <h2>{heading}</h2>
            <hr />
            <p>{text}</p>
          </Col>
        </Row>
      </div>
    );
  }
  return (
    <div>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6}>
          <h2>{heading}</h2>
          <hr />
          <p>{text}</p>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          style={{ backgroundImage: `url(${imgSrc})` }}
          className="picCol"
        />
      </Row>
    </div>
  );
};

PicSection.defaultProps = {
  heading: 'HEADING',
  imgSrc: '',
  picSide: 'left',
  text: 'description text',
};

PicSection.propTypes = {
  heading: PropTypes.string,
  imgSrc: PropTypes.string,
  picSide: PropTypes.string,
  text: PropTypes.string,
};

export default PicSection;
