import React, { Component } from 'react';
import './Styles/login.css';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
    this.handleUsernameOnChange = this.handleUsernameOnChange.bind(this);
    this.handlePasswordOnChange = this.handlePasswordOnChange.bind(this);
  }

  handleUsernameOnChange(e) {
    this.setState({
      username: e.target.value
    });
  }
  handlePasswordOnChange(e) {
    this.setState({
      password: e.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <div className="container">
          <form>
            <input
              name="username"
              type="text"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleUsernameOnChange} />
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handlePasswordOnChange} />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
