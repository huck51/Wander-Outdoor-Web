import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Auth from '../auth';
import './Styles/login.css';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    const user = { username, password };
    this.setState({
      username: '',
      password: '',
    });
    axios.post('https://fierce-ridge-55021.herokuapp.com/login', user)
      .then((response) => {
        if (response.data.loggedIn) {
          alert('Logged In!');
        } else {
          alert('Incorrect username or password');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  testAuth = () => {
    const auth = new Auth();
    auth.login();
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <input
              name="username"
              type="text"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          <button type="submit" onSubmit={this.handleSubmit}>Login</button>
          </form>
        </div>
        <button onClick={this.testAuth}>Test</button>
        <div className="pCenter">
          <p>Don't have an account? <Link to="/signup">Sign up!</Link></p>
        </div>
      </div>
    );
  }
}

export default Login;
