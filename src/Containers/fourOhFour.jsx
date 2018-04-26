import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/fourOhFour.css';


const FourOhFour = () => (
  <div className="container foOhFo">
    <h1>The page you are looking for does not exist.</h1>
    <Link to='/'><button className="butn">Return Home</button></Link>
  </div>
);

export default FourOhFour;
