import React from 'react';
import PropTypes from 'prop-types';
import './Styles/smSection.css';

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
