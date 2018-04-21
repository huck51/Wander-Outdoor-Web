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
        <NavItem eventKey={1} href="#">
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem eventKey={1} href="#">
          <Link to="/guiding-companies">Guiding Companies</Link>
        </NavItem>
        <NavItem eventKey={2} href="#">
          <Link to="/guides">Guides</Link>
        </NavItem>
        <NavItem eventKey={1} href="#">
          <Link to="/about">About Us</Link>
        </NavItem>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">
          <Link to="/signup">Sign Up</Link>
        </NavItem>
        <NavItem eventKey={2} href="#">
          <Link to="/login">Login</Link>
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavigationBar;
