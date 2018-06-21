import React from 'react';
import PropTypes from 'prop-types';
import './Styles/teamGuy.css';

const TeamGuy = ({
  imgSrc,
  jobTitle,
  name,
  bio,
}) => (
  <div className="teamBox">
    <img
      src={imgSrc}
      alt="Team Member"
      className="employeePic"
    />
    <h3>{name}</h3>
    <h5>{jobTitle}</h5>
    <hr />
    <p>{bio}</p>
  </div>
);

TeamGuy.defaultProps = {
  imgSrc: '',
  jobTitle: '',
  name: '',
  bio: '',
};

TeamGuy.propTypes = {
  imgSrc: PropTypes.string,
  jobTitle: PropTypes.string,
  name: PropTypes.string,
  bio: PropTypes.string,
};

export default TeamGuy;
