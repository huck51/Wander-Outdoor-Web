import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './Styles/picSection.css';

const PicSection = ({
  colClass,
  heading,
  imgClass,
  imgSrc,
  picSide,
  text,
  textClass,
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
            className={imgClass}
            style={{ backgroundImage: `url(${imgSrc})` }}
          />
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={6}
            className={colClass}
          >
            <div className={textClass}>
              <h2>{heading}</h2>
              <hr />
              <p>{text}</p>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
  return (
    <div>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6} className={colClass}>
          <div className={textClass}>
            <h2>{heading}</h2>
            <hr />
            <p>{text}</p>
          </div>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          style={{ backgroundImage: `url(${imgSrc})` }}
          className={imgClass}
        />
      </Row>
    </div>
  );
};

PicSection.defaultProps = {
  colClass: '',
  heading: 'HEADING',
  imgClass: '',
  imgSrc: '',
  picSide: 'left',
  text: 'description text',
  textClass: '',
};

PicSection.propTypes = {
  colClass: PropTypes.string,
  heading: PropTypes.string,
  imgClass: PropTypes.string,
  imgSrc: PropTypes.string,
  picSide: PropTypes.string,
  text: PropTypes.string,
  textClass: PropTypes.string,
};

export default PicSection;
