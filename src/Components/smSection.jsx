import React from 'react';
import {
  Col,
  Row
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import './Styles/smSection.css';
/*
const SmSection = ({
  divClasses,
  h2Classes,
  heading,
  hrClasses,
  pClasses,
  text,
}) => (
  <div className={divClasses}>
    <h2 className={h2Classes}>{heading}</h2>
    <hr className={hrClasses} />
    <p className={pClasses}>
      {text}
    </p>
  </div>
);
*/
const SmSection = ({
  divClasses,
  h2Classes,
  heading,
  hrClasses,
  pClasses,
  text,
}) => (
  <div className={divClasses}>
    <Row>
      <Col mdOffset={1} md={2}>
        <h2 className={h2Classes}>{heading}</h2>
      </Col>
      <Col md={8}>
        <p className={pClasses}>
          {text}
        </p>
      </Col>
    </Row>
  </div>
);

SmSection.defaultProps = {
  divClasses: '',
  h2Classes: '',
  heading: '',
  hrClasses: '',
  pClasses: '',
  text: '',
};

SmSection.propTypes = {
  divClasses: PropTypes.string,
  h2Classes: PropTypes.string,
  heading: PropTypes.string,
  hrClasses: PropTypes.string,
  pClasses: PropTypes.string,
  text: PropTypes.string,
};

export default SmSection;
