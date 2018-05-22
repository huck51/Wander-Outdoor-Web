import React, { Component } from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Image,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Auth from '../auth';
import Logo from '../Images/WanderLogoWide.png';
import './Styles/navigationbar.css';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login() {
    const auth = new Auth();
    auth.login();
  }

  logout() {
    const auth = new Auth();
    auth.logout();
  }
  render() {
    if (this.props.loggedIn) {
      return (
        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand"><Image id="navlogo" src={Logo} responsive /></a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <li role="presentation" className="highlight">
                <Link to="/">Home</Link>
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
            </Nav>
            <Nav pullRight>
              <NavDropdown eventKey={3} title={this.props.user.username} id="basic-nav-dropdown">
                <li><Link to="/company/dashboard">Dashboard</Link></li>
                <MenuItem eventKey={3.2}>View Public Profile</MenuItem>
                <MenuItem eventKey={3.3}>Messages</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
              <li role="presentation" className="highlight">
                <button className="logBtn" onClick={this.logout}>Sign Out</button>
              </li>
            </Nav>
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
          <Nav>
            <li role="presentation" className="highlight">
              <Link to="/">Home</Link>
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
          </Nav>
          <Nav pullRight>
           <li role="presentation" className="highlight">
             <button className="logBtn" onClick={this.login}>Login</button>
           </li>
           <li role="presentation" className="highlight">
             <button className="logBtn" onClick={this.login}>Sign Up</button>
           </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavigationBar;
