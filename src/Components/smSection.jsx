import React from 'react';
import './Styles/smSection.css';

const SmSection = ({
  divClasses,
  h2Classes,
  heading,
  hrClasses,
  pClasses,
  text
}) => (
  <div className={divClasses}>
    <h2 className={h2Classes}>{heading}</h2>
    <hr className={hrClasses} />
    <p className={pClasses}>
      {text}
    </p>
  </div>
);

export default SmSection;
