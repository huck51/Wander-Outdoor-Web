import React from 'react';
import PropTypes from 'prop-types';
import './Styles/teamGuy.css';

const TeamGuy = ({ imgSrc, name, bio }) => (
  <div className="teamBox">
    <img
      src={imgSrc}
      alt="Team Member"
      className="employeePic"
    />
    <h3>{name}</h3>
    <hr />
    <p>{bio}</p>
  </div>
);

TeamGuy.defaultProps = {
  imgSrc: '',
  name: '',
  bio: '',
};

TeamGuy.propTypes = {
  imgSrc: PropTypes.string,
  name: PropTypes.string,
  bio: PropTypes.string,
};

export default TeamGuy;
