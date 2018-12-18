import React from 'react';
import {
  Navbar,
  NavDropdown,
  MenuItem,
  Image,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../Images/WanderLogoWide.png';
import './Styles/navigationbar.css';

const NavigationBar = props => {
  if (props.user) {
    let profileNum = props.user.profileNum;
    console.log(profileNum);
    if (!profileNum) {
      props.current.getCurrentAuth();
    }
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand"><Image id="navlogo" src={Logo} responsive /></a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <ul className="nav navbar-nav">
            <li role="presentation" className="highlight">
              <Link to="/">Home</Link>
            </li>
            <li role="presentation" className="highlight">
              <Link to="/trips">Trips</Link>
            </li>
            <li role="presentation" className="highlight">
              <Link to="/guiding-companies">Guiding Companies</Link>
            </li>
            <li role="presentation" className="highlight">
              <Link to="/guides">Guides</Link>
            </li>
            <li role="presentation" className="highlight">
              <Link to="/about">About Us</Link>
            </li>
            <li role="presentation" className="highlight">
              <Link to="/contact">Contact Us</Link>
            </li>
            <NavDropdown eventKey={3} title="My Profile" id="basic-nav-dropdown">
              <li><Link to="/account-info">Account Info</Link></li>
              <li><Link to="/edit-profile">Edit Profile</Link></li>
              <li><Link to={`/profile/${profileNum}`}>View Profile</Link></li>
              <li><Link to="/inbox">Messages</Link></li>
              <MenuItem divider />
              <li><Link to="/dashboard">Dashboard</Link></li>
            </NavDropdown>
            <li role="presentation" className="highlight">
              <button className="logBtn" onClick={props.auth.logout}>Sign Out</button>
            </li>
          </ul>
        </Navbar.Collapse>
      </Navbar>
    );
  }
  return (
    <Navbar collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#brand"><Image id="navlogo" src={Logo} responsive /></a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <ul className="nav navbar-nav">
          <li role="presentation" className="highlight">
            <Link to="/">Home</Link>
          </li>
          <li role="presentation" className="highlight">
            <Link to="/trips">Trips</Link>
          </li>
          <li role="presentation" className="highlight">
            <Link to="/guiding-companies">Guiding Companies</Link>
          </li>
          <li role="presentation" className="highlight">
            <Link to="/guides">Guides</Link>
          </li>
          <li role="presentation" className="highlight">
            <Link to="/about">About Us</Link>
          </li>
          <li role="presentation" className="highlight">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li role="presentation" className="highlight pullR">
            <button className="logBtn" onClick={props.auth.login}>Login</button>
          </li>
          <li role="presentation" className="highlight pullR">
            <button className="logBtn" onClick={props.auth.login}>Sign Up</button>
          </li>
        </ul>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
