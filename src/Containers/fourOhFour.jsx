import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/fourOhFour.css';


const FourOhFour = () => (
  <div>
    <h1>The page you are looking for does not exist.</h1>
    <button><Link to='/'>Return Home</Link></button>
  </div>
);

export default FourOhFour;
