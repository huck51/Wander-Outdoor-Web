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
          <Col style={{ backgroundImage: imgSrc }} />
          <Col>
            <h2>{heading}</h2>
            <p>{text}</p>
          </Col>
        </Row>
      </div>
    );
  }
  return (
    <div>
      <Row>
        <Col>
          <h2>{heading}</h2>
          <p>{text}</p>
        </Col>
        <Col style={{ backgroundImage: imgSrc }} />
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
