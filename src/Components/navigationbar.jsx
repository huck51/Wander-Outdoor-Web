import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Image,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../Images/WanderLogoWide.png';
import './Styles/navigationbar.css';

const NavigationBar = () => (
  <Navbar collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#brand"><Image id="navlogo" src={Logo} responsive /></a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <li role="presentation">
          <Link to="/">Home</Link>
        </li>
        <li role="presentation">
          <Link to="/guiding-companies">Guiding Companies</Link>
        </li>
        <li role="presentation">
          <Link to="/guides">Guides</Link>
        </li>
        <li role="presentation">
          <Link to="/about">About Us</Link>
        </li>
        <li role="presentation">
          <Link to="/contact">Contact Us</Link>
        </li>
        <NavDropdown eventKey={3} title="Profile" id="basic-nav-dropdown">
          <li><Link to="/company/dashboard">Dashboard</Link></li>
          <MenuItem eventKey={3.2}>View Public Profile</MenuItem>
          <MenuItem eventKey={3.3}>Messages</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <li role="presentation">
          <Link to="/signup">Sign Up</Link>
        </li>
        <li role="presentation">
          <Link to="/login">Login</Link>
        </li>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavigationBar;
