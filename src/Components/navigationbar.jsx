import React, { PureComponent } from 'react';
import {
  Navbar,
  NavDropdown,
  MenuItem,
  Image,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../Images/WanderLogoWide.png';
import { AuthUserContext } from './Session';
import './Styles/navigationbar.css';

class NavigationBar extends PureComponent {
  render() {
    const authed = this.props.auth.isAuthenticated();
    if (authed) {
      let profileNum = this.props.profile.profileNum;
      console.log(profileNum);
      if (profileNum == undefined) {
        const getProf = this.props.auth.getProfile();
        console.log(getProf);
        if (getProf == undefined) {
          // window.location = '/';
        } else {
          profileNum = getProf.profileNum;
          console.log(profileNum);
        }
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
              <AuthUserContext.Consumer>
                {
                  value => <li><Link to={`/profile/${value.authUser.profileNum}`}>View Profile</Link></li>
                }
              </AuthUserContext.Consumer>
              <MenuItem divider />
              <li><Link to="/dashboard">Dashboard</Link></li>
            </NavDropdown>
            <li role="presentation" className="highlight">
              <button className="logBtn" onClick={this.props.auth.logout}>Sign Out</button>
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
            <button className="logBtn" onClick={this.props.auth.login}>Login</button>
          </li>
          <li role="presentation" className="highlight pullR">
            <button className="logBtn" onClick={this.props.auth.login}>Sign Up</button>
          </li>
        </ul>
      </Navbar.Collapse>
    </Navbar>
  );
  }
}

export default NavigationBar;
